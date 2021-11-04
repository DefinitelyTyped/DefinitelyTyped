import P2P = require("socket.io-p2p");
import io = require("socket.io-client");

const socket = io();
const p2p = new P2P(socket);

p2p.on("ready", () => {
    p2p.usePeerConnection = true;
    p2p.emit("peer-obj", { peerId: 1 });
});

p2p.on("peer-msg", data => {
    console.log(data);
});
