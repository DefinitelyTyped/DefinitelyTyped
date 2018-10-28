import { IncomingMessage, ServerResponse } from "http";
import finalHandler = require("finalhandler");

let req: IncomingMessage;
let res: ServerResponse;
let options: {
	onerror: (err: any, req: IncomingMessage, res: ServerResponse) => void;
	message: boolean|((err: any, status: number) => string);
	stacktrace: boolean;
};

let result: (err: any) => void;

result = finalHandler(req, res);
result = finalHandler(req, res, options);
