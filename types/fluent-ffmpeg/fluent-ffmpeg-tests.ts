import * as ffmpeg from "fluent-ffmpeg";

let source: string;
let format: string;
let output: string;

ffmpeg({ source }).format(format).save(output);
