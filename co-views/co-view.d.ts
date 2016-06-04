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

    interface IEngineMap {
      /**
       * use for .html files
       */
      html: string
    }

    interface ICoViewsOpts {

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
        map?: IEngineMap,

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

    interface RenderFunction {
        /**
         * template path
         */
        view: string,

        /**
         * template locals data
         */
        locals: Object
    }

    /**
     * Pass views `dir` and `opts` to return a render function.
     */
    function views(dir?: string, opts?: ICoViewsOpts): {
        (view: string, locals?: Object): RenderFunction
    };

    export = views;
}
