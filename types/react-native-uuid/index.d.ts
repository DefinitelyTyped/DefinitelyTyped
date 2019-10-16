// Type definitions for react-native-uuid 1.4
// Project: https://github.com/eugenehp/react-native-uuid
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

interface v1 {
    node: number[];
    clockseq: number;
    msecs: number | Date;
    nsecs: number;
}

interface v4 {
    random?: number[];
    rng?: (...args: any) => void;
}

interface uuid {
    v1: (options?: v1, buffer?: ArrayBuffer, offset?: number) => string;
    v4: (options?: v4, buffer?: ArrayBuffer, offset?: number) => string;
    parse: (id: string, buffer?: ArrayBuffer, offset?: number) => ArrayBuffer;
    unparse: (buffer?: ArrayBuffer, offset?: number) => string;
    noConflict: () => string;
}

declare const uuid: uuid;
export = uuid;
