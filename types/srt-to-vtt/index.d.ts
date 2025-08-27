/// <reference types="node" />

import { Duplex } from "stream";

/**
 * Transform stream that converts srt files to vtt files. vtt files are used to provide subtitles in html5 video
 */
declare function srt2vtt(): Duplex;

export = srt2vtt;
