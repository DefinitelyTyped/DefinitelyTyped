import bigJson = require("big-json");
import type { Stream } from "node:stream";

// ----------------------------------------------------------------
// stringify
// ----------------------------------------------------------------
// $ExpectType Promise<string>
const promisifiedStringifiedJson = bigJson.stringify({ body: { a: "abc" } });

// $ExpectType void
bigJson.stringify({ body: { a: "abc" } }, (str: string): void => {
    // $ExpectType string
    str;
});

// @ts-expect-error
bigJson.stringify({ a: "abc" });

// @ts-expect-error
bigJson.stringify({ body: "abc" });

// ----------------------------------------------------------------
// parse
// ----------------------------------------------------------------
// $ExpectType Promise<object | readonly object[]>
const promisifedParseJson = bigJson.parse({ body: "{ \"a\": \"abc\" }" });

// $ExpectType Promise<object | readonly object[]>
const promisifiedBufferParsedJson = bigJson.parse({ body: Buffer.from("{ \"a\": \"abc\" }") });

// $ExpectType void
bigJson.parse({ body: "{ \"a\": \"abc\" }" }, (result: object): void => {
    // $ExpectType object
    result;
});

// @ts-expect-error
bigJson.parse("{ \"a\": \"abc\" }");

// @ts-expect-error
bigJson.parse({ body: 123 });

// @ts-expect-error
bigJson.parse({ body: { a: "abc" } });

// ----------------------------------------------------------------
// createStringifyStream
// ----------------------------------------------------------------
// $ExpectType Stream
const stringifyStream = bigJson.createStringifyStream({ body: { a: "abc" } });

// @ts-expect-error
bigJson.createStringifyStream({ a: "abc" });

// @ts-expect-error
bigJson.createStringifyStream({ body: "blabla" });

// ----------------------------------------------------------------
// createParseStream
// ----------------------------------------------------------------
// $ExpectType Stream
const parseStream = bigJson.createParseStream();
