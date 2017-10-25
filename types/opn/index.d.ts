// Type definitions for opn 3.0
// Project: https://github.com/sindresorhus/opn
// Definitions by: Shinnosuke Watanabe <https://github.com/shinnn>,
//                 Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as cp from 'child_process';

/* Note that ES6 modules cannot directly export callable functions.
 * This file should be imported using the CommonJS-style:
 *   import x = require('opn');
 */
export = opn;

/**
 * Uses the command open on OS X, start on Windows and xdg-open on other platforms.
 *
 * Returns the spawned child process.
 * You'd normally not need to use this for anything, but it can be useful if you'd like
 * to attach custom event listeners or perform other operations directly on the spawned process.
 *
 * @param target - The thing you want to open. Can be a URL, file, or executable. Opens in the default app for the file type. Eg. URLs opens in your default browser.
 * @param options - Options to be passed to opn.
 * @param callback - Called when the opened app exits, or if `wait: false`, immediately when opening.
 */
declare function opn(
    target: string,
    options?: Opn.Options,
    callback?: (err: Error) => void
): cp.ChildProcess;

declare namespace Opn {
    interface Options {
        /**
         * Wait for the opened app to exit before calling the `callback`.
         * If `false` it's called immediately when opening the app.
         * On Windows you have to explicitly specify an app for it to be able to wait.
         */
        wait?: boolean;

        /**
         * Specify the app to open the target with, or an array with the app and app arguments.
         * The app name is platform dependent. Don't hard code it in reusable modules.
         * Eg. Chrome is `google chrome` on OS X, `google-chrome` on Linux and `chrome` on Windows.
         */
        app?: string | string[];
    }
}
