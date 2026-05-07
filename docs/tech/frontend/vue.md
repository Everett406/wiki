# Vue.js

## 简介

Vue.js 是一个渐进式 JavaScript 框架，用于构建用户界面。

### 基础示例

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="count++">点击次数: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("你好 Vue!");
const count = ref(0);
</script>
```

### 组合式 API

```javascript
import { ref, computed, onMounted } from "vue";

const count = ref(0);
const doubled = computed(() => count.value * 2);

onMounted(() => {
  console.log("组件已挂载");
});
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
