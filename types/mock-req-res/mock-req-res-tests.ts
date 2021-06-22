import { Request, Response, RequestHandler } from 'express';
import { mockRequest, mockResponse } from "mock-req-res";

const handler: RequestHandler = (req: Request, res: Response) => {
    return res.status(200).json(`Hello from handler with an originalUrl value of '${req.originalUrl}'`);
};

const req = mockRequest({ originalUrl: "/" });
const res = mockResponse();
const next = () => {};

handler(req, res, next); // OK

// Argument of type '{}' is not assignable to parameter of type 'Request<Dictionary<string>>'.
// Type '{}' is missing the following properties from type 'Request<Dictionary<string>>': get, header, accepts, acceptsCharsets, and 72 more.t
// handler({}, res, next); // Error

// Argument of type '{}' is not assignable to parameter of type 'Response'.
// Type '{}' is missing the following properties from type 'Response': status, sendStatus, links, send, and 74 more.
// handler(req, {}, next); // Error
