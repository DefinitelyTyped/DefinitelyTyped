import { Detector, Models } from "snowboy";
import * as fs from "fs";

const models = new Models();

models.add({
    file: 'resources/snowboy.umdl',
    sensitivity: '0.5',
    hotwords: 'snowboy'
});

const detector = new Detector({
    resource: "resources/common.res",
    models,
    audioGain: 1.0
});

detector.on('silence', () => {
    console.log('silence');
});

detector.on('sound', (buffer) => {
    // <buffer> contains the last chunk of the audio that triggers the "sound"
    // event. It could be written to a wav stream.
    console.log('sound');
});

detector.on('error', () => {
    console.log('error');
});

detector.on('hotword', (index, hotword, buffer) => {
    // <buffer> contains the last chunk of the audio that triggers the "hotword"
    // event. It could be written to a wav stream. You will have to use it
    // together with the <buffer> in the "sound" event if you want to get audio
    // data after the hotword.
    console.log('hotword', index, hotword);
});

const file = fs.createReadStream('resources/snowboy.wav');
