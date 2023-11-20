import express = require("express");
import ws = require("ws");

declare function reload(
    app: express.Express,
    opts: reload.OptionsWaitToStartWebSocketServer,
): Promise<reload.ReloadWithWebSocketServer>;
declare function reload(app: express.Express, opts?: reload.Options): Promise<reload.Reload>;

declare namespace reload {
    interface Options {
        port?: number;
        https?: {
            p12?: {
                p12Path: string;
            };
            certAndKey?: {
                key: string;
                cert: string;
            };
            passphrase?: string;
        };
        forceWss?: boolean;
        verbose?: boolean;
        route?: string;
    }

    interface OptionsWaitToStartWebSocketServer extends Options {
        webSocketServerWaitStart: true;
    }

    interface Reload {
        reload(): void;
        wss: ws.Server;
        closeServer(): Promise<Error | undefined>;
    }

    interface ReloadWithWebSocketServer extends Reload {
        startWebSocketServer(): Promise<Reload>;
    }
}

export = reload;
