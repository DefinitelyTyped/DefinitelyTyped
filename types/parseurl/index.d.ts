/// <reference types="node" />

import { IncomingMessage } from "http";
import { Url } from "url";

declare function parseurl(req: IncomingMessage): Url | undefined;

declare namespace parseurl {
    function original(req: IncomingMessage): Url | undefined;
}

export = parseurl;
