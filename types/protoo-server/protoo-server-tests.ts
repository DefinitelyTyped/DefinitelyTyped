import { createServer } from 'http';
import { WebSocketServer, Peer, Room, version } from 'protoo-server';

const server = createServer(() => {}).listen(5000);
const room = new Room(); // $ExpectType Room
room.closed; // $ExpectType boolean

const wss = new WebSocketServer(server);
wss.on('connectionrequest', async (info, accept, reject) => {
    const transport = accept();

    const peer: Peer = await room.createPeer('foo', transport);
    peer.id; // $ExpectType string
    peer.closed; // $ExpectType boolean
    const res = room.hasPeer('foo'); // $ExpectType boolean
    room.getPeer('foo'); // $ExpectType Peer
});

version; // $ExpectType string
