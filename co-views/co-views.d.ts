// Type definitions for co-views v2.1
// Project: https://github.com/tj/co-views/
// Definitions by: devlee <https://github.com/devlee/>
// Definitions: https://github.com/devlee/DefinitelyTyped

/* =================== USAGE ===================

    import views = require('co-views');
    const render = views('views', {
        map: {
            html: 'swig'
        },
        default: 'jade'
    });

 =============================================== */

declare module "co-views" {

    interface EngineMap {
      /**
       * use for .html files
       */
      html: string
    }

    interface CoViewsOptions {

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
        map?: EngineMap,

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

    /**
     * Pass views `dir` and `opts` to return a render function.
     */
    function views(dir?: string, opts?: CoViewsOptions): {
        (view: string, locals?: Object): any
    };

    export = views;
}
