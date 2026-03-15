import unpipe = require("unpipe");
import { Readable, PassThrough } from "stream";

const readable = new Readable();
const passThrough = new PassThrough();

// $ExpectType void
unpipe(readable);

// PassThrough extends Readable, so it should work
// $ExpectType void
unpipe(passThrough);

// @ts-expect-error - requires a Readable stream argument
unpipe();

// @ts-expect-error - argument must be a stream
unpipe("not a stream");
