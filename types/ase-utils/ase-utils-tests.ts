/// <reference types="node" />

import * as Ase from "ase-utils";

// $ExpectType DecodeResult
Ase.decode("");
// $ExpectType DecodeResult
Ase.decode(new Buffer(0));
// $ExpectType ArrayBuffer
Ase.encode({ colors: [] });
