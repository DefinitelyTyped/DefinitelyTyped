/**
 * howler-tests.ts
 * Created by xperiments on 02/09/14.
 */
///<reference path="howler.d.ts"/>


Howler.codecs('ogg');
Howler.iOSAutoEnable = true;
var sound = new Howl({
    urls: ['sound.mp3']
}).play();


var sound = new Howl({
    urls: ['sound.mp3', 'sound.ogg', 'sound.wav'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
        console.log('Finished!');
    }
});

var sound = new Howl({
    urls: ['sounds.mp3', 'sounds.ogg'],
    sprite: {
        blast: [0, 1000],
        laser: [2000, 3000],
        winner: [4000, 7500]
    }
});

// shoot the laser!
sound.play('laser');