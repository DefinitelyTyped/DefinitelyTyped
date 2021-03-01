import { Config, Disposable, Project } from '../index';

/** Represents the underlying git operations performed by Atom. */
export class GitRepository {
    // Construction
    /** Creates a new GitRepository instance. */
    static open(path: string, options?: { refreshOnWindowFocus?: boolean }): GitRepository;

    constructor(path: string, options?: { refreshOnWindowFocus?: boolean; config?: Config; project?: Project });

    // Lifecycle
    /** Destroy this GitRepository object. */
    destroy(): void;

    /** Returns a boolean indicating if this repository has been destroyed. */
    isDestroyed(): boolean;

    // Event Subscription
    /**
     *  Invoke the given callback when this GitRepository's destroy() method is
     *  invoked.
     */
    onDidDestroy(callback: () => void): Disposable;

    /**
     *  Invoke the given callback when a specific file's status has changed. When
     *  a file is updated, reloaded, etc, and the status changes, this will be fired.
     */
    onDidChangeStatus(callback: (event: RepoStatusChangedEvent) => void): Disposable;

    /** Invoke the given callback when a multiple files' statuses have changed. */
    onDidChangeStatuses(callback: () => void): Disposable;

    // Repository Details
    /** A string indicating the type of version control system used by this repository. */
    getType(): 'git';

    /** Returns the string path of the repository. */
    getPath(): string;

    /** Returns the string working directory path of the repository. */
    getWorkingDirectory(): string;

    /** Returns true if at the root, false if in a subfolder of the repository. */
    isProjectAtRoot(): boolean;

    /** Makes a path relative to the repository's working directory. */
    relativize(): string;

    /** Returns true if the given branch exists. */
    hasBranch(branch: string): boolean;

    /** Retrieves a shortened version of the HEAD reference value. */
    getShortHead(path?: string): string;

    /** Is the given path a submodule in the repository? */
    isSubmodule(path: string): boolean;

    /**
     *  Returns the number of commits behind the current branch is from the its
     *  upstream remote branch. The default reference is the HEAD.
     *  @param reference The branch reference name.
     *  @param path The path in the repository to get this ifnromation for, only
     *  needed if the repository contains submodules.
     *  @return Returns the number of commits behind the current branch is from its
     *  upstream remote branch.
     */
    getAheadBehindCount(reference: string, path?: string): { ahead: number; behind: number };

    /**
     *  Get the cached ahead/behind commit counts for the current branch's
     *  upstream branch.
     */
    getCachedUpstreamAheadBehindCount(path?: string): { ahead: number; behind: number };

    /** Returns the git configuration value specified by the key. */
    getConfigValue(key: string, path?: string): string;

    /** Returns the origin url of the repository. */
    getOriginURL(path?: string): string;

    /**
     *  Returns the upstream branch for the current HEAD, or null if there is no
     *  upstream branch for the current HEAD.
     */
    getUpstreamBranch(path?: string): string | null;

    /** Gets all the local and remote references. */
    getReferences(path?: string): { heads: string[]; remotes: string[]; tags: string[] };

    /** Returns the current string SHA for the given reference. */
    getReferenceTarget(reference: string, path?: string): string;

    // Reading Status
    /** Returns true if the given path is modified. */
    isPathModified(path: string): boolean;

    /** Returns true if the given path is new. */
    isPathNew(path: string): boolean;

    /** Is the given path ignored? */
    isPathIgnored(path: string): boolean;

    /** Get the status of a directory in the repository's working directory. */
    getDirectoryStatus(path: string): number;

    /** Get the status of a single path in the repository. */
    getPathStatus(path: string): number;

    /** Get the cached status for the given path. */
    getCachedPathStatus(path: string): number | null;

    /** Returns true if the given status indicates modification. */
    isStatusModified(status: number): boolean;

    /** Returns true if the given status indicates a new path. */
    isStatusNew(status: number): boolean;

    // Retrieving Diffs
    /**
     *  Retrieves the number of lines added and removed to a path.
     *  This compares the working directory contents of the path to the HEAD version.
     */
    getDiffStats(path: string): { added: number; deleted: number };

    /**
     *  Retrieves the line diffs comparing the HEAD version of the given path
     *  and the given text.
     */
    getLineDiffs(
        path: string,
        text: string,
    ): Array<{ oldStart: number; newStart: number; oldLines: number; newLines: number }>;

    // Checking Out
    /**
     *  Restore the contents of a path in the working directory and index to the
     *  version at HEAD.
     */
    checkoutHead(path: string): boolean;

    /** Checks out a branch in your repository. */
    checkoutReference(reference: string, create: boolean): boolean;
}

export interface RepoStatusChangedEvent {
    path: string;

    /**
     *  This value can be passed to ::isStatusModified or ::isStatusNew to get more
     *  information.
     */
    pathStatus: number;
}
