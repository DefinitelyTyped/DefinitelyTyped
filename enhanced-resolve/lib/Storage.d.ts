/// <reference types="node" />
import { CommonFileSystemMethod } from './common-types';

declare class Storage {
    duration: number;
    running: Object;
    data: Object;
    levels: string[][];
    count: number;
    interval: NodeJS.Timer | null;
    needTickCheck: boolean;
    nextTick: number | null;
    passive: boolean;

    constructor(duration: number);

    ensureTick(): void;

    finished(name: string): void;

    provide(name: string, provider: CommonFileSystemMethod, callback: (...args: any[]) => any): any;

    tick(): true | undefined;

    checkTicks(): void;

    purge(what?: string | string[]): void;
}

export default Storage;
