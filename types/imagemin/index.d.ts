/// <reference types="node" />

/**
 * @async
 */
declare function imagemin(input: readonly string[], options?: Options): Promise<Result[]>;

declare namespace imagemin {
    /**
     * @async
     */
    function buffer(input: Buffer, options?: BufferOptions): Promise<Buffer>;
}

export type Plugin = (input: Buffer) => Promise<Buffer>;

export interface Options {
    destination?: string | undefined;
    plugins: readonly Plugin[];
    glob?: boolean | undefined;
}

export interface Result {
    data: Buffer;
    sourcePath: string;
    destinationPath: string;
}

export interface BufferOptions {
    plugins: readonly Plugin[];
}

export default imagemin;
