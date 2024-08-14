import * as http from "http";
import * as https from "https";
import stoppable = require("stoppable");

// test interface exports
type Stoppable = stoppable.StoppableServer;
type WithStop = stoppable.WithStop;

const httpServer: http.Server & WithStop = stoppable(http.createServer());
const httpsServer: https.Server & WithStop = stoppable(https.createServer());
const httpServerWithGrace: http.Server & WithStop = stoppable(http.createServer(), 10000);
const httpsServerWithGrace: https.Server & WithStop = stoppable(https.createServer(), 10000);

// check return type is actually a http.Server/https.Server
httpServer.addListener("connection", socket => {
    socket; // $ExpectType Socket
});
httpServer.addListener("secureConnection", tlsSocket => {
    tlsSocket; // $ExpectType any
});
httpsServer.addListener("secureConnection", tlsSocket => {
    tlsSocket; // $ExpectType TLSSocket
});
httpsServer.addListener("connection", socket => {
    socket; // $ExpectType Duplex
});

httpServer.stop(); // $ExpectType void
httpsServer.stop(); // $ExpectType void
// $ExpectType void
httpServer.stop((err, gracefully) => {
    err; // $ExpectType Error | undefined
    gracefully; // $ExpectType boolean
});
// $ExpectType void
httpsServer.stop((err, gracefully) => {
    err; // $ExpectType Error | undefined
    gracefully; // $ExpectType boolean
});
