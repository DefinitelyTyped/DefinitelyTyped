import * as https from 'https';
import stoppable = require('stoppable');

const server: stoppable.StoppableServer = stoppable(https.createServer());
server.stop();

const server2: stoppable.StoppableServer = stoppable(https.createServer(), 10000);
server2.stop();

const server3: stoppable.StoppableServer = stoppable(https.createServer());
server.stop((err, gracefully) => {});
server.close();
