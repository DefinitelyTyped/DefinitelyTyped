import timeSpan = require('time-span');

const end = timeSpan();

let endTime: number;
endTime = end();
endTime = end.rounded();
endTime = end.sec();
endTime = end.nano();
