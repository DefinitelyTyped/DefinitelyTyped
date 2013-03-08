// Type definitions for the Web Audio API
// Project: http://www.w3.org/TR/2012/WD-webaudio-20121213/
// Definitions by: Baruch Berger (https://github.com/bbss), Kon (http://phyzkit.net/)
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * This interface represents a set of AudioNode objects and their connections. It allows for arbitrary routing of signals to the AudioDestinationNode (what the user ultimately hears). Nodes are created from the context and are then connected together. In most use cases, only a single AudioContext is used per document. An AudioContext is constructed as follows:
 *
 *     var context = new AudioContext();
 */
interface AudioContext {
    /**
     * An AudioDestinationNode with a single input representing the final destination for all audio (to be rendered to the audio hardware). All AudioNodes actively rendering audio will directly or indirectly connect to destination.
     */
    destination: AudioDestinationNode;

    /**
     * The sample rate (in sample-frames per second) at which the AudioContext handles audio. It is assumed that all AudioNodes in the context run at this rate. In making this assumption, sample-rate converters or "varispeed" processors are not supported in real-time processing.
     */
    sampleRate: number;

    /**
     * This is a time in seconds which starts at zero when the context is created and increases in real-time. All scheduled times are relative to it. This is not a "transport" time which can be started, paused, and re-positioned. It is always moving forward. A GarageBand-like timeline transport system can be very easily built on top of this (in JavaScript). This time corresponds to an ever-increasing hardware timestamp.
     */
    currentTime: number;

    /**
     * An AudioListener which is used for 3D spatialization.
     */
    listener: AudioListener;

    /**
     * The number of AudioBufferSourceNodes that are currently playing.
     */
    activeSourceCount: number;

    /**
     * Creates an AudioBuffer of the given size. The audio data in the buffer will be zero-initialized (silent). An exception will be thrown if the numberOfChannels or sampleRate are out-of-bounds.
     * @param numberOfChannels how many channels the buffer will have. An implementation must support at least 32 channels.
     * @param length the size of the buffer in sample-frames.
     * @param sampleRate the sample-rate of the linear PCM audio data in the buffer in sample-frames per second. An implementation must support sample-rates in at least the range 22050 to 96000.
     */
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    
    /**
     * Creates an AudioBuffer given the audio file data contained in the ArrayBuffer. The ArrayBuffer can, for example, be loaded from an XMLHttpRequest's response attribute after setting the responseType to "arraybuffer". Audio file data can be in any of the formats supported by the audio element.
     * The following steps must be performed:
     * 1. Decode the encoded buffer from the AudioBuffer into linear PCM. If a decoding error is encountered due to the audio format not being recognized or supported, or because of corrupted/unexpected/inconsistent data then return NULL (and these steps will be terminated).
     * 2. If mixToMono is true, then mixdown the decoded linear PCM data to mono.
     * 3. Take the decoded (possibly mixed-down) linear PCM audio data, and resample it to the sample-rate of the AudioContext if it is different from the sample-rate of buffer. The final result will be stored in an AudioBuffer and returned as the result of this method.
     * @param buffer the audio file data (for example from a .wav file).
     * @param mixToMono if a mixdown to mono will be performed. Normally, this would not be set.
     */
    createBuffer(buffer: ArrayBuffer, mixToMono: bool): AudioBuffer;

    /**
     * Asynchronously decodes the audio file data contained in the ArrayBuffer. The ArrayBuffer can, for example, be loaded from an XMLHttpRequest's response attribute after setting the responseType to "arraybuffer". Audio file data can be in any of the formats supported by the audio element.
     * The decodeAudioData() method is preferred over the createBuffer() from ArrayBuffer method because it is asynchronous and does not block the main JavaScript thread.
     *
     * The following steps must be performed:
     * 1. Temporarily neuter the audioData ArrayBuffer in such a way that JavaScript code may not access or modify the data.
     * 2. Queue a decoding operation to be performed on another thread.
     * 3. The decoding thread will attempt to decode the encoded audioData into linear PCM. If a decoding error is encountered due to the audio format not being recognized or supported, or because of corrupted/unexpected/inconsistent data then the audioData neutered state will be restored to normal and the errorCallback will be scheduled to run on the main thread's event loop and these steps will be terminated.
     * 4. The decoding thread will take the result, representing the decoded linear PCM audio data, and resample it to the sample-rate of the AudioContext if it is different from the sample-rate of audioData. The final result (after possibly sample-rate converting) will be stored in an AudioBuffer.
     * 5. The audioData neutered state will be restored to normal
     * 6. The successCallback function will be scheduled to run on the main thread's event loop given the AudioBuffer from step (4) as an argument. 
     *
     * @param ArrayBuffer containing audio file data.
     * @param  callback function which will be invoked when the decoding is finished. The single argument to this callback is an AudioBuffer representing the decoded PCM audio data.
     * @param callback function which will be invoked if there is an error decoding the audio file data.
     */
    decodeAudioData(audioData: ArrayBuffer,  successCallback: any, errorCallback?: any): void;

    /**
     * Creates an AudioBufferSourceNode.
     */    
    createBufferSource(): AudioBufferSourceNode;

    /**
     * Creates a MediaElementAudioSourceNode given an HTMLMediaElement. As a consequence of calling this method, audio playback from the HTMLMediaElement will be re-routed into the processing graph of the AudioContext.
     */
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;

    /**
     * Creates a MediaStreamAudioSourceNode given a MediaStream. As a consequence of calling this method, audio playback from the MediaStream will be re-routed into the processing graph of the AudioContext.
     */    
    createMediaStreamSource(mediaStream: any): MediaStreamAudioSourceNode;

