//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.scripting
 *
 * Use the scripting API to execute script in different contexts.
 * Permissions: "scripting"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { ExtensionTypes } from "./extensionTypes";
import { Manifest } from "./manifest";

export namespace Scripting {
    /**
     * Details of a script injection
     */
    interface ScriptInjection {
        /**
         * The arguments to curry into a provided function. This is only valid if the <code>func</code> parameter is specified.
         * These arguments must be JSON-serializable.
         * Optional.
         */
        args?: any[];

        /**
         * The path of the JS files to inject, relative to the extension's root directory. Exactly one of <code>files</code>
         * and <code>func</code> must be specified.
         * Optional.
         */
        files?: string[];

        /**
         * A JavaScript function to inject. This function will be serialized, and then deserialized for injection.
         * This means that any bound parameters and execution context will be lost. Exactly one of <code>files</code> and <code>
         * func</code> must be specified.
         *
         * @param ...args The arguments
         * @returns The return value
         */
        func?(...args: any[]): any;

        /**
         * Details specifying the target into which to inject the script.
         */
        target: InjectionTarget;

        /**
         * Optional.
         */
        world?: ExecutionWorld;

        /**
         * Whether the injection should be triggered in the target as soon as possible (but not necessarily prior to page load).
         * Optional.
         */
        injectImmediately?: boolean;
    }

    /**
     * Result of a script injection.
     */
    interface InjectionResult {
        /**
         * The frame ID associated with the injection.
         */
        frameId: number;

        /**
         * The result of the script execution.
         * Optional.
         */
        result?: any;

        /**
         * The error property is set when the script execution failed. The value is typically an (Error)
         * object with a message property, but could be any value (including primitives and undefined)
         * if the script threw or rejected with such a value.
         * Optional.
         */
        error?: any;

        /**
         * Whether the script should inject into all frames within the tab. Defaults to false.
         * This must not be true if frameIds is specified.
         * Optional.
         */
        allFrames?: boolean;
    }

    /**
     * Details of the script to insert.
     */
    interface InjectionTarget {
        /**
         * The IDs of specific frames to inject into.
         * Optional.
         */
        frameIds?: number[];

        /**
         * Whether the script should inject into all frames within the tab. Defaults to false.
         * This must not be true if frameIds is specified.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * The ID of the tab into which to inject.
         */
        tabId: number;
    }

    interface CSSInjection {
        /**
         * A string containing the CSS to inject. Exactly one of <code>files</code> and <code>css</code> must be specified.
         * Optional.
         */
        css?: string;

        /**
         * The path of the CSS files to inject, relative to the extension's root directory. Exactly one of <code>files</code>
         * and <code>css</code> must be specified.
         * Optional.
         */
        files?: string[];

        /**
         * The style origin for the injection. Defaults to <code>'AUTHOR'</code>.
         * Optional.
         */
        origin?: CSSInjectionOriginEnum;

        /**
         * Details specifying the target into which to inject the CSS.
         */
        target: InjectionTarget;
    }

    interface ContentScriptFilter {
        /**
         * The IDs of specific scripts to retrieve with <code>getRegisteredContentScripts()</code> or to unregister with <code>
         * unregisterContentScripts()</code>.
         * Optional.
         */
        ids?: string[];
    }

    /**
     * The JavaScript world for a script to execute within. We currently only support the <code>'ISOLATED'</code> world.
     */
    type ExecutionWorld = "ISOLATED";

    interface RegisteredContentScript {
        /**
         * If specified true, it will inject into all frames, even if the frame is not the top-most frame in the tab.
         * Each frame is checked independently for URL requirements; it will not inject into child frames if the URL requirements
         * are not met. Defaults to false, meaning that only the top frame is matched.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * Excludes pages that this content script would otherwise be injected into.
         * Optional.
         */
        excludeMatches?: string[];

        /**
         * The id of the content script, specified in the API call.
         */
        id: string;

        /**
         * The list of JavaScript files to be injected into matching pages. These are injected in the order they appear in this
         * array.
         * Optional.
         */
        js?: Manifest.ExtensionURL[];

        /**
         * Specifies which pages this content script will be injected into. Must be specified for <code>registerContentScripts()
         * </code>.
         * Optional.
         */
        matches?: string[];

        /**
         * Specifies when JavaScript files are injected into the web page. The preferred and default value is <code>
         * document_idle</code>.
         * Optional.
         */
        runAt?: ExtensionTypes.RunAt;

        /**
         * Specifies if this content script will persist into future sessions. This is currently NOT supported.
         * Optional.
         */
        persistAcrossSessions?: boolean;

        /**
         * The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array.
         * Optional.
         */
        css?: Manifest.ExtensionURL[];
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

    interface UpdateContentScriptsScriptsItemType extends RegisteredContentScript {
        /**
         * Specifies if this content script will persist into future sessions.
         * Optional.
         */
        persistAcrossSessions?: boolean;
    }

    /**
     * The style origin for the injection. Defaults to <code>'AUTHOR'</code>.
     */
    type CSSInjectionOriginEnum = "USER" | "AUTHOR";

    interface Static {
        /**
         * Injects a script into a target context. The script will be run at <code>document_idle</code>.
         *
         * @param injection The details of the script which to inject.
         * @returns Invoked upon completion of the injection. The resulting array contains the result of execution for each frame
         * where the injection succeeded.
         */
        executeScript(injection: ScriptInjection): Promise<InjectionResult[]>;

        /**
         * Inserts a CSS stylesheet into a target context. If multiple frames are specified, unsuccessful injections are ignored.
         *
         * @param injection The details of the styles to insert.
         * @returns Invoked upon completion of the injection.
         */
        insertCSS(injection: CSSInjection): Promise<void>;

        /**
         * Removes a CSS stylesheet that was previously inserted by this extension from a target context.
         *
         * @param injection The details of the styles to remove. Note that the <code>css</code>, <code>files</code>, and <code>
         * origin</code> properties must exactly match the stylesheet inserted through <code>insertCSS</code>.
         * Attempting to remove a non-existent stylesheet is a no-op.
         * @returns Invoked upon completion of the injection.
         */
        removeCSS(injection: CSSInjection): Promise<void>;

        /**
         * Registers one or more content scripts for this extension.
         *
         * @param scripts Contains a list of scripts to be registered. If there are errors during script parsing/file validation,
         * or if the IDs specified already exist, then no scripts are registered.
         * @returns Invoked upon completion of the registration.
         */
        registerContentScripts(scripts: RegisteredContentScript[]): Promise<void>;

        /**
         * Returns all dynamically registered content scripts for this extension that match the given filter.
         *
         * @param filter Optional. An object to filter the extension's dynamically registered scripts.
         * @returns The resulting array contains the registered content scripts.
         */
        getRegisteredContentScripts(filter?: ContentScriptFilter): Promise<RegisteredContentScript[]>;

        /**
         * Unregisters one or more content scripts for this extension.
         *
         * @param filter Optional. If specified, only unregisters dynamic content scripts which match the filter. Otherwise,
         * all of the extension's dynamic content scripts are unregistered.
         * @returns Invoked upon completion of the unregistration.
         */
        unregisterContentScripts(filter?: ContentScriptFilter): Promise<void>;

        /**
         * Updates one or more content scripts for this extension.
         *
         * @param scripts Contains a list of scripts to be updated. If there are errors during script parsing/file validation,
         * or if the IDs specified do not already exist, then no scripts are updated.
         * @returns Invoked when scripts have been updated.
         */
        updateContentScripts(scripts: UpdateContentScriptsScriptsItemType[]): Promise<void>;
    }
}
