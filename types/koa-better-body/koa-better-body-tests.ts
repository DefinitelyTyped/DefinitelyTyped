import body = require("koa-better-body");

// $ExpectType Body
const parser1: body.Body = body();
typeof parser1 === "function";

const testOptions: body.Options = {
    jsonLimit: "100mb",
    maxFieldsSize: 100 * 1024,
    maxFileSize: 100 * 1024,
    hashAlgorithm: "sha1",
    maxFiles: 10,
    maxFields: 10,
    maxTotalFileSize: 100 * 1024,
    minFileSize: 1,
    multipart: true,
    delimiter: "&",
    extendTypes: {
        custom: ["application/json"],
    },
};

const otherOptions: body.Options = {
    jsonLimit: "100mb",
    delimiter: "&",
    extendTypes: {
        custom: "application/graphql",
    },
};

// $ExpectType Body
const parser: body.Body = body(testOptions);
