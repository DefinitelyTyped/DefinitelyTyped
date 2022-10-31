import fps = require("fps");

const ticker = fps();

const tickerWithOptions = fps({ decay: 1 });

// @ts-expect-error
const tickerWithInvalidOptions = fps({ dey: 1 });

// $ExpectType void
ticker.tick();

// $ExpectType void
tickerWithOptions.tick();

// $ExpectType void
ticker.on('data', framerate => {
    // $ExpectType number
    const frames = framerate;
});