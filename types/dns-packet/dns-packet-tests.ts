import { encode, decode, encodingLength, streamEncode, streamDecode, Packet, Answer, Question, RECURSION_DESIRED } from "dns-packet";

const answer: Answer = {
    type: "A",
    name: "localhost",
    ttl: 3600,
    data: "127.0.0.1",
    class: "ANY",
    flush: true
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
    {
        type: "OPT",
        name: ".",
        udpPayloadSize: 65535,
        extendedRcode: 255,
        ednsVersion: 255,
        flags: 65535,
        flag_do: true,
        options: [
            {
                code: 8,
				type: "CLIENT_SUBNET",
				sourcePrefixLength: 0,
				scopePrefixLength: 0,
				ip: "127.0.0.1",
            },
			{
                code: 8,
				ip: "127.0.0.1",
            },
			{
                code: 11,
                type: "TCP_KEEPALIVE"
            },
			{
                code: 11,
				timeout: 2468,
            },
			{
                code: 12,
				length: 13,
            },
			{
                code: 14,
				tags: [],
            },
			{
                code: 14,
				tags: [256],
            }
        ]
    }
];
encode({ answers: records });

// https://github.com/mafintosh/dns-packet/blob/5aebb85c3221292e994d01b68cadf067e78efabf/examples/tcp.js
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let buf = streamEncode({
  type: 'query',
  id: getRandomInt(1, 65534),
  flags: RECURSION_DESIRED,
  questions: [{
    type: 'A',
    name: 'google.com'
  }]
});
streamDecode(buf);
buf = buf.slice(2 + streamDecode.bytes);
