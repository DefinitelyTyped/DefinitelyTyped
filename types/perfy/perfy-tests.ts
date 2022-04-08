/// <reference types="node" />

import perfy = require('perfy');

perfy.start('loop-stuff');
const result = perfy.end('loop-stuff');
console.log(result.time);

perfy.exec('async-stuff', done => {
    const result = done();
    console.log(result.time);
});

function syncOp() {
    // some code
}
const syncResult = perfy.exec(syncOp);
perfy.exec(done => {
    const result = done();
});

perfy.exec('async-op', done => {
    // a-sync operation
    done();
    perfy.exists('async-op'); // —> true (saved)
});

perfy.start('metric-1');
const metric1Result = perfy.end('metric-1');
console.log(`${metric1Result.seconds} sec, ${metric1Result.milliseconds.toFixed(3)} ms.`);
console.log(metric1Result.time + ' sec. ');

perfy.start('metric-2').count();
const result2 = perfy.end('metric-2');
perfy.count();

perfy.start('metric-3', false); // $ExpectType Perfy
perfy.end('metric-3').time; // $ExpectType number
perfy.exists('metric-3'); // $ExpectType boolean

perfy.destroyAll().count(); // $ExpectType number

perfy
    .exec('async-op', done => {
        const result = done();
        perfy.count();
    })
    .count();
