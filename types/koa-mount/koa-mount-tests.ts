import * as Koa from "koa";
import * as mount from "koa-mount";

const a = new Koa();

a.use((next) => {
    this.body = "Hello";
});

const b = new Koa();

b.use((next) => {
    this.body = "World";
});

const app = new Koa();

app.use(mount("/hello", a));
app.use(mount("/world", b));

app.listen(3000);
console.log("listening on port 3000");
