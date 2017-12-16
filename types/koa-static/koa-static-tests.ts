import * as Koa from "koa";
import serve = require("koa-static");

const app = new Koa();

app.use(serve('.', {
  index: false,
  defer: false,
  extensions: ['html'],
  setHeaders: (res, path, stats) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
    }
  }
}));

app.listen(80);
