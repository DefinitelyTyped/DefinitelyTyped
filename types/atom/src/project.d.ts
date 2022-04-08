import {
    ConfigValues,
    Directory,
    Disposable,
    FilesystemChangeEvent,
    GitRepository,
    PathWatcher,
    TextBuffer,
} from '../index';

/** Represents a project that's opened in Atom. */
export interface Project {
    // Event Subscription
    /** Invoke the given callback when the project paths change. */
    onDidChangePaths(callback: (projectPaths: string[]) => void): Disposable;

    /** Invoke the given callback when a text buffer is added to the project. */
    onDidAddBuffer(callback: (buffer: TextBuffer) => void): Disposable;

    /**
     *  Invoke the given callback with all current and future text buffers in
     *  the project.
     */
    observeBuffers(callback: (buffer: TextBuffer) => void): Disposable;

    /** Invoke a callback when a filesystem change occurs within any open project path. */
    onDidChangeFiles(callback: (events: FilesystemChangeEvent) => void): Disposable;

    /** Invoke a callback whenever the project's configuration has been replaced. */
    onDidReplace(callback: (projectSpec: ProjectSpecification | null | undefined) => void): Disposable;

    // Accessing the Git Repository
    /**
     * Get an Array of GitRepositorys associated with the project's directories.
     *
     * This method will be removed in 2.0 because it does synchronous I/O.
     */
    getRepositories(): GitRepository[];

    /** Invoke the given callback with all current and future repositories in the project. */
    observeRepositories(callback: (repository: GitRepository) => void): Disposable;

    /** Invoke the given callback when a repository is added to the project. */
    onDidAddRepository(callback: (repository: GitRepository) => void): Disposable;

    /** Get the repository for a given directory asynchronously. */
    repositoryForDirectory(directory: Directory): Promise<GitRepository | null>;

    // Managing Paths
    /** Get an Array of strings containing the paths of the project's directories. */
    getPaths(): string[];

    /** Set the paths of the project's directories. */
    setPaths(projectPaths: string[]): void;

    /** Add a path to the project's list of root paths. */
    addPath(projectPath: string): void;

    /**
     *  Access a promise that resolves when the filesystem watcher associated with a
     *  project root directory is ready to begin receiving events.
     */
    getWatcherPromise(projectPath: string): Promise<PathWatcher>;

    /** Remove a path from the project's list of root paths. */
    removePath(projectPath: string): void;

    /** Get an Array of Directorys associated with this project. */
    getDirectories(): Directory[];

    /** Get the relative path from the project directory to the given path. */
    relativize(fullPath: string): string;

    /**
     *  Get the path to the project directory that contains the given path, and
     *  the relative path from that project directory to the given path.
     */
    relativizePath(fullPath: string): [string | null, string];

    /**
     *  Determines whether the given path (real or symbolic) is inside the
     *  project's directory.
     */
    contains(pathToCheck: string): boolean;
}

export interface ProjectSpecification {
    paths: string[];
    originPath: string;
    config?: ConfigValues;
}
