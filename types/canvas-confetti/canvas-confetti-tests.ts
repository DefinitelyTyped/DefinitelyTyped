import confetti = require("canvas-confetti");

confetti.Promise = null;

confetti();

confetti({
    particleCount: 150,
});

confetti({
    spread: 180,
});

confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
    },
});

confetti({
    particleCount: 100,
    spread: 70,
    drift: 1,
    origin: {
        y: 0.6,
    },
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
        y: 0.6,
    },
    shapes: ["square", "circle", "square", "star"],
});

const canvas = document.createElement("canvas");
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

confetti.shapeFromPath({
    path:
        "M0 2.51004C1.39 1.80004 2.85 1.22004 4.35 0.760044C5.88 0.430044 7.43 0.230044 9 0.170044C10.55 0.230044 12.11 0.430044 13.63 0.760044C15.13 1.21004 16.6 1.80004 18 2.51004C18 5.17004 18 7.83004 18 10.49C16.58 9.77004 15.14 9.20004 13.64 8.74004C12.11 8.41004 10.55 8.21004 8.98 8.15004C7.42 8.21004 5.88 8.42004 4.35 8.75004C2.84 9.21004 1.39 9.79004 0 10.51C0 7.83004 0 5.17004 0 2.51004Z",
});

confetti.shapeFromText({ text: "🎉" });

confetti.shapeFromText({ text: "🎉", fontFamily: "Apple Color Emoji" });

confetti.shapeFromText({ text: "✷", color: "hotpink", fontFamily: "Arial" });
