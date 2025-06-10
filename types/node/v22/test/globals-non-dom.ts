// fetch
{
    fetch("https://example.com").then(response => {
        response.arrayBuffer(); // $ExpectType Promise<ArrayBuffer>
        response.blob(); // $ExpectType Promise<Blob>
        response.formData(); // $ExpectType Promise<FormData>
        response.json(); // $ExpectType Promise<unknown>
        response.text(); // $ExpectType Promise<string>
    });
    const fd = new FormData();
    fd.append("foo", "bar");
    const headers = new Headers();
    headers.append("Accept", "application/json");
    fetch("https://example.com", { body: fd });
    fetch(new URL("https://example.com"), {
        dispatcher: undefined,
    });

    const reqinit: RequestInit = {};
    reqinit.method; // $ExpectType string | undefined
    const resinit: ResponseInit = {};
    resinit.status; // $ExpectType number | undefined

    const f: File = {} as any;
    f.name; // $ExpectType string
}

{
    crypto.randomUUID(); // $ExpectType `${string}-${string}-${string}-${string}-${string}` || string
    crypto.getRandomValues(Buffer.alloc(8)); // $ExpectType Buffer || Buffer<ArrayBuffer>
    crypto.getRandomValues(new BigInt64Array(4)); // $ExpectType BigInt64Array || BigInt64Array<ArrayBuffer>

    crypto.subtle.generateKey({ name: "HMAC", hash: "SHA-1" }, true, ["sign", "decrypt", "deriveBits"]).then(
        (out) => {
            out.algorithm; // $ExpectType KeyAlgorithm
            out.extractable; // $ExpectType boolean
            out.usages; // $ExpectType KeyUsage[]
        },
    );
}

{
    const abort = new AbortController();
    AbortSignal.any([abort.signal]); // $ExpectType AbortSignal
}

{
    const server = new WebSocket("htps://example.com");
    server.addEventListener("message", (event) => {
        console.log(event.data);
    });
    server.send("some data");
}

{
    const stream = new ReadableStream<string>({ start: (controller) => controller.enqueue("hello") }); // $ExpectType ReadableStream<string>
    const compressionStream = new CompressionStream("gzip");
    const encodedStream = stream.pipeThrough(new TextEncoderStream()); // $ExpectType ReadableStream<Uint8Array> || ReadableStream<Uint8Array<ArrayBufferLike>>
    const compressedStream = encodedStream.pipeThrough(compressionStream); // $ExpectType ReadableStream<any>
    compressedStream.pipeThrough(new DecompressionStream("gzip")); // $ExpectType ReadableStream<any>
    void (async () => {
        for await (const value of compressedStream) {
            console.log(value);
        }
    })();
}
