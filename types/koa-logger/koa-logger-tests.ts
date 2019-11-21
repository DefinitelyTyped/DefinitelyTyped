import koa = require('koa');
import logger = require('koa-logger');

const app = new koa();
app.use(logger());
app.use(logger((str: string, args: object) => {
    console.log(str, args);
}));
app.use(logger({
    transporter: (str: string, args: object) => {
        console.log(str, args);
    }
}));
