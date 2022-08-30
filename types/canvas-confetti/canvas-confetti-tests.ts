import confetti = require("canvas-confetti");

confetti.Promise = null;

confetti();

confetti({
    particleCount: 150
});

confetti({
    spread: 180
});

confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
    }
});

confetti({
    particleCount: 100,
    spread: 70,
    drift: 1,
    origin: {
        y: 0.6
    }
});

function r(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

confetti({
    angle: r(55, 125),
    spread: r(50, 70),
    particleCount: r(50, 100),
    drift: 0,
    origin: {
        y: 0.6
    },
    shapes: ['square', 'circle', 'square']
});

const canvas = document.createElement('canvas');
const myConfetti = confetti.create(canvas);

myConfetti();

confetti.reset();

myConfetti.reset();

myConfetti({
    particleCount: 150,
});

confetti()!.then(() => {
    // ready
});
confetti()!.then(param => {
    param; // $ExpectType undefined
});

confetti.create(undefined, undefined);
