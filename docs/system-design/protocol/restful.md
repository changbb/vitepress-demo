# RESTful API 设计实践

API 表达的是你的数据和你的数据使用者之间的契约

## 定义 Definitions

- Resource（资源）：一个对象的单独实例，如稿件，动态，评论
- HTTP：跨网络的通信协议
- Endpoint（端点）：这个API在服务器上的URL用于表达一个集合或资源
- Idempotent（幂等）：无边际效应，多次操作得到相同的结果

## 动词 Verbs

- GET (选择)：从服务器上获取一个具体的资源或者一个资源列表。
- POST （创建）： 在服务器上创建一个新的资源。
- PUT （更新）：以整体的方式更新服务器上的一个资源（或幂等操作）。
- PATCH （更新）：只更新服务器上一个资源的一个属性。
- DELETE （删除）：删除服务器上的一个资源。
- HEAD ： 获取一个资源的元数据，如数据的哈希值或最后的更新时间。
- OPTIONS：获取客户端能对资源做什么操作的信息。

:::tip 小提示
OPTIONS请求，后端接口响应状态建议为204
:::

## 断点 Endpoints

### 规范

- <font color="red">不允许使用大写</font>
- <font color="red">不允许使用下划线 _ </font>，使用中横杠 - 
- 使用复数

### 示例

```
https://api.example.com/v1/articles
https://api.example.com/v1/feeds
https://api.example.com/v1/comments
https://api.example.com/v1/boxes
https://api.example.com/v1/duties
```

:::danger 错误示例
https://domain/me/authApps
:::

## 版本化 Versioning

- 在URI中放版本信息：https://api.example.com/v1/vod/videos
- Accept Header：Accept: application/json; version=1
- 自定义 Header：X-Api-Version: 1

:::tip 小提示
- 主版本（v1）在路由上控制
- 小版本（v1.1.1）使用Accept Header或自定义 Header
:::

## 请求 Request

:::warning 提示
- URL Query Parameters 中的 key 值如果有多个单词使用驼峰方式拼接（首字母小写），<font color="red">废弃下划线（_）拼接的方式</font> 
- URL Query Parameters 中的 value 值如果有路由地址（包括 URL 或 URI），<font color="red">需采用十六进制加密</font>
- Request Body 中的 key 值如果有多个单词使用驼峰方式拼接（首字母小写）
- Request Body 如果是 JSON 格式的数据包，属性名必须是驼峰式，且为 ASCII 码字符串
:::

### HTTP Headers

**自定义头**

:::warning 提示
- 自定义头以大写的 X 开头，多个单词使用中横线 - 拼接，单词的首字母为大写
:::

- X-Authorization 基于JWT标准生成的用户令牌，登录成功后生成
- X-Device-Id 设备唯一标识
- X-Terminal 终端（App，Wap，WxOfficalAccount，WxMiniProgram）

:::tip X-Authorization
- 生成规则：基于JWT标准生成,每个用户都拥有自己独立的加解密钥，保障每个用户的jwt令牌的安全，生成的JWT令牌前缀增加"Bearor "。包含业务字段：userId用户id、userName用户昵称、ua浏览器User-Agent。
- 解密规则：获取请求头header的X-Authorization，md5 令牌，获取用户唯一的解密秘钥进行解密，校验当前请求的ua头是否包含登录时的ua头，如果不包含则认证失败。
:::

**POST请求 Content-Type**

- multipart/form-data：既可以上传文件等二进制数据，也可以上传表单键值对，只是最后会转化为一条信息
- x-www-form-urlencoded：只能上传键值对，且键值对都是间隔分开
- raw: 可以上传任意格式的文本，约定默认使用JSON（Content-Type: application/json）

### 签名规则

- 字段的位置：get和post请求都在url中
- reqeustBody有值的签名规则
  - post请求体json格式要求：只支持一级
  - post请求体生成字符串的算法：将json中kv值按照key的字母顺序升序排列，再把所有key=value（value需进行urlencode）以“&”字符连接起来；
  - 参与签名的kv值：postdata=post请求体通过算法生成字符串的md5值（<font color=red>**小写**</font>）
- 非业务参数
  - uri 接口地址中域名和问号之间的路由地址（<font color=red>**包括域名后面的斜杠**</font>，不参与业务参数发起请求，例如：/api/user/profile）
  - http_method 接口请求的动作（<font color=red>**大写**</font>，不参与业务参数发起请求，例如：GET）
  - nonce 随机值（ 毫秒级时间戳+8位随机码（a-z, A-Z, 0-9），例如：1609575455641noCJKVsQ ）
  - timestamp 秒级时间戳
  - signature 签名值
- 签名方式：在请求参数列表中，除去signature参数外,其他需要使用到的参数（包括非业务参数）皆是要签名的参数，同时要加上secretkey（secretkey对应的值分为多种情况：X-Terminal=App时为颁发的固定随机值；X-Terminal=Wap，X-Terminal=WxOfficalAccount，X-Terminal=WxMiniProgram时为nonce 随机值）作为签名参数其中的一个key；将签名参数按照字母顺序升序排列，再把所有key=value（value需进行urlencode）以“&”字符连接起来；将生成的字符串使用MD5加密生成签名结果（<font color=red>**小写**</font>）。（注：待加密字符串如果存在转义字符，需要去掉转义）

