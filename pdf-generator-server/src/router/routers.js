const router = require('koa-router')();
const TestController = require('../controller/test');


module.exports = (app) => {
    router.get('/test/hello', TestController.hello);

    app.use(router.routes()).use(router.allowedMethods());
}

