// Type definitions for body 5.1
// Project: https://github.com/Raynos/body
// Definitions by: Sachin Shekhar <https://github.com/SachinShekhar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";
import { Callback } from "./common/callback";

declare function textBody(req: IncomingMessage, cb: Callback<string>): void;
declare function textBody(req: IncomingMessage, res: ServerResponse, cb: Callback<string>): void;
declare function textBody(req: IncomingMessage, res: ServerResponse, opts: {
  limit?: number;
  cache?: boolean;
  encoding?: BufferEncoding;
}, cb: Callback<string>): void;

export = textBody;
