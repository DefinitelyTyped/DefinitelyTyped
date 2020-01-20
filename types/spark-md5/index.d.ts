// Type definitions for spark-md5 3.0
// Project: https://github.com/satazor/js-spark-md5#readme
// Definitions by: Bastien Moulia <https://github.com/bastienmoulia>
//                 Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// copy of ArrayBuffer because of a conflict with the class SparkMD5.ArrayBuffer
type JsArrayBuffer = ArrayBuffer;

declare class SparkMD5 {
    constructor();

    static hash(str: string, raw?: boolean): string;
    static hashBinary(content: string, raw?: boolean): string;

    append(str: string): SparkMD5;
    appendBinary(contents: string): SparkMD5;
    destroy(): void;
    end(raw?: boolean): string;
    getState(): SparkMD5.State;
    reset(): SparkMD5;
    setState(state: SparkMD5.State): SparkMD5.State;
}

declare namespace SparkMD5 {
    interface State {
        buff: Uint8Array;
        hash: number[];
        length: number;
    }

    class ArrayBuffer {
        constructor();

        static hash(arr: JsArrayBuffer, raw?: boolean): string;

        append(str: JsArrayBuffer): ArrayBuffer;
        destroy(): void;
        end(raw?: boolean): string;
        getState(): State;
        reset(): ArrayBuffer;
        setState(state: State): State;
    }
}

export = SparkMD5;
