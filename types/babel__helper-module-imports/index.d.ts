import type { types as t } from "@babel/core";
import type { NodePath } from "@babel/traverse";

export interface ImportOptions {
    /**
     * The module being referenced.
     */
    importedSource: string | null;
    /**
     * The type of module being imported:
     *
     *  * 'es6'      - An ES6 module.
     *  * 'commonjs' - A CommonJS module. (Default)
     */
    importedType: "es6" | "commonjs";
    /**
     * The type of interop behavior for namespace/default/named when loading
     * CommonJS modules.
     *
     * ## 'babel' (Default)
     *
     * Load using Babel's interop.
     *
     * If '.__esModule' is true, treat as 'compiled', else:
     *
     * * Namespace: A copy of the module.exports with .default
     *     populated by the module.exports object.
     * * Default: The module.exports value.
     * * Named: The .named property of module.exports.
     *
     * The 'ensureLiveReference' has no effect on the liveness of these.
     *
     * ## 'compiled'
     *
     * Assume the module is ES6 compiled to CommonJS. Useful to avoid injecting
     * interop logic if you are confident that the module is a certain format.
     *
     * * Namespace: The root module.exports object.
     * * Default: The .default property of the namespace.
     * * Named: The .named property of the namespace.
     *
     * Will return erroneous results if the imported module is _not_ compiled
     * from ES6 with Babel.
     *
     * ## 'uncompiled'
     *
     * Assume the module is _not_ ES6 compiled to CommonJS. Used a simplified
     * access pattern that doesn't require additional function calls.
     *
     * Will return erroneous results if the imported module _is_ compiled
     * from ES6 with Babel.
     *
     * * Namespace: The module.exports object.
     * * Default: The module.exports object.
     * * Named: The .named property of module.exports.
     */
    importedInterop: "babel" | "node" | "compiled" | "uncompiled";
    /**
     * The type of CommonJS interop included in the environment that will be
     * loading the output code.
     *
     *  * 'babel' - CommonJS modules load with Babel's interop. (Default)
     *  * 'node'  - CommonJS modules load with Node's interop.
     *
     * See descriptions in 'importedInterop' for more details.
     */
    importingInterop: "babel" | "node";
    /**
     * Define whether we explicitly care that the import be a live reference.
     * Only applies when importing default and named imports, not the namespace.
     *
     *  * true  - Force imported values to be live references.
     *  * false - No particular requirements. Keeps the code simplest. (Default)
     */
    ensureLiveReference: boolean;
    /**
     * Define if we explicitly care that the result not be a property reference.
     *
     *  * true  - Force calls to exclude context. Useful if the value is going to
     *            be used as function callee.
     *  * false - No particular requirements for context of the access. (Default)
     */
    ensureNoContext: boolean;
    /**
     * Define whether the import should be loaded before or after the existing imports.
     * "after" is only allowed inside ECMAScript modules, since it's not possible to
     * reliably pick the location _after_ require() calls but _before_ other code in CJS.
     */
    importPosition: "before" | "after";

    nameHint?: string;
    blockHoist?: number;
}

export function addDefault(path: NodePath, importedSource: string, opts?: Partial<ImportOptions>): t.Identifier;

/**
 * add a named import to the program path of given path
 *
 * @param path The starting path to find a program path
 * @param name The name of the generated binding. Babel will prefix it with `_`
 * @param importedSource The source of the import
 * @param [opts]
 * @returns If opts.ensureNoContext is true, returns a SequenceExpression,
 *   else if opts.ensureLiveReference is true, returns a MemberExpression, else returns an Identifier
 */
export function addNamed(
    path: NodePath,
    name: string,
    importedSource: string,
    opts?: Omit<Partial<ImportOptions>, "ensureLiveReference" | "ensureNoContext">,
): t.Identifier;
export function addNamed(
    path: NodePath,
    name: string,
    importedSource: string,
    opts?: Omit<Partial<ImportOptions>, "ensureLiveReference"> & {
        ensureLiveReference: true;
    },
): t.MemberExpression;
export function addNamed(
    path: NodePath,
    name: string,
    importedSource: string,
    opts?: Omit<Partial<ImportOptions>, "ensureNoContext"> & {
        ensureNoContext: true;
    },
): t.SequenceExpression;

export function addNamespace(path: NodePath, importedSource: string, opts?: Partial<ImportOptions>): t.Identifier;

export function addSideEffect(path: NodePath, importedSource: string, opts?: Partial<ImportOptions>): void;

export function isModule(path: NodePath<t.Program>): boolean;

export class ImportInjector {
    constructor(path: NodePath, importedSource?: string, opts?: Partial<ImportOptions>);

    addDefault(importedSourceIn: string, opts: Partial<ImportOptions>): t.Identifier;
    addNamed(importName: string, importedSourceIn: string, opts: Partial<ImportOptions>): t.Identifier;
    addNamespace(importedSourceIn: string, opts: Partial<ImportOptions>): t.Identifier;
    addSideEffect(importedSourceIn: string, opts: Partial<ImportOptions>): void;
}
