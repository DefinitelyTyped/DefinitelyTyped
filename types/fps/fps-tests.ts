import fps = require("fps");

const ticker = fps();

const tickerWithOptions = fps({ decay: 1 });

// @ts-expect-error
const tickerWithInvalidOptions = fps({ dey: 1 });

// $ExpectType void
ticker.tick();

// $ExpectType number
ticker.last;

// $ExpectType number
ticker.rate;

// $ExpectType number
ticker.time;

// $ExpectType number
ticker.decay;

// $ExpectType number
ticker.every;

// $ExpectType number
ticker.ticks;

// $ExpectType void
tickerWithOptions.tick();

// $ExpectType void
ticker.on("data", framerate => {
    // $ExpectType number
    const frames = framerate;
});
