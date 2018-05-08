import { Repository } from './repository';
import { CheckoutOptions } from './checkout-options';
import { Reference } from './reference';
import { Oid } from './oid';
import { Tree } from './tree';
import { Commit } from './commit';
import { Index } from './index';

export namespace Checkout {
    const enum NOTIFY {
        NONE = 0,
        CONFLICT = 1,
        DIRTY = 2,
        UPDATED = 4,
        UNTRACKED = 8,
        IGNORED = 16,
        ALL = 65535
    }

    const enum STRATEGY {
        NONE = 0,
        SAFE = 1,
        FORCE = 2,
        RECREATE_MISSING = 4,
        ALLOW_CONFLICTS = 16,
        REMOVE_UNTRACKED = 32,
        REMOVE_IGNORED = 64,
        UPDATE_ONLY = 128,
        DONT_UPDATE_INDEX = 256,
        NO_REFRESH = 512,
        SKIP_UNMERGED = 1024,
        USE_OURS = 2048,
        USE_THEIRS = 4096,
        DISABLE_PATHSPEC_MATCH = 8192,
        SKIP_LOCKED_DIRECTORIES = 262144,
        DONT_OVERWRITE_IGNORED = 524288,
        CONFLICT_STYLE_MERGE = 1048576,
        CONFLICT_STYLE_DIFF3 = 2097152,
        DONT_REMOVE_EXISTING = 4194304,
        DONT_WRITE_INDEX = 8388608,
        UPDATE_SUBMODULES = 65536,
        UPDATE_SUBMODULES_IF_CHANGED = 131072
    }
}

export class Checkout {
    /**
     * Patch head checkout to automatically coerce objects.
     */
    static head(repo: Repository, options?: CheckoutOptions): Promise<void>;
    /**
     * Patch index checkout to automatically coerce objects.
     */
    static index(repo: Repository, The: Index, options?: CheckoutOptions): Promise<void>;

    static initOptions(opts: CheckoutOptions, version: number): number;
    /**
     * Patch tree checkout to automatically coerce objects.
     */
    static tree(repo: Repository, treeish: Oid | Tree | Commit | Reference, options?: CheckoutOptions): Promise<void>;
}
