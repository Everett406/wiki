# JavaScript

## 基础概念

JavaScript 是一门动态类型的编程语言，广泛用于 Web 开发。

### 变量声明

```javascript
// ES6+
const name = "知识库"; // 常量
let count = 0;         // 变量
```

### 箭头函数

```javascript
const greet = (name) => `你好, ${name}!`;
console.log(greet("世界")); // 你好, 世界!
```

### 数组方法

```javascript
const fruits = ["苹果", "香蕉", "橙子"];

// map
const upperFruits = fruits.map(f => f.toUpperCase());

// filter
const longFruits = fruits.filter(f => f.length > 1);

// reduce
const totalLength = fruits.reduce((sum, f) => sum + f.length, 0);
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
