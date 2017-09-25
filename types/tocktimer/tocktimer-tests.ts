import * as tock from 'tocktimer';

// Create a tock instance
const timer = tock({
    interval: 100,
    countdown: true,
    callback: () => {
        // Tick tock...clock is ticking
    },
    complete: () => {
        // Ding ding...time's up
    }
});

timer.lap();
timer.msToTime(Date.now());
timer.msToTimecode(Date.now());
timer.pause();
timer.reset();
timer.stop();
timer.timeToMS('12:51');
