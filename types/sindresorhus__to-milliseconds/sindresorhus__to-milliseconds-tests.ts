import toMilliseconds = require('@sindresorhus/to-milliseconds');

// $ExpectType number
toMilliseconds({
    days: 15,
});
toMilliseconds({
    hours: 11,
});
toMilliseconds({
    minutes: 23,
});
toMilliseconds({
    seconds: 20,
});
toMilliseconds({
    milliseconds: 1,
});
toMilliseconds({
    microseconds: 1,
});
toMilliseconds({
    nanoseconds: 1,
});
