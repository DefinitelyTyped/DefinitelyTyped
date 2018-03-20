// Type definitions for opn 5.1
// Project: https://github.com/sindresorhus/opn
// Definitions by: Shinnosuke Watanabe <https://github.com/shinnn>,
//                 Maxime LUCE <https://github.com/SomaticIT>,
//                 Tommy Lent <https://github.com/tlent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as cp from 'child_process';

/* Note that ES6 modules cannot directly export callable functions.
 * This file should be imported using the CommonJS-style:
 *   import x = require('opn');
 */
export = opn;

/**
 * Uses the command `open` on OS X, `start` on Windows and `xdg-open` on other platforms.
 *
 * Returns a promise for the spawned child process. You would normally not need to use this for
 * anything, but it can be useful if you'd like to attach custom event listeners or perform
 * other operations directly on the spawned process.
 *
 * @param target The thing you want to open. Can be a URL, file, or executable.
 *     Opens in the default app for the file type. For example, URLs open in your default
 *     browser.
 * @param options Options to be passed to opn.
 */
declare function opn(
    target: string,
    options?: Opn.Options
): Promise<cp.ChildProcess>;

declare namespace Opn {
    interface Options {
        /**
         * Wait for the opened app to exit before fulfilling the promise.
         * If `false` it's fulfilled immediately when opening the app.
         * On Windows you have to explicitly specify an app for it to be able to wait.
         * Defaults to `true`.
         */
        wait?: boolean;

        /**
         * Specify the app to open the `target` with, or an array with the app and app arguments.
         * The app name is platform dependent. Don't hard code it in reusable modules.
         * Eg. Chrome is `google chrome` on OS X, `google-chrome` on Linux and `chrome` on Windows.
         */
        app?: string | ReadonlyArray<string>;
    }
}
