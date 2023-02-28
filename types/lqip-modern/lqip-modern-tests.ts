import lqip = require('lqip-modern');

// it should return the necessary type depending on `input`
lqip(Buffer.from('')); // $ExpectType Promise<LqipResult>
lqip('tst'); // $ExpectType Promise<LqipResult>
lqip([Buffer.from('')]); // $ExpectType Promise<LqipResult[]>
lqip(['tst']); // $ExpectType Promise<LqipResult[]>

// it should not error when passing only part of `LqipOptions`
lqip('tst', { resize: 32 });
lqip('tst', { outputFormat: 'webp' });
lqip('tst', { outputOptions: { lossless: true } });

// it should validate `outputOptions` depending on `outputFormat`
// @ts-expect-error
lqip('tst', { outputFormat: 'jpg', outputOptions: { lossless: true } });
// @ts-expect-error
lqip('tst', { outputFormat: 'jpeg', outputOptions: { lossless: true } });
lqip('tst', { outputFormat: 'webp', outputOptions: { lossless: true } });

lqip('tst', { outputFormat: 'jpg', outputOptions: { progressive: true } });
lqip('tst', { outputFormat: 'jpeg', outputOptions: { progressive: true } });
// @ts-expect-error
lqip('tst', { outputFormat: 'webp', outputOptions: { progressive: true } });
