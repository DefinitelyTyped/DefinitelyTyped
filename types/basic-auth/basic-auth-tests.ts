import { IncomingMessage } from "http";
import { Context } from "koa";
import auth = require("basic-auth");

const loginData = auth(undefined! as IncomingMessage);
if (loginData) {
    const { name, pass } = loginData;
}

const parsed = auth.parse("Basic QmFzaWM6QXV0aA==");
if (parsed) {
    const { name, pass } = parsed;
}

const koaContext = auth(undefined! as Context);
if (koaContext) {
    const { name, pass } = koaContext;
}

// @ts-expect-error
auth({ headers: { authorization: ["Bearer", "token"] } });
