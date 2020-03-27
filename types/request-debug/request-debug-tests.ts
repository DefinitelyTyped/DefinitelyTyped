import request = require("request");
import request_debug = require("request-debug");

// no callback
request_debug(request);

const callback = (phase: request_debug.LogPhase, data: request_debug.LogData,
                  request: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>) => {};
// with callback
request_debug(request, callback);
