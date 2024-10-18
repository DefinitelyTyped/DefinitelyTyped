import { Client } from "exaroton";

const client = new Client("my token");

const startServer = async (name: string) => {
    const servers = await client.getServers();
    const myServer = servers.find(s => s.name === name);
    if (!myServer) throw Error("Server not found");
    await myServer.setMOTD("Hello World");
    console.log(myServer?.status);
    if (myServer?.hasStatus([myServer.STATUS.ONLINE, myServer.STATUS.STARTING])) return;
    await myServer?.start();
    console.log(`${myServer?.name} has benn started. Running on: ${myServer?.address}`);
    console.log(myServer?.status);
    console.log(myServer?.players.max);

    const myServerProperties = myServer.getFile("server.properties");
    const config = myServerProperties.getConfig();
    console.log(myServerProperties.getContent());

    let options = await config.getOptions();

    options.get("max-players")?.setValue(26);
    options.get("pvp")?.setValue(false);

    await config.save();

    let pools = await client.getPools();
    console.log(pools);

    let pool = client.pool("id");
    await pool.get();
    console.log(`${pool.name}: ${pool.credits}`);

    let members = await pool.getMembers();
    console.log(members);

    let poolServers = await pool.getServers();
    console.log(poolServers);

    myServer.subscribe();
    myServer.on("status", server => console.log(server.status));
    myServer.subscribe("console");
    myServer.on("console:line", data => console.log(data));
    myServer.subscribe("tick");
    myServer.on("tick:tick", data => {
        console.log(`Tick time: ${data.averageTickTime}ms`);
        console.log(`TPS: ${data.tps}`);
    });
    myServer.subscribe(["stats", "heap"]);
    myServer.on("stats:stats", data => console.log(data.memory.usage));
    myServer.on("heap:heap", data => console.log(data.usage));
};

startServer("my server");
