import pauseMe = require("pause-me");

const myTimeout: pauseMe.PausableTimeout = pauseMe(() => {}, 5000);
myTimeout.pause();
myTimeout.resume();
myTimeout.stop();
myTimeout.start();
if (myTimeout.timer() === null) {
    // myTimeout is not running
}
const myInterval = pauseMe(() => {}, 5000, true);
