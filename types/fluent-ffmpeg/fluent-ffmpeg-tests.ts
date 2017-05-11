import ffmpeg = require('fluent-ffmpeg');

let source: string;
let format: string;
let output: string;

ffmpeg({ source }).format(format).save(output);
