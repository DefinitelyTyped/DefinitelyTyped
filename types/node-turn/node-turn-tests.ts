import Turn = require('node-turn');

const server1 = new Turn({});

server1.start();
server1.stop();

const server2 = new Turn({
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
