import {
    Answer,
    decode,
    DecodedPacket,
    encode,
    encodingLength,
    Packet,
    Question,
    RECURSION_DESIRED,
    streamDecode,
    streamEncode,
} from "dns-packet";

const answer: Answer = {
    type: "A",
    name: "localhost",
    ttl: 3600,
    data: "127.0.0.1",
    class: "ANY",
    flush: true,
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
const outPacket: DecodedPacket = decode(out, 0);
const flag_qr: boolean = outPacket.flag_qr;
const flag_aa: boolean = outPacket.flag_aa;
const flag_tc: boolean = outPacket.flag_tc;
const flag_rd: boolean = outPacket.flag_rd;
const flag_ra: boolean = outPacket.flag_ra;
const flag_z: boolean = outPacket.flag_z;
const flag_ad: boolean = outPacket.flag_ad;
const flag_cd: boolean = outPacket.flag_cd;

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
        type: "DNSKEY",
        name: "localhost",
        data: {
            algorithm: 1,
            flags: 257,
            key: Buffer.from("test"),
        },
    },
    {
        type: "DS",
        name: "localhost",
        data: {
            keyTag: 12345,
            algorithm: 8,
            digestType: 1,
            digest: Buffer.from("test"),
        },
    },
    {
        type: "NAPTR",
        name: "localhost",
        data: {
            order: 100,
            preference: 10,
            flags: "s",
            services: "SIP+D2U",
            regexp: "!^.*$!sip:customer-service@example.com!",
            replacement: "_sip._udp.example.com",
        },
    },
    {
        type: "NS",
        name: "localhost",
        data: "ns1.localhost",
    },
    {
        type: "NSEC",
        name: "localhost",
        data: {
            nextDomain: "a.domain",
            rrtypes: ["A", "TXT", "RRSIG"],
        },
    },
    {
        type: "NSEC3",
        name: "localhost",
        data: {
            algorithm: 1,
            flags: 0,
            iterations: 2,
            salt: Buffer.from("test"),
            nextDomain: Buffer.from("test"), // Hashed per RFC5155
            rrtypes: ["A", "TXT", "RRSIG"],
        },
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
                type: "TCP_KEEPALIVE",
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
            },
        ],
    },
    {
        type: "RP",
        name: "localhost",
        data: {
            mbox: "admin.example.com",
            txt: "txt.example.com",
        },
    },
    {
        type: "RRSIG",
        name: "localhost",
        data: {
            typeCovered: "A",
            algorithm: 8,
            labels: 1,
            originalTTL: 3600,
            expiration: Date.now(),
            inception: Date.now(),
            keyTag: 12345,
            signersName: "a.name",
            signature: Buffer.from("test"),
        },
    },
    {
        type: "SSHFP",
        name: "localhost",
        data: {
            algorithm: 1,
            hash: 1,
            fingerprint: "A108C9F834354D5B37AF988141C9294822F5BC00",
        },
    },
];
encode({ answers: records });

// https://github.com/mafintosh/dns-packet/blob/5aebb85c3221292e994d01b68cadf067e78efabf/examples/tcp.js
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let buf = streamEncode({
    type: "query",
    id: getRandomInt(1, 65534),
    flags: RECURSION_DESIRED,
    questions: [
        {
            type: "A",
            name: "google.com",
        },
    ],
});
streamDecode(buf);
buf = buf.slice(2 + streamDecode.bytes);
