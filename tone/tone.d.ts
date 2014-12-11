// Type definitions for TONE.JS
// Project: https://github.com/TONEnoTONE/Tone.js
// Definitions by: Luke Phillips <https://github.com/lukephills>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/***
 ---- LIST OF CLASSES DEFINED (A-Z, indentation shows extended classes) ----
//NOTE: You will also need the Web Audio Definitions file which can be found here: https://github.com/borisyankov/DefinitelyTyped/tree/master/webaudioapi

Tone
    Buffer
    Clip
    Clock
    Compressor
    DryWet
    Effect
        AutoPanner
        AutoWah
        BitCrusher
        Chebyshev
        Convolver
        Distortion
        FeedbackEffect
            StereoFeedbackEffect
                StereoXFeedbackEffect
                Chorus
                PingPongDelay
            FeedbackDelay
        Freeverb
        JCReverb
        StereoEffect
            MidSideEffect
                StereoWidener
    Envelope
       AmplitudeEnvelope
       ScaledEnvelope
    EQ
        FeedbackCombFilter
    Filter
    Follower
    Gate
    Instrument
        Monophonic
            AMSynth
            MonoSynth
            DuoSynth
            FMSynth
        MultiSampler
        NoiseSynth
        PluckSynth
        PolySynth
        Sampler
    Limiter
    LowpassCombFilter
    Master
    Merge
    Meter
    Mono
    MultibandCompressor
    MultibandSplit
    Note
    Panner
    PanVol
    Route
    SignalBase
        Abs
        Add
        AudioToGain
        Divide
        Equal
        EqualPowerGain
        EqualZero
        Expr
        LessThan
        GreaterThan
        GreaterThanZero
        IfThenElse
        Inverse
        Max
        Min
        Modulo
        Multiply
        Negate
        Normalize
        NOT
        OR
        Pow
        Scale
        ScaleEx
        Select
        Signal
        Switch
        Threshold
        WaveShaper
    Source
        LFO
        Microphone
        Noise
        Oscillator
            OmniOscillator
            PulseOscillator
            PWMOscillator
        Player
    Split
    Time
    Transport
***/


interface Tone {
    context: AudioContext;
    input: GainNode;
    output: GainNode;
    connectSeries(...args: any[]): void;
    connect(unit: any, outputNum?:number, inputNum?:number): void;
    dbToGain(db: number): number;
    defaultArg(given: any, fallback: any): any;
    disconnect(outputNum?:number): void;
    dispose(): void;
    equalPowerScale(percent:number): number;
    expScale(gain: number): number;
    extend(child: Function, parent?: Function): void;
    connectParallel(...args: any[]): void;
    frequencyToNote(freq:number):string;
    frequencyToSeconds(freq:number):number;
    gainToDb(gain: number): number;
    interpolate(input: number, outputMin: number, outputMax: number): number;
    isUndef(arg: any): boolean;
    logScale(gain: number): number;
    midiToNote(midiNumber: number): string;
    noGC(): void;
    normalize(input: number, inputMin: number, inputMax: number): number;
    notationToSeconds(notation: string, bpm?: number, timeSignature?: number): number;
    noteToFrequency(note: string): number;
    now(): number;
    optionsObject(values: Array<any>, keys: Array<string>, defaults?:Object): Object;
    receive(channelName: string, input?: AudioNode): void;
    samplesToSeconds(samples: number): number;
    secondsToFrequency(seconds: number): number;
    send(channelName: string, amount: number): GainNode;
    setContext(): void;
    startMobile(): void;
    ticksToSeconds(transportTime: string, bpm?: number, timeSignature?: number): number;
    toFrequency(time: Tone.Time): number;
    toMaster(): void;
    toSamples(time: Tone.Time): number;
    toSeconds(time?: number, now?: number): number;
}


declare module Tone {

    var Buffer: {
        new(url: any): Tone.Buffer; //TODO: Change 'any' to 'Object | Array | string' when available
    };

    interface Buffer extends Tone {
        buffers: any; //TODO: Change 'any' to 'Object | Array | AudioBuffer' when available
    }

