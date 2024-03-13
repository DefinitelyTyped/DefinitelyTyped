import connect = require("connect");
import http = require("http");

declare namespace vhost {
    interface Request extends connect.IncomingMessage {
        vhost: {
            host: string;
            hostname: string;
            length: number;
            [key: number]: string;
        };
    }

    interface Handler {
        (req: Request, res: http.ServerResponse, next: connect.NextFunction): void;
    }
}

declare function vhost(hostname: string | RegExp, handler: vhost.Handler): connect.NextHandleFunction;

export = vhost;