    /**
     * Creates a ScriptProcessorNode for direct audio processing using JavaScript. An exception will be thrown if bufferSize or numberOfInputChannels or numberOfOutputChannels are outside the valid range.
     * It is invalid for both numberOfInputChannels and numberOfOutputChannels to be zero.
     * @param bufferSize  the buffer size in units of sample-frames. It must be one of the following values: 256, 512, 1024, 2048, 4096, 8192, 16384. This value controls how frequently the onaudioprocess event handler is called and how many sample-frames need to be processed each call. Lower values for bufferSize will result in a lower (better) latency. Higher values will be necessary to avoid audio breakup and glitches. The value chosen must carefully balance between latency and audio quality.
     * @param numberOfInputChannels (defaults to 2) the number of channels for this node's input. Values of up to 32 must be supported.
     * @param numberOfOutputChannels (defaults to 2) the number of channels for this node's output. Values of up to 32 must be supported.
     */ 
    createScriptProcessor(bufferSize: number, numberOfInputChannels?: number, numberOfOutputChannels?: number):  ScriptProcessorNode;

    /**
     * Creates a AnalyserNode.
     */
    createAnalyser(): AnalyserNode;
    
    /**
     * Creates a GainNode.
     */
    createGain(): GainNode;     
    
    /**
     * Creates a DelayNode representing a variable delay line. The initial default delay time will be 0 seconds.
     * @param maxDelayTime the maximum delay time in seconds allowed for the delay line. If specified, this value must be greater than zero and less than three minutes or a NOT_SUPPORTED_ERR exception will be thrown.
     */
    createDelay(maxDelayTime?: number): DelayNode;
    //createDelayNode(maxDelayTime?: number): DelayNode;

    /**
     * Creates a BiquadFilterNode representing a second order filter which can be configured as one of several common filter types.
     */
    createBiquadFilter(): BiquadFilterNode;

    /**
     * Creates a WaveShaperNode representing a non-linear distortion.
     */
    createWaveShaper(): WaveShaperNode;

    /**
     * Creates an PannerNode.
     */
    createPanner(): PannerNode;

    /**
     * Creates a ConvolverNode.
     */
    createConvolver(): ConvolverNode;
    
    /**
     * Creates an ChannelSplitterNode representing a channel splitter. An exception will be thrown for invalid parameter values.
     * @param numberOfOutputs the number of outputs. Values of up to 32 must be supported. If not specified, then 6 will be used.
     */
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;

    /**
     * Creates an ChannelMergerNode representing a channel merger. An exception will be thrown for invalid parameter values.
     * @param numberOfInputs the number of inputs. Values of up to 32 must be supported. If not specified, then 6 will be used.
     */
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    
    /**
     * Creates a DynamicsCompressorNode.
     */
    createDynamicsCompressor(): DynamicsCompressorNode;

    /**
     * Creates an OscillatorNode.
     */
    createOscillator(): OscillatorNode;

    /**
     * Creates a WaveTable representing a waveform containing arbitrary harmonic content. The real and imag parameters must be of type Float32Array of equal lengths greater than zero and less than or equal to 4096 or an exception will be thrown. These parameters specify the Fourier coefficients of a Fourier series representing the partials of a periodic waveform. The created WaveTable will be used with an OscillatorNode and will represent a normalized time-domain waveform having maximum absolute peak value of 1. Another way of saying this is that the generated waveform of an OscillatorNode will have maximum peak value at 0dBFS. Conveniently, this corresponds to the full-range of the signal values used by the Web Audio API. Because the WaveTable will be normalized on creation, the real and imag parameters represent relative values.
     * @param real an array of cosine terms (traditionally the A terms). In audio terminology, the first element (index 0) is the DC-offset of the periodic waveform and is usually set to zero. The second element (index 1) represents the fundamental frequency. The third element represents the first overtone, and so on.
     * @param imag an array of sine terms (traditionally the B terms). The first element (index 0) should be set to zero (and will be ignored) since this term does not exist in the Fourier series. The second element (index 1) represents the fundamental frequency. The third element represents the first overtone, and so on.
     */
    createWaveTable(real: any,imag: any): WaveTable;
}

declare var AudioContext: {
    new (): AudioContext;
}

declare var webkitAudioContext: {
    new (): AudioContext;
}

interface OfflineRenderSuccessCallback{
    (renderedData: AudioBuffer): void;
}

/**
 * OfflineAudioContext is a particular type of AudioContext for rendering/mixing-down (potentially) faster than real-time. It does not render to the audio hardware, but instead renders as quickly as possible, calling a render callback function upon completion with the result provided as an AudioBuffer. It is constructed by specifying the numberOfChannels, length, and sampleRate as follows:
 * 
 *     var offlineContext = new OfflineAudioContext(unsigned long numberOfChannels, unsigned long length, float sampleRate);
 */
interface OfflineAudioContext extends AudioContext{
    constructor();
    startRendering(): void;
    oncomplete: OfflineRenderSuccessCallback;
}

/**
 * AudioNodes are the building blocks of an AudioContext. This interface represents audio sources, the audio destination, and intermediate processing modules. These modules can be connected together to form processing graphs for rendering audio to the audio hardware. Each node can have inputs and/or outputs. An AudioSourceNode has no inputs and a single output. An AudioDestinationNode has one input and no outputs and represents the final destination to the audio hardware. Most processing nodes such as filters will have one input and one output. Each type of AudioNode differs in the details of how it processes or synthesizes audio. But, in general, AudioNodes will process its inputs (if it has any), and generate audio for its outputs (if it has any).
 *
 * An output may connect to one or more AudioNode inputs, thus fanout is supported. An input may be connected from one or more AudioNode outputs, thus fanin is supported.
 *
 * In order to handle this fanin, any AudioNode with inputs performs an up-mixing of all connections for each input:
 *
 * 1. Calculate N: the maximum number of channels of all the connections to the input. For example, if an input has a mono connection and a stereo connection then this number will be 2.
 * 2. For each connection to the input, up-mix to N channels.
 * 3. Mix together all the up-mixed streams from (2). This is a straight-forward mixing together of each of the corresponding channels from each connection.
 *
 * Please see Mixer Gain Structure for more informative details.
 *
 * For performance reasons, practical implementations will need to use block processing, with each AudioNode processing a fixed number of sample-frames of size block-size. In order to get uniform behavior across implementations, we will define this value explicitly. block-size is defined to be 128 sample-frames which corresponds to roughly 3ms at a sample-rate of 44.1KHz.
 */
