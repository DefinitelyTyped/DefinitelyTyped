/// <reference path="Peer.d.ts" />
/// <reference path="../webrtc/RTCPeerConnection.d.ts" />

var peerByOption: Peer = new Peer({
    key: 'peerKey',
    debug: 3,
    logFunction: ()=>{
    }
});

var peerById: Peer = new Peer("peerid");

var peerByIdAndOption: Peer = new Peer(
    "peerId",
    {
        key: 'peerKey',
        debug: 3,
        logFunction: ()=>{
        }
    });

var id = peerByOption.id;
var connections = peerByOption.connections;
var flag = peerByOption.disconnected;
flag = peerByOption.destroyed;

peerByOption.disconnect();
peerByOption.reconnect();
peerByOption.destroy();

var connection = peerById.connect("id", {
    label: 'chat',
    serialization: 'none',
    metadata: {message: 'hi i want to chat with you!'}
});

var call = peerById.call('callto-id', (<any>window).localStream);

peerById.on("open", ()=> console.log("open"));
peerById.on("connection", (c)=> console.log("connection"));
peerById.on("call", (media)=> console.log("call"));
peerById.on("close", ()=> console.log("close"));
peerById.on("disconnected", ()=> console.log("disconnected"));
peerById.on("error", (err)=> console.log(err));
