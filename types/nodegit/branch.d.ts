import { Repository } from './repository';
import { Reference } from './reference';
import { Commit } from './commit';
import { AnnotatedCommit } from './annotated-commit';

export namespace Branch {
    enum BRANCH {
        LOCAL = 1,
        REMOTE = 2,
        ALL = 3
    }
}

export class Branch {
    static create(repo: Repository, branch_name: string, target: Commit, force: number): Promise<Reference>;
    static createFromAnnotated(repository: Repository, branch_name: string, commit: AnnotatedCommit, force: number): Reference;
    static delete(branch: Reference): number;
    static isHead(branch: Reference): number;
    static iteratorNew(repo: Repository, list_flags: number): Promise<any>;
    static lookup(repo: Repository, branch_name: string, branch_type: number): Promise<Reference>;
    static move(branch: Reference, new_branch_name: string, force: number): Promise<Reference>;
    static name(ref: Reference): Promise<string>;
    static setUpstream(branch: Reference, upstream_name: string): Promise<number>;
    static upstream(branch: Reference): Promise<Reference>;
}