interface AudioNode {
    /**
     * Connects the AudioNode to another AudioNode.
     *
     *  It is possible to connect an AudioNode output to more than one input with multiple calls to connect(). Thus, "fanout" is supported.
     *
     *  It is possible to connect an AudioNode to another AudioNode which creates a cycle. In other words, an AudioNode may connect to another AudioNode, which in turn connects back to the first AudioNode. This is allowed only if there is at least one DelayNode in the cycle or an exception will be thrown.
     * 
     * There can only be one connection between a given output of one specific node and a given input of another specific node. Multiple connections with the same termini are ignored. For example:
     *
     *     nodeA.connect(nodeB);
     *     nodeA.connect(nodeB);
     *
     * will have the same effect as
     * 
     *     nodeA.connect(nodeB);
     *
     * @param destination the AudioNode to connect to.
     * @param output an index describing which output of the AudioNode from which to connect. An out-of-bound value throws an exception.
     * @param input an index describing which input of the destination AudioNode to connect to. An out-of-bound value throws an exception.
     */
    connect(destination: AudioNode, output?: number, input?: number): void;

    /**
     * Connects the AudioNode to an AudioParam, controlling the parameter value with an audio-rate signal.
     *
     * It is possible to connect an AudioNode output to more than one AudioParam with multiple calls to connect(). Thus, "fanout" is supported.
     *
     * It is possible to connect more than one AudioNode output to a single AudioParam with multiple calls to connect(). Thus, "fanin" is supported.
     *
     * An AudioParam will take the rendered audio data from any AudioNode output connected to it and convert it to mono by down-mixing if it is not already mono, then mix it together with other such outputs and finally will mix with the intrinsic parameter value (the value the AudioParam would normally have without any audio connections), including any timeline changes scheduled for the parameter.
     *
     * There can only be one connection between a given output of one specific node and a specific AudioParam. Multiple connections with the same termini are ignored. For example:
     *
     *     nodeA.connect(param);
     *     nodeA.connect(param);
     *
     * will have the same effect as
     *
     *     nodeA.connect(param);     
     * 
     * @param destination the AudioParam to connect to.
     * @param output an index describing which output of the AudioNode from which to connect. An out-of-bound value throws an exception.
     */
    connect(destination: AudioParam, output?: number): void;
    
    /**
     * Disconnects an AudioNode's output.
     * @param output an index describing which output of the AudioNode to disconnect. An out-of-bound value throws an exception.
     */
    disconnect(output?: number): void;

    /**
     * The AudioContext which owns this AudioNode.
     */
    context: AudioContext;

    /**
     * The number of inputs feeding into the AudioNode. This will be 0 for an AudioSourceNode.
     */
    numberOfInputs: number;

    /**
     * The number of outputs coming out of the AudioNode. This will be 0 for an AudioDestinationNode.
     */
    numberOfOutputs: number;
}


/**
 * This is an abstract interface representing an audio source, an AudioNode which has no inputs and a single output:
 * 
 *    numberOfInputs  : 0
 *    numberOfOutputs : 1
 *     
 * Subclasses of AudioSourceNode will implement specific types of audio sources.
 */
interface AudioSourceNode extends AudioNode {

}

/**
 * This is an AudioNode representing the final audio destination and is what the user will ultimately hear. It can be considered as an audio output device which is connected to speakers. All rendered audio to be heard will be routed to this node, a "terminal" node in the AudioContext's routing graph. There is only a single AudioDestinationNode per AudioContext, provided through the destination attribute of AudioContext.
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : 0
 */
interface AudioDestinationNode extends AudioNode {
    /**
     * The maximum number of channels that the numberOfChannels attribute can be set to. An AudioDestinationNode representing the audio hardware end-point (the normal case) can potentially output more than 2 channels of audio if the audio hardware is multi-channel. maxNumberOfChannels is the maximum number of channels that this hardware is capable of supporting. If this value is 0, then this indicates that maxNumberOfChannels may not be changed. This will be the case for an AudioDestinationNode in an OfflineAudioContext.
     * @readonly
     */
    maxNumberOfChannels: number;

    /**
     * The number of channels of the destination's input. This value will default to 2, and may be set to any non-zero value less than or equal to maxNumberOfChannels. An exception will be thrown if this value is not within the valid range. Giving a concrete example, if the audio hardware supports 8-channel output, then we may set numberOfChannels to 8, and render 8-channels of output.
     */
    numberOfChannels: number;
}

/**
 * AudioParam controls an individual aspect of an AudioNode's functioning, such as volume. The parameter can be set immediately to a particular value using the "value" attribute. Or, value changes can be scheduled to happen at very precise times (in the coordinate system of AudioContext.currentTime), for envelopes, volume fades, LFOs, filter sweeps, grain windows, etc. In this way, arbitrary timeline-based automation curves can be set on any AudioParam. Additionally, audio signals from the outputs of AudioNodes can be connected to an AudioParam, summing with the intrinsic parameter value.
 *
 * Some synthesis and processing AudioNodes have AudioParams as attributes whose values must be taken into account on a per-audio-sample basis. For other AudioParams, sample-accuracy is not important and the value changes can be sampled more coarsely. Each individual AudioParam will specify that it is either an a-rate parameter which means that its values must be taken into account on a per-audio-sample basis, or it is a k-rate parameter.
 * 
 * Implementations must use block processing, with each AudioNode processing 128 sample-frames in each block.
 * 
 * For each 128 sample-frame block, the value of a k-rate parameter must be sampled at the time of the very first sample-frame, and that value must be used for the entire block. a-rate parameters must be sampled for each sample-frame of the block.
 */
interface AudioParam { 
    /**
     *  The parameter's floating-point value. This attribute is initialized to the defaultValue. If a value is set outside the allowable range described by minValue and maxValue no exception is thrown, because these limits are just nominal and may be exceeded. If a value is set during a time when there are any automation events scheduled then it will be ignored and no exception will be thrown.
     */
    value: number;

