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
    static addFetch(repo: Repository, remote: string, refspec: string): number;
    static addPush(repo: Repository, remote: string, refspec: string): number;
    static create(repo: Repository, name: string, url: string): Remote;
    static createAnonymous(repo: Repository, url: string): Promise<Remote>;
    static createWithFetchspec(repo: Repository, name: string, url: string, fetch: string): Promise<Remote>;
    static delete(repo: Repository, name: string): Promise<number>;
    static initCallbacks(opts: RemoteCallbacks, version: number): number;
    static isValidName(remoteName: string): boolean;
    static list(repo: Repository): Promise<any[]>;
    static lookup(repo: Repository, name: string | Remote, callback?: Function): Promise<Remote>;
    static setAutotag(repo: Repository, remote: string, value: number): number;
    static setPushurl(repo: Repository, remote: string, url: string): number;
    static setUrl(repo: Repository, remote: string, url: string): number;

    autotag(): number;
    connect(direction: Enums.DIRECTION, callbacks: RemoteCallbacks, callback?: Function): Promise<number>;
    connected(): number;
    defaultBranch(): Promise<Buf>;
    disconnect(): Promise<void>;
    download(refSpecs: any[], opts?: FetchOptions, callback?: Function): Promise<number>;
    dup(): Promise<Remote>;
    fetch(refSpecs: any[], opts: FetchOptions, message: string, callback?: Function): Promise<number>;

    free(): void;
    getFetchRefspecs(): Promise<any[]>;
    getPushRefspecs(): Promise<any[]>;
    getRefspec(n: number): Refspec;
    name(): string;
    owner(): Repository;
    prune(callbacks: RemoteCallbacks): number;
    pruneRefs(): number;
    push(refSpecs: any[], options?: PushOptions, callback?: Function): Promise<number>;
    pushurl(): string;
    refspecCount(): number;
    stats(): TransferProgress;

    stop(): void;
    updateTips(callbacks: RemoteCallbacks, updateFetchhead: number, downloadTags: number, reflogMessage: string): number;
    upload(refspecs: Strarray, opts?: PushOptions): number;
    url(): string;
    /**
     * Lists advertised references from a remote. You must connect to the remote before using referenceList.
     */
    referenceList(): Promise<any[]>;
}
