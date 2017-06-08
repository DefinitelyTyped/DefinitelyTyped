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

    hide(commit_id: Oid): number;
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
    sorting(sort: number): any;
    fastWalk(max_count: number): Promise<any>;
    fileHistoryWalk(filePath: string, max_count: number): Promise<any[]>;
    walk(oid: Oid, callback: Function): Commit;
    getCommitsUntil(checkFn: Function): Promise<any[]>;
    getCommits(count: number): Promise<Commit[]>;
}
