# Docker

## 简介

Docker 是一个开源的容器化平台。

### Dockerfile 示例

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main.js"]
```

### 常用命令

```bash
# 构建镜像
docker build -t my-app .

# 运行容器
docker run -d -p 3000:3000 --name my-app my-app

# 查看运行中的容器
docker ps

# 查看日志
docker logs my-app

# 停止容器
docker stop my-app
```

### Docker Compose

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: mydb
      POSTGRES_PASSWORD: secret
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
