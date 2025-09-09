import { Manifest, Parser } from "m3u8-parser";

const manifest = "#EXTM3U\n#EXT-X-VERSION:3";

var parser = new Parser();

parser.push(manifest);
parser.end();

const parsedManifest = parser.manifest.playlists?.[0].contentProtection?.["com.apple.fps.1_0"]?.attributes.resolution;

const parser2 = new Parser({
    uri: "https://exmaple.com/video.m3u8?param_a=34&param_b=abc",
    mainDefinitions: {
        param_c: "def",
    },
});

const parser3 = new Parser();
parser3.addParser({
    expression: /^#VOD-FRAMERATE/,
    customType: "framerate",
    dataParser: function(line) {
        return parseFloat(line.split(":")[1]);
    },
});

parser3.push(manifest);
parser3.end();
parser3.manifest.custom;

const segment = parser3.manifest.segments[0];

if (segment && segment.key) {
    segment.key.iv;
}

parser3.addTagMapper({
    expression: /#EXAMPLE/,
    map: () => "#NEW-TAG:123",
});
parser3.addParser({
    expression: /#NEW-TAG/,
    customType: "mappingExample",
    segment: true,
});

// Tests for real world parsed manifests

// Case: https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8

const parsed: Manifest = {
    "allowCache": true,
    "discontinuityStarts": [],
    "dateRanges": [],
    "iFramePlaylists": [
        {
            "attributes": {
                "URI": "gear1/iframe_index.m3u8",
                "CODECS": "avc1.4d400d",
                "BANDWIDTH": 28451,
            },
            "uri": "gear1/iframe_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "URI": "gear2/iframe_index.m3u8",
                "CODECS": "avc1.4d401e",
                "BANDWIDTH": 181534,
            },
            "uri": "gear2/iframe_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "URI": "gear3/iframe_index.m3u8",
                "CODECS": "avc1.4d401f",
                "BANDWIDTH": 297056,
            },
            "uri": "gear3/iframe_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "URI": "gear4/iframe_index.m3u8",
                "CODECS": "avc1.4d401f",
                "BANDWIDTH": 339492,
            },
            "uri": "gear4/iframe_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "URI": "gear5/iframe_index.m3u8",
                "CODECS": "avc1.4d401f",
                "BANDWIDTH": 669554,
            },
            "uri": "gear5/iframe_index.m3u8",
            "timeline": 0,
        },
    ],
    "segments": [],
    "mediaGroups": {
        "AUDIO": {
            "bipbop_audio": {
                "BipBop Audio 1": {
                    "default": true,
                    "autoselect": true,
                    "language": "eng",
                },
                "BipBop Audio 2": {
                    "default": false,
                    "autoselect": false,
                    "language": "eng",
                    "uri": "alternate_audio_aac_sinewave/prog_index.m3u8",
                },
            },
        },
        "VIDEO": {},
        "CLOSED-CAPTIONS": {},
        "SUBTITLES": {
            "subs": {
                "English": {
                    "default": true,
                    "autoselect": true,
                    "language": "en",
                    "uri": "subtitles/eng/prog_index.m3u8",
                    "characteristics":
                        "public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",
                    "forced": false,
                },
                "English (Forced)": {
                    "default": false,
                    "autoselect": false,
                    "language": "en",
                    "uri": "subtitles/eng_forced/prog_index.m3u8",
                    "forced": true,
                },
                "Français": {
                    "default": false,
                    "autoselect": true,
                    "language": "fr",
                    "uri": "subtitles/fra/prog_index.m3u8",
                    "characteristics":
                        "public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",
                    "forced": false,
                },
                "Français (Forced)": {
                    "default": false,
                    "autoselect": false,
                    "language": "fr",
                    "uri": "subtitles/fra_forced/prog_index.m3u8",
                    "forced": true,
                },
                "Español": {
                    "default": false,
                    "autoselect": true,
                    "language": "es",
                    "uri": "subtitles/spa/prog_index.m3u8",
                    "characteristics":
                        "public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",
                    "forced": false,
                },
                "Español (Forced)": {
                    "default": false,
                    "autoselect": false,
                    "language": "es",
                    "uri": "subtitles/spa_forced/prog_index.m3u8",
                    "forced": true,
                },
                "日本語": {
                    "default": false,
                    "autoselect": true,
                    "language": "ja",
                    "uri": "subtitles/jpn/prog_index.m3u8",
                    "characteristics":
                        "public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",
                    "forced": false,
                },
                "日本語 (Forced)": {
                    "default": false,
                    "autoselect": false,
                    "language": "ja",
                    "uri": "subtitles/jpn_forced/prog_index.m3u8",
                    "forced": true,
                },
            },
        },
    },
    "playlists": [
        {
            "attributes": {
                "SUBTITLES": "subs",
                "AUDIO": "bipbop_audio",
                "RESOLUTION": { "width": 416, "height": 234 },
                "CODECS": "mp4a.40.2, avc1.4d400d",
                "BANDWIDTH": 263851,
            },
            "uri": "gear1/prog_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "SUBTITLES": "subs",
                "AUDIO": "bipbop_audio",
                "RESOLUTION": { "width": 640, "height": 360 },
                "CODECS": "mp4a.40.2, avc1.4d401e",
                "BANDWIDTH": 577610,
            },
            "uri": "gear2/prog_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "SUBTITLES": "subs",
                "AUDIO": "bipbop_audio",
                "RESOLUTION": { "width": 960, "height": 540 },
                "CODECS": "mp4a.40.2, avc1.4d401f",
                "BANDWIDTH": 915905,
            },
            "uri": "gear3/prog_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "SUBTITLES": "subs",
                "AUDIO": "bipbop_audio",
                "RESOLUTION": { "width": 1280, "height": 720 },
                "CODECS": "mp4a.40.2, avc1.4d401f",
                "BANDWIDTH": 1030138,
            },
            "uri": "gear4/prog_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "SUBTITLES": "subs",
                "AUDIO": "bipbop_audio",
                "RESOLUTION": { "width": 1920, "height": 1080 },
                "CODECS": "mp4a.40.2, avc1.4d401f",
                "BANDWIDTH": 1924009,
            },
            "uri": "gear5/prog_index.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "SUBTITLES": "subs",
                "AUDIO": "bipbop_audio",
                "CODECS": "mp4a.40.2",
                "BANDWIDTH": 41457,
            },
            "uri": "gear0/prog_index.m3u8",
            "timeline": 0,
        },
    ],
};

