// Type definitions for audio-context 1.0
// Project: https://github.com/audiojs/audio-context
// Definitions by: Jeff Peterson <https://github.com/bdjeffyp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Options for your audio context:
 * @param sampleRate if specified, will set the context sampleRate.
 * @param latencyHint if specified, will control latency. One of 'balanced', 'playback', 'interaction' (default) or number.
 * @param offline if specified, will create OfflineAudioContext.
 * @param length if specified, will set number of frames for offline context.
 * @param channels if specified, will set number of channels for offline context.
 * @param contextAttributes any other options for the context.
 */
declare namespace getContext {
    interface Options {
        sampleRate?: number;
        latencyHint?: string | number;
        offline?: boolean;
        length?: number;
        channels?: number;
        contextAttributes?: object;
    }
}

/**
 * Gets an audio context from your web browser.
 * @param options Takes an Options object or just provide a sample rate.
 * @returns the audio context or null if there was an error or not a web browser.
 */
declare function getContext(options?: getContext.Options | number): AudioContext | null;

export = getContext;
