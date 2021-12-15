# 课堂笔记

## 一、小程序简介

- 参考连接： https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%8E%E6%99%AE%E9%80%9A%E7%BD%91%E9%A1%B5%E5%BC%80%E5%8F%91%E7%9A%84%E5%8C%BA%E5%88%AB

## 二、注册小程序

1. 进入小程序的注册页
   - 注册地址： https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN

2. 按照要求进行注册(年龄低于18岁是不可以注册)
   - 填写账号信息
   - 邮箱激活
   - 信息登记
3. 注册完成之后，登录小程序的后台
   - 登录地址： https://mp.weixin.qq.com/
   - 小程序后台介绍

## 三、下载小程序开发工具

   - 小程序开发工具下载地址： https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html
   - 使用微信小程序开发工具创建小程序项目
   - 小程序开发工具界面的介绍
   - 如何使用其他的编辑开发小程序(vscode / webstorm)

## 四、小程序的目录介绍

   - 全局：当前所指定的配置/业务作用于所有页面
   - 局部：当前所指定的配置/业务作用于当前页面

   - app.json    对整个小程序进行配置
   - app.wxss    这个文件所设置的样式会作用于虽有页面
   - app.json    小程序的业务逻辑，也会作用于所有页面
   - index.json  只作用于当前页面
   - index.js    业务逻辑只作用于当前页面
   - index.wxss  css样式只作用于当前页面
   - ...

## 五、如何去创建小程序的页面以及配置页面路由

   - 创建小程序的页面的两种方式
     - 通过路由自动生成
     - 通过编辑器新增page进行创建
   - 页面路由配置
     - app.json文件里面的pages属性里面进行配置
     - pages里面的第一条路径就是我门默认要展示的页面

## 六、配置小程序的tabbar以及window窗口

## 七、小程序的wxml语法