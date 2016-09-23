// Type definitions for Web Audio API
// Project: http://www.w3.org/TR/webaudio/
// Definitions by: Baruch Berger <https://github.com/bbss>, Kon <http://phyzkit.net/>, kubosho <https://github.com/kubosho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// This file refers to the latest published working draft (currently from 10 october 2013) http://www.w3.org/TR/2013/WD-webaudio-20131010/, not to be confused with the latest editor's draft http://webaudio.github.io/web-audio-api/

// DEPRECATED: use TypeScript 1.5.3

declare var webkitAudioContext: {
    new (): AudioContext;
}

declare var webkitOfflineAudioContext: {
    new (numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
}

declare enum ChannelCountMode {
    'max',
    'clamped-max',
    'explicit'
}

declare enum ChannelInterpretation {
    speakers,
    discrete
}

declare enum PanningModelType {
    /**
     * A simple and efficient spatialization algorithm using equal-power panning.
     */
    equalpower,

    /**
     * A higher quality spatialization algorithm using a convolution with measured impulse responses from human subjects. This panning method renders stereo output.
     */
    HRTF
}

declare enum DistanceModelType {
    /**
     * A linear distance model which calculates distanceGain according to:
     *     1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)
     */
    linear,

    /**
     * An inverse distance model which calculates distanceGain according to:
     *     refDistance / (refDistance + rolloffFactor * (distance - refDistance))
     */
    inverse,

    /**
     * An exponential distance model which calculates distanceGain according to:
     *     pow(distance / refDistance, -rolloffFactor)
     */
    exponential
}

declare enum BiquadFilterType {
    /**
     * A lowpass filter allows frequencies below the cutoff frequency to pass through and attenuates frequencies above the cutoff. It implements a standard second-order resonant lowpass filter with 12dB/octave rolloff.
     *
     * ## frequency
     * The cutoff frequency
     * ## Q
     * Controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.
     * ## gain
     * Not used in this filter type
     */
    lowpass,

    /**
     * A highpass filter is the opposite of a lowpass filter. Frequencies above the cutoff frequency are passed through, but frequencies below the cutoff are attenuated. It implements a standard second-order resonant highpass filter with 12dB/octave rolloff.
     *
     * ## frequency
     * The cutoff frequency below which the frequencies are attenuated
     * ## Q
     * Controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.
     * ## gain
     * Not used in this filter type
     */
    highpass,

    /**
     * A bandpass filter allows a range of frequencies to pass through and attenuates the frequencies below and above this frequency range. It implements a second-order bandpass filter.
     *
     * ## frequency
     * The center of the frequency band
     * ## Q
     * Controls the width of the band. The width becomes narrower as the Q value increases.
     * ## gain
     * Not used in this filter type
     */
    bandpass,

    /**
     * The lowshelf filter allows all frequencies through, but adds a boost (or attenuation) to the lower frequencies. It implements a second-order lowshelf filter.
     *
     * ## frequency
     * The upper limit of the frequences where the boost (or attenuation) is applied.
     * ## Q
     * Not used in this filter type.
     * ## gain
     * The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.
     */
    lowshelf,

    /**
     * The highshelf filter is the opposite of the lowshelf filter and allows all frequencies through, but adds a boost to the higher frequencies. It implements a second-order highshelf filter
     *
     * ## frequency
     * The lower limit of the frequences where the boost (or attenuation) is applied.
     * ## Q
     * Not used in this filter type.
     * ## gain
     * The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.
     */
    highshelf,

    /**
     * The peaking filter allows all frequencies through, but adds a boost (or attenuation) to a range of frequencies.
     *
     * ## frequency
     * The center frequency of where the boost is applied.
     * ## Q
     * Controls the width of the band of frequencies that are boosted. A large value implies a narrow width.
     * ## gain
     * The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.
     */
    peaking,

    /**
     * The notch filter (also known as a band-stop or band-rejection filter) is the opposite of a bandpass filter. It allows all frequencies through, except for a set of frequencies.
     *
     * ## frequency
     * The center frequency of where the notch is applied.
     * ## Q
     * Controls the width of the band of frequencies that are attenuated. A large value implies a narrow width.
     * ## gain
     * Not used in this filter type.
     */
    notch,

    /**
     * An allpass filter allows all frequencies through, but changes the phase relationship between the various frequencies. It implements a second-order allpass filter
     *
     * ## frequency
     * The frequency where the center of the phase transition occurs. Viewed another way, this is the frequency with maximal group delay.
     * ## Q
     * Controls how sharp the phase transition is at the center frequency. A larger value implies a sharper transition and a larger group delay.
     * ## gain
     * Not used in this filter type.
     */
    allpass
}

declare enum OverSampleType {
    'none',
    '2x',
    '4x'
}

declare enum OscillatorType {
  sine,
  square,
  sawtooth,
  triangle,
  custom
}

interface AudioContextConstructor {
    new(): AudioContext;
}

interface Window {
    AudioContext: AudioContextConstructor;
}

interface AudioContext {
    createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode;
}

interface MediaStreamAudioSourceNode extends AudioNode {

}

interface MediaStreamAudioDestinationNode extends AudioNode {
    stream: MediaStream;
}

interface AudioBuffer {
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;

    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
}

interface AudioNode {
    disconnect(destination: AudioNode): void;
}

interface AudioContext {
    suspend(): Promise<void>;
    resume(): Promise<void>;
    close(): Promise<void>;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode; 
}
