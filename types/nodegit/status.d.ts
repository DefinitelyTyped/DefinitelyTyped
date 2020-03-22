import { Repository } from './repository';
import { StatusList } from './status-list';
import { StatusOptions } from './status-options';
import { StatusEntry } from './status-entry';

export namespace Status {
    const enum STATUS {
        CURRENT = 0,
        INDEX_NEW = 1,
        INDEX_MODIFIED = 2,
        INDEX_DELETED = 4,
        INDEX_RENAMED = 8,
        INDEX_TYPECHANGE = 16,
        WT_NEW = 128,
        WT_MODIFIED = 256,
        WT_DELETED = 512,
        WT_TYPECHANGE = 1024,
        WT_RENAMED = 2048,
        WT_UNREADABLE = 4096,
        IGNORED = 16384,
        CONFLICTED = 32768,
    }

    const enum OPT {
        INCLUDE_UNTRACKED = 1,
        INCLUDE_IGNORED = 2,
        INCLUDE_UNMODIFIED = 4,
        EXCLUDE_SUBMODULES = 8,
        RECURSE_UNTRACKED_DIRS = 16,
        DISABLE_PATHSPEC_MATCH = 32,
        RECURSE_IGNORED_DIRS = 64,
        RENAMES_HEAD_TO_INDEX = 128,
        RENAMES_INDEX_TO_WORKDIR = 256,
        SORT_CASE_SENSITIVELY = 512,
        SORT_CASE_INSENSITIVELY = 1024,
        RENAMES_FROM_REWRITES = 2048,
        NO_REFRESH = 4096,
        UPDATE_INDEX = 8192,
        INCLUDE_UNREADABLE = 16384,
        INCLUDE_UNREADABLE_AS_UNTRACKED = 32768,
    }

    const enum SHOW {
        INDEX_AND_WORKDIR = 0,
        INDEX_ONLY = 1,
        WORKDIR_ONLY = 2,
    }
}

export class Status {
    static byIndex(statuslist: StatusList, idx: number): StatusEntry;
    static file(repo: Repository, path: string): number;
    static foreach(repo: Repository, callback?: Function): Promise<number>;
    static foreachExt(repo: Repository, opts?: StatusOptions, callback?: Function): Promise<number>;
    static shouldIgnore(ignored: number, repo: Repository, path: string): number;
}
