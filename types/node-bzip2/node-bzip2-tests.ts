import * as bzip2 from 'node-bzip2';

interface Result {
    data: Buffer | null;
    error: Error | null;
}

async function doCompress(): Promise<Result> {
    try {
        const input = "Hello, world!";
        const compressed = await bzip2.compressAsync(input, { level: 9 });
        return { data: compressed, error: null };
    } catch (e) {
        return { data: null, error: e as Error };
    }
}

async function doDecompress(cResult: Result): Promise<Result> {
    if (cResult.error || !cResult.data) return cResult;
    try {
        const decompressed = await bzip2.decompressAsync(cResult.data);
        return { data: decompressed, error: null };
    } catch (e) {
        return { data: null, error: e as Error };
    }
}

async function doTest() {
    const cResult = await doCompress();
    const dResult = await doDecompress(cResult);

    if (!dResult.error && dResult.data?.toString() === "Hello, world!") {
        console.log("Success");
    } else {
        console.log("Failure", dResult.error);
    }
}

doTest();
