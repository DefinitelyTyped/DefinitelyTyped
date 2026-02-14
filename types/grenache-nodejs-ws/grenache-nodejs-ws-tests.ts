import Link = require("grenache-nodejs-link");
import { PeerRPCClient, PeerRPCServer } from "grenache-nodejs-ws";

const link = new Link({
    grape: "http://127.0.0.1:30001",
});

link.start();

const server = new PeerRPCServer(link);
server.init();

server.listen("test_service", (payload, cb) => {
    payload;
    cb(null, { ok: true });
});

const client = new PeerRPCClient(link);
client.init();

client.request(
    "test_service",
    { ping: true },
    {},
    (err, data) => {
        if (err) throw err;
        data;
    },
);

link.stop();
