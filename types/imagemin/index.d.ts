/// <reference types="node" />

/**
 * @async
 */
declare function imagemin(input: readonly string[], options?: Options): Promise<Result[]>;

declare namespace imagemin {
    /**
     * @async
     */
    function buffer(data: Uint8Array, options?: BufferOptions): Promise<Uint8Array>;
}

export type Plugin = (input: Uint8Array) => Promise<Uint8Array>;

export interface Options {
    destination?: string | undefined;
    plugins: readonly Plugin[];
    glob?: boolean | undefined;
}

export interface Result {
    data: Uint8Array;
    sourcePath: string;
    destinationPath: string;
}

export interface BufferOptions {
    plugins: readonly Plugin[];
}

export default imagemin;
