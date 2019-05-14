import * as scErrors from "sc-errors";
import http = require("http");
import * as socketClusterServer from "socketcluster-server";

const httpServer = http.createServer();
const scServer = socketClusterServer.attach(httpServer);

// Create the various errors.
const authTokenExpiredError = new scErrors.AuthTokenExpiredError("error", new Date());
const authTokenInvalidError = new scErrors.AuthTokenInvalidError("error");
const authTokenNotBeforeError = new scErrors.AuthTokenNotBeforeError("error", new Date());
const authTokenError = new scErrors.AuthTokenError("error");
const silentMiddlewareBlockedError = new scErrors.SilentMiddlewareBlockedError("error", scServer.MIDDLEWARE_AUTHENTICATE);
const invalidActionError = new scErrors.InvalidActionError("error");
const invalidArgumentsError = new scErrors.InvalidArgumentsError("error");
const invalidOptionsError = new scErrors.InvalidOptionsError("error");
const invalidMessageError = new scErrors.InvalidMessageError("error");
const socketProtocolError = new scErrors.SocketProtocolError("error", 1001);
const serverProtocolError = new scErrors.ServerProtocolError("error");
const httpServerError = new scErrors.HTTPServerError("error");
const resourceLimitError = new scErrors.ResourceLimitError("error");
const timeoutError = new scErrors.TimeoutError("error");
const badConnectionError = new scErrors.BadConnectionError("error", "connectAbort");
const brokerError = new scErrors.BrokerError("error");
const processExitError = new scErrors.ProcessExitError("error");
const unknownError = new scErrors.UnknownError("error");

// Check some of the error and ignore statusses
console.log(scErrors.socketProtocolErrorStatuses[1001]);
console.log(scErrors.socketProtocolErrorStatuses[4000]);

console.log(scErrors.socketProtocolIgnoreStatuses[1000]);

// Dehydrate and hydrate an error
const err = new Error();
let dehydratedError = scErrors.dehydrateError(err);
let hydratedError = scErrors.hydrateError(dehydratedError);

dehydratedError = scErrors.dehydrateError(err, true);
hydratedError = scErrors.hydrateError(dehydratedError);

// decycle
const foo = {
    bar: 5
};
const baz = {
    a: 1,
    b: "test",
    c: foo,
    d: {
        d1: foo
    }
};

const decycledBaz = scErrors.decycle(baz);
