import WebTorrent = require('webtorrent');
import * as fs from 'fs';

const client = new WebTorrent({ utp: false });
const magnetURI = '...';
const torrentOpts = {
    private: false,
};

client.add(magnetURI, torrentOpts, torrent => {
    // Got torrent metadata!
    console.log('Client is downloading:', torrent.infoHash);

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

    torrent.files.forEach(file => {
        // Display the file by appending it to the DOM. Supports video, audio, images, and
        // more. Specify a container element (CSS selector or reference to DOM node).
        file.appendTo('body');

        file.getBuffer((err, buffer) => {
            if (err) throw err;
            console.log(buffer); // <Buffer ...>
        });

        file.appendTo('#containerElement', (err, elem) => {
            if (err) throw err; // file failed to download or display in the DOM
            console.log('New DOM node with the content', elem);
        });

        file.getBlobURL((err, url) => {
            if (err) throw err;
            const a = document.createElement('a');
            // a.download = file.name
            if (url) {
                a.href = url;
            }
            a.textContent = 'Download ' + file.name;
            document.body.appendChild(a);
        });
    });

    torrent.on('done', () => {
        console.log('torrent finished downloading');
        torrent.files.forEach(file => {
            // do something with file
        });
    });

    torrent.on('download', chunkSize => {
        console.log('chunk size: ' + chunkSize);
        console.log('total downloaded: ' + torrent.downloaded);
        console.log('download speed: ' + torrent.downloadSpeed);
        console.log('progress: ' + torrent.progress);
        console.log('======');
    });

    torrent.on('wire', (wire, addr) => {
        console.log('connected to peer with address ' + addr);
    });
});

client.seed('./file.txt', {}, torrent => {
    console.log('Client is seeding:', torrent.infoHash);
});

client.add(magnetURI, torrent => {
    // create HTTP server for this torrent
    const server = torrent.createServer();
    server.listen(1234); // start the server listening to a port

    // visit http://localhost:<port>/ to see a list of files

    // access individual files at http://localhost:<port>/<index> where index is the index
    // in the torrent.files array

    // later, cleanup...
    server.close();
    client.destroy();
});

// torrent destroy opts
client.add(magnetURI, torrent => {
    torrent.destroy({ destroyStore: true });
});

client.add(magnetURI, torrent => {
    client.remove(torrent, { destroyStore: true });
});
