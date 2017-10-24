import { Timer, Stopwatch, Timespan, millisPerSecond } from 'sharp-timer';

const millisecondsPerSecond = millisPerSecond;

// timer test
const timer = new Timer(10);
timer.toString();
timer.onIntervalElapsing(i => { });
timer.onIntervalElapsed(() => {
    timer.stop();
});

timer.start();

// stopwatch test
const stopwatch = Stopwatch.startNew();

const intervalId = setInterval(() => { }, 10);

setTimeout(() => {
    clearInterval(intervalId);
    stopwatch.dispose();
}, 100);

// timespan test
const {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
} = Timespan.fromDays(2);
