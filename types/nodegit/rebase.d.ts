import { CheckoutOptions } from './checkout-options';
import { AnnotatedCommit } from './annotated-commit';
import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { RebaseOperation } from './rebase-operation';

export interface RebaseOptions {
    version: number;
    quiet: number;
    rewriteNotesRef: string;
    checkoutOptions: CheckoutOptions;
}

export class Rebase {
    static init(repo: Repository, branch: AnnotatedCommit, upstream: AnnotatedCommit, onto: AnnotatedCommit, opts: RebaseOptions): Promise<Rebase>;
    static initOptions(opts: RebaseOptions, version: number): number;
    static open(repo: Repository, opts: RebaseOptions): Promise<Rebase>;

    abort(): number;
    commit(author: Signature, committer: Signature, message_encoding: string, message: string): Oid;
    finish(signature: Signature): number;
    next(): Promise<RebaseOperation>;
    operationByIndex(idx: number): RebaseOperation;
    operationCurrent(): number;
    operationEntrycount(): number;
}
