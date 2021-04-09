import pino = require("pino");
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";

const log = pino();
const info = log.info;
const error = log.error;

info("hello world");
error("this is at error level");
info("the answer is %d", 42);
info({ obj: 42 }, "hello world");
info({ obj: 42, b: 2 }, "hello world");
info({ obj: { aa: "bbb" } }, "another");
setImmediate(info, "after setImmediate");
error(new Error("an error"));

const writeSym = pino.symbols.writeSym;

const testUniqSymbol = {
    [pino.symbols.needsMetadataGsym]: true,
}[pino.symbols.needsMetadataGsym];

const log2: pino.Logger = pino({
    name: "myapp",
    safe: true,
    serializers: {
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res,
        err: pino.stdSerializers.err,
    },
});

pino({
    write(o) {},
});

pino({
    mixin() {
        return { customName: "unknown", customId: 111 };
    },
});

pino({
    mixin: () => ({ customName: "unknown", customId: 111 }),
});

pino({
    redact: { paths: [], censor: "SECRET" },
});

pino({
    redact: { paths: [], censor: () => "SECRET" },
});

pino({
    browser: {
        write(o) {},
    },
});

pino({
    browser: {
        write: {
            info(o) {},
            error(o) {},
        },
        serialize: true,
        asObject: true,
        transmit: {
            level: "fatal",
            send: (level, logEvent) => {
                level;
                logEvent.bindings;
                logEvent.level;
                logEvent.ts;
                logEvent.messages;
            },
        },
    },
});

pino({ base: null });
pino({ base: { foo: "bar" }, changeLevelName: "severity" });
pino({ base: { foo: "bar" }, levelKey: "severity" });
if ("pino" in log) console.log(`pino version: ${log.pino}`);

log.child({ a: "property" }).info("hello child!");
log.level = "error";
log.info("nope");
const child = log.child({ foo: "bar" });
child.info("nope again");
child.level = "info";
child.info("hooray");
log.info("nope nope nope");
log.child({ foo: "bar", level: "debug" }).debug("debug!");
child.bindings();
const customSerializers = {
    test() {
        return "this is my serializer";
    },
};
pino().child({ serializers: customSerializers }).info({ test: "should not show up" });
const child2 = log.child({ father: true });
const childChild = child2.child({ baby: true });

log.level = "info";
if (log.levelVal === 30) {
    console.log("logger level is `info`");
}

log.level = "myLevel";
log.myLevel("a message");

const listener = (lvl: any, val: any, prevLvl: any, prevVal: any) => {
    console.log(lvl, val, prevLvl, prevVal);
};
log.on("level-change", (lvl, val, prevLvl, prevVal) => {
    console.log(lvl, val, prevLvl, prevVal);
});
log.level = "trace";
log.removeListener("level-change", listener);
log.level = "info";

pino.levels.values.error === 50;
pino.levels.labels[50] === "error";

const logstderr: pino.Logger = pino(process.stderr);
logstderr.error("on stderr instead of stdout");

log.useLevelLabels = true;
log.info("lol");
log.level === "info";
const isEnabled: boolean = log.isLevelEnabled("info");

const extremeDest = pino.extreme();
const logExtreme = pino(extremeDest);

const handler = pino.final(logExtreme, (err: Error, finalLogger: pino.BaseLogger) => {
    if (err) {
        finalLogger.error(err, "error caused exit");
    }
});

handler(new Error("error"));

const redacted = pino({
    redact: ["path"],
});

redacted.info({
    msg: "logged with redacted properties",
    path: "Not shown",
});

const anotherRedacted = pino({
    redact: {
        paths: ["anotherPath"],
        censor: "Not the log you\re looking for",
    },
});

anotherRedacted.info({
    msg: "another logged with redacted properties",
    anotherPath: "Not shown",
});

const pretty = pino({
    prettyPrint: {
        colorize: true,
        crlf: false,
        errorLikeObjectKeys: ["err", "error"],
        errorProps: "",
        messageFormat: false,
        ignore: "",
        levelFirst: false,
        messageKey: "msg",
        timestampKey: "timestamp",
        translateTime: "UTC:h:MM:ss TT Z",
        search: "foo == `bar`",
        suppressFlushSyncWarning: true,
    },
});

const withMessageFormatFunc = pino({
    prettyPrint: {
        ignore: "requestId",
        messageFormat: (log, messageKey) => {
            const message = log[messageKey];
            if (log.requestId) return `[${log.requestId}] ${message}`;
            return message;
        },
    },
});

const withTimeFn = pino({
    timestamp: pino.stdTimeFunctions.isoTime,
});

const withNestedKey = pino({
    nestedKey: "payload",
});

const withHooks = pino({
    hooks: {
        logMethod(args, method, level) {
            return method.apply(this, args);
        },
    },
});

// Properties/types imported from pino-std-serializers
const wrappedErrSerializer = pino.stdSerializers.wrapErrorSerializer((err: pino.SerializedError) => {
    return { ...err, newProp: "foo" };
});
const wrappedReqSerializer = pino.stdSerializers.wrapRequestSerializer((req: pino.SerializedRequest) => {
    return { ...req, newProp: "foo" };
});
const wrappedResSerializer = pino.stdSerializers.wrapResponseSerializer((res: pino.SerializedResponse) => {
    return { ...res, newProp: "foo" };
});

const socket = new Socket();
const incomingMessage = new IncomingMessage(socket);
const serverResponse = new ServerResponse(incomingMessage);

const mappedHttpRequest: { req: pino.SerializedRequest } = pino.stdSerializers.mapHttpRequest(incomingMessage);
const mappedHttpResponse: { res: pino.SerializedResponse } = pino.stdSerializers.mapHttpResponse(serverResponse);

const serializedErr: pino.SerializedError = pino.stdSerializers.err(new Error());
const serializedReq: pino.SerializedRequest = pino.stdSerializers.req(incomingMessage);
const serializedRes: pino.SerializedResponse = pino.stdSerializers.res(serverResponse);

/**
 * Destination static method
 */
const destinationViaDefaultArgs = pino.destination();
const destinationViaStrFileDescriptor = pino.destination("/log/path");
const destinationViaNumFileDescriptor = pino.destination(2);
const destinationViaStream = pino.destination(process.stdout);
const destinationViaOptionsObject = pino.destination({ dest: "/log/path", sync: false });

pino(destinationViaDefaultArgs);
pino({ name: "my-logger" }, destinationViaDefaultArgs);
pino(destinationViaStrFileDescriptor);
pino({ name: "my-logger" }, destinationViaStrFileDescriptor);
pino(destinationViaNumFileDescriptor);
pino({ name: "my-logger" }, destinationViaNumFileDescriptor);
pino(destinationViaStream);
pino({ name: "my-logger" }, destinationViaStream);
pino(destinationViaOptionsObject);
pino({ name: "my-logger" }, destinationViaOptionsObject);

interface StrictShape {
    activity: string;
    err?: unknown;
}

info<StrictShape>({
    activity: "Required property",
});

const logLine: pino.LogDescriptor = {
    level: 20,
    msg: "A log message",
    time: new Date().getTime(),
    aCustomProperty: true,
};
