/// <reference types="node" />
import { WriteStream } from "fs";
import { EventEmitter } from "events";

// Type definitions for nodegit 0.18
// Project: https://github.com/nodegit/nodegit
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "nodegit" {
    export class AnnotatedCommit {
        /**
         * @param repo - repository that contains the given commit
         * @param branchName - name of the (remote) branch
         * @param remoteUrl - 	url of the remote
         * @param id - the commit object id of the remote branch
         */
        static fromFetchhead(repo: Repository, branchName: string, remoteUrl: string, id: Oid): Promise<AnnotatedCommit>;
        static fromRef(repo: Repository, ref: Reference): Promise<AnnotatedCommit>;
        static fromRevspec(repo: Repository, revspec: string): Promise<AnnotatedCommit>;
        static lookup(repo: Repository, id: Oid): Promise<AnnotatedCommit>;

        free(): void;
        id(): Oid;
    }

    export class Attr {
        static addMacro(repo: Repository, name: string, values: string): number;
        static cacheFlush(repo: Repository): void;
        /**
         * @param repo - The repository containing the path.
         * @param flags - A combination of GIT_ATTR_CHECK... flags.
         * @param path - The path to check for attributes. Relative paths are interpreted relative to the repo root.
         * The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory).
         * @param name - The name of the attribute to look up.
         * @returns - Output of the value of the attribute. Use the GIT_ATTR_...
         */
        static get(repo: Repository, flags: number, path: string, name: string): Promise<string>;
        /**
         * @param repo - The repository containing the path.
         * @param flags - A combination of GIT_ATTR_CHECK... flags.
         * @param path - The path to check for attributes. Relative paths are interpreted relative to the repo root.
         * The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory).
         * @param numAttr - The number of attributes being looked up
         * @param names - An array of num_attr strings containing attribute names.
         */
        static getMany(repo: Repository, flags: number, path: string, numAttr: number, names: string): any[];
        /**
         * @param attr - The attribute
         * @returns - the value type for the attribute
         */
        static value(attr: string): number;
    }

    export namespace Attr {
        const enum STATES {
            UNSPECIFIED_T = 0,
            TRUE_T = 1,
            FALSE_T = 2,
            VALUE_T = 3
        }
    }

    export class BlameHunk {
        linesInHunk: number;
        finalCommitId: Oid;
        finalStartLineNumber: number;
        finalSignature: Signature;
        origCommitId: Oid;
        origPath: string;
        origStartLineNumber: number;
        origSignature: Signature;
    }

    export class BlameOptions {
        version?: number;
        flags?: number;
        minMatchCharacters?: number;
        newestCommit?: Oid;
        oldestCommit?: Oid;
        minLine?: number;
        maxLine?: number;
        [key: string]: any;
    }

    export class Blame {
        /**
         * Retrieve the blame of a file
         *
         * @param repo - Repository that contains the file
         * @param path - to the file to get the blame of
         * @param [options] - Options for the blame
         */
        static file(repo: Repository, path: string, options?: BlameOptions): Blame;
        /**
         * @param opts - The git_blame_options struct to initialize
         * @param version - Version of struct; pass GIT_BLAME_OPTIONS_VERSION
         */
        static initOptions(opts: BlameOptions, version: number): number;

        buffer(buffer: string, bufferLen: number): Promise<Blame>;

        free(): void;
        /**
         * @returns - the hunk at the given index, or NULL on error
         */
        getHunkByIndex(index: number): BlameHunk;
        /**
         * @returns - the hunk that contains the given line, or NULL on error
         */
        getHunkByLine(lineNo: number): BlameHunk;

        getHunkCount(): number;
    }

    export namespace Blame {
        const enum FLAG {
            NORMAL = 0,
            TRACK_COPIES_SAME_FILE = 1,
            TRACK_COPIES_SAME_COMMIT_MOVES = 2,
            TRACK_COPIES_SAME_COMMIT_COPIES = 4,
            TRACK_COPIES_ANY_COMMIT_COPIES = 8,
            FIRST_PARENT = 16
        }
    }

    export class Blob {
        /**
         * @param repo - repository where to blob will be written
         * @param buffer - data to be written into the blob
         * @param len - length of the data
         * @returns - return the id of the written blob
         */
        static createFromBuffer(repo: Repository, buffer: Buffer, len: number): Oid;
        /**
         * @param id - return the id of the written blob
         * @param repo - repository where the blob will be written. this repository can be bare or not
         * @param path - file from which the blob will be created
         */
        static createFromDisk(id: Oid, repo: Repository, path: string): number;
        static createFromStream(repo: Repository, hintPath: string): Promise<WriteStream>;
        /**
         * @param id - return the id of the written blob
         * @param repo - repository where the blob will be written. this repository cannot be bare
         * @param relativePath - file from which the blob will be created, relative to the repository's working dir
         * @returns - 0 or an error code
         */
        static createFromWorkdir(id: Oid, repo: Repository, relativePath: string): number;
        static lookup(repo: Repository, id: string | Oid | Blob): Promise<Blob>;
        static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Blob>;

        free(): void;
        id(): Oid;
        isBinary(): number;
        owner(): Repository;
        rawcontent(): Buffer;
        rawsize(): number;
        content(): Buffer;
        toString(): string;
        filemode(): number;
        dup(): Promise<Blob>;
    }

    export namespace Branch {
        const enum BRANCH {
            LOCAL = 1,
            REMOTE = 2,
            ALL = 3
        }
    }

    export class Branch {
        static create(repo: Repository, branchName: string, target: Commit, force: number): Promise<Reference>;
        static createFromAnnotated(repository: Repository, branchName: string, commit: AnnotatedCommit, force: number): Reference;
        static delete(branch: Reference): number;
        static isHead(branch: Reference): number;
        static iteratorNew(repo: Repository, listFlags: number): Promise<any>;
        static lookup(repo: Repository, branchName: string, branchType: Branch.BRANCH): Promise<Reference>;
        static move(branch: Reference, newBranchName: string, force: number): Promise<Reference>;
        static name(ref: Reference): Promise<string>;
        static setUpstream(branch: Reference, upstreamName: string): Promise<number>;
        static upstream(branch: Reference): Promise<Reference>;
    }

    export class Buf {
        containsNul(): number;

        free(): void;
        grow(targetSize: number): Promise<Buf>;
        isBinary(): number;
        set(data: Buffer, datalen: number): Promise<Buf>;
        ptr: string;
        asize: number;
        size: number;
    }

    export class Cert {
        certType: Cert.TYPE;
    }

    export namespace Cert {
        const enum TYPE {
            NONE = 0,
            X509 = 1,
            HOSTKEY_LIBSSH2 = 2,
            STRARRAY = 3
        }

        const enum SSH {
            MD5 = 1,
            SHA1 = 2
        }
    }

    export class CertHostkey {
        parent: Cert;
        type: Cert.TYPE;
        hashMd5: string;
        hashSha1: string;
    }

    export class CertX509 {
        data: Buffer;
        len: number;
        parent: Cert;
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

    export class CheckoutOptions {
        version?: number;
        checkoutStrategy?: number;
        disableFilters?: number;
        dirMode?: number;
        fileMode?: number;
        fileOpenFlags?: number;
        notifyFlags?: number;
        notifyCb?: any;
        notifyPayload?: undefined;
        progressCb?: any;
        progressPayload?: undefined;
        paths?: Strarray;
        baseline?: Tree;
        baselineIndex?: Index;
        targetDirectory?: string;
        ancestorLabel?: string;
        ourLabel?: string;
        theirLabel?: string;
        perfdataCb?: any;
        perfdataPayload?: undefined;
        [key: string]: any;
    }

    export class Cherrypick {
        /**
         * Cherrypick a commit and, changing the index and working directory
         */
        static cherrypick(repo: Repository, commit: Commit, options?: CherrypickOptions): Promise<number>;
        /**
         * Cherrypicks the given commit against "our" commit, producing an index that reflects the result of the cherrypick. The index is not backed by a repo.
         */
        static commit(repo: Repository, cherrypickCommit: Commit, ourCommit: Commit, mainline: number, mergeOptions?: MergeOptions): Promise<number>;
        static initOptions(opts: CherrypickOptions, version: number): number;
    }

    export interface CherrypickOptions {
        version?: number;
        mainline?: number;
        mergeOpts?: MergeOptions;
        checkoutOpts?: CheckoutOptions;
    }

    export class Clone {
        /**
         * Patch repository cloning to automatically coerce objects.
         */
        static clone(url: string, localPath: string, options?: CloneOptions): Promise<Repository>;

        static initOptions(opts: CloneOptions, version: number): number;
    }

    export namespace Clone {
        const enum LOCAL {
            AUTO = 0,
            LOCAL = 1,
            NO_LOCAL = 2,
            NO_LINKS = 3
        }
    }

    export class CloneOptions {
        version?: number;
        checkoutOpts?: CheckoutOptions;
        fetchOpts?: FetchOptions;
        bare?: number;
        local?: number;
        checkoutBranch?: string;
        repositoryCbPayload?: any;
        remoteCbPayload?: any;
    }

    export class Commit {
        static create(repo: Repository, updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree, parentCount: number, parents: any[]): Oid;
        static createV(id: Oid, repo: Repository, updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree, parentCount: number): number;
        /**
         * Retrieves the commit pointed to by the oid
         *
         *
         */
        static lookup(repo: Repository, id: string | Oid | Commit): Promise<Commit>;
        static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Commit>;
        static createWithSignature(repo: Repository, commitContent: string, signature: string, signatureField: string): Promise<Oid>;

        amend(updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree): Oid;
        author(): Signature;
        committer(): Signature;

        free(): void;
        headerField(field: string): Promise<Buf>;
        id(): Oid;
        message(): string;
        messageEncoding(): string;
        messageRaw(): string;
        nthGenAncestor(n: number): Promise<Commit>;
        owner(): Repository;
        parent(n: number): Promise<Commit>;
        parentId(n: number): Oid;
        parentcount(): number;
        rawHeader(): string;
        summary(): string;
        time(): number;
        timeOffset(): number;
        tree(treeOut: Tree): number;
        treeId(): Oid;
        /**
         * Retrieve the SHA.
         *
         *
         */
        sha(): string;
        /**
         * Retrieve the commit time as a unix timestamp.
         *
         *
         */
        timeMs(): number;
        /**
         * Retrieve the commit time as a Date object.
         *
         *
         */
        date(): Date;
        /**
         * Get the tree associated with this commit.
         *
         *
         */
        getTree(): Promise<Tree>;
        /**
         * Retrieve the entry represented by path for this commit. Path must be relative to repository root.
         *
         *
         */
        getEntry(path: string): Promise<TreeEntry>;
        /**
         * Walk the history from this commit backwards.
         * An EventEmitter is returned that will emit a "commit" event for each commit in the history, and one "end"
         * event when the walk is completed. Don't forget to call start() on the returned event.
         *
         *
         */
        history(): EventEmitter;
        /**
         * Retrieve the commit's parents as commit objects.
         *
         *
         */
        getParents(limit: number, callback?: Function): Promise<Commit[]>;
        /**
         * Retrieve the commit's parent shas.
         *
         *
         */
        parents(): Oid[];
        /**
         * Generate an array of diff trees showing changes between this commit and its parent(s).
         *
         *
         */
        getDiff(callback?: Function): Promise<Diff[]>;
        /**
         * Generate an array of diff trees showing changes between this commit and its parent(s).
         *
         *
         */
        getDiffWithOptions(options: Object, callback?: Function): Promise<Diff[]>;
        /**
         * The sha of this commit
         *
         *
         */
        toString(): string;
        dup(): Promise<Commit>;
        /**
         * consists of a summary
         *
         *
         */
        body(): string;
    }

    export class Config {
        static openDefault(): Promise<Config>;
        static findProgramdata(): Promise<Buf>;

        getStringBuf(name: string): Promise<Buf>;
        setInt64(name: string, value: number): number;
        setMultivar(name: string, regexp: string, value: string): number;
        setString(name: string, value: string): Promise<number>;
        snapshot(): Promise<Config>;
        lock(transaction: any): number;
    }

    export namespace Config {
        const enum LEVEL {
            SYSTEM = 1,
            XDG = 2,
            GLOBAL = 3,
            LOCAL = 4,
            APP = 5,
            HIGHEST_LEVEL = -1
        }
    }

    export class ConvenientHunk {
        /**
         * Diff header string that represents the context of this hunk
         * of the diff. Something like `@@ -169,14 +167,12 @@ ...`
         */
        header(): string;
        /**
         * The length of the header
         */
        headerLen(): number;
        /**
         * The lines in this hunk
         */
        lines(): Promise<DiffLine[]>;
        /**
         * The number of new lines in the hunk
         */
        newLines(): number;
        /**
         * The starting offset of the first new line in the file
         */
        newStart(): number;
        /**
         * The number of old lines in the hunk
         */
        oldLines(): number;
        /**
         * The starting offset of the first old line in the file
         */
        oldStart(): number;
        /**
         * Number of lines in this hunk
         */
        size(): number;
    }

    export class ConvenientPatch {
        /**
         * Old attributes of the file
         */
        oldFile(): DiffFile;
        /**
         * New attributes of the file
         */
        newFile(): DiffFile;
        /**
         * The number of hunks in this patch
         */
        size(): number;
        /**
         * The hunks in this patch
         */
        hunks(): Promise<ConvenientHunk[]>;
        /**
         * The status of this patch (unmodified, added, deleted)
         */
        status(): number;
        /**
         * The line statistics of this patch (#contexts, #added, #deleted)
         */
        lineStats(): any;
        /**
         * Is this an unmodified patch?
         */
        isUnmodified(): boolean;
        /**
         * Is this an added patch?
         */
        isAdded(): boolean;
        /**
         * Is this a deleted patch?
         */
        isDeleted(): boolean;
        /**
         * Is this an modified patch
         */
        isModified(): boolean;
        /**
         * Is this a renamed patch?
         */
        isRenamed(): boolean;
        /**
         * Is this a copied patch?
         */
        isCopied(): boolean;
        /**
         * Is this an ignored patch?
         */
        isIgnored(): boolean;
        /**
         * Is this an untracked patch?
         */
        isUntracked(): boolean;
        /**
         * Is this a type change?
         */
        isTypeChange(): boolean;
        /**
         * Is this an undreadable patch?
         */
        isUnreadable(): boolean;
        /**
         * Is this a conflicted patch?
         */
        isConflicted(): boolean;
    }

    export class Cred {
        static defaultNew(): Cred;
        static sshKeyFromAgent(username: string): Cred;
        static sshKeyMemoryNew(username: string, publicKey: string, privateKey: string, passphrase: string): Promise<Cred>;
        static sshKeyNew(username: string, publicKey: string, privateKey: string, passphrase: string): Cred;
        static usernameNew(username: string): Promise<Cred>;
        static userpassPlaintextNew(username: string, password: string): Cred;

        hasUsername(): number;

        free(): void;
    }

    export namespace Cred {
        const enum TYPE {
            USERPASS_PLAINTEXT = 1,
            SSH_KEY = 2,
            SSH_CUSTOM = 4,
            DEFAULT = 8,
            SSH_INTERACTIVE = 16,
            USERNAME = 32,
            SSH_MEMORY = 64
        }
    }

    export class CredUsername {
        parent: Cred;
        username: string;
    }

    export class CredUserpassPayload {
        username: string;
        password: string;
    }

    export class CvarMap {
        cvarType: number;
        strMatch: string;
        mapValue: number;
    }

    export class DescribeFormatOptions {
        version?: number;
        abbreviatedSize?: number;
        alwaysUseLongFormat?: number;
        dirtySuffix?: string;
        [key: string]: any;
    }

    export class DescribeOptions {
        version?: number;
        maxCandidatesTags?: number;
        describeStrategy?: number;
        pattern?: string;
        onlyFollowFirstParent?: number;
        showCommitOidAsFallback?: number;
        [key: string]: any;
    }

    export class Diff {
        /**
         * Directly run a diff between a blob and a buffer.
         *
         *
         */
        static blobToBuffer(oldBlob: Blob, oldAsPath: string,
                            buffer: string, bufferAsPath: string, opts: DiffOptions, fileCb: Function, binaryCb: Function, hunkCb: Function, lineCb: Function): Promise<any>;
        static fromBuffer(content: string, contentLen: number): Promise<Diff>;
        static indexToWorkdir(repo: Repository, index: Index, opts?: DiffOptions): Promise<Diff>;
        static indexToIndex(repo: Repository, oldIndex: Index, newIndex: Index, opts?: DiffOptions): Promise<Diff>;
        static treeToIndex(repo: Repository, oldTree: Tree, index: Index, opts?: DiffOptions): Promise<Diff>;
        static treeToTree(repo: Repository, oldTree: Tree, new_tree: Tree, opts?: DiffOptions): Promise<Diff>;
        static treeToWorkdir(repo: Repository, oldTree: Tree, opts?: DiffOptions): Promise<Diff>;
        static treeToWorkdirWithIndex(repo: Repository, oldTree: Tree, opts?: DiffOptions): Promise<Diff>;

        findSimilar(options: DiffFindOptions): Promise<number>;
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
            CONFLICTED = 10
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
            REMOVE_UNMODIFIED = 65536
        }

        const enum FLAG {
            BINARY = 1,
            NOT_BINARY = 2,
            VALID_ID = 4,
            EXISTS = 8
        }

        const enum FORMAT {
            PATCH = 1,
            PATCH_HEADER = 2,
            RAW = 3,
            NAME_ONLY = 4,
            NAME_STATUS = 5
        }

        const enum FORMAT_EMAIL_FLAGS {
            FORMAT_EMAIL_NONE = 0,
            FORMAT_EMAIL_EXCLUDE_SUBJECT_PATCH_MARKER = 1
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
            BINARY = 66
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
            SHOW_BINARY = 1073741824
        }

        const enum STATS_FORMAT {
            STATS_NONE = 0,
            STATS_FULL = 1,
            STATS_SHORT = 2,
            STATS_NUMBER = 4,
            STATS_INCLUDE_SUMMARY = 8
        }
    }

    export class DiffBinary {
        oldFile: DiffBinaryFile;
        newFile: DiffBinaryFile;
        containsData: DiffBinary.DIFF_BINARY;
    }

    export namespace DiffBinary {
        const enum DIFF_BINARY {
            NONE = 0,
            LITERAL = 1,
            DELTA = 2
        }
    }

    export class DiffBinaryFile {
        type: number;
        data: string;
        datalen: number;
        inflatedlen: number;
    }

    export class DiffDelta {
        status: number;
        flags: number;
        similarity: number;
        nfiles: number;
        oldFile: DiffFile;
        newFile: DiffFile;
    }

    export class DiffFile {
        /**
         * Returns the file's flags
         */
        flags(): number;
        /**
         * Returns the file's Oid
         */
        id(): Oid;
        /**
         * Returns the file's mode
         */
        mode(): number;
        /**
         * Returns the file's path
         */
        path(): string;
        /**
         * Returns the file's size
         */
        size(): number;
    }

    export interface DiffFindOptions {
        version?: number;
        flags?: number;
        renameThreshold?: number;
        renameFromRewriteThreshold?: number;
        copyThreshold?: number;
        breakRewriteThreshold?: number;
        renameLimit?: number;
    }

    export class DiffLine {
        /**
         * The relevant line
         *
         *
         */
        content(): string;
        /**
         * The non utf8 translated text
         *
         *
         */
        rawContent(): string;
        origin: number;
        oldLineno: number;
        newLineno: number;
        numLines: number;
        contentLen: number;
        contentOffset: number;
    }

    export interface DiffOptions {
        version?: number;
        flags?: number;
        ignoreSubmodules?: number;
        pathspec?: Strarray;
        notifyCb?: Function;
        contextLines?: number;
        interhunkLines?: number;
        idAbbrev?: number;
        maxSize?: number;
        oldPrefix?: string;
        newPrefix?: string;
        payload?: any;
        progressCb?: any;
        [key: string]: any;
    }

    export class DiffPerfdata {
        version: number;
        statCalls: number;
        oidCalculations: number;
    }

    export namespace Enums {
        const enum CVAR {
            FALSE = 0,
            TRUE = 1,
            INT32 = 2,
            string = 3
        }

        const enum DIRECTION {
            FETCH = 0,
            PUSH = 1
        }

        const enum FEATURE {
            THREADS = 1,
            HTTPS = 2,
            SSH = 4
        }

        const enum IDXENTRY_EXTENDED_FLAG {
            IDXENTRY_INTENT_TO_ADD = 8192,
            IDXENTRY_SKIP_WORKTREE = 16384,
            IDXENTRY_EXTENDED2 = 32768,
            S = 24576,
            IDXENTRY_UPDATE = 1,
            IDXENTRY_REMOVE = 2,
            IDXENTRY_UPTODATE = 4,
            IDXENTRY_ADDED = 8,
            IDXENTRY_HASHED = 16,
            IDXENTRY_UNHASHED = 32,
            IDXENTRY_WT_REMOVE = 64,
            IDXENTRY_CONFLICTED = 128,
            IDXENTRY_UNPACKED = 256,
            IDXENTRY_NEW_SKIP_WORKTREE = 512
        }

        const enum INDXENTRY_FLAG {
            IDXENTRY_EXTENDED = 16384,
            IDXENTRY_VALID = 32768
        }
    }

    export class Error {
        message: string;
        klass: number;
    }

    export namespace Error {
        const enum ERROR {
            GITERR_NONE = 0,
            GITERR_NOMEMORY = 1,
            GITERR_OS = 2,
            GITERR_INVALID = 3,
            GITERR_REFERENCE = 4,
            GITERR_ZLIB = 5,
            GITERR_REPOSITORY = 6,
            GITERR_CONFIG = 7,
            GITERR_REGEX = 8,
            GITERR_ODB = 9,
            GITERR_INDEX = 10,
            GITERR_OBJECT = 11,
            GITERR_NET = 12,
            GITERR_TAG = 13,
            GITERR_TREE = 14,
            GITERR_INDEXER = 15,
            GITERR_SSL = 16,
            GITERR_SUBMODULE = 17,
            GITERR_THREAD = 18,
            GITERR_STASH = 19,
            GITERR_CHECKOUT = 20,
            GITERR_FETCHHEAD = 21,
            GITERR_MERGE = 22,
            GITERR_SSH = 23,
            GITERR_FILTER = 24,
            GITERR_REVERT = 25,
            GITERR_CALLBACK = 26,
            GITERR_CHERRYPICK = 27,
            GITERR_DESCRIBE = 28,
            GITERR_REBASE = 29,
            GITERR_FILESYSTEM = 30
        }

        const enum CODE {
            OK = 0,
            ERROR = -1,
            ENOTFOUND = -3,
            EEXISTS = -4,
            EAMBIGUOUS = -5,
            EBUFS = -6,
            EUSER = -7,
            EBAREREPO = -8,
            EUNBORNBRANCH = -9,
            EUNMERGED = -10,
            ENONFASTFORWARD = -11,
            EINVALIDSPEC = -12,
            ECONFLICT = -13,
            ELOCKED = -14,
            EMODIFIED = -15,
            EAUTH = -16,
            ECERTIFICATE = -17,
            EAPPLIED = -18,
            EPEEL = -19,
            EEOF = -20,
            EINVALID = -21,
            EUNCOMMITTED = -22,
            EDIRECTORY = -23,
            PASSTHROUGH = -30,
            ITEROVER = -31
        }
    }

    export class Fetch {
        static initOptions(opts: FetchOptions, version: number): number;
    }

    export namespace Fetch {
        const enum PRUNE {
            GIT_FETCH_PRUNE_UNSPECIFIED = 0,
            GIT_FETCH_PRUNE = 1,
            GIT_FETCH_NO_PRUNE = 2
        }
    }

    export interface FetchOptions {
        version?: number;
        callbacks?: RemoteCallbacks;
        prune?: number;
        updateFetchhead?: number;
        downloadTags?: number;
        customHeaders?: Strarray;
        proxyOpts?: any;
        [key: string]: any;
    }

    export class Filter {
        static listContains(filters: any, name: string): number;
        static listLength(fl: any): number;
        static listNew(repo: Repository, mode: number, options: number): Promise<any>;
        static listStreamBlob(filters: any, blob: Blob, target: WriteStream): number;
        static listStreamData(filters: any, data: Buf, target: WriteStream): number;
        static listStreamFile(filters: any, repo: Repository, path: string, target: WriteStream): number;
        static unregister(name: string): number;

        lookup(name: string): Filter;
        register(name: string, priority: number): number;
        version: number;
        attributes: string;
        stream: Function;
    }

    export namespace Filter {
        const enum FLAG {
            DEFAULT = 0,
            ALLOW_UNSAFE = 1
        }

        const enum MODE {
            TO_WORKTREE = 0,
            SMUDGE = 0,
            TO_ODB = 1,
            CLEAN = 1
        }
    }

    export class Giterr {
        static errClear(): void;
        static errLast(): Error;
        static errSetOom(): void;
        static errSetString(errorClass: number, string: string): void;
    }

    export class Graph {
        static aheadBehind(repo: Repository, local: Oid, upstream: Oid): Promise<number>;
        static descendantOf(repo: Repository, commit: Oid, ancestor: Oid): Promise<number>;
    }

    export class Hashsig {
        static create(buf: string, buflen: number, opts: number): Promise<Hashsig>;
        static createFromFile(path: string, opts: number): Promise<Hashsig>;

        compare(b: Hashsig): number;

        free(): void;
    }

    export namespace Hashsig {
        const enum OPTION {
            NORMAL = 0,
            IGNORE_WHITESPACE = 1,
            SMART_WHITESPACE = 2,
            ALLOW_SMALL_FILES = 4
        }
    }

    export class Ignore {
        static addRule(repo: Repository, rules: string): number;
        static clearInternalRules(repo: Repository): number;
        static pathIsIgnored(repo: Repository, path: string): Promise<number>;
    }

    export class Index {
        static entryIsConflict(entry: IndexEntry): boolean;
        static entryStage(entry: IndexEntry): number;
        static open(indexPath: string): Promise<Index>;

        add(sourceEntry: IndexEntry): number;
        addAll(pathspec: Strarray, flags: number, callback?: Function): Promise<number>;
        addByPath(path: string): Promise<number>;
        caps(): number;
        checksum(): Oid;
        clear(): number;
        conflictAdd(ancestorEntry: IndexEntry, ourEntry: IndexEntry, theirEntry: IndexEntry): number;
        conflictCleanup(): number;
        conflictGet(path: string): Promise<IndexEntry>;
        conflictRemove(path: string): number;
        entryCount(): number;
        getByIndex(n: number): IndexEntry;
        getByPath(path: string, stage: number): IndexEntry;
        hasConflicts(): boolean;
        owner(): Repository;
        path(): string;
        read(force: number): number;
        readTree(tree: Tree): number;
        remove(path: string, stage: number): number;
        removeAll(pathspec: Strarray, callback?: Function): Promise<number>;
        removeByPath(path: string): Promise<number>;
        removeDirectory(dir: string, stage: number): number;
        setCaps(caps: number): number;
        updateAll(pathspec: Strarray, callback?: Function): Promise<number>;
        write(): number;
        writeTree(): Promise<Oid>;
        writeTreeTo(repo: Repository): Promise<Oid>;
        entries(): IndexEntry[];
        findPrefix(atPos: number, prefix: string): number;
        setVersion(version: number): number;
        version(): number;
    }

    export namespace Index {
        const enum ADD_OPTION {
            ADD_DEFAULT = 0,
            ADD_FORCE = 1,
            ADD_DISABLE_PATHSPEC_MATCH = 2,
            ADD_CHECK_PATHSPEC = 4
        }

        const enum CAP {
            IGNORE_CASE = 1,
            NO_FILEMODE = 2,
            NO_SYMLINKS = 4,
            FROM_OWNER = -1
        }
    }

    export class IndexEntry {
        ctime: IndexTime;
        mtime: IndexTime;
        dev: number;
        ino: number;
        mode: number;
        uid: number;
        gid: number;
        fileSize: number;
        id: Oid;
        flags: number;
        flagsExtended: number;
        path: string;
    }

    export class Indexer {
        commit(stats: TransferProgress): number;

        free(): void;
        hash(): Oid;
    }

    export interface IndexTime {
        seconds: number;
        nanoseconds: number;
    }

    export class Libgit2 {
        static features(): number;
        static init(): number;
        static opts(option: number): number;
        static shutdown(): number;
        static version(major: number, minor: number, rev: number): void;
    }

    export namespace Libgit2 {
        const enum OPT {
            GET_MWINDOW_SIZE = 0,
            SET_MWINDOW_SIZE = 1,
            GET_MWINDOW_MAPPED_LIMIT = 2,
            SET_MWINDOW_MAPPED_LIMIT = 3,
            GET_SEARCH_PATH = 4,
            SET_SEARCH_PATH = 5,
            SET_CACHE_OBJECT_LIMIT = 6,
            SET_CACHE_MAX_SIZE = 7,
            ENABLE_CACHING = 8,
            GET_CACHED_MEMORY = 9,
            GET_TEMPLATE_PATH = 10,
            SET_TEMPLATE_PATH = 11,
            SET_SSL_CERT_LOCATIONS = 12
        }
    }

    export class Merge {
        static merge(repo: Repository, theirHead: AnnotatedCommit, mergeOpts?: MergeOptions, checkoutOpts?: CheckoutOptions): any;
        static base(repo: Repository, one: Oid, two: Oid): Promise<Oid>;
        static bases(repo: Repository, one: Oid, two: Oid): Promise<Oidarray>;
        static commits(repo: Repository, ourCommit: Commit, theirCommit: Commit, options?: MergeOptions): any;
        static fileInitInput(opts: MergeFileInput, version: number): number;
        static initOptions(opts: MergeOptions, version: number): number;
        static trees(repo: Repository, ancestorTree: Tree, ourTree: Tree, theirTree: Tree, opts?: MergeOptions): Promise<Index>;
    }

    export namespace Merge {
        const enum ANALYSIS {
            NONE = 0,
            NORMAL = 1,
            UP_TO_DATE = 2,
            FASTFORWARD = 4,
            UNBORN = 8
        }

        const enum FILE_FAVOR {
            NORMAL = 0,
            OURS = 1,
            THEIRS = 2,
            UNION = 3
        }

        const enum FILE_FLAGS {
            FILE_DEFAULT = 0,
            FILE_STYLE_MERGE = 1,
            FILE_STYLE_DIFF3 = 2,
            FILE_SIMPLIFY_ALNUM = 4,
            FILE_IGNORE_WHITESPACE = 8,
            FILE_IGNORE_WHITESPACE_CHANGE = 16,
            FILE_IGNORE_WHITESPACE_EOL = 32,
            FILE_DIFF_PATIENCE = 64,
            FILE_DIFF_MINIMAL = 128
        }

        const enum PREFERENCE {
            NONE = 0,
            NO_FASTFORWARD = 1,
            FASTFORWARD_ONLY = 2
        }

        const enum TREE_FLAG {
            TREE_FIND_RENAMES = 1
        }
    }

    export interface MergeFileInput {
        version: number;
        ptr: string;
        size: number;
        path: string;
        mode: number;
    }

    export interface MergeFileOptions {
        version?: number;
        ancestorLabel?: string;
        ourLabel?: string;
        theirLabel?: string;
        favor?: number;
        flags?: number;
        [key: string]: any;
    }

    export class MergeFileResult {
        automergeable: number;
        path: string;
        mode: number;
        ptr: string;
        len: number;
    }

    export class MergeOptions {
        version?: number;
        renameThreshold?: number;
        targetLimit?: number;
        fileFavor?: number;
        fileFlags?: number;
        defaultDriver?: string;
        flags?: number;
        recursionLimit?: number;
        [key: string]: any;
    }

    export class Note {
        static create(repo: Repository, notesRef: string, author: Signature, committer: Signature, oid: Oid, note: string, force: number): Promise<Oid>;
        static foreach(repo: Repository, notesRef: string, noteCb: Function, payload: any): Promise<number>;
        static iteratorNew(repo: Repository, notesRef: string): Promise<any>;
        static next(noteId: Oid, annotatedId: Oid, it: any): number;
        static read(repo: Repository, notesRef: string, oid: Oid): Promise<Note>;
        static remove(repo: Repository, notesRef: string, author: Signature, committer: Signature, oid: Oid): Promise<number>;

        author(): Signature;
        committer(): Signature;

        free(): void;
        id(): Oid;
        message(): string;
    }

    export class Object {
        static size(type: number): number;
        static lookup(repo: Repository, id: Oid, type: number): Promise<Object>;
        static lookupPrefix(repo: Repository, id: Oid, len: number, type: number): Promise<Object>;
        static string2type(str: string): number;
        static type2string(type: number): string;
        static typeisloose(type: number): number;

        dup(): Promise<Object>;

        free(): void;
        id(): Oid;
        lookupByPath(path: string, type: number): Promise<Object>;
        owner(): Repository;
        peel(targetType: number): Promise<Object>;
        shortId(): Promise<Buf>;
        type(): number;
    }

    export class Odb {
        static open(objectsDir: string): Promise<Odb>;

        addDiskAlternate(path: string): number;

        free(): void;
        read(id: Oid): Promise<OdbObject>;
        write(data: Buffer, len: number, type: number): Promise<Oid>;
        expandIds(ids: OdbExpandId, count: number): number;
    }

    export namespace Odb {
        const enum STREAM {
            RDONLY = 2,
            WRONLY = 4,
            RW = 6
        }
    }

    export class OdbObject {
        data(): Buffer;
        dup(): Promise<OdbObject>;

        free(): void;
        id(): Oid;
        size(): number;
        type(): number;
    }

    export class OdbExpandId {
        id: Oid;
        length: number;
        type: number;
    }

    export class Oid {
        static fromString(str: string): Oid;
        cmp(b: Oid): number;
        cpy(): Oid;
        equal(b: Oid): number;
        iszero(): number;
        ncmp(b: Oid, len: number): number;
        strcmp(str: string): number;
        streq(str: string): number;
        tostrS(): string;
    }

    export class Oidarray {
        free(): void;
        ids: Oid;
        count: number;
    }

    export class Openssl {
        static setLocking(): number;
    }

    export class Packbuilder {
        static create(repo: Repository): Packbuilder;

        free(): void;
        hash(): Oid;
        insert(id: Oid, name: string): number;
        insertCommit(id: Oid): number;
        insertRecur(id: Oid, name: string): number;
        insertTree(id: Oid): number;
        insertWalk(walk: Revwalk): number;
        objectCount(): number;
        setThreads(n: number): number;
        written(): number;
    }

    export namespace Packbuilder {
        const enum STAGE {
            ADDING_OBJECTS = 0,
            DELTAFICATION = 1
        }
    }

    export class Pathspec {
        static matchListDiffEntry(m: any, pos: number): DiffDelta;
        static matchListEntry(m: any, pos: number): string;
        static matchListEntrycount(m: any): number;
        static matchListFailedEntry(m: any, pos: number): string;
        static matchListFailedEntrycount(m: any): number;
        static create(pathspec: Strarray): Pathspec;

        free(): void;
        matchDiff(diff: Diff, flags: number): Promise<any>;
        matchIndex(index: Index, flags: number): Promise<any>;
        matchTree(tree: Tree, flags: number): Promise<any>;
        matchWorkdir(repo: Repository, flags: number): Promise<any>;
        matchesPath(flags: number, path: string): number;
    }

    export namespace Pathspec {
        const enum FLAG {
            DEFAULT = 0,
            IGNORE_CASE = 1,
            USE_CASE = 2,
            NO_GLOB = 4,
            NO_MATCH_ERROR = 8,
            FIND_FAILURES = 16,
            FAILURES_ONLY = 32
        }
    }

    export class Proxy {
        static initOptions(opts: ProxyOptions, version: number): number;
    }

    export class ProxyOptions {
        certificateCheck?: Function;
        credentials?: Function;
        payload?: any;
        type?: number;
        url?: string;
        version?: number;
        [key: string]: any;
    }

    export class Push {
        static initOptions(opts: PushOptions, version: number): number;
    }

    export interface PushOptions {
        version?: number;
        pbParallelism?: number;
        callbacks?: RemoteCallbacks;
        customHeaders?: Strarray;
        proxyOpts?: ProxyOptions;
        [key: string]: any;
    }

    export class PushUpdate {
        srcRefname: string;
        dstRefname: string;
        src: Oid;
        dst: Oid;
    }

    export class Rebase {
        static init(repo: Repository, branch: AnnotatedCommit, upstream: AnnotatedCommit, onto: AnnotatedCommit, opts?: RebaseOptions): Promise<Rebase>;
        static initOptions(opts: RebaseOptions, version: number): number;
        static open(repo: Repository, opts?: RebaseOptions): Promise<Rebase>;

        abort(): number;
        commit(author: Signature, committer: Signature, messageEncoding: string, message: string): Oid;
        finish(signature: Signature): number;
        inmemoryIndex(index: Index): number;
        next(): Promise<RebaseOperation>;
        operationByIndex(idx: number): RebaseOperation;
        operationCurrent(): number;
        operationEntrycount(): number;
    }

    export class RebaseOperation {
        type: number;
        id: Oid;
        exec: string;
    }

    export namespace RebaseOperation {
        const enum REBASE_OPERATION {
            PICK = 0,
            REWORD = 1,
            EDIT = 2,
            SQUASH = 3,
            FIXUP = 4,
            EXEC = 5
        }
    }

    export interface RebaseOptions {
        version: number;
        quiet: number;
        rewriteNotesRef: string;
        checkoutOptions: CheckoutOptions;
    }

    export class Refdb {
        static open(repo: Repository): Promise<Refdb>;

        compress(): number;

        free(): void;
    }

    export class Reference {
        static create(repo: Repository, name: string, id: Oid, force: number, logMessage: string): Promise<Reference>;
        static createMatching(repo: Repository, name: string, id: Oid, force: number, currentId: Oid, logMessage: string): Promise<Reference>;
        static dwim(repo: Repository, id: string | Reference, callback?: Function): Promise<Reference>;
        static ensureLog(repo: Repository, refname: string): number;
        static hasLog(repo: Repository, refname: string): number;
        static isValidName(refname: string): number;
        static list(repo: Repository): Promise<any[]>;
        static lookup(repo: Repository, id: string | Reference, callback?: Function): Promise<Reference>;
        static nameToId(repo: Repository, name: string): Promise<Oid>;
        static normalizeName(bufferOut: string, bufferSize: number, name: string, flags: number): number;
        static remove(repo: Repository, name: string): number;
        static symbolicCreate(repo: Repository, name: string, target: string, force: number, logMessage: string): Promise<Reference>;
        static symbolicCreateMatching(repo: Repository, name: string, target: string, force: number, currentValue: string, logMessage: string): Promise<Reference>;

        cmp(ref2: Reference): number;
        delete(): number;
        isBranch(): number;
        isNote(): number;
        isRemote(): number;
        isTag(): number;
        name(): string;
        owner(): Repository;
        peel(type: number): Promise<Object>;
        rename(newName: string, force: number, logMessage: string): Promise<Reference>;
        resolve(): Promise<Reference>;
        setTarget(id: Oid, logMessage: string): Promise<Reference>;
        shorthand(): string;
        symbolicSetTarget(target: string, logMessage: string): Promise<Reference>;
        symbolicTarget(): string;
        target(): Oid;
        targetPeel(): Oid;
        type(): number;
        isValid(): boolean;
        isConcrete(): boolean;
        isSymbolic(): boolean;
        toString(): string;
        isHead(): boolean;
        dup(): Promise<Reference>;
    }

    export namespace Reference {
        const enum TYPE {
            INVALID = 0,
            OID = 1,
            SYMBOLIC = 2,
            LISTALL = 3
        }

        const enum NORMALIZE {
            REF_FORMAT_NORMAL = 0,
            REF_FORMAT_ALLOW_ONELEVEL = 1,
            REF_FORMAT_REFSPEC_PATTERN = 2,
            REF_FORMAT_REFSPEC_SHORTHAND = 4
        }
    }

    export class Reflog {
        static delete(repo: Repository, name: string): number;
        static read(repo: Repository, name: string): Promise<Reflog>;
        static rename(repo: Repository, oldName: string, name: string): number;

        append(id: Oid, committer: Signature, msg: string): number;
        drop(idx: number, rewritePreviousEntry: number): number;
        entryByIndex(idx: number): ReflogEntry;
        entrycount(): number;

        free(): void;
        write(): number;
    }

    export class ReflogEntry {
        committer(): Signature;
        idNew(): Oid;
        idOld(): Oid;
        message(): string;
    }

    export class Refspec {
        direction(): number;
        dst(): string;
        dstMatches(refname: string): number;
        force(): number;
        src(): string;
        srcMatches(refname: string): number;
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

    export class RemoteCallbacks {
        version?: number;
        credentials?: Function;
        certificateCheck?: Function;
        transferProgress?: Function;
        transport?: Function;
        payload?: undefined;
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
        createBranch(name: string, commit: Commit | string | Oid, force: boolean, signature: Signature, logMessage: string): Promise<Reference>;
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
        getReferences(type: Reference.TYPE): Promise<Reference[]>;
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
        createRevWalk(string: string | Oid): Revwalk;
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
        createBlobFromBuffer(buffer: Buffer): Oid;
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
        mergeBranches(to: string | Reference, from: string | Reference, signature: Signature, mergePreference: Merge.PREFERENCE, mergeOptions?: MergeOptions): Promise<Oid>;
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

    export class Revert {
        static revert(repo: Repository, commit: Commit, givenOpts: RevertOptions): Promise<number>;
        /**
         * Reverts the given commit against the given "our" commit, producing an index that reflects the result of the revert.
         */
        static commit(repo: Repository, revertCommit: Commit, ourCommit: Commit, mainline: number, mergeOptions?: MergeOptions): Promise<Index>;
    }

    export interface RevertOptions {
        version?: number;
        mainline?: number;
        mergeOpts?: MergeOptions;
        checkoutOpts?: CheckoutOptions;
        [key: string]: any;
    }

    export class Revparse {
        static ext(objectOut: Object, referenceOut: Reference, repo: Repository, spec: string): number;
        static single(repo: Repository, spec: string): Promise<Object>;
    }

    export namespace Revparse {
        const enum MODE {
            SINGLE = 1,
            RANGE = 2,
            MERGE_BASE = 4
        }
    }

    export class Revwalk {
        static create(repo: Repository): Revwalk;

        hide(commitId: Oid): number;
        hideGlob(glob: string): number;
        hideHead(): number;
        hideRef(refname: string): number;
        next(): Promise<Oid>;
        push(id: Oid): number;
        pushGlob(glob: string): number;
        pushHead(): number;
        pushRange(range: string): number;
        pushRef(refname: string): number;
        repository(): Repository;

        reset(): void;

        simplifyFirstParent(): void;
        /**
         * Set the sort order for the revwalk. This function takes variable arguments like revwalk.sorting(NodeGit.RevWalk.Topological, NodeGit.RevWalk.Reverse).
         */
        sorting(sort: number): void;
        fastWalk(maxCount: number): Promise<any>;
        fileHistoryWalk(filePath: string, maxCount: number): Promise<any[]>;
        /**
         * Walk the history from the given oid. The callback is invoked for each commit; When the walk is over, the callback is invoked with (null, null).
         */
        walk(oid: Oid, callback?: Function): Commit;
        /**
         * Walk the history grabbing commits until the checkFn called with the current commit returns false.
         */
        getCommitsUntil(checkFn: Function): Promise<any[]>;
        getCommits(count: number): Promise<Commit[]>;
    }

    export namespace Revwalk {
        const enum SORT {
            NONE = 0,
            TOPOLOGICAL = 1,
            TIME = 2,
            REVERSE = 4
        }
    }

    export class Signature {
        static default(repo: Repository): Signature;
        static create(name: string, email: string, time: number, offset: number): Signature;
        static now(name: string, email: string): Signature;
        static fromBuffer(buf: string): Promise<Signature>;

        dup(): Promise<Signature>;

        free(): void;
        toString(): string;
        name: string;
        email: string;
        when: Time;
    }

    export class Stash {
        static apply(repo: Repository, index: number, options?: StashApplyOptions): Promise<number>;
        static applyInitOptions(opts: StashApplyOptions, version: number): number;
        static drop(repo: Repository, index: number): Promise<number>;
        static foreach(repo: Repository, callback?: Function): Promise<number>;
        static pop(repo: Repository, index: number, options?: StashApplyOptions): Promise<number>;
        static save(repo: Repository, stasher: Signature, message: string, flags: number): Promise<Oid>;
    }

    export namespace Stash {
        const enum APPLY_FLAGS {
            APPLY_DEFAULT = 0,
            APPLY_REINSTATE_INDEX = 1
        }

        const enum APPLY_PROGRESS {
            NONE = 0,
            LOADING_STASH = 1,
            ANALYZE_INDEX = 2,
            ANALYZE_MODIFIED = 3,
            ANALYZE_UNTRACKED = 4,
            CHECKOUT_UNTRACKED = 5,
            CHECKOUT_MODIFIED = 6,
            DONE = 7
        }

        const enum FLAGS {
            DEFAULT = 0,
            KEEP_INDEX = 1,
            INCLUDE_UNTRACKED = 2,
            INCLUDE_IGNORED = 4
        }
    }

    export interface StashApplyOptions {
        version?: number;
        flags?: number;
        checkoutOptions?: CheckoutOptions;
        progressCb?: Function;
        progressPayload?: any;
    }

    export class Status {
        static byIndex(statuslist: StatusList, idx: number): StatusEntry;
        static file(repo: Repository, path: string): number;
        static foreach(repo: Repository, callback?: Function): Promise<number>;
        static foreachExt(repo: Repository, opts?: StatusOptions, callback?: Function): Promise<number>;
        static shouldIgnore(ignored: number, repo: Repository, path: string): number;
    }

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
            CONFLICTED = 32768
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
            INCLUDE_UNREADABLE_AS_UNTRACKED = 32768
        }

        const enum SHOW {
            INDEX_AND_WORKDIR = 0,
            INDEX_ONLY = 1,
            WORKDIR_ONLY = 2
        }
    }

    export class StatusEntry {
        status(): number;
        headToIndex(): DiffDelta;
        indexToWorkdir(): DiffDelta;
    }

    export class StatusFile {
        constructor(args: StatusFileOptions);
        headToIndex(): DiffDelta;
        indexToWorkdir(): DiffDelta;
        inIndex(): boolean;
        inWorkingTree(): boolean;
        isConflicted(): boolean;
        isDeleted(): boolean;
        isIgnored(): boolean;
        isModified(): boolean;
        isNew(): boolean;
        isRenamed(): boolean;
        isTypechange(): boolean;
        path(): string;
        status(): string[];
        statusBit(): number;
    }

    export interface StatusFileOptions {
        path?: string;
        status?: number;
        entry?: StatusEntry;
        [key: string]: any;
    }

    export class StatusList {
        static create(repo: Repository, opts?: StatusOptions): Promise<StatusList>;

        entrycount(): number;

        free(): void;
        getPerfdata(): Promise<DiffPerfdata>;
    }

    export interface StatusOptions {
        version?: number;
        show?: number;
        flags?: number;
        pathspec?: Strarray;
        [key: string]: any;
    }

    export class Strarray {
        copy(src: Strarray): number;

        free(): void;
        strings: string[];
        count: number;
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

    export interface SubmoduleUpdateOptions {
        version?: number;
        checkoutOpts?: CheckoutOptions;
        fetchOpts?: FetchOptions;
        cloneCheckoutStrategy?: number;
        [key: string]: any;
    }

    export class Tag {
        static annotationCreate(repo: Repository, tagName: string, target: Object, tagger: Signature, message: string): Promise<Oid>;
        static create(repo: Repository, tagName: string, target: Object, tagger: Signature, message: string, force: number): Promise<Oid>;
        static createLightweight(repo: Repository, tagName: string, target: Object, force: number): Promise<Oid>;
        static delete(repo: Repository, tagName: string): Promise<number>;
        static list(repo: Repository): Promise<any[]>;
        static listMatch(tagNames: Strarray, pattern: string, repo: Repository): number;
        /**
         * Retrieves the tag pointed to by the oid
         *
         *
         */
        static lookup(repo: Repository, id: string | Oid | Tag): Promise<Tag>;
        static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tag>;

        dup(): Promise<Tag>;

        free(): void;
        id(): Oid;
        message(): string;
        name(): string;
        owner(): Repository;
        peel(tagTargetOut: Object): number;
        tagger(): Signature;
        target(): Object;
        targetId(): Oid;
        targetType(): number;
    }

    export class Time {
        time: number;
        offset: number;
    }

    export class TransferProgress {
        totalObjects: number;
        indexedObjects: number;
        receivedObjects: number;
        localObjects: number;
        totalDeltas: number;
        indexedDeltas: number;
        receivedBytes: number;
    }

    export class Transport {
        static sshWithPaths(owner: Remote, payload: Strarray): Promise<Transport>;
        static unregister(prefix: string): number;
        init(version: number): number;
        smartCertificateCheck(cert: Cert, valid: number, hostName: string): number;
    }

    export namespace Transport {
        const enum FLAGS {
            NONE = 0
        }
    }

    export class Tree {
        static entryCmp(tree1: TreeEntry, tree2: TreeEntry): number;
        static entryDup(dest: TreeEntry, source: TreeEntry): number;
        static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tree>;
        /**
         * Retrieves the tree pointed to by the oid
         */
        static lookup(repo: Repository, id: string | Oid | Tree, callback?: Function): Promise<Tree>;

        entryById(id: Oid): TreeEntry;
        _entryByIndex(idx: number): TreeEntry;
        /**
         * Get an entry by name; if the tree is a directory, the name is the filename.
         */
        entryByName(name: string): TreeEntry;
        _entryByName(filename: string): TreeEntry;
        entryByPath(path: string): Promise<TreeEntry>;
        entryCount(): number;

        free(): void;
        id(): Oid;
        owner(): Repository;
        /**
         * Diff two trees
         */
        diff(tree: Tree, callback?: Function): Promise<DiffFile[]>;
        /**
         * Diff two trees with options
         */
        diffWithOptions(tree: Tree, options?: Object, callback?: Function): Promise<DiffFile[]>;
        /**
         * Get an entry at the ith position.
         */
        entryByIndex(i: number): TreeEntry;
        /**
         * Get an entry at a path. Unlike by name, this takes a fully qualified path, like /foo/bar/baz.javascript
         */
        getEntry(filePath: string): TreeEntry;
        /**
         * Return an array of the entries in this tree (excluding its children).
         */
        entries(): TreeEntry[];
        /**
         * Recursively walk the tree in breadth-first order. Fires an event for each entry.
         */
        walk(blobsOnly?: boolean): NodeJS.EventEmitter;
        /**
         * Return the path of this tree, like /lib/foo/bar
         *
         *
         */
        path(): string;
        /**
         * Make builder. This is helpful for modifying trees.
         */
        builder(): Treebuilder;
        dup(): Promise<Tree>;
        createUpdated(repo: Repository, nUpdates: number, updates: TreeUpdate): Promise<Oid>;
    }

    export namespace Tree {
        const enum WALK_MODE {
            WALK_PRE = 0,
            WALK_POST = 1
        }
    }

    export class Treebuilder {
        static create(repo: Repository, source: Tree): Promise<Treebuilder>;
        clear(): void;
        entrycount(): number;
        free(): void;
        get(filename: string): TreeEntry;
        insert(filename: string, id: Oid, filemode: number): Promise<TreeEntry>;
        remove(filename: string): number;
        write(): Oid;
    }

    export class TreeEntry {
        filemode(): TreeEntry.FILEMODE;
        filemodeRaw(): TreeEntry.FILEMODE;
        free(): void;
        getBlob(): Promise<Blob>;
        getTree(): Promise<Tree>;
        id(): Oid;
        isBlob(): boolean;
        isFile(): boolean;
        isTree(): boolean;
        isDirectory(): boolean;
        isSubmodule(): boolean;
        /**
         * Retrieve the SHA for this TreeEntry.
         */
        sha(): string;
        name(): string;
        /**
         * Retrieve the SHA for this TreeEntry. Alias for sha
         */
        oid(): string;
        /**
         * Returns the path for this entry.
         */
        path(): string;
        /**
         * Alias for path
         */
        toString(): string;
        toObject(repo: Repository): Object;
        type(): number;
    }

    export namespace TreeEntry {
        const enum FILEMODE {
            UNREADABLE = 0,
            TREE = 16384,
            BLOB = 33188,
            EXECUTABLE = 33261,
            LINK = 40960,
            COMMIT = 57344
        }
    }

    export class TreeUpdate {
        action: number;
        filemode: number;
        id: Oid;
        path: string;
    }
}
