import Hapi = require('hapi');
import Nes = require('nes');

let server: Hapi.Server = new Hapi.Server();
server.connection({port: 8080});

server.register(Nes, (regErr: any) => {
    if(regErr) {
        console.log('register err');
        console.log(regErr);
    } else {
        let wsServer: Nes.Server = server as Nes.Server;
        wsServer.subscription('/item/{id}');
        wsServer.route( {
            method: 'GET',
            path: '/test',
            config: {
                handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                    reply({test: 'passes'});
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

let wsClient: Nes.Client = new Nes.Client('ws://localhost:8080');
wsClient.connect((err: any) => {
    if(err) {
        console.log('start err');
        console.log(err);
    } else {
        wsClient.subscribe('/item/5', (update) => {
            wsClient.request('/test', (reqErr: any, payload: any, statusCode: number) => {
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
