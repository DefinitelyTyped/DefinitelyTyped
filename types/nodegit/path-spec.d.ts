import { DiffDelta } from './diff-delta';
import { Tree } from './tree';
import { Diff } from './diff';
import { Repository } from './repository';
import { Index } from './index';
import { Strarray } from './str-array';

export namespace Pathspec {
    const enum FLAG {
        DEFAULT = 0,
        IGNORE_CASE = 1,
        USE_CASE = 2,
        NO_GLOB = 4,
        NO_MATCH_ERROR = 8,
        FIND_FAILURES = 16,
        FAILURES_ONLY = 32
    }
}

export class Pathspec {
    static matchListDiffEntry(m: any, pos: number): DiffDelta;
    static matchListEntry(m: any, pos: number): string;
    static matchListEntrycount(m: any): number;
    static matchListFailedEntry(m: any, pos: number): string;
    static matchListFailedEntrycount(m: any): number;
    static create(pathspec: Strarray): Pathspec;

    free(): void;
    matchDiff(diff: Diff, flags: number): Promise<any>;
    matchIndex(index: Index, flags: number): Promise<any>;
    matchTree(tree: Tree, flags: number): Promise<any>;
    matchWorkdir(repo: Repository, flags: number): Promise<any>;
    matchesPath(flags: number, path: string): number;
}
