// Type definitions for vhost 3.0
// Project: https://github.com/expressjs/vhost
// Definitions by: Vincenzo Chianese <https://github.com/XVincentX>
//                 Cambo <https://github.com/indentedspace>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require("express");

declare namespace vhost {
    interface Request extends express.Request {
        vhost: {
            host: string;
            hostname: string;
            length: number;
            [key: number]: string;
        };
    }

    interface Handler {
        (req: Request, res: express.Response, next: express.NextFunction): void;
    }
}

declare function vhost(hostname: string | RegExp, handler: vhost.Handler): express.Handler;

export = vhost;
