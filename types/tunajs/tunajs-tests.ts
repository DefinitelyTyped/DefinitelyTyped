import Tuna = require("tunajs");
import type { TunaAudioNode } from "tunajs";

const context = new AudioContext();
const tuna = new Tuna(context);
const tunaWithoutContext = new Tuna();

const chorus = new tuna.Chorus({
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: false,
});

// @ts-expect-error TunaAudioNode is not a concrete value, but a type
const TunaAudioNode = Tuna.TunaAudioNode;
type TunaAudioNode2 = Tuna.TunaAudioNode;

const input = context.createGain();
const output = context.createGain();

input.connect(chorus);
chorus.connect(output);

const delay = new tuna.Delay({
    feedback: 0.45,
    delayTime: 100,
    wetLevel: 0.5,
    dryLevel: 1,
    cutoff: 20000,
    bypass: false,
});

const phaser = new tuna.Phaser({
    rate: 0.1,
    depth: 0.6,
    feedback: 0.7,
    stereoPhase: 40,
    baseModulationFrequency: 700,
    bypass: false,
});

const overdrive = new tuna.Overdrive({
    outputGain: -9.154,
    drive: 0.197,
    curveAmount: 0.979,
    algorithmIndex: 0,
    bypass: false,
});

const compressor = new tuna.Compressor({
    threshold: -20,
    makeupGain: 1,
    attack: 1,
    release: 250,
    ratio: 4,
    knee: 5,
    automakeup: false,
    bypass: false,
});

const convolver = new tuna.Convolver({
    highCut: 22050,
    lowCut: 20,
    dryLevel: 1,
    wetLevel: 1,
    level: 1,
    impulse: "impulses/impulse_rev.wav",
    bypass: false,
});

const filter = new tuna.Filter({
    frequency: 800,
    Q: 1,
    gain: 0,
    filterType: "lowpass",
    bypass: false,
});

const cabinet = new tuna.Cabinet({
    makeupGain: 1,
    impulsePath: "impulses/impulse_guitar.wav",
    bypass: false,
});

const tremolo = new tuna.Tremolo({
    intensity: 0.3,
    rate: 5,
    stereoPhase: 0,
    bypass: false,
});

const wahwah = new tuna.WahWah({
    automode: true,
    baseFrequency: 0.153,
    excursionOctaves: 3.3,
    sweep: 0.35,
    resonance: 19,
    sensitivity: -0.5,
    bypass: false,
});

const bitcrusher = new tuna.Bitcrusher({
    bits: 4,
    normfreq: 0.1,
    bufferSize: 4096,
});

const moog = new tuna.MoogFilter({
    cutoff: 0.065,
    resonance: 3.5,
    bufferSize: 4096,
});

const pingPongDelay = new tuna.PingPongDelay({
    wetLevel: 0.5,
    feedback: 0.3,
    delayTimeLeft: 200,
    delayTimeRight: 400,
});

const panner = new tuna.Panner({
    pan: 0,
});

const gain = new tuna.Gain({
    gain: 1,
});

const envelopeFollower = new tuna.EnvelopeFollower({
    target: { foo: 1, bar: "asdf" },
    callback: (target, envelope) => {
        target.foo; // $ExpectType number
        target.bar; // $ExpectType string
        envelope; // $ExpectType number
    },
});

const lfo = new tuna.LFO({
    target: { date: new Date(), bar: "asdf" },
    callback: (target, value) => {
        target.date; // $ExpectType Date
        target.bar; // $ExpectType string
        value; // $ExpectType number
    },
});

// Constructors must allow partial or no properties as argument
new tuna.Bitcrusher();
new tuna.Bitcrusher({});
new tuna.Cabinet();
new tuna.Cabinet({});
new tuna.Chorus();
new tuna.Chorus({});
new tuna.Compressor();
new tuna.Compressor({});
new tuna.Convolver();
new tuna.Convolver({});
new tuna.Delay();
new tuna.Delay({});
new tuna.EnvelopeFollower();
new tuna.EnvelopeFollower({});
new tuna.Filter();
new tuna.Filter({});
new tuna.Gain();
new tuna.Gain({});
new tuna.LFO();
new tuna.LFO({});
new tuna.MoogFilter();
new tuna.MoogFilter({});
new tuna.Overdrive();
new tuna.Overdrive({});
new tuna.Panner();
new tuna.Panner({});
new tuna.Phaser();
new tuna.Phaser({});
new tuna.PingPongDelay();
new tuna.PingPongDelay({});
new tuna.Tremolo();
new tuna.Tremolo({});
new tuna.WahWah();
new tuna.WahWah({});

// instance.getDefaults()  must return a specific interface
bitcrusher.getDefaults(); // $ExpectType BitcrusherProperties
cabinet.getDefaults(); // $ExpectType CabinetProperties
chorus.getDefaults(); // $ExpectType ChorusProperties
compressor.getDefaults(); // $ExpectType CompressorProperties
convolver.getDefaults(); // $ExpectType ConvolverProperties
delay.getDefaults(); // $ExpectType DelayProperties
envelopeFollower.getDefaults(); // $ExpectType EnvelopeFollowerProperties
filter.getDefaults(); // $ExpectType FilterProperties
gain.getDefaults(); // $ExpectType GainProperties
lfo.getDefaults(); // $ExpectType LFOProperties
moog.getDefaults(); // $ExpectType MoogFilterProperties
overdrive.getDefaults(); // $ExpectType OverdriveProperties
panner.getDefaults(); // $ExpectType PannerProperties
phaser.getDefaults(); // $ExpectType PhaserProperties
pingPongDelay.getDefaults(); // $ExpectType PingPongDelayProperties
tremolo.getDefaults(); // $ExpectType TremoloProperties
wahwah.getDefaults(); // $ExpectType WahWahProperties

// instance.automate() must only accept property names that actually exist
const stringKey = "invalidKey";
// @ts-expect-error
bitcrusher.automate(stringKey, 0);
// @ts-expect-error
cabinet.automate(stringKey, 0);
// @ts-expect-error
chorus.automate(stringKey, 0);
// @ts-expect-error
compressor.automate(stringKey, 0);
// @ts-expect-error
convolver.automate(stringKey, 0);
// @ts-expect-error
delay.automate(stringKey, 0);
// @ts-expect-error
envelopeFollower.automate(stringKey, 0);
// @ts-expect-error
filter.automate(stringKey, 0);
// @ts-expect-error
gain.automate(stringKey, 0);
// @ts-expect-error
lfo.automate(stringKey, 0);
// @ts-expect-error
moog.automate(stringKey, 0);
// @ts-expect-error
overdrive.automate(stringKey, 0);
// @ts-expect-error
panner.automate(stringKey, 0);
// @ts-expect-error
phaser.automate(stringKey, 0);
// @ts-expect-error
pingPongDelay.automate(stringKey, 0);
// @ts-expect-error
tremolo.automate(stringKey, 0);
// @ts-expect-error
wahwah.automate(stringKey, 0);

// Allow using AudioNode and TunaAudioNode interchangeably
const node = new AudioNode();
const tunaNode = new tuna.Gain();
const mixedNode = node as AudioNode | TunaAudioNode;

node.connect(node);
node.connect(tunaNode);
node.connect(mixedNode);
tunaNode.connect(node);
tunaNode.connect(tunaNode);
tunaNode.connect(mixedNode);
mixedNode.connect(node);
mixedNode.connect(tunaNode);
mixedNode.connect(mixedNode);
