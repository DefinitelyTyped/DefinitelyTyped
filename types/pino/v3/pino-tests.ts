// This contains all of the code from the docs on https://www.npmjs.com/package/pino

import PINO = require("pino");
import * as stream from "stream";

const pino = PINO();
const info = pino.info;
const error = pino.error;

info("hello world");
error("this is at error level");
info("the answer is %d", 42);
info({ obj: 42 }, "hello world");
info({ obj: 42, b: 2 }, "hello world");
info({ obj: { aa: "bbb" } }, "another");
setImmediate(info, "after setImmediate");
error(new Error("an error"));

const instance: PINO.Logger = PINO({
    name: "myapp",
    safe: true,
    serializers: {
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res,
    },
});

const version: number = pino.LOG_VERSION;
const levels: {} = pino.levels;

const pretty: stream.Transform = PINO.pretty();

const logger2: PINO.Logger = PINO(
    {
        name: "app",
        safe: true,
    },
    pretty,
);

const logger = instance;
logger.child({ a: "property" }).info("hello child!");
