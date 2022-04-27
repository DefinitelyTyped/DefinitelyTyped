import WaveSurfer = require('wavesurfer.js');
import Init from 'wavesurfer.js/src/html-init';
import PeakCache from 'wavesurfer.js/src/peakcache';
import CursorPlugin from 'wavesurfer.js/src/plugin/cursor';
import ElanPlugin from 'wavesurfer.js/src/plugin/elan';
import MarkersPlugin from 'wavesurfer.js/src/plugin/markers';
import MediaSessionPlugin from 'wavesurfer.js/src/plugin/mediasession';
import MicrophonePlugin from 'wavesurfer.js/src/plugin/microphone';
import MinimapPlugin from 'wavesurfer.js/src/plugin/minimap';
import RegionsPlugin, { Region, RegionParams } from 'wavesurfer.js/src/plugin/regions';
import SpectrogramPlugin from 'wavesurfer.js/src/plugin/spectrogram';
import TimelinePlugin from 'wavesurfer.js/src/plugin/timeline';
import { PluginDefinition, PluginParams } from 'wavesurfer.js/types/plugin';

// https://www.npmjs.com/package/wavesurfer.js#api-in-examples
// - create an instance
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    ignoreSilenceMode: true, // 5.2
    progressColor: 'purple',
    vertical: false,
    waveColor: 'violet',
});
// -- subscribe to some events
wavesurfer.on('ready', () => {
    wavesurfer.play();
});
// -- load an audio file
wavesurfer.load('audio/sample.wav');
if (wavesurfer.isReady) {
    throw new Error('Should not be ready');
}

// - create an instance with "new"
const wsNewed = new WaveSurfer({
    container: '#waveform',
    xhr: {
        withCredentials: true,
    },
});
wsNewed.init();
// - clear the waveform
wsNewed.empty();

// - create an instance with plugins
class SamplePlugin {
    constructor(params: PluginParams, ws: WaveSurfer) {}
    static create(params: PluginParams): PluginDefinition {
        return {
            name: 'samplePlugin',
            instance: SamplePlugin,
            params,
        };
    }
    init(): void {}
    destroy(): void {}
    foo(): void {
        console.log('foo');
    }
}
const wsWithPlugins = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    plugins: [
        SamplePlugin.create({
            container: '#waveform',
        }),
    ],
});
// - call plugin's method
wsWithPlugins.samplePlugin.foo();

// - plugin: cursor
const waveSurferWithCursorPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [CursorPlugin.create({})],
});
waveSurferWithCursorPlugin.cursor.destroy();

// - plugin: elan
const waveSurferWithElanPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [ElanPlugin.create({})],
});
waveSurferWithElanPlugin.elan.destroy();

// - plugin: markers
const button = document.createElement('button');
button.innerHTML = 'click';
const waveSurferWithMarkersPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [
        MarkersPlugin.create({
            markers: [
                {
                    time: 0,
                    label: 'BEGIN',
                    color: '#ff990a',
                },
                {
                    time: 5.5,
                    label: 'V1',
                    color: '#ff990a',
                    draggable: true,
                },
                {
                    time: 10,
                    label: 'V2',
                    color: '#00ffcc',
                    position: 'top',
                    markerElement: button,
                },
                {
                    time: 24,
                    label: 'END',
                    color: '#00ffcc',
                    position: 'top',
                },
            ],
        }),
    ],
});
waveSurferWithMarkersPlugin.markers.destroy();

// - plugin: mediasession
const waveSurferWithMediaSessionPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [
        MediaSessionPlugin.create({
            metadata: {
                album: 'Acme',
                artist: 'Acme',
                artwork: [],
                title: 'Foobar',
            },
        }),
    ],
});
waveSurferWithMediaSessionPlugin.mediasession.destroy();

// - plugin: microphone
const waveSurferWithMicrophonePlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [MicrophonePlugin.create({})],
});
waveSurferWithMicrophonePlugin.minimap.destroy();

// - plugin: minimap
const waveSurferWithMinimapPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [MinimapPlugin.create({})],
});
waveSurferWithMinimapPlugin.minimap.destroy();

// - plugin: regions
const waveSurferWithRegionsPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [
        RegionsPlugin.create({
            maxRegions: 1,
        }),
    ],
});
// $ExpectType number
waveSurferWithRegionsPlugin.regions.maxRegions;
const regionOptions: RegionParams = { start: 7, end: 13, data: { label: 'Hello, World!', fontSize: 99 } };
const region: Region = waveSurferWithRegionsPlugin.addRegion(regionOptions);
region.update({ start: 13, end: 23, data: { label: 'Bye, World!', fontSize: 24 } });
waveSurferWithRegionsPlugin.regions.destroy();

// - plugin: spectrogram
const waveSurferWithSpectrogramPlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [
        SpectrogramPlugin.create({
            container: '#spectrogram',
        }),
    ],
});
waveSurferWithSpectrogramPlugin.spectrogram.destroy();

// - plugin: timeline
const waveSurferWithTimelinePlugin = WaveSurfer.create({
    container: '#waveform',
    plugins: [
        TimelinePlugin.create({
            container: '#timeline',
        }),
    ],
});
waveSurferWithTimelinePlugin.timeline.destroy();

// - Init
const waveSurferForInit = new WaveSurfer({ container: '#waveform' });
const init = new Init(waveSurferForInit);
init.initAllEls();

// - PeakCache
const peakCache = new PeakCache();
peakCache.addRangeToPeakCache(1, 2, 3);
peakCache.getCacheRanges();
peakCache.clearPeakCache();
