const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();



// 使用 CORS 中间件
app.use(cors());

// 提供静态文件
app.use(express.static(path.join(__dirname)));

// 定义一个简单的路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器，监听 3000 端口
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});