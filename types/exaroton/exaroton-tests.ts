import { Client } from 'exaroton';

const client = new Client('my token');

const startServer = async (name: string) => {
    const servers = await client.getServers();
    const myServer = servers.find(s => s.name === name);
    if (myServer?.hasStatus(myServer.STATUS.ONLINE)) return;
    myServer?.start();
    console.log(`${myServer?.name} has benn started. Running on: ${myServer?.address}`);
    console.log(myServer?.status);
};

startServer('my server');
