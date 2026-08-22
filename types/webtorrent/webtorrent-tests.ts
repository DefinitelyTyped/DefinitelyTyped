import * as fs from "fs";
import WebTorrent, { type NodeServer, type Torrent, type TorrentFile } from "webtorrent";

const client = new WebTorrent({ utp: false });
const magnetURI = "...";
const torrentOpts = {
    private: false,
};

client.add(magnetURI, torrentOpts, (torrent: Torrent) => {
    // Got torrent metadata!
    console.log("Client is downloading:", torrent.infoHash);

    console.log(
        torrent.maxWebConns,
        torrent.ready,
        torrent.paused,
        torrent.done,
        torrent.created,
        torrent.createdBy,
        torrent.comment,
    );

    torrent.announce.forEach(announce => console.log(announce));

    console.log(torrent.length, torrent.pieceLength, torrent.lastPieceLength);
    console.log(
        torrent.pieces.reduce(
            (acc, piece) => acc + (piece ? piece.length : 0),
            0,
        ),
    );
    console.log(
        torrent.pieces.reduce(
            (acc, piece) => acc + (piece ? piece.missing : 0),
            0,
        ),
    );

    torrent.files.forEach(async (file: TorrentFile) => {
        console.log(file.name, file.path, file.length, file.size, file.type, file.offset, file.done);

        file.select();
        file.select(5);
        file.deselect();

        const readStream = file.createReadStream();
        readStream.on("data", chunk => console.log(chunk));
        const readStreamSlice = file.createReadStream({ start: 0, end: 100 });
        readStreamSlice.destroy();

        file.arrayBuffer().then(buf => console.log(buf.byteLength));
        file.arrayBuffer({ start: 0, end: 100 }).then(buf => console.log(buf.byteLength));
        file.blob().then(blob => console.log(blob.size));
        const webStream = file.stream();
        webStream.cancel();
        file.streamTo(document.querySelector("video")!);

        for await (const chunk of file) {
            console.log(chunk.length);
        }
    });

    torrent.on("done", () => {
        console.log("torrent finished downloading");
        torrent.files.forEach((file: TorrentFile) => {
            // do something with file
        });
    });

    torrent.on("download", (chunkSize: number) => {
        console.log("chunk size: " + chunkSize);
        console.log("total downloaded: " + torrent.downloaded);
        console.log("download speed: " + torrent.downloadSpeed);
        console.log("progress: " + torrent.progress);
        console.log("======");
    });

    torrent.on("wire", (wire, addr) => {
        console.log("connected to peer with address " + addr);
        console.log(wire.peerId);
    });

    torrent.on("noPeers", announceType => console.log(announceType));

    torrent.on("warning", err => console.error(err));

    torrent.select(0, 10);
    torrent.select(0, 10, 5);
    torrent.deselect(0, 10);
    torrent.critical(0, 10);

    torrent.addPeer("12.34.56.78:4444");
    torrent.removePeer("12.34.56.78:4444");
});

client.add(
    magnetURI,
    { announceList: [["wss://tracker.btorrent.xyz"], ["wss://tracker.openwebtorrent.com"]] },
    (torrent: Torrent) => {
        torrent["announce-list"].forEach(
            (tracker, trackerIndex) => tracker.forEach(url => console.log(`tracker #${trackerIndex}: ${url}`)),
        );
    },
);

client.seed("./file.txt", {}, (torrent: Torrent) => {
    console.log("Client is seeding:", torrent.infoHash);
});

client.seed([fs.readFileSync("file.txt")], (torrent: Torrent) => {
    console.log("Client is seeding:", torrent.infoHash);
});

// torrent destroy opts
client.add(magnetURI, (torrent: Torrent) => {
    torrent.destroy({ destroyStore: true });
});

client.add(magnetURI, (torrent: Torrent) => {
    client.remove(torrent, { destroyStore: true });
});

client.remove(magnetURI).then(() => { });

client.get(magnetURI).then(torrent => {
    console.log(torrent?.infoHash);
});

// createServer and streamURL
const server = client.createServer();
client.add(magnetURI, (torrent: Torrent) => {
    const file = torrent.files[0];
    console.log("Torrent file streamURL", file.streamURL);

    server.close();
    client.destroy();
});

// node server
const nodeServer: NodeServer = client.createServer({ hostname: "localhost" }, "node");
nodeServer.server.listen(0, () => { });
nodeServer.listen(1234, () => { });
nodeServer.address();
nodeServer.close();
nodeServer.destroy();

// client events
client.on("torrent", torrent => console.log(torrent.infoHash));
client.on("add", torrent => console.log(torrent.infoHash));
client.on("seed", torrent => console.log(torrent.infoHash));
client.on("remove", torrent => console.log(torrent.infoHash));
client.on("listening", () => console.log("listening"));
client.on("ready", () => console.log("ready"));
client.on("error", err => console.error(err));

// throttling
client.throttleDownload(1000);
client.throttleUpload(1000);
console.log(client.downloadSpeed, client.uploadSpeed, client.progress, client.ratio);

client.address();

// $ExpectType boolean
WebTorrent.WEBRTC_SUPPORT;

// $ExpectType boolean
WebTorrent.UTP_SUPPORT;

// $ExpectType string
WebTorrent.VERSION;
