// Type definitions for resolve
// Project: https://github.com/substack/node-resolve
// Definitions by: Mario Nebl <https://github.com/marionebl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'resolve' {
  /**
   * Callback invoked when resolving asynchronously
   *
   * @param error
   * @param resolved Absolute path to resolved identifier
   */
  type resolveCallback = (err: Error, resolved?: string) => void;

  /**
   * Callback invoked when checking if a file exists
   *
   * @param error
   * @param isFile If the given file exists
   */
  type isFileCallback = (err: Error, isFile?: boolean) => void;

  /**
   * Callback invoked when reading a file
   *
   * @param error
   * @param isFile If the given file exists
   */
  type readFileCallback = (err: Error, file?: Buffer) => void;

  /**
   * Asynchronously resolve the module path string id into cb(err, res [, pkg]), where pkg (if defined) is the data from package.json
   *
   * @param id Identifier to resolve
   * @param callback
   */
  function resolve(id: string, cb: resolveCallback): void;

  /**
   * Asynchronously resolve the module path string id into cb(err, res [, pkg]), where pkg (if defined) is the data from package.json
   *
   * @param id Identifier to resolve
   * @param options Options to use for resolving, optional.
   * @param callback
   */
  function resolve(id: string, opts: resolve.AsyncOpts, cb: resolveCallback): void;

  /**
   * Synchronously resolve the module path string id, returning the result and throwing an error when id can't be resolved.
   *
   * @param id Identifier to resolve
   * @param options Options to use for resolving, optional.
   */
  function resolveSync(id: string, opts?: resolve.SyncOpts): string;

  /**
   * Return whether a package is in core
   *
   * @param id
   */
  function resolveIsCore(id: string): boolean;

  namespace resolve {
    interface Opts {
      // directory to begin resolving from (defaults to __dirname)
      basedir?: string;
      // package.json data applicable to the module being loaded
      package?: any;
      // array of file extensions to search in order (defaults to ['.js'])
      extensions?: string|string[];
      // transform the parsed package.json contents before looking at the "main" field
      packageFilter?: (pkg: any, pkgfile: string) => any;
      // transform a path within a package
      pathFilter?: (pkg: any, path: string, relativePath: string) => string;
      // require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this)
      paths?: string|string[];
      // directory (or directories) in which to recursively look for modules. (default to 'node_modules')
      moduleDirectory?: string|string[]
    }
    
    export interface AsyncOpts extends Opts {
      // how to read files asynchronously (defaults to fs.readFile)
      readFile?: (file: string, cb: readFileCallback) => void;
      // function to asynchronously test whether a file exists
      isFile?: (file: string, cb: isFileCallback) => void;
    }

    export interface SyncOpts extends Opts {
      // how to read files synchronously (defaults to fs.readFileSync)
      readFileSync?: (file: string) => Buffer;
      // function to synchronously test whether a file exists
      isFile?: (file: string) => boolean;
    }

    export var sync: typeof resolveSync;
    export var isCore: typeof resolveIsCore;
  }
  
  export = resolve;
}
