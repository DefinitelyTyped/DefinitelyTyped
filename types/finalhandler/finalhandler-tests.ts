import { IncomingMessage, ServerResponse } from "http";
import finalhandler = require("finalhandler");

const req: IncomingMessage = null;
const res: ServerResponse = null;
const options = {
    env: 'anEnv',
    onerror: (err: any, req: IncomingMessage, res: ServerResponse): any => { return; }
};

let result: (err?: any) => void;

result = finalhandler(req, res);
result = finalhandler(req, res, options);

// serve-static-like request handler
declare function requestHandler(request: IncomingMessage, response: ServerResponse, next: () => void): any;

requestHandler(req, res, result);
