import TraceParent = require('traceparent');

TraceParent.fromString(''); // $ExpectType TraceParent
TraceParent.startOrResume(undefined, { transactionSampleRate: 1 }); // $ExpectType TraceParent
TraceParent.startOrResume('', { transactionSampleRate: 1 }); // $ExpectType TraceParent
TraceParent.FLAGS.recorded; // $ExpectType 1

new TraceParent(Buffer.from('')); // $ExpectType TraceParent

const sut = TraceParent.startOrResume(undefined, { transactionSampleRate: 1 });

TraceParent.startOrResume(sut, { transactionSampleRate: 0.5 }); // $ExpectType TraceParent
sut.recorded; // $ExpectType boolean
sut.traceId; // $ExpectType string
sut.id; // $ExpectType string
sut.parentId; // $ExpectType string | undefined
sut.flags; // $ExpectType string
sut.version; // $ExpectType string
sut.child(); // $ExpectTyep TraceParent
sut.toString(); // $ExpectType string
sut.ensureParentId(); // $ExpectType string
