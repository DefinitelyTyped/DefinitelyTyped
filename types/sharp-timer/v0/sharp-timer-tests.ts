import { Timer, Stopwatch } from 'sharp-timer';

const timer = new Timer(10);

timer.onIntervalElapsing(i => { });
timer.onIntervalElapsed(() => {
    timer.stop();
});

timer.start();
