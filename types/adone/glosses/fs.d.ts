declare namespace adone {
    /**
     * File system stuff
     */
    namespace fs {
        namespace I {
            type URL = nodestd.url.URL;
            type Stats = nodestd.fs.Stats;
            type Flag = "r" | "r+" | "rs+" | "w" | "wx" | "w+" | "wx+" | "a" | "ax" | "a+" | "ax+";
            type Encoding = "ascii" | "utf8" | "utf16le" | "usc2" | "base64" | "latin1" | "binary" | "hex";
            type SymlinkType = "dir" | "file" | "junction";
            type ReadStream = nodestd.fs.ReadStream;
            type WriteStream = nodestd.fs.WriteStream;
            type FD = number;
        }

        /**
         * Reads the value of a symbolic link
         */
        function readlink(path: string | Buffer | I.URL, encoding: null): Promise<Buffer>;
        function readlink(path: string | Buffer | I.URL, encoding: I.Encoding): Promise<string>;
        function readlink(path: string | Buffer | I.URL, options: { encoding: null }): Promise<Buffer>;
        function readlink(path: string | Buffer | I.URL, options?: { encoding?: I.Encoding }): Promise<string>;

        /**
         * Reads the value of a symbolic link
         */
        function readlinkSync(path: string | Buffer | I.URL, encoding: null): Buffer;
        function readlinkSync(path: string | Buffer | I.URL, encoding: I.Encoding): string;
        function readlinkSync(path: string | Buffer | I.URL, options: { encoding: null }): Buffer;
        function readlinkSync(path: string | Buffer | I.URL, options?: { encoding?: I.Encoding }): string;

        /**
         * Deletes a name and possibly the file it refers to
         */
        function unlink(path: string | Buffer | I.URL): Promise<void>;

        /**
         * Deletes a name and possibly the file it refers to
         */
        function unlinkSync(path: string | Buffer | I.URL): void;

        /**
         * Changes the file system timestamps of the object referenced by path
         */
        function utimes(path: string | Buffer | I.URL, atime: number | string | Date, mtime: number | string | Date): Promise<void>;

        /**
         * Changes the file system timestamps of the object referenced by path
         */
        function utimesSync(path: string | Buffer | I.URL, atime: number | string | Date, mtime: number | string | Date): void;

        /**
         * Changes the file system timestamps of the object referenced by path
         */
        function utimesMillis(path: string | Buffer | I.URL, atime: number, mtime: number): Promise<void>;

        /**
         * Changes permissions of a file
         */
        function chmod(path: string | Buffer | I.URL, mode: number): Promise<void>;

        /**
         * Changes ownership of a file
         */
        function chown(path: string | Buffer | I.URL, uid: number, gid: number): Promise<void>;

        /**
         * Changes ownership recursively for a given path
         */
        function chownr(path: string | Buffer | I.URL, uid: number, gid: number): Promise<void>;

        /**
         * Deletes a directory
         */
        function rmdir(path: string | Buffer | I.URL): Promise<void>;

        /**
         * Reads a directory
         */
        function readdir(path: string | Buffer | I.URL, encoding: null): Promise<Buffer[]>;
        function readdir(path: string | Buffer | I.URL, encoding: I.Encoding): Promise<string[]>;
        function readdir(path: string | Buffer | I.URL, options: { encoding: null }): Promise<Buffer[]>;
        function readdir(path: string | Buffer | I.URL, options?: { encoding?: I.Encoding }): Promise<string[]>;

        /**
         * Reads a directory
         */
        function readdirSync(path: string | Buffer | I.URL, encoding: null): Buffer[];
        function readdirSync(path: string | Buffer | I.URL, encoding: I.Encoding): string[];
        function readdirSync(path: string | Buffer | I.URL, options: { encoding: null }): Buffer[];
        function readdirSync(path: string | Buffer | I.URL, options?: { encoding?: I.Encoding }): string[];

        namespace I {
            interface ReaddirpEntry {
                /**
                 * filename
                 */
                name: string;

                /**
                 * full path to a file
                 */
                fullPath: string;

                /**
                 * relative path to a file
                 */
                path: string;

                /**
                 * relative path to the parent dir
                 */
                parentDir: string;

                /**
                 * full path to the parent dir
                 */
                fullParentDir: string;

                /**
                 * file stats
                 */
                stat: fs.I.Stats;
            }

            type ReaddirpFilter = string | ((entry: ReaddirpEntry) => boolean);

            interface ReaddirpOptions {
                /**
                 * filter for files
                 */
                fileFilter?: ReaddirpFilter | ReaddirpFilter[];

                /**
                 * filter for directories
                 */
                directoryFilter?: ReaddirpFilter | ReaddirpFilter[];

                /**
                 * maximum recursion depth
                 *
                 * Infinity by default
                 */
                depth?: number;

                /**
                 * whether to emit files
                 *
                 * true by default
                 */
                files?: boolean;

                /**
                 * whether to emit directories
                 *
                 * true by default
                 */
                directories?: boolean;

                /**
                 * whether to use lstat for stating
                 *
                 * false by default
                 */
                lstat?: boolean;
            }
        }

        /**
         * Traverses the given path
         */
        function readdirp(root: string | Buffer | I.URL, options?: I.ReaddirpOptions): stream.core.Stream<never, I.ReaddirpEntry>;

        /**
         * Gets file status, identical to stat, except that if pathname is a symbolic link,
         * then it returns information about the link itself, not the file that it refers to
         */
        function lstat(path: string | Buffer | I.URL): Promise<I.Stats>;

        /**
         * Gets file status, identical to stat, except that if pathname is a symbolic link,
         * then it returns information about the link itself, not the file that it refers to
         */
        function lstatSync(path: string | Buffer | I.URL): I.Stats;

        /**
         * Gets file status
         */
        function stat(path: string | Buffer | I.URL): Promise<I.Stats>;

        /**
         * Gets file status
         */
        function statSync(path: string | Buffer | I.URL): I.Stats;

        /**
         * Truncates file to the given length
         */
        function truncate(path: string | Buffer, length?: number): Promise<void>;

        /**
         * Writes data to a file, replacing the file if it already exists
         */
        function writeFile(file: string | Buffer | number, data: string | Buffer | Uint8Array, options?: {
            encoding?: I.Encoding,
            mode?: number,
            flag?: I.Flag
        }): Promise<void>;

        /**
         * Writes data to a file, replacing the file if it already exists
         */
        function writeFileSync(file: string | Buffer | number, data: string | Buffer | Uint8Array, options?: {
            encoding?: I.Encoding,
            mode?: number,
            flag?: I.Flag
        }): void;

        /**
         * Appends data to a file, creating the file if it does not yet exist
         */
        function appendFile(file: string | Buffer | number, data: string | Buffer, options?: {
            encoding?: I.Encoding,
            mode?: number,
            flag?: I.Flag
        }): Promise<void>;

        /**
         * Appends data to a file, creating the file if it does not yet exist
         */
        function appendFileSync(file: string | Buffer | number, data: string | Buffer, options?: {
            encoding?: I.Encoding,
            mode?: number,
            flag?: I.Flag
        }): void;

        /**
         * Tests a user's permissions for the file or directory specified by path
         */
        function access(file: string | Buffer | I.URL, mode?: number): Promise<void>;

        /**
         * Tests a user's permissions for the file or directory specified by path
         */
        function accessSync(file: string | Buffer | I.URL, mode?: number): void;

        /**
         * Makes a new name for a file
         */
        function symlink(target: string | Buffer | I.URL, path: string | Buffer | I.URL, type?: I.SymlinkType): Promise<void>;

        /**
         * Recursively deletes the given path, that can be a glob pattern
         */
        function rm(path: string, options?: {
            /**
             * Whether to consider the given path as a glob pattern
             */
            glob?: boolean,
            /**
             * Maximum busy tries, errors when cannot remove a file due to EBUSY, ENOTEMPTY, EPERM
             */
            maxBusyTries?: number,
            /**
             * The delay to wait between busy tries
             */
            emfileWait?: number
            /**
             * cwd to use
             */
            cwd?: string
        }): Promise<void>;

        /**
         * Recursively deletes empty directiries inside the given directory
         */
        function rmEmpty(path: string, options?: {
            cwd?: string;
            filter?: (filename: string) => boolean
        }): Promise<void>;

        namespace I {
            interface Access {
                read: boolean;
                write: boolean;
                execute: boolean;
            }
        }

        /**
         * Represents the permissions of a file
         */
        class Mode {
            stat: I.Stats;
            owner: I.Access;
            group: I.Access;
            others: I.Access;

            constructor(stat: I.Stats);

            valueOf(): number;
        }

        /**
         * Represents a file
         */
        class File {
            constructor(...path: string[]);

            /**
             * Sets the file encoding
             */
            encoding(name: I.Encoding | "buffer"): this;

            /**
             * Returns the file stats
             */
            stat(): Promise<I.Stats>;

            /**
             * Returns the file stats synchronously
             */
            statSync(): I.Stats;

            /**
             * Returns the files stats, for links the link stats
             */
            lstat(): Promise<I.Stats>;

            /**
             * Returns the files stats, for links the link stats, works synchronously
             */
            lstatSync(): I.Stats;

            /**
             * Returns the file mode
             */
            mode(): Mode;

            /**
             * Returns the file absoulte path
             */
            path(): string;

            /**
             * Returns normalized file path, with only / and removed redundant slashes
             */
            normalizedPath(): string;

            /**
             * Returns the file dirname
             */
            dirname(): string;

            /**
             * Returns the filename
             */
            filename(): string;

            /**
             * Returns the file extension
             */
            extname(): string;

            /**
             * Returns the filename with no extension
             */
            stem(): string;

            /**
             * Returns a relative path
             */
            relativePath(path: string | Directory): string;

            /**
             * Returns true if the file exists, visible by the process
             */
            exists(): Promise<boolean>;

            /**
             * Creates the file, writes an empty string
             */
            create(options?: { mode?: number }): Promise<void>;

            /**
             * Writes the given data to the file
             */
            write(buffer: string | Buffer, options?: { encoding?: I.Encoding, mode?: number, flag?: I.Flag }): Promise<void>;

            /**
             * Appends the given data to the file
             */
            append(buffer: string | Buffer, options?: { encoding?: I.Encoding, mode?: number, flag?: I.Flag }): Promise<void>;

            /**
             * Removes the file
             */
            unlink(): Promise<void>;

            /**
             * Returns the contents as a buffer
             */
            contents(encoding: "buffer"): Promise<Buffer>;

            /**
             * Returns the contents as a string
             */
            contents(encoding?: I.Encoding): Promise<string>;

            /**
             * Returns the contents as a buffer synchronously
             */
            contentsSync(encoding: "buffer"): Buffer;

            /**
             * Returns the contents as a string synchronously
             */
            contentsSync(encoding?: I.Encoding): string;

            /**
             * Returns a read stream for this file
             */
            contentsStream(encoding?: "buffer" | I.Encoding): I.ReadStream;

            /**
             * Changes the file premissions
             */
            chmod(mode: number | Mode): Promise<void>;

            /**
             * Renames the file
             */
            rename(name: string | File): Promise<void>;

            /**
             * Creates a symbolic link to this file
             */
            symbolicLink(path: string | File): SymbolicLinkFile;

            /**
             * Returns the file size in bytes
             */
            size(): Promise<number>;
        }

        namespace I.Directory {
            interface AddFileOptions {
                contents?: string | Buffer;
                encoding?: string;
                mode?: number;
            }
        }

        /**
         * Represents a directory
         */
        class Directory {
            constructor(...path: string[]);

            /**
             * Returns dirname
             */
            dirname(): string;

            /**
             * Returns filename
             */
            filename(): string;

            /**
             * Returns absoulte path
             */
            path(): string;

            /**
             * Returns normalized file path, with only / and removed redundant slashes
             */
            normalizedPath(): string;

            /**
             * Returns relative path
             */
            relativePath(path: string | Directory): string;

            /**
             * Returns directory stats
             */
            stat(): Promise<I.Stats>;

            /**
             * Returns the files stats, for links the link stats
             */
            lstat(): Promise<I.Stats>;

            /**
             * Returns true if the directory exists
             */
            exists(): Promise<boolean>;

            /**
             * Creates the directory if doesnt exist
             */
            create(options?: { mode?: number }): Promise<void>;

            /**
             * Returns path relative to this directory
             */
            resolve(...path: string[]): string;

            /**
             * Returns directory relative to this directory
             */
            getDirectory(...path: string[]): Directory;

            /**
             * Returns file relative to this directory
             */
            getFile(...path: string[]): File;

            /**
             * Returns file that is a symbolic link
             */
            getSymbolicLinkFile(...path: string[]): SymbolicLinkFile;

            /**
             * Returns directory that is a symbolic link
             */
            getSymbolicLinkDirectory(...path: string[]): SymbolicLinkDirectory;

            /**
             * Adds a new file
             */
            addFile(filename: string, options?: I.Directory.AddFileOptions): Promise<File>;
            addFile(a: string, filename: string, options?: I.Directory.AddFileOptions): Promise<File>;
            addFile(a: string, b: string, filename: string, options?: I.Directory.AddFileOptions): Promise<File>;
            addFile(a: string, b: string, c: string, filename: string, options?: I.Directory.AddFileOptions): Promise<File>;
            addFile(a: string, b: string, c: string, d: string, filename: string, options?: I.Directory.AddFileOptions): Promise<File>;
            addFile(a: string, ...filename: Array<Array<string | I.Directory.AddFileOptions>>): Promise<File>;

            /**
             * Adds a new directory
             */
            addDirectory(...path: string[]): Promise<Directory>;

            /**
             * Returns files inside this directory
             */
            files(): Promise<Array<File | Directory | SymbolicLinkFile | SymbolicLinkDirectory>>;

            /**
             * Returns files inside this directory synchronously
             */
            filesSync(): Array<File | Directory | SymbolicLinkFile | SymbolicLinkDirectory>;

            /**
             * Deletes all the file inside this directory, but not the directory
             */
            clean(): Promise<void>;

            /**
             * Deletes the directory
             */
            unlink(options?: { retries?: number, delay?: number }): Promise<void>;

            /**
             * Searches all nested files and directories
             */
            find(options?: { files?: boolean, dirs?: boolean }): Promise<Array<File | Directory | SymbolicLinkFile | SymbolicLinkDirectory>>;

            /**
             * Searches all nested files and directories synchronously
             */
            findSync(options?: { files?: boolean, dirs?: boolean }): Array<File | Directory | SymbolicLinkFile | SymbolicLinkDirectory>;

            /**
             * Renames the directory
             */
            rename(name: string | Directory): Promise<void>;

            /**
             * Create a symbolic link for this directory
             */
            symbolicLink(path: string | Directory): Promise<SymbolicLinkDirectory>;

            /**
             * Copies this from this directory to the given path
             */
            copyTo(destPath: string, options?: I.CopyToOptions): Promise<void>;

            /**
             * Copies files from the given path to this directory
             */
            copyFrom(srcPath: string, options?: I.CopyToOptions): Promise<void>;

            /**
             * Creates a new directory with the given path
             */
            static create(...path: string[]): Promise<Directory>;

            /**
             * Creates a new temporary directory
             */
            static createTmp(options?: I.TmpNameOptions): Promise<Directory>;
        }

        /**
         * Represents a file that is a symbolic link to another file
         */
        class SymbolicLinkFile extends File {
            /**
             * Returns the path of the file it refers to
             */
            realpath(): Promise<string>;

            /**
             * Returns the contents of the original file as a buffer
             */
            contents(encoding: "buffer"): Promise<Buffer>;

            /**
             * Returns the contents of the original file as a string
             */
            contents(encoding?: I.Encoding): Promise<string>;

            /**
             * Returns the contents of the original file as a buffer synchronously
             */
            contentsSync(encoding: "buffer"): Buffer;

            /**
             * Returns the contents of the original file as a string synchronously
             */
            contentsSync(encoding?: I.Encoding): string;

            /**
             * Returns a read stream for the original file
             */
            contentsStream(encoding?: "buffer" | I.Encoding): I.ReadStream;
        }

        /**
         * Represents a directory that is a symbolic link to another directory
         */
        class SymbolicLinkDirectory extends Directory {
            /**
             * Returns the path of the directory it refers to
             */
            realpath(): Promise<string>;

            /**
             * Removes the link, not the directory it refers to
             */
            unlink(): Promise<void>;
        }

        namespace I.RandomAccessFile {
            interface ConstructorOptions {
                /**
                 * Whether the file should be open as readable
                 */
                readable?: boolean;
                /**
                 * Whether the file should be open as writable
                 */
                writable?: boolean;
                /**
                 * Whether the file should be open as appendable
                 */
                appendable?: boolean;
                /**
                 * Predefined mtime
                 */
                mtime?: number;
                /**
                 * Predefined atime
                 */
                atime?: number;
                /**
                 * Base direcotry for the file
                 */
                cwd?: string;
            }
        }

        /**
         * Represents a file that supports random access
         */
        class RandomAccessFile extends event.Emitter {
            constructor(filename: string, options?: I.RandomAccessFile.ConstructorOptions);

            /**
             * Reads a buffer at the given offset
             */
            read(length: number, offset?: number): Promise<Buffer>;

            /**
             * Writes the given buffer at the given offset
             */
            write(buf: string | Buffer, offset?: number): Promise<number>;

            /**
             * Closes the file
             */
            close(): Promise<void>;

            /**
             * Writes atime and mtime properties of the file
             */
            end(options?: { atime?: number, mtime?: number }): Promise<void>;

            /**
             * Truncates the file to the given length
             */
            truncate(size: number): Promise<void>;

            /**
             * Removes this file
             */
            unlink(): Promise<void>;

            /**
             * Opens the given file with the given options
             */
            static open(filename: string, options?: I.RandomAccessFile.ConstructorOptions): Promise<RandomAccessFile>;
        }

        /**
         * Represents an abstract random access reader
         */
        class AbstractRandomAccessReader extends event.Emitter {
            /**
             * Increments the reference counter
             */
            ref(): void;

            /**
             * Decrements the reference counter
             */
            unref(): void;

            /**
             * Creates a readable stream for the given range
             */
            createReadStream(options?: {
                /**
                 * Start offset, inslusive
                 */
                start?: number,

                /**
                 * End offset, exclusive
                 */
                end?: number
            }): nodestd.stream.Readable;

            /**
             * Reads data and writes to the given buffer
             *
             * @param buffer buffer to write to
             * @param offset buffer offset to write to
             * @param length number of bytes to read
             * @param position position to read from
             */
            read(buffer: Buffer, offset: number, length: number, position: number): Promise<void>;

            /**
             * Must be implemented in derived classes and return a readable stream for the given range [start, end]
             */
            _readStreamFromRange(start: number, end: number): nodestd.stream.Readable;
        }

        /**
         * Represents a random access reader for a file by its file descriptor
         */
        class RandomAccessFdReader extends AbstractRandomAccessReader {
            constructor(fd: number);
        }

        /**
         * Represents a random access reader for a buffer
         */
        class RandomAccessBufferReader extends AbstractRandomAccessReader {
            constructor(buffer: Buffer);
        }

        namespace I.Glob {
            interface Options {
                /**
                 * The current working directory in which to search. Defaults to process.cwd()
                 */
                cwd?: string;

                /**
                 * The place where patterns starting with / will be mounted onto
                 */
                root?: string;

                /**
                 * Include .dot files in normal matches and globstar matches
                 */
                dot?: boolean;

                /**
                 * By default, a pattern starting with a forward-slash will be "mounted" onto the root setting,
                 * so that a valid filesystem path is returned
                 */
                nomount?: boolean;

                /**
                 * Add a / character to directory matches. Note that this requires additional stat calls
                 */
                mark?: boolean;

                /**
                 * Don't sort the results
                 */
                nosort?: boolean;

                /**
                 * Set to true to stat all results
                 */
                stat?: boolean;

                /**
                 * When an unusual error is encountered when attempting to read a directory, a warning will be printed to stderr.
                 * Set the option to true to suppress these warnings.
                 */
                silent?: boolean;

                /**
                 * When an unusual error is encountered when attempting to read a directory,
                 * the process will just continue on in search of other matches.
                 * Set the option to raise an error in these cases
                 */
                strict?: boolean;

                /**
                 * Pass in a previously generated cache object to save some fs calls
                 */
                cache?: Map<string, string>;

                /**
                 * A cache of results of filesystem information, to prevent unnecessary stat calls
                 */
                statCache?: Map<string, Stats>;

                /**
                 * A cache of results of filesystem information, to prevent unnecessary realpath calls
                 */
                realpathCache?: Map<string, string>;

                /**
                 * A cache of known symbolic links
                 */
                symlinks?: object;

                /**
                 * In some cases, brace-expanded patterns can result in the same file showing up multiple times in the result set.
                 * By default, this implementation prevents duplicates in the result set.
                 * Set this flag to disable that behavior
                 */
                nounique?: boolean;

                /**
                 * Set to never return an empty set, instead returning a set containing the pattern itself.
                 * This is the default in glob(3).
                 */
                nonull?: boolean;

                /**
                 * Do not expand {a,b} and {1..3} brace sets.
                 */
                nobrace?: boolean;

                /**
                 * Do not match ** against multiple filenames. (Ie, treat it as a normal * instead.)
                 */
                noglobstar?: boolean;

                /**
                 * Do not match +(a|b) "extglob" patterns.
                 */
                noext?: boolean;

                /**
                 * Perform a case-insensitive match.
                 * Note: on case-insensitive filesystems, non-magic patterns will match by default, since stat and readdir will not raise errors.
                 */
                nocase?: boolean;

                /**
                 * Perform a basename-only match if the pattern does not contain any slash characters.
                 * That is, *.js would be treated as equivalent to **\/*.js, matching all js files in all directories
                 */
                matchBase?: boolean;

                /**
                 * Do not match directories, only files
                 */
                nodir?: boolean;

                /**
                 * Add a pattern or an array of glob patterns to exclude matches
                 */
                ignore?: string | string[];

                /**
                 * Follow symlinked directories when expanding ** patterns.
                 * Note that this can result in a lot of duplicate references in the presence of cyclic links
                 */
                follow?: boolean;

                /**
                 * Set to true to call fs.realpath on all of the results
                 */
                realpath?: boolean;

                /**
                 * Set to true to always receive absolute paths for matched files
                 */
                absolute?: boolean;
            }

            interface StreamOptions extends Options {
                /**
                 * Add the index of the matching pattern to the result
                 */
                patternIndex?: boolean;
            }

            interface StreamConstructor {
                new(patterns: string | string[], options: StreamOptions & { stat: true, patternIndex: true }): Stream<{
                    path: string,
                    stat: Stats,
                    patternIndex: number
                }>;
                new(patterns: string | string[], options: StreamOptions & { stat: true }): Stream<{
                    path: string,
                    stat: Stats
                }>;
                new(patterns: string | string[], options: StreamOptions & { patternIndex: true }): Stream<{
                    path: string,
                    patternIndex: number
                }>;
                new(patterns: string | string[], options?: StreamOptions): Stream<string>;

                prototype: Stream<string | {
                    path: string,
                    stat?: Stats,
                    patternIndex?: number
                }>;
            }

            type Stream<T> = stream.core.Stream<never, T>;

            interface EmitterConstructor {
                new(pattern: string, optons: Options, callback?: (error: any, matches: string[]) => void): Emitter;
                new(pattern: string, callback?: (error: any, matches: string[]) => void): Emitter;

                prototype: Emitter;
            }

            interface Emitter extends event.Emitter {
                isIgnored(path: string): boolean;

                /**
                 * Stops the search permanently
                 */
                abort(): void;

                /**
                 * Temporarely stops the search
                 */
                pause(): void;

                /**
                 * Resumes the search
                 */
                resume(): void;

                on(event: "match", callback: (match: string, stat?: Stats) => void): this;
                on(event: "end", callback: (matches: string[]) => void): this;
            }

            interface GlobFunction {
                (patterns: string | string[], options: StreamOptions & { stat: true, patternIndex: true }): Stream<{
                    /**
                     * File path
                     */
                    path: string,

                    /**
                     * File stats
                     */
                    stat: Stats,

                    /**
                     * Pattern index
                     */
                    patternIndex: number
                }>;
                (patterns: string | string[], options: StreamOptions & { stat: true }): Stream<{
                    /**
                     * File path
                     */
                    path: string,

                    /**
                     * File stats
                     */
                    stat: Stats
                }>;
                (patterns: string | string[], options: StreamOptions & { patternIndex: true }): Stream<{
                    /**
                     * File path
                     */
                    path: string,

                    /**
                     * Pattern index
                     */
                    patternIndex: number
                }>;
                (patterns: string | string[], options?: StreamOptions): Stream<string>;

                /**
                 * low level glob emitter
                 */
                Glob: EmitterConstructor;

                /**
                 * Glob stream class
                 */
                Core: StreamConstructor;
            }
        }

        /**
         * Creates a glob stream
         */
        const glob: I.Glob.GlobFunction;

        namespace I.Watcher {
            interface ConstructorOptions {
                /**
                 * Indicates whether the process should continue to run as long as files are being watched
                 */
                persistent?: boolean;
                /**
                 * If set to false then add/addDir events are also emitted for matching paths
                 * while instantiating the watching as watcher discovers these file paths
                 */
                ignoreInitial?: boolean;
                /**
                 * Indicates whether to watch files that don't have read permissions if possible
                 */
                ignorePermissionErrors?: boolean;
                /**
                 * Interval of file system polling (used when usePolling = true)
                 */
                interval?: number;
                /**
                 * Interval of file system polling for binary files (used when usePolling = true)
                 */
                binaryInterval?: number;
                /**
                 * If set to true then the strings passed to .watch() and .add() are treated as literal path names,
                 * even if they look like globs
                 */
                disableGlobbing?: boolean;
                /**
                 * Whether to use the fsevents watching interface if available (true on mac by default)
                 */
                useFsEvents?: boolean;
                /**
                 * Whether to use fs.watchFile (backed by polling), or fs.watch.
                 */
                usePolling?: boolean;
                /**
                 * Automatically filters out artifacts that occur when using editors that use "atomic writes"
                 * instead of writing directly to the source file. If a file is re-added within 100 ms of being deleted,
                 * wather emits a change event rather than unlink then add
                 */
                atomic?: boolean | number;
                /**
                 * When false, only the symlinks themselves will be watched for changes
                 * instead of following the link references and bubbling events through the link's path
                 */
                followSymlinks?: boolean;
                /**
                 * If truthy, defines settings to control how long a file must not change after add/change events and only then emit the event
                 */
                awaitWriteFinish?: boolean | {
                    /**
                     * Amount of time in milliseconds for a file size to remain constant before emitting its event
                     */
                    stabilityThreshold?: number,
                    /**
                     * File size polling interval
                     */
                    pollInterval?: number
                };
                /**
                 * Defines files/paths to be ignored
                 */
                ignored?: string[];
                /**
                 * Always passes fs.Stat file with `add`, `addDir` events
                 */
                alwaysStat?: boolean;
                /**
                 * If set, limits how many levels of subdirectories will be traversed
                 */
                depth?: number;
                /**
                 * The base directory from which watch paths are to be derived
                 */
                cwd?: string;
            }

            type Event = "add" | "addDir" | "change" | "unlink" | "unlinkDir" | "ready" | "raw" | "error";
        }

        /**
         * Represents a file watcher
         */
        class Watcher extends event.Emitter {
            constructor(options?: I.Watcher.ConstructorOptions);

            /**
             * Adds files, directories, or glob patterns for tracking
             */
            add(path: string | string[]): this;

            /**
             * Stops watching files, directories, or glob patterns.
             */
            unwatch(path: string | string[]): this;

            /**
             * Removes all listeners from watched files
             */
            close(): this;

            /**
             * Returns an object representing all the paths on the file system being watched by this watcher
             */
            getWatched(): { [path: string]: string[] };

            on(event: "all", callback: (event: I.Watcher.Event, path: string, stat?: I.Stats) => void): this;
            on(event: "raw", callback: (event: string, path: string, details: object) => void): this;
            on(event: I.Watcher.Event, callback: (path: string, stat?: I.Stats) => void): this;
        }

        /**
         * Creates a Watcher instance with the given options and starts watching the given paths
         */
        function watch(paths: string | string[], options?: I.Watcher.ConstructorOptions): Watcher;

        namespace is {
            /**
             * Returns true if the given path refers to a file
             */
            function file(path: string): Promise<boolean>;

            /**
             * Returns true if the given path refers to a file
             */
            function fileSync(path: string): boolean;

            /**
             * Returns true if the given path refers to a direcotry
             */
            function directory(path: string): Promise<boolean>;

            /**
             * Returns true if the given path refers to a direcotry
             */
            function directorySync(path: string): boolean;

            /**
             * Returns true if the given path refers to an executable file
             */
            function executable(path: string): Promise<boolean>;

            /**
             * Returns true if the given path refers to an executable file
             */
            function executableSync(path: string): boolean;
        }

        namespace I.Which {
            interface Options {
                colon?: string;
                path?: string;
                pathExt?: string;
                nothrow?: boolean;
                all?: boolean;
            }

            interface OptionsAll extends Options {
                all: true;
            }

            interface OptionsNothrow extends Options {
                nothrow: true;
            }

            interface OptionsAllNothrow extends Options {
                all: true;
                nothrow: true;
            }
        }

        /**
         * Finds instances of a specified executable in the PATH environment variable
         */
        function which(cmd: string, options: I.Which.OptionsAllNothrow): Promise<string[] | null>;

        /**
         * Finds instances of a specified executable in the PATH environment variable
         */
        function which(cmd: string, options: I.Which.OptionsAll): Promise<string[]>;

        /**
         * Finds the first instance of a specified executable in the PATH environment variable
         */
        function which(cmd: string, options: I.Which.OptionsNothrow): Promise<string | null>;

        /**
         * Finds instances of a specified executable in the PATH environment variable
         */
        function which(cmd: string, options?: I.Which.Options): Promise<string>;

        /**
         * Finds instances of a specified executable in the PATH environment variable
         */
        function whichSync(cmd: string, options: I.Which.OptionsAllNothrow): string[] | null;

        /**
         * Finds instances of a specified executable in the PATH environment variable
         */
        function whichSync(cmd: string, options: I.Which.OptionsAll): string[];

        /**
         * Finds the first instance of a specified executable in the PATH environment variable
         */
        function whichSync(cmd: string, options: I.Which.OptionsNothrow): string | null;

        /**
         * Finds instances of a specified executable in the PATH environment variable
         */
        function whichSync(cmd: string, options?: I.Which.Options): string;

        /**
         * Opens and possibly creates a file
         */
        function open(path: string | Buffer | I.URL, flags: I.Flag | number, mode?: number): Promise<I.FD>;

        /**
         * Opens and possibly creates a file
         */
        function openSync(path: string | Buffer | I.URL, flags: I.Flag | number, mode?: number): I.FD;

        /**
         * Closes a file descriptor
         */
        function close(fd: I.FD): Promise<void>;

        /**
         * Closes a file descriptor
         */
        function closeSync(fd: I.FD): void;

        /**
         * Changes the file timestamps of a file referenced by the supplied file descriptor
         */
        function futimes(fd: I.FD, atime: number, mtime: number): Promise<void>;

        /**
         * Changes the file timestamps of a file referenced by the supplied file descriptor
         */
        function futimesSync(fd: I.FD, atime: number, mtime: number): void;

        /**
         * Gets file status
         */
        function fstat(fd: I.FD): Promise<I.Stats>;

        /**
         * Gets file status
         */
        function fstatSync(fd: I.FD): I.Stats;

        /**
         * Truncates a file to a specified length
         */
        function ftruncate(fd: I.FD, length?: number): Promise<void>;

        /**
         * Truncates a file to a specified length
         */
        function ftruncateSync(fd: I.FD, length?: number): void;

        /**
         * Read data from the file specified by fd
         */
        function read(
            fd: I.FD,
            /**
             * The buffer that the data will be written to
             */
            buffer: Buffer | Uint8Array,
            /**
             * The offset in the buffer to start writing at
             */
            offset: number,
            /**
             * An integer specifying the number of bytes to read
             */
            length: number,
            /**
             * An argument specifying where to begin reading from in the file
             */
            position: number
        ): Promise<number>;

        function readSync(
            fd: I.FD,
            /**
             * The buffer that the data will be written to
             */
            buffer: Buffer | Uint8Array,
            /**
             * The offset in the buffer to start writing at
             */
            offset: number,
            /**
             * An integer specifying the number of bytes to read
             */
            length: number,
            /**
             * An argument specifying where to begin reading from in the file
             */
            position: number
        ): number;

        /**
         * Writes buffer to the file specified by fd
         */
        function write(
            fd: I.FD,
            buffer: Buffer | Uint8Array,
            /**
             * Determines the part of the buffer to be written
             */
            offset?: number,
            /**
             * An integer specifying the number of bytes to write
             */
            length?: number,
            /**
             * The offset from the beginning of the file where this data should be written
             */
            position?: number
        ): Promise<number>;

        /**
         * Writes string to the file specified by fd
         */
        function write(
            fd: I.FD,
            string: string,
            /**
             * The offset from the beginning of the file where this data should be written
             */
            position?: number,
            /**
             * The expected string encoding
             */
            encoding?: I.Encoding
        ): Promise<number>;

        /**
         * Writes buffer to the file specified by fd
         */
        function writeSync(
            fd: I.FD,
            buffer: Buffer | Uint8Array,
            /**
             * Determines the part of the buffer to be written
             */
            offset?: number,
            /**
             * An integer specifying the number of bytes to write
             */
            length?: number,
            /**
             * The offset from the beginning of the file where this data should be written
             */
            position?: number
        ): number;

        /**
         * Writes string to the file specified by fd
         */
        function writeSync(
            fd: I.FD,
            string: string,
            /**
             * The offset from the beginning of the file where this data should be written
             */
            position?: number,
            /**
             * The expected string encoding
             */
            encoding?: I.Encoding
        ): number;

        /**
         * Synchronizes a file's in-core state with storage
         */
        function fsync(fd: I.FD): Promise<void>;

        /**
         * Synchronizes a file's in-core state with storage
         */
        function fsyncSync(fd: I.FD): void;

        /**
         * Changes ownership of a file
         */
        function fchown(fd: I.FD, uid: number, gid: number): Promise<void>;

        /**
         * Changes ownership of a file
         */
        function fchownSync(fd: I.FD, uid: number, gid: number): void;

        /**
         * Changes permissions of a file
         */
        function fchmod(fd: I.FD, mode: number): Promise<void>;

        /**
         * Changes permissions of a file
         */
        function fchmodSync(fd: I.FD, mode: number): void;

        /**
         * Repositions read/write file offset
         */
        function seek(fd: I.FD, offset: number, whence: number): Promise<number>;

        /**
         * Applies or removes an advisory lock on an open file
         */
        function flock(fd: I.FD, flags: "sh" | "ex" | "shnb" | "exnb" | "un" | number): Promise<void>;

        namespace constants {
            const F_OK: number;
            const LOCK_EX: number;
            const LOCK_NB: number;
            const LOCK_SH: number;
            const LOCK_UN: number;
            const O_APPEND: number;
            const O_CREAT: number;
            const O_DIRECT: number;
            const O_DIRECTORY: number;
            const O_EXCL: number;
            const O_NOATIME: number;
            const O_NOCTTY: number;
            const O_NOFOLLOW: number;
            const O_NONBLOCK: number;
            const O_RDONLY: number;
            const O_RDWR: number;
            const O_SYNC: number;
            const O_TRUNC: number;
            const O_WRONLY: number;
            const R_OK: number;
            const SEEK_CUR: number;
            const SEEK_END: number;
            const SEEK_SET: number;
            const S_IFBLK: number;
            const S_IFCHR: number;
            const S_IFDIR: number;
            const S_IFIFO: number;
            const S_IFLNK: number;
            const S_IFMT: number;
            const S_IFREG: number;
            const S_IFSOCK: number;
            const S_IRGRP: number;
            const S_IROTH: number;
            const S_IRUSR: number;
            const S_IRWXG: number;
            const S_IRWXO: number;
            const S_IRWXU: number;
            const S_IWGRP: number;
            const S_IWOTH: number;
            const S_IWUSR: number;
            const S_IXGRP: number;
            const S_IXOTH: number;
            const S_IXUSR: number;
            const W_OK: number;
            const X_OK: number;
        }

        /**
         * Returns the canonicalized absolute pathname
         */
        function realpath(path: string | Buffer | I.URL, encoding: "buffer"): Promise<Buffer>;
        function realpath(path: string | Buffer | I.URL, encoding: I.Encoding): Promise<string>;
        function realpath(path: string | Buffer | I.URL, options: { encoding: "buffer" }): Promise<Buffer>;
        function realpath(path: string | Buffer | I.URL, options?: { encoding?: I.Encoding }): Promise<string>;

        /**
         * Returns the canonicalized absolute pathname
         */
        function realpathSync(path: string | Buffer | I.URL, encoding: "buffer"): Buffer;
        function realpathSync(path: string | Buffer | I.URL, encoding: I.Encoding): string;
        function realpathSync(path: string | Buffer | I.URL, options: { encoding: "buffer" }): Buffer;
        function realpathSync(path: string | Buffer | I.URL, options?: { encoding?: I.Encoding }): string;

        namespace I {
            interface ReadFileOptions {
                check?: boolean;
                flags?: Flag;
                encoding?: null | Encoding;
            }
        }

        /**
         * Reads a file
         */
        function readFile(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { check: true, encoding: null }): Promise<Buffer | null>;
        function readFile(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { check: true, encoding: I.Encoding }): Promise<string | null>;
        function readFile(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { check: true }): Promise<Buffer | null>;
        function readFile(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { encoding: null }): Promise<Buffer>;
        function readFile(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { encoding: I.Encoding }): Promise<string>;
        function readFile(filepath: string | Buffer | I.URL, options: I.ReadFileOptions): Promise<Buffer>;
        function readFile(filepath: string | Buffer | I.URL, encoding: null): Promise<Buffer>;
        function readFile(filepath: string | Buffer | I.URL, encoding: I.Encoding): Promise<string>;
        function readFile(filepath: string | Buffer | I.URL): Promise<Buffer>;

        /**
         * Reads a file
         */
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { check: true, encoding: null }): Buffer | null;
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { check: true, encoding: I.Encoding }): string | null;
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { check: true }): Buffer | null;
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { encoding: null }): Buffer;
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions & { encoding: I.Encoding }): string;
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions): Buffer;
        function readFileSync(filepath: string | Buffer | I.URL, options: I.ReadFileOptions): Buffer;
        function readFileSync(filepath: string | Buffer | I.URL, encoding: null): Buffer;
        function readFileSync(filepath: string | Buffer | I.URL, encoding: I.Encoding): string;
        function readFileSync(filepath: string | Buffer | I.URL): Buffer;

        /**
         * Reads lines from a file
         */
        function readLines(filepath: string | Buffer | I.URL, options: { check: true, flags?: I.Flag, encoding?: null | I.Encoding }): Promise<string[] | null>;
        function readLines(filepath: string | Buffer | I.URL, options: { check?: false, flags?: I.Flag, encoding?: null | I.Encoding }): Promise<string[]>;
        function readLines(filepath: string | Buffer | I.URL, encoding?: null | I.Encoding): Promise<string[]>;

        /**
         * Reads lines from a file
         */
        function readLinesSync(filepath: string | Buffer | I.URL, options: { check: true, flags?: I.Flag, encoding?: null | I.Encoding }): string[] | null;
        function readLinesSync(filepath: string | Buffer | I.URL, options: { check?: false, flags?: I.Flag, encoding?: null | I.Encoding }): string[];
        function readLinesSync(filepath: string | Buffer | I.URL, encoding?: null | I.Encoding): string[];

        /**
         * Reads words from a file
         */
        function readWords(filepath: string | Buffer | I.URL, options: { check: true, flags?: I.Flag, encoding?: null | I.Encoding }): Promise<string[] | null>;
        function readWords(filepath: string | Buffer | I.URL, options: { check?: false, flags?: I.Flag, encoding?: null | I.Encoding }): Promise<string[]>;
        function readWords(filepath: string | Buffer | I.URL, encoding?: null | I.Encoding): Promise<string[]>;

        /**
         * Reads words from a file
         */
        function readWordsSync(filepath: string | Buffer | I.URL, options: { check: true, flags?: I.Flag, encoding?: null | I.Encoding }): string[] | null;
        function readWordsSync(filepath: string | Buffer | I.URL, options: { check?: false, flags?: I.Flag, encoding?: null | I.Encoding }): string[];
        function readWordsSync(filepath: string | Buffer | I.URL, encoding?: null | I.Encoding): string[];

        /**
         * Checks whether a file exists
         */
        function exists(path: string | Buffer | I.URL): Promise<boolean>;

        /**
         * Checks whether a file exists
         */
        function existsSync(path: string | Buffer | I.URL): boolean;

        /**
         * Creates a new directory
         */
        function mkdir(path: string, mode?: number): Promise<void>;

        /**
         * Creates a new directory
         */
        function mkdirSync(path: string, mode?: number): Promise<void>;

        /**
         * Creates a new directory and any necessary subdirectories
         */
        function mkdirp(path: string, mode?: number): Promise<void>;

        /**
         * Creates a new directory and any necessary subdirectories
         */
        function mkdirpSync(path: string, mode?: number): Promise<void>;

        namespace I {
            interface CopyOptions {
                /**
                 * regexp or function against which each filename is tested whether to copy it or not
                 */
                filter?: RegExp | ((src: string, dst: string) => boolean);

                /**
                 * transform function which applies when files are streamed
                 */
                transform?(
                    readStream: NodeJS.ReadableStream,
                    writeStream: NodeJS.WritableStream,
                    file: {
                        name: string,
                        mode: number,
                        mtime: Date,
                        atime: Date,
                        stats: adone.fs.I.Stats
                    }
                ): void;

                /**
                 * Whether to overwrite destination files if they exist.
                 *
                 * true by default
                 */
                clobber?: boolean; // ???

                /**
                 * Whether to overwrite destination files if they exist.
                 *
                 * true by default
                 */
                overwrite?: boolean;
            }

            interface CopyToOptions {
                /**
                 * Do not replace existing files
                 */
                ignoreExisting?: boolean;

                /**
                 * Base direcotry for paths
                 */
                cwd?: string;
            }
        }

        /**
         * Recursively copies all the files from src to dst
         */
        function copy(src: string, dst: string, options?: I.CopyOptions): Promise<void>;

        /**
         * Copies all files from src to dst
         */
        function copyTo(src: string, dst: string, options?: I.CopyToOptions): Promise<void>;

        /**
         * Renames a file
         */
        function rename(oldPath: string, newPath: string, options?: {
            /**
             * Will retry if fails with EPERM or EACCESS errors
             */
            retries?: number,
            /**
             * Will retry after this delay
             */
            delay?: number
        }): Promise<void>;

        /**
         * Returns the last lines of a file
         *
         * @param path path to a file
         * @param n number of lines to return
         */
        function tail(path: string, n: number, options?: {
            /**
             * Line separator
             *
             * By default "\r\n" for windows and "\n" for others
             */
            separator?: string,

            /**
             * The number of bytes to read at once
             *
             * By default 4096
             */
            chunkLength?: number

            /**
             * Position from which to start reading (from the end)
             *
             * By default stats.size of the file
             */
            pos?: number
        }): Promise<Buffer[]>;

        namespace I {
            interface StatVFS {
                /**
                 * Maximum filename length
                 */
                f_namemax: number;

                /**
                 * File system block size
                 */
                f_bsize: number;

                /**
                 * Fragment size
                 */
                f_frsize: number;

                /**
                 * Size of fs in f_frsize units
                 */
                f_blocks: number;

                /**
                 * # free blocks for unprivileged users
                 */
                f_bavail: number;

                /**
                 * # free blocks
                 */
                f_bfree: number;

                /**
                 * # inodes
                 */
                f_files: number;

                /**
                 * # free inodes for unprivileged users
                 */
                f_favail: number;

                /**
                 * # free inodes
                 */
                f_ffree: number;
            }
        }

        /**
         * Returns information about a mounted file system
         */
        function statVFS(path: string): Promise<I.StatVFS>;

        namespace I {
            interface ReadStreamOptions {
                flags?: Flag;
                encoding?: Encoding | null;
                /**
                 * File mode
                 */
                mode?: number;
                /**
                 * Inclusive start of the reading range
                 */
                start?: number;
                /**
                 * Inclusive end of the reading range
                 */
                end?: number;
            }

            interface ReadStreamOptionsFD extends ReadStreamOptions {
                /**
                 * Use the specified file descriptor for reading instead of `path`
                 */
                fd: number;
                /**
                 * Whether to close the file descriptor
                 */
                autoClose?: boolean;
            }
        }

        /**
         * Returns a read stream for the given file
         */
        function createReadStream(path: null | undefined, options: I.ReadStreamOptionsFD): I.ReadStream;
        function createReadStream(path: string | Buffer | I.URL, options?: I.ReadStreamOptions): I.ReadStream;
        function createReadStream(path: string | Buffer | I.URL, encoding: I.Encoding | null): I.ReadStream;

        namespace I {
            interface WriteStreamOptions {
                flags?: Flag;
                defaultEncoding?: Encoding | null;
                /**
                 * File mode
                 */
                mode?: number;
                /**
                 * Start position to write data at some position past the beginning of the file
                 */
                start?: number;
            }

            interface WriteStreamOptionsFD extends WriteStreamOptions {
                /**
                 * Use the specified file descriptor for writing instead of `path`
                 */
                fd: number;
                /**
                 * Whether to close the file descriptor
                 */
                autoClose?: boolean;
            }
        }

        /**
         * Returns a write stream to the given file
         */
        function createWriteStream(path: null | undefined, options: I.WriteStreamOptionsFD): I.WriteStream;
        function createWriteStream(path: string | Buffer | I.URL, options?: I.WriteStreamOptions): I.WriteStream;
        function createWriteStream(path: string | Buffer | I.URL, encoding: I.Encoding | null): I.WriteStream;

        namespace I {
            interface TmpNameOptions {
                name?: string;
                tries?: number;
                template?: RegExp;
                dir?: string;
                prefix?: string;
                ext?: string;
            }
        }

        /**
         * Generates a temporary filepath
         */
        function tmpName(options?: I.TmpNameOptions): Promise<string>;

        /**
         * Returns the current user homedir
         */
        function homeDir(): string;

        /**
         * TODO
         */
        function lookup(path: string): Promise<string>;

        namespace I.TailWatcher {
            interface ConstructorOptions {
                /**
                 * Uses this separator to split lines
                 */
                separator?: string | RegExp;
                /**
                 * Options for fs.watch
                 */
                fsWatchOptions?: object;
                /**
                 * Start from the beginning of the file
                 */
                fromBeginning?: boolean;
                /**
                 * Follow the file when it renames
                 */
                follow?: boolean;
                /**
                 * use fs.watchFile
                 */
                useWatchFile?: boolean;
                /**
                 * Use the given encoding for reading
                 */
                encoding?: Encoding | null;
                /**
                 * Start watching from the given position
                 */
                pos?: number;
            }
        }

        /**
         * Represents an event emitter that watches for a file growing,
         * emits "line" event for each new line in a file
         */
        class TailWatcher extends event.Emitter {
            constructor(filename: string, options?: I.TailWatcher.ConstructorOptions);

            /**
             * Stop watching
             */
            unwatch(): void;

            on(event: "line", callback: (line: string) => void): this;
        }

        /**
         * Creates a new TailWatcher instance with the given arguments
         */
        function watchTail(filename: string, options?: I.TailWatcher.ConstructorOptions): TailWatcher;
    }
}
