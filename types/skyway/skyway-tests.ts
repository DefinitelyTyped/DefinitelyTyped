const peerByOption: Peer = new Peer({
    key: 'peerKey',
    debug: 3
});

peerByOption.listAllPeers((items) => {
    for (let item in items) {
        console.log(decodeURI(items[item]));
    }
});

const peerByIdAndOption: Peer = new Peer('peerid', {
    key: 'peerKey',
    debug: 3
});

let id = peerByOption.id;
let connections = peerByOption.connections;

peerByOption.disconnect();
peerByOption.destroy();

let connection = peerByOption.connect("id", {
    label: 'chat',
    serialization: 'none',
    metadata: { message: 'hi i want to chat with you!' }
});

let call = peerByOption.call('callto-id', (window as any).localStream);

let openHandler = () => console.log("open");
peerByOption.on("open", openHandler);
peerByOption.on("connection", (c) => console.log("connection"));
peerByOption.on("call", (media) => console.log("call"));
peerByOption.on("close", () => console.log("close"));
peerByOption.on("disconnected", () => console.log("disconnected"));
peerByOption.on("error", (err) => console.log(err));
