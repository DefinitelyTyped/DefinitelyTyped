//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.browserAction
 *
 * Permissions: "manifest:action", "manifest:browser_action"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Action } from "./action";

export namespace BrowserAction {
    interface Static extends Action.Static {
        [s: string]: unknown;
    }
}
