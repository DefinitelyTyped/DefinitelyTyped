import { Parser } from "m3u8-parser";

const manifest = "#EXTM3U\n#EXT-X-VERSION:3";

var parser = new Parser();

parser.push(manifest);
parser.end();

const parsedManifest = parser.manifest.playlists?.[0].contentProtection?.["com.apple.fps.1_0"]?.attributes.resoltion;

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

parser3.addTagMapper({
    expression: /#EXAMPLE/,
    map: () => "#NEW-TAG:123",
});
parser3.addParser({
    expression: /#NEW-TAG/,
    customType: "mappingExample",
    segment: true,
});
