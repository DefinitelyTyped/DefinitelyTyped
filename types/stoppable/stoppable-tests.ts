import * as http from 'http';
import * as https from 'https';
import stoppable = require('stoppable');

const httpsServer: stoppable.StoppableServer = stoppable(https.createServer());
httpsServer.stop();

const httpsServer2: stoppable.StoppableServer = stoppable(https.createServer(), 10000);
httpsServer2.stop();

const httpsServer3: stoppable.StoppableServer = stoppable(https.createServer());
httpsServer.stop((err, gracefully) => {});
httpsServer.close();

const server: stoppable.StoppableServer = stoppable(http.createServer() as https.Server);
server.stop();

const server2: stoppable.StoppableServer = stoppable(http.createServer() as https.Server, 10000);
server2.stop();

const server3: stoppable.StoppableServer = stoppable(http.createServer() as https.Server);
server.stop((err, gracefully) => {});
server.close();
