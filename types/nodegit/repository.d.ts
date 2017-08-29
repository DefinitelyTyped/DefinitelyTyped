import { Oid } from './oid';
import { Buf } from './buf';
import { Reference } from './reference';
import { Odb } from './odb';
import { Object } from './object';
import { Index } from './index_';
import { Commit } from './commit';
import { Blob } from './blob';
import { Tree } from './tree';
import { Signature } from './signature';
import { AnnotatedCommit } from './annotated-commit';
import { FetchOptions } from './fetch-options';
import { CheckoutOptions } from './checkout-options';
import { Remote } from './remote';
import { Tag } from './tag';
import { Config } from './config';
import { Merge } from './merge';
import { MergeOptions } from './merge-options';
import { Refdb } from './ref-db';
import { Revwalk } from './rev-walk';

export interface RepositoryInitOptions {
    description: string;
    flags: number;
    initialHead: string;
    mode: number;
    originUrl: string;
    templatePath: string;
    version: number;
    workdirPath: string;
}

export class Repository {
    /**
     * Creates a branch with the passed in name pointing to the commit
     *
     * @static
     * @param {string} startPath
     * @param {number} acrossFs
     * @param {string} ceilingDirs
     * @returns {Promise<string>}
     *
     * @memberof Repository
     */
    static discover(startPath: string, acrossFs: number, ceilingDirs: string): Promise<Buf>;
    /**
     *
     *
     * @static
     * @param {string} path
     * @param {boolean} [isBare]
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static init(path: string, isBare?: boolean): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} repoPath
     * @param {RepositoryInitOptions} [options]
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static initExt(repoPath: string, options?: RepositoryInitOptions): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} path
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static open(path: string): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} barePath
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static openBare(barePath: string): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {string} path
     * @param {number} [flags]
     * @param {string} [ceilingDirs]
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static openExt(path: string, flags?: number, ceilingDirs?: string): Promise<Repository>;
    /**
     *
     *
     * @static
     * @param {Odb} odb
     * @returns {Promise<Repository>}
     *
     * @memberof Repository
     */
    static wrapOdb(odb: Odb): Promise<Repository>;