    /**
     * Nominal minimum value. This attribute is informational and value may be set lower than this value.
     */
    minValue: number;

    /**
     * Nominal maximum value. This attribute is informational and value may be set higher than this value.
     */
    maxValue: number;

    /**
     * Initial value for the value attribute
     */
    defaultValue: number;

    /**
     * Schedules a parameter value change at the given time. 
     *
     * If there are no more events after this SetValue event, then for t >= startTime, v(t) = value. In other words, the value will remain constant.
     *
     * If the next event (having time T1) after this SetValue event is not of type LinearRampToValue or ExponentialRampToValue, then, for t: startTime <= t < T1, v(t) = value. In other words, the value will remain constant during this time interval, allowing the creation of "step" functions.
     *
     * If the next event after this SetValue event is of type LinearRampToValue or ExponentialRampToValue then please see details below.
     * 
     * @param value the value the parameter will change to at the given time
     * @param startTime parameter is the time in the same time coordinate system as AudioContext.currentTime.
     */
    setValueAtTime(value: number, startTime: number): void;

    /**
     * Schedules a linear continuous change in parameter value from the previous scheduled parameter value to the given value.
     *
     * The value during the time interval T0 <= t < T1 (where T0 is the time of the previous event and T1 is the endTime parameter passed into this method) will be calculated as:
     *
     *      v(t) = V0 + (V1 - V0) * ((t - T0) / (T1 - T0))
     * 
     * Where V0 is the value at the time T0 and V1 is the value parameter passed into this method.
     *
     * If there are no more events after this LinearRampToValue event then for t >= T1, v(t) = V1
     *
     * @param value the value the parameter will linearly ramp to at the given time.
     * @param endTime the time in the same time coordinate system as AudioContext.currentTime.
     */
    linearRampToValueAtTime(value: number, time: number): void;
    
    /**
     * Schedules an exponential continuous change in parameter value from the previous scheduled parameter value to the given value. Parameters representing filter frequencies and playback rate are best changed exponentially because of the way humans perceive sound.
     *
     * The value during the time interval T0 <= t < T1 (where T0 is the time of the previous event and T1 is the endTime parameter passed into this method) will be calculated as:
     *
     *     v(t) = V0 * (V1 / V0) ^ ((t - T0) / (T1 - T0))
     *
     * Where V0 is the value at the time T0 and V1 is the value parameter passed into this method.
     *
     * If there are no more events after this ExponentialRampToValue event then for t >= T1, v(t) = V1
     *
     * @param value the value the parameter will exponentially ramp to at the given time. An exception will be thrown if this value is less than or equal to 0, or if the value at the time of the previous event is less than or equal to 0.
     * @param endTime the time in the same time coordinate system as AudioContext.currentTime.
     */
    exponentialRampToValueAtTime(value: number, endTime: number): void;

    /**
     * Start exponentially approaching the target value at the given time with a rate having the given time constant. Among other uses, this is useful for implementing the "decay" and "release" portions of an ADSR envelope. Please note that the parameter value does not immediately change to the target value at the given time, but instead gradually changes to the target value.
     *
     * More precisely, timeConstant is the time it takes a first-order linear continuous time-invariant system to reach the value 1 - 1/e (around 63.2%) given a step input response (transition from 0 to 1 value).
     *
     * During the time interval: T0 <= t < T1, where T0 is the startTime parameter and T1 represents the time of the event following this event (or infinity if there are no following events):
     *
     *      v(t) = V1 + (V0 - V1) * exp(-(t - T0) / timeConstant)
     *
     * Where V0 is the initial value (the .value attribute) at T0 (the startTime parameter) and V1 is equal to the target parameter.
     *
     * @param target the value the parameter will start changing to at the given time.
     * @param startTime the time in the same time coordinate system as AudioContext.currentTime.
     * @param timeConstant the time-constant value of first-order filter (exponential) approach to the target value. The larger this value is, the slower the transition will be.
     */
    setTargetValueAtTime(target: number, startTime: number, timeConstant: number): void;

    /**
     * Sets an array of arbitrary parameter values starting at the given time for the given duration. The number of values will be scaled to fit into the desired duration.
     *
     * During the time interval: startTime <= t < startTime + duration, values will be calculated:
     *
     *     v(t) = values[N * (t - startTime) / duration], where N is the length of the values array.
     *
     * After the end of the curve time interval (t >= startTime + duration), the value will remain constant at the final curve value, until there is another automation event (if any).
     *
     * @param values a Float32Array representing a parameter value curve. These values will apply starting at the given time and lasting for the given duration.
     * @param startTime the time in the same time coordinate system as AudioContext.currentTime.
     * @param duration the amount of time in seconds (after the time parameter) where values will be calculated according to the values parameter..
     * 
     */
    setValueCurveAtTime(values: Float32Array, time: number, duration: number): void;

    /**
     * Cancels all scheduled parameter changes with times greater than or equal to startTime.
     * 
     * @param startTime the starting time at and after which any previously scheduled parameter changes will be cancelled. It is a time in the same time coordinate system as AudioContext.currentTime.
     */
    cancelScheduledValues(startTime: number): void;
}

/**
 * Changing the gain of an audio signal is a fundamental operation in audio applications. The GainNode is one of the building blocks for creating mixers. This interface is an AudioNode with a single input and single output:
 *
 *     numberOfInputs  : 1
 *     numberOfOutputs : 1
 *
 * which multiplies the input audio signal by the (possibly time-varying) gain attribute, copying the result to the output. By default, it will take the input and pass it through to the output unchanged, which represents a constant gain change of 1.
 *
 * As with other AudioParams, the gain parameter represents a mapping from time (in the coordinate system of AudioContext.currentTime) to floating-point value. Every PCM audio sample in the input is multiplied by the gain parameter's value for the specific time corresponding to that audio sample. This multiplied value represents the PCM audio sample for the output.
 * 
 * The number of channels of the output will always equal the number of channels of the input, with each channel of the input being multiplied by the gain values and being copied into the corresponding channel of the output.
 *
 * The implementation must make gain changes to the audio stream smoothly, without introducing noticeable clicks or glitches. This process is called "de-zippering".
 */
