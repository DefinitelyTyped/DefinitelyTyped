/// <reference types="node" />

export = writeFile;

declare function writeFile(
    filename: string,
    data: string | Buffer,
    options: writeFile.Options | BufferEncoding,
    callback: (error?: Error) => void,
): void;
declare function writeFile(filename: string, data: string | Buffer, callback: (error?: Error) => void): void;
declare function writeFile(
    filename: string,
    data: string | Buffer,
    options?: writeFile.Options | BufferEncoding,
): Promise<void>;

declare namespace writeFile {
    function sync(filename: string, data: string | Buffer, options?: Options | BufferEncoding): void;

    interface Options {
        chown?:
            | {
                uid: number;
                gid: number;
            }
            | undefined;
        /**
         * @default 'utf8'
         */
        encoding?: BufferEncoding | undefined;
        fsync?: boolean | undefined;
        mode?: number | undefined;
        tmpfileCreated?: ((tmpfile: string) => void) | undefined;
    }
}
