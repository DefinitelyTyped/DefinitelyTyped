//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Types } from "./types";

/**
 * Namespace: browser.privacy.services
 */
export namespace PrivacyServices {
    interface Static {
        /**
         * If enabled, the password manager will ask if you want to save passwords. This preference's value is a boolean,
         * defaulting to <code>true</code>.
         */
        passwordSavingEnabled: Types.Setting;
    }
}
