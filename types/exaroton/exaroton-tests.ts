import { Client } from 'exaroton';

const client = new Client('my token');

const startServer = async (name: string) => {
    const servers = await client.getServers();
    const myServer = servers.find(s => s.name === name);
    if (!myServer) throw Error("Server not found");
    myServer.setMOTD('Hello World');
    console.log(myServer?.status);
    if (myServer?.hasStatus([myServer.STATUS.ONLINE, myServer.STATUS.STARTING])) return;
    await myServer?.start();
    console.log(`${myServer?.name} has benn started. Running on: ${myServer?.address}`);
    console.log(myServer?.status);
    console.log(myServer?.players.max);

    const myServerProperties = myServer.getFile("server.properties");
    console.log(myServerProperties.getContent());
};

startServer('my server');
