/**
 * Namespace: browser.contextMenus
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the browser.contextMenus API to add items to the browser's context menu. You can choose what types of objects your
 * context menu additions apply to, such as images, hyperlinks, and pages.
 * Permissions: "contextMenus"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Menus } from "./menus";

export namespace ContextMenus {
    interface Static extends Menus.Static {
        [s: string]: unknown;
    }
}
