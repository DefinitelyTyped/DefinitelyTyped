//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Types } from "./types";

/**
 * Namespace: browser.browserSettings.colorManagement
 */
export namespace BrowserSettingsColorManagement {
    interface Static {
        /**
         * This setting controls the mode used for color management and must be a string from $(ref:browserSettings.
         * ColorManagementMode)
         */
        mode: Types.Setting;

        /**
         * This boolean setting controls whether or not native sRGB color management is used.
         */
        useNativeSRGB: Types.Setting;

        /**
         * This boolean setting controls whether or not the WebRender compositor is used.
         */
        useWebRenderCompositor: Types.Setting;
    }
}
