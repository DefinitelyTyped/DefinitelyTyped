import { Repository } from './repository';
import { Oid } from './oid';
import { Commit } from './commit';

export namespace Revwalk {
    const enum SORT {
        NONE = 0,
        TOPOLOGICAL = 1,
        TIME = 2,
        REVERSE = 4
    }
}

export class Revwalk {
    static create(repo: Repository): Revwalk;

    hide(commitId: Oid): number;
    hideGlob(glob: string): number;
    hideHead(): number;
    hideRef(refname: string): number;
    next(): Promise<Oid>;
    push(id: Oid): number;
    pushGlob(glob: string): number;
    pushHead(): number;
    pushRange(range: string): number;
    pushRef(refname: string): number;
    repository(): Repository;

    reset(): void;

    simplifyFirstParent(): void;
    /**
     * Set the sort order for the revwalk. This function takes variable arguments like revwalk.sorting(NodeGit.RevWalk.Topological, NodeGit.RevWalk.Reverse).
     */
    sorting(...sort: number[]): void;
    fastWalk(maxCount: number): Promise<any>;
    fileHistoryWalk(filePath: string, maxCount: number): Promise<any[]>;
    /**
     * Walk the history from the given oid. The callback is invoked for each commit; When the walk is over, the callback is invoked with (null, null).
     */
    walk(oid: Oid, callback?: Function): Commit;
    /**
     * Walk the history grabbing commits until the checkFn called with the current commit returns false.
     */
    getCommitsUntil(checkFn: Function): Promise<any[]>;
    getCommits(count: number): Promise<Commit[]>;
}
