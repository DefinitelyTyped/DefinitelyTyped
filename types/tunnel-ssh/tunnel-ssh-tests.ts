import tunnel = require("tunnel-ssh");
import Net = require("net");

const config: tunnel.Config = {
    username: "myuser",
    password: "supersecret"
};

const myTunnel: Net.Server = tunnel(config, (err: Error, server: Net.Server) => {
    if (err) {
        console.error(err.message);
        return;
    }

    server.close();
});
