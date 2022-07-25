import Mp4Frag = require('mp4frag');

// $ExpectType Mp4Frag
const m4f = new Mp4Frag({});

// $ExpectType Mp4Frag
new Mp4Frag();

// $ExpectType Mp4Frag
new Mp4Frag({
    hlsPlaylistBase: 'test',
    hlsPlaylistInit: true,
    hlsPlaylistExtra: 1,
    hlsPlaylistSize: 1,
    segmentCount: 1,
});

// $ExpectType string | null
m4f.audioCodec;

// $ExpectType string | null
m4f.videoCodec;

// $ExpectType string | null
m4f.mime;

// $ExpectType Buffer | null
m4f.initialization;

// $ExpectType Buffer | null
m4f.segment;

// $ExpectType SegmentObject
m4f.segmentObject;

// $ExpectType number
m4f.timestamp;

// $ExpectType number
m4f.duration;

// $ExpectType number
m4f.totalDuration;

// $ExpectType number | null
m4f.totalByteLength;

// $ExpectType string | null
m4f.m3u8;

// $ExpectType number
m4f.sequence;

// $ExpectType boolean
m4f.keyframe;

// $ExpectType boolean
m4f.allKeyframes;

// $ExpectType SegmentObject[] | null
m4f.segmentObjects;

// $ExpectType SegmentObject | null
m4f.getSegmentObject(1);
// $ExpectType SegmentObject | null
m4f.getSegmentObject('1');
// @ts-expect-error
m4f.getSegmentObject(null);

// $ExpectType void
m4f.resetCache();
