import torrentStream = require("torrent-stream");

let engine: TorrentStream.TorrentEngine = torrentStream("magnet");
console.log(engine.swarm.downloaded)
