// Examples taken from the package readme for 1.4.2:
// https://github.com/song940/node-dns/tree/6c2041b82ba2109fbb95bc529572404508787337#dns2

import DNS = require("dns2");

const dns = new DNS();
const dnsCustom = new DNS({
    port: 53,
    retries: 10,
    recursive: false,
});

(async () => {
    const result = await dns.resolveA("google.com");
    console.log(result.answers);

    const result2 = await dns.resolveCNAME("google.com");
    console.log(result2.answers.filter(answer => answer.domain));

    const result3 = await dnsCustom.resolve("google.com", "TXT", DNS.Packet.CLASS.ANY);
    console.log(result3.answers.filter(answer => answer.data));
})();

const { Packet } = DNS;

const server = DNS.createServer({
    udp: true,
    handle: (request, send, rinfo) => {
        const response = Packet.createResponseFromRequest(request);
        const [question] = request.questions;
        const { name } = question;
        response.answers.push({
            name,
            type: Packet.TYPE.A,
            class: Packet.CLASS.IN,
            ttl: 300,
            address: "8.8.8.8",
        });
        response.answers.push({
            name,
            type: Packet.TYPE.CNAME,
            class: Packet.CLASS.IN,
            ttl: 300,
            domain: "another-name.example.com",
        });
        response.answers.push({
            name,
            type: Packet.TYPE.TXT,
            class: Packet.CLASS.IN,
            ttl: 60,
            data: "dnslink=/ipfs/123abc",
        });
        send(response);
    },
});

server.on("request", (request, response, rinfo) => {
    console.log(request.header.id, request.questions[0]);
});

server.listen({ udp: 5333 });

const serverByType = DNS.createServer({
    udp: { type: "udp4" },
    handle: (request, send, rinfo) => {
        const response = Packet.createResponseFromRequest(request);
        const [question] = request.questions;
        const { name } = question;
        response.answers.push({
            name,
            type: Packet.TYPE.A,
            class: Packet.CLASS.IN,
            ttl: 300,
            address: "8.8.8.8",
        });
        response.answers.push({
            name,
            type: Packet.TYPE.CNAME,
            class: Packet.CLASS.IN,
            ttl: 300,
            domain: "another-name.example.com",
        });
        response.answers.push({
            name,
            type: Packet.TYPE.TXT,
            class: Packet.CLASS.IN,
            ttl: 60,
            data: "dnslink=/ipfs/123abc",
        });
        send(response);
    },
});

serverByType.on("request", (request, response, rinfo) => {
    console.log(request.header.id, request.questions[0]);
});

serverByType.listen({ udp: 5344 });

const serverOnAddress = DNS.createServer({
    udp: true,
    handle: (request, send, rinfo) => {
        const response = Packet.createResponseFromRequest(request);
        const [question] = request.questions;
        const { name } = question;
        response.answers.push({
            name,
            type: Packet.TYPE.A,
            class: Packet.CLASS.IN,
            ttl: 300,
            address: "8.8.8.8",
        });
        response.answers.push({
            name,
            type: Packet.TYPE.CNAME,
            class: Packet.CLASS.IN,
            ttl: 300,
            domain: "another-name.example.com",
        });
        response.answers.push({
            name,
            type: Packet.TYPE.TXT,
            class: Packet.CLASS.IN,
            ttl: 60,
            data: "dnslink=/ipfs/123abc",
        });
        send(response);
    },
});

serverOnAddress.on("request", (request, response, rinfo) => {
    console.log(request.header.id, request.questions[0]);
});

serverOnAddress.listen({
    udp: {
        port: 5355,
        address: "0.0.0.0",
    },
});

const udpServer = new DNS.UDPServer((request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    send(response);
});

udpServer.listen(5353, "127.0.0.1");

const tcpServer = DNS.createTCPServer((request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    send(response);
});

tcpServer.listen(5454, "127.0.0.1");

const udpServerByType = new DNS.UDPServer({ type: "udp4" });
udpServerByType.on("request", (request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    send(response);
});

udpServer.listen(5555, "127.0.0.1");

// Some DNS Client exmaple codes are taken from the package readme for 2.1.6
// https://github.com/lsongdev/node-dns/blob/e4fa035aca0b8eb730bde3431fbf0c60a31a09c9/README.md
let resolve;

const { TCPClient, UDPClient, GoogleClient, DOHClient } = DNS;

// Although the readme claims this option is optional, but the actual implementations say otherwise:
// https://github.com/lsongdev/node-dns/blob/e4fa035aca0b8eb730bde3431fbf0c60a31a09c9/client/tcp.js#L30
resolve = TCPClient({ dns: "8.8.8.8" });

TCPClient({ dns: "8.8.8.8", protocol: "tcp:" });
TCPClient({ dns: "8.8.8.8", protocol: "tls:" });
TCPClient({ dns: "8.8.8.8", protocol: "tcp:", port: 53 });
TCPClient({ dns: "8.8.8.8", port: 153 });

(async () => {
    try {
        const response = await resolve("lsong.org");
        console.log(response.answers);
    } catch (error) {
        // some DNS servers (i.e cloudflare 1.1.1.1, 1.0.0.1)
        // may send an empty response when using TCP
        console.log(error);
    }
})();

resolve = UDPClient({ dns: "8.8.8.8" });

(async () => {
    try {
        const response = await resolve("lsong.org");
        console.log(response.answers);
    } catch (error) {
        // some DNS servers (i.e cloudflare 1.1.1.1, 1.0.0.1)
        // may send an empty response when using TCP
        console.log(error);
    }
})();

GoogleClient();

DOHClient({ dns: "1.1.1.1" });
DOHClient({ dns: "https://1.1.1.1" });
DOHClient({ dns: "://1.1.1.1" });
DOHClient({ dns: "https://1.1.1.1/dns-query" });
