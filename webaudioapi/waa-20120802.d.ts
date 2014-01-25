// Type definitions for Web Audio API
// Project: http://www.w3.org/TR/2012/WD-webaudio-20120802/
// Definitions by: Baruch Berger (https://github.com/bbss)
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Conforms to the: http://www.w3.org/TR/2012/WD-webaudio-20120802/ specification
// Currently only implemented in WebKit browsers

interface webkitAudioContext {
    destination: AudioDestinationNode;
    sampleRate: number;
    currentTime: number;
    listener: AudioListener;
    activeSourceCount: number;

    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBuffer(buffer: ArrayBuffer, mixToMono: boolean): AudioBuffer;

    decodeAudioData(audioData: ArrayBuffer,  successCallback: any, errorCallback?: any): void;
    
    createBufferSource(): AudioBufferSourceNode;

    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    
    createMediaStreamSource(mediaStream: any): MediaStreamAudioSourceNode;

    createAnalyser(): RealtimeAnalyserNode;
    createGainNode(): AudioGainNode;
    createDelayNode(maxDelayTime?: number): DelayNode;
    createBiquadFilter(): BiquadFilterNode;
    createPanner():AudioPannerNode;
    createConvolver(): ConvolverNode;

    createChannelSplitter(numberOfOutputs?: number):AudioChannelSplitter;
    createChannelMerger(numberOfInputs?: number): AudioChannelMerger;
    
    createDynamicsCompressor(): DynamicsCompressorNode;

    createOscillator(): Oscillator;
    createWaveTable(real: any,imag: any): WaveTable;
}

declare var webkitAudioContext: {

    new (): webkitAudioContext;

}

interface Oscillator extends AudioSourceNode {

    type: number;
    playbackState: number;
    frequency: AudioParam;
    detune: AudioParam;
    noteOn(when: number): void;
    noteOff(when: number): void;
    setWaveTable(waveTable: WaveTable): void;

}

interface AudioDestinationNode extends AudioNode { 

    maxNumberOfChannels: number;
    numberOfChannels: number;

}

interface AudioNode {

    connect(destination: AudioNode, output?: number, input?: number): void;
    connect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    context: webkitAudioContext;
    numberOfInputs: number;
    numberOfOutputs: number;

}

interface AudioSourceNode extends AudioNode {

}



interface AudioParam { 

    value: number;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    setValueAtTime(value: number, time: number): void;
    linearRampToValueAtTime(value: number, time: number): void;
    exponentialRampToValueAtTime(value: number, time: number): void;
    setTargetValueAtTime(targetValue: number,time: number, timeConstant: number): void;
    setValueCurveAtTime(values: number[], time: number, duration: number): void;
    cancelScheduledValues(startTime: number): void;

}

interface AudioGain extends AudioParam {

}

interface AudioGainNode extends AudioNode {

    gain: AudioGain;

}

interface DelayNode extends AudioNode {

    delayTime: AudioParam;

}

interface AudioBuffer {

    sampleRate: number;
    length: number;
    duration: number;
    numberOfChannels: number;
    getChannelData(channel: number): any;

}

interface AudioBufferSourceNode extends AudioSourceNode {

    playbackState: number; 
    buffer: AudioBuffer;
    playbackRate: AudioParam; 
    loop: boolean;
    noteOn(when: number): void;
    noteGrainOn(when: number, grainOffset: number, grainDuration: number): void;
    noteOff(when: number): void;

}

interface MediaElementAudioSourceNode extends AudioSourceNode {

}

interface JavaScriptAudioNode extends AudioNode {

    onaudioprocess: EventListener;        
    bufferSize: number;

}

interface AudioProcessingEvent extends Event {

    node: JavaScriptAudioNode;
    playbackTime: number;
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer; 

}

interface AudioPannerNode extends AudioNode {

    panningModel: number;
    setPosition(x: number, y: number, z: number): void;
    setOrientation(x: number, y: number, z: number): void;
    setVelocity(x: number, y: number, z: number): void;       
    distanceModel: number;
    refDistance: number;
    maxDistance: number;
    rolloffFactor: number;
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceGain: AudioGain;
    coneGain: AudioGain;

}

interface AudioListener {

    dopplerFactor: number;     
    speedOfSound: number;
    setPosition(x: number, y: number, z: number): void;
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    setVelocity(x: number, y: number, z: number): void;

}

interface RealtimeAnalyserNode extends AudioNode {
    
    getFloatFrequencyData(array: any): void;
    getByteFrequencyData(array: any): void;
    getByteTimeDomainData(array: any): void;
    fftSize: number;
    frequencyBinCount: number;
    minDecibels: number;
    maxDecibels: number;
    smoothingTimeConstant: number;

}

interface AudioChannelSplitter extends AudioNode {

}

interface AudioChannelMerger extends AudioNode {

}

interface DynamicsCompressorNode extends AudioNode {

    threshold: AudioParam;
    knee: AudioParam;
    ratio: AudioParam;
    reduction: AudioParam;
    attack: AudioParam;
    release: AudioParam;

}

interface BiquadFilterNode extends AudioNode {

    type: number;
    frequency: AudioParam; 
    Q: AudioParam;
    gain: AudioParam;

    getFrequencyResponse(frequencyHz: any, magResponse: any, phaseResponse: any): void;

}

interface WaveShaperNode extends AudioNode {

    curve: any;

}

interface MediaStreamAudioSourceNode extends AudioSourceNode {



}

interface ConvolverNode extends AudioNode {

    buffer: AudioBuffer;
    normalize: boolean;

}

interface WaveTable {

}
