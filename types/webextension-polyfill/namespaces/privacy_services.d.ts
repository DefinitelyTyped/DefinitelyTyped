/**
 * Namespace: browser.privacy.services
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>browser.privacy</code> API to control usage of the features in the browser that can affect a user's
 * privacy.
 * Permissions: "privacy"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
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
