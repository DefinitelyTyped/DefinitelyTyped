import koa = require('koa');
import cors = require('kcors');

const app = new koa();
app.use(cors());

const anotherApp = new koa();
anotherApp.use(cors({ allowMethods: null }));
