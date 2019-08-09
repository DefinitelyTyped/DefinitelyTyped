import PseudoAudioParam = require('pseudo-audio-param');
const p = new PseudoAudioParam(1);
const v: number = p.getValueAtTime(0.1);

const ctx = new AudioContext();
const gain = new GainNode(ctx);
p.applyTo(gain.gain, false);

p.setValueAtTime(0, 1);
