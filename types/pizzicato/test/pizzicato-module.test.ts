import Pizzicato = require('pizzicato');

Pizzicato.context; // $ExpectType AudioContext
Pizzicato.masterGainNode; // $ExpectType GainNode

// Utils
Pizzicato.Util.isString('Foobar');
Pizzicato.Util.isObject('Foobar');
Pizzicato.Util.isFunction('Foobar');
Pizzicato.Util.isNumber('Foobar');
Pizzicato.Util.isArray('Foobar');
Pizzicato.Util.isInRange(1, 3, 5);
Pizzicato.Util.isBool('Foobar');
Pizzicato.Util.isOscillator('Foobar');
Pizzicato.Util.isAudioBufferSourceNode('Foobar');
Pizzicato.Util.isSound('Foobar');
Pizzicato.Util.isEffect('Foobar');
Pizzicato.Util.normalize(0.6, 2, 12);
Pizzicato.Util.getDryLevel(12);
Pizzicato.Util.getWetLevel(15);

// Volume
Pizzicato.volume = 0.7;
Pizzicato.volume = 0.3;

const myEvents = Object.create(Pizzicato.Events, {});

// Sounds
const fileSound = new Pizzicato.Sound('foo.wav');
fileSound.detached; // $ExpectType boolean
// prettier-ignore
// @ts-expect-error
fileSound.detached = false;
const fileSoundEffect = new Pizzicato.Effects.Compressor();
// prettier-ignore
// @ts-expect-error
fileSound.effects.push(fileSoundEffect);
// prettier-ignore
// @ts-expect-error
fileSound.playing = false;
// prettier-ignore
// @ts-expect-error
fileSound.loop = false;
fileSound.volume = 0.4;
// prettier-ignore
// @ts-expect-error
fileSound.frequency = 440;
fileSound.frequency; // $ExpectType null
fileSound.attack = 4;
fileSound.release = 5;
fileSound.play();
fileSound.play(2);
fileSound.play(2, 3);
fileSound.pause();
if (fileSound.playing) {
    fileSound.stop();
}
fileSound.addEffect(fileSoundEffect);
fileSound.removeEffect(fileSoundEffect);

for (const effect of fileSound.effects) {
    fileSound.removeEffect(effect);
}
fileSound.connect(new AudioNode());
fileSound.disconnect(new AudioNode());

fileSound.on('play', () => {
    console.log('playing');
});
function logFunction(this: { log: (s: string) => void }) {
    this.log('pause');
}
fileSound.on('pause', logFunction, { log: console.log });
fileSound.on('stop', () => {});
fileSound.on('end', () => {});

fileSound.off('play');
fileSound.off('pause');
fileSound.off('stop');
fileSound.off('end');

const fileSound2 = new Pizzicato.Sound({
    source: 'file',
    options: {
        path: 'foo2.wav',
        attack: 0.4,
        detached: false,
        loop: true,
        release: 2,
        volume: 0.8,
    },
});

const waveSound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        frequency: 440,
    },
});

waveSound.frequency = 532;

const cloneSound = waveSound.clone();
cloneSound.frequency = 880;

const inputSound = new Pizzicato.Sound({
    source: 'input',
});

const scriptSound = new Pizzicato.Sound({
    source: 'script',
    options: {
        audioFunction: (e: AudioProcessingEvent) => {},
    },
});

// Groups
new Pizzicato.Group();
const group = new Pizzicato.Group([inputSound, scriptSound]);
group.volume = 0.7;
// prettier-ignore
// @ts-expect-error
group.sounds[1] = cloneSound;
group.sounds.length; // $ExpectType number
// prettier-ignore
// @ts-expect-error
group.effects[0] = new Pizzicato.Effects.Compressor();
group.sounds.length; // $ExpectType number

group.play();
group.pause();
group.stop();
group.addSound(waveSound);
group.removeSound(waveSound);
group.connect(new AudioNode());
group.disconnect(new AudioNode());
group.addEffect(new Pizzicato.Effects.Delay());
group.removeEffect(new Pizzicato.Effects.HighPassFilter());

group.on('play', logFunction, { log: console.log });
group.on('pause', () => {});
group.on('stop', () => {});
group.off('play');
group.off('pause');
group.off('stop');

// Effects
const baseEffect: Pizzicato.BaseEffect = {
    connect: () => baseEffect,
    disconnect: () => baseEffect,
};

// prettier-ignore
// @ts-expect-error
waveSound.addEffect(baseEffect);

// prettier-ignore
// @ts-expect-error
group.addEffect(baseEffect);

new Pizzicato.Effects.Compressor();
new Pizzicato.Effects.Convolver({ impulse: 'impulseFile' });
new Pizzicato.Effects.Delay();
new Pizzicato.Effects.Distortion();
new Pizzicato.Effects.DubDelay();
new Pizzicato.Effects.Flanger();
new Pizzicato.Effects.HighPassFilter();
new Pizzicato.Effects.LowPassFilter();
new Pizzicato.Effects.PingPongDelay();
new Pizzicato.Effects.Quadrafuzz();
new Pizzicato.Effects.Reverb();
new Pizzicato.Effects.RingModulator();
new Pizzicato.Effects.StereoPanner();
new Pizzicato.Effects.Tremolo();

new Pizzicato.Effects.Compressor({
    threshold: 1,
    knee: 2,
    attack: 3,
    release: 4,
    ratio: 5,
    mix: 6,
});
new Pizzicato.Effects.Convolver({
    impulse: 'impulseFile',
    mix: 1,
});
new Pizzicato.Effects.Delay({
    feedback: 1,
    time: 2,
    mix: 3,
});
new Pizzicato.Effects.Distortion({
    gain: 1,
});
new Pizzicato.Effects.DubDelay({
    feedback: 1,
    time: 2,
    mix: 3,
    cutoff: 4,
});
new Pizzicato.Effects.Flanger({
    time: 1,
    speed: 2,
    depth: 3,
    feedback: 4,
    mix: 5,
});
new Pizzicato.Effects.HighPassFilter({
    frequency: 1,
    peak: 2,
});
new Pizzicato.Effects.LowPassFilter({
    frequency: 1,
    peak: 2,
});
new Pizzicato.Effects.PingPongDelay({
    feedback: 1,
    time: 2,
    mix: 3,
});
new Pizzicato.Effects.Quadrafuzz({
    lowGain: 1,
    midLowGain: 2,
    midHighGain: 3,
    highGain: 4,
});
new Pizzicato.Effects.Reverb({
    time: 1,
    decay: 2,
    reverse: true,
    mix: 4,
});
new Pizzicato.Effects.RingModulator({
    distortion: 1,
    speed: 2,
    mix: 3,
});
new Pizzicato.Effects.StereoPanner({
    pan: 1,
});
new Pizzicato.Effects.Tremolo({
    speed: 1,
    depth: 2,
    mix: 3,
});
