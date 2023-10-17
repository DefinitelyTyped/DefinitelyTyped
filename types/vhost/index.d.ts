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
