/// <reference types="node"/>
import ndn = require("ndn-js");

let blob = new ndn.Blob();
blob = new ndn.Blob(blob);
blob = new ndn.Blob(Buffer.alloc(4));
blob = new ndn.Blob([0x08, 0x01, 0x41]);
blob = new ndn.Blob("str");

let buf: Buffer = blob.buf();
let b: boolean = blob.equals(blob);
b = blob.isNull();
let n: number = blob.size();

let sb = new ndn.SignedBlob();
sb = new ndn.SignedBlob(blob, 20, 40);
n = sb.getSignedPortionBeginOffset();
n = sb.getSignedPortionEndOffset();
buf = sb.signedBuf();
n = sb.signedSize();
