/**
 * Namespace: browser.extension
 * Generated from Mozilla sources. Do not manually edit!
 *
 * The <code>browser.extension</code> API has utilities that can be used by any extension page.
 * It includes support for exchanging messages between an extension and its content scripts or between extensions,
 * as described in detail in $(topic:messaging)[Message Passing].
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
export namespace Extension {
    /**
     * The type of extension view.
     */
    type ViewType = "tab" | "popup" | "sidebar";

    interface GetViewsFetchPropertiesType {
        /**
         * The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab',
         * 'popup', 'sidebar'.
         * Optional.
         */
        type?: ViewType;

        /**
         * The window to restrict the search to. If omitted, returns all views.
         * Optional.
         */
        windowId?: number;

        /**
         * Find a view according to a tab id. If this field is omitted, returns all views.
         * Optional.
         */
        tabId?: number;
    }

    interface Static {
        /**
         * Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.
         *
         * @param fetchProperties Optional.
         * @returns Array of global objects
         */
        getViews(fetchProperties?: GetViewsFetchPropertiesType): Window[];

        /**
         * Returns the JavaScript 'window' object for the background page running inside the current extension.
         * Returns null if the extension has no background page.
         */
        getBackgroundPage(): Window;

        /**
         * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in
         * Incognito' checkbox.
         */
        isAllowedIncognitoAccess(): Promise<boolean>;

        /**
         * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow
         * access to File URLs' checkbox.
         */
        isAllowedFileSchemeAccess(): Promise<boolean>;

        /**
         * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process.
         * The latter only applies to extensions with 'split' incognito_behavior.
         * Optional.
         */
        inIncognitoContext?: boolean;
    }
}