interface GainNode extends AudioNode {
    /**
     * Represents the amount of gain to apply. Its default value is 1 (no gain change). The nominal minValue is 0, but may be set negative for phase inversion. The nominal maxValue is 1, but higher values are allowed (no exception thrown).This parameter is a-rate
     */
    gain: AudioParam;
}

/**
 * A delay-line is a fundamental building block in audio applications. This interface is an AudioNode with a single input and single output:
 *
 *     numberOfInputs  : 1
 *     numberOfOutputs : 1
 *
 * which delays the incoming audio signal by a certain amount. The default amount is 0 seconds (no delay). When the delay time is changed, the implementation must make the transition smoothly, without introducing noticeable clicks or glitches to the audio stream.
 */
interface DelayNode extends AudioNode {
    /**
     * An AudioParam object representing the amount of delay (in seconds) to apply. The default value (delayTime.value) is 0 (no delay). The minimum value is 0 and the maximum value is determined by the maxDelayTime argument to the AudioContext method createDelay. This parameter is k-rate
     */
    delayTime: AudioParam;
}

/**
 * This interface represents a memory-resident audio asset (for one-shot sounds and other short audio clips). Its format is non-interleaved IEEE 32-bit linear PCM with a nominal range of -1 -> +1. It can contain one or more channels. It is analogous to a WebGL texture. Typically, it would be expected that the length of the PCM data would be fairly short (usually somewhat less than a minute). For longer sounds, such as music soundtracks, streaming should be used with the audio element and MediaElementAudioSourceNode.
 *
 * An AudioBuffer may be used by one or more AudioContexts.
 */
interface AudioBuffer {
    /**
     * The sample-rate for the PCM audio data in samples per second.
     * @readonly
     */
    sampleRate: number;

    /**
     * Length of the PCM audio data in sample-frames.
     * @readonly
     */
    length: number;

    /**
     * Duration of the PCM audio data in seconds.
     * @readonly
     */
    duration: number;

    /**
     * The number of discrete audio channels.
     * @readonly
     */
    numberOfChannels: number;

    /**
     * Returns the Float32Array representing the PCM audio data for the specific channel.
     *
     * The channel parameter is an index representing the particular channel to get data for. An index value of 0 represents the first channel. This index value MUST be less than numberOfChannels or an exception will be thrown.
     */
    getChannelData(channel: number): Float32Array;

}

/**
 * This interface represents an audio source from an in-memory audio asset in an AudioBuffer. It generally will be used for short audio assets which require a high degree of scheduling flexibility (can playback in rhythmically perfect ways). The playback state of an AudioBufferSourceNode goes through distinct stages during its lifetime in this order: UNSCHEDULED_STATE, SCHEDULED_STATE, PLAYING_STATE, FINISHED_STATE. The start() method causes a transition from the UNSCHEDULED_STATE to SCHEDULED_STATE. Depending on the time argument passed to start(), a transition is made from the SCHEDULED_STATE to PLAYING_STATE, at which time sound is first generated. Following this, a transition from the PLAYING_STATE to FINISHED_STATE happens when either the buffer's audio data has been completely played (if the loop attribute is false), or when the stop() method has been called and the specified time has been reached. Please see more details in the start() and stop() description. Once an AudioBufferSourceNode has reached the FINISHED state it will no longer emit any sound. Thus start() and stop() may not be issued multiple times for a given AudioBufferSourceNode.
 *
 *     numberOfInputs  : 0
 *     numberOfOutputs : 1
 */
interface AudioBufferSourceNode extends AudioSourceNode {

    /**
     * The playback state, initialized to UNSCHEDULED_STATE.
     */
    playbackState: number; 

    /**
     * Represents the audio asset to be played.
     */
    buffer: AudioBuffer;

    /**
     * The speed at which to render the audio stream. The default playbackRate.value is 1. This parameter is a-rate
     */
    playbackRate: AudioParam; 

    /**
     * Indicates if the audio data should play in a loop. The default value is false.
     */
    loop: bool;

    /**
     * Schedules a sound to playback at an exact time.
     *  
     * @param when time (in seconds) the sound should start playing. It is in the same time coordinate system as AudioContext.currentTime. If 0 is passed in for this value or if the value is less than currentTime, then the sound will start playing immediately. start may only be called one time and must be called before stop is called or an exception will be thrown.
     * @param offset the offset time in the buffer (in seconds) where playback will begin. This parameter is optional with a default value of 0 (playing back from the beginning of the buffer).
     * @param duration the duration of the portion (in seconds) to be played. This parameter is optional, with the default value equal to the total duration of the AudioBuffer minus the offset parameter. Thus if neither offset nor duration are specified then the implied duration is the total duration of the AudioBuffer.
     */
    start(when: number, offset?: number, duration?: number): void;

    /**
     * Schedules a sound to stop playback at an exact time. Please see deprecation section for the old method name.
     *
     * The when parameter describes at what time (in seconds) the sound should stop playing. It is in the same time coordinate system as AudioContext.currentTime. If 0 is passed in for this value or if the value is less than currentTime, then the sound will stop playing immediately. stop must only be called one time and only after a call to start or stop, or an exception will be thrown.
     */
    stop(when: number): void;
}

/*
 * This interface represents an audio source from an audio or video element.
 *
 *    numberOfInputs  : 0
 *    numberOfOutputs : 1
 */
interface MediaElementAudioSourceNode extends AudioSourceNode {
}

/**
 * This interface is an AudioNode which can generate, process, or analyse audio directly using JavaScript.
 *
 *     numberOfInputs  : 1
 *     numberOfOutputs : 1
 *
 * The ScriptProcessorNode is constructed with a bufferSize which must be one of the following values: 256, 512, 1024, 2048, 4096, 8192, 16384. This value controls how frequently the onaudioprocess event handler is called and how many sample-frames need to be processed each call. Lower numbers for bufferSize will result in a lower (better) latency. Higher numbers will be necessary to avoid audio breakup and glitches. The value chosen must carefully balance between latency and audio quality.
 *
 * numberOfInputChannels and numberOfOutputChannels determine the number of input and output channels. It is invalid for both numberOfInputChannels and numberOfOutputChannels to be zero.
 *
 *     var node = context.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
 */
