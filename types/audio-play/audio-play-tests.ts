import audioPlay = require("audio-play");

const buffer = new AudioBuffer({length: 2, sampleRate: 22000});
const thisSound = audioPlay(buffer, { autoplay: true }, () => console.log('stopped!'));
thisSound.pause();
thisSound.play();
