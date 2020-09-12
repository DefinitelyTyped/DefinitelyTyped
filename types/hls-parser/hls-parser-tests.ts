import HLS = require('hls-parser');

const playlist = HLS.parse('');

if (playlist.isMasterPlaylist) {
    // Master playlist
} else {
    // Media playlist
}

const { MediaPlaylist, MasterPlaylist, Segment } = HLS.types;

new MediaPlaylist({
    targetDuration: 9,
    playlistType: 'VOD',
    segments: [
        new Segment({
            uri: 'low/1.m3u8',
            duration: 9,
            mediaSequenceNumber: 0,
            discontinuitySequence: 0,
        }),
    ],
});

new MasterPlaylist({
    version: 3,
    variants: [],
});
