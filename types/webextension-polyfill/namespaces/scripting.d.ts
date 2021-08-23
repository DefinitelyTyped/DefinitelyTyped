/**
 * Namespace: browser.scripting
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>browser.scripting</code> API to execute scripts or inject/remove css.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
export namespace Scripting {
    /**
     * Details of the script to insert.
     */
    interface InjectionTarget {
        /**
         * Whether the script should inject into all frames within the tab. Defaults to false.
         * This must not be true if frameIds is specified.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * The IDs of specific frames to inject into.
         * Optional.
         */
        frameIds?: number[];

        /**
         * The ID of the tab into which to inject.
         */
        tabId: number;
    }

    /**
     * Contains the result of execution for each frame where the injection succeeded.
     */
    interface InjectionResult {
        /**
         * Whether the script should inject into all frames within the tab. Defaults to false.
         * This must not be true if frameIds is specified.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * The frame associated with the injection.
         */
        frameId: number;

        /**
         * The result of the script execution.
         * Optional.
         */
        result?: any;
    }

    /**
     * Details of the script to insert.
     */
    interface ScriptInjection {
        /**
         * The arguments to curry into a provided function. This is only valid if the func parameter is specified.
         * These arguments must be JSON-serializable.
         * Optional.
         */
        args?: any[];

        /**
         * The path of the JS or CSS files to inject, relative to the extension's root directory.
         * NOTE: Currently a maximum of one file is supported. Exactly one of files and func must be specified.
         * Optional.
         */
        files?: string[];

        /**
         * A JavaScript function to inject. This function will be serialized, and then deserialized for injection.
         * This means that any bound parameters and execution context will be lost. Exactly one of files and func must be
         * specified.
         *
         * @param ...args The arguments
         * @returns The return value
         */
        func?(...args: any[]): any;

        /**
         * Details specifying the target into which to inject the script.
         */
        target: InjectionTarget;
    }

    /**
     * The origin for a style change. See style origins for more info.
     *
     * "AUTHOR": The author origin is the style origin which contains all of the styles which are part of the document,
     * whether embedded within the HTML or loaded from an external stylesheet file.
     * "USER": The user origin is the style origin containing any CSS that the user of the web browser has added.
     * These may be from adding styles using a developer tool or from a browser extension that automatically applies custom
     * styles to content, such as Stylus or Stylish.
     */
    type StyleOrigin = "AUTHOR" | "USER";

    /**
     * Details of the css to insert.
     */
    interface CSSInjection {
        /**
         * A string containing the CSS to inject. Exactly one of files and css must be specified.
         * Optional.
         */
        css?: string;

        /**
         * The path of the CSS files to inject, relative to the extension's root directory. NOTE: Currently a maximum of one file
         * is supported. Exactly one of files and css must be specified.
         * Optional.
         */
        files?: string[];

        /**
         * The style origin for the injection. Defaults to 'AUTHOR'.
         * Optional.
         */
        origin?: StyleOrigin;

        /**
         * Details specifying the target into which to insert the CSS.
         */
        target: InjectionTarget;
    }

    interface Static {
        /**
         * Injects JavaScript code into a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param injection Details of the script to insert.
         * @returns Called after all the JavaScript has been executed.
         */
        executeScript(injection: ScriptInjection): Promise<InjectionResult>;

        /**
         * Injects CSS into a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param injection Details of the CSS text to insert.
         * @returns Called when all the CSS has been inserted.
         */
        insertCSS(injection: CSSInjection): Promise<void>;

        /**
         * Removes injected CSS from a page. For details, see the $(topic:content_scripts)[programmatic injection]
         * section of the content scripts doc.
         *
         * @param injection Details of the CSS text to insert.
         * @returns Called when all the CSS has been removed.
         */
        removeCSS(injection: CSSInjection): Promise<void>;
    }
}
