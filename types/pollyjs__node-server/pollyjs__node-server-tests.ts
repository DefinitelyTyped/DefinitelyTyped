import * as express from 'express';
import { API, Defaults, Server, registerExpressAPI } from '@pollyjs/node-server';

const api = new API({ recordingsDir: 'recordings' });

api.getRecordings('id-123');
api.saveRecording('id-123', {});
api.deleteRecording('id-123');
api.filenameFor('id-123');
api.respond(200);
api.respond(200, {});

Defaults.apiNamespace;
Defaults.port;
Defaults.quiet;
Defaults.recordingSizeLimit;
Defaults.recordingsDir;

new Server();
new Server(Defaults);
new Server({ port: 4000, quiet: false });
new Server({
    port: 4000,
    quiet: false,
    recordingSizeLimit: '100mb',
    recordingsDir: 'recordings',
    apiNamespace: '/api/v2',
});

const server = new Server();

server.listen();
server.listen(3000);
server.listen(3000, 'http://localhost');

server.listen().on('close', () => {});

server.config;
server.app;
server.server;

const app = express();

registerExpressAPI(app, {});
registerExpressAPI(app, { port: 4200 });
registerExpressAPI(app, Defaults);
