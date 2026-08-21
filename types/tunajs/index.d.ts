/// <reference lib="dom" />

// This library monkey-patches globals
declare global {
    interface AudioNode {
        connect<T extends AudioNode | Tuna.TunaAudioNode = AudioNode | Tuna.TunaAudioNode>(
            destinationNode: T,
            output?: number,
            input?: number,
        ): T;
        // This overload is needed to allow using AudioNode and TunaAudioNode
        // interchangeably.
        connect(
            destinationNode: AudioNode | Tuna.TunaAudioNode,
            output?: number,
            input?: number,
        ): AudioNode | Tuna.TunaAudioNode;
    }
}

export as namespace Tuna;
export = Tuna;

declare class Tuna {
    /**
     * Creates a new Tuna instance.
     * @param context AudioContext to use.
     *   If omitted, Tuna will create a new AudioContext.
     */
    constructor(context?: AudioContext);

    Bitcrusher: typeof Bitcrusher;
    Cabinet: typeof Cabinet;
    Chorus: typeof Chorus;
    Compressor: typeof Compressor;
    Convolver: typeof Convolver;
    Delay: typeof Delay;
    EnvelopeFollower: typeof EnvelopeFollower;
    Filter: typeof Filter;
    Gain: typeof Gain;
    LFO: typeof LFO;
    MoogFilter: typeof MoogFilter;
    Overdrive: typeof Overdrive;
    Panner: typeof Panner;
    Phaser: typeof Phaser;
    PingPongDelay: typeof PingPongDelay;
    Tremolo: typeof Tremolo;
    WahWah: typeof WahWah;
}

declare namespace Tuna {
    interface TunaAudioNode {
        readonly name: string;
        /**
         * When set to true, this node is deactivated
         * (using {@linkcode activate()})
         */
        bypass: boolean;

        readonly input: GainNode;
        readonly output: AudioNode;

        activate(doActivate: boolean): void;
        connect(target: AudioNode | TunaAudioNode): void;
        disconnect(target: AudioNode | TunaAudioNode): void;
        connectInOrder(nodeArray: ArrayLike<AudioNode | TunaAudioNode>): void;
        getDefaults(): object;
        automate(property: string, value: number, duration?: number, startTime?: number): void;
    }
}

declare abstract class Super implements Tuna.TunaAudioNode {
    abstract readonly name: string;
    bypass: boolean;

    abstract readonly input: GainNode;
    abstract readonly output: AudioNode;

    activate(doActivate: boolean): void;
    connect(target: AudioNode | Tuna.TunaAudioNode): void;
    disconnect(target: AudioNode | Tuna.TunaAudioNode): void;
    connectInOrder(nodeArray: ArrayLike<AudioNode | Tuna.TunaAudioNode>): void;
    abstract getDefaults(): object;
    abstract automate(property: string, value: number, duration?: number, startTime?: number): void;
}

