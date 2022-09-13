// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/flash.html
     *
     * Deprecated.  Should require dojox/flash modules directly rather than trying to access them through
     * this module.
     *
     */
    interface flash {
    }
    namespace flash {
        module _base {
        }

    }

}

declare module "dojox/flash" {
    var exp: dojox.flash
    export=exp;
}
