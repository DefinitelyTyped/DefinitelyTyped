import { Oid } from './oid';
import { Buf } from './buf';
import { Reference } from './reference';
import { Odb } from './odb';
import { Object } from './object';

interface RepositoryInitOptions {
    description: string,
    flags: number,
    initialHead: string,
    mode: number,
    originUrl: string,
    templatePath: string,
    version: number,
    workdirPath: string
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
    static openExt(path: string, flags?: number, ceilingDirs?: string): Promise<Repository>;
    static wrapOdb(odb: Odb): Promise<Repository>;

    cleanup(): void;
    config(): Promise<NodeGit.Config>;
    configSnapshot(): Promise<NodeGit.Config>;
    detachHead(): number;
    fetchheadForeach(callback: Function): Promise<any>;
    free(): void;
    getNamespace(): string;
    head(): Promise<Reference>;
    headDetached(): number;
    headUnborn(): number;
    index(): Promise<NodeGit.Index>;
    isBare(): number;
    isEmpty(): number;
    isShallow(): number;
    mergeheadForeach(callback: Function): Promise<any>;
    messageRemove(): number;
    odb(): Promise<Odb>;
    path(): string;
    refdb(): Promise<NodeGit.Refdb>;
    setHead(refname: string): Promise<number>;
    setHeadDetached(commitish: Oid): number;
    setHeadDetachedFromAnnotated(commitish: NodeGit.AnnotatedCommit): number;
    setIdent(name: string, email: string): number;
    setNamespace(nmspace: string): number;
    setWorkdir(workdir: string, update_gitlink: number): number;
    state(): number;
    stateCleanup(): number;
    workdir(): string;
    createBranch(name: string, commit: NodeGit.Commit | string | Oid, force: boolean, signature: NodeGit.Signature, logMessage: string): Promise<Reference>;
    getReferenceCommit(name: string | Reference): Promise<NodeGit.Commit>;
    getBranch(name: string | Reference): Promise<Reference>;
    getBranchCommit(name: string | Reference): Promise<NodeGit.Commit>;
    getCurrentBranch(): Promise<Reference>;
    getReference(name: string | Reference): Promise<Reference>;
    getReferences(type: Reference.TYPE): Promise<Reference[]>;
    getReferenceNames(type: Reference.TYPE): Promise<string[]>;
    getCommit(string: string | Oid): Promise<NodeGit.Commit>;
    getBlob(string: string | Oid): Promise<NodeGit.Blob>;
    getTree(string: string | Oid): Promise<NodeGit.Tree>;
    createTag(string: string | Oid, name: string, message: string): Promise<NodeGit.Tag>;
    createLightweightTag(string: string | Oid, name: string): Promise<Reference>;
    getTag(string: string | Oid): Promise<NodeGit.Tag>;
    getTagByName(Short: string): Promise<NodeGit.Tag>;
    deleteTagByName(Short: string): Promise<any>;
    createRevWalk(string: string | Oid): any;
    getMasterCommit(): Promise<NodeGit.Commit>;
    getHeadCommit(): Promise<NodeGit.Commit>;
    createCommit(updateRef: string, author: NodeGit.Signature, committer: NodeGit.Signature, message: string, Tree: NodeGit.Tree | Oid | string, parents: any[]): Promise<Oid>;
    createCommitOnHead(filesToAdd: any[], author: NodeGit.Signature, committer: NodeGit.Signature, message: string): Promise<Oid>;
    createBlobFromBuffer(buffer: Buffer): Oid;
    treeBuilder(tree: NodeGit.Tree): any;
    defaultSignature(): Signature;
    getRemotes(Optional: Function): Promise<Object>;
    getRemote(remote: string | Remote, callback: Function): Promise<NodeGit.Remote>;
    fetch(remote: string | Remote, fetchOptions: Object | FetchOptions): Promise<any>;
    fetchAll(fetchOptions: Object | FetchOptions, callback: Function): Promise<any>;
    mergeBranches(to: string | Reference, from: string | Reference, signature: NodeGit.Signature, mergePreference: NodeGit.Merge.PREFERENCE, mergeOptions: NodeGit.MergeOptions): Promise<Oid>;
    rebaseBranches(branch: string, upstream: string, onto: string, signature: NodeGit.Signature, beforeNextFn: Function): Promise<Oid>;
    continueRebase(signature: NodeGit.Signature, beforeNextFn: Function): Promise<Oid>;
    getStatus(opts: any): Promise<any[]>;
    getStatusExt(opts: any): Promise<any[]>;
    getSubmoduleNames(): Promise<string[]>;
    checkoutRef(reference: Reference, opts: Object | CheckoutOptions): Promise<any>;
    checkoutBranch(branch: string | Reference, opts: Object | CheckoutOptions): Promise<any>;
    stageFilemode(filePath: string | any[], stageNew: Boolean): Promise<number>;
    stageLines(filePath: string, newLines: any[], isStaged: Boolean): Promise<number>;
    isDefaultState(): Boolean;
    isApplyingMailbox(): Boolean;
    isBisecting(): Boolean;
    isCherrypicking(): Boolean;
    isMerging(): Boolean;
    isRebasing(): Boolean;
    isReverting(): Boolean;
}
