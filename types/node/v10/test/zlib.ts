import {
    deflate,
    inflate,
    deflateRaw,
    inflateRaw,
    gunzip,
    gzip,
    unzip,
    constants,
    brotliCompress,
    brotliDecompress,
} from 'zlib';
import { promisify } from 'util';

{
    // $ExpectType (buffer: InputType, options?: BrotliOptions) => Promise<Buffer>
    const pBrotliCompress = promisify(brotliCompress);
    // $ExpectType (buffer: InputType, options?: BrotliOptions) => Promise<Buffer>
    const pBrotliDecompress = promisify(brotliDecompress);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pDeflate = promisify(deflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pDeflateRaw = promisify(deflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pGzip = promisify(gzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pGunzip = promisify(gunzip);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pInflate = promisify(inflate);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pInflateRaw = promisify(inflateRaw);
    // $ExpectType (buffer: InputType, options?: ZlibOptions) => Promise<Buffer>
    const pUnzip = promisify(unzip);

    (async () => {
        await pBrotliCompress(Buffer.from('buf')); // $ExpectType Buffer
        await pBrotliCompress(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pBrotliDecompress(Buffer.from('buf')); // $ExpectType Buffer
        await pBrotliDecompress(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflate(Buffer.from('buf')); // $ExpectType Buffer
        await pDeflate(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pDeflateRaw(Buffer.from('buf')); // $ExpectType Buffer
        await pDeflateRaw(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pGzip(Buffer.from('buf')); // $ExpectType Buffer
        await pGzip(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pGunzip(Buffer.from('buf')); // $ExpectType Buffer
        await pGunzip(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflate(Buffer.from('buf')); // $ExpectType Buffer
        await pInflate(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pInflateRaw(Buffer.from('buf')); // $ExpectType Buffer
        await pInflateRaw(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
        await pUnzip(Buffer.from('buf')); // $ExpectType Buffer
        await pUnzip(Buffer.from('buf'), { flush: constants.Z_NO_FLUSH }); // $ExpectType Buffer
    })();
}
