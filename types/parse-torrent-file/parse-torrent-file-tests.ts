import parseTorrentFile = require('parse-torrent-file');
import * as fs from 'fs';

const torrent = fs.readFileSync(__filename);
try {
    const parsed = parseTorrentFile(torrent);
    console.log(parsed.name);
} catch (e) {
    // the torrent file was corrupt
    console.error(e);
}
