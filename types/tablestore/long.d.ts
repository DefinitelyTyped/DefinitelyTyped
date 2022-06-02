/// <reference types="node" />

declare namespace TableStore {
    interface int64 {
        toBuffer: () => Buffer;
        toNumber: () => number;
    }
    const Long: {
        fromNumber: (num: number) => int64;
        fromString: (str: string) => int64;
    };
}
