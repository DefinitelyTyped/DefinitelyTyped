import * as express from "express";

import rewrite = require("express-urlrewrite");

declare const app: express.Application;

app.use(rewrite(/^\/i(\w+)/, "/items/$1"));

app.use(rewrite("/:src..:dst", "/commits/$1/to/$2"));
app.use(rewrite("/:src..:dst", "/commits/:src/to/:dst"));

app.use(rewrite("/js/*", "/public/assets/js/$1"));

app.use(rewrite("/file\\?param=:param", "/file/:param"));

app.use(rewrite("/path", "/anotherpath?param=some"));

app.get("/route/:var", rewrite("/rewritten/:var"));

declare const someMw: express.Handler;

app.get("/rewritten/:var", someMw);
