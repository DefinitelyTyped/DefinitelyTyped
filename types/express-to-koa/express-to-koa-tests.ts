import * as Koa from 'koa';
import expressToKoa = require('express-to-koa');

const app = new Koa();

app.use(expressToKoa((req: Koa.Request, res: Koa.Response, next: () => Promise<any>): any => {
    console.log('express middleware');
    next();
}));
app.listen(3000);
