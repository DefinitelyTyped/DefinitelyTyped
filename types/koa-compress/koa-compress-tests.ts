import Koa = require("koa");
import compress = require("koa-compress");

const app = new Koa();

app.use(compress({
    filter: (ctype) => {
        return /text/i.test(ctype)
    },
    threshold: 2048,
    defaultEncoding: 'gzip',
    gzip: {
      flush: require('zlib').Z_SYNC_FLUSH
    },
    deflate: {
      flush: require('zlib').Z_SYNC_FLUSH,
    },
    br: false // disable brotli
}));

app.listen(80)
