
import { ServerRequest, ServerResponse } from "http";
import * as finalHandler from "finalhandler";

let req: ServerRequest;
let res: ServerResponse;
let options: {
	onerror: (err: any, req: ServerRequest, res: ServerResponse) => void;
	message: boolean|((err: any, status: number) => string);
	stacktrace: boolean;
};

let result: (err: any) => void;

result = finalHandler(req, res);
result = finalHandler(req, res, options);
