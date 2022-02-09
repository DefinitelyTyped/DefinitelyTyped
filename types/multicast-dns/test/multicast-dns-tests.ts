import makeMdns = require("multicast-dns");
import * as dgram from "dgram";

const mdns = makeMdns();
mdns; // $ExpectType MulticastDNS
makeMdns({ port: 1234 });
makeMdns({ type: "udp4" });
makeMdns({ type: "udp6" });
makeMdns({ ip: "1.2.3.4" });
makeMdns({ interface: "1.2.3.4" });
makeMdns({ socket: dgram.createSocket("udp4") });
makeMdns({ reuseAddr: false });
makeMdns({ bind: false });
makeMdns({ bind: "1.2.3.4" });
makeMdns({ multicast: false });
makeMdns({ ttl: 1 });
makeMdns({ loopback: false });

mdns.query("brunhilde.local", "A");
mdns.query("brunhilde.local", "A");
mdns.query("brunhilde.local", "A", (error, bytes) => {
    error; // $ExpectType Error | null
    bytes; // $ExpectType number | undefined
});
mdns.query("brunhilde.local", "A", { port: 1234 });
mdns.query("brunhilde.local", "A", { port: 1234, address: "1.2.3.4" });
mdns.query("brunhilde.local", "A", { port: 1234 }, (error, bytes) => {
    error; // $ExpectType Error | null
    bytes; // $ExpectType number | undefined
});
mdns.query([{ name: "brunhilde.local", type: "A" }]);
mdns.query([{ name: "brunhilde.local", type: "A" }], (error, bytes) => {
    error; // $ExpectType Error | null
    bytes; // $ExpectType number | undefined
});
mdns.query([{ name: "brunhilde.local", type: "A" }], { port: 1234 });
mdns.query([{ name: "brunhilde.local", type: "A" }], { port: 1234 }, (error, bytes) => {
    error; // $ExpectType Error | null
    bytes; // $ExpectType number | undefined
});
mdns.query([{ name: "brunhilde.local", type: "A" }], "A", { port: 1234 }); // $ExpectError
mdns.query([{ name: "brunhilde.local", type: "A" }], "A", { port: 1234 }, () => {}); // $ExpectError
mdns.query({
    questions: [{ name: "brunhilde.local", type: "A" }],
});
mdns.query(
    {
        questions: [{ name: "brunhilde.local", type: "A" }],
    },
    (error, bytes) => {
        error; // $ExpectType Error | null
        bytes; // $ExpectType number | undefined
    },
);
mdns.query(
    {
        questions: [{ name: "brunhilde.local", type: "A" }],
    },
    { port: 1234 },
);
mdns.query(
    {
        questions: [{ name: "brunhilde.local", type: "A" }],
    },
    { port: 1234 },
    (error, bytes) => {
        error; // $ExpectType Error | null
        bytes; // $ExpectType number | undefined
    },
);
// $ExpectError
mdns.query(
    {
        questions: [{ name: "brunhilde.local", type: "A" }],
    },
    "A",
    { port: 1234 },
);
mdns.query(
    // $ExpectError
    {
        questions: [{ name: "brunhilde.local", type: "A" }],
    },
    "A",
    { port: 1234 },
    () => {},
);

mdns.respond([{ name: "brunhilde.local", type: "A", data: "192.158.1.5" }]);
mdns.respond([{ name: "brunhilde.local", type: "A", data: "192.158.1.5" }], { port: 1234 });
mdns.respond([{ name: "brunhilde.local", type: "A", data: "192.158.1.5" }], { port: 1234 }, (error, bytes) => {
    error; // $ExpectType Error | null
    bytes; // $ExpectType number | undefined
});
mdns.respond({
    answers: [{ name: "brunhilde.local", type: "A", data: "192.158.1.5" }],
});
mdns.respond(
    {
        answers: [{ name: "brunhilde.local", type: "A", data: "192.158.1.5" }],
    },
    { port: 1234 },
);
mdns.respond(
    {
        answers: [{ name: "brunhilde.local", type: "A", data: "192.158.1.5" }],
    },
    { port: 1234 },
    (error, bytes) => {
        error; // $ExpectType Error | null
        bytes; // $ExpectType number | undefined
    },
);
mdns.respond({
    answers: [
        {
            name: "my-service",
            type: "SRV",
            data: {
                port: 9999,
                priority: 10,
                target: "my-service.example.com",
            },
        },
        {
            name: "brunhilde.local",
            type: "A",
            ttl: 300,
            data: "192.168.1.5",
        },
    ],
});

mdns.destroy();
mdns.destroy(() => {});

mdns.on("ready", () => {});
mdns.on("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.on("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.on("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.on("error", error => {
    error; // $ExpectType Error
});
mdns.on("warning", error => {
    error; // $ExpectType Error
});
mdns.on("foo", param => {
    param; // $ExpectType any
});

