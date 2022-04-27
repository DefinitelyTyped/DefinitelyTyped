import HLS = require('hls-parser');

const playlist = HLS.parse('');

if (playlist.isMasterPlaylist) {
    // Master playlist
    playlist.variants;
} else {
    // Media playlist
    playlist.targetDuration;
}

const { MediaPlaylist, MasterPlaylist, Segment, PrefetchSegment, PartialSegment, RenditionReport } = HLS.types;

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

// open lhls
new MediaPlaylist({
    targetDuration: 9,
    playlistType: 'VOD',
    lowLatencyCompatibility: { canBlockReload: false, canSkipUntil: false, holdBack: 2, partHoldBack: 2 },
    partTargetDuration: 0.333,
    segments: [
        new Segment({
            uri: 'low/1.m3u8',
            duration: 9,
            mediaSequenceNumber: 0,
            discontinuitySequence: 0,
        }),
    ],
    prefetchSegments: [
        new PrefetchSegment({
            uri: 'test/1.m3u8',
            mediaSequenceNumber: 1,
            discontinuitySequence: 0,
        }),
    ],
});

// apple ll-hls
new MediaPlaylist({
    targetDuration: 9,
    playlistType: 'VOD',
    segments: [
        new Segment({
            uri: 'low/1.m3u8',
            duration: 9,
            mediaSequenceNumber: 0,
            discontinuitySequence: 0,
            parts: [
                new PartialSegment({
                    uri: 'test/1.1.ts',
                }),
            ],
        }),
    ],
    renditionReports: [
        new RenditionReport({
            uri: 'high/1.m3u8',
        }),
    ],
});

new MasterPlaylist({
    version: 3,
    variants: [],
});
