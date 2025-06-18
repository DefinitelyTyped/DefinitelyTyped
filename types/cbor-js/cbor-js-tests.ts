import * as CBOR from "cbor-js";

let initial = { Hello: "World" };
let encoded = CBOR.encode(initial);
let decoded = CBOR.decode(encoded);
