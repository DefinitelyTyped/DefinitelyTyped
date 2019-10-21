import * as http from 'http';
import * as net from 'net';
import * as stoppable from 'stoppable';

const server0: stoppable.StoppableServer<net.Server> = stoppable(net.createServer());
server0.stop();

const server1: stoppable.StoppableServer = stoppable(http.createServer());
server1.stop();

const server2: stoppable.StoppableServer = stoppable(http.createServer(), 10000);
server2.stop();

const server3: stoppable.StoppableServer = stoppable(http.createServer());
server3.stop((err, gracefully) => {});
server3.close();
