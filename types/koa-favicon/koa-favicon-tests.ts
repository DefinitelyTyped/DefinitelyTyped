import Koa = require("koa");
import favicon = require("koa-favicon");

const app = new Koa();

app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(favicon(__dirname + "/public/favicon.ico", {
    maxage: 1000,
    mime: "image/svg+xml",
}));
app.use(favicon(__dirname + "/public/favicon.ico", {
    maxage: 1000,
}));
app.use(favicon(__dirname + "/public/favicon.ico", {
    mime: "image/svg+xml",
}));

app.listen(80);
