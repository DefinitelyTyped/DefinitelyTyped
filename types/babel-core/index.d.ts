// Type definitions for babel-core 6.25
// Project: https://github.com/babel/babel/tree/master/packages/babel-core, https://babeljs.io
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as t from 'babel-types';
export { t as types };
export type Node = t.Node;
export import template = require('babel-template');
export const version: string;
import traverse, { Visitor, NodePath } from "babel-traverse";
export { traverse, Visitor };
import { BabylonOptions } from "babylon";
export { BabylonOptions };
import { GeneratorOptions } from "babel-generator";
export { GeneratorOptions };

// A babel plugin is a simple function which must return an object matching
// the following interface. Babel will throw if it finds unknown properties.
// The list of allowed plugin keys is here:
// https://github.com/babel/babel/blob/4e50b2d9d9c376cee7a2cbf56553fe5b982ea53c/packages/babel-core/src/config/option-manager.js#L71
export interface PluginObj<S = {}> {
    name?: string;
    manipulateOptions?(opts: any, parserOpts: any): void;
    pre?(this: S, state: any): void;
    visitor: Visitor<S>;
    post?(this: S, state: any): void;
    inherits?: any;
}

/** Transforms the passed in `code`. Returning an object with the generated code, source map, and AST. */
export function transform(code: string, opts?: TransformOptions): BabelFileResult;

/** Asynchronously transforms the entire contents of a file. */
export function transformFile(filename: string, opts: TransformOptions, callback: (err: any, result: BabelFileResult) => void): void;

/** Synchronous version of `babel.transformFile`. Returns the transformed contents of the `filename`. */
export function transformFileSync(filename: string, opts?: TransformOptions): BabelFileResult;

export function transformFromAst(ast: Node, code?: string, opts?: TransformOptions): BabelFileResult;

export interface TransformOptions {
    /** Include the AST in the returned object. Default: `true`. */
    ast?: boolean;

    /** Attach a comment after all non-user injected code. */
    auxiliaryCommentAfter?: string;

    /** Attach a comment before all non-user injected code. */
    auxiliaryCommentBefore?: string;

    /** Specify whether or not to use `.babelrc` and `.babelignore` files. Default: `true`. */
    babelrc?: boolean;

    /** Enable code generation. Default: `true`. */
    code?: boolean;

    /** write comments to generated output. Default: `true`. */
    comments?: boolean;

    /**
     * Do not include superfluous whitespace characters and line terminators. When set to `"auto"`, `compact` is set to
     * `true` on input sizes of >100KB.
     */
    compact?: boolean | "auto";

    /**
     * This is an object of keys that represent different environments. For example, you may have:
     * `{ env: { production: { / * specific options * / } } }`
     * which will use those options when the enviroment variable `BABEL_ENV` is set to `"production"`.
     * If `BABEL_ENV` isn't set then `NODE_ENV` will be used, if it's not set then it defaults to `"development"`.
     */
    env?: object;

    /** A path to an .babelrc file to extend. */
    extends?: string;

    /** Filename to use when reading from stdin - this will be used in source-maps, errors etc. Default: "unknown". */
    filename?: string;

    /** Filename relative to `sourceRoot`. */
    filenameRelative?: string;

    /** An object containing the options to be passed down to the babel code generator, babel-generator. Default: `{}` */
    generatorOpts?: GeneratorOptions;

    /**
     * Specify a custom callback to generate a module id with. Called as `getModuleId(moduleName)`.
     * If falsy value is returned then the generated module id is used.
     */
    getModuleId?(moduleName: string): string;

    /** Enable/disable ANSI syntax highlighting of code frames. Default: `true`. */
    highlightCode?: boolean;

    /** list of glob paths to **not** compile. Opposite to the `only` option. */
    ignore?: string[];

    /** A source map object that the output source map will be based on. */
    inputSourceMap?: object;

    /** Should the output be minified. Default: `false` */
    minified?: boolean;

    /** Specify a custom name for module ids. */
    moduleId?: string;

    /**
     * If truthy, insert an explicit id for modules. By default, all modules are anonymous.
     * (Not available for `common` modules).
     */
    moduleIds?: boolean;

    /** Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions. */
    moduleRoot?: string;

    /**
     * A glob, regex, or mixed array of both, matching paths to only compile. Can also be an array of arrays containing
     * paths to explicitly match. When attempting to compile a non-matching file it's returned verbatim.
     */
    only?: string | RegExp | Array<string | RegExp>;

    /** Babylon parser options. */
    parserOpts?: BabylonOptions;

    /** List of plugins to load and use. */
    plugins?: any[];

    /** List of presets (a set of plugins) to load and use. */
    presets?: any[];

    /** Retain line numbers - will result in really ugly code. Default: `false` */
    retainLines?: boolean;

    /** Resolve a module source ie. import "SOURCE"; to a custom value. */
    resolveModuleSource?(source: string, filename: string): string;

    /**
     * An optional callback that controls whether a comment should be output or not. Called as
     * `shouldPrintComment(commentContents)`. **NOTE**: This overrides the `comments` option when used.
     */
    shouldPrintComment?(comment: string): boolean;

    /** Set `sources[0]` on returned source map. */
    sourceFileName?: string;

    /**
     * If truthy, adds a `map` property to returned output. If set to `"inline"`, a comment with a `sourceMappingURL`
     * directive is added to the bottom of the returned code. If set to `"both"` then a map property is returned as well
     * as a source map comment appended.
     */
    sourceMaps?: boolean | "inline" | "both";

    /** Set `file` on returned source map. */
    sourceMapTarget?: string;

    /** The root from which all sources are relative. */
    sourceRoot?: string;

    /** Indicate the mode the code should be parsed in. Can be either “script” or “module”. Default: "module" */
    sourceType?: "script" | "module";

    /**
     * An optional callback that can be used to wrap visitor methods.
     * NOTE: This is useful for things like introspection, and not really needed for implementing anything.
     */
    wrapPluginVisitorMethod?(pluginAlias: string, visitorType: 'enter' | 'exit', callback: (path: NodePath, state: any) => void): (path: NodePath, state: any) => void ;
}

export interface BabelFileModulesMetadata {
    imports: object[];
    exports: {
        exported: object[],
        specifiers: object[]
    };
}

export interface BabelFileMetadata {
    usedHelpers: string[];
    marked: Array<{
        type: string;
        message: string;
        loc: object;
    }>;
    modules: BabelFileModulesMetadata;
}

export interface BabelFileResult {
    ast?: Node;
    code?: string;
    ignored?: boolean;
    map?: object;
    metadata?: BabelFileMetadata;
}

export as namespace babel;
