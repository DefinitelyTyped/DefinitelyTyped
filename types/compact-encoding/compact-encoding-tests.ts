import cenc = require("compact-encoding");

const state = cenc.state();
state.start = 123;
state.end = 456;
state.buffer = new Uint8Array(1);

cenc.uint.preencode(state, 42);
cenc.string.preencode(state, "hi");
cenc.raw.preencode(state, new Uint8Array(3));
cenc.raw.string.preencode(state, "hi");
// @ts-expect-error
cenc.uint.preencode(state, "string");

cenc.uint.encode(state, 42);
cenc.string.encode(state, "hi");
cenc.raw.encode(state, new Uint8Array(3));
cenc.raw.string.encode(state, "hi");
// @ts-expect-error
cenc.uint.encode(state, "string");

const n: number = cenc.uint.decode(state);
const s1: string = cenc.string.decode(state);
const b: Uint8Array = cenc.raw.decode(state);
const s2: string = cenc.raw.string.decode(state);
// @ts-expect-error
const s3: string = cenc.uint.decode(state);

const buf: Uint8Array = cenc.encode(cenc.bool, true);
const bool: boolean = cenc.decode(cenc.bool, buf);
