import liveServer = require("live-server");
import { Request, Response, NextFunction } from '.';

liveServer.start({
    port: 8181,
    host: "0.0.0.0",
    root: "/public",
    open: false,
    ignore: "scss,my/templates",
    file: "index.html",
    wait: 1000,
    cors: true,
    mount: [["/components", "./node_modules"]],
    logLevel: 2,
    middleware: [
        (_req: Request, _res: Response, next: NextFunction) => {
            next();
        },
    ],
});

liveServer.shutdown();
