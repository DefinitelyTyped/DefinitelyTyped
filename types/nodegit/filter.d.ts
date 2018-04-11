import { WriteStream } from 'fs';

import { Repository } from './repository';
import { Blob } from './blob';
import { Buf } from './buf';

export namespace Filter {
    const enum FLAG {
        DEFAULT = 0,
        ALLOW_UNSAFE = 1
    }

    const enum MODE {
        TO_WORKTREE = 0,
        SMUDGE = 0,
        TO_ODB = 1,
        CLEAN = 1
    }
}

export class Filter {
    static listContains(filters: any, name: string): number;
    static listLength(fl: any): number;
    static listNew(repo: Repository, mode: number, options: number): Promise<any>;
    static listStreamBlob(filters: any, blob: Blob, target: WriteStream): number;
    static listStreamData(filters: any, data: Buf, target: WriteStream): number;
    static listStreamFile(filters: any, repo: Repository, path: string, target: WriteStream): number;
    static unregister(name: string): number;

    lookup(name: string): Filter;
    register(name: string, priority: number): number;
    version: number;
    attributes: string;
    stream: Function;
}
