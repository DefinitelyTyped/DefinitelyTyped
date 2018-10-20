/// <reference types="node"/>
import ndn = require("ndn-js");

function testBlob() {
    let blob = new ndn.Blob();
    blob = new ndn.Blob(blob);
    blob = new ndn.Blob(Buffer.alloc(4));
    blob = new ndn.Blob([0x08, 0x01, 0x41]);
    blob = new ndn.Blob("str");

    let n: number = blob.size();
    let buf: Buffer = blob.buf();
    let b: boolean = blob.equals(blob);
    let s: string = blob.toHex();
    s = blob.toString();
    b = blob.isNull();

    let sb = new ndn.SignedBlob();
    sb = new ndn.SignedBlob(sb, 20, 40);
    n = sb.signedSize();
    buf = sb.signedBuf();
    n = sb.getSignedPortionBeginOffset();
    n = sb.getSignedPortionEndOffset();
}

function testName() {
    const digestBlob = new ndn.Blob([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    let comp = new ndn.Name.Component();
    comp = new ndn.Name.Component(comp);
    comp = new ndn.Name.Component("A");
    comp = new ndn.Name.Component([0x41], ndn.Name.ComponentType.GENERIC);
    comp = new ndn.Name.Component([0x41], ndn.Name.ComponentType.OTHER_CODE, 1000);

    let blob: ndn.Blob = comp.getValue();
    const ct: ndn.Name.ComponentType = comp.getType();
    let n: number = comp.getOtherTypeCode();
    let s: string = comp.toEscapedString();

    comp = comp.getSuccessor();
    let b: boolean = comp.equals(comp);
    n = comp.compare(comp);

    b = comp.isImplicitSha256Digest();
    b = comp.isParametersSha256Digest();
    comp = ndn.Name.Component.fromImplicitSha256Digest(digestBlob);
    comp = ndn.Name.Component.fromParametersSha256Digest(Buffer.alloc(32));

    b = comp.isSegment();
    b = comp.isSegmentOffset();
    b = comp.isVersion();
    b = comp.isTimestamp();
    b = comp.isSequenceNumber();
    b = comp.isGeneric();

    n = comp.toNumber();
    n = comp.toNumberWithMarker(0xFD);
    n = comp.toSegment();
    n = comp.toSegmentOffset();
    n = comp.toVersion();
    n = comp.toTimestamp();
    n = comp.toSequenceNumber();

    comp = ndn.Name.Component.fromNumber(200);
    comp = ndn.Name.Component.fromNumber(200, ndn.Name.ComponentType.OTHER_CODE, 1000);
    comp = ndn.Name.Component.fromNumberWithMarker(200, 0xFD);
    comp = ndn.Name.Component.fromSegment(0);
    comp = ndn.Name.Component.fromSegmentOffset(0);
    comp = ndn.Name.Component.fromVersion(4);
    comp = ndn.Name.Component.fromTimestamp(123456789);
    comp = ndn.Name.Component.fromSequenceNumber(1);

    let name = new ndn.Name();
    name = new ndn.Name("/A");
    name = new ndn.Name(name);
    name = new ndn.Name(["A", Buffer.from([0x42]), name]);

    name.set("/B");
    name.clear();
    name = name.getSubName(1)
               .getSubName(1, 4)
               .getPrefix(3);
    n = name.size();
    comp = name.get(2);

    name = name.append(ndn.Name.Component.fromSegment(4))
               .append("A", ndn.Name.ComponentType.OTHER_CODE, 1000)
               .appendSegment(0)
               .appendSegmentOffset(1)
               .appendVersion(2)
               .appendTimestamp(3)
               .appendSequenceNumber(4)
               .appendImplicitSha256Digest(digestBlob)
               .appendParametersSha256Digest(Buffer.alloc(32));

    n = name.compare(name);
    n = name.compare(0, 2, name, 1, 3);
    b = name.equals(name);
    name = name.getSuccessor();
    b = name.match(name);
    b = name.isPrefixOf(name);

    blob = name.wireEncode();
    name.wireDecode(blob);
    s = name.toUri();
    name = ndn.Name.fromEscapedString(s);
}

function testInterest() {
    let interest = new ndn.Interest();
    interest = new ndn.Interest("/A");
    interest = new ndn.Interest(interest);

    const name: ndn.Name = interest.setName("/B").getName();
    let b: boolean = interest.setCanBePrefix(false).getCanBePrefix();
    b = interest.setMustBeFresh(true).getMustBeFresh();
    const fh: any = interest.setForwardingHint({}).getMustBeFresh();
    let blob: ndn.Blob = interest.getNonce();
    interest.refreshNonce();
    const n: number = interest.setInterestLifetimeMilliseconds(8888).getInterestLifetimeMilliseconds();

    b = interest.matchesData({});
    b = interest.matchesName(name);

    blob = name.wireEncode();
    name.wireDecode(blob);
}

function testFaceTransport() {
    let face = new ndn.Face();
    face = new ndn.Face({host: 'hobo.cs.arizona.edu', port: 6363});
    face = new ndn.Face(new ndn.TcpTransport(), new ndn.TcpTransport.ConnectionInfo("hobo.cs.arizona.edu", 9696));
    face = new ndn.Face(new ndn.UnixTransport(), new ndn.UnixTransport.ConnectionInfo("/run/nfd.sock"));
    face = new ndn.Face(new ndn.WebSocketTransport(), new ndn.WebSocketTransport.ConnectionInfo("hobo.cs.arizona.edu", 9696));
}
