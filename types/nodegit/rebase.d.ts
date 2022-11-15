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
    static init(
        repo: Repository,
        branch: AnnotatedCommit | undefined | null,
        upstream?: AnnotatedCommit | null,
        onto?: AnnotatedCommit | null,
        opts?: RebaseOptions | null,
    ): Promise<Rebase>;
    static initOptions(opts: RebaseOptions, version: number): number;
    static open(repo: Repository, opts?: RebaseOptions): Promise<Rebase>;

    abort(): number;
    commit(
        author: Signature | undefined | null,
        committer: Signature,
        messageEncoding?: string | null,
        message?: string | null,
    ): Promise<Oid>;
    finish(signature?: Signature | null): number;
    inmemoryIndex(index: Index): number;
    next(): Promise<RebaseOperation>;
    operationByIndex(idx: number): RebaseOperation;
    operationCurrent(): number;
    operationEntrycount(): number;
}
