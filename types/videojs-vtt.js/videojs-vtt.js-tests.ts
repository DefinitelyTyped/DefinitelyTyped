// Tests for videojs-vtt.js

import { restore, shim, VTTCue, VTTRegion, WebVTT } from "videojs-vtt.js/index.js";

const json = {};
const options = {};
const regions: VTTRegion[] = [];
const cues: VTTCue[] = [];

let parser;
let region: VTTRegion;
let cue: VTTCue;
let div: HTMLElement;
let vtt;
let element;
let elements;

shim();
restore();

parser = new WebVTT.Parser(window, WebVTT.StringDecoder());
parser.parse("WEBVTT\n\n");
parser.parse("00:32.500 --> 00:33.500 align:start size:50%\n");
parser.parse("<v.loud Mary>That's awesome!");
parser.flush();

vtt = "WEBVTT\n\nID\n00:00.000 --> 00:02.000\nText";
parser = new WebVTT.Parser(window, WebVTT.StringDecoder());
parser.oncue = cue => {
    cues.push(cue);
};
parser.onregion = region => {
    regions.push(region);
};
parser.parse(vtt);
parser.flush();

div = WebVTT.convertCueToDOMTree(window, cues[0].text);
WebVTT.processCues(window, cues, document.getElementById("overlay"));

parser = new WebVTT.Parser(window);
parser.parse();
// etc

elements = WebVTT.processCues(window, cues, document.createElement("div"));
element = WebVTT.convertCueToDOMTree(window, "cuetext");

cue = new VTTCue(0, 1, "I'm a cue.");
region = new VTTRegion();

region = VTTRegion.fromJSON(json);
region = VTTRegion.create(options);
