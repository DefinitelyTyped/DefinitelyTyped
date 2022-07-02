import canAutoPlay = require('can-autoplay');

canAutoPlay
    .video({ timeout: 100, muted: true })
    .then(({ result, error }) => {
        if (result) {
            // Can autoplay
        } else {
            // Can not autoplay
        }
    });

canAutoPlay
    .video()
    .then(({ result, error }) => {
        if (result) {
            // Can autoplay
        } else {
            // Can not autoplay
        }
    });
