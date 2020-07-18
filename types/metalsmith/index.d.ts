// Type definitions for metalsmith 2.3
// Project: https://github.com/segmentio/metalsmith
// Definitions by: Brian Lagerman <https://github.com/brian-lagerman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="node" />
import { Stats } from "fs";
interface Metalsmith {
    /**
     * Set the path of the `working` directory.
     * @param directory Relative or absolute `working` directory path.
     * @example
     * Set the relative `working` directory to './working'
     * Metalsmith(__dirname).directory("working");
     * @example
     * Set the absolute `working` directory to 'C:\Projects\Metalsmith\'
     * Metalsmith(__dirname).directory("C:\\\Projects\\\Metalsmith");
     * @link [API] https://github.com/segmentio/metalsmith#api
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L62
     */
    directory(directory: string): Metalsmith;
    /**
     * Get the absolute path of the `working` directory
     * @example
     * Retrieve the absolute `working` directory path
     * var wrk:string = Metalsmith(__dirname).directory();
     * @link [API] https://github.com/segmentio/metalsmith#api
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L62
     */
    directory(): string;
    /**
     * Set the path of the `source` directory.
     * @param path [path='src'] - Relative or absolute `source` directory path.
     * @example
     * Set the relative `source` directory to './src' (the default)
     * Metalsmith(__dirname).source("src");
     * @example
     * Set the absolute `source` directory to 'C:\Projects\Site\'
     * Metalsmith(__dirname).source("C:\\\Projects\\\Site");
     * @link [API] https://github.com/segmentio/metalsmith#sourcepath
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L90
     */
    source(path: string): Metalsmith;
    /**
     * Get the absolute path of the `source` directory.
     * @example
     * Retrieve the absolute `source` directory path
     * var src:string = Metalsmith(__dirname).source();
     * @link [API] https://github.com/segmentio/metalsmith#sourcepath
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L90
     */
    source(): string;
    /**
     * Set the path of the `destination` directory.
     * @param path [path='build'] - Relative or absolute `destination` directory path.
     * @example
     * Set the relative `destination` directory to './build' (the default)
     * Metalsmith(__dirname).destination("build");
     * @example
     * Set the absolute `destination` directory to 'C:\Projects\Out\'
     * Metalsmith(__dirname).destination("C:\\\Projects\\\Out");
     * @link [API] https://github.com/segmentio/metalsmith#destinationpath
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L104
     */
    destination(path: string): Metalsmith;
    /**
     * Get the absolute path of the `destination` directory.
     * @example
     * Retrieve the absolute `destination` directory path
     * var dst:string = Metalsmith(__dirname).destination();
     * @link [API] https://github.com/segmentio/metalsmith#destinationpath
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L104
     */
    destination(): string;
    /**
     * Set the `maximum` number of files to open at once.
     * @param max [max=Infinity] - The `maximum` number of open files.
     * @example
     * Set the `maximum` number of files to open at once to 50
     * Metalsmith(__dirname).concurrency(50);
     * @link [API] https://github.com/segmentio/metalsmith#concurrencymax
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L118
     */
    concurrency(max: number): Metalsmith;
    /**
     * Get the `maximum` number of files to open at once.
     * @example
     * Retrieve the `maximum` number of files to open at once
     * var max:number = Metalsmith(__dirname).concurrency();
     * @link [API] https://github.com/segmentio/metalsmith#concurrencymax
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L118
     */
    concurrency(): number;
    /**
     * Set whether the destination directory will be `cleaned` before writing.
     * @param clean [clean=true] - Flag to `clean` destination directory.
     * @example
     * Set the flag to `clean` the destination directory to false
     * Metalsmith(__dirname).clean(false);
     * @link [API] https://github.com/segmentio/metalsmith#cleanboolean
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L132
     */
    clean(clean: boolean): Metalsmith;
    /**
     * Get the flag on whether the destination directory will be `cleaned` before writing.
     * @example
     * Retrieve the `clean` flag indicating destination directory removal
     * var clean:boolean = Metalsmith(__dirname).clean();
     * @link [API] https://github.com/segmentio/metalsmith#cleanboolean
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L132
     */
    clean(): boolean;
    /**
     * Set the flag on whether to parse YAML `frontmatter`
     * @param frontmatter [frontmatter=true] - Flag to parse YAML `frontmatter`.
     * @example
     * Set the flag to parse YAML `frontmatter` to false
     * Metalsmith(__dirname).frontmatter(false);
     * @link [API] https://github.com/segmentio/metalsmith#frontmatterboolean
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L145
     */
    frontmatter(frontmatter: boolean): Metalsmith;
    /**
     * Get the flag on whether to parse YAML `frontmatter`
     * @example
     * Retrieve the `frontmatter` flag indicating YAML parsing
     * var parse:boolean = Metalsmith(__dirname).frontmatter();
     * @link [API] https://github.com/segmentio/metalsmith#frontmatterboolean
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L145
     */
    frontmatter(): boolean;
    /**
     * Set the global `metadata` object to pass to templates.
     * @param metadata - The global metadata (json).
     * @example
     * Add 'sitename' to the global `metadata` object
     * Metalsmith(__dirname).metadata({sitename: "My Static Site"});
     * @link [API] https://github.com/segmentio/metalsmith#metadatajson
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L76
     */
    metadata(metadata: object): Metalsmith;
    /**
     * Get the global `metadata` object passed to templates.
     * @example
     * Retrieve the `metadata` object passed to templates
     * var meta:object = Metalsmith(__dirname).metadata();
     * @link [API] https://github.com/segmentio/metalsmith#metadatajson
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L76
     */
    metadata(): object;
    /**
     * Add a `plugin` function to the stack.
     * @param plugin - The plugin to add.
     * @example
     * Add 'metalsmith-markdown' to the middleware stack
     * Metalsmith(__dirname).use(markdown());
     * @link [API] https://github.com/segmentio/metalsmith#useplugin
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L50
     */
    use(plugin: Metalsmith.Plugin | Metalsmith.Plugin[]): Metalsmith;
    /**
     * Set the `Ignore` files/paths from being loaded into Metalsmith.
     * @param files - The file(s) or directories to `ignore`.
     * @example
     * Add an `ignore` file to prevent load into Metalsmith
     * Metalsmith(__dirname).ignore("corrupted.html");
     * @example
     * Add an `ignore` function to prevent load into Metalsmith
     * Metalsmith(__dirname).ignore(ignore(function (filepath: string, stats: Stats) {
     *      return stats.isDirectory() && path.basename(filepath) === 'nested';
     * });
     * @link [API] https://github.com/segmentio/metalsmith#ignorepath
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L159
     */
    ignore(files: string | string[] | Metalsmith.Ignore | Metalsmith.Ignore[]): Metalsmith;
    /**
     * Get the array of `Ignored` files/paths.
     * @example
     * Retrieve the `ignored` array of files in Metalsmith
     * var ingnored:string[] = Metalsmith(__dirname).ignore();
     * @link [API] https://github.com/segmentio/metalsmith#ignorepath
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L159
     */
    ignore(): string[];
    /**
     * Resolve `paths` relative to the root directory.
     * @param paths - The `paths` to resolve.
     * @example
     * Retrieve the path after resolving sub-directies
     * var path:string = Metalsmith(__dirname).path("path-a", "path-b");
     * @link [API] https://github.com/segmentio/metalsmith#pathpaths
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L171
     */
    path(...paths: string[]): string;
    /**
     * Perform the `build` with the current settings outputting to the destination directory.
     * @param fn - Optional Callback function.
     * @example
     * Perform the `build` with the current settings
     * Metalsmith(__dirname).build(
     * function (err: Error): any {
     *     if (err) {throw err;}
     * });
     * @link [API] https://github.com/segmentio/metalsmith#buildfn
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L184
     */
    build(fn?: Metalsmith.Callback): object;
    /**
     * `Process` files through plugins without writing out files.
     * @param fn - Optional Callback function.
     * @example
     * `Process` the files like `build` without writing any files
     * Metalsmith(__dirname).process(
     * function (err: Error): any {
     *     if (err) {throw err;}
     * });
     * @link [API] https://github.com/segmentio/metalsmith#processfn
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L200
     */
    process(fn?: Metalsmith.Callback): object;
    /**
     * `Run` a set of files through the plugins stack.
     * @param files - The dictionary of files.
     * @param fn - Optional Callback function.
     * @example
     * `Run` all of the middleware functions on a dictionary of files.
     * var callback:Metalsmith.Callback = (err: Error, files: object) => {if (err) {throw err;}};
     * Metalsmith(__dirname).run({fileA: "a.html"} , callback);
     * @link [API] https://github.com/segmentio/metalsmith#runfiles-fn
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L212
     */
    run(files: object, fn?: Metalsmith.Callback): object;
    /**
     * `Run` a set of files through the plugins stack.
     * @param files - The dictionary of files.
     * @param fn - Optional Callback function.
     * @example
     * `Run` all of the middleware functions on a dictionary of files.
     * var callback:Metalsmith.Callback = (err: Error, files: object) => {if (err) {throw err;}};
     * Metalsmith(__dirname).run({fileA: "a.html"} , callback);
     * @link [API] https://github.com/segmentio/metalsmith#runfiles-fn
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L212
     */
    run(files: object, plugins: Metalsmith.Plugin[], fn?: Metalsmith.Callback): object;
    /**
     * Read a dictionary of files from a `dir`, parsing frontmatter. If no directory
     * is provided, it will default to the source directory.
     * @param dir - Optional dictionary of files.
     * @example
     * Read a dictionary of files from a `dir`.
     * var files:object = Metalsmith(__dirname).read("subdir");
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L227
     */
    read(dir: string, fn?: Metalsmith.Callback): object;
    /**
     * Read a dictionary of files from a `dir`, parsing frontmatter. If no directory
     * is provided, it will default to the source directory.
     * @param fn - Optional Callback function.
     * @example
     * Read a dictionary of files from a `dir`.
     * var files:object = Metalsmith(__dirname).read("subdir");
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L227
     */
    read(fn: Metalsmith.Callback): object;
    /**
     * Read a `file` by path. If the path is not absolute, it will be resolved
     * relative to the source directory.
     * @param file - The file path.
     * @example
     * Read a `file` by path.
     * var fileData:object = Metalsmith(__dirname).readFile("a.html");
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L261
     */
    readFile(file: string): object;
    /**
     * Write a dictionary of `files` to a destination `dir`. If no directory is
     * provided, it will default to the destination directory.
     * @param files - Dictionary of files.
     * @param dir - Optional destination directory.
     * @param fn - Optional Callback function.
     * @example
     * Write a dictionary of `files` to a destination `dir`.
     * Metalsmith(__dirname).write({fileA: "a.html"} , "C:\\\OutDir");
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L308
     */
    write(files: object, dir?: string, fn?: Metalsmith.Callback): void;
    /**
     * Write a dictionary of `files` to a destination `dir`. If no directory is
     * provided, it will default to the destination directory.
     * @param files - Dictionary of files.
     * @param dir - Optional destination directory.
     * @example
     * Write a dictionary of `files` to a destination `dir`.
     * Metalsmith(__dirname).write({fileA: "a.html"} , "C:\\\OutDir");
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L308
     */
    write(files: object, fn: Metalsmith.Callback): void;
    /**
     * Write a `file` by path with `data`. If the path is not absolute, it will be
     * resolved relative to the destination directory.
     * @param file - File path.
     * @param data - The file data.
     * @example
     * Write a `file` by path with `data`.
     * Metalsmith(__dirname).writeFile("test.html", {contents: "File Contents"});
     * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L336
     */
    writeFile(file: string, data: object): void;
}

/**
 * Initialize a new `Metalsmith` builder with a working `directory`.
 * @param directory  - The working directory.
 * @example
 * initialize Metalsmith with the node.js working directory
 * Metalsmith(__dirname);
 * @link [Metalsmith] http://www.metalsmith.io/
 * @link [API] https://github.com/segmentio/metalsmith#new-metalsmithdir
 * @link [Source] https://github.com/segmentio/metalsmith/blob/00b2c7aaee13fbe0f7fb3be332929a303b2df51d/lib/index.js#L30
 */
declare function Metalsmith(directory: string): Metalsmith;

declare namespace Metalsmith {
    type Plugin = (files: Files, metalsmith: Metalsmith, callback: Callback)  => void;
    type Callback = (err: Error | null, files: Files, metalsmith: Metalsmith) => void;
    type Ignore = (path: string, stat: Stats) => void;

    interface Files {
      [index: string]: any;
    }
}

export = Metalsmith;
