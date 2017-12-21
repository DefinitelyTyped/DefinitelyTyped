import { createReadStream, createWriteStream } from 'fs';
import * as br from 'iltorb';

const opts: br.BrotliEncodeParams = {
    disable_literal_context_modeling: false,
    lgblock: 0,
    lgwin: 22,
    mode: 0,
    quality: 11,
    size_hint: 0
};

const onCompress = (err1: Error | null | undefined, compressed: Buffer) => {
    br.decompress(compressed, (err2: Error | null | undefined, decompressed: Buffer) => {
        console.log(decompressed.toString());
    });
};

br.compress(Buffer.from('foo', 'utf8'), onCompress);

br.compress(Buffer.from('foo', 'utf8'), opts, onCompress);

const stream = br.compressStream();
stream.flush();

createReadStream(__filename)
    .pipe(stream)
    .pipe(createWriteStream('foo.ts'));

createReadStream(__dirname)
    .pipe(br.compressStream(opts))
    .pipe(createWriteStream('bar.ts'));

createReadStream('bar.ts')
    .pipe(br.decompressStream())
    .pipe(createWriteStream('qux.ts'));

br.decompressSync(br.compressSync(Buffer.from('foo', 'utf8')));
br.decompressSync(br.compressSync(Buffer.from('foo', 'utf8'), opts));
