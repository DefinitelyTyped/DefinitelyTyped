import { Repository } from './repository';
import { Reference } from './reference';
import { Commit } from './commit';
import { AnnotatedCommit } from './annotated-commit';

export namespace Branch {
    const enum BRANCH {
        LOCAL = 1,
        REMOTE = 2,
        ALL = 3,
    }
}

export class Branch {
    static create(repo: Repository, branchName: string, target: Commit, force: number): Promise<Reference>;
    static createFromAnnotated(
        repository: Repository,
        branchName: string,
        commit: AnnotatedCommit,
        force: number,
    ): Reference;
    static delete(branch: Reference): number;
    static isHead(branch: Reference): number;
    static iteratorNew(repo: Repository, listFlags: number): Promise<any>;
    static lookup(repo: Repository, branchName: string, branchType: Branch.BRANCH): Promise<Reference>;
    static move(branch: Reference, newBranchName: string, force: number): Promise<Reference>;
    static name(ref: Reference): Promise<string>;
    static setUpstream(branch: Reference, upstreamName: string | null): Promise<number>;
    static upstream(branch: Reference): Promise<Reference>;
}
