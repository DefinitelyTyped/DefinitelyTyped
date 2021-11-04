/**
 * Namespace: browser.devtools.inspectedWindow
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>chrome.devtools.inspectedWindow</code> API to interact with the inspected window: obtain the tab ID for
 * the inspected page, evaluate the code in the context of the inspected window, reload the page,
 * or obtain the list of resources within the page.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
export namespace DevtoolsInspectedWindow {
    /**
     * A resource within the inspected page, such as a document, a script, or an image.
     */
    interface Resource {
        /**
         * The URL of the resource.
         */
        url: string;
    }

    /**
     * The options parameter can contain one or more options.
     */
    interface EvalOptionsType {
        [s: string]: unknown;
    }

    /**
     * An object providing details if an exception occurred while evaluating the expression.
     */
    interface EvalCallbackExceptionInfoType {
        /**
         * Set if the error occurred on the DevTools side before the expression is evaluated.
         */
        isError: boolean;

        /**
         * Set if the error occurred on the DevTools side before the expression is evaluated.
         */
        code: string;

        /**
         * Set if the error occurred on the DevTools side before the expression is evaluated.
         */
        description: string;

        /**
         * Set if the error occurred on the DevTools side before the expression is evaluated,
         * contains the array of the values that may be substituted into the description string to provide more information about
         * the cause of the error.
         */
        details: any[];

        /**
         * Set if the evaluated code produces an unhandled exception.
         */
        isException: boolean;

        /**
         * Set if the evaluated code produces an unhandled exception.
         */
        value: string;
    }

    interface ReloadReloadOptionsType {
        /**
         * When true, the loader will bypass the cache for all inspected page resources loaded before the <code>load</code>
         * event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools
         * window.
         * Optional.
         */
        ignoreCache?: boolean;

        /**
         * If specified, the string will override the value of the <code>User-Agent</code> HTTP header that's sent while loading
         * the resources of the inspected page. The string will also override the value of the <code>navigator.userAgent</code>
         * property that's returned to any scripts that are running within the inspected page.
         * Optional.
         */
        userAgent?: string;

        /**
         * If specified, the script will be injected into every frame of the inspected page immediately upon load,
         * before any of the frame's scripts. The script will not be injected after subsequent reloads&mdash;for example,
         * if the user presses Ctrl+R.
         * Optional.
         */
        injectedScript?: string;
    }

    interface Static {
        /**
         * Evaluates a JavaScript expression in the context of the main frame of the inspected page.
         * The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown.
         * The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation.
         * In either case, the <code>result</code> parameter of the callback is <code>undefined</code>.
         * In the case of a DevTools-side error, the <code>isException</code> parameter is non-null and has <code>isError</code>
         * set to true and <code>code</code> set to an error code. In the case of a JavaScript error, <code>isException</code>
         * is set to true and <code>value</code> is set to the string value of thrown object.
         *
         * @param expression An expression to evaluate.
         * @param options Optional. The options parameter can contain one or more options.
         * @returns A function called when evaluation completes.
         */
        eval(expression: string, options?: EvalOptionsType): Promise<[any, EvalCallbackExceptionInfoType]>;

        /**
         * Reloads the inspected page.
         *
         * @param reloadOptions Optional.
         */
        reload(reloadOptions?: ReloadReloadOptionsType): void;

        /**
         * The ID of the tab being inspected. This ID may be used with chrome.tabs.* API.
         */
        tabId: number;
    }
}
