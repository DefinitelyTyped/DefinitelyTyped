import loopbench = require('loopbench');

const inst = loopbench();
inst; // $ExpectType LoopBench
loopbench({ sampleInterval: 1 }); // $ExpectType LoopBench
loopbench({ limit: 1 }); // $ExpectType LoopBench

inst.delay; // $ExpectType number
inst.limit; // $ExpectType number
inst.overLimit; // $ExpectType boolean
inst.stop();