interface ScriptProcessorNode  extends AudioNode {
    /**
     * An event listener which is called periodically for audio processing. An event of type AudioProcessingEvent will be passed to the event handler.
     */
    onaudioprocess: EventListener;        

    /**
     * The size of the buffer (in sample-frames) which needs to be processed each time onprocessaudio is called. Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     */
    bufferSize: number;
}

/**
 * This interface is a type of Event which is passed to the onaudioprocess event handler used by ScriptProcessorNode.
 *
 * The event handler processes audio from the input (if any) by accessing the audio data from the inputBuffer attribute. The audio data which is the result of the processing (or the synthesized data if there are no inputs) is then placed into the outputBuffer.
 */
interface AudioProcessingEvent extends Event {
    /**
     * The ScriptProcessorNode associated with this processing event.
     */
    node: ScriptProcessorNode;
    
    /**
     * The time when the audio will be played in the same time coordinate system as AudioContext.currentTime. playbackTime allows for very tight synchronization between processing directly in JavaScript with the other events in the context's rendering graph.
     */
    playbackTime: number;

    /**
     * An AudioBuffer containing the input audio data. It will have a number of channels equal to the numberOfInputChannels parameter of the createScriptProcessor() method. This AudioBuffer is only valid while in the scope of the onaudioprocess function. Its values will be meaningless outside of this scope.
     */
    inputBuffer: AudioBuffer;

    /**
     * An AudioBuffer where the output audio data should be written. It will have a number of channels equal to the numberOfOutputChannels parameter of the createScriptProcessor() method. Script code within the scope of the onaudioprocess function is expected to modify the Float32Array arrays representing channel data in this AudioBuffer. Any script modifications to this AudioBuffer outside of this scope will not produce any audible effects.
     */
    outputBuffer: AudioBuffer; 
}

enum PanningModelType {
    /**
     * A simple and efficient spatialization algorithm using equal-power panning.
     */
    equalpower,

    /**
     * A higher quality spatialization algorithm using a convolution with measured impulse responses from human subjects. This panning method renders stereo output.
     */
    HRTF,

    /**
     * An algorithm which spatializes multi-channel audio using sound field algorithms.
     */
    soundfield
}

enum DistanceModelType {
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

/**
 * This interface represents a processing node which positions / spatializes an incoming audio stream in three-dimensional space. The spatialization is in relation to the AudioContext's AudioListener (listener attribute).
 *
 *     numberOfInputs  : 1
 *     numberOfOutputs : 1
 *
 * The audio stream from the input will be either mono or stereo, depending on the connection(s) to the input.
 *
 * The output of this node is hard-coded to stereo (2 channels) and currently cannot be configured.
 */
interface PannerNode extends AudioNode {
    /**
     * Determines which spatialization algorithm will be used to position the audio in 3D space. The default is "HRTF".
     */
    panningModel: PanningModelType;

    /**
     * Sets the position of the audio source relative to the listener attribute. A 3D cartesian coordinate system is used.
     *
     * The default value is (0,0,0)
     *
     * @param x the x coordinates in 3D space.
     * @param y the y coordinates in 3D space.
     * @param z the z coordinates in 3D space.
     */
    setPosition(x: number, y: number, z: number): void;

    /**
     * Describes which direction the audio source is pointing in the 3D cartesian coordinate space. Depending on how directional the sound is (controlled by the cone attributes), a sound pointing away from the listener can be very quiet or completely silent.
     * 
     * The default value is (1,0,0) 
     *
     * @param x
     * @param y
     * @param z
     */
    setOrientation(x: number, y: number, z: number): void;
    
    /**
     * Sets the velocity vector of the audio source. This vector controls both the direction of travel and the speed in 3D space. This velocity relative to the listener's velocity is used to determine how much doppler shift (pitch change) to apply. The units used for this vector is meters / second and is independent of the units used for position and orientation vectors.
     *
     * The default value is (0,0,0)
     *
     * @param x a direction vector indicating direction of travel and intensity.
     * @param y
     * @param z
     */
    setVelocity(x: number, y: number, z: number): void;       

    /**
     * Determines which algorithm will be used to reduce the volume of an audio source as it moves away from the listener. The default is "inverse".
     */
    distanceModel: DistanceModelType;

    /**
     * A reference distance for reducing volume as source move further from the listener. The default value is 1.
     */
    refDistance: number;

    /**
     * The maximum distance between source and listener, after which the volume will not be reduced any further. The default value is 10000.
     */
    maxDistance: number;

    /**
     * Describes how quickly the volume is reduced as source moves away from listener. The default value is 1.
     */
    rolloffFactor: number;

    /**
     * A parameter for directional audio sources, this is an angle, inside of which there will be no volume reduction. The default value is 360.
     */
    coneInnerAngle: number;

    /**
     * A parameter for directional audio sources, this is an angle, outside of which the volume will be reduced to a constant value of coneOuterGain. The default value is 360.
     */
    coneOuterAngle: number;
    
    /**
     * A parameter for directional audio sources, this is the amount of volume reduction outside of the coneOuterAngle. The default value is 0.
     */
    coneOuterGain: number;
}

/**
 * This interface represents the position and orientation of the person listening to the audio scene. All PannerNode objects spatialize in relation to the AudioContext's listener. See this section for more details about spatialization.
 */
interface AudioListener {
    /**
     * A constant used to determine the amount of pitch shift to use when rendering a doppler effect. The default value is 1.
     */
    dopplerFactor: number;     

    /**
     * The speed of sound used for calculating doppler shift. The default value is 343.3 meters / second.
     */
    speedOfSound: number;

    /**
     * Sets the position of the listener in a 3D cartesian coordinate space. PannerNode objects use this position relative to individual audio sources for spatialization.
     * 
     * The default value is (0,0,0)
     *
     * @param x
     * @param y
     * @param z
     */
    setPosition(x: number, y: number, z: number): void;

