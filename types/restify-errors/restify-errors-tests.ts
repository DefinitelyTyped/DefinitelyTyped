import * as restifyErrors from "restify-errors";

const prevErr = new Error();

// HttpError
const httpErrorA = new restifyErrors.HttpError("Hello World!");
const httpErrorB = new restifyErrors.HttpError("Hello %s!", "World");
const httpErrorC = new restifyErrors.HttpError({ statusCode: 404 }, "Hello %s!", "World");
const httpErrorD = new restifyErrors.HttpError(prevErr, "Hello World!");
const httpErrorE = new restifyErrors.HttpError(prevErr, "Hello %s!", "World");
const httpErrorF = new restifyErrors.HttpError(prevErr, { statusCode: 404 }, "Hello %s!", "World");

// RestError
const restErrorA = new restifyErrors.RestError("Hello World!");
const restErrorB = new restifyErrors.RestError("Hello %s!", "World");
const restErrorC = new restifyErrors.RestError({ statusCode: 404, restCode: "TEST" }, "Hello %s!", "World");
const restErrorD = new restifyErrors.RestError(prevErr, "Hello World!");
const restErrorE = new restifyErrors.RestError(prevErr, "Hello %s!", "World");
const restErrorF = new restifyErrors.RestError(prevErr, { statusCode: 404, restCode: "TEST" }, "Hello %s!", "World");

// makeConstructor
restifyErrors.makeConstructor("TestError", {});

// makeErrFromCode
const customError = restifyErrors.makeErrFromCode(500, "Testing....");

const bunyanSerializer = restifyErrors.bunyanSerializer;
