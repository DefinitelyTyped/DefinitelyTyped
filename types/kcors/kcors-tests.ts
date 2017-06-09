import koa = require('koa');
import cors = require('kcors');

const app = new koa();
app.use(cors());
