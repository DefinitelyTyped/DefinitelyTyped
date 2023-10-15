//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.userScripts
 *
 * Permissions: "manifest:user_scripts"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { ExtensionTypes } from "./extensionTypes";
import { Manifest } from "./manifest";

export namespace UserScripts {
    /**
     * Details of a user script
     */
    interface UserScriptOptions {
        /**
         * The list of JS files to inject
         */
        js: ExtensionTypes.ExtensionFileOrCode[];

        /**
         * An opaque user script metadata value
         * Optional.
         */
        scriptMetadata?: ExtensionTypes.PlainJSONValue;

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
         * If allFrames is <code>true</code>, implies that the JavaScript should be injected into all frames of current page.
         * By default, it's <code>false</code> and is only injected into the top frame.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has
         * access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is <code>false</code>.
         * Optional.
         */
        matchAboutBlank?: boolean;

        /**
         * The soonest that the JavaScript will be injected into the tab. Defaults to "document_idle".
         * Optional.
         */
        runAt?: ExtensionTypes.RunAt;

        /**
         * limit the set of matched tabs to those that belong to the given cookie store id
         * Optional.
         */
        cookieStoreId?: string[] | string;
    }

    /**
     * An object that represents a user script registered programmatically
     */
    interface RegisteredUserScript {
        /**
         * Unregister a user script registered programmatically
         */
        unregister(): void;
    }

    interface Static {
        /**
         * Register a user script programmatically given its $(ref:userScripts.UserScriptOptions),
         * and resolves to a $(ref:userScripts.RegisteredUserScript) instance
         *
         * @param userScriptOptions
         */
        register(userScriptOptions: UserScriptOptions): void;
    }
}
