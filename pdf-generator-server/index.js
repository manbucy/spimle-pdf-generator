require('dotenv').config()
const Koa = require('koa');

const app = new Koa();

// 加载路由
const initRouter = require('./src/router/routers');
initRouter(app);

// 初始化监听
app.listen(8090, () => {
    console.log('pdf-generator-server running at 8090');
})

