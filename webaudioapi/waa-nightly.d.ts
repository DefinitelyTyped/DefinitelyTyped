// Type definitions for Web Audio API (nightly)
// Project: http://www.w3.org/TR/2012/WD-webaudio-20120802/
// Definitions by: Baruch Berger <https://github.com/bbss>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Conforms to the: http://www.w3.org/TR/2012/WD-webaudio-20120802/ specification
// Currently only implemented in WebKit browsers (nightly builds)

interface webkitAudioContext {

    destination: AudioDestinationNode;
    sampleRate: number;
    currentTime: number;
    listener: AudioListener;
    activeSourceCount: number;

    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;

    createBuffer(buffer: ArrayBuffer, mixToMono: boolean): AudioBuffer;

    decodeAudioData(audioData: ArrayBuffer, successCallback: any, errorCallback?: any): void;
    createBufferSource(): AudioBufferSourceNode;

    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createScriptProcessor(bufferSize: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createAnalyser(): AnalyserNode;
    createGain(): GainNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createBiquadFilter(): BiquadFilterNode;
    createWaveShaper(): WaveShaperNode;
    createPanner(): PannerNode;
    createConvolver(): ConvolverNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createOscillator(): OscillatorNode;
    createWaveTable(real: any, imag: any): WaveTable;

}


declare var webkitAudioContext: {

    new (value?: any): webkitAudioContext;

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

interface AudioDestinationNode extends AudioNode {

    maxNumberOfChannels: number;
    numberOfChannels: number;

}

interface AudioParam {

    value: number;
    computedValue: number;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    setValueAtTime(value: number, startTime: number): void;
    linearRampToValueAtTime(value: number, endTime: number): void;
    exponentialRampToValueAtTime(value: number, endTime: number): void;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): void;
    setValueCurveAtTime(values: any, startTime: number, duration: number): void;
    cancelScheduledValues(startTime: number): void;

}

interface GainNode extends AudioNode {

    gain: AudioParam;

}

interface DelayNode extends AudioNode {

    delayTime: AudioParam;

}

interface AudioBuffer {

    sampleRate: number;
    length: number;
    duration: number;
    numberOfChannels: number;
    getChannelData(channel): any;

}

interface AudioBufferSourceNode extends AudioSourceNode {
    //actually enum
    playbackState: number;

    buffer: AudioBuffer;
    playbackRate: AudioParam;
    loop: boolean;
    loopStart: number;
    loopEnd: number;
    start(when: number, offset?: number, duration?: number): void;
    stop(when: number): void;

}

interface MediaElementAudioSourceNode extends AudioSourceNode {

}

interface ScriptProcessorNode extends AudioNode {

    onaudioproces: EventListener;
    bufferSize: number;

}

interface AudioProcessingEvent extends Event {

    node: ScriptProcessorNode;
    playbackTime: number;
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;

}

interface PannerNode extends AudioNode {
    //actually enum
    panningModel: number;
    distanceModel: number;

    setPosition(x: number, y: number, z: number): void;
    setOrientation(x: number, y: number, z: number): void;
    setVelocity(x: number, y: number, z: number): void;
    refDistance: number;
    maxDistance: number;
    rolloffFactor: number;
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;

}

interface AudioListener {

    dopplerFactor: number;
    speedOfSound: number;
    setPosition(x: number, y: number, z: number): void;
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    setVelocity(x: number, y: number, z: number): void;

}

interface ConvolverNode extends AudioNode {

    buffer: AudioBuffer;
    normalize: boolean;

}

interface AnalyserNode extends AudioNode {

    getFloatFrequencyData(array: any): void;
    getByteFrequencyData(array: any): void;
    getByteTimeDomainData(array: any): void;
    fftSize: number;
    frequencyBinCount: number;
    minDecibels: number;
    maxDecibels: number;
    smoothingTimeConstant: number;

}

interface ChannelSplitterNode extends AudioNode {

}

interface ChannelMergerNode extends AudioNode {

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

    //actually enum
    type: number;

    frequency: AudioParam;
    Q: AudioParam;
    gain: AudioParam;
    getFrequencyResponse(frequencyHz: any, magResponse: any, phaseResponse: any): void;

}

interface WaveShaperNode extends AudioNode {

    curve: any;

}

interface OscillatorNode extends AudioSourceNode {

    //actually enums
    type: number;
    playbackState: number;

    frequency: AudioParam;
    detune: AudioParam; 
    start(when: number): void;
    stop(when: number): void;
    setWaveTable(waveTable: WaveTable): void;

}

interface WaveTable {

}

interface MediaStreamAudioSourceNode extends AudioSourceNode {

}

interface MediaStream { 

}
