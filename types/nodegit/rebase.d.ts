import { AnnotatedCommit } from "./annotated-commit";
import { CheckoutOptions } from "./checkout-options";
import { Index, MergeOptions, Tree } from "./index";
import { Oid } from "./oid";
import { RebaseOperation } from "./rebase-operation";
import { Repository } from "./repository";
import { Signature } from "./signature";

export interface RebaseOptions<PayloadType = any> {
    version?: number | null;
    quiet?: number | null;
    inmemory?: number | null;
    rewriteNotesRef?: string | null;
    mergeOptions?: MergeOptions | null;
    checkoutOptions?: CheckoutOptions | null;
    commitCreateCb?:
        | ((
            author: Signature,
            committer: Signature,
            message_encoding: string,
            message: string,
            tree: Tree,
            parent_count: number,
            parents: Oid[],
            payload?: PayloadType,
        ) => Oid)
        | null;
    payload?: PayloadType | null;
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
