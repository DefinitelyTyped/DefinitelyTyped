// Type definitions for gulp-uglify
// Project: https://github.com/terinjokes/gulp-uglify
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Gulp {

    interface IUglifyOptions {
        mangle?: boolean;
        output?: {
            indent_start?: number;
            indent_level?: number;
            quote_keys?: boolean;
            space_colon?: boolean;
            ascii_only?: boolean;
            inline_script?: boolean;
            width?: number;
            max_line_len?: number;
            ie_proof?: boolean;
            beautify?: boolean;
            source_map?: boolean;
            bracketize?: boolean;
            comments?: boolean;
            semicolons?: boolean;
        };
        compressor?: {
            sequences?: boolean;
            properties?: boolean;
            dead_code?: boolean;
            drop_debugger?: boolean;
            unsafe?: boolean;
            conditionals?: boolean;
            comparisons?: boolean;
            evaluate?: boolean;
            booleans?: boolean;
            loops?: boolean;
            unused?: boolean;
            hoist_funs?: boolean;
            hoist_vars?: boolean;
            if_return?: boolean;
            join_vars?: boolean;
            cascade?: boolean;
            side_effects?: boolean;
            warnings?: boolean;
            global_defs?: any;
        };
        preserveComments?: boolean;
        warnings?: boolean;
        fromString?: boolean;
    }
}

interface IGulpUglify {
    (options?: Gulp.IUglifyOptions): any;
}

declare var __IGulpUglify: IGulpUglify;
declare module "gulp-uglify" {
    export = __IGulpUglify;
}
