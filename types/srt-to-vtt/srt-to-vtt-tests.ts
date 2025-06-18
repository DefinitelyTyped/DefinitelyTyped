import fs = require("node:fs");
import srt2vtt = require("srt-to-vtt");

fs.createReadStream("some-subtitle-file.srt")
    .pipe(srt2vtt())
    .pipe(fs.createWriteStream("some-html5-video-subtitle.vtt"));
