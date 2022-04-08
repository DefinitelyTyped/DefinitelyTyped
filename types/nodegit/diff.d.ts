import { Blob } from './blob';
import { Repository } from './repository';
import { Tree } from './tree';
import { Strarray } from './str-array';
import { Index } from './index_';
import { DiffDelta } from './diff-delta';
import { DiffPerfdata } from './diff-perf-data';
import { DiffOptions } from './diff-options';
import { Buf } from './buf';
import { ConvenientPatch } from './convenient-patch';
import { DiffStats } from './diff-stats';

export interface DiffFindOptions {
    version?: number;
    flags?: number;
    renameThreshold?: number;
    renameFromRewriteThreshold?: number;
    copyThreshold?: number;
    breakRewriteThreshold?: number;
    renameLimit?: number;
}

export namespace Diff {
    const enum DELTA {
        UNMODIFIED = 0,
        ADDED = 1,
        DELETED = 2,
        MODIFIED = 3,
        RENAMED = 4,
        COPIED = 5,
        IGNORED = 6,
        UNTRACKED = 7,
        TYPECHANGE = 8,
        UNREADABLE = 9,
        CONFLICTED = 10,
    }

    const enum FIND {
        BY_CONFIG = 0,
        RENAMES = 1,
        RENAMES_FROM_REWRITES = 2,
        COPIES = 4,
        COPIES_FROM_UNMODIFIED = 8,
        REWRITES = 16,
        BREAK_REWRITES = 32,
        AND_BREAK_REWRITES = 48,
        FOR_UNTRACKED = 64,
        ALL = 255,
        IGNORE_LEADING_WHITESPACE = 0,
        IGNORE_WHITESPACE = 4096,
        DONT_IGNORE_WHITESPACE = 8192,
        EXACT_MATCH_ONLY = 16384,
        BREAK_REWRITES_FOR_RENAMES_ONLY = 32768,
        REMOVE_UNMODIFIED = 65536,
    }

    const enum FLAG {
        BINARY = 1,
        NOT_BINARY = 2,
        VALID_ID = 4,
        EXISTS = 8,
    }

    const enum FORMAT {
        PATCH = 1,
        PATCH_HEADER = 2,
        RAW = 3,
        NAME_ONLY = 4,
        NAME_STATUS = 5,
    }

    const enum FORMAT_EMAIL_FLAGS {
        FORMAT_EMAIL_NONE = 0,
        FORMAT_EMAIL_EXCLUDE_SUBJECT_PATCH_MARKER = 1,
    }

    const enum LINE {
        CONTEXT = 32,
        ADDITION = 43,
        DELETION = 45,
        CONTEXT_EOFNL = 61,
        ADD_EOFNL = 62,
        DEL_EOFNL = 60,
        FILE_HDR = 70,
        HUNK_HDR = 72,
        BINARY = 66,
    }

    const enum OPTION {
        NORMAL = 0,
        REVERSE = 1,
        INCLUDE_IGNORED = 2,
        RECURSE_IGNORED_DIRS = 4,
        INCLUDE_UNTRACKED = 8,
        RECURSE_UNTRACKED_DIRS = 16,
        INCLUDE_UNMODIFIED = 32,
        INCLUDE_TYPECHANGE = 64,
        INCLUDE_TYPECHANGE_TREES = 128,
        IGNORE_FILEMODE = 256,
        IGNORE_SUBMODULES = 512,
        IGNORE_CASE = 1024,
        INCLUDE_CASECHANGE = 2048,
        DISABLE_PATHSPEC_MATCH = 4096,
        SKIP_BINARY_CHECK = 8192,
        ENABLE_FAST_UNTRACKED_DIRS = 16384,
        UPDATE_INDEX = 32768,
        INCLUDE_UNREADABLE = 65536,
        INCLUDE_UNREADABLE_AS_UNTRACKED = 131072,
        FORCE_TEXT = 1048576,
        FORCE_BINARY = 2097152,
        IGNORE_WHITESPACE = 4194304,
        IGNORE_WHITESPACE_CHANGE = 8388608,
        IGNORE_WHITESPACE_EOL = 16777216,
        SHOW_UNTRACKED_CONTENT = 33554432,
        SHOW_UNMODIFIED = 67108864,
        PATIENCE = 268435456,
        MINIMAL = 536870912,
        SHOW_BINARY = 1073741824,
    }

    const enum STATS_FORMAT {
        STATS_NONE = 0,
        STATS_FULL = 1,
        STATS_SHORT = 2,
        STATS_NUMBER = 4,
        STATS_INCLUDE_SUMMARY = 8,
    }
}

export class Diff {
    /**
     * Directly run a diff between a blob and a buffer.
     *
     *
     */
    static blobToBuffer(
        oldBlob?: Blob,
        oldAsPath?: string,
        buffer?: string,
        bufferAsPath?: string,
        opts?: DiffOptions,
        fileCb?: Function,
        binaryCb?: Function,
        hunkCb?: Function,
        lineCb?: Function,
    ): Promise<any>;
    static fromBuffer(content: string, contentLen: number): Promise<Diff>;
    static indexToWorkdir(repo: Repository, index?: Index, opts?: DiffOptions): Promise<Diff>;
    static indexToIndex(repo: Repository, oldIndex: Index, newIndex: Index, opts?: DiffOptions): Promise<Diff>;
    static treeToIndex(repo: Repository, oldTree?: Tree, index?: Index, opts?: DiffOptions): Promise<Diff>;
    static treeToTree(repo: Repository, oldTree?: Tree, new_tree?: Tree, opts?: DiffOptions): Promise<Diff>;
    static treeToWorkdir(repo: Repository, oldTree?: Tree, opts?: DiffOptions): Promise<Diff>;
    static treeToWorkdirWithIndex(repo: Repository, oldTree?: Tree, opts?: DiffOptions): Promise<Diff>;

    findSimilar(options?: DiffFindOptions): Promise<number>;
    getDelta(idx: number): DiffDelta;
    getPerfdata(): Promise<DiffPerfdata>;
    numDeltas(): number;
    /**
     * Retrieve patches in this difflist
     *
     *
     */
    patches(): Promise<ConvenientPatch[]>;
    merge(from: Diff): Promise<number>;
    toBuf(format: Diff.FORMAT): Promise<Buf>;

    /**
     * @returns - Structure containg the diff statistics.
     */
    getStats(): Promise<DiffStats>;
}
