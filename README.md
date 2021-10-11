# yooofur-clog

## 简介

一个应用于yooofur内部项目的log轮子，是屑玖叁因为懒得反复写一堆console.log而制作的。

## 安装

````
npm i colour93/yooofur-clog
````

## 使用

````javascript
const clog = require('yooofur-clog');

clog.log("这是一条测试");
clog.info("INFO");
clog.warn("WARN");
clog.error("ERROR");
clog.custom('white', '[HAEDER]', "CUSTOM");
````

> ### 颜色列表
>
> - black
> - red
> - green
> - yellow
> - blue
> - magenta
> - cyan
> - white
> - gray
> - grey

## 没了

屑玖叁 2021.10.11