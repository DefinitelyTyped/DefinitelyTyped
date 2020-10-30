import createTorrent = require('create-torrent');
import fs = require('fs');

createTorrent('test', (err, torrent) => {
    if (err) {
        return;
    }

    fs.writeFileSync('test.torrent', torrent);
});

createTorrent(
    'test',
    {
        name: 'test',
        comment: 'test',
        createdBy: 'test',
        creationDate: Date.now(),
        private: true,
        pieceLength: 100,
        announceList: [['test']],
        urlList: ['test'],
        info: {
            test: 'test',
        },
    },
    (err, torrent) => {
        if (err) {
            return;
        }

        fs.writeFileSync('test.torrent', torrent);
    },
);
