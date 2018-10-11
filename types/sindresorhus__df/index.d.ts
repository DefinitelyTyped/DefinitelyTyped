// Type definitions for sindresorhus__df 2.10
// Project: https://github.com/sindresorhus/df (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Matt Thompson <https://github.com/whatknight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
export interface SpaceInfo {
    filesystem: string;
    size: number;
    used: number;
    available: number;
    capacity: number;
    mountpoint: string;
}

interface Df {
    (): Promise<SpaceInfo[]>;
    fs: (filesystem: string) => Promise<SpaceInfo>;
    file: (file: string) => Promise<SpaceInfo>;
}

declare const df: Df;

export default df;
