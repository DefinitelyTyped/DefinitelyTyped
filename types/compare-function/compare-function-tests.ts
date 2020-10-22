import compare = require('compare-function');

const songs = [{
    artist: 'Joy Division',
    track: 'Warsaw'
}, {
    artist: 'New Order',
    track: 'Blue Monday'
}, {
    artist: 'Freebass',
    track: 'Plan B'
}];

function artist(song: {artist: string}) {
    return song.artist;
}

songs.sort(compare(artist)).map(artist);
songs.sort(compare(-1, artist)).map(artist);
