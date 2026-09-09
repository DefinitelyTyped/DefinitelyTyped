import utilModule = require("@node-red/util");
import { Node, NodeMessage } from "@node-red/registry";
import { EventEmitter } from "events";

// $ExpectType void
utilModule.init({} as import("@node-red/runtime").LocalSettings);

function i18nTests() {
    const i18n = utilModule.i18n;

    // $ExpectType string
    i18n._("my.key1");

    // $ExpectType string
    i18n._("my.key2", { dataKey: "dataVal" });

    // $ExpectType string[]
    i18n.availableLanguages("editor");

    // $ExpectType string
    i18n.defaultLang;
}

function logTests() {
    const log = utilModule.log;

    // $ExpectType string
    log._("my.key1");
    // $ExpectType string
    log._("my.key2", { dataKey: "dataVal" });

    const logHandler = new EventEmitter();
    log.addHandler(logHandler);
    log.removeHandler(logHandler);

    // $ExpectType boolean
    log.metric();
    // @ts-expect-error
    log.log({});
    log.log({ level: log.INFO, msg: "log" });
    log.info("log info");
    log.warn("log warn");
    log.error("log error");
    log.trace("log trace");
    log.debug("log debug");
    log.audit({ level: log.INFO, msg: "audit" });
}

function utilTests(someNode: Node) {
    const util = utilModule.util;

    // $ExpectType string
    util.generateId();

    // $ExpectType string
    util.ensureString(123);
    // $ExpectType string
    util.ensureString({});
    // $ExpectType string
    util.ensureString("abc");

    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    util.ensureBuffer(123);
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    util.ensureBuffer({});
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    util.ensureBuffer("abc");

    interface SomeNodeMsg extends NodeMessage {
        key: string;
    }
    const msg: SomeNodeMsg = {
        key: "value",
    };
    const msgClone = util.cloneMessage(msg);
    // $ExpectType string
    const msgKey = msgClone.key;

    // $ExpectType boolean
    util.compareObjects({}, {});

    // $ExpectType PropertyExpression
    util.normalisePropertyExpression("a[\"b\"].c");

    // $ExpectType PropertyExpression
    util.normalisePropertyExpression("a[msg.foo]", msg);

    // $ExpectType string
    util.normalisePropertyExpression("a[msg.foo]", msg, true);

    // $ExpectType PropertyExpression
    util.normalisePropertyExpression("a[msg.foo]", msg, false);
    // $ExpectType string
    util.normalisePropertyExpression("a.b", undefined, true);

    // $ExpectType any
    util.getMessageProperty({}, "key");

    // $ExpectType any
    util.getObjectProperty({}, "key");

    // $ExpectType boolean
    util.setMessageProperty({}, "key", { dataKey: "dataVal" });
    // $ExpectType boolean
    util.setMessageProperty({}, "key", { dataKey: "dataVal" }, true);

    // $ExpectType boolean
    util.setObjectProperty({}, "key", { dataKey: "dataVal" });
    // $ExpectType boolean
    util.setObjectProperty({}, "key", { dataKey: "dataVal" }, true);

    // $ExpectType string
    util.getSetting(someNode, "name");

    // @ts-expect-error evaluateEnvProperty is not exported
    util.evaluateEnvProperty("name", someNode);

    // $ExpectType any
    util.evaluateNodeProperty("value", "type", someNode, {});
    // $ExpectType void
    util.evaluateNodeProperty("value", "type", someNode, {}, (err: Error | null, res: any): void => {});

    const parsedStore = util.parseContextStore("#:(file)::foo");
    // $ExpectType string | undefined
    parsedStore.store;
    // $ExpectType string
    parsedStore.key;

    // $ExpectType Expression
    const jsonataExpr = util.prepareJSONataExpression("expr", someNode);

    // @ts-expect-error
    util.evaluateJSONataExpression(jsonataExpr, {});
    // $ExpectType void
    util.evaluateJSONataExpression(jsonataExpr, {}, (err: Error | null, res: any): void => {});

    // $ExpectType Promise<any>
    jsonataExpr.evaluate({});
    // $ExpectType Promise<any>
    jsonataExpr.evaluate({}, { value: 123 });
    // $ExpectType void
    jsonataExpr.evaluate({}, undefined, (err, result) => {
        // $ExpectType string
        err.code;
        // $ExpectType number
        err.position;
        // $ExpectType string
        err.token;
        // $ExpectType string
        err.message;
        // $ExpectType any
        result;
    });
    // $ExpectType void
    jsonataExpr.evaluate({}, { value: 123 }, (err, result) => {});
    // $ExpectType void
    jsonataExpr.assign("value", 123);
    // $ExpectType void
    jsonataExpr.registerFunction("double", function(value: number) {
        // $ExpectType any
        this.input;
        // $ExpectType Date
        this.environment.timestamp;
        // $ExpectType boolean
        this.environment.async;
        // $ExpectType void
        this.environment.bind("value", value);
        // $ExpectType any
        this.environment.lookup("value");
        // @ts-expect-error
        this.environment.timestamp = new Date();
        // @ts-expect-error
        this.environment.async = false;
        // @ts-expect-error
        this.input = {};
        // @ts-expect-error
        this.environment = this.environment;
        return value * 2;
    }, "<n:n>");
    // $ExpectType void
    jsonataExpr.registerFunction("constant", () => 123);
    // @ts-expect-error
    jsonataExpr.assign(123, "value");
    // @ts-expect-error
    jsonataExpr.registerFunction("invalid", () => 123, 123);

    // $ExpectType ExprNode
    const ast = jsonataExpr.ast();
    // $ExpectType "string" | "number" | "error" | "function" | "binary" | "unary" | "partial" | "lambda" | "condition" | "transform" | "block" | "name" | "parent" | "value" | "wildcard" | "descendant" | "variable" | "regexp" | "operator"
    ast.type;
    // $ExpectType any
    ast.value;
    // $ExpectType number | undefined
    ast.position;
    // $ExpectType string | undefined
    ast.name;
    // $ExpectType ExprNode[] | undefined
    ast.arguments;
    // $ExpectType ExprNode[] | undefined
    ast.steps;
    // $ExpectType ExprNode[] | undefined
    ast.expressions;
    // $ExpectType ExprNode[] | undefined
    ast.stages;
    // $ExpectType ExprNode | ExprNode[] | undefined
    ast.lhs;
    // $ExpectType ExprNode | undefined
    ast.procedure;
    // $ExpectType ExprNode | undefined
    ast.rhs;
    // $ExpectType string
    util.normaliseNodeTypeName("a-random node type");

    const encoded = util.encodeObject({ msg: 123 });
    // $ExpectType string
    encoded.format;
    // $ExpectType string
    encoded.msg;
}