    var Clip: {
        new(rate: number, callback: Function): Tone.Clip;
    };

    interface Clip extends Tone {
        tick: Function;
        getRate(): number;
        setRate(rate: Tone.Time, rampTime?: Tone.Time): void;
        start(time: Tone.Time): void;
        stop(time: Tone.Time, onend: Function): void;
    }

    var Clock: {
        new(min: number, max: number): Tone.Clock;
    };

    interface Clock extends Tone {
        setMax(max: number): void;
        setMin(min: number): void;
    }

    var Compressor: {
        new(threshold?: number, ratio?: number): Tone.Compressor;
    };

    interface Compressor extends Tone {
        attack: AudioParam;
        knee: AudioParam;
        ratio: AudioParam;
        release: AudioParam;
        threshold: AudioParam;
        setAttack(time: Tone.Time): void;
        setKnee(knee: number): void;
        setRatio(ratio: number): void;
        setRelease(time: Tone.Time): void;
        setThreshold(value: number): void;
    }

    var DryWet: {
        new(initialDry?: number): Tone.DryWet;
    };

    interface DryWet extends Tone {
        dry: GainNode;
        wet: GainNode;
        wetness: Tone.Signal;
        setDry(val: number, rampTime?: Tone.Time): void;
        setWet(val: number, rampTime?: Tone.Time): void;
    }

    var Effect: {
        new(initialDry?: number): Tone.Effect;
    };

    interface Effect extends Tone {
        dryWet: Tone.DryWet;
        effectReturn: GainNode;
        effectSend: GainNode;
        bypass(): void;
        connectEffect(effect: Tone): void;
        set(params: Object): void;
        setDry(dryness: number, rampTime?: Tone.Time): void;
        setPreset(presetName: string): void;
        setWet(wetness: number, rampTime?: Tone.Time): void;
    }

    var AutoPanner: {
        new(frequency?: number): Tone.AutoPanner;
    };

    interface AutoPanner extends Effect {
        setFrequency(frequency: number): void;
        setType(type: string): void;
        start(Time?: Tone.Time): void;
        stop(Time?: Tone.Time): void;
    }

    var AutoWah: {
        new(baseFrequency?: number, octaves?: number, sensitivity?:number): Tone.AutoWah;
    };

    interface AutoWah extends Tone.Effect {
        setBaseFrequency(frequency: number): void;
        setOctaves(octaves: number): void;
        setSensitivity(Time?: Tone.Time): void;
    }

    var BitCrusher: {
        new(bits: number): Tone.BitCrusher;
    };

    interface BitCrusher extends Tone.Effect {}

    var Chebyshev: {
        new(order: number): Tone.Chebyshev;
    };

    interface Chebyshev extends Tone.Effect {
        setOrder(order: number): void;
        setOversample(oversampling: string): void;
    }

    var Convolver: {
        new(url: any, callback: Function): Tone.Convolver; //TODO: Change any to 'string | Object' when available
    };

    interface Convolver extends Tone.Effect {
        load(url: string, callback?: Function): void;
        setBuffer(buffer: AudioBuffer): void;
    }

    var Distortion: {
        new(distortion: number): Tone.Distortion;
    };

    interface Distortion extends Tone.Effect {
        setDistortion(amount: number): void;
        setOversample(oversampling: string): void;
    }

    var FeedbackEffect: {
        new(initialFeedback?: any): Tone.FeedbackEffect;
    };

    interface FeedbackEffect extends Tone.Effect {
        feedback: Tone.Signal;
        setFeedback(value: number, rampTime?: Tone.Time): void;
    }

    var StereoFeedbackEffect: {
        new(): Tone.StereoFeedbackEffect;
    };

    interface StereoFeedbackEffect extends Tone.FeedbackEffect {}

    var StereoXFeedbackEffect: {
        new(): Tone.StereoXFeedbackEffect;
    };

    interface StereoXFeedbackEffect extends Tone.FeedbackEffect {}

    var Chorus: {
        new(rate?: any, delayTime?: number, depth?: number): Tone.Chorus;
    };

