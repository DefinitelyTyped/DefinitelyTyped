import toobusy = require('toobusy-js');

let numberValue = 1;
let booleanValue = true;

booleanValue = toobusy();
booleanValue = toobusy.started();

numberValue = toobusy.interval(numberValue);
numberValue = toobusy.interval();
numberValue = toobusy.lag();
numberValue = toobusy.maxLag(numberValue);
numberValue = toobusy.maxLag();
numberValue = toobusy.smoothingFactor(numberValue);
numberValue = toobusy.smoothingFactor();
toobusy.shutdown();

toobusy.onLag(duration => {
    // $ExpectType number
    duration;
});
toobusy.onLag(duration => {
    // $ExpectType number
    duration;
}, numberValue);
