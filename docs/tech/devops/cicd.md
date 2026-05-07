# CI/CD

## 简介

CI/CD（持续集成/持续部署）是现代软件开发的核心实践。

## GitHub Actions 示例

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
      - run: npm test
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
