/// <reference path="./torrent-stream.d.ts" />

import * as torrentStream from "torrent-stream";

let engine: TorrentEngine = torrentStream("magnet");
console.log(engine.sward.downloaded)