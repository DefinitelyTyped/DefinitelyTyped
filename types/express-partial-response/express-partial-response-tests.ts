import expressPartialResponse, { Options } from "express-partial-response";

// $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
expressPartialResponse();

// $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
expressPartialResponse({});

// $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
expressPartialResponse({ query: "query" });
