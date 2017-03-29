// Type definitions for mock-require v1.3.0
// Project: https://github.com/boblauer/mock-require
// Definitions by: Daniel Pereira <https://github.com/djpereira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Simple, intuitive mocking of Node.js modules. */
interface Mock {
    /**
     * @param {string} path The module you that you want to mock.
     * @param {any} mockExport The function or object you want to be returned from require, instead of the path module's exports, or the module you want to be returned from require, instead of the path module's export.  
     */
    (path: string, mockExport: any | Function | string): void;

    /**
    * @param {string} path The module you that you want to stop mocking.
    */
    stop(path: string): void;

    /** This function can be used to remove all registered mocks without the need to remove them individually using mock.stop(). */
    stopAll(): void;

    /**
     * @param {string} path The file whose cache you want to refresh. 
     */
    reRequire(path: string): void;
}

declare const myModule: Mock;
export = myModule;
