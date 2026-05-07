# Python

## 简介

Python 是一门简洁优雅的编程语言，广泛应用于 Web 开发、数据分析、AI 等领域。

### 基础语法

```python
# 变量
name = "知识库"
count = 42

# 列表推导式
squares = [x**2 for x in range(10)]

# 字典
person = {"name": "张三", "age": 25}
```

### Flask Web 框架

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return jsonify({"message": "你好，Flask!"})

if __name__ == "__main__":
    app.run(debug=True)
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
