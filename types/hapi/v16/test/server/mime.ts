
// From https://hapijs.com/api/16.1.1#servermime

import * as Hapi from '../../';

const options: Hapi.ServerOptions = {
    mime: {
        override: {
            'node/module': {
                source: 'steve',
                compressible: false,
                extensions: ['node', 'module', 'npm'],
                type: 'node/module'
            }
        }
    }
};

const server = new Hapi.Server(options);
server.mime.path('code.js').type === 'application/javascript';
server.mime.path('file.npm').type === 'node/module';
