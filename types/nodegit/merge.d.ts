import { Repository } from './repository';
import { Oid } from './oid';
import { Tree } from './tree';
import { Commit } from './commit';
import { Index } from './index';
import { AnnotatedCommit } from './annotated-commit';
import { CheckoutOptions } from './checkout-options';
import { Oidarray } from './oid-array';
import { MergeOptions } from './merge-options';
import { MergeFileInput } from './merge-file-input';

export namespace Merge {
    const enum ANALYSIS {
        NONE = 0,
        NORMAL = 1,
        UP_TO_DATE = 2,
        FASTFORWARD = 4,
        UNBORN = 8
    }

    const enum FILE_FAVOR {
        NORMAL = 0,
        OURS = 1,
        THEIRS = 2,
        UNION = 3
    }

    const enum FILE_FLAGS {
        FILE_DEFAULT = 0,
        FILE_STYLE_MERGE = 1,
        FILE_STYLE_DIFF3 = 2,
        FILE_SIMPLIFY_ALNUM = 4,
        FILE_IGNORE_WHITESPACE = 8,
        FILE_IGNORE_WHITESPACE_CHANGE = 16,
        FILE_IGNORE_WHITESPACE_EOL = 32,
        FILE_DIFF_PATIENCE = 64,
        FILE_DIFF_MINIMAL = 128
    }

    const enum PREFERENCE {
        NONE = 0,
        NO_FASTFORWARD = 1,
        FASTFORWARD_ONLY = 2
    }

    const enum TREE_FLAG {
        TREE_FIND_RENAMES = 1
    }
}

export class Merge {
    static merge(repo: Repository, theirHead: AnnotatedCommit, mergeOpts?: MergeOptions, checkoutOpts?: CheckoutOptions): any;
    static base(repo: Repository, one: Oid, two: Oid): Promise<Oid>;
    static bases(repo: Repository, one: Oid, two: Oid): Promise<Oidarray>;
    static commits(repo: Repository, ourCommit: Commit, theirCommit: Commit, options?: MergeOptions): any;
    static fileInitInput(opts: MergeFileInput, version: number): number;
    static initOptions(opts: MergeOptions, version: number): number;
    static trees(repo: Repository, ancestorTree: Tree, ourTree: Tree, theirTree: Tree, opts?: MergeOptions): Promise<Index>;
}
