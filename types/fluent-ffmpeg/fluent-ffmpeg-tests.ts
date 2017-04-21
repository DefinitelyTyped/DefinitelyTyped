import * as ffmpeg from "fluent-ffmpeg";

let source: string, format: string, output: string

ffmpeg({ source: source }).format(format).save(output)