declare class Bitcrusher extends Super {
    readonly name: "Bitcrusher";
    constructor(properties?: Partial<BitcrusherProperties>);
    getDefaults(): BitcrusherProperties;
    automate(property: keyof BitcrusherProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly processor: ScriptProcessorNode;
    readonly output: GainNode;

    /** Getter/setter for {@linkcode processor this.processor.bits} */
    bits: number;
    bufferSize: number;
    /** Getter/setter for {@linkcode processor this.processor.normfreq} */
    normfreq: number;
}

interface BitcrusherProperties {
    /** Type: integer, range: 1 - 16, default: 4 */
    bits: number;
    /** Type: integer, range: 256 - 16384, default: 4096 */
    bufferSize: number;
    /** Default: false */
    bypass: boolean;
    /** Type: float, range: 0.0001 - 1.0, default: 0.1 */
    normfreq: number;
}

declare class Cabinet extends Super {
    readonly name: "Cabinet";
    constructor(
        properties?: Partial<
            CabinetProperties & {
                /**
                 * Impulse path (URL) to use when instantiating the
                 * {@linkcode convolver}.
                 * Default: `"../impulses/impulse_guitar.wav"`
                 */
                impulsePath: string;
            }
        >,
    );
    getDefaults(): CabinetProperties;
    automate(property: keyof CabinetProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly convolver: Convolver;
    readonly makeupNode: GainNode;
    readonly output: GainNode;

    /**
     * Getter/setter for {@linkcode makeupNode this.makeupNode.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    makeupGain: number;

    newConvolver(impulsePath?: string): Convolver;
}

interface CabinetProperties {
    /** Type: float, range: 0 - 20, default: 1 */
    makeupGain: number;
    /** Default: false */
    bypass: boolean;
}

declare class Chorus extends Super {
    readonly name: "Chorus";
    constructor(properties?: Partial<ChorusProperties>);
    getDefaults(): ChorusProperties;
    automate(property: keyof ChorusProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly attenuator: GainNode;
    readonly splitter: ChannelSplitterNode;
    readonly delayL: DelayNode;
    readonly delayR: DelayNode;
    readonly feedbackGainNodeLR: GainNode;
    readonly feedbackGainNodeRL: GainNode;
    readonly merger: ChannelMergerNode;
    readonly output: GainNode;

    readonly lfoL: LFO<(typeof this)["delayL"]["delayTime"]>;
    readonly lfoR: LFO<(typeof this)["delayR"]["delayTime"]>;

    delay: number;
    depth: number;
    feedback: number;
    rate: number;
}

interface ChorusProperties {
    /** Type: float, range: 0 - 0.95, default: 0.4 */
    feedback: number;
    /** Type: float, range: 0 - 1, default: 0.0045 */
    delay: number;
    /** Type: float, range: 0 - 1, default: 0.7 */
    depth: number;
    /** Type: float, range: 0 - 8, default: 1.5 */
    rate: number;
    /** Default: false */
    bypass: boolean;
}

declare class Compressor extends Super {
    name: "Compressor";
    constructor(properties?: Partial<CompressorProperties>);
    getDefaults(): CompressorProperties;
    automate(property: keyof CompressorProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly compNode: DynamicsCompressorNode;
    readonly activateNode: DynamicsCompressorNode;
    readonly makeupNode: GainNode;
    readonly output: GainNode;

    /**
     * Getter/setter for {@linkcode compNode this.compNode.knee}
     * (Setter sets (value / 1000) as actual value)
     */
    attack: number;
    /**
     * If true, {@linkcode makeupGain} is automatically set using
     * {@linkcode computeMakeup()} when {@linkcode threshold},
     * {@linkcode ratio}, or {@linkcode knee} is set
     */
    automakeup: number;
    /** Getter/setter for {@linkcode compNode this.compNode.knee} */
    knee: number;
    /**
     * Getter/setter for {@linkcode makeupNode this.makeupNode.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    makeupGain: number;
    /** Getter/setter for {@linkcode compNode this.compNode.ratio} */
    ratio: number;
    /** Getter/setter for {@linkcode compNode this.compNode.release} */
    release: number;
    /** Getter/setter for {@linkcode compNode this.compNode.threshold} */
    threshold: number;

    computeMakeup(): number;
}

interface CompressorProperties {
    /** Type: float, range: -60 - 0, default: -20 */
    threshold: number;
    /** Type: float, range: 10 - 2000, default: 250 */
    release: number;
    /** Type: float, range: 1 - 100, default: 1 */
    makeupGain: number;
    /** Type: float, range: 0 - 1000, default: 1 */
    attack: number;
    /** Type: float, range: 1 - 50, default: 4 */
    ratio: number;
    /** Type; float, range: 0 - 40, default: 5 */
    knee: number;
    /** Default: false */
    automakeup: boolean;
    /** Default: false */
    bypass: boolean;
}

declare class Convolver extends Super {
    readonly name: "Convolver";
    constructor(
        properties?: Partial<
            ConvolverProperties & {
                /** Impulse path (URL). Default: `"../impulses/ir_rev_short.wav"` */
                impulse: string;
            }
        >,
    );
    getDefaults(): ConvolverProperties;
    automate(property: keyof ConvolverProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly convolver: ConvolverNode;
    readonly dry: GainNode;
    readonly filterLow: BiquadFilterNode;
    readonly filterHigh: BiquadFilterNode;
    readonly wet: GainNode;
    readonly output: GainNode;

    /**
     * Getter/setter for {@linkcode convolver this.convolver.buffer}
     * (Setter accepts a impulse path (URL), loading it asynchronously as an
     * ArrayBuffer)
     */
    get buffer(): ArrayBuffer;
    set buffer(impulse: string);

    /**
     * Getter/setter for {@linkcode dry this.dry.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    dryLevel: number;
    /**
     * Getter/setter for {@linkcode filterHigh this.filterHigh.frequency}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    highCut: number;
    /**
     * Getter/setter for {@linkcode output this.output.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    level: number;
    /**
     * Getter/setter for {@linkcode filterLow this.filterLow.frequency}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    lowCut: number;
    /**
     * Getter/setter for {@linkcode wet this.wet.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    wetLevel: number;
}

interface ConvolverProperties {
    /** Type: float, range: 20 - 22050, default: 22050 */
    highCut: number;
    /** Type: float, range: 20 - 22050, default: 20 */
    lowCut: number;
    /** Type: float, range: 0 - 1, default: 1 */
    dryLevel: number;
    /** Type: float, range: 0 - 1, default: 1 */
    wetLevel: number;
    /** Type: float, range: 0 - 1, default: 1 */
    level: number;
    /** Default: false */
    bypass: boolean;
}

declare class Delay extends Super {
    readonly name: "Delay";
    constructor(properties?: Partial<DelayProperties>);
    getDefaults(): DelayProperties;
    automate(property: keyof DelayProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly dry: GainNode;
    readonly wet: GainNode;
    readonly filter: BiquadFilterNode;
    readonly delay: DelayNode;
    readonly feedbackNode: GainNode;
    readonly output: GainNode;

    /**
     * Getter/setter for {@linkcode delay this.delay.delayTime}
     * (Setter sets (value / 1000) as actual value)
     */
    delayTime: number;
    /**
     * Getter/setter for {@linkcode wet this.wet.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    wetLevel: number;
    /**
     * Getter/setter for {@linkcode dry this.dry.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    dryLevel: number;
    /**
     * Getter/setter for {@linkcode feedbackNode this.feedbackNode.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    feedback: number;
    /**
     * Getter/setter for {@linkcode filter this.filter.frequency}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    cutoff: number;
}

interface DelayProperties {
    /** Type: float, range: 20 - 1000, default: 100 */
    delayTime: number;
    /** Type: float, range: 0 - 0.9, default: 0.45 */
    feedback: number;
    /** Type: float, range: 20 - 20000, default: 20000 */
    cutoff: number;
    /** Type: float, range: 0 - 1, default: 0.5 */
    wetLevel: number;
    /** Type: float, range: 0 - 1, default: 1 */
    dryLevel: number;
    /** Default: false */
    bypass: boolean;
}

declare class EnvelopeFollower<T extends object = object> extends Super {
    readonly name: "EnvelopeFollower";
    constructor(
        properties?: Partial<
            EnvelopeFollowerProperties & {
                /**
                 * Target object to use as the first argument for
                 * {@linkcode callback}
                 */
                target: T;
                callback: EnvelopeFollowerCallback<T>;
            }
        >,
    );
    getDefaults(): EnvelopeFollowerProperties;
    automate(property: keyof EnvelopeFollowerProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly jsNode: ScriptProcessorNode;
    readonly output: ScriptProcessorNode;

    /** Value: 256 */
    readonly buffersize: number;
    /** Value: 0 */
    readonly envelope: number;
    /** Value: 44100 */
    readonly sampleRate: number;
    attackTime: number;
    releaseTime: number;
    callback: EnvelopeFollowerCallback<T>;
    target: T;
    /**
     * Returns the {@linkcode compute()} function bound to the given
     * {@linkcode instance}.
     */
    returnCompute(instance: this): (event: AudioProcessingEvent) => void;
    /**
     * Invokes {@linkcode callback} with the stored {@linkcode target} as the
     * first argument, and an envelope value (number) computed using the given
     * {@linkcode event} as the second argument.
     */
    compute(event: AudioProcessingEvent): void;
}

interface EnvelopeFollowerProperties {
    /** Type: float, range: 0 - 0.5, default: 0.003 */
    attackTime: number;
    /** Type: float, range: 0 - 0.5, default: 0.05 */
    releaseTime: number;
    /** Default: false */
    bypass: boolean;
}

type EnvelopeFollowerCallback<T> = (target: T, envelope: number) => void;

declare class Filter extends Super {
    readonly name: "Filter";
    constructor(properties?: Partial<FilterProperties>);
    getDefaults(): FilterProperties;
    automate(property: keyof FilterProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly filter: BiquadFilterNode;
    readonly output: GainNode;

    /** Getter/setter for {@linkcode filter this.filter.type} */
    filterType: BiquadFilterNode["type"];
    /** Getter/setter for {@linkcode filter this.filter.Q} */
    Q: number;
    /**
     * Getter/setter for {@linkcode filter this.filter.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    gain: number;
    /**
     * Getter/setter for {@linkcode filter this.filter.frequency}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    frequency: number;
}

interface FilterProperties {
    /** Type: float, range: 20 - 22050, default: 800 */
    frequency: number;
    /** Type: float, range: 0.001 - 100, default: 1 */
    Q: number;
    /** Type: float, range: -40 - 40, default: 0 */
    gain: number;
    /** default: false */
    bypass: boolean;
    /** Default: `"lowpass"` */
    filterType: BiquadFilterNode["type"];
}

declare class Gain extends Super {
    readonly name: "Gain";
    constructor(properties?: Partial<GainProperties>);
    getDefaults(): GainProperties;
    automate(property: keyof GainProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly gainNode: GainNode;
    readonly output: GainNode;

    /**
     * Getter/setter for {@linkcode gainNode this.gainNode.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    gain: number;
}

interface GainProperties {
    /** Default: false */
    bypass: boolean;
    /** Type: float, default: 1 */
    gain: number;
}

declare class LFO<T extends object = object> extends Super {
    readonly name: "LFO";
    constructor(
        properties?: Partial<
            LFOProperties & {
                /**
                 * Target object to use as the first argument for the LFO
                 * `callback`
                 */
                target: T;
                /**
                 * Callback to invoke when the `onaudioprocess` event handler
                 * for {@linkcode output} is fired
                 */
                callback: LFOCallback<T>;
            }
        >,
    );
    getDefaults(): LFOProperties;
    automate(property: keyof LFOProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly output: ScriptProcessorNode;
    readonly activateNode: AudioContext["destination"];

    /** Value: 256 */
    readonly bufferSize: number;
    /** Value: 44100 */
    readonly sampleRate: number;
    frequency: number;
    offset: number;
    oscillation: number;
    phase: number;
    target: T;
    /**
     * Returns a new callback that invokes the given {@linkcode callback} with
     * the {@linkcode target} as the first argument, and the value at the
     * current {@linkcode phase} as the second argument.
     */
    callback(callback: LFOCallback<T>): (event: AudioProcessingEvent) => void;
}

interface LFOProperties {
    /** Type: float, range: 0 - 20, default: 1 */
    frequency: number;
    /** Type: float, range: 0 - 22049, default: 0.85 */
    offset: number;
    /** Type: float, range: -22050 - 22050, default: 0.3 */
    oscillation: number;
    /** Type: float, range: 0 - 2 * PI, default: 0 */
    phase: number;
    /** Default: false */
    bypass: boolean;
}

type LFOCallback<T> = (target: T, value: number) => void;

declare class MoogFilter extends Super {
    readonly name: "MoogFilter";
    constructor(properties?: Partial<MoogFilterProperties>);
    getDefaults(): MoogFilterProperties;
    automate(property: keyof MoogFilterProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly processor: ScriptProcessorNode;
    readonly output: GainNode;

    readonly bufferSize: number;
    /** Getter/setter for {@linkcode processor this.processor.cutoff} */
    cutoff: number;
    /** Getter/setter for {@linkcode processor this.processor.resonance} */
    resonance: number;
}

interface MoogFilterProperties {
    /** Type: integer, range: 256 - 16384, default: 4096 */
    bufferSize: number;
    /** Default: false */
    bypass: boolean;
    /** Type: float, range: 0.0001 - 1, default: 0.065 */
    cutoff: number;
    /** Type: float, range: 0 - 4, default: 3.5 */
    resonance: number;
}

declare class Overdrive extends Super {
    readonly name: "Overdrive";
    constructor(properties?: Partial<OverdriveProperties>);
    getDefaults(): OverdriveProperties;
    automate(property: keyof OverdriveProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly inputDrive: GainNode;
    readonly waveshaper: WaveShaperNode;
    readonly outputDrive: GainNode;
    readonly output: GainNode;

    /** Value: 8192 */
    readonly k_nSamples: number;
    readonly ws_table: Float32Array;
    /** Getter/setter for {@linkcode inputDrive this.inputDrive.gain} */
    drive: number;
    curveAmount: number;
    /**
     * Getter/setter for {@linkcode outputDrive this.outputDrive.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    outputGain: number;
    algorithmIndex: OverdriveAlgorithmIndex;

    readonly waveshaperAlgorithms: readonly OverdriveWaveshaperCallback[];
}

interface OverdriveProperties {
    /** Type: float, range: 0 - 1, default: 0.197 */
    drive: number;
    /** Type: float, range: -46 - 0, default: -0.154 */
    outputGain: number;
    /** Type: float, range: 0 - 1, default: 0.979 */
    curveAmount: number;
    /** Type: integer, range: 0 - 5, default: 0 */
    algorithmIndex: OverdriveAlgorithmIndex;
    /** Default: false */
    bypass: boolean;
}

type OverdriveAlgorithmIndex = 0 | 1 | 2 | 3 | 4 | 5;

type OverdriveWaveshaperCallback = (amount: number, n_samples: number, ws_table: Float32Array) => void;

declare class Panner extends Super {
    readonly name: "Panner";
    constructor(properties?: Partial<PannerProperties>);
    getDefaults(): PannerProperties;
    automate(property: keyof PannerProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly panner: StereoPannerNode;
    readonly output: GainNode;

    /** Getter/setter for {@linkcode panner this.panner.pan} */
    pan: number;
}

interface PannerProperties {
    /** Default: false */
    bypass: boolean;
    /** Type: float, range: -1 - 1, default: 0 */
    pan: number;
}

declare class Phaser extends Super {
    readonly name: "Phaser";
    constructor(properties?: Partial<PhaserProperties>);
    getDefaults(): PhaserProperties;
    automate(property: keyof PhaserProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly splitter: ChannelSplitterNode;
    readonly activateNode: ChannelSplitterNode;
    readonly filtersL: readonly BiquadFilterNode[];
    readonly filtersR: readonly BiquadFilterNode[];
    readonly feedbackGainNodeL: GainNode;
    readonly feedbackGainNodeR: GainNode;
    readonly merger: ChannelMergerNode;
    readonly filteredSignal: GainNode;
    readonly output: GainNode;
    readonly lfoL: LFO<typeof this.filtersL>;
    readonly lfoR: LFO<typeof this.filtersR>;

    /** Value: 4 */
    readonly stage: number;
    depth: number;
    rate: number;
    baseModulationFrequency: number;
    feedback: number;
    stereoPhase: number;

    callback(filters: readonly BiquadFilterNode[], value: number): void;
}

interface PhaserProperties {
    /** Type: float, range: 0 - 8, default: 0.1 */
    rate: number;
    /** Type: float, range: 0 - 1, default: 0.6 */
    depth: number;
    /** Type: float, range: 0 - 1, default: 0.7 */
    feedback: number;
    /** Type: float, range: 0 - 180, default: 40 */
    stereoPhase: number;
    /** Type: float, range: 500 - 1500, default: 700 */
    baseModulationFrequency: number;
    /** Default: false */
    bypass: boolean;
}

declare class PingPongDelay extends Super {
    readonly name: "PingPongDelay";
    constructor(properties?: Partial<PingPongDelayProperties>);
    getDefaults(): PingPongDelayProperties;
    automate(property: keyof PingPongDelayProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly wet: GainNode;
    readonly stereoToMonoMix: GainNode;
    readonly feedbackLevel: GainNode;
    readonly output: GainNode;
    readonly delayLeft: DelayNode;
    readonly delayRight: DelayNode;
    readonly activateNode: GainNode;
    readonly splitter: ChannelSplitterNode;
    readonly merger: ChannelMergerNode;

    delayTimeLeft: number;
    delayTimeRight: number;
    /**
     * Getter/setter for {@linkcode wet this.wet.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    wetLevel: number;
    /**
     * Getter/setter for {@linkcode feedbackLevel this.feedbackLevel.gain}
     * (Setter sets given value as target, starting at current time with
     * `timeConstant` = 0.01)
     */
    feedback: number;
}

interface PingPongDelayProperties {
    /** Type: integer, range: 1 - 10000, default: 200 */
    delayTimeLeft: number;
    /** Type: integer, range: 1 - 10000, default: 400 */
    delayTimeRight: number;
    /** Type: float, range: 0 - 1, default: 0.3 */
    feedback: number;
    /** Type: float, range: 0 - 1, default: 0.5 */
    wetLevel: number;
    /** Default: false */
    bypass: boolean;
}

declare class Tremolo extends Super {
    readonly name: "Tremolo";
    constructor(properties?: Partial<TremoloProperties>);
    getDefaults(): TremoloProperties;
    automate(property: keyof TremoloProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly splitter: ChannelSplitterNode;
    readonly amplitudeL: GainNode;
    readonly amplitudeR: GainNode;
    readonly merger: ChannelMergerNode;
    readonly output: GainNode;
    readonly lfoL: LFO<typeof this.amplitudeL.gain>;
    readonly lfoR: LFO<typeof this.amplitudeR.gain>;

    intensity: number;
    rate: number;
    stereoPhase: number;
}

interface TremoloProperties {
    /** Type: float, range: 0 - 1, default: 0.3 */
    intensity: number;
    /** Type: float, range: 0 - 180, default: 0 */
    stereoPhase: number;
    /** Type: float, range: 0.1 - 11, default: 5 */
    rate: number;
    /** Default: false */
    bypass: boolean;
}

declare class WahWah extends Super {
    readonly name: "WahWah";
    constructor(properties?: Partial<WahWahProperties>);
    getDefaults(): WahWahProperties;
    automate(property: keyof WahWahProperties, value: number, duration?: number, startTime?: number): void;

    readonly input: GainNode;
    readonly activateNode: GainNode;
    readonly envelopeFollower: EnvelopeFollower<this>;
    readonly filterBp: BiquadFilterNode;
    readonly filterPeaking: BiquadFilterNode;
    readonly output: GainNode;

    automode: boolean;
    sweep: number;
    baseFrequency: number;
    excursionOctaves: number;
    sensitivity: number;
    resonance: number;

    filterFreqTimeout: number;
    setFilterFreq(): void;
    init(): void;
}

interface WahWahProperties {
    /** Default: false */
    automode: boolean;
    /** Type: float, range: 0 - 1, default: 0.153 */
    baseFrequency: number;
    /** Type: float, range: 1 - 6, default: 3.3 */
    excursionOctaves: number;
    /** Type: float, range: 0 - 1, default: 0.35 */
    sweep: number;
    /** Type: float, range: 1 - 100, default: 19 */
    resonance: number;
    /** Type: float, range: -1 - 1, default: -0.5 */
    sensitivity: number;
    /** Default: false */
    bypass: boolean;
}
