import pTime = require('p-time');

const wrappedFn = pTime(async (input: number) => {
    return input;
});

// $ExpectType (input: number) => PromiseWithTime<number>
wrappedFn;

// $ExpectType number | undefined
wrappedFn(1).time;

// $ExpectError
pTime((input: number) => {
    return input;
});

// $ExpectError
wrappedFn('foo');

// $ExpectType (input: number) => PromiseWithTime<number>
pTime.log(async (input: number) => {
    return input;
});
