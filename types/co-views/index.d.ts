declare namespace CoViews {
    interface Options {
        /**
         * default extname
         */
        ext?: string | undefined;

        /**
         * default extname
         */
        default?: string | undefined;

        /**
         * engine map
         */
        map?: Object | undefined;

        /**
         * proxy partials
         */
        partials?: Object | undefined;

        /**
         * cache compiled templates
         */
        cache?: boolean | undefined;

        /**
         * common locals data
         */
        locals?: Object | undefined;
    }
}

/**
 * Pass views `dir` and `opts` to return a render function.
 */
declare function CoViews(dir?: string, opts?: CoViews.Options): (view: string, locals?: Object) => any;
export = CoViews;
