import reconnect from "reconnect-core";
import { NetConnectOpts, Socket, connect } from "net";

// Approximation of example from docs
const module = reconnect<NetConnectOpts | string | number, Socket>(arg => {
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

const conn = module({
    initialDelay: 1e3,
    maxDelay: 30e3,
    strategy: "fibonacci",
    failAfter: Infinity,
    randomisationFactor: 0,
    immediate: false
}, sock => {
    sock.on("data", console.log);
});

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
