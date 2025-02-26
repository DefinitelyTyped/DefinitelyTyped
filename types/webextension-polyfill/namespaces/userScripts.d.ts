//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { ExtensionTypes } from "./extensionTypes";
import { Manifest } from "./manifest";

/**
 * Namespace: browser.userScripts
 */
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
         * The ID of the user script specified in the API call. This property must not start with a '_' as it's reserved as a
         * prefix for generated script IDs.
         */
        id: string;

        /**
         * If allFrames is <code>true</code>, implies that the JavaScript should be injected into all frames of current page.
         * By default, it's <code>false</code> and is only injected into the top frame.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * The list of ScriptSource objects defining sources of scripts to be injected into matching pages.
         */
        js: ScriptSource[];

        /**
         * At least one of matches or includeGlobs should be non-empty. The script runs in documents whose URL match either pattern.
         * Optional.
         */
        matches?: Manifest.MatchPattern[];

        /**
         * Optional.
         */
        excludeMatches?: Manifest.MatchPattern[];

        /**
         * At least one of matches or includeGlobs should be non-empty. The script runs in documents whose URL match either pattern.
         * Optional.
         */
        includeGlobs?: string[];

        /**
         * Optional.
         */
        excludeGlobs?: string[];

        /**
         * The soonest that the JavaScript will be injected into the tab. Defaults to "document_idle".
         * Optional.
         */
        runAt?: ExtensionTypes.RunAt;

        /**
         * The JavaScript script for a script to execute within. Defaults to "USER_SCRIPT".
         * Optional.
         */
        world?: ExecutionWorld;

        /**
         * If specified, specifies a specific user script world ID to execute in. Only valid if `world` is omitted or is
         * `USER_SCRIPT`. If `worldId` is omitted, the script will execute in the default user script world ("").
         * Values with leading underscores (`_`) are reserved. The maximum length is 256.
         * Optional.
         */
        worldId?: string;
    }

    /**
     * The JavaScript world for a script to execute within. <code>USER_SCRIPT</code> is the default execution environment of
     * user scripts, <code>MAIN</code> is the web page's execution environment.
     */
    type ExecutionWorld = "MAIN" | "USER_SCRIPT";

    /**
     * Optional filter to use with getScripts() and unregister().
     */
    interface UserScriptFilter {
        /**
         * Optional.
         */
        ids?: string[];
    }

    /**
     * Object with file xor code property. Equivalent to the ExtensionFileOrCode, except the file remains a relative URL.
     */
    type ScriptSource = ScriptSourceC1Type | ScriptSourceC2Type;

    /**
     * The configuration of a USER_SCRIPT world.
     */
    interface WorldProperties {
        /**
         * The identifier of the world. Values with leading underscores (`_`) are reserved. The maximum length is 256.
         * Defaults to the default USER_SCRIPT world ("").
         * Optional.
         */
        worldId?: string;

        /**
         * The world's Content Security Policy. Defaults to the CSP of regular content scripts,
         * which prohibits dynamic code execution such as eval.
         * Optional.
         */
        csp?: string;

        /**
         * Whether the runtime.sendMessage and runtime.connect methods are exposed. Defaults to not exposing these messaging APIs.
         * Optional.
         */
        messaging?: boolean;
    }

    /**
     * An object that represents a user script registered programmatically
     */
    interface RegisterCallbackLegacyRegisteredUserScriptType {
        /**
         * Unregister a user script registered programmatically
         */
        unregister(): Promise<void>;
    }

    interface UpdateScriptsItemType extends Omit<RegisteredUserScript, "js"> {
        /**
         * Optional.
         */
        js?: ScriptSource[];
    }

    interface ScriptSourceC1Type {
        /**
         * The path of the JavaScript file to inject relative to the extension's root directory.
         */
        file: string;
    }

    interface ScriptSourceC2Type {
        code: string;
    }

    interface Static {
        /**
         * Register a user script programmatically given its $(ref:userScripts.UserScriptOptions),
         * and resolves to an object with the unregister() function
         */
        register(userScriptOptions: UserScriptOptions): Promise<RegisterCallbackLegacyRegisteredUserScriptType>;

        /**
         * Registers one or more user scripts for this extension.
         *
         * @param scripts List of user scripts to be registered.
         */
        register(scripts: RegisteredUserScript[]): void;

        /**
         * Updates one or more user scripts for this extension.
         *
         * @param scripts List of user scripts to be updated.
         */
        update(scripts: UpdateScriptsItemType[]): void;

        /**
         * Unregisters all dynamically-registered user scripts for this extension.
         *
         * @param filter Optional. If specified, this method unregisters only the user scripts that match it.
         */
        unregister(filter?: UserScriptFilter): void;

        /**
         * Returns all dynamically-registered user scripts for this extension.
         *
         * @param filter Optional. If specified, this method returns only the user scripts that match it.
         */
        getScripts(filter?: UserScriptFilter): Promise<RegisteredUserScript[]>;

        /**
         * Configures the environment for scripts running in a USER_SCRIPT world.
         *
         * @param properties The desired configuration for a USER_SCRIPT world.
         */
        configureWorld(properties: WorldProperties): void;

        /**
         * Resets the configuration for a given world. That world will fall back to the default world's configuration.
         *
         * @param worldId Optional. The ID of the USER_SCRIPT world to reset. If omitted or empty,
         * resets the default world's configuration.
         */
        resetWorldConfiguration(worldId?: string): void;

        /**
         * Returns all registered USER_SCRIPT world configurations.
         */
        getWorldConfigurations(): Promise<WorldProperties[]>;
    }
}
