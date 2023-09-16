import { createServer as createHttpServer } from "http";
import { createHttpTerminator } from "http-terminator";
import { createServer as createHttpsServer } from "https";

const httpServer = createHttpServer();
const httpTerminator = createHttpTerminator({ server: httpServer });

const httpsServer = createHttpsServer();
const httpsTerminator = createHttpTerminator({
    server: httpsServer,
    gracefulTerminationTimeout: 10000,
});

httpTerminator.terminate()
    .then(() => httpsTerminator.terminate())
    .then(() => {
        // Terminated.
    });
