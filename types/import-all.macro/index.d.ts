// Type definitions for import-all.macro 3.0
// Project: https://github.com/kentcdodds/import-all.macro#readme
// Definitions by: Jakub Jirutka <https://github.com/jirutka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

interface ImportAll {
    /**
     * Generates dynamic `import()` for each file that matches the given glob
     * and returns a Promise of an object with the imported modules indexed by
     * the module file name.
     *
     * @example
     * // this statement
     * const routes = importAll('./routes/*.ts').then(all => {
     *     console.log(all)
     * })
     *
     * // will generate
     * Promise.all([
     *   import('./routes/a.ts'),
     *   import('./routes/b.ts'),
     * ]).then(function importAllHandler(importVals) {
     *   return {
     *     './routes/a.ts': importVals[0],
     *     './routes/b.ts': importVals[1],
     *   }
     * }).then(all => {
     *   console.log(all)
     * })
     */
    <T = unknown>(glob: string): Promise<{ [filename: string]: T }>;

    /**
     * Generates static `import` for each file that matches the given glob
     * and returns an object with the imported modules indexed by the module
     * file name.
     *
     * @example
     * // this statement
     * const routes = importAll.sync('./routes/*.ts')
     *
     * // will generate
     * import * as _routesATs from './routes/a.ts'
     * import * as _routesBTs from './routes/b.ts'
     * const routes = {
     *   './routes/a.ts': _routesATs,
     *   './routes/b.ts': _routesBTs,
     * }
     */
    sync<T = unknown>(glob: string): { [filename: string]: T };

    /**
     * Generates and returns an object with a function returning a Promise of
     * dynamic `import()` for each file that matches the given glob.
     *
     * @example
     * // this statement
     * const routes = importAll.deferred('./routes/*.ts')
     *
     * // will generate
     * const routes = {
     *   './routes/a.ts': function() {
     *     return import('./routes/a.ts')
     *   },
     *   './routes/b.ts': function() {
     *     return import('./routes/b.ts')
     *   },
     * }
     */
    deferred<T = unknown>(glob: string): { [filename: string]: () => Promise<T> };
}

declare const importAll: ImportAll;

export default importAll;
