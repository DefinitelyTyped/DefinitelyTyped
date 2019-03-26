import Bunyan = require('bunyan');
import expressBunyan = require('express-bunyan-logger');

// works with no options
const middleware = expressBunyan({});
const middleware2 = expressBunyan.errorLogger({});

// format accepts both string and function
const middleware3 = expressBunyan({
    format: ':name'
});
const middleware4 = expressBunyan({
    format(meta: any) {
        return 'foo';
    }
});

// works when provided a bunyan logger
const logger = Bunyan.createLogger({
    name: 'myLogger'
});
const middleware5 = expressBunyan({
    logger
});

expressBunyan({
    format: () => "some format",
    genReqId: req => req.header("foo") || "other",
    name: "foo_app",
    parseUA: false,
    serializers: Bunyan.stdSerializers,
    streams: [{ level: 'info', stream: process.stdout }]
});
