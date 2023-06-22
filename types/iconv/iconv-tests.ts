import { Iconv } from 'iconv';
import { Writable } from 'stream';

// $ExpectType Iconv
new Iconv('utf-8', 'cp932');
// $ExpectType Iconv
Iconv('utf-8', 'cp932');

declare const iconv: Iconv;

// $ExpectType true
iconv.writable;

// $ExpectType Buffer
iconv.convert('hoge');
// $ExpectType Buffer
iconv.convert('hoge', 'utf-8');
// $ExpectType Buffer
iconv.convert(Buffer.from('hoge'));
// @ts-expect-error
iconv.convert(Buffer.from('hoge'), 'utf-8');

// $ExpectType boolean
iconv.write('hoge');
// $ExpectType boolean
iconv.write('hoge', 'utf-8');
// $ExpectType boolean
iconv.write(Buffer.from('hoge'));
// @ts-expect-error
iconv.write(Buffer.from('hoge'), 'utf-8');

// $ExpectType void
iconv.end();
// $ExpectType void
iconv.end('hoge');
// $ExpectType void
iconv.end('hoge', 'utf-8');
// @ts-expect-error
iconv.end(Buffer.from('hoge'), 'utf-8');
// $ExpectType void
iconv.end(Buffer.from('hoge'));

// $ExpectType Writable
iconv.pipe(new Writable(), { end: true });