    /**
     * Describes which direction the listener is pointing in the 3D cartesian coordinate space. Both a front vector and an up vector are provided. In simple human terms, the front vector represents which direction the person's nose is pointing. The up vector represents the direction the top of a person's head is pointing. These values are expected to be linearly independent (at right angles to each other). For normative requirements of how these values are to be interpreted, see the spatialization section.
     * 
     * @param x x coordinate of a front direction vector in 3D space, with the default value being 0
     * @param y y coordinate of a front direction vector in 3D space, with the default value being 0
     * @param z z coordinate of a front direction vector in 3D space, with the default value being -1
     * @param xUp x coodinate of an up direction vector in 3D space, with the default value being 0
     * @param yUp y coodinate of an up direction vector in 3D space, with the default value being 1
     * @param zUp z coodinate of an up direction vector in 3D space, with the default value being 0
     */
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;

    /**
     * Sets the velocity vector of the listener. This vector controls both the direction of travel and the speed in 3D space. This velocity relative to an audio source's velocity is used to determine how much doppler shift (pitch change) to apply. The units used for this vector is meters / second and is independent of the units used for position and orientation vectors.
     *
     * @param x x coordinate of a direction vector indicating direction of travel and intensity. The default value is 0
     * @param y y coordinate of a direction vector indicating direction of travel and intensity. The default value is 0
     * @param z z coordinate of a direction vector indicating direction of travel and intensity. The default value is 0
     */
    setVelocity(x: number, y: number, z: number): void;
}


/**
 * This interface represents a processing node which applies a linear convolution effect given an impulse response. Normative requirements for multi-channel convolution matrixing are described [here](http://www.w3.org/TR/2012/WD-webaudio-20121213/#Convolution-reverb-effect).
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : 1
 */
interface ConvolverNode extends AudioNode {
    /**
     * A mono, stereo, or 4-channel AudioBuffer containing the (possibly multi-channel) impulse response used by the ConvolverNode. At the time when this attribute is set, the buffer and the state of the normalize attribute will be used to configure the ConvolverNode with this impulse response having the given normalization.
     */
    buffer: AudioBuffer;

    /**
     * Controls whether the impulse response from the buffer will be scaled by an equal-power normalization when the buffer atttribute is set. Its default value is true in order to achieve a more uniform output level from the convolver when loaded with diverse impulse responses. If normalize is set to false, then the convolution will be rendered with no pre-processing/scaling of the impulse response. Changes to this value do not take effect until the next time the buffer attribute is set.
     */
    normalize: bool;
}

/** 
 * This interface represents a node which is able to provide real-time frequency and time-domain analysis information. The audio stream will be passed un-processed from input to output.
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : 1    Note that this output may be left unconnected.
 */
interface AnalyserNode extends AudioNode {
    /**
     * Copies the current frequency data into the passed floating-point array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.
     * @param array where frequency-domain analysis data will be copied.
     */
    getFloatFrequencyData(array: any): void;

    /**
     * Copies the current frequency data into the passed unsigned byte array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.
     * @param Tarray where frequency-domain analysis data will be copied.
     */
    getByteFrequencyData(array: any): void;

    /**
     * Copies the current time-domain (waveform) data into the passed unsigned byte array. If the array has fewer elements than the frequencyBinCount, the excess elements will be dropped.
     * @param array where time-domain analysis data will be copied.
     */
    getByteTimeDomainData(array: any): void;

    /**
     * The size of the FFT used for frequency-domain analysis. This must be a power of two.
     */ 
    fftSize: number;

    /**
     * Half the FFT size.
     */
    frequencyBinCount: number;

    /**
     * The minimum power value in the scaling range for the FFT analysis data for conversion to unsigned byte values.
     */
    minDecibels: number;

    /**
     * The maximum power value in the scaling range for the FFT analysis data for conversion to unsigned byte values.
     */
    maxDecibels: number;

    /**
     * A value from 0 -> 1 where 0 represents no time averaging with the last analysis frame.
     */
    smoothingTimeConstant: number;
}

/**
 * The ChannelSplitterNode is for use in more advanced applications and would often be used in conjunction with ChannelMergerNode.
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : Variable N (defaults to 6) // number of "active" (non-silent) outputs is determined by number of channels in the input
 */
interface ChannelSplitterNode extends AudioNode {
}

/**
 * The ChannelMergerNode is for use in more advanced applications and would often be used in conjunction with ChannelSplitterNode.
 *
 *    numberOfInputs  : Variable N (default to 6)  // number of connected inputs may be less than this
 *    numberOfOutputs : 1
 */
interface ChannelMergerNode extends AudioNode {
}

/**
 * DynamicsCompressorNode is an AudioNode processor implementing a dynamics compression effect.
 *
 * Dynamics compression is very commonly used in musical production and game audio. It lowers the volume of the loudest parts of the signal and raises the volume of the softest parts. Overall, a louder, richer, and fuller sound can be achieved. It is especially important in games and musical applications where large numbers of individual sounds are played simultaneous to control the overall signal level and help avoid clipping (distorting) the audio output to the speakers.
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : 1
 */
interface DynamicsCompressorNode extends AudioNode {
    /**
     * The decibel value above which the compression will start taking effect. Its default value is -24, with a nominal range of -100 to 0.
     */
    threshold: AudioParam;

    /**
     * A decibel value representing the range above the threshold where the curve smoothly transitions to the "ratio" portion. Its default value is 30, with a nominal range of 0 to 40.
     */
    knee: AudioParam;

    /**
     * The amount of dB change in input for a 1 dB change in output. Its default value is 12, with a nominal range of 1 to 20.
     */
    ratio: AudioParam;

    /**
     * A read-only decibel value for metering purposes, representing the current amount of gain reduction that the compressor is applying to the signal. If fed no signal the value will be 0 (no gain reduction). The nominal range is -20 to 0.
     */
    reduction: AudioParam;

    /**
     * The amount of time (in seconds) to reduce the gain by 10dB. Its default value is 0.003, with a nominal range of 0 to 1.
     */
    attack: AudioParam;

