import * as WaveSurfer from "wavesurfer.js";
import CursorPlugin = require("wavesurfer.js/src/plugin/cursor");
import ElanPlugin = require("wavesurfer.js/src/plugin/elan");
import MarkersPlugin = require("wavesurfer.js/src/plugin/markers");
import MediaSessionPlugin = require("wavesurfer.js/src/plugin/mediasession");
import MicrophonePlugin = require("wavesurfer.js/src/plugin/microphone");
import MinimapPlugin = require("wavesurfer.js/src/plugin/minimap");
import RegionsPlugin = require("wavesurfer.js/src/plugin/regions");
import SpectogramPlugin = require("wavesurfer.js/src/plugin/spectogram");
import TimelinePlugin = require("wavesurfer.js/src/plugin/timeline");

// https://www.npmjs.com/package/wavesurfer.js#api-in-examples
// - create an instance
const wavesurfer = WaveSurfer.create({
    container: "#waveform",
    progressColor: "purple",
    vertical: false,
    waveColor: "violet",
});
// -- subscribe to some events
wavesurfer.on("ready", () => {
    wavesurfer.play();
});
// -- load an audio file
wavesurfer.load("audio/sample.wav");
if (wavesurfer.isReady) {
    throw new Error("Should not be ready");
}

// - create an instance with "new"
const wsNewed = new WaveSurfer({
    container: "#waveform",
    xhr: {
        withCredentials: true,
    },
});
wsNewed.init();
// - clear the waveform
wsNewed.empty();

// - create an instance with plugins
class SamplePlugin {
    constructor(params: WaveSurfer.PluginParams, ws: WaveSurfer) {}
    static create(params: WaveSurfer.PluginParams): WaveSurfer.PluginDefinition {
        return {
            name: "samplePlugin",
            instance: SamplePlugin,
            params,
        };
    }
    init(): void {}
    destroy(): void {}
    foo(): void {
        console.log("foo");
    }
}
const wsWithPlugins = WaveSurfer.create({
    container: "#waveform",
    waveColor: "violet",
    plugins: [
        SamplePlugin.create({
            container: "#waveform",
        }),
    ],
});
// - call plugin's method
wsWithPlugins.samplePlugin.foo();

// - plugin: cursor
const waveSurferWithCursorPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [CursorPlugin.create({})],
});
waveSurferWithCursorPlugin.cursor.destroy();

// - plugin: elan
const waveSurferWithElanPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [ElanPlugin.create({})],
});
waveSurferWithElanPlugin.elan.destroy();

// - plugin: markers
const waveSurferWithMarkersPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [MarkersPlugin.create({})],
});
waveSurferWithMarkersPlugin.markers.destroy();

// - plugin: mediasession
const waveSurferWithMediaSessionPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [MediaSessionPlugin.create({
        metadata: {
            album: 'Acme',
            artist: 'Acme',
            artwork: [],
            title: 'Foobar'
        }
    })],
});
waveSurferWithMediaSessionPlugin.mediasession.destroy();

// - plugin: microphone
const waveSurferWithMicrophonePlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [MicrophonePlugin.create({})],
});
waveSurferWithMicrophonePlugin.minimap.destroy();

// - plugin: minimap
const waveSurferWithMinimapPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [MinimapPlugin.create({})],
});
waveSurferWithMinimapPlugin.minimap.destroy();

// - plugin: regions
const waveSurferWithRegionsPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [RegionsPlugin.create({})],
});
waveSurferWithRegionsPlugin.regions.destroy();

// - plugin: spectogram
const waveSurferWithSpectogramPlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [SpectogramPlugin.create({})],
});
waveSurferWithSpectogramPlugin.spectogram.destroy();

// - plugin: timeline
const waveSurferWithTimelinePlugin = WaveSurfer.create({
    container: "#waveform",
    plugins: [TimelinePlugin.create({})],
});
waveSurferWithTimelinePlugin.timeline.destroy();
