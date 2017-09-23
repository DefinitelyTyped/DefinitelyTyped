import { Repository } from './repository';
import { RemoteCallbacks } from './remote-callbacks';
import { Strarray } from './str-array';
import { FetchOptions } from './fetch-options';
import { Buf } from './buf';
import { Enums } from './enums';
import { TransferProgress } from './transfer-progress';
import { PushOptions } from './push-options';
import { Refspec } from './ref-spec';

export namespace Remote {
    const enum AUTOTAG_OPTION {
        DOWNLOAD_TAGS_UNSPECIFIED = 0,
        DOWNLOAD_TAGS_AUTO = 1,
        DOWNLOAD_TAGS_NONE = 2,
        DOWNLOAD_TAGS_ALL = 3
    }

    const enum COMPLETION_TYPE {
        COMPLETION_DOWNLOAD = 0,
        COMPLETION_INDEXING = 1,
        COMPLETION_ERROR = 2
    }
}

export class Remote {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} remote
     * @param {string} refspec
     * @returns {number}
     *
     * @memberof Remote
     */
    static addFetch(repo: Repository, remote: string, refspec: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} remote
     * @param {string} refspec
     * @returns {number}
     *
     * @memberof Remote
     */
    static addPush(repo: Repository, remote: string, refspec: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} url
     * @returns {Remote}
     *
     * @memberof Remote
     */
    static create(repo: Repository, name: string, url: string): Remote;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} url
     * @returns {Promise<Remote>}
     *
     * @memberof Remote
     */
    static createAnonymous(repo: Repository, url: string): Promise<Remote>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} url
     * @param {string} fetch
     * @returns {Promise<Remote>}
     *
     * @memberof Remote
     */
    static createWithFetchspec(repo: Repository, name: string, url: string, fetch: string): Promise<Remote>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @returns {Promise<number>}
     *
     * @memberof Remote
     */
    static delete(repo: Repository, name: string): Promise<number>;
    /**
     *
     *
     * @static
     * @param {RemoteCallbacks} opts
     * @param {number} version
     * @returns {number}
     *
     * @memberof Remote
     */
    static initCallbacks(opts: RemoteCallbacks, version: number): number;
    /**
     *
     *
     * @static
     * @param {string} remoteName
     * @returns {number}
     *
     * @memberof Remote
     */
    static isValidName(remoteName: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Promise<any[]>}
     *
     * @memberof Remote
     */
    static list(repo: Repository): Promise<any[]>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Remote)} name
     * @param {Function} callback
     * @returns {Promise<Remote>}
     *
     * @memberof Remote
     */
    static lookup(repo: Repository, name: string | Remote, callback: Function): Promise<Remote>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} remote
     * @param {number} value
     * @returns {number}
     *
     * @memberof Remote
     */
    static setAutotag(repo: Repository, remote: string, value: number): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} remote
     * @param {string} url
     * @returns {number}
     *
     * @memberof Remote
     */
    static setPushurl(repo: Repository, remote: string, url: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} remote
     * @param {string} url
     * @returns {number}
     *
     * @memberof Remote
     */
    static setUrl(repo: Repository, remote: string, url: string): number;

    /**
     *
     *
     * @returns {number}
     *
     * @memberof Remote
     */
    autotag(): number;
    /**
     *
     *
     * @param {Enums.DIRECTION} direction
     * @param {RemoteCallbacks} callbacks
     * @param {Function} callback
     * @returns {Promise<number>}
     *
     * @memberof Remote
     */
    connect(direction: Enums.DIRECTION, callbacks: RemoteCallbacks, callback: Function): Promise<number>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Remote
     */
    connected(): number;
    /**
     *
     *
     * @returns {Promise<Buf>}
     *
     * @memberof Remote
     */
    defaultBranch(): Promise<Buf>;
    /**
     *
     *
     * @returns {Promise<void>}
     *
     * @memberof Remote
     */
    disconnect(): Promise<void>;
    /**
     *
     *
     * @param {any[]} refSpecs
     * @param {FetchOptions} opts
     * @param {Function} callback
     * @returns {Promise<number>}
     *
     * @memberof Remote
     */
    download(refSpecs: any[], opts: FetchOptions, callback: Function): Promise<number>;
    dup(): Promise<Remote>;
    /**
     *
     *
     * @param {any[]} refSpecs
     * @param {FetchOptions} opts
     * @param {string} message
     * @param {Function} callback
     * @returns {Promise<number>}
     *
     * @memberof Remote
     */
    fetch(refSpecs: any[], opts: FetchOptions, message: string, callback: Function): Promise<number>;
    /**
     *
     *
     *
     * @memberof Remote
     */
    free(): void;
    /**
     *
     *
     * @returns {Promise<any[]>}
     *
     * @memberof Remote
     */
    getFetchRefspecs(): Promise<any[]>;
    /**
     *
     *
     * @returns {Promise<any[]>}
     *
     * @memberof Remote
     */
    getPushRefspecs(): Promise<any[]>;
    /**
     *
     *
     * @param {number} n
     * @returns {Refspec}
     *
     * @memberof Remote
     */
    getRefspec(n: number): Refspec;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Remote
     */
    name(): string;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Remote
     */
    owner(): Repository;
    /**
     *
     *
     * @param {RemoteCallbacks} callbacks
     * @returns {number}
     *
     * @memberof Remote
     */
    prune(callbacks: RemoteCallbacks): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Remote
     */
    pruneRefs(): number;
    /**
     *
     *
     * @param {any[]} refSpecs
     * @param {PushOptions} options
     * @param {Function} callback
     * @returns {Promise<number>}
     *
     * @memberof Remote
     */
    push(refSpecs: any[], options: PushOptions, callback: Function): Promise<number>;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Remote
     */
    pushurl(): string;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Remote
     */
    refspecCount(): number;
    /**
     *
     *
     * @returns {TransferProgress}
     *
     * @memberof Remote
     */
    stats(): TransferProgress;
    /**
     *
     *
     *
     * @memberof Remote
     */
    stop(): void;
    /**
     *
     *
     * @param {RemoteCallbacks} callbacks
     * @param {number} updateFetchhead
     * @param {number} downloadTags
     * @param {string} reflogMessage
     * @returns {number}
     *
     * @memberof Remote
     */
    updateTips(callbacks: RemoteCallbacks, updateFetchhead: number, downloadTags: number, reflogMessage: string): number;
    /**
     *
     *
     * @param {Strarray} refspecs
     * @param {PushOptions} opts
     * @returns {number}
     *
     * @memberof Remote
     */
    upload(refspecs: Strarray, opts: PushOptions): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Remote
     */
    url(): string;
    /**
     * Lists advertised references from a remote. You must connect to the remote before using referenceList.
     *
     * @returns {Promise<any[]>}
     *
     * @memberof Remote
     */
    referenceList(): Promise<any[]>;
}
