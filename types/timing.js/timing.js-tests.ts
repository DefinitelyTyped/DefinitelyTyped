import * as timing from 'timing.js';

const t = timing.getTimes();
console.log(t.domReadyTime);
console.log(t.firstPaintTime);
console.log(t.firstPaint - t.fetchStart);

timing.printTable();
timing.printSimpleTable();
