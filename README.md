# Vue-MindEditor based on fex-team/kityminder-core

> 在[百度脑图](https://github.com/fex-team/kityminder-core)的基础上修改：
> - 改为Vue2组件实现，基于Webpack4打包
> - 删除图片、链接、备注的支持
> - 合并样式菜单到编辑菜单，菜单从原先的三个变为两个
> - 删除编辑菜单上的撤销、重做按钮，改为快捷键和鼠标右键支持
> - 删除多主题支持和打标签功能
> - 移除搜索功能
> - 文件存储置于本地localStorage（参见main_editor.vue），需要导出或者另存可以自行修改

## Build Setup

``` bash
# install npm dependencies
    npm install

# serve with hot reload at localhost:8088
    npm run dev

# build for production with minification
    npm run build

# License
    BSD 3-Clause (基于fex-team/kityminder-core，并非kityminder-editor)
```

### 最近比较忙，抽空我再更新一下代码和说明，建议大家自己先研究，加油！