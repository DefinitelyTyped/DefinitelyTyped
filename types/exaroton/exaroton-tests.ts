import { Client } from 'exaroton';

const client = new Client('my token');

const account = await client.getAccount();
console.log('My account is ' + account.name + ' and I have ' + account.credits + ' credits.');

const servers = await client.getServers();
for (let server of servers) {
    console.log(server.name + ': ' + server.id);
}

const server = client.server('my server');
await server.get();
console.log(server.name + ': ' + server.id);

console.log(server.status);

if (server.hasStatus(server.STATUS.ONLINE)) {
    console.log('Server is online.');
} else if (server.hasStatus([server.STATUS.PREPARING, server.STATUS.LOADING, server.STATUS.STARTING])) {
    console.log('Server is online soon.');
} else {
    console.log('Server is offline.');
}

try {
    await server.start();
    await server.stop();
    await server.restart();
} catch (e) {
    console.error(e.message);
}

try {
    await server.executeCommand('say Hello world!');
} catch (e) {
    console.error(e.message);
}

try {
    let logs = await server.getLogs();
    console.log(logs);
} catch (e) {
    console.error(e.message);
}

try {
    let url = await server.shareLogs();
    console.log(url);
} catch (e) {
    console.error(e.message);
}

try {
    let ram = await server.getRAM();
    console.log('This server has ' + ram + ' GB RAM.');
} catch (e) {
    console.error(e.message);
}

try {
    await server.setRAM(8);
} catch (e) {
    console.error(e.message);
}

try {
    let motd = await server.getMOTD();
    console.log(motd);
} catch (e) {
    console.error(e.message);
}

try {
    await server.setMOTD('Hello world!');
} catch (e) {
    console.error(e.message);
}

try {
    let lists = await server.getPlayerLists();
    console.log(lists);
} catch (e) {
    console.error(e.message);
}

try {
    let list = server.getPlayerList('whitelist');
    console.log(list);
} catch (e) {
    console.error(e.message);
}

try {
    let list = server.getPlayerList('whitelist');
    let entries = await list.getEntries();
    console.log(entries);
} catch (e) {
    console.error(e.message);
}

try {
    let list = server.getPlayerList('whitelist');
    await list.addEntry('Steve'); // add just one entry
    await list.addEntries(['Steve', 'Alex']); // add multiple entries at once
    console.log(await list.getEntries());
} catch (e) {
    console.error(e.message);
}

try {
    let list = server.getPlayerList('whitelist');
    await list.deleteEntry('Steve'); // delete just one entry
    await list.deleteEntries(['Steve', 'Alex']); // delete multiple entries at once
    console.log(await list.getEntries());
} catch (e) {
    console.error(e.message);
}

server.subscribe();
server.on('status', server => {
    console.log(server.status);
});

server.subscribe('console');
server.on('console:line', function (data) {
    console.log(data.line);
});

try {
    await server.executeCommand('say Hello world!');
} catch (e) {
    console.error(e.message);
}

server.subscribe('tick');
server.on('tick:tick', function (data) {
    console.log('Tick time: ' + data.averageTickTime + 'ms');
    console.log('TPS: ' + data.tps);
});

server.subscribe(['stats', 'heap']);
server.on('stats:stats', function (data) {
    console.log(data.memory.usage);
});
server.on('heap:heap', function (data) {
    console.log(data.usage);
});

server.unsubscribe('console');
server.unsubscribe(['tick', 'heap']);
server.unsubscribe(); // this disconnects the websocket connection
