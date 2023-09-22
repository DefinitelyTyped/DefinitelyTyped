declare module 'node:string_decoder' {
    class StringDecoder {
        constructor(encoding?: BufferEncoding);
        write(buffer: Buffer): string;
        end(buffer?: Buffer): string;
    }
}
declare module 'string_decoder' {
    export * from 'node:string_decoder';
}
