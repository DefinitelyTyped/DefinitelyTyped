// Type definitions for body 5.1
// Project: https://github.com/Raynos/body
// Definitions by: Sachin Shekhar <https://github.com/SachinShekhar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";

declare function body(req: IncomingMessage, cb: (err: Error, bodyPayload: string) => void): void;
declare function body(req: IncomingMessage, res: ServerResponse, cb: (err: Error, bodyPayload: string) => void): void;
declare function body(req: IncomingMessage, res: ServerResponse, opts: {
  limit?: number;
  cache?: boolean;
  encoding?: BufferEncoding;
}, cb: (err: Error, bodyPayload: string) => void): void;

export = body;
