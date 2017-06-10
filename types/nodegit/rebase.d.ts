import { CheckoutOptions } from './checkout-options';
import { AnnotatedCommit } from './annotated-commit';
import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { RebaseOperation } from './rebase-operation';
import { Index } from './index';

export interface RebaseOptions {
    version: number;
    quiet: number;
    rewriteNotesRef: string;
    checkoutOptions: CheckoutOptions;
}

export class Rebase {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {AnnotatedCommit} branch
     * @param {AnnotatedCommit} upstream
     * @param {AnnotatedCommit} onto
     * @param {RebaseOptions} opts
     * @returns {Promise<Rebase>}
     *
     * @memberof Rebase
     */
    static init(repo: Repository, branch: AnnotatedCommit, upstream: AnnotatedCommit, onto: AnnotatedCommit, opts: RebaseOptions): Promise<Rebase>;
    /**
     *
     *
     * @static
     * @param {RebaseOptions} opts
     * @param {number} version
     * @returns {number}
     *
     * @memberof Rebase
     */
    static initOptions(opts: RebaseOptions, version: number): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {RebaseOptions} opts
     * @returns {Promise<Rebase>}
     *
     * @memberof Rebase
     */
    static open(repo: Repository, opts: RebaseOptions): Promise<Rebase>;

    /**
     *
     *
     * @returns {number}
     *
     * @memberof Rebase
     */
    abort(): number;
    /**
     *
     *
     * @param {Signature} author
     * @param {Signature} committer
     * @param {string} messageEncoding
     * @param {string} message
     * @returns {Oid}
     *
     * @memberof Rebase
     */
    commit(author: Signature, committer: Signature, messageEncoding: string, message: string): Oid;
    /**
     *
     *
     * @param {Signature} signature
     * @returns {number}
     *
     * @memberof Rebase
     */
    finish(signature: Signature): number;
    /**
     *
     *
     * @param {Index} index
     * @returns {number}
     *
     * @memberof Rebase
     */
    inmemoryIndex(index: Index): number;
    /**
     *
     *
     * @returns {Promise<RebaseOperation>}
     *
     * @memberof Rebase
     */
    next(): Promise<RebaseOperation>;
    /**
     *
     *
     * @param {number} idx
     * @returns {RebaseOperation}
     *
     * @memberof Rebase
     */
    operationByIndex(idx: number): RebaseOperation;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Rebase
     */
    operationCurrent(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Rebase
     */
    operationEntrycount(): number;
}
