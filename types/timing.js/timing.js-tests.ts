import * as timing from 'timing.js';

const t = timing.getTimes();
t.domReadyTime; // $ExpectType number
t.firstPaintTime; // $ExpectType number
t.firstPaint - t.fetchStart; // $ExpectType number

timing.printTable(); // $ExpectType void
timing.printSimpleTable(); // $ExpectType void
