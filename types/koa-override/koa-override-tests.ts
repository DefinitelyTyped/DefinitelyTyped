import koa = require("koa");
import bodyParser = require("koa-bodyparser");
import override = require("koa-override");

const app = new koa();
app.use(bodyParser());

app.use(override());

app.use(override({}));

app.use(override({ allowedMethods: [] }));

app.use(override({ allowedMethods: ["POST"] }));

app.use(override({ allowedMethods: ["GET", "POST", "DELETE"] }));
