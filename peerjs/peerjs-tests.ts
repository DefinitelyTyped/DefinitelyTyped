/// <reference path="./peerjs.d.ts" />
/// <reference path="../webrtc/RTCPeerConnection.d.ts" />

var peerByOption: PeerJs.Peer = new Peer({
    key: 'peerKey',
    debug: 3,
    logFunction: ()=>{
    }
});

peerByOption.listAllPeers(function(items){
    for(var i in items){
        console.log(decodeURI(items[i]));
    }
});

var peerById: PeerJs.Peer = new Peer("peerid");

var peerByIdAndOption: PeerJs.Peer = new Peer(
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

var connection2 = peerById.getConnection(peerByOption, "callto-id");
