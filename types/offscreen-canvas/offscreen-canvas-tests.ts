// index.js
import createWorker = require('offscreen-canvas/create-worker');
import insideWorker = require('offscreen-canvas/inside-worker');

const workerUrl = document.querySelector<HTMLLinkElement>('[rel=preload][as=script]')!.href;
const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('#canvas')!;
const button: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#button')!;

const workerOne = createWorker(canvas, workerUrl, e => {
    // Messages from the worker
});

button.addEventListener('click', () => {
    workerOne.post({ message: 'update' });
});

const workerTwo = insideWorker(e => {
    if (e.data.canvas) {
        // Draw on the canvas
    } else if (e.data.message === 'move') {
        // Messages from main thread
    }
});
