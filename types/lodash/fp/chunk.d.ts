import _ = require("../index");

declare namespace Lodash {
    interface Chunk {
        (): Chunk;
        (size: number): Chunk1x1<T>;
        <T>(size: number, array: _.List<T> | null | undefined): T[][];
    }
    interface Chunk1x1<T> {
        (): Chunk1x1<T>;
        (array: _.List<T> | null | undefined): T[][];
    }
}

declare const chunk: Lodash.Chunk;
export = chunk;
