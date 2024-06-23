import * as clarinet from "clarinet";

const stream = clarinet.createStream({});

const parser = clarinet.parser({});

parser.close();
parser.end();
const line: number = parser.line;
