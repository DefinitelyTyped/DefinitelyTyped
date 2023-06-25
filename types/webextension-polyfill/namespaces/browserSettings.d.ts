//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.browserSettings
 *
 * Use the <code>browser.browserSettings</code> API to control global settings of the browser.
 * Permissions: "browserSettings"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { BrowserSettingsColorManagement } from "./browserSettings_colorManagement";
import { Types } from "./types";

export namespace BrowserSettings {
    /**
     * How images should be animated in the browser.
     */
    type ImageAnimationBehavior = "normal" | "none" | "once";

    /**
     * After which mouse event context menus should popup.
     */
    type ContextMenuMouseEvent = "mouseup" | "mousedown";

    /**
     * Color management mode.
     */
    type ColorManagementMode = "off" | "full" | "tagged_only";

    interface Static {
        /**
         * Allows or disallows pop-up windows from opening in response to user events.
         */
        allowPopupsForUserEvents: Types.Setting;

        /**
         * Enables or disables the browser cache.
         */
        cacheEnabled: Types.Setting;

        /**
         * This boolean setting controls whether the selected tab can be closed with a double click.
         */
        closeTabsByDoubleClick: Types.Setting;

        /**
         * Controls after which mouse event context menus popup. This setting's value is of type ContextMenuMouseEvent,
         * which has possible values of <code>mouseup</code> and <code>mousedown</code>.
         */
        contextMenuShowEvent: Types.Setting;

        /**
         * Returns the value of the overridden home page. Read-only.
         */
        homepageOverride: Types.Setting;

        /**
         * Controls the behaviour of image animation in the browser. This setting's value is of type ImageAnimationBehavior,
         * defaulting to <code>normal</code>.
         */
        imageAnimationBehavior: Types.Setting;

        /**
         * Returns the value of the overridden new tab page. Read-only.
         */
        newTabPageOverride: Types.Setting;

        /**
         * Controls where new tabs are opened. `afterCurrent` will open all new tabs next to the current tab,
         * `relatedAfterCurrent` will open only related tabs next to the current tab, and `atEnd` will open all tabs at the end of
         * the tab strip. The default is `relatedAfterCurrent`.
         */
        newTabPosition: Types.Setting;

        /**
         * This boolean setting controls whether bookmarks are opened in the current tab or in a new tab.
         */
        openBookmarksInNewTabs: Types.Setting;

        /**
         * This boolean setting controls whether search results are opened in the current tab or in a new tab.
         */
        openSearchResultsInNewTabs: Types.Setting;

        /**
         * This boolean setting controls whether urlbar results are opened in the current tab or in a new tab.
         */
        openUrlbarResultsInNewTabs: Types.Setting;

        /**
         * Disables webAPI notifications.
         */
        webNotificationsDisabled: Types.Setting;

        /**
         * This setting controls whether the user-chosen colors override the page's colors.
         */
        overrideDocumentColors: Types.Setting;

        /**
         * This setting controls whether a light or dark color scheme overrides the page's preferred color scheme.
         */
        overrideContentColorScheme: Types.Setting;

        /**
         * This setting controls whether the document's fonts are used.
         */
        useDocumentFonts: Types.Setting;

        /**
         * This boolean setting controls whether zoom is applied to the full page or to text only.
         */
        zoomFullPage: Types.Setting;

        /**
         * This boolean setting controls whether zoom is applied on a per-site basis or to the current tab only. If privacy.
         * resistFingerprinting is true, this setting has no effect and zoom is applied to the current tab only.
         */
        zoomSiteSpecific: Types.Setting;

        colorManagement: BrowserSettingsColorManagement.Static;
    }
}
