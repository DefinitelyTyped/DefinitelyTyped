import { Repository } from './repository';
import { Reference } from './reference';
import { Commit } from './commit';
import { AnnotatedCommit } from './annotated-commit';

export namespace Branch {
    const enum BRANCH {
        LOCAL = 1,
        REMOTE = 2,
        ALL = 3
    }
}

export class Branch {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} branchName
     * @param {Commit} target
     * @param {number} force
     * @returns {Promise<Reference>}
     *
     * @memberof Branch
     */
    static create(repo: Repository, branchName: string, target: Commit, force: number): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Repository} repository
     * @param {string} branchName
     * @param {AnnotatedCommit} commit
     * @param {number} force
     * @returns {Reference}
     *
     * @memberof Branch
     */
    static createFromAnnotated(repository: Repository, branchName: string, commit: AnnotatedCommit, force: number): Reference;
    /**
     *
     *
     * @static
     * @param {Reference} branch
     * @returns {number}
     *
     * @memberof Branch
     */
    static delete(branch: Reference): number;
    /**
     *
     *
     * @static
     * @param {Reference} branch
     * @returns {number}
     *
     * @memberof Branch
     */
    static isHead(branch: Reference): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {number} listFlags
     * @returns {Promise<any>}
     *
     * @memberof Branch
     */
    static iteratorNew(repo: Repository, listFlags: number): Promise<any>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} branchName
     * @param {Branch.BRANCH} branchType
     * @returns {Promise<Reference>}
     *
     * @memberof Branch
     */
    static lookup(repo: Repository, branchName: string, branchType: Branch.BRANCH): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Reference} branch
     * @param {string} newBranchName
     * @param {number} force
     * @returns {Promise<Reference>}
     *
     * @memberof Branch
     */
    static move(branch: Reference, newBranchName: string, force: number): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Reference} ref
     * @returns {Promise<string>}
     *
     * @memberof Branch
     */
    static name(ref: Reference): Promise<string>;
    /**
     *
     *
     * @static
     * @param {Reference} branch
     * @param {string} upstreamName
     * @returns {Promise<number>}
     *
     * @memberof Branch
     */
    static setUpstream(branch: Reference, upstreamName: string): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Reference} branch
     * @returns {Promise<Reference>}
     *
     * @memberof Branch
     */
    static upstream(branch: Reference): Promise<Reference>;
}
