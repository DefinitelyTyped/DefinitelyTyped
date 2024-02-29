import expressLegacyExpires = require("express-legacy-expires");
import * as express from "express";

const options: expressLegacyExpires.Options = { now: () => Date.parse("2023-09-26T09:00:00Z") };

expressLegacyExpires(); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
expressLegacyExpires({}); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
expressLegacyExpires({ now: () => Date.parse("2023-09-26T09:00:00Z") }); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
expressLegacyExpires(options); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>

const app = express();
app.use(expressLegacyExpires()); // $ExpectType Express
