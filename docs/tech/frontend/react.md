# React

## 简介

React 是一个用于构建用户界面的 JavaScript 库。

### 基础示例

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>点击次数: {count}</h1>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}
```

### Hooks

```javascript
import { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div>{data ? JSON.stringify(data) : "加载中..."}</div>;
}
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
