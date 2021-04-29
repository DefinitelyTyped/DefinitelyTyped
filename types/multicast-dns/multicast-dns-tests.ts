import { Packet, Question, RecordType } from "dns-packet";
import MulticastDns from "multicast-dns";
import { AddressInfo } from "node:net";

const mdns = MulticastDns({
    interface: "eth0",
    ip: "0.0.0.0",
    loopback: false,
    multicast: true,
    port: 9000,
    reuseAddr: true,
    ttl: 3600,
});

mdns.on("response", (res: Packet) => {
    mdns.send(res, err => {});
    mdns.response(res, err => {});
    mdns.respond(res, err => {});
}).on("query", (query: Packet) => {
    const rinfo: AddressInfo = { address: "127.0.0.1", family: "A", port: 1 };
    mdns.send(query, rinfo, err => {});
    mdns.response(query, rinfo, err => {});
    mdns.respond(query, rinfo, err => {});
});

const type: RecordType = "A";
const question: Question = { type: "AAAA", name: "::1" };
mdns.query("127.0.0.1", err => {});
mdns.query("127.0.0.1", type, err => {});
mdns.query("127.0.0.1", type, { address: "127.0.0.1", family: "A", port: 1 }, err => {});
mdns.query([question], err => {});

mdns.destroy(err => {});
