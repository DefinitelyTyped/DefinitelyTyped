import lnfs = require('lnfs');

lnfs('foo.txt', 'bar.txt'); // $ExpectType Promise<string>
lnfs('foo.txt', 'bar.txt', 'dir'); // $ExpectType Promise<string>
lnfs('foo.txt', 'bar.txt', 'file'); // $ExpectType Promise<string>
lnfs('foo.txt', 'bar.txt', 'junction'); // $ExpectType Promise<string>
// @ts-expect-error
lnfs('foo.txt', 'bar.txt', 'foo');
