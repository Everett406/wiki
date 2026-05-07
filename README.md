# 我的知识库

基于 [VuePress](https://vuepress.vuejs.org/zh/) + [vuepress-theme-hope](https://theme-hope.vuejs.press/) 搭建的个人知识库，部署在 GitHub Pages。

## 🚀 快速开始

### 环境要求

- Node.js >= 20
- npm >= 8

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/your-username/my-wiki.git
cd my-wiki

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📁 项目结构

```
my-wiki/
├── .github/workflows/    # GitHub Actions 部署配置
├── docs/
│   ├── .vuepress/
│   │   └── config.ts     # VuePress 配置文件
│   ├── about/            # 关于页面
│   ├── tech/             # 技术笔记
│   │   ├── frontend/     # 前端开发
│   │   ├── backend/      # 后端开发
│   │   └── devops/       # DevOps
│   ├── notes/            # 学习笔记
│   │   ├── reading/      # 读书笔记
│   │   └── courses/      # 课程笔记
│   └── README.md         # 首页
├── package.json
└── .gitignore
```

## ✏️ 添加新内容

1. 在对应分类目录下创建 `.md` 文件
2. 在 `docs/.vuepress/config.ts` 中更新侧边栏配置
3. 提交并推送到 `main` 分支，GitHub Actions 会自动部署

## 📄 许可证

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
