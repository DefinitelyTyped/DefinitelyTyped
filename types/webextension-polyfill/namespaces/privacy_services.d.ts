//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.privacy.services
 *
 * Use the <code>browser.privacy</code> API to control usage of the features in the browser that can affect a user's
 * privacy.
 * Permissions: "privacy"
 */
import { Types } from "./types";

export namespace PrivacyServices {
    interface Static {
        /**
         * If enabled, the password manager will ask if you want to save passwords. This preference's value is a boolean,
         * defaulting to <code>true</code>.
         */
        passwordSavingEnabled: Types.Setting;
    }
}
