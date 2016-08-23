/// <reference path="../node/node.d.ts" />
/// <reference path="./fluent-ffmpeg.d.ts" />

import events = require("events")
import stream = require("stream")
import ffmpeg = require("fluent-ffmpeg")

let source: string, format: string, output: string

ffmpeg({ source: source }).format(format).save(output)
