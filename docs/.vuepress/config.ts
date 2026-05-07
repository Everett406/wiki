import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "zh-CN",
  title: "我的知识库",
  description: "个人知识管理与笔记",

  bundler: viteBundler(),

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],

  theme: hopeTheme({
    hostname: "https://Everett406.github.io/wiki",

    // 导航栏
    navbar: [
      { text: "首页", icon: "home", link: "/" },
      {
        text: "技术笔记",
        icon: "code",
        prefix: "/tech/",
        children: [
          { text: "前端开发", icon: "javascript", link: "frontend/" },
          { text: "后端开发", icon: "server", link: "backend/" },
          { text: "DevOps", icon: "cloud", link: "devops/" },
        ],
      },
      {
        text: "学习笔记",
        icon: "book",
        prefix: "/notes/",
        children: [
          { text: "读书笔记", icon: "read", link: "reading/" },
          { text: "课程笔记", icon: "graduation-cap", link: "courses/" },
        ],
      },
      { text: "关于", icon: "info", link: "/about/" },
    ],

    // 侧边栏
    sidebar: {
      "/tech/frontend/": [
        {
          text: "前端开发",
          icon: "javascript",
          children: [
            { text: "HTML & CSS", link: "/tech/frontend/html-css" },
            { text: "JavaScript", link: "/tech/frontend/javascript" },
            { text: "Vue.js", link: "/tech/frontend/vue" },
            { text: "React", link: "/tech/frontend/react" },
          ],
        },
      ],
      "/tech/backend/": [
        {
          text: "后端开发",
          icon: "server",
          children: [
            { text: "Node.js", link: "/tech/backend/nodejs" },
            { text: "Python", link: "/tech/backend/python" },
            { text: "数据库", link: "/tech/backend/database" },
          ],
        },
      ],
      "/tech/devops/": [
        {
          text: "DevOps",
          icon: "cloud",
          children: [
            { text: "Docker", link: "/tech/devops/docker" },
            { text: "CI/CD", link: "/tech/devops/cicd" },
            { text: "Linux", link: "/tech/devops/linux" },
          ],
        },
      ],
      "/notes/reading/": [
        {
          text: "读书笔记",
          icon: "read",
          children: [
            { text: "示例读书笔记", link: "/notes/reading/example" },
          ],
        },
      ],
      "/notes/courses/": [
        {
          text: "课程笔记",
          icon: "graduation-cap",
          children: [
            { text: "示例课程笔记", link: "/notes/courses/example" },
          ],
        },
      ],
    },

    // 页脚
    footer: "默认页脚内容 — 使用 VuePress Theme Hope 构建",

    // 博客配置（可选，如需博客功能请设为 true）
    plugins: {
      blog: true,
    },

    // 加密功能（可选）
    encrypt: {
      global: false,
    },

    // 搜索功能
    search: true,

    // 暗色模式支持
    darkmode: "toggle",

    // 主题色
    themeColor: "#2196f3",

    // 全局信息
    info: [
      {
        icon: "creative-commons",
        title: "版权声明",
        content: "本站内容采用 CC BY-NC-SA 4.0 协议。",
      },
    ],
  }),

  // 插件
  plugins: [],
});
