import lqip = require('lqip-modern');

lqip(Buffer.from('')); // $ExpectType Promise<LqipResult>
lqip('tst'); // $ExpectType Promise<LqipResult>
lqip([Buffer.from('')]); // $ExpectType Promise<LqipResult[]>
lqip(['tst']); // $ExpectType Promise<LqipResult[]>

lqip('tst', { outputFormat: 'jpg', outputOptions: { loop: 10 } }); // $ExpectError
lqip('tst', { outputFormat: 'jpeg', outputOptions: { loop: 10 } }); // $ExpectError
lqip('tst', { outputFormat: 'webp', outputOptions: { loop: 10 } });

lqip('tst', { outputFormat: 'jpg', outputOptions: { quantisationTable: 1 } });
lqip('tst', { outputFormat: 'jpeg', outputOptions: { quantisationTable: 1 } });
lqip('tst', { outputFormat: 'webp', outputOptions: { quantisationTable: 1 } }); // $ExpectError
