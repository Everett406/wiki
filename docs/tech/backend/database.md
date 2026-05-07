# 数据库

## 关系型数据库

### SQL 基础

```sql
-- 创建表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 查询
SELECT * FROM users WHERE name LIKE '%张%';

-- 插入
INSERT INTO users (name, email) VALUES ('张三', 'zhangsan@example.com');
```

## NoSQL

### MongoDB

```javascript
// 插入文档
db.users.insertOne({ name: "张三", age: 25 });

// 查询
db.users.find({ age: { $gte: 18 } });
```

::: tip 提示
这是一个示例页面，请替换为你自己的学习笔记内容。
:::
