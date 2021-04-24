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
