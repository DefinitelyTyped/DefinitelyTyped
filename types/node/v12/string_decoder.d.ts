declare module 'node:string_decoder' {
    export * from 'string_decoder';
}

declare module 'string_decoder' {
    class StringDecoder {
        constructor(encoding?: string);
        write(buffer: Buffer): string;
        end(buffer?: Buffer): string;
    }
}
