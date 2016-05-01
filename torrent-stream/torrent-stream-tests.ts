/// <reference path="./torrent-stream.d.ts" />

import * as torrentStream from "torrent-stream";

let engine: TorrentStream.TorrentEngine = torrentStream("magnet");
console.log(engine.swarm.downloaded)
