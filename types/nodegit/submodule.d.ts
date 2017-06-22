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
        ALL = 4
    }

    const enum RECURSE {
        NO = 0,
        YES = 1,
        ONDEMAND = 2
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
        WD_UNTRACKED = 8192
    }

    const enum UPDATE {
        CHECKOUT = 1,
        REBASE = 2,
        MERGE = 3,
        NONE = 4,
        DEFAULT = 0
    }
}

export class Submodule {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} url
     * @param {string} path
     * @param {number} useGitLink
     * @returns {Promise<Submodule>}
     *
     * @memberof Submodule
     */
    static addSetup(repo: Repository, url: string, path: string, useGitLink: number): Promise<Submodule>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Function} callback
     * @param {*} payload
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    static foreach(repo: Repository, callback: Function, payload: any): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @returns {Promise<Submodule>}
     *
     * @memberof Submodule
     */
    static lookup(repo: Repository, name: string): Promise<Submodule>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} url
     * @returns {Promise<Buf>}
     *
     * @memberof Submodule
     */
    static resolveUrl(repo: Repository, url: string): Promise<Buf>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} branch
     * @returns {number}
     *
     * @memberof Submodule
     */
    static setBranch(repo: Repository, name: string, branch: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {number} fetchRecurseSubmodules
     * @returns {number}
     *
     * @memberof Submodule
     */
    static setFetchRecurseSubmodules(repo: Repository, name: string, fetchRecurseSubmodules: number): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {number} ignore
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    static setIgnore(repo: Repository, name: string, ignore: number): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {number} update
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    static setUpdate(repo: Repository, name: string, update: number): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} url
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    static setUrl(repo: Repository, name: string, url: string): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {number} ignore
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    static status(repo: Repository, name: string, ignore: number): Promise<number>;
    /**
     *
     *
     * @static
     * @param {SubmoduleUpdateOptions} opts
     * @param {number} version
     * @returns {number}
     *
     * @memberof Submodule
     */
    static updateInitOptions(opts: SubmoduleUpdateOptions, version: number): number;

    /**
     *
     *
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    addFinalize(): Promise<number>;
    /**
     *
     *
     * @param {number} writeIndex
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    addToIndex(writeIndex: number): Promise<number>;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Submodule
     */
    branch(): string;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Submodule
     */
    fetchRecurseSubmodules(): number;
    /**
     *
     *
     *
     * @memberof Submodule
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Submodule
     */
    headId(): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Submodule
     */
    ignore(): number;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Submodule
     */
    indexId(): Oid;
    /**
     *
     *
     * @param {number} overwrite
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    init(overwrite: number): Promise<number>;
    /**
     *
     *
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    location(): Promise<number>;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Submodule
     */
    name(): string;
    /**
     *
     *
     * @returns {Promise<Repository>}
     *
     * @memberof Submodule
     */
    open(): Promise<Repository>;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Submodule
     */
    owner(): Repository;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Submodule
     */
    path(): string;
    /**
     *
     *
     * @param {number} force
     * @returns {number}
     *
     * @memberof Submodule
     */
    reload(force: number): number;
    /**
     *
     *
     * @param {number} useGitLink
     * @returns {Promise<Repository>}
     *
     * @memberof Submodule
     */
    repoInit(useGitLink: number): Promise<Repository>;
    /**
     *
     *
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    sync(): Promise<number>;
    /**
     * Updates a submodule
     *
     * @param {number} init
     * @param {SubmoduleUpdateOptions} options
     * @returns {Promise<number>}
     *
     * @memberof Submodule
     */
    update(init: number, options: SubmoduleUpdateOptions): Promise<number>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Submodule
     */
    updateStrategy(): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Submodule
     */
    url(): string;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Submodule
     */
    wdId(): Oid;
}
