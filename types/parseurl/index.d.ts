// Type definitions for parseurl 1.3
// Project: https://github.com/pillarjs/parseurl
// Definitions by: Stefan Reichel <https://github.com/bomret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage } from "http";
import { Url } from "url";

declare function parseurl(req: IncomingMessage): Url | undefined;

declare namespace parseurl {
    function original(req: IncomingMessage): Url | undefined;
}

export = parseurl;
