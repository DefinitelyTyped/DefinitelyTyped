import canAutoPlay = require("can-autoplay");

function logNull(error: null): void {}

function logError(error: Error): void {}

canAutoPlay.video({ timeout: 100, muted: true }).then(({ result, error }) => {
    if (result) {
        // Can autoplay
        logNull(error);
    } else {
        // Can not autoplay
        logError(error);
    }
});

canAutoPlay.video().then(({ result, error }) => {
    if (result) {
        // Can autoplay
        logNull(error);
    } else {
        // Can not autoplay
        logError(error);
    }
});
