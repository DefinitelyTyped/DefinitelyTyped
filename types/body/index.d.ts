/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";
import { Callback } from "./common/callback";

declare function textBody(req: IncomingMessage, cb: Callback<string>): void;
declare function textBody(req: IncomingMessage, res: ServerResponse, cb: Callback<string>): void;
declare function textBody(req: IncomingMessage, res: ServerResponse, opts: {
    limit?: number | undefined;
    cache?: boolean | undefined;
    encoding?: BufferEncoding | undefined;
}, cb: Callback<string>): void;

export = textBody;
