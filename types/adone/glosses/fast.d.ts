declare namespace adone {
    /**
     * Filesystem Automation Streaming Templates/Transforms
     */
    namespace fast {
        // File is based on vinyl typings
        // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/vinyl/index.d.ts

        namespace I {
            interface FileConstructorOptions {
                /**
                 * The current workring directory of the file. Default: process.cwd()
                 */
                cwd?: string;

                /**
                 * Full path to the file
                 */
                path?: string;

                /**
                 * Stores the path history
                 */
                history?: string[];

                /**
                 * The result of a fs.Stat call
                 */
                stat?: fs.I.Stats;

                /**
                 * File contents
                 */
                contents?: null | Buffer | nodestd.stream.Readable;

                /**
                 * Used for relative pathing. Typically where a glob starts. Default: options.cwd
                 */
                base?: string;

                symlink?: string;
            }

            interface FileCloneOptions {
                contents?: boolean;
                deep?: boolean;
            }

            interface FileConstructor {
                new(options: FileConstructorOptions & { contents: Buffer }): BufferFile;
                new(options: FileConstructorOptions & { contents: nodestd.stream.Readable }): StreamFile;
                new(options?: FileConstructorOptions): NullFile;

                prototype: File;
            }

            interface File {
                /**
                 * Gets and sets the contents of the file
                 */
                contents: null | Buffer | nodestd.stream.Readable;

                /**
                 * Gets and sets current working directory. Will always be normalized and have trailing separators removed.
                 */
                cwd: string;

                /**
                 * Gets and sets base directory. Used for relative pathing (typically where a glob starts).
                 */
                base: string;

                /**
                 * Gets and sets the absolute pathname string or `undefined`. Setting to a different value
                 * appends the new path to `file.history`. If set to the same value as the current path, it
                 * is ignored. All new values are normalized and have trailing separators removed.
                 */
                path: string;

                stat: fs.I.Stats;

                /**
                 * Gets the result of `path.relative(file.base, file.path)`. Or sets a new relative path for file.base
                 */
                relative: string;

                /**
                 * Gets and sets the dirname of `file.path`. Will always be normalized and have trailing
                 * separators removed.
                 */
                dirname: string;

                /**
                 * Gets and sets the basename of `file.path`.
                 */
                basename: string;

                /**
                 * Gets and sets extname of `file.path`.
                 */
                extname: string;

                /**
                 * Gets and sets stem (filename without suffix) of `file.path`.
                 */
                stem: string;

                /**
                 * Array of `file.path` values the file has had, from `file.history[0]` (original)
                 * through `file.history[file.history.length - 1]` (current). `file.history` and its elements
                 * should normally be treated as read-only and only altered indirectly by setting `file.path`.
                 */
                readonly history: ReadonlyArray<string>;

                /**
                 * Gets and sets the path where the file points to if it's a symbolic link. Will always
                 * be normalized and have trailing separators removed.
                 */
                symlink: string;

                /**
                 * Returns a new File object with all attributes cloned.
                 */
                clone(options: FileCloneOptions & { contents: true }): this;
                clone(options?: FileCloneOptions): File;

                isBuffer(): boolean;

                isStream(): boolean;

                isNull(): boolean;

                isDirectory(): boolean;

                isSymbolic(): boolean;
            }

            interface NullFile extends File {
                contents: null;
            }

            interface BufferFile extends File {
                contents: Buffer;
                //
            }

            interface StreamFile extends File {
                contents: nodestd.stream.Readable;
            }

            type DirectoryFile = File;
            type SymbolicFile = File;

            /* tslint:disable-next-line:no-empty-interface */
            interface Stream<S, T = File> extends stream.core.Stream<S, T> {
                //
            }
        }

        export const File: I.FileConstructor;

        namespace I {
            type CoreStreamSource = stream.core.I.Source<any, File>;

            interface LocalStreamConstructorOptions {
                /**
                 * Whether to read files. Default: true
                 */
                read?: boolean;

                /**
                 * Read files as buffers. Default: true
                 */
                buffer?: boolean;

                /**
                 * Read files as streams
                 */
                stream?: boolean;

                /**
                 * Current working directory for files. Default: process.cwd()
                 */
                cwd?: string;
            }

            interface LocalStreamConstructor {
                new(source: CoreStreamSource | File[], options: LocalStreamConstructorOptions & { read: false }): LocalStream<NullFile>;
                new(source: CoreStreamSource | File[], options: LocalStreamConstructorOptions & { stream: true }): LocalStream<StreamFile>;
                new(source: CoreStreamSource | File[], options?: LocalStreamConstructorOptions): LocalStream<BufferFile>;

                prototype: LocalStream<File>;
            }

            interface LocalStreamDestOptions {
                /**
                 * Mode that is used for writing
                 */
                mode?: number;

                /**
                 * Flag that is used for writing
                 */
                flag?: fs.I.Flag;

                /**
                 * Current working directory for files, dest is resolved using this cwd. Default: constuctor cwd or process.cwd()
                 */
                cwd?: string;

                /**
                 * Whether to push written files into the stream
                 */
                produceFiles?: boolean;

                /**
                 * Whether to inherit the source file's mode (access properties)
                 */
                originMode?: boolean;

                /**
                 * Whether to inherit the source file's time properties (atime, mtime)
                 */
                originTimes?: boolean;

                /**
                 * Whether to inherit the source file's uid and gid
                 */
                originOwner?: boolean;
            }

            interface LocalStream<T> extends Stream<File, T> {
                /**
                 * Writes all files into the given directory
                 *
                 * @param directory directory where to write files
                 */
                dest(directory: string, options?: LocalStreamDestOptions): this;

                /**
                 * Writes all files into the given directory using the given callback
                 *
                 * @param getDirectory callback that returns a directory for each file
                 */
                dest(getDirectory: (file: T) => string, options?: LocalStreamDestOptions): this;
            }
        }

        export const LocalStream: I.LocalStreamConstructor;

        namespace I {
            interface SrcOptions extends LocalStreamConstructorOptions {
                /**
                 * Used for relative pathing of files. Typically where a glob starts.
                 */
                base?: string;

                /**
                 * Whether to match dotted files (hidden). Default: true
                 */
                dot?: boolean;

                /**
                 * Whether to lstat instead of stat when stating. Default: false
                 */
                links?: boolean;
            }
        }

        /**
         * @param globs Source file/files
         */
        function src(globs: string | string[], options: I.SrcOptions & { read: false }): I.LocalStream<I.NullFile>;
        function src(globs: string | string[], options: I.SrcOptions & { stream: true }): I.LocalStream<I.StreamFile>;
        function src(globs: string | string[], options?: I.SrcOptions): I.LocalStream<I.BufferFile>;

        namespace I {
            type WatcherConstructorOptions = fs.I.Watcher.ConstructorOptions;

            interface WatchOptions extends WatcherConstructorOptions, LocalStreamConstructorOptions {
                /**
                 * Used for relative pathing of files. Typically where a glob starts.
                 */
                base?: string;

                /**
                 * Whether to match dotted files (hidden). Default: true
                 */
                dot?: boolean;

                /**
                 * Whether to resume the stream on the next tick. Default: true
                 */
                resume?: boolean;
            }
        }

        /**
         * @param globs Source file/files
         */
        function watch(globs: string | string[], options: I.WatchOptions & { read: false }): I.LocalStream<I.NullFile>;
        function watch(globs: string | string[], options: I.WatchOptions & { stream: true }): I.LocalStream<I.StreamFile>;
        function watch(globs: string | string[], options?: I.WatchOptions): I.LocalStream<I.BufferFile>;

        namespace I {
            interface LocalMapStream<T> extends Stream<File, T> {
                dest(options?: LocalStreamDestOptions): this;
            }

            interface Mapping {
                /**
                 * Source file/files
                 */
                from: string;

                /**
                 * Destination directory
                 */
                to: string;
            }

            interface MapOptions extends LocalStreamConstructorOptions {
                /**
                 * Used for relative pathing of files. Typically where a glob starts.
                 */
                base?: string;

                /**
                 * Whether to match dotted files (hidden). Default: true
                 */
                dot?: boolean;
            }

            type WatchMapOptions = MapOptions & WatcherConstructorOptions;

            type MapSource = Mapping | Mapping[];
        }

        /**
         * The same as fast.src, but source and dest paths are defined in one place
         */
        function map(mappings: I.MapSource, options: I.MapOptions & { read: false }): I.LocalMapStream<I.NullFile>;
        function map(mappings: I.MapSource, options: I.MapOptions & { stream: true }): I.LocalMapStream<I.StreamFile>;
        function map(mappings: I.MapSource, options?: I.MapOptions): I.LocalMapStream<I.BufferFile>;

        function watchMap(mappings: I.MapSource, options: I.WatchMapOptions & { read: false }): I.LocalMapStream<I.NullFile>;
        function watchMap(mappings: I.MapSource, options: I.WatchMapOptions & { stream: true }): I.LocalMapStream<I.StreamFile>;
        function watchMap(mappings: I.MapSource, options?: I.WatchMapOptions): I.LocalMapStream<I.BufferFile>;

        // plugins

        namespace I {
            namespace plugin.compressor {
                type Compressor = "gz" | "deflate" | "brotli" | "lzma" | "xz" | "snappy"; // TODO keyof adone.compressor ?
            }

            interface Stream<S, T> {
                /**
                 * Compresses all files using the given compressor
                 */
                compress(this: {}, type: plugin.compressor.Compressor, options?: {
                    /**
                     * Whether to rename files, adds corresponding extname
                     */
                    rename?: boolean,
                    [key: string]: any
                }): this;

                /**
                 * Decompresses all files using the given compressor
                 */
                decompress(type: plugin.compressor.Compressor, options?: object): this;
            }

            namespace plugin.archive {
                type Archiver = "tar" | "zip"; // TODO keyof adone.archive ?
            }

            interface Stream<S, T> {
                /**
                 * Packs all files into one archive of the given type
                 */
                pack(type: plugin.archive.Archiver, options?: object): this;

                /**
                 * Unpacks the incoming files using the given archive type
                 */
                unpack(type: plugin.archive.Archiver, options?: object): this;

                /**
                 * transpiles files
                 */
                transpile(options: object): this; // TODO adone.js.transpiler options

                /**
                 * Deletes lines from files
                 */
                deleteLines(filters: RegExp | RegExp[]): this;

                /**
                 * sets new filename
                 */
                rename(filename: string): this;
                rename(handle: {
                    dirname?: string,
                    prefix?: string,
                    basename?: string,
                    extname?: string
                }): this;
                rename(handler: (handle: {
                    dirname: string,
                    basename: string,
                    extname: string
                }) => void): this;

                /**
                 * concats all files into one
                 */
                concat(file: string | { path: string }, options?: {
                    newLine?: string
                }): this;

                // flatten(options?: {
                //     newPath?: string,
                //     includeParents?: number | [number, number],
                //     subPath?: number | [number, number],
                // }): this;
            }

            namespace plugin.sourcemaps {
                interface WriteOptions<T> {
                    /**
                     * By default the source maps include the source code. Pass false to use the original files
                     */
                    includeContent?: boolean;

                    /**
                     * By default a comment containing / referencing the source map is added.
                     * Set this to false to disable the comment (e.g. if you want to load the source maps by header)
                     */
                    addComment?: boolean;

                    /**
                     * Sets the charset for inline source maps
                     */
                    charset?: fs.I.Encoding;

                    /**
                     * Set the location where the source files are hosted (use this when includeContent is set to false)
                     */
                    sourceRoot?: string | ((file: T) => string);

                    /**
                     * Function that is called for every source and receives the default source path as a parameter and the original file
                     */
                    mapSources?(path: string, file: T): string;
                    mapSourcesAbsolute?: boolean;

                    /**
                     * This option allows to rename the map file.
                     * It takes a function that is called for every map and receives the default map path as a parameter
                     */
                    mapFile?(file: T): string;

                    /**
                     * Set the destination path
                     */
                    destPath?: string;

                    /**
                     * Clone options
                     */
                    clone?: FileCloneOptions;

                    /**
                     * Specify a prefix to be prepended onto the source map URL when writing external source maps.
                     */
                    sourceMappingURLPrefix?: string | ((file: T) => string);

                    /**
                     * The output of the function must be the full URL to the source map (in function of the output file)
                     */
                    sourceMappingURL?(file: T): string;
                }
            }

            interface Stream<S, T> {
                sourcemapsInit(options?: {
                    /**
                     * Whether to load existing sourcemaps
                     */
                    loadMaps?: boolean,

                    /**
                     * Whether to generate initial sourcemaps instead of using empty sourcemap
                     */
                    identityMap?: boolean,

                    largeFile?: boolean
                }): this;

                /**
                 *
                 *
                 * @param dest destination directory
                 */
                sourcemapsWrite(dest: string, options?: plugin.sourcemaps.WriteOptions<T>): this;
                sourcemapsWrite(options?: plugin.sourcemaps.WriteOptions<T>): this;
            }

            namespace plugin.wrap {
                interface Options {
                    /**
                     * Set to explicit false value to disable automatic JSON, JSON5 and YAML parsing
                     */
                    parse?: boolean;
                    escape?: RegExp;
                    evaluate?: RegExp;
                    imports?: object;
                    interpolate?: RegExp;
                    sourceURL?: string;
                    variable?: string;
                }

                interface TemplateFunctionData<T> extends Options {
                    file: T;
                    contents: object;
                    [custom: string]: any;
                }
            }

            interface Stream<S, T> {
                /**
                 * Wraps contents
                 */
                wrap(
                    template: { src: string } | string | ((data: plugin.wrap.TemplateFunctionData<T>) => string),
                    data?: object | ((file: T) => object),
                    options?: plugin.wrap.Options | ((file: T) => plugin.wrap.Options)
                ): this;

                /**
                 * Replaces contents
                 */
                replace(search: string, replacement: string | ((search: string) => string)): this;
                replace(search: RegExp, replacement: string): this;
                replace(search: Array<string | RegExp>, replacement: Array<string | ((search: string) => string)>): this;

                /**
                 * Static asset revisioning by appending content hash to filenames
                 */
                revisionHash(options?: {
                    manifest: {
                        path?: string,
                        merge?: boolean
                        transformer?: {
                            parse(str: string): any;
                            stringify(obj: any): string;
                        }
                    }
                }): this;

                /**
                 * Rewrite occurrences of filenames which have been renamed by revisionHash
                 */
                revisionHashReplace(options?: {
                    /**
                     * Use canonical Uris when replacing filePaths,
                     * i.e. when working with filepaths with non forward slash (/) path separators
                     * we replace them with forward slash.
                     * Default: true
                     */
                    canonicalUris?: boolean,

                    /**
                     * Add the prefix string to each replacement
                     */
                    prefix?: string,

                    /**
                     * Only substitute in new filenames in files of these types
                     * Default: ['.js', '.css', '.html', '.hbs']
                     */
                    replaceExtensions?: string[],

                    /**
                     * Read JSON manifests written out by revisionHash
                     */
                    manifest?: File[] | stream.core.Stream<any, File>,

                    /**
                     * Modify the name of the unreved files before using them
                     */
                    modifyUnreved?(path: string): string,

                    /**
                     * Modify the name of the reved files before using them
                     */
                    modifyReved?(path: string): string
                }): this;
            }

            namespace plugin.chmod {
                interface Access {
                    /**
                     * Whether to have read access
                     */
                    read?: boolean;

                    /**
                     * Whether to have write access
                     */
                    write?: boolean;

                    /**
                     * Whether to ahve execute access
                     */
                    execute?: boolean;
                }

                interface Mode {
                    /**
                     * Owner properties
                     */
                    owner?: Access;

                    /**
                     * Group properties
                     */
                    group?: Access;

                    /**
                     * Others properties
                     */
                    others?: Access;
                }
            }

            interface Stream<S, T> {
                /**
                 * Changes file mode
                 */
                chmod(mode?: number | plugin.chmod.Mode, dirMode?: number | plugin.chmod.Mode): this;
            }

            namespace plugin.notify {
                interface Options<T> {
                    notifier?: object; // TODO adone.notifier

                    host?: string;
                    appName?: string;
                    port?: number;

                    /**
                     * Filter out files
                     */
                    filter?(file: T): boolean;

                    /**
                     * Whether to emit an error when the stream emits an error. Default: false
                     */
                    emitError?: boolean;

                    /**
                     * Whether to notify on the last file. Default: false
                     */
                    onLast?: boolean;

                    /**
                     * Whether to debounce notifications. Accepts a number as timeout or debounce options
                     * Default: undefined
                     */
                    debounce?: number | util.I.DebounceOptions & {
                        /**
                         * debounce timeout
                         */
                        timeout: number
                    };

                    /**
                     * Object passed to the lodash template, for additional properties passed to the template
                     */
                    templateOptions?: object;

                    /**
                     * Whether to use console notifications (print a message to console)
                     */
                    console?: boolean;

                    /**
                     * Whether to use GUI notifications (notify-send/toaster/etc)
                     */
                    gui?: boolean;

                    /**
                     * Notification title
                     */
                    title?: string | ((file: T) => string);

                    /**
                     * Notification subtitle
                     */
                    subtitle?: string | ((file: T) => string);

                    open?: string | ((file: T) => string);

                    /**
                     * Notification message
                     */
                    message?: string | ((file: T) => string);
                }

                interface OnErrorOptions<T> extends Options<T> {
                    /**
                     * Whether to end the stream when an error occurs
                     */
                    endStream?: boolean;
                }

                type OptionsArg<T, O> = string | O | (() => O);
            }

            interface Stream<S, T> {
                /**
                 * Notify about passing through files
                 */
                notify(options?: plugin.notify.OptionsArg<T, plugin.notify.Options<T>>): this;

                /**
                 * Notify about errors
                 */
                notifyError(options?: plugin.notify.OptionsArg<T, plugin.notify.OnErrorOptions<T>>): this;
            }
        }

        namespace plugin {
            namespace notify {
                /**
                 * Creates a callback that can be used as a reporter for errors
                 */
                function onError<T = any>(options?: I.plugin.notify.OptionsArg<T, I.plugin.notify.OnErrorOptions<T>>): (error: T) => void;
            }
        }
    }
}
