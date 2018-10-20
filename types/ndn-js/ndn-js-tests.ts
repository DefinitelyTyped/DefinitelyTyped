/// <reference types="node"/>
import ndn = require("ndn-js");

function testBlob() {
    let blob = new ndn.Blob();
    blob = new ndn.Blob(blob);
    blob = new ndn.Blob(Buffer.alloc(4));
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

function testFaceTransport() {
    let face = new ndn.Face();
    face = new ndn.Face({host: 'hobo.cs.arizona.edu', port: 6363});
    face = new ndn.Face(new ndn.TcpTransport(), new ndn.TcpTransport.ConnectionInfo("hobo.cs.arizona.edu", 9696));
    face = new ndn.Face(new ndn.UnixTransport(), new ndn.UnixTransport.ConnectionInfo("/run/nfd.sock"));
    face = new ndn.Face(new ndn.WebSocketTransport(), new ndn.WebSocketTransport.ConnectionInfo("hobo.cs.arizona.edu", 9696));
}
