// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/rails.html
     *
     *
     */
    interface rails {
        /**
         *
         * @param selector
         * @param evtName
         * @param fn
         */
        live(selector: any, evtName: any, fn: any): void;
    }
}

declare module "dojox/rails" {
    var exp: dojox.rails
    export=exp;
}
