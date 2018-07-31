/// <reference types="node" />
import { CommonFileSystemMethod } from './common-types'
import { Dictionary } from './concord'
declare class Storage {
    count: number;
    data: Dictionary<any>;
    duration: number;
    interval: NodeJS.Timer | null;
    levels: string[][];
    needTickCheck: boolean;
    nextTick: number | null;
    passive: boolean;
    running: Dictionary<Function[]>;

    constructor(duration: number);

    ensureTick(): void;

    finished(name: string, err: NodeJS.ErrnoException | null, result: any): void;

    finishedSync(name: string, err: NodeJS.ErrnoException | null, result?: any): void;

    provide(name: string, provider: CommonFileSystemMethod, callback: (...args: any[]) => any): any;

    provideSync(name: string, provider: (name: string) => any): any;

    tick(): true | undefined;

    checkTicks(): void;

    purge(what?: string | string[]): void;
}

export default Storage;
