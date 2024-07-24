import RandomAccessStorage = require("random-access-storage");

declare class Pool {
    constructor(maxSize: number);
}

declare class RandomAccessFile extends RandomAccessStorage {
    constructor(
        filename: string,
        opts?: Readonly<{
            /** truncate the file before reading / writing */
            truncate?: boolean;
            /** truncate the file to this size first */
            size?: number;
            /** should the file be opened as readable? */
            readable?: boolean;
            /** should the file be opened as writable? */
            writable?: boolean;
            /** lock the file */
            lock?: boolean;
            /** mark the file as sparse */
            sparse?: boolean;
            directory?: string;
            pool?: Pool;
        }>,
    );

    static createPool(maxSize: number): Pool;
}

export = RandomAccessFile;
