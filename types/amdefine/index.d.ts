/// <reference types="node" />

/**
 * AMD define function created by amdefine.
 */
interface Define {
    /**
     * Define a module with dependencies.
     * @param id - Optional module ID
     * @param dependencies - Array of dependency module IDs
     * @param factory - Factory function or value
     */
    (id: string, dependencies: string[], factory: (...modules: any[]) => any): void;
    (id: string, dependencies: string[], factory: any): void;
    (id: string, factory: (...modules: any[]) => any): void;
    (id: string, factory: any): void;
    (dependencies: string[], factory: (...modules: any[]) => any): void;
    (dependencies: string[], factory: any): void;
    (factory: (...modules: any[]) => any): void;
    (factory: any): void;

    /**
     * AMD define.amd property indicating AMD compatibility.
     */
    amd: object;

    /**
     * Require function for synchronous module loading.
     */
    require: NodeRequire;
}

/**
 * Creates an AMD-style define function for use in Node.js modules.
 *
 * @param module - The Node.js module object for the current module
 * @param requireFn - Optional require function (needed for Node < 0.5)
 * @returns An AMD-compatible define function
 *
 * @example
 * ```javascript
 * if (typeof define !== 'function') {
 *     var define = require('amdefine')(module);
 * }
 *
 * define(['dependency'], function(dep) {
 *     return { myModule: true };
 * });
 * ```
 */
declare function amdefine(module: NodeModule, requireFn?: NodeRequire): Define;

export = amdefine;
