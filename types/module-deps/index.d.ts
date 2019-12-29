// Type definitions for module-deps 6.1
// Project: https://github.com/browserify/module-deps
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as browserResolve from "browser-resolve";

/**
 * Return an object transform stream 'd' that expects entry filenames or '{ id: ..., file: ... }' objects
 * as input and produces objects for every dependency from a recursive module traversal as output.
 */
declare function moduleDeps(opts?: moduleDeps.Options): moduleDeps.ModuleDepsObject;

/**
 * Walk the dependency graph to generate json output that can be fed into browser-pack
 */
declare namespace moduleDeps {
    /**
     * module-deps constructor options
     */
    interface Options {
        /**
         * A string or array of string transforms
         */
        transform?: string | string[];

        /**
         * An array path of strings showing where to look in the package.json
         * for source transformations. If falsy, don't look at the package.json at all
         */
        transformKey?: string[];

        /**
         * Custom resolve function using the opts.resolve(id, parent, cb) signature that browser-resolve has
         */
        resolve?: (id: string, opts: browserResolve.SyncOpts, cb: (err?: Error | null, file?: string, pkg?: PackageObject, fakePath?: any) => void) => void;

        /**
         * A custom dependency detection function. opts.detect(source) should return an array of dependency module names. By default detective is used
         */
        detect?: (source: string) => string[];

        /**
         * A function (id) to skip resolution of some module id strings. If defined,
         * opts.filter(id) should return truthy for all the ids to include and falsey for all the ids to skip.
         */
        filter?: (id: string) => boolean;

        /**
         * A function (id, file, pkg) that gets called after id has been resolved.
         * Return false to skip this file
         */
        postFilter?: (id: string, file: string, pkg: PackageObject) => (void | boolean); // tslint:disable-line:void-return

        /**
         * Transform the parsed package.json contents before using the values.
         * opts.packageFilter(pkg, dir) should return the new pkg object to use.
         */
        packageFilter?: (pkg: PackageObject, dir: string) => PackageObject;

        /**
         * An array of absolute paths to not parse for dependencies.
         * Use this for large dependencies like jquery or threejs which take forever to parse.
         */
        noParse?: boolean | string[];

        /**
         * An object mapping filenames to file objects to skip costly io
         */
        cache?: { [fileName: string]: any };

        /**
         * An object mapping filenames to their parent package.json contents
         * for browser fields, main entries, and transforms
         */
        packageCache?: { [fileName: string]: any };

        /**
         * An object mapping filenames to raw source to avoid reading from disk.
         */
        fileCache?: { [fileName: string]: string };

        /**
         * A complex cache handler that allows async and persistent caching of data.
         */
        persistentCache?: (file: string, id: string, pkg: PackageObject, fallback: (dataAsString: string, cb: CacheCallback) => void, cb: CacheCallback) => void;

        /**
         * Array of global paths to search. Defaults to splitting on ':' in process.env.NODE_PATH
         */
        paths?: string[];

        /**
         * Ignore files that failed to resolve
         */
        ignoreMissing?: boolean;

        // un-documented options used by module-deps
        basedir?: string;
        globalTransform?: any[];
        extensions?: string[];
        modules?: { [name: string]: any };
        expose?: { [name: string]: string };

        [prop: string]: any;
    }

    interface ModuleDepsObject extends NodeJS.ReadWriteStream {
        resolve(id: string, parent: { id: string }, cb: (err: Error | null, file?: string, pkg?: PackageObject, fakePath?: any) => any): any;

        readFile(file: string, id?: any, pkg?: PackageObject): NodeJS.ReadableStream;

        getTransforms(file: string, pkg: PackageObject, opts?: { builtin?: boolean; inNodeModules?: boolean }): NodeJS.ReadWriteStream;

        walk(id: string | { file: string; id: string; entry?: boolean; expose?: string; noparse?: boolean; source?: string },
            parent: { modules: any },
            cb: (err: Error | null, file?: string) => void): void;

        parseDeps(file: string, src: string, cb: any): any[];

        lookupPackage(file: string, cb: (a: any, b: any, c?: any) => any): void;

        _isTopLevel(file: string): boolean;
        _transform(row: string | InputRow | InputTransform, enc: string, next: () => void): void;
        _flush(): void;

        /**
         * Every time a transform is applied to a file, a 'transform' event fires with the instantiated transform stream tr.
         */
        on(event: "transform", listener: (tr: any, file: string) => any): this;
        /**
         * Every time a file is read, this event fires with the file path.
         */
        on(event: "file", listener: (file: string, id: string) => any): this;
        /**
         * When opts.ignoreMissing is enabled, this event fires for each missing package.
         */
        on(event: "missing", listener: (id: string, parent: { id: string; filename: string; [prop: string]: any }) => any): this;
        /**
         * Every time a package is read, this event fires. The directory name of the package is available in pkg.__dirname.
         */
        on(event: "package", listener: (package: PackageObject) => any): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    type CacheCallback = (err: Error | null, res?: { source: string; package: any; deps: { [dep: string]: boolean } }) => void;

    interface InputRow {
        file: string;
        id: string;
        entry?: boolean;
        expose: string;
        noparse?: boolean;
    }

    interface InputTransform {
        transform: string | (() => any);
        options: any;
        global?: boolean;
    }

    interface TransformObject {
        id: string;
        file: string;
        entry: boolean;
        expose: string;
        source: string;
        deps: { [requireName: string]: any };
    }

    /**
     * Placeholder, feel free to redefine or put in a pull request to improve
     */
    interface PackageObject {
        [prop: string]: any;
    }
}

export = moduleDeps;
