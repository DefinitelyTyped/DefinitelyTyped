import type ModuleMap from './ModuleMap';
import type { PerfLoggerFactory, RootPerfLogger, PerfLogger } from 'metro-config';

export type { PerfLoggerFactory, PerfLogger };

/**
 * These inputs affect the internal data collected for a given filesystem
 * state, and changes may invalidate a cache.
 */
export type BuildParameters = Readonly<{
    computeDependencies: boolean;
    computeSha1: boolean;
    enableSymlinks: boolean;
    extensions: ReadonlyArray<string>;
    forceNodeFilesystemAPI: boolean;
    ignorePattern: RegExp;
    mocksPattern: RegExp | null;
    platforms: ReadonlyArray<string>;
    retainAllFiles: boolean;
    rootDir: string;
    roots: ReadonlyArray<string>;
    skipPackageJson: boolean;
    dependencyExtractor: string | null;
    hasteImplModulePath: string | null;
    cacheBreaker: string;
}>;

export interface BuildResult {
    fileSystem: FileSystem;
    hasteModuleMap: ModuleMap;
}

export interface CacheData {
    readonly clocks: WatchmanClocks;
    readonly map: RawModuleMap['map'];
    readonly mocks: RawModuleMap['mocks'];
    readonly duplicates: RawModuleMap['duplicates'];
    readonly files: FileData;
}

export interface CacheManager {
    read(): Promise<CacheData | null>;
    write(dataSnapshot: CacheData, delta: Readonly<{ changed: FileData; removed: FileData }>): Promise<void>;
}

export type CacheManagerFactory = (buildParameters: BuildParameters) => CacheManager;

export interface ChangeEvent {
    logger: RootPerfLogger | null;
    eventsQueue: EventsQueue;
}

export interface ChangeEventMetadata {
    /** Epoch ms */
    modifiedTime: number | null;
    /** Bytes */
    size: number | null;
    /** Regular file / Directory / Symlink */
    type: 'f' | 'd' | 'l';
}

export type Console = typeof global.console;

export interface CrawlerOptions {
    abortSignal: AbortSignal | null;
    computeSha1: boolean;
    extensions: ReadonlyArray<string>;
    forceNodeFilesystemAPI: boolean;
    ignore: IgnoreMatcher;
    includeSymlinks: boolean;
    perfLogger?: PerfLogger | null;
    previousState: Readonly<{
        clocks: ReadonlyMap<Path, WatchmanClockSpec>;
        files: ReadonlyMap<Path, FileMetaData>;
    }>;
    rootDir: string;
    roots: ReadonlyArray<string>;
    onStatus: (status: WatcherStatus) => void;
}

export type WatcherStatus =
    | {
          type: 'watchman_slow_command';
          timeElapsed: number;
          command: 'watch-project' | 'query';
      }
    | {
          type: 'watchman_slow_command_complete';
          timeElapsed: number;
          command: 'watch-project' | 'query';
      }
    | {
          type: 'watchman_warning';
          warning: unknown;
          command: 'watch-project' | 'query';
      };

export type DuplicatesSet = Map<string, /* type */ number>;
export type DuplicatesIndex = Map<string, Map<string, DuplicatesSet>>;

export type EventsQueue = Array<{
    filePath: Path;
    metadata?: ChangeEventMetadata | null;
    type: string;
}>;

export interface HType {
    ID: 0;
    MTIME: 1;
    SIZE: 2;
    VISITED: 3;
    DEPENDENCIES: 4;
    SHA1: 5;
    SYMLINK: 6;
    PATH: 0;
    TYPE: 1;
    MODULE: 0;
    PACKAGE: 1;
    GENERIC_PLATFORM: 'g';
    NATIVE_PLATFORM: 'native';
    DEPENDENCY_DELIM: '\0';
}

type Values<T> = T[keyof T];
export type HTypeValue = Values<HType>;

export type IgnoreMatcher = (item: string) => boolean;

export type FileData = Map<Path, FileMetaData>;

export type FileMetaData = [
    /* id */ string,
    /* mtime */ number,
    /* size */ number,
    /* visited */ 0 | 1,
    /* dependencies */ string,
    /* sha1 */ string | null,
    /* symlink */ 0 | 1 | string, // string specifies target, if known
];

export type FileStats = Readonly<{
    fileType: 'f' | 'l';
    modifiedTime: number;
}>;

export interface FileSystem {
    exists(file: Path): boolean;
    getAllFiles(): Path[];
    getDependencies(file: Path): string[] | null;
    getModuleName(file: Path): string | null;
    getRealPath(file: Path): string | null;
    getSerializableSnapshot(): FileData;
    getSha1(file: Path): string | null;

    /**
     * Analogous to posix lstat. If the file at `file` is a symlink, return
     * information about the symlink without following it.
     */
    linkStats(file: Path): FileStats | null;

    matchFiles(pattern: RegExp | string): Path[];

    /**
     * Given a search context, return a list of file paths matching the query.
     * The query matches against normalized paths which start with `./`,
     * for example: `a/b.js` -> `./a/b.js`
     */
    matchFilesWithContext(
        root: Path,
        context: Readonly<{
            /* Should search for files recursively. */
            recursive: boolean;
            /* Filter relative paths against a pattern. */
            filter: RegExp;
        }>,
    ): Path[];
}

export type Glob = string;

// tslint:disable-next-line interface-name
export interface IModuleMap {
    getModule(
        name: string,
        platform?: string | null,
        supportsNativePlatform?: boolean | null,
        type?: HTypeValue | null,
    ): Path | null;

    getPackage(name: string, platform: string | null, _supportsNativePlatform: boolean | null): Path | null;

    getMockModule(name: string): Path | null;

    getRawModuleMap(): ReadOnlyRawModuleMap;
}

export type MockData = Map<string, Path>;
export type ModuleMapData = Map<string, ModuleMapItem>;

export interface ModuleMapItem {
    [platform: string]: ModuleMetaData;
}
export type ModuleMetaData = [/* path */ string, /* type */ number];

export interface MutableFileSystem extends FileSystem {
    remove(filePath: Path): void;
    addOrModify(filePath: Path, fileMetadata: FileMetaData): void;
    bulkAddOrModify(addedOrModifiedFiles: FileData): void;
}

export type Path = string;

export interface RawModuleMap {
    rootDir: Path;
    duplicates: DuplicatesIndex;
    map: ModuleMapData;
    mocks: MockData;
}

export type ReadOnlyRawModuleMap = Readonly<{
    rootDir: Path;
    duplicates: ReadonlyMap<string, ReadonlyMap<string, ReadonlyMap<string, number>>>;
    map: ReadonlyMap<string, ModuleMapItem>;
    mocks: ReadonlyMap<string, Path>;
}>;

export type WatchmanClockSpec = string | Readonly<{ scm: Readonly<{ 'mergebase-with': string }> }>;
export type WatchmanClocks = Map<Path, WatchmanClockSpec>;

export type WorkerMessage = Readonly<{
    computeDependencies: boolean;
    computeSha1: boolean;
    dependencyExtractor?: string | null;
    enableHastePackages: boolean;
    readLink: boolean;
    rootDir: string;
    filePath: string;
    hasteImplModulePath?: string | null;
}>;

export type WorkerMetadata = Readonly<{
    dependencies?: ReadonlyArray<string>;
    id?: string | null;
    module?: ModuleMetaData | null;
    sha1?: string | null;
    symlinkTarget?: string | null;
}>;
