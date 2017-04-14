// Type definitions for co-views 2.1
// Project: https://github.com/tj/co-views/
// Definitions by: devlee <https://github.com/devlee/>, Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CoViews {
    interface Options {
        /**
         * default extname
         */
        ext?: string;

        /**
         * default extname
         */
        default?: string;

        /**
         * engine map
         */
        map?: Object;

        /**
         * proxy partials
         */
        partials?: Object;

        /**
         * cache compiled templates
         */
        cache?: boolean;

        /**
         * common locals data
         */
        locals?: Object;
    }
}

/**
 * Pass views `dir` and `opts` to return a render function.
 */
declare function CoViews(dir?: string, opts?: CoViews.Options): (view: string, locals?: Object) => any;
export = CoViews;
