
# Git分支及标签

::: warning Tips
- 本地分支要及时推送到远程
- 未合并到主干（master/main）的分支不可删除
- 合并分支需发起MR（Merge Request）
- 已合并到主干（master/main）的分支（有`merge`标记）可删除
:::

分支开发，主干发布

## 分支策略

*Branch Naming Conventions*

> xxx1：功能模块名；xxx2：姓名拼音（可以使用首字母）

<font color="red"><b>日常工作中，如果合并分支出现冲突，需要联系代码包的管理者进行冲突解决</b></font><br>
<font color="red"><b>日常工作中，不允许将 test 分支合并到其他分支</b></font>

- **master（新版本的gitlab是main）**

主分支，永远是可用的、稳定的、可直接发布的版本，所有新功能以这个分支新建功能开发分支，不能直接在该分支上开发。<font color="red">不允许将 test 分支直接合并到 master 分支</font>。

- **develop**

调试分支，该分支只做合并操作，主要用于前后端联调和代码评审，不能直接在该分支上开发

- **test**

测试分支，开发自测好的 feature 分支合并到这个分支，不能直接在该分支上开发。<font color="red">不允许在 test 分支上创建新的分支，不允许将 test 分支合并到 feature 分支或 hotfix 分支</font>。

- **feature-xxx1-xxx2-200513**

功能开发分支，在 master 上创建分支，以自己开发功能模块命名，功能测试正常后合并到 test 分支，**后端代码需要自测后合并到 develop 分支，便于前端集成调试**。

- **hotfix-xxx1-xxx2-200513**

紧急 bug 修复分支，项目上线之后可能会遇到一些需要紧急修复的 BUG，在 master 分支上创建 hotfix 分支，**尽量将已修复 BUG 的 hotfix 分支合并到 test 分支并提交测试人员验证**，验证完成后将 hotfix 分支合并到 develop 、master 分支（**如果业务有变更并正在调试或测试，只合并到 master 分支**）。

## 标签命名规范

基于语义化版本控制规范，格式为：主版本号.次版本号.修订号.构建号。
示例如下：
- v1.0.1.1
- v1.0.1.2
- v1.0.1.3
- v1.0.2.1