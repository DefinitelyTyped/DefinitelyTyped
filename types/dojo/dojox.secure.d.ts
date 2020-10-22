// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dojox {

    namespace secure {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/secure/DOM.html
         *
         *
         * @param element
         */
        interface DOM{(element: any): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/secure/sandbox.html
         *
         * Creates a secure sandbox from which scripts and HTML can be loaded that
         * will only be able to access the provided element and it's descendants, the
         * rest of the DOM and JS environment will not be accessible to the sandboxed
         * scripts and HTML.
         * This function will create and return a sandbox object (see dojox.secure.__Sandbox)
         * for the provided element.
         *
         * @param element The DOM element to use as the container for the sandbox
         */
        interface sandbox{(element: any): void}
        namespace fromJson {
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/secure/capability.html
         *
         *
         */
        interface capability {
            /**
             *
             */
            keywords: any[];
            /**
             * pass in the text of a script. If it passes and it can be eval'ed, it should be safe.
             * Note that this does not do full syntax checking, it relies on eval to reject invalid scripts.
             * There are also known false rejections:
             *
             * Nesting vars inside blocks will not declare the variable for the outer block
             * Named functions are not treated as declaration so they are generally not allowed unless the name is declared with a var.
             * Var declaration that involve multiple comma delimited variable assignments are not accepted
             *
             * @param script the script to execute
             * @param safeLibraries The safe libraries that can be called (the functions can not be access/modified by the untrusted code, only called)
             * @param safeGlobals These globals can be freely interacted with by the untrusted code
             */
            validate(script: String, safeLibraries: any[], safeGlobals: Object): void;
        }
    }

}

declare module "dojox/secure/DOM" {
    var exp: dojox.secure.DOM
    export=exp;
}
declare module "dojox/secure/sandbox" {
    var exp: dojox.secure.sandbox
    export=exp;
}
declare module "dojox/secure/capability" {
    var exp: dojox.secure.capability
    export=exp;
}
