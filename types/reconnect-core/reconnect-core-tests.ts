import reconnect = require("reconnect-core");
import { NetConnectOpts, Socket, connect } from "net";

// Approximation of example from docs
const module: reconnect.CustomModule<NetConnectOpts | string | number, Socket> = reconnect(arg => {
    // TS can't resolve passing even the simplest union types to function overloads :-/
    // (see TS issue #14107)
    if (typeof arg === "string") {
        return connect(arg);
    } else if (typeof arg === "number") {
        return connect(arg);
    } else {
        return connect(arg);
    }
});

const opts: reconnect.ModuleOptions<Socket> = {
    failAfter: Infinity,
    immediate: false,
    initialDelay: 1e3,
    maxDelay: 30e3,
    randomisationFactor: 0,
    strategy: "fibonacci",
    onConnect: sock => {
        sock.on("data", console.log);
    },
};

const conn = module(opts);

conn.on("connect", con => con.address())
    .on("reconnect", (n, delay) => {
        n.toExponential();
        delay.toFixed();
    })
    .on("disconnect", console.log)
    .on("error", console.log)
    .connect(12345);

conn.disconnect();

conn.reconnect = false;

conn.reset();
