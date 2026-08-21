import enableDestroy = require("server-destroy");

import * as http from "http";
import * as http2 from "http2";
import * as https from "https";
import * as net from "net";
import * as tls from "tls";

const netServer = {} as unknown as net.Server;
enableDestroy(netServer);
netServer.destroy();
netServer.destroy(() => {});

const tlsServer = {} as unknown as tls.Server;
enableDestroy(tlsServer);
tlsServer.destroy();
tlsServer.destroy(() => {});

const httpServer = {} as unknown as http.Server;
enableDestroy(httpServer);
httpServer.destroy();
httpServer.destroy(() => {});

const httpsServer = {} as unknown as https.Server;
enableDestroy(httpsServer);
httpsServer.destroy();
httpsServer.destroy(() => {});

const http2Server = {} as unknown as http2.Http2Server;
enableDestroy(http2Server);
http2Server.destroy();
http2Server.destroy(() => {});

const http2SecureServer = {} as unknown as http2.Http2SecureServer;
enableDestroy(http2SecureServer);
http2SecureServer.destroy();
http2SecureServer.destroy(() => {});
