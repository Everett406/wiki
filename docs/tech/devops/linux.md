# Linux

## 常用命令

```bash
# 文件操作
ls -la          # 列出文件详情
cd /path        # 切换目录
mkdir -p dir    # 创建目录
cp -r src dst   # 复制
mv src dst      # 移动/重命名
rm -rf dir      # 删除

# 文本处理
grep "pattern" file    # 搜索
find /path -name "*.js" # 查找文件
cat file | head -n 10  # 查看前10行

# 系统管理
top / htop      # 进程监控
df -h           # 磁盘使用
free -h         # 内存使用
```

## Shell 脚本示例

```bash
#!/bin/bash

echo "开始部署..."

# 拉取最新代码
git pull origin main

# 安装依赖
npm install

# 构建
npm run build

echo "部署完成！"
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
