declare module goog {

    /**
     * Make goog.require return the namespace
     * TODO: Make public API in base.js
     * @suppress {underscore|visibility}
     */
    var moduleLoaderState_: any;

    /**
     * Bootstraps a file into the global scope.
     *
     * This is strictly for cases where normal require() won't work,
     * because the file declares global symbols with 'var' that need to
     * be added to the global scope.
     * @suppress {missingProvide}
     *
     * @param {string} file The path to the file.
     */
    function nodeGlobalRequire(file: string): void;
}
