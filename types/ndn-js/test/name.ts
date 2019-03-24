/// <reference types="node"/>
import ndn = require("ndn-js");

const DIGEST = new ndn.Blob(Buffer.alloc(32));

let comp = new ndn.Name.Component();
comp = new ndn.Name.Component([0x41]);
comp = new ndn.Name.Component(new ArrayBuffer(4), ndn.ComponentType.GENERIC);
comp = new ndn.Name.Component(Buffer.alloc(4), ndn.ComponentType.OTHER_CODE, 1000);
comp = new ndn.Name.Component(new Uint8Array(4));
comp = new ndn.Name.Component("A");
comp = new ndn.Name.Component(new ndn.Blob());
comp = new ndn.Name.Component(comp);

let n: number = comp.compare(comp);
let b: boolean = comp.equals(comp);
comp = ndn.Name.Component.fromImplicitSha256Digest(DIGEST);
comp = ndn.Name.Component.fromParametersSha256Digest(DIGEST);
n = comp.getOtherTypeCode();
comp = comp.getSuccessor();
const ct: ndn.ComponentType = comp.getType();
let blob: ndn.Blob = comp.getValue();
b = comp.isGeneric();
b = comp.isImplicitSha256Digest();
b = comp.isParametersSha256Digest();
let s: string = comp.toEscapedString();

comp = ndn.Name.Component.fromNumber(200);
comp = ndn.Name.Component.fromNumber(200, ndn.ComponentType.OTHER_CODE, 1000);
comp = ndn.Name.Component.fromNumberWithMarker(200, 0xFD);
comp = ndn.Name.Component.fromSegment(0);
comp = ndn.Name.Component.fromSegmentOffset(0);
comp = ndn.Name.Component.fromSequenceNumber(1);
comp = ndn.Name.Component.fromTimestamp(123456789);
comp = ndn.Name.Component.fromVersion(4);

b = comp.isSegment();
b = comp.isSegmentOffset();
b = comp.isSequenceNumber();
b = comp.isTimestamp();
b = comp.isVersion();

n = comp.toNumber();
n = comp.toNumberWithMarker(0xFD);
n = comp.toSegment();
n = comp.toSegmentOffset();
n = comp.toSequenceNumber();
n = comp.toTimestamp();
n = comp.toVersion();

let name = new ndn.Name();
name = new ndn.Name([new ndn.Name.Component("A"), new Uint8Array(2)]);
name = new ndn.Name("/A");
name = new ndn.Name(name);

name = name.append(ndn.Name.Component.fromSegment(4))
           .append("A", ndn.ComponentType.OTHER_CODE, 1000)
           .appendImplicitSha256Digest(DIGEST)
           .appendParametersSha256Digest(DIGEST)
           .appendSegment(0)
           .appendSegmentOffset(1)
           .appendSequenceNumber(4)
           .appendTimestamp(3)
           .appendVersion(2);

name.clear();
n = name.compare(name);
n = name.compare(0, 2, name, 1, 3);
b = name.equals(name);
name = ndn.Name.fromEscapedString(s);
comp = name.get(2);
name = name.getPrefix(3);
name = name.getSubName(1).getSubName(1, 4);
name = name.getSuccessor();
b = name.match(name);
name.set("/B");
n = name.size();
s = name.toUri();
s = name.toUri(true);
name.wireDecode(blob);
name.wireDecode(Buffer.alloc(4));
blob = name.wireEncode();
