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
