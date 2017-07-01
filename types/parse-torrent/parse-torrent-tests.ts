import * as parseTorrent from 'parse-torrent';
import * as fs from 'fs';

// info hash (as a hex string)
parseTorrent('d2474e86c95b19b8bcfdb92bc12c9d44667cfa36');
// { infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36' }

// info hash (as a Buffer)
parseTorrent(new Buffer('d2474e86c95b19b8bcfdb92bc12c9d44667cfa36', 'hex'));
// { infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36' }

// magnet uri (as a utf8 string)
parseTorrent('magnet:?xt=urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36');
// { xt: 'urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
//   infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36' }

// magnet uri with torrent name
parseTorrent('magnet:?xt=urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36&dn=Leaves%20of%20Grass%20by%20Walt%20Whitman.epub');
// { xt: 'urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
//   dn: 'Leaves of Grass by Walt Whitman.epub',
//   infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
//   name: 'Leaves of Grass by Walt Whitman.epub' }

// magnet uri with trackers
parseTorrent('magnet:?xt=urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36&tr=http%3A%2F%2Ftracker.example.com%2Fannounce');
// { xt: 'urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
//   tr: 'http://tracker.example.com/announce',
//   infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
//   announce: [ 'http://tracker.example.com/announce' ] }

// .torrent file (as a Buffer)
parseTorrent(fs.readFileSync(__dirname + '/torrents/leaves.torrent'));
// { info:
//    { length: 362017,
//      name: <Buffer 4c 65 61 76 65 73 20 6f 66 20 47 72 61 73 73 20 62 79 20 57 61 6c 74 20 57 68 69 74 6d 61 6e 2e 65 70 75 62>,
//      'piece length': 16384,
//      pieces: <Buffer 1f 9c 3f 59 be ec 07 97 15 ec 53 32 4b de 85 69 e4 a0 b4 eb ec 42 30 7d 4c e5 55 7b 5d 39 64 c5 ef 55 d3 54 cf 4a 6e cc 7b f1 bc af 79 d1 1f a5 e0 be 06 ...> },
//   infoBuffer: <Buffer 64 36 3a 6c 65 6e 67 74 68 69 33 36 32 30 31 37 65 34 3a 6e 61 6d 65 33 36 3a 4c 65 61 76 65 73 20 6f 66 20 47 72 61 73 73 20 62 79 20 57 61 6c 74 20 57 ...>,
//   infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
//   name: 'Leaves of Grass by Walt Whitman.epub',
//   private: false,
//   created: Thu Aug 01 2013 06:27:46 GMT-0700 (PDT),
//   comment: 'Downloaded from http://TheTorrent.org',
//   announce:
//    [ 'http://tracker.example.com/announce' ],
//   urlList: [],
//   files:
//    [ { path: 'Leaves of Grass by Walt Whitman.epub',
//        name: 'Leaves of Grass by Walt Whitman.epub',
//        length: 362017,
//        offset: 0 } ],
//   length: 362017,
//   pieceLength: 16384,
//   lastPieceLength: 1569,
//   pieces:
//    [ '1f9c3f59beec079715ec53324bde8569e4a0b4eb',
//      'ec42307d4ce5557b5d3964c5ef55d354cf4a6ecc',
//      '7bf1bcaf79d11fa5e0be06593c8faafc0c2ba2cf',
//      '76d71c5b01526b23007f9e9929beafc5151e6511',
//      '0931a1b44c21bf1e68b9138f90495e690dbc55f5',
//      '72e4c2944cbacf26e6b3ae8a7229d88aafa05f61',
//      'eaae6abf3f07cb6db9677cc6aded4dd3985e4586',
//      '27567fa7639f065f71b18954304aca6366729e0b',
//      '4773d77ae80caa96a524804dfe4b9bd3deaef999',
//      'c9dd51027467519d5eb2561ae2cc01467de5f643',
//      '0a60bcba24797692efa8770d23df0a830d91cb35',
//      'b3407a88baa0590dc8c9aa6a120f274367dcd867',
//      'e88e8338c572a06e3c801b29f519df532b3e76f6',
//      '70cf6aee53107f3d39378483f69cf80fa568b1ea',
//      'c53b506159e988d8bc16922d125d77d803d652c3',
//      'ca3070c16eed9172ab506d20e522ea3f1ab674b3',
//      'f923d76fe8f44ff32e372c3b376564c6fb5f0dbe',
//      '52164f03629fd1322636babb2c014b7dae582da4',
//      '1363965261e6ce12b43701f0a8c9ed1520a70eba',
//      '004400a267765f6d3dd5c7beb5bd3c75f3df2a54',
//      '560a61801147fa4ec7cf568e703acb04e5610a4d',
//      '56dcc242d03293e9446cf5e457d8eb3d9588fd90',
//      'c698de9b0dad92980906c026d8c1408fa08fe4ec' ] }

const uri = parseTorrent.toMagnetURI({
    infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
});

const buf = parseTorrent.toTorrentFile({
    infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
});

parseTorrent.remote('d2474e86c95b19b8bcfdb92bc12c9d44667cfa36', (err, parsedTorrent) => {
    // if (err) throw err
    // console.log(parsedTorrent)
});
