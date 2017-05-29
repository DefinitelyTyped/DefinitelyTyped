// Type definitions for electron-debug v1.1.0
// Project: https://github.com/sindresorhus/electron-debug
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Install keyboard shortcuts and optionally activate DevTools on each
 * created BrowserWindow.
 */
declare function electronDebug(options: {
    /** Enable debug options. */
    enabled?: boolean;
    /** Show DevTools on each created BrowserWindow. */
    showDevTools?: boolean | 'right' | 'bottom' | 'undocked';
}): void;

export = electronDebug;
