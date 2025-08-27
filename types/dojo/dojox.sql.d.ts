declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/sql.html
     *
     * Deprecated.  Should require dojox/sql modules directly rather than trying to access them through
     * this module.
     *
     */
    interface sql {
    }
    namespace sql {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/sql/_crypto.html
         *
         *
         */
        interface _crypto {
        }
        namespace _base {
        }

    }

}

declare module "dojox/sql" {
    var exp: dojox.sql
    export=exp;
}
declare module "dojox/sql/_crypto" {
    var exp: dojox.sql._crypto
    export=exp;
}
