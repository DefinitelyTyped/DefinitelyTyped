// Type definitions for babel-core v6.7
// Project: https://github.com/babel/babel/tree/master/packages/babel-core
// Definitions by: Troy Gerwien <https://github.com/yortus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="babel-template" />
/// <reference types="babel-traverse" />
/// <reference types="babel-types" />

import * as t from 'babel-types';
export {t as types};
type Node = t.Node;
export import template = require('babel-template');
export var version: string;
import traverse, {Visitor} from "babel-traverse";
export {traverse, Visitor};


/** Transforms the passed in `code`. Returning an object with the generated code, source map, and AST. */
export function transform(code: string, opts?: TransformOptions): BabelFileResult;

/** Asynchronously transforms the entire contents of a file. */
export function transformFile(filename: string, opts: TransformOptions, callback: (err: any, result: BabelFileResult) => void): void;

/** Synchronous version of `babel.transformFile`. Returns the transformed contents of the `filename`. */
export function transformFileSync(filename: string, opts?: TransformOptions): BabelFileResult;

export function transformFromAst(ast: Node, code?: string, opts?: TransformOptions): BabelFileResult;

export interface TransformOptions {

    /** Filename to use when reading from stdin - this will be used in source-maps, errors etc. Default: "unknown". */
    filename?: string;

    /** Filename relative to `sourceRoot`. */
    filenameRelative?: string;

    /** A source map object that the output source map will be based on. */
    inputSourceMap?: Object;

    /**
     * This is an object of keys that represent different environments. For example, you may have:
     * `{ env: { production: { / * specific options * / } } }`
     * which will use those options when the enviroment variable `BABEL_ENV` is set to `"production"`.
     * If `BABEL_ENV` isn't set then `NODE_ENV` will be used, if it's not set then it defaults to `"development"`.
     */
    env?: Object;

    /** Retain line numbers - will result in really ugly code. Default: `false` */
    retainLines?: boolean;

    /** Enable/disable ANSI syntax highlighting of code frames. Default: `true`. */
    highlightCode?: boolean;

    /** List of presets (a set of plugins) to load and use. */
    presets?: any[];

    /** List of plugins to load and use. */
    plugins?: any[];

    /** list of glob paths to **not** compile. Opposite to the `only` option. */
    ignore?: string[];

    /**
     * A glob, regex, or mixed array of both, matching paths to only compile. Can also be an array of arrays containing
     * paths to explicitly match. When attempting to compile a non-matching file it's returned verbatim.
     */
    only?: string | RegExp | Array<string | RegExp>;

    /** Enable code generation. Default: `true`. */
    code?: boolean;

    /** Include the AST in the returned object. Default: `true`. */
    ast?: boolean;

    /** A path to an .babelrc file to extend. */
    extends?: string;

    /** write comments to generated output. Default: `true`. */
    comments?: boolean;

    /**
     * An optional callback that controls whether a comment should be output or not. Called as
     * `shouldPrintComment(commentContents)`. **NOTE**: This overrides the `comments` option when used.
     */
    shouldPrintComment?: (comment: string) => boolean;

    /**
     * Do not include superfluous whitespace characters and line terminators. When set to `"auto"`, `compact` is set to
     * `true` on input sizes of >100KB.
     */
    compact?: boolean | "auto";

    /**
     * If truthy, adds a `map` property to returned output. If set to `"inline"`, a comment with a `sourceMappingURL`
     * directive is added to the bottom of the returned code. If set to `"both"` then a map property is returned as well
     * as a source map comment appended.
     */
    sourceMaps?: boolean | "inline" | "both";

    /** Set `file` on returned source map. */
    sourceMapTarget?: string;

    /** Set `sources[0]` on returned source map. */
    sourceFileName?: string;

    /** The root from which all sources are relative. */
    sourceRoot?: string;

    /** Specify whether or not to use `.babelrc` and `.babelignore` files. Default: `true`. */
    babelrc?: boolean;

    /** Attach a comment before all non-user injected code. */
    auxiliaryCommentBefore?: string;

    /** Attach a comment after all non-user injected code. */
    auxiliaryCommentAfter?: string;

    /**
     * Specify a custom callback to generate a module id with. Called as `getModuleId(moduleName)`.
     * If falsy value is returned then the generated module id is used.
     */
    getModuleId?: (moduleName: string) => string;

    /** Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions. */
    moduleRoot?: string;

    /**
     * If truthy, insert an explicit id for modules. By default, all modules are anonymous.
     * (Not available for `common` modules).
     */
    moduleIds?: boolean;

    /** Specify a custom name for module ids. */
    moduleId?: string;
}

export interface BabelFileResult {
    ast?: Node;
    code?: string;
    map?: Object;
}
export as namespace babel;

