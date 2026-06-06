import confetti = require("canvas-confetti");

confetti.Promise = null;

declare const matrix: DOMMatrix;
declare const bitmap: ImageBitmap;

confetti();
confetti({});
confetti({
    angle: 90,
    colors: ["#bada55"],
    decay: 0.9,
    disableForReducedMotion: true,
    drift: 0,
    flat: true,
    gravity: 1,
    origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
    },
    particleCount: 150,
    scalar: 1,
    shapes: [
        {
            type: "path",
            path: "string",
            matrix,
        },
        {
            type: "bitmap",
            bitmap,
            matrix,
        },
        "square",
        "circle",
        "star",
    ],
    spread: 180,
    startVelocity: 30,
    ticks: 200,
    zIndex: 100,
});

declare const canvas: HTMLCanvasElement;

let customConfetti = confetti.create();
customConfetti = confetti.create(canvas);
customConfetti = confetti.create(canvas, {});
customConfetti = confetti.create(canvas, {
    disableForReducedMotion: true,
    resize: true,
    useWorker: true,
});

customConfetti();
customConfetti({});
customConfetti({
    angle: 90,
    colors: ["#bada55"],
    decay: 0.9,
    disableForReducedMotion: true,
    drift: 0,
    flat: true,
    gravity: 1,
    origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
    },
    particleCount: 150,
    scalar: 1,
    shapes: [
        {
            type: "path",
            path: "string",
            matrix,
        },
        {
            type: "bitmap",
            bitmap,
            matrix,
        },
        "square",
        "circle",
        "star",
    ],
    spread: 180,
    startVelocity: 30,
    ticks: 200,
    zIndex: 100,
});

confetti.reset();

customConfetti.reset();

confetti()!.then(param => {
    param; // $ExpectType undefined
});

declare const path: string;

// @ts-ignore - Need an argument
confetti.shapeFromPath();
confetti.shapeFromPath(path);

// @ts-ignore - `pathData.path` is required
confetti.shapeFromPath({});
confetti.shapeFromPath({ path });
confetti.shapeFromPath({ path, matrix });

declare const text: string;
// @ts-ignore - Need an argument
confetti.shapeFromText();
confetti.shapeFromText(text);

// @ts-ignore - `textData.text` is required
confetti.shapeFromText({});
confetti.shapeFromText({ text });
confetti.shapeFromText({ text, scalar: 1, color: "hotpink", fontFamily: "Arial" });
