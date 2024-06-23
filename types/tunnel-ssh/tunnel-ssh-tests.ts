import { ListenOptions } from "net";
import { ConnectConfig } from "ssh2";
import { createTunnel, ForwardOptions, TunnelOptions } from "tunnel-ssh";

const tunnelOptions: TunnelOptions = {
    autoClose: true,
};

const serverOptions: ListenOptions = {
    port: 22,
};

const sshOptions: ConnectConfig = {
    host: "localhost",
    port: 22,
    username: "username",
    password: "password",
};

const forwardOptions: ForwardOptions = {
    srcAddr: "localhost",
    srcPort: 5433,
    dstAddr: "localhost",
    dstPort: 5432,
};

(async () => {
    try {
        const [server, client] = await createTunnel(tunnelOptions, serverOptions, sshOptions, forwardOptions);
        client.end();
        server.close();
    } catch (err) {
        console.log(err);
    }
})();
