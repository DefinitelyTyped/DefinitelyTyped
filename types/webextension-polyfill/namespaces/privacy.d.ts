//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.privacy
 *
 * Permissions: "privacy"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { PrivacyNetwork } from "./privacy_network";
import { PrivacyServices } from "./privacy_services";
import { PrivacyWebsites } from "./privacy_websites";

export namespace Privacy {
    interface Static {
        network: PrivacyNetwork.Static;
        services: PrivacyServices.Static;
        websites: PrivacyWebsites.Static;
    }
}
