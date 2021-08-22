import { encode, decode, encodingLength, Packet, Answer, Question } from "dns-packet";

const answer: Answer = {
    type: "A",
    name: "localhost",
    ttl: 3600,
    data: "127.0.0.1",
};

const question: Question = {
    type: "A",
    name: "localhost",
    class: "IN",
};

const inPacket: Packet = {
    additionals: [answer],
    authorities: [answer],
    answers: [answer],
    flags: 0,
    id: 0,
    questions: [question],
    type: "query",
};

const inputBuf = Buffer.alloc(0);
const length: number = encodingLength(inPacket);
const out: Buffer = encode(inPacket, inputBuf, length - length);
const outPacket: Packet = decode(out, 0);
encode(outPacket);

const records: Answer[] = [
    {
        type: "A",
        name: "localhost",
        data: "127.0.0.1",
    },
    {
        type: "AAAA",
        name: "localhost",
        data: "::1",
    },
    {
        type: "CNAME",
        name: "localhost",
        data: "example.com",
    },
    {
        type: "NS",
        name: "localhost",
        data: "ns1.localhost",
    },
    {
        type: "MX",
        name: "localhost",
        data: {
            preference: 10,
            exchange: "mx.localhost",
        },
    },
    {
        type: "TXT",
        name: "localhost",
        data: "test",
    },
    {
        type: "TXT",
        name: "localhost",
        data: Buffer.from("test"),
    },
    {
        type: "TXT",
        name: "localhost",
        data: ["foo", "bar"],
    },
    {
        type: "SRV",
        name: "_imap._tcp.localhost",
        data: {
            priority: 10,
            weight: 60,
            port: 5060,
            target: "imap.example.com",
        },
    },
    {
        type: "SOA",
        name: "localhost",
        data: {
            mname: "localhost",
            rname: "hostmaster.localhost",
            serial: 2021122101,
        },
    },
    {
        type: "CAA",
        name: "localhost",
        data: {
            issuerCritical: false,
            tag: "issue",
            value: "ca.example.com",
        },
    },
    {
        type: "TXT",
        name: "version.bind",
        class: "CH",
        data: "1.2.3",
    },
];
encode({ answers: records });
