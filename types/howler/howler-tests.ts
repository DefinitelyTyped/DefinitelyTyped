import { Howl, Howler } from 'howler';

// Set global volume
Howler.volume(0.8);

const sound1 = new Howl({
    src: ['sound.mp3'],
});

sound1.play();

const sound2 = new Howl({
    src: ['sound.webm', 'sound.mp3', 'sound.wav'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function () {
        console.log('Finished!');
    },
});

const sound3 = new Howl({
    src: ['sounds.webm', 'sounds.mp3'],
    sprite: {
        blast: [0, 1000],
        laser: [2000, 3000],
        winner: [4000, 7500],
    },
});

// Shoot the laser!
sound3.play('laser');

const sound4 = new Howl({
    src: ['sound.webm', 'sound.mp3'],
});

// Clear listener after first call.
sound4.once('load', function () {
    sound4.play();
});

// Fires when the sound finishes playing.
sound4.on('end', function () {
    console.log('Finished!');
});

const sound5 = new Howl({
    src: ['sound.webm', 'sound.mp3'],
});

// Play returns a unique Sound ID that can be passed
// into any method on Howl to control that specific sound.
const id1 = sound5.play();
const id2 = sound5.play();

// Fade out the first sound and speed up the second.
sound5.fade(1, 0, 1000, id1);
sound5.rate(1.5, id2);

// Get/set the position of playback for a sound
sound5.seek();
sound5.seek(5);

// Get/set the position of playback for a sound by id
sound5.seek(id1);
sound5.seek(id1, 5);

// $ExpectType Howl
sound5.off('play', 2);
