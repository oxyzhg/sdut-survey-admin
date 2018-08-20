# 青春在线调查问卷后台管理系统

> 青春在线调查问卷后台管理系统起初是为了学工处每学期初对学生的思想调研，但随着后来校内研究生院、党委宣传部等联系想使用这个系统，并且当时系统界面不够好看，也不具有复用性，因此决定重构。现在系统参考问卷星、腾讯问卷等大型调查问卷系统，实现了在后台添加多个调查问卷并且同时向用户调研，题目页由原来的手动添加至数据库改为表单式提交，极大程度的减少了程序员与老师之间的“交流”，及其便利。

项目采用前后端分离的方式，前端展示数据，后端提供数据接口，前后端结合共同实现需求。

**技术依托**

- react
- react-router
- redux
- axios
- webpack
- laravel
- ...

## 使用方式

将代码下载到本地

```bash
$ git clone https://github.com/oxyzhg/sdut-survey-admin.git
```

进入项目目录

```bash
$ cd sdut-survey-admin
```

全局安装 yarn 包管理工具（有的话跳过）

```bash
$ npm install -g yarn
```

安装项目依赖

```bash
# 使用npm
$ npm i

# 或使用yarn
$ yarn
```

开启本地服务

```bash
$ yarn start
```

可在项目中按需求修改内容

修改完成后，打包应用

```bash
# 使用npm
$ npm build

# 或使用yarn
$ yarn build
```

将打包生成的 *build* 文件夹上传到服务器就可以了。

## 更新记录

2018-07-06

- `A` 创建项目

2018-07-20

- `A` 新增页面布局
- `A` 增加路由管理功能

2018-08-14

- `A` 增加了后台登录功能
- `A` 增加了动态创建问卷功能
- `A` 增加了历史问卷列表功能
- `T` 带更新问卷编辑功能、预览功能、结果分析功能、结果导出功能

2018-08-15

- `U` 重构了项目的结构
- `U` 更新了页面的布局