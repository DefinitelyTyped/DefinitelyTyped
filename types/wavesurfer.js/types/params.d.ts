import MultiCanvas from "../src/drawer.multicanvas";
import { PluginDefinition } from "./plugin";
import { DrawingContextAttributes } from "./util";
import { XHROptions } from "./xhr";

export interface WaveSurferParams {
    /** Use your own previously initialized AudioContext or leave blank (default: null). */
    audioContext?: AudioContext;
    /** Speed at which to play audio. Lower number is slower (default: 1). */
    audioRate?: number;
    /** Use your own previously initialized ScriptProcessorNode or leave blank (default: null). */
    audioScriptProcessor?: ScriptProcessorNode;
    /** If a scrollbar is present, center the waveform on current progress (default: true). */
    autoCenter?: boolean;
    /** If autoCenter is active, rate at which the waveform is centered (default: 5). */
    autoCenterRate?: number;
    /** If autoCenter is active, immediately center waveform on current progress (default: false). */
    autoCenterImmediately?: boolean;
    /**
     * Backend to use (default: 'WebAudio').
     *
     * MediaElement is a fallback for unsupported browsers.
     * MediaElementWebAudio allows to use WebAudio API also with big audio files, loading audio like with MediaElement backend (HTML5 audio tag).
     */
    backend?: "WebAudio" | "MediaElement" | "MediaElementWebAudio";
    /** Change background color of the waveform container (default: null). */
    backgroundColor?: string;
    /** The height of the wave bars (default: 1). */
    barHeight?: number;
    /** The radius of the wave bars (default: 0). Makes bars rounded. */
    barRadius?: number;
    /** The optional spacing between bars of the wave, if not provided will be calculated in legacy format (default: null). */
    barGap?: number;
    /** Draw the waveform using bars (default: null). */
    barWidth?: number;
    /** If specified, draw at least a bar of this height, eliminating waveform gaps (default: null). */
    barMinHeight?: number;
    /** Close and nullify all audio contexts when the destroy method is called (default: false). */
    closeAudioContext?: boolean;
    /** CSS selector or HTML element where the waveform should be drawn. This is the only required parameter. */
    container: string | HTMLElement;
    /** The fill color of the cursor indicating the playhead position (default: '#333'). */
    cursorColor?: string;
    /** Measured in pixels (default: 1). */
    cursorWidth?: number;
    drawingContextAttributes?: DrawingContextAttributes;
    /** Optional audio length so pre-rendered peaks can be display immediately for example (default: null). */
    duration?: number;
    /** Whether to fill the entire container or draw only according to minPxPerSec (default: true). */
    fillParent?: boolean;
    /** Force decoding of audio using web audio when zooming to get a more detailed waveform (default: false). */
    forceDecode?: boolean;
    /** The height of the waveform. Measured in pixels (default: 128). */
    height?: number;
    /** Whether to hide the horizontal scrollbar when one would normally be shown (default: false). */
    hideScrollbar?: boolean;
    /** Whether the mouse interaction will be enabled at initialization. You can switch this parameter at any time later on (default: true). */
    interact?: boolean;
    /** (Use with regions plugin) Enable looping of selected regions (default: false). */
    loopSelection?: boolean;
    /** Maximum width of a single canvas in pixels (default: 4000). */
    maxCanvasWidth?: number;
    /** (Use with backend MediaElement or MediaElementWebAudio) Enable the native controls for the media element (default: false). */
    mediaControls?: boolean;
    /** (Use with backend MediaElement or MediaElementWebAudio) 'audio'|'video' ('video' only for MediaElement) */
    mediaType?: "audio" | "video";
    /** Minimum number of pixels per second of audio (default: 20). */
    minPxPerSec?: number;
    /** If true, normalize by the maximum peak instead of 1.0 (default: false). */
    normalize?: boolean;
    /** Use the PeakCache to improve rendering speed of large waveforms (default: false). */
    partialRender?: boolean;
    /** The pixel ratio used to calculate display (default: window.deviceDixelRatio). */
    pixelRatio?: number;
    /** An array of plugin definitions to register during instantiation. */
    plugins?: PluginDefinition[];
    /** The fill color of the part of the waveform behind the cursor (default: '#555'). */
    progressColor?: string;
    /** Set to false to keep the media element in the DOM when the player is destroyed (default: true). */
    removeMediaElementOnDestroy?: boolean;
    /** Can be used to inject a custom renderer (default: MultiCanvas). */
    renderer?: MultiCanvas;
    /**
     * If set to true resize the waveform, when the window is resized (default: false).
     *
     * This is debounced with a 100ms timeout by default. If this parameter is a number it represents that timeout.
     */
    responsive?: boolean | number;
    /** If set to true, renders waveform from right-to-left (default: false). */
    rtl?: boolean;
    /** Whether to scroll the container with a lengthy waveform. Otherwise the waveform is shrunk to the container width (see fillParent) (default: false). */
    scrollParent?: boolean;
    /** Number of seconds to skip with the skipForward() and skipBackward() methods (default: 2). */
    skipLength?: number;
    /** Render with separate waveforms for the channels of the audio (default: false). */
    splitChannels?: boolean;
    /** Options for splitChannel rendering. */
    splitChannelsOptions?: SplitChannelOptions;
    /** Render the waveform vertically instead of horizontally. */
    vertical?: boolean;
    /** The fill color of the waveform after the cursor. */
    waveColor?: string | CanvasGradient;
    /** XHR options. */
    xhr?: XHROptions;
}

export interface SplitChannelOptions {
    /** Determines whether channels are rendered on top of each other or on separate tracks. */
    overlay?: boolean;
    /** Object describing color for each channel. */
    channelColors?: { [channel: number]: ChannelColor };
    /** Indexes of channels to be hidden from rendering. */
    filterChannels?: number[];
    /** Determines whether normalization is done per channel or maintains proportionality between channels. */
    relativeNormalization?: boolean;
}

export interface ChannelColor {
    progressColor: string;
    waveColor: string;
}