    interface Chorus extends Tone.StereoXFeedbackEffect {
        setDelayTime(delayTime: number): void;
        setDepth(depth: number): void;
        setRate(rate: number): void;
        setType(type: number): void;
    }

    var PingPongDelay: {
        new(delayTime: any): Tone.PingPongDelay;
    };

    interface PingPongDelay extends Tone.StereoXFeedbackEffect {
        defaults: Object;
        delayTime: Tone.Signal;
        setDelayTime(delayTime)
    }

    var FeedbackDelay: {
        new(delayTime: any): Tone.FeedbackDelay;
    };

    interface FeedbackDelay extends Tone.FeedbackEffect {
        delayTime: Tone.Signal;
        feedback: Tone.Signal;
        setDelayTime(delayTime: Tone.Time, rampTime?: Tone.Time);
    }

    var Freeverb: {
        new(roomSize?: number, dampening?: number): Tone.Freeverb;
    };

    interface Freeverb extends Tone.Effect {
        dampening: Tone.Signal;
        roomSize: Tone.Signal;
        setDampening(dampening: number): void;
        setRoomSize(roomsize: number): void;
    }

    var JCReverb: {
        new(): Tone.JCReverb;
    };

    interface JCReverb extends Tone.Effect {
        roomSize: Tone.Signal;
        setRoomSize(roomsize: number): void;
    }

    var StereoEffect: {
        new(): Tone.StereoEffect;
    };

    interface StereoEffect extends Tone.Effect {
        effectReturnL: GainNode;
        effectReturnR: GainNode;
        effectSendL: GainNode;
        effectSendR: GainNode;
    }

    var MidSideEffect : {
        new(): Tone.MidSideEffect;
    };

    interface MidSideEffect extends Tone.StereoEffect {
        midReturn: GainNode;
        midSend: Tone.Expr;
        sideReturn: GainNode;
        sideSend: Tone.Expr;
    }

    var StereoWidener: {
        new(width?: any): Tone.StereoWidener; //TODO change 'any' to 'number | Object'
    };

    interface StereoWidener extends Tone.MidSideEffect {
        width: Tone.Signal;
        set(params: Object): void;
        setWidth(width: number): void;
    }

    var Envelope: {
        new(attack: any, decay?: Tone.Time, sustain?: number, release?: Tone.Time): Tone.Envelope;  //TODO: Change 'any' to 'Tone.Time | Object'
    };