mdns.once("ready", () => {});
mdns.once("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.once("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.once("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.once("error", error => {
    error; // $ExpectType Error
});
mdns.once("warning", error => {
    error; // $ExpectType Error
});
mdns.once("foo", param => {
    param; // $ExpectType any
});

mdns.addListener("ready", () => {});
mdns.addListener("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.addListener("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.addListener("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.addListener("error", error => {
    error; // $ExpectType Error
});
mdns.addListener("warning", error => {
    error; // $ExpectType Error
});
mdns.addListener("foo", param => {
    param; // $ExpectType any
});

mdns.prependListener("ready", () => {});
mdns.prependListener("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.prependListener("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.prependListener("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.prependListener("error", error => {
    error; // $ExpectType Error
});
mdns.prependListener("warning", error => {
    error; // $ExpectType Error
});
mdns.prependListener("foo", param => {
    param; // $ExpectType any
});

mdns.prependOnceListener("ready", () => {});
mdns.prependOnceListener("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.prependOnceListener("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.prependOnceListener("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.prependOnceListener("error", error => {
    error; // $ExpectType Error
});
mdns.prependOnceListener("warning", error => {
    error; // $ExpectType Error
});
mdns.prependOnceListener("foo", param => {
    param; // $ExpectType any
});

mdns.off("ready", () => {});
mdns.off("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.off("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.off("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.off("error", error => {
    error; // $ExpectType Error
});
mdns.off("warning", error => {
    error; // $ExpectType Error
});
mdns.off("foo", param => {
    param; // $ExpectType any
});

mdns.removeListener("ready", () => {});
mdns.removeListener("response", (response, rinfo) => {
    response; // $ExpectType ResponsePacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.removeListener("query", (query, rinfo) => {
    query; // $ExpectType QueryPacket
    rinfo; // $ExpectType RemoteInfo
});
mdns.removeListener("message", (message, rinfo) => {
    message; // $ExpectType Required<Packet>
    rinfo; // $ExpectType RemoteInfo
});
mdns.removeListener("error", error => {
    error; // $ExpectType Error
});
mdns.removeListener("warning", error => {
    error; // $ExpectType Error
});
mdns.removeListener("foo", param => {
    param; // $ExpectType any
});

mdns.removeAllListeners("ready");
mdns.removeAllListeners("response");
mdns.removeAllListeners("query");
mdns.removeAllListeners("message");
mdns.removeAllListeners("error");
mdns.removeAllListeners("warning");
mdns.removeAllListeners("foo"); // $ExpectError

mdns.emit("ready");
mdns.emit("response", (null as any) as makeMdns.ResponsePacket, (null as any) as dgram.RemoteInfo);
mdns.emit("query", (null as any) as makeMdns.QueryPacket, (null as any) as dgram.RemoteInfo);
mdns.emit("message", (null as any) as makeMdns.FullPacket, (null as any) as dgram.RemoteInfo);
mdns.emit("error", (null as any) as Error);
mdns.emit("warning", (null as any) as Error);
mdns.emit("foo");

mdns.listeners("ready"); // $ExpectType (() => void)[]
mdns.listeners("response"); // $ExpectType ((response: ResponsePacket, rinfo: RemoteInfo) => void)[]
mdns.listeners("query"); // $ExpectType ((query: QueryPacket, rinfo: RemoteInfo) => void)[]
mdns.listeners("message"); // $ExpectType ((message: Required<Packet>, rinfo: RemoteInfo) => void)[]
mdns.listeners("error"); // $ExpectType ((err: Error) => void)[]
mdns.listeners("warning"); // $ExpectType ((err: Error) => void)[]
mdns.listeners("foo"); // $ExpectType ((...args: any[]) => void)[]

mdns.rawListeners("ready"); // $ExpectType (() => void)[]
mdns.rawListeners("response"); // $ExpectType ((response: ResponsePacket, rinfo: RemoteInfo) => void)[]
mdns.rawListeners("query"); // $ExpectType ((query: QueryPacket, rinfo: RemoteInfo) => void)[]
mdns.rawListeners("message"); // $ExpectType ((message: Required<Packet>, rinfo: RemoteInfo) => void)[]
mdns.rawListeners("error"); // $ExpectType ((err: Error) => void)[]
mdns.rawListeners("warning"); // $ExpectType ((err: Error) => void)[]
mdns.rawListeners("foo"); // $ExpectType ((...args: any[]) => void)[]

mdns.listenerCount("ready"); // $ExpectType number
mdns.listenerCount("message"); // $ExpectType number
mdns.listenerCount("query"); // $ExpectType number
mdns.listenerCount("response"); // $ExpectType number
mdns.listenerCount("error"); // $ExpectType number
mdns.listenerCount("warning"); // $ExpectType number
