import TurnServer = require('node-turn');

const server1 = new TurnServer();

server1.start();
server1.stop();

const server2 = new TurnServer({
    listeningPort: 8085,
    minPort: 49152,
    maxPort: 65535,
    authMech: 'short-term',
    credentials: { test1: 'password' },
    debugLevel: 'ALL',
    maxAllocateLifetime: 3600,
    defaultAllocatetLifetime: 600,
    debug(level, message) {
        (globalThis as any)['console'].log(`[${level}] ${message}`);
    },
});

server2.start();
server2.addUser('test2', 'abc');
server2.removeUser('test1');
server2.removeUser('test2');
server2.stop();

class MyTurnServer extends TurnServer {
    constructor() {
        super();

        void this.software;
    }
}

const server3 = new MyTurnServer();

void server3.listeningPort;
void server3.staticCredentials;
