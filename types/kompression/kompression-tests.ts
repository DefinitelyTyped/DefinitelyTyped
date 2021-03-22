import Koa = require("koa");
import compress = require("kompression");

const app = new Koa();

app.use(
    compress()
);

app.use(
    compress({})
);

// based on README
app.use(
    compress({
        filter(contentType) {
            return /text/i.test(contentType);
        },
        threshold: 2048,
    })
);
