import { default as Roarr, MessageContextType, MessageType } from "roarr";

const messageContextType = {
    foo: "bar",
};

const messageType: MessageType = {
    context: messageContextType,
    message: "a message",
    sequence: 1,
    time: 1,
    version: "1",
};

const log = Roarr.child({ module: "roarr-tests" });

log({ logLevel: 10 }, "Simple log statement");
log.trace("Trace log statement");
log.trace({ context: "trace" }, "Trace log statement");
log.debug("Debug log statement");
log.debug({ context: "debug" }, "Debug log statement");
log.info("Info log statement");
log.info({ context: "info" }, "Info log statement");
log.warn("Warn log statement");
log.warn({ context: "warn" }, "Warn log statement");
log.error("Error log statement");
log.error({ context: "error" }, "Error log statement");
log.fatal("Fatal log statement");
log.fatal({ context: "fatal" }, "Fatal log statement");
log("Statement without context");

// TS2.0-compatible reformulation of example at https://github.com/gajus/roarr#function-parameter
const alternativeLog = Roarr.child((message: MessageType) => {
    message["message"] = message["message"].replace("foo", "bar");

    return message;
});

alternativeLog({ logLevel: 60 }, "Something critical");
alternativeLog.debug({ foo: "bar" }, 'foo 1');
alternativeLog.fatal('foo 2');

const implicitLog = Roarr.child((message) => {
    message;                    // $Expect MessageType
    message.message = message.message.replace("foo", "bar");
    message.context["new key"] = "new value";
    message.context.logLevel = "50"; // $ExpectError

    return message;
});

implicitLog("Implicit logger without context");
