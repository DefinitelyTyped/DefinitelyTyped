import * as fs from "fs";
import parseTorrent, { type Instance, remote, toMagnetURI, toTorrentFile } from "parse-torrent";

// info hash (as a hex string)
const hash = "d2474e86c95b19b8bcfdb92bc12c9d44667cfa36";
const result1 = await parseTorrent(hash);
// $ExpectType string
result1.infoHash;

// info hash (as a Uint8Array)
const result2 = await parseTorrent(new Uint8Array(20));
// $ExpectType string
result2.infoHash;

// magnet uri (as a utf8 string)
const magnet = `magnet:?xt=urn:btih:${hash}`;
const result3 = await parseTorrent(magnet);
// $ExpectType string
result3.infoHash;

// stream-magnet uri
const streamMagnet = `stream-magnet:?xt=urn:btih:${hash}`;
const result4 = await parseTorrent(streamMagnet);
// $ExpectType string
result4.infoHash;

// magnet uri with torrent name
const result5 = await parseTorrent(
    `magnet:?xt=urn:btih:${hash}&dn=Leaves%20of%20Grass%20by%20Walt%20Whitman.epub`,
);
// $ExpectType string | undefined
result5.name;

// magnet uri with trackers
const result6 = await parseTorrent(
    `magnet:?xt=urn:btih:${hash}&tr=http%3A%2F%2Ftracker.example.com%2Fannounce`,
);
// $ExpectType string[]
result6.announce;

// .torrent file (as a Uint8Array)
const torrentBuf = fs.readFileSync("torrents/leaves.torrent");
const result7 = await parseTorrent(new Uint8Array(torrentBuf));
// $ExpectType string
result7.infoHash;
// $ExpectType string | undefined
result7.name;
// $ExpectType string[]
result7.announce;
// $ExpectType ParsedFile[] | undefined
result7.files;
// $ExpectType number | undefined
result7.length;
// $ExpectType number | undefined
result7.pieceLength;
// $ExpectType number | undefined
result7.lastPieceLength;
// $ExpectType string[] | undefined
result7.pieces;

// parsed torrent (as an Object)
const parsedObj: Instance = {
    infoHash: hash,
    announce: [],
};
const result8 = await parseTorrent(parsedObj);
// $ExpectType string
result8.infoHash;

// toMagnetURI
const magnetUri = toMagnetURI({ infoHash: hash });
// $ExpectType string
magnetUri;

// toTorrentFile
const torrentFile = toTorrentFile({ infoHash: hash, announce: [] });

// remote with callback
remote(hash, (err, torrent) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Instance | undefined
    torrent;
});

// remote with options and callback
remote(hash, { signal: AbortSignal.timeout(5000) }, (err, torrent) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Instance | undefined
    torrent;
});

// remote with Blob
if (typeof Blob !== "undefined") {
    const blob = new Blob([new Uint8Array([1, 2, 3])]);
    remote(blob, (err, torrent) => {
        // $ExpectType Error | null
        err;
        // $ExpectType Instance | undefined
        torrent;
    });
}
