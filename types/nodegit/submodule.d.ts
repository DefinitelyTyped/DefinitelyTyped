import { Repository } from './repository';
import { Buf } from './buf';
import { Oid } from './oid';
import { SubmoduleUpdateOptions } from './submodule-update-options';

export namespace Submodule {
    const enum IGNORE {
        UNSPECIFIED = -1,
        NONE = 1,
        UNTRACKED = 2,
        DIRTY = 3,
        ALL = 4,
    }

    const enum RECURSE {
        NO = 0,
        YES = 1,
        ONDEMAND = 2,
    }

    const enum STATUS {
        IN_HEAD = 1,
        IN_INDEX = 2,
        IN_CONFIG = 4,
        IN_WD = 8,
        INDEX_ADDED = 16,
        INDEX_DELETED = 32,
        INDEX_MODIFIED = 64,
        WD_UNINITIALIZED = 128,
        WD_ADDED = 256,
        WD_DELETED = 512,
        WD_MODIFIED = 1024,
        WD_INDEX_MODIFIED = 2048,
        WD_WD_MODIFIED = 4096,
        WD_UNTRACKED = 8192,
    }

    const enum UPDATE {
        CHECKOUT = 1,
        REBASE = 2,
        MERGE = 3,
        NONE = 4,
        DEFAULT = 0,
    }
}

export class Submodule {
    static addSetup(repo: Repository, url: string, path: string, useGitLink: number): Promise<Submodule>;
    static foreach(repo: Repository, callback?: Function): Promise<number>;
    static lookup(repo: Repository, name: string): Promise<Submodule>;
    static resolveUrl(repo: Repository, url: string): Promise<Buf>;
    static setBranch(repo: Repository, name: string, branch: string): number;
    static setFetchRecurseSubmodules(repo: Repository, name: string, fetchRecurseSubmodules: number): number;
    static setIgnore(repo: Repository, name: string, ignore: number): Promise<number>;
    static setUpdate(repo: Repository, name: string, update: number): Promise<number>;
    static setUrl(repo: Repository, name: string, url: string): Promise<number>;
    static status(repo: Repository, name: string, ignore: number): Promise<number>;
    static updateInitOptions(opts: SubmoduleUpdateOptions, version: number): number;

    addFinalize(): Promise<number>;
    addToIndex(writeIndex: number): Promise<number>;
    branch(): string;
    fetchRecurseSubmodules(): number;

    free(): void;
    headId(): Oid;
    ignore(): number;
    indexId(): Oid;
    init(overwrite: number): Promise<number>;
    location(): Promise<number>;
    name(): string;
    open(): Promise<Repository>;
    owner(): Repository;
    path(): string;
    reload(force: number): number;
    repoInit(useGitLink: number): Promise<Repository>;
    sync(): Promise<number>;
    /**
     * Updates a submodule
     *
     *
     */
    update(init: number, options?: SubmoduleUpdateOptions): Promise<number>;
    updateStrategy(): number;
    url(): string;
    wdId(): Oid;
}
