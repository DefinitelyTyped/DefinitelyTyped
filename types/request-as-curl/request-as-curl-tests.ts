import requestAsCurl = require("request-as-curl");

import { CoreOptions, Request, RequestAPI, RequiredUriUrl } from "request";

let stringValue: string;
const req: RequestAPI<Request, CoreOptions, RequiredUriUrl> = {} as any;

// with optional data
stringValue = requestAsCurl(req, {test: "data"});

// without optional data
stringValue = requestAsCurl(req);

stringValue = requestAsCurl.serialize(req);
