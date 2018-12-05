namespace compressorsTests {
    const { compressor } = adone;

    namespace gzTests {
        const { gz } = compressor;

        gz.compress("hello").then((x: Buffer) => {});
        gz.compress(Buffer.from("hello")).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { chunkSize: 4096 }).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { finishFlush: gz.Z_FINISH }).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { flush: gz.Z_NO_FLUSH }).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { info: true }).then((x: { buffer: Buffer, engine: nodestd.zlib.Gzip }) => {});
        gz.compress(Buffer.from("hello"), { level: gz.Z_BEST_COMPRESSION }).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { memLevel: gz.Z_BEST_COMPRESSION }).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { strategy: gz.Z_HUFFMAN_ONLY }).then((x: Buffer) => {});
        gz.compress(Buffer.from("hello"), { windowBits: 10 }).then((x: Buffer) => {});

        { const a: Buffer = gz.compressSync("hello"); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello")); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { chunkSize: 4096 }); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { finishFlush: gz.Z_FINISH }); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { flush: gz.Z_NO_FLUSH }); }
        { const a: { buffer: Buffer, engine: nodestd.zlib.Gzip } = gz.compressSync(Buffer.from("hello"), { info: true }); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { level: gz.Z_BEST_COMPRESSION }); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { memLevel: gz.Z_BEST_COMPRESSION }); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { strategy: gz.Z_HUFFMAN_ONLY }); }
        { const a: Buffer = gz.compressSync(Buffer.from("hello"), { windowBits: 10 }); }

        gz.decompress("hello").then((x: Buffer) => {});
        gz.decompress(Buffer.from("hello")).then((x: Buffer) => {});
        gz.decompress(Buffer.from("hello"), { chunkSize: 4096 }).then((x: Buffer) => {});
        gz.decompress(Buffer.from("hello"), { finishFlush: gz.Z_FINISH }).then((x: Buffer) => {});
        gz.decompress(Buffer.from("hello"), { flush: gz.Z_NO_FLUSH }).then((x: Buffer) => {});
        gz.decompress(Buffer.from("hello"), { info: true }).then((x: { buffer: Buffer, engine: nodestd.zlib.Gunzip }) => {});
        gz.decompress(Buffer.from("hello"), { windowBits: 9 }).then((x: Buffer) => {});

        { const a: Buffer = gz.decompressSync("hello"); }
        { const a: Buffer = gz.decompressSync(Buffer.from("hello")); }
        { const a: Buffer = gz.decompressSync(Buffer.from("hello"), { chunkSize: 4096 }); }
        { const a: Buffer = gz.decompressSync(Buffer.from("hello"), { finishFlush: gz.Z_FINISH }); }
        { const a: Buffer = gz.decompressSync(Buffer.from("hello"), { flush: gz.Z_NO_FLUSH }); }
        { const a: { buffer: Buffer, engine: nodestd.zlib.Gunzip } = gz.decompressSync(Buffer.from("hello"), { info: true }); }
        { const a: Buffer = gz.decompressSync(Buffer.from("hello"), { windowBits: 9 }); }

        { const a: nodestd.zlib.Gzip = gz.compressStream(); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({}); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({ chunkSize: 10 }); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({ flush: 10 }); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({ level: 9 }); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({ memLevel: 9 }); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({ strategy: 9 }); }
        { const a: nodestd.zlib.Gzip = gz.compressStream({ windowBits: 9 }); }

        { const a: nodestd.zlib.Gunzip = gz.decompressStream(); }
        { const a: nodestd.zlib.Gunzip = gz.decompressStream({}); }
        { const a: nodestd.zlib.Gunzip = gz.decompressStream({ chunkSize: 4096 }); }
        { const a: nodestd.zlib.Gunzip = gz.decompressStream({ flush: 0 }); }
        { const a: nodestd.zlib.Gunzip = gz.decompressStream({ windowBits: 0 }); }

        { const a: number = gz.Z_NO_FLUSH; }
        { const a: number = gz.Z_PARTIAL_FLUSH; }
        { const a: number = gz.Z_SYNC_FLUSH; }
        { const a: number = gz.Z_FULL_FLUSH; }
        { const a: number = gz.Z_FINISH; }
        { const a: number = gz.Z_BLOCK; }
        { const a: number = gz.Z_TREES; }
        { const a: number = gz.Z_OK; }
        { const a: number = gz.Z_STREAM_END; }
        { const a: number = gz.Z_NEED_DICT; }
        { const a: number = gz.Z_ERRNO; }
        { const a: number = gz.Z_STREAM_ERROR; }
        { const a: number = gz.Z_DATA_ERROR; }
        { const a: number = gz.Z_MEM_ERROR; }
        { const a: number = gz.Z_BUF_ERROR; }
        { const a: number = gz.Z_VERSION_ERROR; }
        { const a: number = gz.Z_NO_COMPRESSION; }
        { const a: number = gz.Z_BEST_SPEED; }
        { const a: number = gz.Z_BEST_COMPRESSION; }
        { const a: number = gz.Z_DEFAULT_COMPRESSION; }
        { const a: number = gz.Z_FILTERED; }
        { const a: number = gz.Z_HUFFMAN_ONLY; }
        { const a: number = gz.Z_RLE; }
        { const a: number = gz.Z_FIXED; }
        { const a: number = gz.Z_DEFAULT_STRATEGY; }
    }

    namespace deflateTests {
        const { deflate } = compressor;

        deflate.compress("hello").then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello")).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { chunkSize: 4096 }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { dictionary: Buffer.from("123") }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { finishFlush: 0 }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { flush: 0 }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { info: true }).then((x: { buffer: Buffer, engine: nodestd.zlib.Deflate }) => {});
        deflate.compress(Buffer.from("hello"), { level: 0 }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { memLevel: 0 }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { strategy: 0 }).then((x: Buffer) => {});
        deflate.compress(Buffer.from("hello"), { windowBits: 0 }).then((x: Buffer) => {});

        { const a: Buffer = deflate.compressSync("hello"); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello")); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { chunkSize: 4096 }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { dictionary: Buffer.from("123") }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { finishFlush: 0 }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { flush: 0 }); }
        { const a: { buffer: Buffer, engine: nodestd.zlib.Deflate } = deflate.compressSync(Buffer.from("hello"), { info: true }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { level: 0 }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { memLevel: 0 }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { strategy: 0 }); }
        { const a: Buffer = deflate.compressSync(Buffer.from("hello"), { windowBits: 0 }); }

        deflate.rawCompress("hello").then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello")).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { chunkSize: 4096 }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { dictionary: Buffer.from("123") }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { finishFlush: 0 }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { flush: 0 }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { info: true }).then((x: { buffer: Buffer, engine: nodestd.zlib.DeflateRaw }) => {});
        deflate.rawCompress(Buffer.from("hello"), { level: 0 }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { memLevel: 0 }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { strategy: 0 }).then((x: Buffer) => {});
        deflate.rawCompress(Buffer.from("hello"), { windowBits: 0 }).then((x: Buffer) => {});

        { const a: Buffer = deflate.rawCompressSync("hello"); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello")); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { chunkSize: 4096 }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { dictionary: Buffer.from("123") }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { finishFlush: 0 }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { flush: 0 }); }
        { const a: { buffer: Buffer, engine: nodestd.zlib.DeflateRaw } = deflate.rawCompressSync(Buffer.from("hello"), { info: true }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { level: 0 }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { memLevel: 0 }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { strategy: 0 }); }
        { const a: Buffer = deflate.rawCompressSync(Buffer.from("hello"), { windowBits: 0 }); }

        deflate.decompress("hello").then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello")).then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello"), { chunkSize: 4096 }).then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello"), { dictionary: Buffer.from("123") }).then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello"), { finishFlush: 0 }).then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello"), { flush: 0 }).then((x: Buffer) => {});
        deflate.decompress(Buffer.from("hello"), { info: true }).then((x: { buffer: Buffer, engine: nodestd.zlib.Inflate }) => {});
        deflate.decompress(Buffer.from("hello"), { windowBits: 0 }).then((x: Buffer) => {});

        { const a: Buffer = deflate.decompressSync("hello"); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello")); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello"), { chunkSize: 4096 }); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello"), { dictionary: Buffer.from("123") }); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello"), { finishFlush: 0 }); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello"), { flush: 0 }); }
        { const a: { buffer: Buffer, engine: nodestd.zlib.Inflate } = deflate.decompressSync(Buffer.from("hello"), { info: true }); }
        { const a: Buffer = deflate.decompressSync(Buffer.from("hello"), { windowBits: 0 }); }

        deflate.rawDecompress("hello").then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello")).then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello"), { chunkSize: 4096 }).then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello"), { dictionary: Buffer.from("123") }).then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello"), { finishFlush: 0 }).then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello"), { flush: 0 }).then((x: Buffer) => {});
        deflate.rawDecompress(Buffer.from("hello"), { info: true }).then((x: { buffer: Buffer, engine: nodestd.zlib.InflateRaw }) => {});
        deflate.rawDecompress(Buffer.from("hello"), { windowBits: 0 }).then((x: Buffer) => {});

        { const a: Buffer = deflate.rawDecompressSync("hello"); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello")); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello"), { chunkSize: 4096 }); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello"), { dictionary: Buffer.from("123") }); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello"), { finishFlush: 0 }); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello"), { flush: 0 }); }
        { const a: { buffer: Buffer, engine: nodestd.zlib.Inflate } = deflate.rawDecompressSync(Buffer.from("hello"), { info: true }); }
        { const a: Buffer = deflate.rawDecompressSync(Buffer.from("hello"), { windowBits: 0 }); }

        { const a: nodestd.zlib.Deflate = deflate.compressStream(); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({}); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ chunkSize: 0 }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ dictionary: Buffer.from("123") }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ finishFlush: 0 }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ flush: 0 }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ level: 0 }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ memLevel: 0 }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ strategy: 0 }); }
        { const a: nodestd.zlib.Deflate = deflate.compressStream({ windowBits: 0 }); }

        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream(); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({}); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ chunkSize: 0 }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ dictionary: Buffer.from("123") }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ finishFlush: 0 }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ flush: 0 }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ level: 0 }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ memLevel: 0 }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ strategy: 0 }); }
        { const a: nodestd.zlib.DeflateRaw = deflate.rawCompressStream({ windowBits: 0 }); }

        { const a: nodestd.zlib.Inflate = deflate.decompressStream(); }
        { const a: nodestd.zlib.Inflate = deflate.decompressStream({}); }
        { const a: nodestd.zlib.Inflate = deflate.decompressStream({ chunkSize: 0 }); }
        { const a: nodestd.zlib.Inflate = deflate.decompressStream({ dictionary: Buffer.from("123") }); }
        { const a: nodestd.zlib.Inflate = deflate.decompressStream({ finishFlush: 0 }); }
        { const a: nodestd.zlib.Inflate = deflate.decompressStream({ flush: 0 }); }
        { const a: nodestd.zlib.Inflate = deflate.decompressStream({ windowBits: 0 }); }

        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream(); }
        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream({}); }
        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream({ chunkSize: 0 }); }
        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream({ dictionary: Buffer.from("123") }); }
        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream({ finishFlush: 0 }); }
        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream({ flush: 0 }); }
        { const a: nodestd.zlib.InflateRaw = deflate.rawDecompressStream({ windowBits: 0 }); }

        { const a: number = deflate.Z_NO_FLUSH; }
        { const a: number = deflate.Z_PARTIAL_FLUSH; }
        { const a: number = deflate.Z_SYNC_FLUSH; }
        { const a: number = deflate.Z_FULL_FLUSH; }
        { const a: number = deflate.Z_FINISH; }
        { const a: number = deflate.Z_BLOCK; }
        { const a: number = deflate.Z_TREES; }
        { const a: number = deflate.Z_OK; }
        { const a: number = deflate.Z_STREAM_END; }
        { const a: number = deflate.Z_NEED_DICT; }
        { const a: number = deflate.Z_ERRNO; }
        { const a: number = deflate.Z_STREAM_ERROR; }
        { const a: number = deflate.Z_DATA_ERROR; }
        { const a: number = deflate.Z_MEM_ERROR; }
        { const a: number = deflate.Z_BUF_ERROR; }
        { const a: number = deflate.Z_VERSION_ERROR; }
        { const a: number = deflate.Z_NO_COMPRESSION; }
        { const a: number = deflate.Z_BEST_SPEED; }
        { const a: number = deflate.Z_BEST_COMPRESSION; }
        { const a: number = deflate.Z_DEFAULT_COMPRESSION; }
        { const a: number = deflate.Z_FILTERED; }
        { const a: number = deflate.Z_HUFFMAN_ONLY; }
        { const a: number = deflate.Z_RLE; }
        { const a: number = deflate.Z_FIXED; }
        { const a: number = deflate.Z_DEFAULT_STRATEGY; }
    }

    namespace brotliTests {
        const { brotli } = compressor;

        brotli.compress("hello").then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello")).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { dictionary: Buffer.from("123") }).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { disable_literal_context_modeling: true }).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { lgblock: 0 }).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { lgwin: 0 }).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { mode: 0 }).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { quality: 0 }).then((x: Buffer) => {});
        brotli.compress(Buffer.from("hello"), { size_hint: 0 }).then((x: Buffer) => {});

        { const a: Buffer = brotli.compressSync("hello"); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello")); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { dictionary: Buffer.from("123") }); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { disable_literal_context_modeling: true }); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { lgblock: 0 }); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { lgwin: 0 }); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { mode: 0 }); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { quality: 0 }); }
        { const a: Buffer = brotli.compressSync(Buffer.from("hello"), { size_hint: 0 }); }

        brotli.decompress(Buffer.from("hello")).then((x: Buffer) => {});
        brotli.decompress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        brotli.decompress(Buffer.from("hello"), { dictionary: Buffer.from("123") }).then((x: Buffer) => {});

        { const a: Buffer = brotli.decompressSync(Buffer.from("hello")); }
        { const a: Buffer = brotli.decompressSync(Buffer.from("hello"), {}); }
        { const a: Buffer = brotli.decompressSync(Buffer.from("hello"), { dictionary: Buffer.from("123") }); }

        { const a: nodestd.stream.Transform = brotli.compressStream(); }
        { const a: nodestd.stream.Transform = brotli.compressStream({}); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ dictionary: Buffer.from("123") }); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ disable_literal_context_modeling: true }); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ lgblock: 0 }); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ lgwin: 0 }); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ mode: 0 }); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ quality: 0 }); }
        { const a: nodestd.stream.Transform = brotli.compressStream({ size_hint: 0 }); }

        { const a: nodestd.stream.Transform = brotli.decompressStream(); }
        { const a: nodestd.stream.Transform = brotli.decompressStream({}); }
        { const a: nodestd.stream.Transform = brotli.decompressStream({ dictionary: Buffer.from("123") }); }
    }

    namespace snappyTests {
        const { snappy } = compressor;

        snappy.compress("hello").then((x: Buffer) => {});
        snappy.compress(Buffer.from("hello")).then((x: Buffer) => {});

        { const a: Buffer = snappy.compressSync("hello"); }
        { const a: Buffer = snappy.compressSync(Buffer.from("hello")); }

        snappy.isValidCompressed(Buffer.from("123")).then((X: boolean) => {});
        { const a: boolean = snappy.isValidCompressedSync(Buffer.from("123")); }

        snappy.decompress(Buffer.from("123")).then((x: Buffer) => {});
        { const a: Buffer = snappy.decompressSync(Buffer.from("123")); }
    }

    namespace lzmaTests {
        const { lzma } = compressor;
        type Stream = adone.compressor.I.lzma.Stream;

        { const a: boolean = lzma.asyncCodeAvailable; }
        { const a: number = lzma.versionNumber(); }
        { const a: string = lzma.versionString(); }
        { const a: boolean = lzma.checkIsSupported(lzma.CHECK_CRC32); }
        { const a: number = lzma.checkSize(lzma.CHECK_CRC32); }
        { const a: boolean = lzma.filterDecoderIsSupported(lzma.FILTER_ARM); }
        { const a: boolean = lzma.filterEncoderIsSupported(lzma.FILTER_ARM); }
        { const a: boolean = lzma.mfIsSupported(lzma.MF_BT2); }
        { const a: number = lzma.rawEncoderMemusage([{ id: "LZMA_FILTER_DELTA", dist: 1 }]); }
        { const a: number = lzma.rawDecoderMemusage([{ id: "LZMA_FILTER_DELTA", dist: 1 }]); }
        { const a: number = lzma.easyEncoderMemusage(lzma.PRESET_DEFAULT); }
        { const a: number = lzma.easyDecoderMemusage(lzma.PRESET_EXTREME); }

        {
            const a: Stream = lzma.createStream("easyEncoder");
            { const b: number = a.bufsize; }
            { const b: number = a.totalIn(); }
            { const b: number = a.totalOut(); }
            a.cleanup();
            a.push("1");
            a.write("1");
            a.end();
            a.destroy();
        }
        { const a: Stream = lzma.createStream("easyEncoder", lzma.PRESET_DEFAULT); }
        { const a: Stream = lzma.createStream("easyEncoder", {}); }
        { const a: Stream = lzma.createStream("easyEncoder", { check: lzma.CHECK_CRC32 }); }
        { const a: Stream = lzma.createStream("easyEncoder", { preset: lzma.PRESET_EXTREME }); }

        { const a: Stream = lzma.createStream("autoDecoder"); }
        { const a: Stream = lzma.createStream("autoDecoder", {}); }
        { const a: Stream = lzma.createStream("autoDecoder", { flags: lzma.LZMA_TELL_NO_CHECK }); }
        { const a: Stream = lzma.createStream("autoDecoder", { memlimit: 1000 }); }

        { const a: Stream = lzma.createStream("aloneEncoder"); }
        { const a: Stream = lzma.createStream("aloneEncoder", lzma.PRESET_DEFAULT); }
        { const a: Stream = lzma.createStream("aloneEncoder", {}); }
        { const a: Stream = lzma.createStream("aloneEncoder", { blockSize: 4096 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { bufsize: 100 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { check: 0 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { flags: 0 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { memlimit: 0 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { preset: 1 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { synchronous: true }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { threads: 10 }); }
        { const a: Stream = lzma.createStream("aloneEncoder", { timeout: 1 }); }

        { const a: Stream = lzma.createStream("aloneDecoder"); }
        { const a: Stream = lzma.createStream("aloneDecoder", {}); }
        { const a: Stream = lzma.createStream("aloneDecoder", { memlimit: 1000 }); }

        { const a: Stream = lzma.createStream("rawEncoder"); }
        { const a: Stream = lzma.createStream("rawEncoder", {}); }
        { const a: Stream = lzma.createStream("rawEncoder", { filters: [{ id: "LZMA_FILTER_DELTA" }] }); }

        { const a: Stream = lzma.createStream("rawDecoder"); }
        { const a: Stream = lzma.createStream("rawDecoder", {}); }
        { const a: Stream = lzma.createStream("rawDecoder", { filters: [{ id: "LZMA_FILTER_DELTA" }] }); }

        { const a: Stream = lzma.createStream("streamEncoder"); }
        { const a: Stream = lzma.createStream("streamEncoder", {}); }
        { const a: Stream = lzma.createStream("streamEncoder", { check: lzma.CHECK_CRC64 }); }
        { const a: Stream = lzma.createStream("streamEncoder", { filters: [{ id: "LZMA_FILTER_DELTA" }] }); }

        { const a: Stream = lzma.createStream("streamDecoder"); }
        { const a: Stream = lzma.createStream("streamDecoder", {}); }
        { const a: Stream = lzma.createStream("streamDecoder", { flags: lzma.LZMA_CONCATENATED }); }
        { const a: Stream = lzma.createStream("streamDecoder", { memlimit: 100 }); }

        lzma.singleStringCoding(
            lzma.createStream("streamDecoder"),
            "hello"
        ).then((x: Buffer) => {});

        lzma.singleStringCoding(
            lzma.createStream("streamDecoder"),
            Buffer.from("hello")
        ).then((x: Buffer) => {});

        lzma.singleStringCoding(
            lzma.createStream("streamDecoder"),
            "hello",
            (err: any, data: Buffer) => {}
        ).then((x: Buffer) => {});

        lzma.singleStringCoding(
            lzma.createStream("streamDecoder"),
            "hello",
            (err: any, data: Buffer) => {},
            (x: number) => {}
        ).then((x: Buffer) => {});

        { const a: number =  lzma.CHECK_CRC32; }
        { const a: number =  lzma.CHECK_CRC64; }
        { const a: number =  lzma.CHECK_NONE; }
        { const a: number =  lzma.CHECK_SHA256; }
        { const a: string =  lzma.FILTERS_MAX; }
        { const a: string =  lzma.FILTER_ARM; }
        { const a: string =  lzma.FILTER_ARMTHUMB; }
        { const a: string =  lzma.FILTER_IA64; }
        { const a: string =  lzma.FILTER_POWERPC; }
        { const a: string =  lzma.FILTER_SPARC; }
        { const a: string =  lzma.FILTER_X86; }
        { const a: string =  lzma.FILTER_DELTA; }
        { const a: string =  lzma.FILTER_LZMA1; }
        { const a: string =  lzma.FILTER_LZMA2; }
        { const a: number =  lzma.PRESET_EXTREME; }
        { const a: number =  lzma.PRESET_DEFAULT; }
        { const a: number =  lzma.PRESET_LEVEL_MASK; }
        { const a: number =  lzma.MF_HC3; }
        { const a: number =  lzma.MF_HC4; }
        { const a: number =  lzma.MF_BT2; }
        { const a: number =  lzma.MF_BT3; }
        { const a: number =  lzma.MF_BT4; }
        { const a: number =  lzma.LZMA_TELL_NO_CHECK; }
        { const a: number =  lzma.LZMA_TELL_UNSUPPORTED_CHECK; }
        { const a: number =  lzma.LZMA_TELL_ANY_CHECK; }
        { const a: number =  lzma.LZMA_CONCATENATED; }
        { const a: number =  lzma.MODE_FAST; }
        { const a: number =  lzma.MODE_NORMAL; }
        { const a: number =  lzma.STREAM_HEADER_SIZE; }

        lzma.compress("hello").then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello")).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), lzma.PRESET_DEFAULT).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { blockSize: 4096 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { bufsize: 0 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { check: 0 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { filters: [{ id: "LZMA_FILTER_ARMTHUMB" }] }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { flags: 0 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { memlimit: 0 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { preset: 0 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { synchronous: false }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { threads: 10 }).then((x: Buffer) => {});
        lzma.compress(Buffer.from("hello"), { timeout: 10 }).then((x: Buffer) => {});

        { const a: Stream = lzma.compressStream(); }
        { const a: Stream = lzma.compressStream(lzma.PRESET_DEFAULT); }
        { const a: Stream = lzma.compressStream({}); }
        { const a: Stream = lzma.compressStream({ blockSize: 4096 }); }
        { const a: Stream = lzma.compressStream({ bufsize: 0 }); }
        { const a: Stream = lzma.compressStream({ check: 0 }); }
        { const a: Stream = lzma.compressStream({ filters: [{ id: "LZMA_FILTER_ARMTHUMB" }] }); }
        { const a: Stream = lzma.compressStream({ flags: 0 }); }
        { const a: Stream = lzma.compressStream({ memlimit: 0 }); }
        { const a: Stream = lzma.compressStream({ preset: 0 }); }
        { const a: Stream = lzma.compressStream({ synchronous: false }); }
        { const a: Stream = lzma.compressStream({ threads: 10 }); }
        { const a: Stream = lzma.compressStream({ timeout: 10 }); }

        lzma.decompress(Buffer.from("hello")).then((x: Buffer) => {});
        lzma.decompress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        lzma.decompress(Buffer.from("hello"), { memlimit: 100 }).then((x: Buffer) => {});

        { const a: Stream = lzma.decompressStream(); }
        { const a: Stream = lzma.decompressStream({}); }
        { const a: Stream = lzma.decompressStream({ memlimit: 100 }); }
    }

    namespace xzTests {
        const { xz } = compressor;
        type Stream = adone.compressor.I.lzma.Stream;

        { const a: boolean = xz.asyncCodeAvailable; }
        { const a: number = xz.versionNumber(); }
        { const a: string = xz.versionString(); }
        { const a: boolean = xz.checkIsSupported(xz.CHECK_CRC32); }
        { const a: number = xz.checkSize(xz.CHECK_CRC32); }
        { const a: boolean = xz.filterDecoderIsSupported(xz.FILTER_ARM); }
        { const a: boolean = xz.filterEncoderIsSupported(xz.FILTER_ARM); }
        { const a: boolean = xz.mfIsSupported(xz.MF_BT2); }
        { const a: number = xz.rawEncoderMemusage([{ id: "LZMA_FILTER_DELTA", dist: 1 }]); }
        { const a: number = xz.rawDecoderMemusage([{ id: "LZMA_FILTER_DELTA", dist: 1 }]); }
        { const a: number = xz.easyEncoderMemusage(xz.PRESET_DEFAULT); }
        { const a: number = xz.easyDecoderMemusage(xz.PRESET_EXTREME); }

        {
            const a: Stream = xz.createStream("easyEncoder");
            { const b: number = a.bufsize; }
            { const b: number = a.totalIn(); }
            { const b: number = a.totalOut(); }
            a.cleanup();
            a.push("1");
            a.write("1");
            a.end();
            a.destroy();
        }
        { const a: Stream = xz.createStream("easyEncoder", xz.PRESET_DEFAULT); }
        { const a: Stream = xz.createStream("easyEncoder", {}); }
        { const a: Stream = xz.createStream("easyEncoder", { check: xz.CHECK_CRC32 }); }
        { const a: Stream = xz.createStream("easyEncoder", { preset: xz.PRESET_EXTREME }); }

        { const a: Stream = xz.createStream("autoDecoder"); }
        { const a: Stream = xz.createStream("autoDecoder", {}); }
        { const a: Stream = xz.createStream("autoDecoder", { flags: xz.LZMA_TELL_NO_CHECK }); }
        { const a: Stream = xz.createStream("autoDecoder", { memlimit: 1000 }); }

        { const a: Stream = xz.createStream("aloneEncoder"); }
        { const a: Stream = xz.createStream("aloneEncoder", xz.PRESET_DEFAULT); }
        { const a: Stream = xz.createStream("aloneEncoder", {}); }
        { const a: Stream = xz.createStream("aloneEncoder", { blockSize: 4096 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { bufsize: 100 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { check: 0 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { flags: 0 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { memlimit: 0 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { preset: 1 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { synchronous: true }); }
        { const a: Stream = xz.createStream("aloneEncoder", { threads: 10 }); }
        { const a: Stream = xz.createStream("aloneEncoder", { timeout: 1 }); }

        { const a: Stream = xz.createStream("aloneDecoder"); }
        { const a: Stream = xz.createStream("aloneDecoder", {}); }
        { const a: Stream = xz.createStream("aloneDecoder", { memlimit: 1000 }); }

        { const a: Stream = xz.createStream("rawEncoder"); }
        { const a: Stream = xz.createStream("rawEncoder", {}); }
        { const a: Stream = xz.createStream("rawEncoder", { filters: [{ id: "LZMA_FILTER_DELTA" }] }); }

        { const a: Stream = xz.createStream("rawDecoder"); }
        { const a: Stream = xz.createStream("rawDecoder", {}); }
        { const a: Stream = xz.createStream("rawDecoder", { filters: [{ id: "LZMA_FILTER_DELTA" }] }); }

        { const a: Stream = xz.createStream("streamEncoder"); }
        { const a: Stream = xz.createStream("streamEncoder", {}); }
        { const a: Stream = xz.createStream("streamEncoder", { check: xz.CHECK_CRC64 }); }
        { const a: Stream = xz.createStream("streamEncoder", { filters: [{ id: "LZMA_FILTER_DELTA" }] }); }

        { const a: Stream = xz.createStream("streamDecoder"); }
        { const a: Stream = xz.createStream("streamDecoder", {}); }
        { const a: Stream = xz.createStream("streamDecoder", { flags: xz.LZMA_CONCATENATED }); }
        { const a: Stream = xz.createStream("streamDecoder", { memlimit: 100 }); }

        xz.singleStringCoding(
            xz.createStream("streamDecoder"),
            "hello"
        ).then((x: Buffer) => {});

        xz.singleStringCoding(
            xz.createStream("streamDecoder"),
            Buffer.from("hello")
        ).then((x: Buffer) => {});

        xz.singleStringCoding(
            xz.createStream("streamDecoder"),
            "hello",
            (err: any, data: Buffer) => {}
        ).then((x: Buffer) => {});

        xz.singleStringCoding(
            xz.createStream("streamDecoder"),
            "hello",
            (err: any, data: Buffer) => {},
            (x: number) => {}
        ).then((x: Buffer) => {});

        { const a: number =  xz.CHECK_CRC32; }
        { const a: number =  xz.CHECK_CRC64; }
        { const a: number =  xz.CHECK_NONE; }
        { const a: number =  xz.CHECK_SHA256; }
        { const a: string =  xz.FILTERS_MAX; }
        { const a: string =  xz.FILTER_ARM; }
        { const a: string =  xz.FILTER_ARMTHUMB; }
        { const a: string =  xz.FILTER_IA64; }
        { const a: string =  xz.FILTER_POWERPC; }
        { const a: string =  xz.FILTER_SPARC; }
        { const a: string =  xz.FILTER_X86; }
        { const a: string =  xz.FILTER_DELTA; }
        { const a: string =  xz.FILTER_LZMA1; }
        { const a: string =  xz.FILTER_LZMA2; }
        { const a: number =  xz.PRESET_EXTREME; }
        { const a: number =  xz.PRESET_DEFAULT; }
        { const a: number =  xz.PRESET_LEVEL_MASK; }
        { const a: number =  xz.MF_HC3; }
        { const a: number =  xz.MF_HC4; }
        { const a: number =  xz.MF_BT2; }
        { const a: number =  xz.MF_BT3; }
        { const a: number =  xz.MF_BT4; }
        { const a: number =  xz.LZMA_TELL_NO_CHECK; }
        { const a: number =  xz.LZMA_TELL_UNSUPPORTED_CHECK; }
        { const a: number =  xz.LZMA_TELL_ANY_CHECK; }
        { const a: number =  xz.LZMA_CONCATENATED; }
        { const a: number =  xz.MODE_FAST; }
        { const a: number =  xz.MODE_NORMAL; }
        { const a: number =  xz.STREAM_HEADER_SIZE; }

        xz.compress("hello").then((x: Buffer) => {});
        xz.compress(Buffer.from("hello")).then((x: Buffer) => {});
        xz.compress(Buffer.from("hello"), xz.PRESET_DEFAULT).then((x: Buffer) => {});
        xz.compress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        xz.compress(Buffer.from("hello"), { check: xz.CHECK_CRC32 }).then((x: Buffer) => {});
        xz.compress(Buffer.from("hello"), { preset: xz.PRESET_EXTREME }).then((x: Buffer) => {});

        { const a: Stream = xz.compressStream(); }
        { const a: Stream = xz.compressStream(xz.PRESET_DEFAULT); }
        { const a: Stream = xz.compressStream({}); }
        { const a: Stream = xz.compressStream({ check: xz.CHECK_CRC64 }); }
        { const a: Stream = xz.compressStream({ preset: xz.PRESET_LEVEL_MASK }); }

        xz.decompress(Buffer.from("hello")).then((x: Buffer) => {});
        xz.decompress(Buffer.from("hello"), {}).then((x: Buffer) => {});
        xz.decompress(Buffer.from("hello"), { flags: xz.LZMA_CONCATENATED }).then((x: Buffer) => {});
        xz.decompress(Buffer.from("hello"), { memlimit: 100 }).then((x: Buffer) => {});

        { const a: Stream = xz.decompressStream(); }
        { const a: Stream = xz.decompressStream({}); }
        { const a: Stream = xz.decompressStream({ flags: xz.LZMA_TELL_ANY_CHECK }); }
        { const a: Stream = xz.decompressStream({ memlimit: 100 }); }
    }
}