function hookTests() {
    const hooks = utilModule.hooks;

    // #region Hook payload types
    hooks.add("onSend", payload => {
        // $ExpectType SendEvent[]
        payload;
    });

    hooks.add("preRoute", payload => {
        // $ExpectType SendEvent
        payload;
    });

    hooks.add("preDeliver", payload => {
        // $ExpectType SendEvent
        payload;
    });

    hooks.add("postDeliver", payload => {
        // $ExpectType SendEvent
        payload;
    });

    hooks.add("onReceive", payload => {
        // $ExpectType ReceiveEvent
        payload;
    });

    hooks.add("postReceive", payload => {
        // $ExpectType ReceiveEvent
        payload;
    });

    hooks.add("onComplete", payload => {
        // $ExpectType CompleteEvent
        payload;
    });

    hooks.add("preInstall", payload => {
        // $ExpectType InstallEvent
        payload;
    });

    hooks.add("postInstall", payload => {
        // $ExpectType InstallEvent
        payload;
    });

    hooks.add("preUninstall", payload => {
        // $ExpectType UninstallEvent
        payload;
    });

    hooks.add("postUninstall", payload => {
        // $ExpectType UninstallEvent
        payload;
    });

    hooks.add("onSend.audit", payload => {
        // $ExpectType SendEvent[]
        payload;
    });

    // @ts-expect-error custom hooks are rejected by the runtime
    hooks.add("customEvent", payload => {});
    // #endregion

    // #region Hook handler finalization
    hooks.add("onSend", payload => {
        return;
    });

    hooks.add("onSend", (payload, done) => {
        done();
    });

    hooks.add("onSend", payload => {
        return new Promise(resolve => {
            resolve();
        });
    });

    hooks.add("onSend", payload => {
        return false;
    });

    hooks.add("onSend", (payload, done) => {
        done(false);
    });

    hooks.add("onSend", payload => {
        return new Promise(resolve => {
            resolve(false);
        });
    });

    hooks.add("onSend", async payload => {
        return false;
    });

    // any value in callback should be allowed
    hooks.add("onSend", (payload, done) => {
        done("Error");
        done(new Error("Error"));
    });
    // #endregion
}

function eventAndExecTests() {
    // $ExpectType EventEmitter<any>
    utilModule.events;
    // $ExpectType boolean
    utilModule.events.emit("runtime-event", {});

    // $ExpectType Promise<ExecResult>
    utilModule.exec.run("node", ["--version"], {}, true);
}
