//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.browserSettings.colorManagement
 *
 * Use the <code>browserSettings.colorManagement</code> API to query and set items related to color management.
 * Permissions: "browserSettings"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Types } from "./types";

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
