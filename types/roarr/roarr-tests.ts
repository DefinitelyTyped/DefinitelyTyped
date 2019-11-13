import Roarr from "roarr";

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

// TS2.0-compatible reformulation of example at https://github.com/gajus/roarr#function-parameter
const alternativeLog = Roarr.child((message) => {
    message["message"] = message["message"].replace("foo", "bar");

    return message;
});

alternativeLog({ logLevel: 60 }, "Something critical");
alternativeLog.debug({ foo: "bar" }, 'foo 1');
alternativeLog.fatal('foo 2');