// Case: https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8

const parsed2: Manifest = {
    "allowCache": true,
    "discontinuityStarts": [],
    "dateRanges": [],
    "iFramePlaylists": [],
    "segments": [],
    "version": 1,
    "playlists": [
        {
            "attributes": {
                "FRAME-RATE": 24,
                "RESOLUTION": { "width": 224, "height": 100 },
                "CODECS": "mp4a.40.2,avc1.66.30",
                "BANDWIDTH": 493000,
            },
            "uri": "tears-of-steel-audio_eng=64008-video_eng=401000.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "FRAME-RATE": 24,
                "RESOLUTION": { "width": 448, "height": 200 },
                "CODECS": "mp4a.40.2,avc1.66.30",
                "BANDWIDTH": 932000,
            },
            "uri": "tears-of-steel-audio_eng=128002-video_eng=751000.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "FRAME-RATE": 24,
                "RESOLUTION": { "width": 784, "height": 350 },
                "CODECS": "mp4a.40.2,avc1.77.31",
                "BANDWIDTH": 1197000,
            },
            "uri": "tears-of-steel-audio_eng=128002-video_eng=1001000.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "VIDEO-RANGE": "SDR",
                "FRAME-RATE": 24,
                "RESOLUTION": { "width": 1680, "height": 750 },
                "CODECS": "mp4a.40.2,avc1.100.40",
                "BANDWIDTH": 1727000,
            },
            "uri": "tears-of-steel-audio_eng=128002-video_eng=1501000.m3u8",
            "timeline": 0,
        },
        {
            "attributes": {
                "VIDEO-RANGE": "SDR",
                "FRAME-RATE": 24,
                "RESOLUTION": { "width": 1680, "height": 750 },
                "CODECS": "mp4a.40.2,avc1.100.40",
                "BANDWIDTH": 2468000,
            },
            "uri": "tears-of-steel-audio_eng=128002-video_eng=2200000.m3u8",
            "timeline": 0,
        },
        {
            "attributes": { "CODECS": "mp4a.40.2", "BANDWIDTH": 68000 },
            "uri": "tears-of-steel-audio_eng=64008.m3u8",
            "timeline": 0,
        },
        {
            "attributes": { "CODECS": "mp4a.40.2", "BANDWIDTH": 136000 },
            "uri": "tears-of-steel-audio_eng=128002.m3u8",
            "timeline": 0,
        },
    ],
    "mediaGroups": {
        "AUDIO": {},
        "VIDEO": {},
        "CLOSED-CAPTIONS": {},
        "SUBTITLES": {},
    },
};
