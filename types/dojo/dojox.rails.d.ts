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