### 场景

- 导出

<font color=red>不允许使用 GET 请求</font>，采用模拟表单发起 POST 提交的方式处理，Content-Type 是默认的 x-www-form-urlencoded。

如果需要在 Header 头中加入用户态之类的校验，只能采用 XMLHttpRequest（XHR）或 Fetch方式发起 POST 请求

### 示例

```
GET /news/articles          #retrieve all article(ArticleController.List)
GET /news/articles/100      #retrieve a article(ArticleController.View)
POST /news/articles         #create a article(ArticleController.Create)
PUT /news/articles/100      #update a article(ArticleController.Update)
DELETE /news/articles/100   #delete a article(ArticleController.Delete)

PUT /news/comments/100/liked       #赞（Comment.Like）
DELETE /news/comments/100/liked    #取消赞（Comment.unlike）

PUT /news/articles/100/favorites       #收藏（Favorite.Delete）
DELETE /news/articles/100/favorites    #取消收藏（Favorite.Delete）

GET /news/articles/search    #搜索（Article.Search）
```

### Postman

:::tip 提示
Postman桌面版不存在跨域问题
:::

使用Postman模拟http的GET请求，截图如下：
![](/images/backend/system-design/restful/request_postman_get.png)
界面中点击code，可以看到各种语言的实现方法，如：cURL， Java OkHttp，PHP cURL，Nodejs Axios等

**cURL GET 示例**
```
curl -X GET \
'http://api-dev.demo.chinacici.com/v4/openapi/users/verifycode?mobile=***&code=0123&appid=410600501&timestamp=1550643338&nonce=8Modb3&signature=31a9d5ddd3ac0688c4332ff47991b25ae8a079fabb20b8235aef02b5936d1ba7%0A' \
-H 'cache-control: no-cache'
```

使用Postman模拟http的表单文件上传，截图如下：
![](/images/backend/system-design/restful/request_postman_post.png)

**cURL POST 示例**
```
curl -X POST \
  http://upload.chinacici.local/v4/avatars \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F client_id=320500 \
  -F 'content=@/C:/Users/pc/Pictures/Saved Pictures/0f4aab3121c111413c55abc517c5ff3949c1cebd.jpeg'
```

## 响应 Response

### 状态码 Status Codes

200 OK – [GET]
客户端向服务器请求数据，服务器成功找到它们

304 Not Modified - [GET]
资源没有被修改。可以使用缓存的版本

400 INVALID REQUEST – [POST/PUT/PATCH]
客户端向服务器提供了不正确的数据，服务器什么也没做

404 NOT FOUND – [*]
客户端引用了一个不存在的资源或集合，服务器什么也没做

500 INTERNAL SERVER ERROR – [*]
服务器发生内部错误，客户端无法得知结果，即便请求已经处理成功

### 响应体 Response Body

:::warning 约定
- JSON 格式的数据包体中 Key 值全部使用驼峰
- 后端提供的字段必须是参照需求输出给前端，不允许将数据库或缓存中的字段全部返回 
- 后端提供给 Native 端的可穷举字典数据必须有完整的 Key 和 Value（包括 icon）
- 后端提供给 Web 端的可穷举字典数据只提供 Code 值，由 Web 前端实现 Key 和 Value 的映射
:::

**示例1**

```
{
  code: 0,
  msg: "",
  timestamp: 1605510318,
  data: {
    totalCount: 100,
    pageCount: 5,
    currentPage: 1,
    perPage: 20,
    list: []
  }
}
```

**示例2**

```
{
  code: 0,
  msg: "",
  timestamp: 1605510318,
  data: {
    token: ""
  }
}
```

## 网页地址协议 URL Scheme

### http/https

示例：https://mobi.chinacici.com/news

:::tip 提示
URL 参数中如果有网页地址，Paramerter 值需替换成 **{AppAlias}_redirect_url=【原值的16进制】**
:::
  
### native（移动端原生路由）

示例：natvie://community?act=detail&cid=1

### miniProgram（微信小程序）

示例：miniProgram://<font color=green>**【小程序原始id】**</font>?{AppAlias}_redirect_url= <font color=green>**【小程序Path的16进制】**</font>

### thirdPartyApp（第三方App）

示例：thirdPartyApp://index?{AppAlias}_redirect_url= <font color=green>**【协议的JSON字符串转16进制】** </font>

:::tip 提示
跳转协议JSON构成：{"jump":"第三方或http/https跳转协议","a":"下载地址"}，http/https主要用于使用外部浏览器打开功能
:::

## 补充 Supplement

### User Agent

Android：{AppAlias}Defined(nt:Wifi) {AppAlias}APP(AP/1.0) {AppAlias}Client/1.0 (Linux; Android 10; HUAWEI KKG-AN00;  Build/1)

iOS：{AppAlias}Defined(nt:Wifi) {AppAlias}APP(AP/1.0) {AppAlias}Client/1.0 (Darwin; iOS 12.4.9; iPhone 6 Plus;  Build/1)
