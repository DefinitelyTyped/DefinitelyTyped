// Tests for videojs-vtt.js

import { WebVTT, VTTCue, VTTRegion } from 'videojs-vtt.js';

var parser = new WebVTT.Parser(window, WebVTT.StringDecoder());
parser.parse('WEBVTT\n\n');
parser.parse('00:32.500 --> 00:33.500 align:start size:50%\n');
parser.parse("<v.loud Mary>That's awesome!");
parser.flush();

var vtt = 'WEBVTT\n\nID\n00:00.000 --> 00:02.000\nText',
  parser = new WebVTT.Parser(window, WebVTT.StringDecoder()),
  cues: Array<VTTCue> = [],
  regions = [];
parser.oncue = function (cue) {
  cues.push(cue);
};
parser.onregion = function (region) {
  regions.push(region);
};
parser.parse(vtt);
parser.flush();

var div = WebVTT.convertCueToDOMTree(window, cues[0].text);
var divs = WebVTT.processCues(window, cues, document.getElementById('overlay'));

var parser = new WebVTT.Parser(window);
parser.parse();
// etc

var elements = WebVTT.processCues(window, cues, document.createElement('div'));
var element = WebVTT.convertCueToDOMTree(window, 'cuetext');

var cue = new VTTCue(0, 1, "I'm a cue.");
var region = new VTTRegion();

var json = {};
var options = {};

var region = VTTRegion.fromJSON(json);
var region = VTTRegion.create(options);
