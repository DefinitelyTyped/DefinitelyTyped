import * as WaveSurfer from "wavesurfer.js";

// https://www.npmjs.com/package/wavesurfer.js#api-in-examples
// - create an instance
const wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "violet",
    progressColor: "purple"
});
// -- subscribe to some events
wavesurfer.on("ready", () => {
    wavesurfer.play();
});
// -- load an audio file
wavesurfer.load("audio/sample.wav");

// - create an instance with "new"
const wsNewed = new WaveSurfer({
    container: "#waveform",
    xhr: {
        withCredentials: true
    }
});
wsNewed.init();
// - clear the waveform
wsNewed.empty();

// - create an instance with plugins
class SamplePlugin {
    constructor(params: object, ws: WaveSurfer) { }
    static create(params: object): WaveSurfer.PluginDefinition {
        return {
            name: "samplePlugin",
            instance: SamplePlugin,
            params
        };
    }
    init(): void { }
    destroy(): void { }
    foo(): void { console.log('foo'); }
}
const wsWithPlugins = WaveSurfer.create({
    container: "#waveform",
    waveColor: "violet",
    plugins: [
        SamplePlugin.create({
            container: "#waveform"
        })
    ]
});
// - call plugin's method
wsWithPlugins.samplePlugin.foo();