    /**
     * The amount of time (in seconds) to increase the gain by 10dB. Its default value is 0.250, with a nominal range of 0 to 1.
     */
    release: AudioParam;

}

enum BiquadFilterType {
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

/**
 * BiquadFilterNode is an AudioNode processor implementing very common low-order filters.
 *
 * Low-order filters are the building blocks of basic tone controls (bass, mid, treble), graphic equalizers, and more advanced filters. Multiple BiquadFilterNode filters can be combined to form more complex filters. The filter parameters such as "frequency" can be changed over time for filter sweeps, etc. Each BiquadFilterNode can be configured as one of a number of common filter types as shown in the IDL below. The default filter type is "lowpass"
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : 1
 *
 * The filter types are briefly described below. We note that all of these filters are very commonly used in audio processing. In terms of implementation, they have all been derived from standard analog filter prototypes. For more technical details, we refer the reader to the excellent reference by Robert Bristow-Johnson.
 *
 * All parameters are k-rate with the following default parameter values:
 *
 * ## frequency
 * 350Hz, with a nominal range of 10 to the Nyquist frequency (half the sample-rate).
 * ## Q
 * 1, with a nominal range of 0.0001 to 1000.
 * ## gain
 * 0, with a nominal range of -40 to 40.
 */
interface BiquadFilterNode extends AudioNode {

    type: BiquadFilterType;
    frequency: AudioParam; 
    Q: AudioParam;
    gain: AudioParam;

    /**
     * Given the current filter parameter settings, calculates the frequency response for the specified frequencies.
     * @param frequencyHz an array of frequencies at which the response values will be calculated.
     * @param magResponse an output array receiving the linear magnitude response values.
     * @param phaseResponse an output array receiving the phase response values in radians.
     */
    getFrequencyResponse(frequencyHz: any, magResponse: any, phaseResponse: any): void;
}

/**
 * WaveShaperNode is an AudioNode processor implementing non-linear distortion effects.
 *
 * Non-linear waveshaping distortion is commonly used for both subtle non-linear warming, or more obvious distortion effects. Arbitrary non-linear shaping curves may be specified.
 *
 *    numberOfInputs  : 1
 *    numberOfOutputs : 1
 */
interface WaveShaperNode extends AudioNode {
    /**
     * The shaping curve used for the waveshaping effect. The input signal is nominally within the range -1 -> +1. Each input sample within this range will index into the shaping curve with a signal level of zero corresponding to the center value of the curve array. Any sample value less than -1 will correspond to the first value in the curve array. Any sample value less greater than +1 will correspond to the last value in the curve array.
     */
    curve: Float32Array;
}

enum OscillatorType {
  sine,
  square,
  sawtooth,
  triangle,
  custom
}

/**
 * OscillatorNode represents an audio source generating a periodic waveform. It can be set to a few commonly used waveforms. Additionally, it can be set to an arbitrary periodic waveform through the use of a WaveTable object.
 *
 * Oscillators are common foundational building blocks in audio synthesis. An OscillatorNode will start emitting sound at the time specified by the start() method.
 *
 * Mathematically speaking, a continuous-time periodic waveform can have very high (or infinitely high) frequency information when considered in the frequency domain. When this waveform is sampled as a discrete-time digital audio signal at a particular sample-rate, then care must be taken to discard (filter out) the high-frequency information higher than the Nyquist frequency (half the sample-rate) before converting the waveform to a digital form. If this is not done, then aliasing of higher frequencies (than the Nyquist frequency) will fold back as mirror images into frequencies lower than the Nyquist frequency. In many cases this will cause audibly objectionable artifacts. This is a basic and well understood principle of audio DSP.
 *
 * There are several practical approaches that an implementation may take to avoid this aliasing. But regardless of approach, the idealized discrete-time digital audio signal is well defined mathematically. The trade-off for the implementation is a matter of implementation cost (in terms of CPU usage) versus fidelity to achieving this ideal.
 * 
 * It is expected that an implementation will take some care in achieving this ideal, but it is reasonable to consider lower-quality, less-costly approaches on lower-end hardware.
 *
 * Both .frequency and .detune are a-rate parameters and are used together to determine a computedFrequency value:
 *
 *     computedFrequency(t) = frequency(t) * pow(2, detune(t) / 1200)
 *
 * The OscillatorNode's instantaneous phase at each time is the time integral of computedFrequency.
 *
 *     numberOfInputs  : 0
 *     numberOfOutputs : 1 (mono output)
 */
interface OscillatorNode extends AudioSourceNode {
    /**
     * The shape of the periodic waveform. It may directly be set to any of the type constant values except for "custom". The setWaveTable() method can be used to set a custom waveform, which results in this attribute being set to "custom". The default value is "sine".
     */
    type: OscillatorType;

    /**
     * defined as in AudioBufferSourceNode.
     * @readonly
     */
    playbackState: number;

    /**
     * The frequency (in Hertz) of the periodic waveform. This parameter is a-rate
     * @readonly
     */
    frequency: AudioParam;
    
    /**
     * A detuning value (in Cents) which will offset the frequency by the given amount. This parameter is a-rate
     */
    detune: AudioParam; // in Cents

    /**
     * defined as in AudioBufferSourceNode.
     */
    start(when: number): void;
    
    /**
     * defined as in AudioBufferSourceNode.
     */
    stop(when: number): void;

    /**
     * Sets an arbitrary custom periodic waveform given a WaveTable.
     */
    setWaveTable(waveTable: WaveTable): void;
}

/**
 * WaveTable represents an arbitrary periodic waveform to be used with an OscillatorNode. Please see createWaveTable() and setWaveTable() and for more details.
 */
interface WaveTable {
}

/**
 * This interface represents an audio source from a MediaStream. The first AudioMediaStreamTrack from the MediaStream will be used as a source of audio.
 *
 *    numberOfInputs  : 0
 *    numberOfOutputs : 1
 */
interface MediaStreamAudioSourceNode extends AudioSourceNode {
}
