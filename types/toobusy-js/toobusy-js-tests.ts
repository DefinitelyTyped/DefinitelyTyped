import toobusy = require("toobusy-js");

let numberValue = 1;
let booleanValue = true;

booleanValue = toobusy();
booleanValue = toobusy.started();

numberValue = toobusy.interval(numberValue);
numberValue = toobusy.lag();
numberValue = toobusy.maxLag(numberValue);
numberValue = toobusy.smmothingFactor(numberValue);

toobusy.onLag((duration: number) => {});
toobusy.onLag((duration: number) => {}, numberValue);

toobusy.shutdown();
