import D = require('date-fp');

const date: Date = D.of([2000]);
const dateFromTime: Date = D.fromTime(Date.now());
const dateInFuture: Date = D.add('seconds', 20, date);
const seconds: number = D.convertTo('seconds', date);
