import Tweezer = require('tweezer.js');

const tweezer = new Tweezer({
    start: 100,
    end: 200,
});

tweezer
    .on('tick', (foo) => { foo.toFixed(); })
    .on('done', () => {})
    .begin()
    .stop();

function testEaser(currentTime: number, beginningTime: number, changeInValue: number, duration: number) {
    return 42;
}

const tweezer2 = new Tweezer({
    start: 100,
    end: 200,
    easing: testEaser
});

const tweezer3 = new Tweezer({
    start: 100,
    end: 200,
    duration: 42
});
