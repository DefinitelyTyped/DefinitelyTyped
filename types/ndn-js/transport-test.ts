import ndn = require("ndn-js");

let face = new ndn.Face({host: 'hobo.cs.arizona.edu', port: 6363});
face = new ndn.Face(new ndn.TcpTransport(), new ndn.TcpTransport.ConnectionInfo("hobo.cs.arizona.edu", 9696));
face = new ndn.Face(new ndn.UnixTransport(), new ndn.UnixTransport.ConnectionInfo("/run/nfd.sock"));
face = new ndn.Face(new ndn.WebSocketTransport(), new ndn.WebSocketTransport.ConnectionInfo("hobo.cs.arizona.edu", 9696));
