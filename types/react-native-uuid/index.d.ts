// Type definitions for react-native-uuid 1.4
// Project: https://github.com/eugenehp/react-native-uuid
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface v1 {
    options?: {
        node: number[],
        clockseq: number,
        msec: number | Date,
        nsec: number
    },
    buffer?: ArrayBuffer,
    offset?: number
}

interface v4 {
    options?: {
        random: number[],
        rng: (...args: any) => void,
    },
    buffer?: ArrayBuffer,
    offset?: number
}

interface UUID {
    v1: (options: v1) => string;
    v4: (options: v4) => string;
    parse: (id: string, buffer?: ArrayBuffer, offset?: number) => ArrayBuffer;
    unparse: (id: string, buffer?: ArrayBuffer, offset?: number) => string;
    noConflict: () => void;
}

export const uuid: UUID;
