import server = require("server");
import { get, post, del, error, sub, socket } from "server/router";

import {
    cookie,
    download,
    header,
    json,
    jsonp,
    redirect,
    render,
    send,
    status,
    type
} from "server/reply";

server([
    get("/log", ctx => {
        ctx.log.info("Logged message");
        return status(200).send("Look at the console.");
    }),
    get("/", ctx => "Hello, World!"),
    post("/", ctx => console.log(ctx.data)),
    del("/", ctx => ({ ok: true })),
    error("special", ctx => {
        console.log(ctx.error);
    }),
    sub("/name", ctx => "Hello, World!"),
    socket("message", ctx => "Hello, " + ctx.data.name),
    ctx => cookie("cool", "yes"),
    ctx =>
        cookie("name", "tobi", {
            domain: ".example.com",
            path: "/admin",
            secure: true
        }),
    ctx =>
        cookie("rememberme", "1", {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        }),
    ctx => download("/report-12345.pdf"),
    ctx => download("/report-12345.pdf", "report.pdf"),
    ctx => header("cool"),
    ctx => header("cool", "yes"),
    ctx => json(),
    ctx => json({ cool: true }),
    ctx => jsonp(),
    ctx => jsonp({ cool: true }),
    ctx => redirect("/cool"),
    ctx => redirect(304, "/cool"),
    ctx => render("index.pug"),
    ctx => send(),
    ctx => send({}),
    ctx => send("Hello, World!"),
    ctx => status(200),
    ctx => type("application/json")
]);
