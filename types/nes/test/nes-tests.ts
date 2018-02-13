import Hapi = require('hapi');
import Nes = require('nes');

var server: Hapi.Server = new Hapi.Server();

server.register(Nes).then(() => {
    // No longer need to cast to Nes.Server as Hapi.Server has been modified directly.
    // let wsServer: Nes.Server = server as Nes.Server;
    let wsServer: Hapi.Server = server;
    wsServer.subscription('/item/{id}');
    wsServer.route( {
        method: 'GET',
        path: '/test',
        config: {
            handler: (request, h) => {
                return {test: 'passes ' + request.socket.id};
            }
        }
    });
    wsServer.start().then(() => {
        setTimeout(() => {
            wsServer.publish('/item/5', { id: 5, status: 'complete' });
            wsServer.publish('/item/6', { id: 6, status: 'initial' });
        }, 100);
    }).catch((err) => {
        console.log('start err');
        console.log(err);
    });
}).catch((regErr: any) => {
    console.log('register err');
    console.log(regErr);
});

let options: Nes.ClientConnectOptions = {delay: 3};

let wsClient: Nes.Client = new Nes.Client('ws://localhost', options);
wsClient.connect().then(() => {
    wsClient.subscribe('/item/5', (update) => {
        wsClient.request('/test').then(({ payload, statusCode }) => {
            console.log(update);
            console.log(payload);
            if(payload.test === 'passes') {
                process.exit(0);
            }
        }).catch((reqErr: any) => {
            console.log('request err');
            console.log(reqErr);
        })
    }).catch((subErr: any) => {
        console.log('subscribe err');
        console.log(subErr);
    });
}).catch((err: any) => {
    console.log('start err');
    console.log(err);
});
