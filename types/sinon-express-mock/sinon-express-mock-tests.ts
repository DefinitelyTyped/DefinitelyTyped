import {
    spy,
} from "sinon";

import {
    RequestHandler,
} from "express";

import {
    mockReq,
    mockRes,
} from "sinon-express-mock";

const handlers: RequestHandler[] = [];

handlers.push((req, res, next) => {
    // mock common methods
    res.send(JSON.stringify(req.accepts())).end();
});

handlers.push((req, res, next) => {
    // next is not a part of the package, it has to be mocked manually
    next();
});

handlers.push((req, res, next) => {
    // cookies are not mocked, but it should be working anyway
    res.send(JSON.stringify(req.cookies)).end();
});

for (const handler of handlers) {
    // run the handler, an exception should be thrown on error
    handler(mockReq(), mockRes(), spy());
}

// test req generics
const req = mockReq({ testMockReq: `test` });
console.assert(typeof req.testMockReq === "string");

// test res generics
const res = mockRes({ testMockRes: `test` });
console.assert(typeof res.testMockRes === "string");
