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
import { StatusFile } from './status-file';
import { StatusOptions } from './status-options';
import { DiffLine } from './diff-line';
import { Treebuilder } from './tree-builder';

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
     */
    static discover(startPath: string, acrossFs: number, ceilingDirs: string): Promise<Buf>;
    static init(path: string, isBare: number): Promise<Repository>;
    static initExt(repoPath: string, options?: RepositoryInitOptions): Promise<Repository>;
    static open(path: string): Promise<Repository>;
    static openBare(barePath: string): Promise<Repository>;
    static openExt(path: string, flags?: number, ceilingDirs?: string): Promise<Repository>;
    static wrapOdb(odb: Odb): Promise<Repository>;

    cleanup(): void;
    commondir(): string;
    config(): Promise<Config>;
    configSnapshot(): Promise<Config>;
    detachHead(): number;
    fetchheadForeach(callback?: Function): Promise<any>;

    free(): void;
    getNamespace(): string;
    head(): Promise<Reference>;
    headDetached(): number;
    headUnborn(): number;
    index(): Promise<Index>;
    isBare(): number;
    isEmpty(): number;
    isShallow(): number;
    mergeheadForeach(callback?: Function): Promise<any>;
    messageRemove(): number;
    odb(): Promise<Odb>;
    path(): string;
    refdb(): Promise<Refdb>;
    setHead(refname: string): Promise<number>;
    setHeadDetached(commitish: Oid): number;
    setHeadDetachedFromAnnotated(commitish: AnnotatedCommit): number;
    setIdent(name: string, email: string): number;
    setNamespace(nmspace: string): number;
    setWorkdir(workdir: string, updateGitLink: number): number;
    state(): number;
    stateCleanup(): number;
    workdir(): string;
    /**
     * Creates a branch with the passed in name pointing to the commit
     */
    createBranch(name: string, commit: Commit | string | Oid, force?: boolean): Promise<Reference>;
    /**
     * Look up a refs's commit.
     */
    getReferenceCommit(name: string | Reference): Promise<Commit>;
    /**
     * Look up a branch. Alias for getReference
     */
    getBranch(name: string | Reference): Promise<Reference>;
    /**
     * Look up a branch's most recent commit. Alias to getReferenceCommit
     */
    getBranchCommit(name: string | Reference): Promise<Commit>;
    /**
     * Gets the branch that HEAD currently points to Is an alias to head()
     */
    getCurrentBranch(): Promise<Reference>;
    /**
     * Lookup the reference with the given name.
     */
    getReference(name: string | Reference): Promise<Reference>;
    /**
     * Lookup references for a repository.
     */
    getReferences(): Promise<Reference[]>;
    /**
     * Lookup reference names for a repository.
     */
    getReferenceNames(type: Reference.TYPE): Promise<string[]>;
    getCommit(string: string | Commit| Oid): Promise<Commit>;
    /**
     * Retrieve the blob represented by the oid.
     */
    getBlob(string: string | Oid): Promise<Blob>;
    /**
     * Retrieve the tree represented by the oid.
     */
    getTree(string: string | Oid): Promise<Tree>;
    createTag(string: string | Oid, name: string, message: string): Promise<Tag>;
    /**
     * Creates a new lightweight tag
     */
    createLightweightTag(string: string | Oid, name: string): Promise<Reference>;
    /**
     * Retrieve the tag represented by the oid.
     */
    getTag(string: string | Oid): Promise<Tag>;
    /**
     * Retrieve the tag represented by the tag name.
     */
    getTagByName(Short: string): Promise<Tag>;
    /**
     * Deletes a tag from a repository by the tag name.
     */
    deleteTagByName(Short: string): Promise<number>;
    /**
     * Instantiate a new revision walker for browsing the Repository"s history. See also Commit.prototype.history()
     */
    createRevWalk(): Revwalk;
    /**
     * Retrieve the master branch commit.
     */
    getMasterCommit(): Promise<Commit>;
    /**
     * Retrieve the commit that HEAD is currently pointing to
     */
    getHeadCommit(): Promise<Commit>;
    createCommit(updateRef: string, author: Signature, committer: Signature, message: string, Tree: Tree | Oid | string, parents: Array<string | Commit | Oid>, callback?: Function): Promise<Oid>;
    /**
     * Creates a new commit on HEAD from the list of passed in files
     */
    createCommitOnHead(filesToAdd: string[], author: Signature, committer: Signature, message: string): Promise<Oid>;
    /**
     * Create a blob from a buffer
     */
    createBlobFromBuffer(buffer: Buffer): Promise<Oid>;
    treeBuilder(tree: Tree): Promise<Treebuilder>;
    /**
     * Gets the default signature for the default user and now timestamp
     */
    defaultSignature(): Signature;
    /**
     * Lists out the remotes in the given repository.
     */
    getRemotes(callback?: Function): Promise<Remote[]>;
    /**
     * Gets a remote from the repo
     */
    getRemote(remote: string | Remote, callback?: Function): Promise<Remote>;
    /**
     * Fetches from a remote
     */
    fetch(remote: string | Remote, fetchOptions?: FetchOptions): Promise<void>;
    /**
     * Fetches from all remotes. This is done in series due to deadlocking issues with fetching from many remotes that can happen.
     */
    fetchAll(fetchOptions?: FetchOptions, callback?: Function): Promise<void>;
    mergeBranches(to: string | Reference, from: string | Reference, signature?: Signature, mergePreference?: Merge.PREFERENCE, mergeOptions?: MergeOptions): Promise<Oid>;
    /**
     * Rebases a branch onto another branch
     */
    rebaseBranches(branch: string, upstream: string, onto: string, signature: Signature, beforeNextFn: Function): Promise<Oid>;
    continueRebase(signature: Signature, beforeNextFn: Function): Promise<Oid>;
    /**
     * Get the status of a repo to it's working directory
     */
    getStatus(opts?: StatusOptions): Promise<StatusFile[]>;
    /**
     * Get extended statuses of a repo to it's working directory. Status entries have status, headToIndex delta, and indexToWorkdir deltas
     */
    getStatusExt(opts?: StatusOptions): Promise<StatusFile[]>;
    /**
     * Get the names of the submodules in the repository.
     */
    getSubmoduleNames(): Promise<string[]>;
    /**
     * This will set the HEAD to point to the reference and then attempt to update the index and working tree to match the content of the latest commit on that reference
     */
    checkoutRef(reference: Reference, opts?: CheckoutOptions): Promise<Reference>;
    /**
     * This will set the HEAD to point to the local branch and then attempt to update the index and working tree to match the content of the latest commit on that branch
     */
    checkoutBranch(branch: string | Reference, opts?: CheckoutOptions): Promise<Reference>;
    /**
     * Stages or unstages line selection of a specified file
     */
    stageFilemode(filePath: string | string[], stageNew: boolean): Promise<number>;
    /**
     * Stages or unstages line selection of a specified file
     */
    stageLines(filePath: string, newLines: DiffLine[], isStaged: boolean): Promise<number>;
    /**
     * Returns true if the repository is in the default NONE state.
     */
    isDefaultState(): boolean;
    /**
     * Returns true if the repository is in the APPLY_MAILBOX or APPLY_MAILBOX_OR_REBASE state.
     */
    isApplyingMailbox(): boolean;
    /**
     * Returns true if the repository is in the BISECT state.
     */
    isBisecting(): boolean;
    /**
     * Returns true if the repository is in the CHERRYPICK state.
     */
    isCherrypicking(): boolean;
    /**
     * Returns true if the repository is in the MERGE state.
     */
    isMerging(): boolean;
    /**
     * Returns true if the repository is in the REBASE, REBASE_INTERACTIVE, or REBASE_MERGE state.
     */
    isRebasing(): boolean;
    /**
     * Returns true if the repository is in the REVERT state.
     */
    isReverting(): boolean;
    /**
     * Discard line selection of a specified file. Assumes selected lines are unstaged.
     */
    discardLines(filePath: string, selectedLines: DiffLine[]): Promise<number>;
    /**
     * Grabs a fresh copy of the index from the repository. Invalidates all previously grabbed indexes
     */
    refreshIndex(): Promise<Index>;
}