    /**
     *
     *
     *
     * @memberof Repository
     */
    cleanup(): void;
    /**
     *
     *
     * @returns {Promise<Config>}
     *
     * @memberof Repository
     */
    config(): Promise<Config>;
    /**
     *
     *
     * @returns {Promise<Config>}
     *
     * @memberof Repository
     */
    configSnapshot(): Promise<Config>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    detachHead(): number;
    /**
     *
     *
     * @param {Function} callback
     * @returns {Promise<any>}
     *
     * @memberof Repository
     */
    fetchheadForeach(callback: Function): Promise<any>;
    /**
     *
     *
     *
     * @memberof Repository
     */
    free(): void;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Repository
     */
    getNamespace(): string;
    /**
     *
     *
     * @returns {Promise<Reference>}
     *
     * @memberof Repository
     */
    head(): Promise<Reference>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    headDetached(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    headUnborn(): number;
    /**
     *
     *
     * @returns {Promise<Index>}
     *
     * @memberof Repository
     */
    index(): Promise<Index>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    isBare(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    isEmpty(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    isShallow(): number;
    /**
     *
     *
     * @param {Function} callback
     * @returns {Promise<any>}
     *
     * @memberof Repository
     */
    mergeheadForeach(callback: Function): Promise<any>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    messageRemove(): number;
    /**
     *
     *
     * @returns {Promise<Odb>}
     *
     * @memberof Repository
     */
    odb(): Promise<Odb>;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Repository
     */
    path(): string;
    /**
     *
     *
     * @returns {Promise<Refdb>}
     *
     * @memberof Repository
     */
    refdb(): Promise<Refdb>;
    /**
     *
     *
     * @param {string} refname
     * @returns {Promise<number>}
     *
     * @memberof Repository
     */
    setHead(refname: string): Promise<number>;
    /**
     *
     *
     * @param {Oid} commitish
     * @returns {number}
     *
     * @memberof Repository
     */
    setHeadDetached(commitish: Oid): number;
    /**
     *
     *
     * @param {AnnotatedCommit} commitish
     * @returns {number}
     *
     * @memberof Repository
     */
    setHeadDetachedFromAnnotated(commitish: AnnotatedCommit): number;
    /**
     *
     *
     * @param {string} name
     * @param {string} email
     * @returns {number}
     *
     * @memberof Repository
     */
    setIdent(name: string, email: string): number;
    /**
     *
     *
     * @param {string} nmspace
     * @returns {number}
     *
     * @memberof Repository
     */
    setNamespace(nmspace: string): number;
    /**
     *
     *
     * @param {string} workdir
     * @param {number} updateGitLink
     * @returns {number}
     *
     * @memberof Repository
     */
    setWorkdir(workdir: string, updateGitLink: number): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    state(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Repository
     */
    stateCleanup(): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Repository
     */
    workdir(): string;
    /**
     * Creates a branch with the passed in name pointing to the commit
     *
     * @param {string} name
     * @param {(Commit | string | Oid)} commit
     * @param {boolean} force
     * @param {Signature} signature
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Repository
     */
    createBranch(name: string, commit: Commit | string | Oid, force: boolean, signature: Signature, logMessage: string): Promise<Reference>;
    /**
     * Look up a refs's commit.
     *
     * @param {(string | Reference)} name
     * @returns {Promise<Commit>}
     *
     * @memberof Repository
     */
    getReferenceCommit(name: string | Reference): Promise<Commit>;
    /**
     * Look up a branch. Alias for getReference
     *
     * @param {(string | Reference)} name
     * @returns {Promise<Reference>}
     *
     * @memberof Repository
     */
    getBranch(name: string | Reference): Promise<Reference>;
    /**
     * Look up a branch's most recent commit. Alias to getReferenceCommit
     *
     * @param {(string | Reference)} name
     * @returns {Promise<Commit>}
     *
     * @memberof Repository
     */
    getBranchCommit(name: string | Reference): Promise<Commit>;
    /**
     * Gets the branch that HEAD currently points to Is an alias to head()
     *
     * @returns {Promise<Reference>}
     *
     * @memberof Repository
     */
    getCurrentBranch(): Promise<Reference>;
    /**
     * Lookup the reference with the given name.
     *
     * @param {(string | Reference)} name
     * @returns {Promise<Reference>}
     *
     * @memberof Repository
     */
    getReference(name: string | Reference): Promise<Reference>;
    /**
     * Lookup references for a repository.
     *
     * @param {Reference.TYPE} type
     * @returns {Promise<Reference[]>}
     *
     * @memberof Repository
     */
    getReferences(type: Reference.TYPE): Promise<Reference[]>;
    /**
     * Lookup reference names for a repository.
     *
     * @param {Reference.TYPE} type
     * @returns {Promise<string[]>}
     *
     * @memberof Repository
     */
    getReferenceNames(type: Reference.TYPE): Promise<string[]>;
    /**
     *
     *
     * @param {(string | Oid)} string
     * @returns {Promise<Commit>}
     *
     * @memberof Repository
     */
    getCommit(string: string | Oid): Promise<Commit>;
    /**
     * Retrieve the blob represented by the oid.
     *
     * @param {(string | Oid)} string
     * @returns {Promise<Blob>}
     *
     * @memberof Repository
     */
    getBlob(string: string | Oid): Promise<Blob>;
    /**
     * Retrieve the tree represented by the oid.
     *
     * @param {(string | Oid)} string
     * @returns {Promise<Tree>}
     *
     * @memberof Repository
     */
    getTree(string: string | Oid): Promise<Tree>;
    /**
     *
     *
     * @param {(string | Oid)} string
     * @param {string} name
     * @param {string} message
     * @returns {Promise<Tag>}
     *
     * @memberof Repository
     */
    createTag(string: string | Oid, name: string, message: string): Promise<Tag>;
    /**
     * Creates a new lightweight tag
     *
     * @param {(string | Oid)} string
     * @param {string} name
     * @returns {Promise<Reference>}
     *
     * @memberof Repository
     */
    createLightweightTag(string: string | Oid, name: string): Promise<Reference>;
    /**
     * Retrieve the tag represented by the oid.
     *
     * @param {(string | Oid)} string
     * @returns {Promise<Tag>}
     *
     * @memberof Repository
     */
    getTag(string: string | Oid): Promise<Tag>;
    /**
     * Retrieve the tag represented by the tag name.
     *
     * @param {string} Short
     * @returns {Promise<Tag>}
     *
     * @memberof Repository
     */
    getTagByName(Short: string): Promise<Tag>;
    /**
     * Deletes a tag from a repository by the tag name.
     *
     * @param {string} Short
     * @returns {Promise<any>}
     *
     * @memberof Repository
     */
    deleteTagByName(Short: string): Promise<any>;
    /**
     * Instantiate a new revision walker for browsing the Repository"s history. See also Commit.prototype.history()
     *
     * @param {(string | Oid)} string
     * @returns {Revwalk}
     *
     * @memberof Repository
     */
    createRevWalk(string: string | Oid): Revwalk;
    /**
     * Retrieve the master branch commit.
     *
     * @returns {Promise<Commit>}
     *
     * @memberof Repository
     */
    getMasterCommit(): Promise<Commit>;
    /**
     * Retrieve the commit that HEAD is currently pointing to
     *
     * @returns {Promise<Commit>}
     *
     * @memberof Repository
     */
    getHeadCommit(): Promise<Commit>;
    /**
     *
     *
     * @param {string} updateRef
     * @param {Signature} author
     * @param {Signature} committer
     * @param {string} message
     * @param {(Tree | Oid | string)} Tree
     * @param {any[]} parents
     * @returns {Promise<Oid>}
     *
     * @memberof Repository
     */
    createCommit(updateRef: string, author: Signature, committer: Signature, message: string, Tree: Tree | Oid | string, parents: any[]): Promise<Oid>;
    /**
     * Creates a new commit on HEAD from the list of passed in files
     *
     * @param {any[]} filesToAdd
     * @param {Signature} author
     * @param {Signature} committer
     * @param {string} message
     * @returns {Promise<Oid>}
     *
     * @memberof Repository
     */
    createCommitOnHead(filesToAdd: any[], author: Signature, committer: Signature, message: string): Promise<Oid>;
    /**
     * Create a blob from a buffer
     *
     * @param {Buffer} buffer
     * @returns {Oid}
     *
     * @memberof Repository
     */
    createBlobFromBuffer(buffer: Buffer): Oid;
    /**
     *
     *
     * @param {Tree} tree
     * @returns {*}
     *
     * @memberof Repository
     */
    treeBuilder(tree: Tree): any;
    /**
     * Gets the default signature for the default user and now timestamp
     *
     * @returns {Signature}
     *
     * @memberof Repository
     */
    defaultSignature(): Signature;
    /**
     * Lists out the remotes in the given repository.
     *
     * @param {Function} Optional
     * @returns {Promise<Object>}
     *
     * @memberof Repository
     */
    getRemotes(Optional: Function): Promise<Object>;
    /**
     * Gets a remote from the repo
     *
     * @param {(string | Remote)} remote
     * @param {Function} callback
     * @returns {Promise<Remote>}
     *
     * @memberof Repository
     */
    getRemote(remote: string | Remote, callback: Function): Promise<Remote>;
    /**
     * Fetches from a remote
     *
     * @param {(string | Remote)} remote
     * @param {(Object | FetchOptions)} fetchOptions
     * @returns {Promise<any>}
     *
     * @memberof Repository
     */
    fetch(remote: string | Remote, fetchOptions: Object | FetchOptions): Promise<void>;
    /**
     * Fetches from all remotes. This is done in series due to deadlocking issues with fetching from many remotes that can happen.
     *
     * @param {(Object | FetchOptions)} fetchOptions
     * @param {Function} callback
     * @returns {Promise<void>}
     *
     * @memberof Repository
     */
    fetchAll(fetchOptions: Object | FetchOptions, callback: Function): Promise<void>;
    /**
     *
     *
     * @param {(string | Reference)} to
     * @param {(string | Reference)} from
     * @param {Signature} signature
     * @param {Merge.PREFERENCE} mergePreference
     * @param {MergeOptions} mergeOptions
     * @returns {Promise<Oid>}
     *
     * @memberof Repository
     */
    mergeBranches(to: string | Reference, from: string | Reference, signature: Signature, mergePreference: Merge.PREFERENCE, mergeOptions: MergeOptions): Promise<Oid>;
    /**
     * Rebases a branch onto another branch
     *
     * @param {string} branch
     * @param {string} upstream
     * @param {string} onto
     * @param {Signature} signature
     * @param {Function} beforeNextFn
     * @returns {Promise<Oid>}
     *
     * @memberof Repository
     */
    rebaseBranches(branch: string, upstream: string, onto: string, signature: Signature, beforeNextFn: Function): Promise<Oid>;
    /**
     *
     *
     * @param {Signature} signature
     * @param {Function} beforeNextFn
     * @returns {Promise<Oid>}
     *
     * @memberof Repository
     */
    continueRebase(signature: Signature, beforeNextFn: Function): Promise<Oid>;
    /**
     * Get the status of a repo to it's working directory
     *
     * @param {*} opts
     * @returns {Promise<any[]>}
     *
     * @memberof Repository
     */
    getStatus(opts: any): Promise<any[]>;
    /**
     * Get extended statuses of a repo to it's working directory. Status entries have status, headToIndex delta, and indexToWorkdir deltas
     *
     * @param {*} opts
     * @returns {Promise<any[]>}
     *
     * @memberof Repository
     */
    getStatusExt(opts: any): Promise<any[]>;
    /**
     * Get the names of the submodules in the repository.
     *
     * @returns {Promise<string[]>}
     *
     * @memberof Repository
     */
    getSubmoduleNames(): Promise<string[]>;
    /**
     * This will set the HEAD to point to the reference and then attempt to update the index and working tree to match the content of the latest commit on that reference
     *
     * @param {Reference} reference
     * @param {(Object | CheckoutOptions)} opts
     * @returns {Promise<any>}
     *
     * @memberof Repository
     */
    checkoutRef(reference: Reference, opts: Object | CheckoutOptions): Promise<any>;
    /**
     * This will set the HEAD to point to the local branch and then attempt to update the index and working tree to match the content of the latest commit on that branch
     *
     * @param {(string | Reference)} branch
     * @param {(Object | CheckoutOptions)} opts
     * @returns {Promise<any>}
     *
     * @memberof Repository
     */
    checkoutBranch(branch: string | Reference, opts: Object | CheckoutOptions): Promise<any>;
    /**
     * Stages or unstages line selection of a specified file
     *
     * @param {(string | any[])} filePath
     * @param {boolean} stageNew
     * @returns {Promise<number>}
     *
     * @memberof Repository
     */
    stageFilemode(filePath: string | any[], stageNew: boolean): Promise<number>;
    /**
     * Stages or unstages line selection of a specified file
     *
     * @param {string} filePath
     * @param {any[]} newLines
     * @param {boolean} isStaged
     * @returns {Promise<number>}
     *
     * @memberof Repository
     */
    stageLines(filePath: string, newLines: any[], isStaged: boolean): Promise<number>;
    /**
     * Returns true if the repository is in the default NONE state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isDefaultState(): boolean;
    /**
     * Returns true if the repository is in the APPLY_MAILBOX or APPLY_MAILBOX_OR_REBASE state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isApplyingMailbox(): boolean;
    /**
     * Returns true if the repository is in the BISECT state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isBisecting(): boolean;
    /**
     * Returns true if the repository is in the CHERRYPICK state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isCherrypicking(): boolean;
    /**
     * Returns true if the repository is in the MERGE state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isMerging(): boolean;
    /**
     * Returns true if the repository is in the REBASE, REBASE_INTERACTIVE, or REBASE_MERGE state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isRebasing(): boolean;
    /**
     * Returns true if the repository is in the REVERT state.
     *
     * @returns {boolean}
     *
     * @memberof Repository
     */
    isReverting(): boolean;
    /**
     * Discard line selection of a specified file. Assumes selected lines are unstaged.
     *
     * @param {string} filePath
     * @param {any[]} selectedLines
     * @returns {Promise<number>}
     *
     * @memberof Repository
     */
    discardLines(filePath: string, selectedLines: any[]): Promise<number>;
    /**
     * Grabs a fresh copy of the index from the repository. Invalidates all previously grabbed indexes
     *
     * @returns {Promise<Index>}
     *
     * @memberof Repository
     */
    refreshIndex(): Promise<Index>;
}
