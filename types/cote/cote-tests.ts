import * as cote from 'cote';

/**
 * Examples from https://github.com/dashersw/cote. Note some differences, such
 * as stricter request shape and Promises everywhere.
 */
class Readme {
    requester() {
        const randomRequester = new cote.Requester({
            name: 'Random Requester',
            namespace: 'rnd',
            key: 'a certain key',
            requests: ['randomRequest']
        });

        const req = {
            type: 'randomRequest',
            payload: {
                val: Math.floor(Math.random() * 10)
            }
        };

        randomRequester.send(req)
            .then(console.log)
            .catch(console.log)
            .then(() => process.exit());
    }

    responder() {
        const randomResponder = new cote.Responder({
            name: 'Random Responder',
            namespace: 'rnd',
            key: 'a certain key',
            respondsTo: ['randomRequest']
        });

        interface RandomRequest {
            type: 'randomRequest';
            payload: { val: number };
        }

        randomResponder.on('randomRequest', (req: RandomRequest) => {
            const answer = Math.floor(Math.random() * 10);
            console.log('request', req.payload.val, 'answering with', answer);
            return Promise.resolve(answer);
        });
    }

    mongooseResponder() {
        const UserModel = require('UserModel'); // a promise-based model API

        const userResponder = new cote.Responder({ name: 'User Responder' });

        interface Find {
            type: 'find';
            payload: { username: string };
        }

        userResponder.on('find', (req: Find) => UserModel.findOne(req.payload));
    }

    mongooseRequester() {
        const userRequester = new cote.Requester({ name: 'User Requester' });

        userRequester
            .send({ type: 'find', payload: { username: 'foo' } })
            .then(user => console.log(user))
            .then(() => process.exit());
    }

    publisher() {
        const randomPublisher = new cote.Publisher({
            name: 'Random Publisher',
            namespace: 'rnd',
            key: 'a certain key',
            broadcasts: ['randomUpdate']
        });

        setInterval(() => {
            const action = {
                type: 'randomUpdate',
                payload: {
                    val: Math.floor(Math.random() * 1000)
                }
            };

            console.log('emitting', action);

            randomPublisher.publish('randomUpdate', action);
        }, 3000);
    }

    subscriber() {
        const randomSubscriber = new cote.Subscriber({
            name: 'Random Subscriber',
            namespace: 'rnd',
            key: 'a certain key',
            subscribesTo: ['randomUpdate']
        });

        randomSubscriber.on('randomUpdate', (req) => {
            console.log('notified of ', req);
        });
    }

    sockend() {
        const app = require('http').createServer(handler);
        const io = require('socket.io').listen(app);
        const fs = require('fs');

        app.listen(process.argv[2] || 5555);

        function handler(req: any, res: any) {
            fs.readFile(__dirname + '/index.html', (err: Error, data: Buffer) => {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading index.html');
                }

                res.writeHead(200);
                res.end(data);
            });
        }

        const sockend = new cote.Sockend(io, {
            name: 'Sockend',
            key: 'a certain key'
        });
    }

    keys() {
        const purchaseRequester = new cote.Requester({
            name: 'Purchase Requester',
            key: 'purchase'
        });

        const inventoryRequester = new cote.Requester({
            name: 'Inventory Requester',
            key: 'inventory'
        });
    }

    namespacesFront() {
        const responder = new cote.Responder({
            name: 'Conversion Sockend Responder',
            namespace: 'conversion'
        });

        const conversionRequester = new cote.Requester({
            name: 'Conversion Requester',
            key: 'conversion backend'
        });

        responder.on('convert', (req) => {
            return conversionRequester.send(req); // proxy the request
        });
    }

    namespacesBack() {
        const responder = new cote.Responder({
            name: 'Conversion Responder',
            key: 'conversion backend'
        });

        const rates: { [key: string]: number } = {
            usd_eur: 0.91,
            eur_usd: 1.10
        };

        interface Convert {
            type: 'convert';
            payload: {
                amount: number,
                from: string,
                to: string
            };
        }

        responder.on('convert', (req: Convert) => {
            const { payload } = req;
            return Promise.resolve(payload.amount * rates[`${payload.from}_${payload.to}`]);
        });
    }

    multicast() {
        const cote = require('cote')({ multicast: '239.1.11.111' });
    }

    multicastComponent() {
        const req = new cote.Requester({ name: 'req' }, { multicast: '239.1.11.111' });
    }

    broadcast() {
        const cote = require('cote')({ broadcast: '255.255.255.255' });
    }

    broadcastComponent() {
        const req = new cote.Requester({ name: 'req' }, { broadcast: '255.255.255.255' });
    }
}

/**
 * Fixes for initial errors and shortcomings.
 * @see https://github.com/makepost/DefinitelyTyped/projects/1
 */
class InitialObservations {
    action() {
        const action: cote.Action = { type: 'someAction' };
    }

    eventEmitter() {
        const quitter = new cote.Requester({ name: 'Quitter' });
        quitter.onAny(() => process.exit);

        const indecisive = new cote.Responder({ name: 'Indecisive' });
        const callback = <T> (x: T) => Promise.resolve(x);
        indecisive.on('choice', callback);
        indecisive.off('choice', callback);

        const techno = new cote.Publisher({ name: 'Techno' });
        techno.removeAllListeners();

        const village = new cote.Subscriber({ name: 'Village' });
        const doHelp = () => { };
        village.many('wolf', 2, doHelp);
        village.emit('wolf');
        village.emit('wolf');
        const emptyArray = village.listenersAny();
        village.emit('wolf'); // no reaction

        const eternity = new cote.Sockend(null as any, { name: 'Eternity' });
        const handler = () => {
            if (Math.random() === Number.MIN_VALUE) {
                console.log('It happened.');
                eternity.offAny(handler);
            }
        };
        eternity.addListener('request', handler);

        const monitor = new cote.Monitor({ name: 'Monitor' });
        monitor.setMaxListeners(1);
        monitor.once('foobar', () => {
            monitor.removeAllListeners();
            monitor.once('foobar', () => {
                console.log('Not a warning.');
            });
        });
    }
}
