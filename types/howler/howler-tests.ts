import "howler";

let sound = new Howl({
    src: ['sound.mp3']
});

sound.play();

sound = new Howl({
    src: ['sound.webm', 'sound.mp3', 'sound.wav'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: () => {
        console.log('Finished!');
    }
});

sound = new Howl({
    src: ['sounds.webm', 'sounds.mp3'],
    sprite: {
        blast: [0, 1000],
        laser: [2000, 3000],
        winner: [4000, 7500]
    }
});

// Shoot the laser!
sound.play('laser');

sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
});

// Clear listener after first call.
sound.once('load', () => {
    sound.play();
});

// Fires when the sound finishes playing.
sound.on('end', () => {
    console.log('Finished!');
});

sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
});

// Play returns a uniqe Sound ID that can be passed
// into any method on Howl to control that specific sound.
let id1 = sound.play();
let id2 = sound.play();

// Fade out the first sound and speed up the second.
sound.fade(1, 0, 1000, id1);
sound.rate(1.5, id2);

// Change position of sound
sound.pos(10, 20, 30, id1);
