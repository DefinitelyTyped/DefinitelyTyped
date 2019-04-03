import { IncomingMessage, ServerResponse } from "http";
import finalhandler = require("finalhandler");

let req: IncomingMessage;
let res: ServerResponse;
let options: {
    env: string;
    onerror: (err: any, req: IncomingMessage, res: ServerResponse) => void;
};

let result: (err: any) => void;

result = finalhandler(req, res);
result = finalhandler(req, res, options);
