JavaScript Karma Jasmine JQuery Test Demo
=========================================

如果在代码中使用了`window.$`，我们需要在`karma.conf.js`的`files`中，把jquery文件路径加上去。

```
npm install
npm run demo
```

根据我们在`karma.conf.js`中的配置，它会打开一个似乎什么也不做的浏览器:

![demo](./images/demo.jpg)

然后，它会把`files`中的文件都传过去，在那边运行完以后，把结果传回来。

