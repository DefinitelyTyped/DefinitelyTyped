import Koa = require('koa');
import cors = require('@koa/cors');

const app = new Koa();
app.use(cors());
