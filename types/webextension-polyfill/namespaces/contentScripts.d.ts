//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { ExtensionTypes } from "./extensionTypes";
import { Manifest } from "./manifest";

/**
 * Namespace: browser.contentScripts
 */
export namespace ContentScripts {
    /**
     * Details of a content script registered programmatically
     */
    interface RegisteredContentScriptOptions {
        matches: Manifest.MatchPattern[];

        /**
         * Optional.
         */
        excludeMatches?: Manifest.MatchPattern[];

        /**
         * Optional.
         */
        includeGlobs?: string[];

        /**
         * Optional.
         */
        excludeGlobs?: string[];

        /**
         * The list of CSS files to inject
         * Optional.
         */
        css?: ExtensionTypes.ExtensionFileOrCode[];

        /**
         * The list of JS files to inject
         * Optional.
         */
        js?: ExtensionTypes.ExtensionFileOrCode[];

        /**
         * If allFrames is <code>true</code>, implies that the JavaScript or CSS should be injected into all frames of current page.
         * By default, it's <code>false</code> and is only injected into the top frame.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has
         * access to its parent document. Ignored if matchOriginAsFallback is specified. By default it is <code>false</code>.
         * Optional.
         */
        matchAboutBlank?: boolean;

        /**
         * If matchOriginAsFallback is true, then the code is also injected in about:, data:,
         * blob: when their origin matches the pattern in 'matches', even if the actual document origin is opaque (due to the use
         * of CSP sandbox or iframe sandbox). Match patterns in 'matches' must specify a wildcard path glob. By default it is <code>
         * false</code>.
         * Optional.
         */
        matchOriginAsFallback?: boolean;

        /**
         * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
         * Optional.
         */
        runAt?: ExtensionTypes.RunAt;

        /**
         * The JavaScript world for a script to execute within. Defaults to "ISOLATED".
         * Optional.
         */
        world?: ExtensionTypes.ExecutionWorld;

        /**
         * limit the set of matched tabs to those that belong to the given cookie store id
         * Optional.
         */
        cookieStoreId?: string[] | string;
    }

    /**
     * An object that represents a content script registered programmatically
     */
    interface RegisteredContentScript {
        /**
         * Unregister a content script registered programmatically
         */
        unregister(): Promise<void>;
    }

    interface Static {
        /**
         * Register a content script programmatically
         */
        register(contentScriptOptions: RegisteredContentScriptOptions): Promise<RegisteredContentScript>;
    }
}
