import { ComSocket, ComServer } from 'ncom';

const comSocket = new ComSocket({}, 'id');

comSocket.write('test');
comSocket.write('test', { batch: true });

comSocket.end();
comSocket.destroy();

const secureComServer = new ComServer({ secure: true });

secureComServer.close();
