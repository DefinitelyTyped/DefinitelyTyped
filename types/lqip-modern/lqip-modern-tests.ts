import lqip = require('lqip-modern');

// it should return the necessary type depending on `input`
lqip(Buffer.from('')); // $ExpectType Promise<LqipResult>
lqip('tst'); // $ExpectType Promise<LqipResult>
lqip([Buffer.from('')]); // $ExpectType Promise<LqipResult[]>
lqip(['tst']); // $ExpectType Promise<LqipResult[]>

// it should not error when passing only part of `LqipOptions`
lqip('tst', { resize: 32 });
lqip('tst', { outputFormat: 'webp' });
lqip('tst', { outputOptions: { loop: 10 } });

// it should validate `outputOptions` depending on `outputFormat`
lqip('tst', { outputFormat: 'jpg', outputOptions: { loop: 10 } }); // $ExpectError
lqip('tst', { outputFormat: 'jpeg', outputOptions: { loop: 10 } }); // $ExpectError
lqip('tst', { outputFormat: 'webp', outputOptions: { loop: 10 } });

lqip('tst', { outputFormat: 'jpg', outputOptions: { quantisationTable: 1 } });
lqip('tst', { outputFormat: 'jpeg', outputOptions: { quantisationTable: 1 } });
lqip('tst', { outputFormat: 'webp', outputOptions: { quantisationTable: 1 } }); // $ExpectError
