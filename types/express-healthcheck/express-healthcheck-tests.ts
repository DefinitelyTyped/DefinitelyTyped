import healthcheck = require("express-healthcheck");

// $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
healthcheck();