    interface Envelope extends Tone {
        attack: Tone.Time;
        decay: Tone.Time;
        max: number;
        min: number;
        release: Tone.Time;
        sustain: number;
        set(params: Object): void;
        setAttack(time: Tone.Time): void;
        setDecay(time: Tone.Time): void;
        setExponent(exp: number): void;
        setMax(max: number): void;
        setMin(min: number): void;
        setRelease(time: Tone.Time): void;
        setSustain(time: number): void;
        triggerAttack(time?: Tone.Time, velocity?: number): void;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): void;
        triggerRelease(time?: Tone.Time): void;
    }

    var AmplitudeEnvelope: {
        new(attack?: any, decay?: Tone.Time, sustain?: number, release?:Tone.Time): Tone.AmplitudeEnvelope; //TODO: Change 'any' to 'Tone.Time | Object'
    };

    interface AmplitudeEnvelope extends Tone.Envelope {}

    var ScaledEnvelope: {
        new(attack?: any, decay?: Tone.Time, sustain?: number, release?:Tone.Time): Tone.ScaledEnvelope; //TODO: Change 'any' to 'Tone.Time | Object'
    };

    interface ScaledEnvelope extends Tone.Envelope {}

    var EQ: {
        new(lowLevel?, midLevel?: number, highLevel?: number): Tone.EQ;
    };

    interface EQ extends Tone {
        highFrequency: Tone.Signal;
        highGain: GainNode;
        input: GainNode;
        lowFrequency: Tone.Signal;
        lowGain: GainNode;
        midGain: GainNode;
        output: GainNode;
        set(params: Object): void;
        setHigh(db: number): void;
        setLow(db: number): void;
        setMid(db: number): void;
    }

    var FeedbackCombFilter: {
        new(minDelay?: number): Tone.FeedbackCombFilter;
    };

    interface FeedbackCombFilter extends Tone {
        resonance: Tone.Signal;
        setDelayTime(delayAmount: number, time?: Tone.Time);
    }

    var Filter: {
        new(freq: number, type?: string, rolloff?: number): Tone.Filter;
    };

    interface Filter extends Tone {
        detune: Tone.Signal;
        frequency: Tone.Signal;
        gain: AudioParam;
        Q: Tone.Signal;
        getType(): string;
        set(params: Object): void;
        setFrequency(val: Tone.Time, rampTime: Tone.Time): void;
        setQ(Q: number): void;
        setRolloff(rolloff: number);
        setType(type: string): void;
    }

    var Follower: {
        new(attack?: Tone.Time, release?: Tone.Time): Tone.Follower;
    };

    interface Follower extends Tone {
        set(params: Object): void;
        setAttack(attack: Tone.Time): void;
        setRelease(release: Tone.Time): void;
    }

    var Gate: {
        new(thresh?: number, attackTime?: number, releaseTime?: number): Tone.Gate;
    };

    interface Gate extends Tone {
        setAttack(attackTime: Tone.Time): void;
        setRelease(releaseTime: Tone.Time): void;
        setThreshold(thresh: number): void;
    }

    var Instrument: {
        new(): Tone.Instrument;
    };

    interface Instrument extends Tone {
        triggerAttack(note: any, time?: Tone.Time, velocity?: number): void;
        triggerAttackRelease(note: any, duration?: Tone.Time, time?: Tone.Time, velocity?: number): void;
        triggerRelease(time?: Tone.Time): void;
        setVolume(db: number): void;
    }

    var Monophonic: {
        new(): Tone.Monophonic;
    };

    interface Monophonic extends Tone.Instrument {
        portamento: number;
        set(params: Object): void;
        setNote(note: any): void;
        setPortamento(portamento: Tone.Time): void;
        setPreset(presetName: string): void;
    }

    var AMSynth: {
        new(options?: Object): Tone.AMSynth;
    };

    interface AMSynth extends Tone.Monophonic {
        carrier: Tone.MonoSynth;
        frequency: Tone.Signal;
        modulator: Tone.MonoSynth;
        portamento: number;
        setHarmonicity(ratio: number): void;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): void;  // Why do we have these methods when we
        triggerEnvelopeRelease(time?: Tone.Time): void;                    // have triggerAttack in Instrument class??
    }

    var MonoSynth: {
        new(options?: Object): Tone.MonoSynth;
    };

    interface MonoSynth extends Tone.Monophonic {
        detune: Tone.Signal;
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        frequency: Tone.Signal;
        oscillator: Tone.Oscillator;
        setOscType(oscType: string): void;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): void;  // Why do we have these methods when we
        triggerEnvelopeRelease(time?: Tone.Time): void;                    // have triggerAttack in Instrument class??
    }

    var DuoSynth: {
        new(options?: Object): Tone.DuoSynth;
    };

    interface DuoSynth extends Tone.Monophonic {
        voice0: Tone.MonoSynth;
        voice1: Tone.MonoSynth;
        frequency: Tone.Signal;
        setHarmonicity(ratio: number): void;
        setVibratoAmount(amount: number): void;
        setVibratoRate(rate: number): void;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): void;
        triggerEnvelopeRelease(time?: Tone.Time): void;
    }


    var FMSynth: {
        new(options?: Object): Tone.FMSynth;
    };

    interface FMSynth extends Tone.Monophonic {
        carrier: Tone.MonoSynth;
        frequency: Tone.Signal;
        modulator: Tone.MonoSynth;
        setHarmonicity(ratio: number): void;
        setModulationIndex(index: number): void;
        triggerEnvelopeAttack(time?: Tone.Time, velocity?: number): void;
        triggerEnvelopeRelease(time?: Tone.Time): void;
    }

    var MultiSampler: {
        new(samples: Object, onload?: Function): Tone.MultiSampler;
    };

    interface MultiSampler extends Tone.Instrument {
        samples: Tone.Sampler;
        triggerAttack(sample: string, time?: Tone.Time, velocity?: number): void;
        triggerAttackRelease(sample: string, duration: Tone.Time, time?: Tone.Time, velocity?: number);
        triggerRelease(sample: string, time?: Tone.Time): void;
    }

    var NoiseSynth: {
        new(options?: Object): Tone.NoiseSynth;
    };

    interface NoiseSynth extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: Tone.Filter;
        filterEnvelope: Tone.Envelope;
        noise: Tone.Noise;
        setNoiseType(oscType: string): void;
        triggerAttack(time?: Tone.Time, velocity?: number): void;
        triggerAttackRelease(duration: Tone.Time, time?: Tone.Time, velocity?: number): void;
        triggerRelease(time?: Tone.Time): void;
    }

    var PluckSynth : {
        new(): Tone.PluckSynth;
    };

    interface PluckSynth extends Tone.Instrument {
        attackNoise: number;
        dampening: Tone.Signal;
        resonance: Tone.Signal;
    }

    var PolySynth : {
        new(voicesAmount?: any, voice?: Function, voiceOptions?: Object): Tone.PolySynth;
    };

    interface PolySynth extends Tone.Instrument {
        set(params: Object): void;
        setPreset(presetName: string): void;
    }

    var Sampler: {
        new(url: any, load?: Function): Tone.Sampler;
    };

    interface Sampler extends Tone.Instrument {
        envelope: Tone.Envelope;
        filter: BiquadFilterNode;
        filterEnvelope: Tone.Envelope;
        player: Tone.Player;
        triggerAttack(sample: string, time?: Tone.Time, velocity?: number): void;
        triggerRelease(sample: string, time?: Tone.Time): void;
    }

    var Limiter: {
        new(threshold: number): Tone.Limiter;
    };

    interface Limiter extends Tone {
        setThreshold(value): void;
    }

    var LowpassCombFilter: {
        new(minDelay?: number): Tone.LowpassCombFilter;
    };

    interface LowpassCombFilter extends Tone {
        dampening: Tone.Signal;
        resonance: Tone.Signal;
        setDelayTime(delayAmount: number, time?: Tone.Time): void;
    }

    var Master: {
        new(): Tone.Master;
    };

    interface Master extends Tone {
        limiter: DynamicsCompressorNode;
        mute(muted: boolean): void;
        setVolume(db: number, fadeTime?: Tone.Time): void;
    }

    var Merge: {
        new(): Tone.Merge;
    };

    interface Merge extends Tone {
        //input: Array<GainNode>;
        left: GainNode;
        right: GainNode;
    }

    var Meter: {
        new(channels?: number, smoothing?: number, clipMemory?:number): Tone.Meter;
    };

    interface Meter extends Tone {
        channels: number;
        clipMemory: number;
        smoothing: number;
        getDb(channel?:number): number;
        getLevel(channel?:number): number;
        getValue(channel?:number): number;
    }

    var Mono: {
        new(): Tone.Mono;
    };

    interface Mono extends Tone {}


    var MultibandCompressor: {
        new(options: Object): Tone.MultibandCompressor;
    };

    interface MultibandCompressor extends Tone {
        high: Tone.Compressor;
        highFrequency: Tone.Signal;
        low: Tone.Compressor;
        lowFrequency: Tone.Signal;
        mid: Tone.Compressor;
    }

    var MultibandSplit: {
        new(lowFrequency: number, highFrequency: number): Tone.MultibandSplit;
    };

    interface MultibandSplit extends Tone {
        high: Tone.Filter;
        highFrequency: Tone.Signal;
        input: GainNode;
        low: Tone.Filter;
        lowFrequency: Tone.Signal;
        mid: Tone.Filter;
        //output: Array;
    }

    var Note: {
        new(channel: any, time:Tone.Time, value: any): Tone.Note;
    };

    interface Note {
        value: any;
        parseScore(score: Object): Array<Tone.Note>;
        route(channel:any, callback?: Function): void;
        unroute(): void;
        dispose(): void;
    }

    var Panner: {
        new(initialPan?: number): Tone.Panner;
    };

    interface Panner extends Tone {
        pan: Tone.Signal;
        setPan(pan: number, rampTime?: Tone.Time): void;
    }

    var PanVol: {
        new(): Tone.PanVol;
    };

    interface PanVol extends Tone {
        pan: Tone.Panner;
        vol: GainNode;
        setPan(pan: number): void;
        setVolume(): void;
    }

    var Route: {
        new(outputCount?: number): Tone.Route;
    };

    interface Route extends Tone {
        gate: Tone.Signal;
        //output: Array<RouteGate>;
        select(which?: number, time?: Tone.Time): void;
    }

    var SignalBase: {
        new(): Tone.SignalBase;
    };

    interface SignalBase extends Tone {
        connect(node: any, outputNumber?: number, inputNumber?: number): void; //TODO: Change 'any' to 'AudioParam | AudioNode | Tone.Signal | Tone' when available
        dispose(): void;
    }

    var Abs: {
        new(): Tone.Abs;
    };

    interface Abs extends Tone.SignalBase {}

    var Add: {
        new(value:number): Tone.Add;
    };

    interface Add extends Tone.SignalBase {
        setValue(value: number): void;
    }

    var AudioToGain: {
        new(): Tone.AudioToGain;
    };

    interface AudioToGain extends Tone.SignalBase {}


    var AND: {
        new(inputCount?:number): Tone.AND;
    };

    interface AND extends Tone.SignalBase {
        setInputCount(inputCount: number): void;
    }

    var Divide: {
        new(divisor?: number, precision?: number): Tone.Divide;
    };

    interface Divide extends Tone.SignalBase {
        setValue(value): void;
    }

    var Equal: {
        new(value: number): Tone.Equal;
    };

    interface Equal extends Tone.SignalBase {
        setValue(value: number): void;
    }

    var EqualPowerGain: {
        new(): Tone.EqualPowerGain;
    };

    interface EqualPowerGain extends Tone.SignalBase {}

    var EqualZero: {
        new(): Tone.EqualZero;
    };

    interface EqualZero extends Tone.SignalBase {}

    var Expr: {
        new(expr: string): Tone.Expr;
    };

    interface Expr extends Tone.SignalBase {
        //input: Array;
        output: any;
    }

    var LessThan: {
        new(value?: number): Tone.LessThan;
    };

    interface LessThan extends Tone.SignalBase {
        setValue(value: number): void;
    }

    var GreaterThan: {
        new(value?: number): Tone.GreaterThan;
    };

    interface GreaterThan extends Tone.SignalBase {
        setValue(value: number): void;
    }

    var GreaterThanZero: {
        new(): Tone.GreaterThanZero;
    };

    interface GreaterThanZero extends Tone.SignalBase {}

    var IfThenElse: {
        new(): Tone.IfThenElse;
    };

    interface IfThenElse extends Tone.SignalBase {}

    var Inverse: {
        new(precision?: number): Tone.Inverse;
    };

    interface Inverse extends Tone.SignalBase {}


    var Max: {
        new(max: number): Tone.Max;
    };

    interface Max extends Tone.SignalBase {
        setMax(value: number): void;
    }

    var Min: {
        new(min: number): Tone.Min;
    };

    interface Min extends Tone.SignalBase {
        setMin(value:number):void;
    }

    var Modulo: {
        new(modulus: number, bits?:number): Tone.Modulo;
    };

    interface Modulo extends Tone.SignalBase {}

    var Multiply: {
        new(value?: number): Tone.Multiply;
    };

    interface Multiply extends Tone.SignalBase {
        setValue(value: number): void;
    }

    var Negate: {
        new(): Tone.Negate;
    };

    interface Negate extends Tone.SignalBase {}

    var Normalize: {
        new(): Tone.Normalize;
    };

    interface Normalize extends Tone.SignalBase {
        setMax(max: number): void;
        setMin(min: number): void;
    }

    var NOT: {
        new(): Tone.NOT;
    };

    interface NOT extends Tone.SignalBase {}

    var OR: {
        new(): Tone.OR;
    };

    interface OR extends Tone.SignalBase {
        //output: Tone.Equal;
    }

    var Pow: {
        new(exp: number): Tone.Pow;
    };

    interface Pow extends Tone.SignalBase {
        setExponent(exp: number): void;
    }

    var Scale: {
        new(inputMin: number, inputMax: number, outputMin: number, outputMax: number): Tone.Scale;
    };

    interface Scale extends Tone.SignalBase {
        setInputMax(val: number): void;
        setInputMin(val: number): void;
        setOuputMax(val: number): void;
        setOuputMin(val: number): void;
    }

    var ScaleExp: {
        new(inputMin: number, inputMax: number, outputMin: number, outputMax?: number, exponent?: number): Tone.ScaleExp;
    };

    interface ScaleExp extends Tone.SignalBase {
        setExponent(exp: number): void;
        setInputMax(val: number): void;
        setInputMin(val: number): void;
        setOuputMax(val: number): void;
        setOuputMin(val: number): void;
    }

    var Select: {
        new(sourceCount?: number): Tone.Select;
    };

    interface Select extends Tone.SignalBase {
        gate: Tone.Signal;
        select(which?: number, time?: Tone.Time): void;
    }

    var Signal: {
        new(value?: number): Tone.Signal;
    };

    interface Signal extends Tone.SignalBase {
        cancelScheduledValues(startTime: Tone.Time): void;
        exponentialRampToValueAtTime(value: number, endTime: Tone.Time): void;
        exponentialRampToValueNow(value: number, endTime: Tone.Time): void;
        getValue(): number;
        linearRampToValueAtTime(value: number, endTime: Tone.Time): void;
        linearRampToValueNow(value: number, endTime: Tone.Time): void;
        setCurrentValueNow(now?: number): number;
        setTargetAtTime(value: number, startTime: Tone.Time, timeConstant: number): void;
        setValue(value: number): void;
        setValueAtTime(value: number, time: Tone.Time): void;
        setValueCurveAtTime(values: Array<number>, startTime: Tone.Time, duration: Tone.Time): void;
        sync(signal: Tone.Signal, ratio?: number): void;
        unsync(): void;
    }

    var Switch: {
        new(): Tone.Switch;
    };

    interface Switch extends Tone.SignalBase {
        gate: Tone.Signal;
        close(time: Tone.Time): void;
        open(time: Tone.Time): void;
    }

    var Threshold: {
        new(thresh?: number): Tone.Threshold;
    };

    interface Threshold extends Tone.SignalBase {
        setThreshold(thresh: number): void;
    }

    var WaveShaper: {
        new(mapping: any, bufferLen?: number): Tone.WaveShaper; //TODO: change 'any' to 'Function | Array | number'
    };

    interface WaveShaper extends Tone.SignalBase {
        setCurve(mapping: Array<any>): void;
        setMap(mapping: Function): void;
        setOversample(oversampling: string): void;
    }


    var Source: {
        new(): Tone.Source;
    };

    interface Source extends Tone {
        State: string;
        pause(time: Tone.Time): void;
        setVolume(db: number, fadeTime?: Tone.Time): void;
        start(time?: Tone.Time): void;
        stop(time?: Tone.Time): void;
        sync(delay?: Tone.Time): void;
        unsync(): void;
        state: Tone.Source.State;
    }

    module Source {
        interface State{}
    }

    var LFO: {
        new(rate: number, outputMin?: number, outputMax?: number): Tone.LFO;
    };

    interface LFO extends Tone.Source {
        frequency: Tone.Signal;
        oscillator: Tone.Oscillator;
        set(params: Object): void;
        setFrequency(val: Tone.Time, rampTime?: Tone.Time): void;
        setMax(max: number): void;
        setMin(min: number): void;
        setPhase(degrees: number): void;
        setType(type: string): void;
    }

    var Microphone: {
        new(inputNum?: number): Tone.Microphone;
    };

    interface Microphone extends Tone.Source {}

    var Noise: {
        new(type: string): Tone.Noise;
    };

    interface Noise extends Tone.Source {
        onended();
        setType(type: string, time?: Tone.Time);
    }

    var Oscillator: {
        new(frequency?: number, type?: string): Tone.Oscillator;
    };

    interface Oscillator extends Tone.Source {
        defaults: Object;
        detune: Tone.Signal;
        frequency: Tone.Signal;
        state: Tone.Source.State;
        onended: Function;
        set(params: Object): void;
        setFrequency(val: Tone.Time, rampTime?: Tone.Time): void;
        setPhase(degrees: number): void;
        setType(type: string): void;
        oscillator: OscillatorNode;
    }

    var OmniOscillator: {
        new(frequency?: number, type?: string): Tone.OmniOscillator;
    };

    interface OmniOscillator extends Tone.Source {
        getType(): string;
        setModulationFrequency(freq): void;
        setType(type: string): void;
        setWidth(width: number): void;
    }

    var PulseOscillator:  {
        new(frequency?: number, width?:number): Tone.PulseOscillator;
    };

    interface PulseOscillator extends Tone.Oscillator {
        width: Tone.Signal;
        setWidth(width: number): void;
    }

    var PWMOscillator:  {
        new(frequency?: number, type?: string): Tone.PWMOscillator;
    };

    interface PWMOscillator extends Tone.Oscillator {
        modulationFrequency :Tone.Signal;
        setModulationFrequency(freq: number, rampTime: Tone.Time): void;
    }

    var Player: {
        new(url?: string, onload?: Function): Tone.Player;
    };

    interface Player extends Tone.Source {
        duration: number;
        loop: boolean;
        loopEnd: number;
        loopStart: number;
        retrigger: boolean;
        load(url: string, callback?: Function): void;
        onended(): void;
        setBuffer(buffer: AudioBuffer);
        setPlaybackRate(rate: number, rampTime?: Tone.Time): void;
        start(startTime?: Tone.Time, offset?: Tone.Time, duration?: Tone.Time): void;
    }

    var Split: {
        new(): Tone.Split;
    };

    interface Split extends Tone {
        gate: Tone.Signal;
        left: GainNode;
        right: GainNode;
        //output: Array<GainNode>;
    }

    interface Time{}

    var Transport:  {
        new(): Tone.Transport;
    };

    interface Transport extends Tone {
        loop: boolean;
        state: TransportState;

        clearInterval(rmInterval: number): boolean;
        clearIntervals(): void;
        clearTimeline(timelineID: number): boolean;
        clearTimelines(): void;
        clearTimeout(timeoutID: number): boolean;
        clearTimeouts(): void;
        getBpm(): number;
        getTimeSignature(): number;
        getTransportTime(): string;
        nextBeat(subdivision?): number;
        pause(time: Tone.Time): void;
        setBpm(bpm: number, rampTime?: Tone.Time): void;
        setInterval(callback: Function, interval: Tone.Time, ctx: Object): number;
        setLoopEnd(endPosition: Tone.Time): void;
        setLoopPoints(startPosition: Tone.Time, endPosition: Tone.Time): void;
        setLoopStart(startPosition: Tone.Time): void;
        setSwing(amount: number): void;
        setSwingSubdivision(subdivision: string): void;
        setTimeline(callback: Function, timeout: Tone.Time, ctx: Object): number;
        setTimeout(callback: Function, time: Tone.Time, ctx: Object): number;
        setTimeSignature(numerator: number, denominator?: number): void;
        setTransportTime(progress: Tone.Time): void;
        start(time: Tone.Time): void;
        stop(time: Tone.Time): void;
        syncSignal(signal: Tone.Signal): void;
        syncSource(source: Tone.Source, delay: Tone.Time): void;
        toTicks(time: Tone.Time): number;
        unsyncSource(source: Tone.Source): void;
    }
}

interface TransportState {}
