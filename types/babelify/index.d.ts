// Type definitions for babelify v7.3.0
// Project: https://github.com/babel/babelify
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Browserify transform for Babel
 */
import stream = require("stream");
import babel = require("babel-core");

declare function Babelify(filename: string, opts?: Babelify.BabelifyOptions): Babelify.BabelifyObject;

declare namespace Babelify {

    export interface BabelifyConstructor {
        (filename: string, opts: Babelify.BabelifyOptions): Babelify.BabelifyObject;
    }

    /** In addition to the various purposes documented here, all of the babelify options are passed to babel which passes them on to babel.transform() when each file is transformed */
    export interface BabelifyOptions extends babel.TransformOptions {
        /** These are passed to babel.util.canCompile() for each filename
         * default: null
         */
        extensions?: string | string[];

        /** if true, a 'sourceFileName' property with a value equal to the current file being transformed is included with the options passed to babel.transform()
         * default: false
         */
        sourceMapsAbsolute?: boolean;
    }

    export class BabelifyObject extends stream.Transform {
        _transform(buf: string | Buffer, encoding: string, callback: () => void): void;
        _flush(callback: () => void): void;
    }

    export function configure(opts: Babelify.BabelifyOptions): (filename: string) => Babelify.BabelifyObject;
}

export = Babelify;

