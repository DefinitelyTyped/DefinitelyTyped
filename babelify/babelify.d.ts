// Type definitions for babelify v7.3.0
// Project: https://github.com/babel/babelify
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../babel-core/babel-core.d.ts" />

/** Browserify transform for Babel
 */
declare module 'babelify' {
    import stream = require("stream");
    import babel = require("babel-core");


    /** In addition to the various purposes documented here, all of the babelify options are passed to babel which passes them on to babel.transform() when each file is transformed */
    interface babelifyOptions extends babel.TransformOptions {
        /** These are passed to babel.util.canCompile() for each filename
         * default: null (see babel.
         */
        extensions?: string | string[];

        /** if true, a 'sourceFileName' property with a value equal to the current file being transformed is included with the options passed to babel.transform()
         * default: false
         */
        sourceMapsAbsolute?: boolean;
    }


    class babelifyObject extends stream.Transform {

        _transform(buf: string | Buffer, encoding: string, callback: () => void): void;

        _flush(callback: () => void): void;
    }


    function Babelify(filename: string, opts?: babelifyOptions): babelifyObject;

    module Babelify {
        export interface BabelifyConstructor {
            (filename: string, opts: babelifyOptions): babelifyObject;
        }

        export interface BabelifyOptions extends babelifyOptions { }

        export class BabelifyObject extends babelifyObject { }

        export function configure(opts: babelifyOptions): (filename: string) => babelifyObject;
    }

    export = Babelify;
}
