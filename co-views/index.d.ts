// Type definitions for co-views v2.1
// Project: https://github.com/tj/co-views/
// Definitions by: devlee <https://github.com/devlee/>, Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CoViews {

    /**
     * Pass views `dir` and `opts` to return a render function.
     */
    export interface Views {
        (dir?: string, opts?: CoViewsOptions): { (view: string, locals?: Object): any }
    }

    export interface CoViewsOptions {

        /**
         * default extname
         */
        ext?: string,

        /**
         * default extname
         */
        default?: string,

        /**
         * engine map
         */
        map?: Object,

        /**
         * proxy partials
         */
        partials?: Object,

        /**
         * cache compiled templates
         */
        cache?: boolean,

        /**
         * common locals data
         */
        locals?: Object
    }
}

declare var CoViews: CoViews.Views;
export = CoViews;
