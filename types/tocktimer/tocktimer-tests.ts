import tock = require('tocktimer');

let timer: tock.Tock;

let opts: tock.TockOptions;

// Opts that conform to spec
opts = {
    interval: 100,
    countdown: true,
    callback: () => {
        // Tick tock...clock is ticking
    },
    complete: () => {
        // Ding ding...time's up
    }
};

// Create a tock instance
timer = tock();

timer.lap();
timer.msToTime(Date.now());
timer.msToTimecode(Date.now());
timer.pause();
timer.reset();
timer.stop();
timer.timeToMS('12:51');
