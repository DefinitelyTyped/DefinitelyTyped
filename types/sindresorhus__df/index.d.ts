// Type definitions for sindresorhus__df 2.10
// Project: https://github.com/sindresorhus/df
// Definitions by: Matt Thompson <https://github.com/whatknight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function df(): Promise<df.SpaceInfo[]>;
declare namespace df {
    function fs(filesystem: string): Promise<SpaceInfo>;
    function file(file: string): Promise<SpaceInfo>;
    interface SpaceInfo {
        filesystem: string;
        size: number;
        used: number;
        available: number;
        capacity: number;
        mountpoint: string;
    }
}

export = df;
