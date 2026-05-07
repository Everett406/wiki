# Node.js

## 简介

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

### HTTP 服务器

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("你好，世界！");
});

server.listen(3000, () => {
  console.log("服务器运行在 http://localhost:3000");
});
```

### Express 框架

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "你好，Express!" });
});

app.listen(3000, () => {
  console.log("服务器运行在 http://localhost:3000");
});
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
