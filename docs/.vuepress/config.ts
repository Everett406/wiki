import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: "zh-CN",
  title: "我的知识库",
  description: "个人知识管理与笔记",

  // 部署在 /wiki/ 子路径
  base: "/wiki/",

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
      {
        text: "长沙航院",
        icon: "school",
        prefix: "/school/cavtc/",
        children: [
          { text: "学校概况", icon: "info", link: "" },
          { text: "历史沿革", icon: "history", link: "history/" },
          {
            text: "二级学院",
            icon: "building",
            children: [
              { text: "航空机电学院", link: "colleges/jidian/" },
              { text: "航空电子学院", link: "colleges/dianzi/" },
              { text: "航空机械学院", link: "colleges/jixie/" },
              { text: "航空服务学院", link: "colleges/fuwu/" },
              { text: "军士学院", link: "colleges/junshi/" },
            ],
          },
          { text: "专业设置", icon: "book", link: "majors/" },
          { text: "招生信息", icon: "user", link: "admission/" },
          { text: "就业情况", icon: "briefcase", link: "employment/" },
          { text: "校园生活", icon: "coffee", link: "campus/" },
          { text: "实训资源", icon: "tool", link: "facilities/" },
        ],
      },
      { text: "关于", icon: "info", link: "/about/" },
    ],

    // 侧边栏
    sidebar: {
      // 技术笔记侧边栏
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
      // 学习笔记侧边栏
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
      // 长沙航院侧边栏
      "/school/cavtc/": [
        {
          text: "学校概况",
          icon: "info",
          children: [
            { text: "学校简介", link: "/school/cavtc/" },
          ],
        },
        {
          text: "历史沿革",
          icon: "history",
          children: [
            { text: "发展历程", link: "/school/cavtc/history/" },
          ],
        },
        {
          text: "二级学院",
          icon: "building",
          children: [
            { text: "航空机电设备维修学院", link: "/school/cavtc/colleges/jidian/" },
            { text: "航空电子设备维修学院", link: "/school/cavtc/colleges/dianzi/" },
            { text: "航空机械制造学院", link: "/school/cavtc/colleges/jixie/" },
            { text: "航空服务与管理学院", link: "/school/cavtc/colleges/fuwu/" },
            { text: "军士教育管理学院", link: "/school/cavtc/colleges/junshi/" },
          ],
        },
        {
          text: "专业设置",
          icon: "book",
          children: [
            { text: "专业总览", link: "/school/cavtc/majors/" },
          ],
        },
        {
          text: "招生信息",
          icon: "user",
          children: [
            { text: "招生章程", link: "/school/cavtc/admission/" },
          ],
        },
        {
          text: "就业情况",
          icon: "briefcase",
          children: [
            { text: "就业数据", link: "/school/cavtc/employment/" },
          ],
        },
        {
          text: "校园生活",
          icon: "coffee",
          children: [
            { text: "校园文化", link: "/school/cavtc/campus/" },
          ],
        },
        {
          text: "实训资源",
          icon: "tool",
          children: [
            { text: "实训基地", link: "/school/cavtc/facilities/" },
          ],
        },
      ],
    },

    // 页脚
    footer: "使用 VuePress Theme Hope 构建 | CC BY-NC-SA 4.0",

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
