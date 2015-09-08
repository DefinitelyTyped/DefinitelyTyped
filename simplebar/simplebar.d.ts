// Type definitions for simplebar.js 1.1.7
// Project: https://github.com/Grsmto/simplebar
// Definitions by: Gregor Woiwode <https://github.com/gregonnet>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface SimplebarOpions {
    autoHide?: boolean;
    wrapContent?: boolean
}

interface JQuery {
    /**
    * Enables simplebar on calling element.
    */
    simplebar: {
        /**
        * Define if scrollbar should be faded out automatically
        *
        * @param indicator if scrollbar should be faded out automatically.
        */
        (options?: SimplebarOpions): JQuery;
    };
}

interface JQueryStatic {
    /**
    * Enables simplebar on calling element.
    */
    simplebar: {
        /**
        * Define if scrollbar should be faded out automatically
        *
        * @param indicator if scrollbar should be faded out automatically.
        */
        (options?: SimplebarOpions): JQuery;
    };
}
