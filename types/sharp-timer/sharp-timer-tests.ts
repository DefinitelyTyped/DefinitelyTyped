import { Timer, Stopwatch, Timespan } from 'sharp-timer';
import * as s from 'sharp-timer';
import S = require('sharp-timer');

type Elapsed = SharpTimer.ElapsedEvent;

let timer = new Timer(10);
timer.toString();
timer.onIntervalElapsing(i => { });
timer.onIntervalElapsed(() => {
    timer.stop();
});

timer.start();
