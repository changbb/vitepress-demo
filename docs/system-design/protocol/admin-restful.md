# 管理后台业务接口规范：

**分页、列表（all）、新增、删除、编辑、详情、移动、发布(取消发布)、置顶(取消置顶)**

| 后台接口名称必须包含 | 请求方法 | 路由规则                   | 注意 |
| ------------ | -------- | ------------------------ |--------|
| 分页         | GET      | `/admin/api/${model}s`     | ${model}是模块名称，如果是多个单词用中横线分割，如果模块名称，以s,x,sh,ch结尾的词，加es; 结尾的词如果有y，把y去掉，变成i，再加es |
| 列表         | GET      | `/admin/api/${model}/list` | 列表 比如搜索条件中下拉的列表，不带分页的列表 |
| 新增 | POST | `/admin/api/${model}` |新增|
| 删除 | DELETE | `/admin/api/${model}/${id}` |删除|
| 编辑 | PUT | `/admin/api/${model}/${id}` |编辑|
| 详情 | GET | `/admin/api/${model}/${id}` |详情|
| 移动 | POST | `/admin/api/${model}/move` |移动|
| 发布/取消发布 | POST | `/admin/api/${model}/{id}/released` |发布与取消发布|
| 置顶/取消置顶 | POST | `/admin/api/${model}/{id}/toped` |置顶与取消置顶|