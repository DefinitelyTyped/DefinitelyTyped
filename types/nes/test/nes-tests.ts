import Hapi = require('hapi');
import Nes = require('nes');

var server: Hapi.Server = new Hapi.Server();
server.connection({port: 8080});

server.register(Nes, (regErr) => {
    if(regErr) {
        console.log('register err');
        console.log(regErr);
    } else {
        // No longer need to cast to Nes.Server as Hapi.Server has been modified directly.
        // let wsServer: Nes.Server = server as Nes.Server;
        let wsServer: Hapi.Server = server;
        wsServer.subscription('/item/{id}');
        wsServer.route( {
            method: 'GET',
            path: '/test',
            config: {
                handler: (request, reply) => {
                    reply({test: 'passes ' + request.socket.id});
                }
            }
        });
        wsServer.start((err: any) => {
            if(err) {
                console.log('start err');
                console.log(err);
            } else {
                setTimeout(() => {
                    wsServer.publish('/item/5', { id: 5, status: 'complete' });
                    wsServer.publish('/item/6', { id: 6, status: 'initial' });
                }, 100);
            }
        });
    }
});

let options: Nes.ClientConnectOptions = {delay: 3};

let wsClient: Nes.Client = new Nes.Client('ws://localhost:8080', options);
wsClient.connect((err: any) => {
    if(err) {
        console.log('start err');
        console.log(err);
    } else {
        wsClient.subscribe('/item/5', (update) => {
            wsClient.request('/test', (reqErr, payload, statusCode) => {
                if(reqErr) {
                    console.log('request err');
                    console.log(reqErr);
                } else {
                    console.log(update);
                    console.log(payload);
                    if(payload.test === 'passes') {
                        process.exit(0);
                    }
                }
            })
        }, (subErr) => {
            if(subErr) {
                console.log('subscribe err');
                console.log(subErr);
            }
        });
    }
});
