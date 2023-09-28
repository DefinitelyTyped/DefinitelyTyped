//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.types
 *
 * Contains types used by other schemas.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace Types {
    /**
     * The scope of the Setting. One of<ul><li><var>regular</var>: setting for the regular profile (which is inherited by the
     * incognito profile if not overridden elsewhere),</li><li><var>regular_only</var>: setting for the regular profile only
     * (not inherited by the incognito profile),</li><li><var>incognito_persistent</var>: setting for the incognito profile
     * that survives browser restarts (overrides regular preferences),</li><li><var>incognito_session_only</var>
     * : setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito
     * session ends (overrides regular and incognito_persistent preferences).</li></ul> Only <var>regular</var>
     * is supported by Firefox at this time.
     */
    type SettingScope = "regular" | "regular_only" | "incognito_persistent" | "incognito_session_only";

    /**
     * One of<ul><li><var>not_controllable</var>: cannot be controlled by any extension</li><li><var>
     * controlled_by_other_extensions</var>: controlled by extensions with higher precedence</li><li><var>
     * controllable_by_this_extension</var>: can be controlled by this extension</li><li><var>controlled_by_this_extension</var>
     * : controlled by this extension</li></ul>
     */
    type LevelOfControl =
        | "not_controllable"
        | "controlled_by_other_extensions"
        | "controllable_by_this_extension"
        | "controlled_by_this_extension";

    interface Setting {
        /**
         * Gets the value of a setting.
         *
         * @param details Which setting to consider.
         */
        get(details: SettingGetDetailsType): Promise<SettingGetCallbackDetailsType>;

        /**
         * Sets the value of a setting.
         *
         * @param details Which setting to change.
         * @returns Called at the completion of the set operation.
         */
        set(details: SettingSetDetailsType): Promise<void>;

        /**
         * Clears the setting, restoring any default value.
         *
         * @param details Which setting to clear.
         * @returns Called at the completion of the clear operation.
         */
        clear(details: SettingClearDetailsType): Promise<void>;

        /**
         * Fired after the setting changes.
         *
         * @param details
         */
        onChange: Events.Event<(details: SettingOnChangeDetailsType) => void>;
    }

    interface SettingOnChangeDetailsType {
        /**
         * The value of the setting after the change.
         */
        value: any;

        /**
         * The level of control of the setting.
         */
        levelOfControl: LevelOfControl;

        /**
         * Whether the value that has changed is specific to the incognito session.<br/>This property will <em>only</em>
         * be present if the user has enabled the extension in incognito mode.
         * Optional.
         */
        incognitoSpecific?: boolean;
    }

    /**
     * Which setting to consider.
     */
    interface SettingGetDetailsType {
        /**
         * Whether to return the value that applies to the incognito session (default false).
         * Optional.
         */
        incognito?: boolean;
    }

    /**
     * Details of the currently effective value.
     */
    interface SettingGetCallbackDetailsType {
        /**
         * The value of the setting.
         */
        value: any;

        /**
         * The level of control of the setting.
         */
        levelOfControl: LevelOfControl;

        /**
         * Whether the effective value is specific to the incognito session.<br/>This property will <em>only</em>
         * be present if the <var>incognito</var> property in the <var>details</var> parameter of <code>get()</code> was true.
         * Optional.
         */
        incognitoSpecific?: boolean;
    }

    /**
     * Which setting to change.
     */
    interface SettingSetDetailsType {
        /**
         * The value of the setting. <br/>Note that every setting has a specific value type, which is described together with the
         * setting. An extension should <em>not</em> set a value of a different type.
         */
        value: any;

        /**
         * Where to set the setting (default: regular).
         * Optional.
         */
        scope?: SettingScope;
    }

    /**
     * Which setting to clear.
     */
    interface SettingClearDetailsType {
        /**
         * Where to clear the setting (default: regular).
         * Optional.
         */
        scope?: SettingScope;
    }

    interface Static {
        [s: string]: unknown;
    }
}
