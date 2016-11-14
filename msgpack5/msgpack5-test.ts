import * as msgpack5 from 'msgpack5';

const packer = msgpack5();
const IN = {};
const OUT = packer.decode(packer.encode(IN));

