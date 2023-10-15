//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.management
 *
 * The <code>browser.management</code> API provides ways to manage the list of extensions that are installed and running.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";
import { Manifest } from "./manifest";

export namespace Management {
    /**
     * Information about an icon belonging to an extension.
     */
    interface IconInfo {
        /**
         * A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24,
         * and 16.
         */
        size: number;

        /**
         * The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled,
         * for example), append <code>?grayscale=true</code> to the URL.
         */
        url: string;
    }

    /**
     * A reason the item is disabled.
     */
    type ExtensionDisabledReason = "unknown" | "permissions_increase";

    /**
     * The type of this extension, 'extension' or 'theme'.
     */
    type ExtensionType = "extension" | "theme";

    /**
     * How the extension was installed. One of<br><var>development</var>: The extension was loaded unpacked in developer mode,
     * <br><var>normal</var>: The extension was installed normally via an .xpi file,<br><var>sideload</var>
     * : The extension was installed by other software on the machine,<br><var>other</var>
     * : The extension was installed by other means.
     */
    type ExtensionInstallType = "development" | "normal" | "sideload" | "other";

    /**
     * Information about an installed extension.
     */
    interface ExtensionInfo {
        /**
         * The extension's unique identifier.
         */
        id: string;

        /**
         * The name of this extension.
         */
        name: string;

        /**
         * A short version of the name of this extension.
         * Optional.
         */
        shortName?: string;

        /**
         * The description of this extension.
         */
        description: string;

        /**
         * The <a href='manifest/version'>version</a> of this extension.
         */
        version: string;

        /**
         * The <a href='manifest/version#version_name'>version name</a> of this extension if the manifest specified one.
         * Optional.
         */
        versionName?: string;

        /**
         * Whether this extension can be disabled or uninstalled by the user.
         */
        mayDisable: boolean;

        /**
         * Whether it is currently enabled or disabled.
         */
        enabled: boolean;

        /**
         * A reason the item is disabled.
         * Optional.
         */
        disabledReason?: ExtensionDisabledReason;

        /**
         * The type of this extension, 'extension' or 'theme'.
         */
        type: ExtensionType;

        /**
         * The URL of the homepage of this extension.
         * Optional.
         */
        homepageUrl?: string;

        /**
         * The update URL of this extension.
         * Optional.
         */
        updateUrl?: string;

        /**
         * The url for the item's options page, if it has one.
         */
        optionsUrl: string;

        /**
         * A list of icon information. Note that this just reflects what was declared in the manifest,
         * and the actual image at that url may be larger or smaller than what was declared,
         * so you might consider using explicit width and height attributes on img tags referencing these images.
         * See the <a href='manifest/icons'>manifest documentation on icons</a> for more details.
         * Optional.
         */
        icons?: IconInfo[];

        /**
         * Returns a list of API based permissions.
         * Optional.
         */
        permissions?: string[];

        /**
         * Returns a list of host based permissions.
         * Optional.
         */
        hostPermissions?: string[];

        /**
         * How the extension was installed.
         */
        installType: ExtensionInstallType;
    }

    interface InstallOptionsType {
        /**
         * URL pointing to the XPI file on addons.mozilla.org or similar.
         */
        url: Manifest.HttpURL;

        /**
         * A hash of the XPI file, using sha256 or stronger.
         * Optional.
         */
        hash?: string;
    }

    interface InstallCallbackResultType {
        id: Manifest.ExtensionID;
    }

    interface UninstallSelfOptionsType {
        /**
         * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false.
         * Optional.
         */
        showConfirmDialog?: boolean;

        /**
         * The message to display to a user when being asked to confirm removal of the extension.
         * Optional.
         */
        dialogMessage?: string;
    }

    interface Static {
        /**
         * Returns a list of information about installed extensions.
         */
        getAll(): Promise<ExtensionInfo[]>;

        /**
         * Returns information about the installed extension that has the given ID.
         *
         * @param id The ID from an item of $(ref:management.ExtensionInfo).
         */
        get(id: Manifest.ExtensionID): Promise<ExtensionInfo>;

        /**
         * Installs and enables a theme extension from the given url.
         *
         * @param options
         */
        install(options: InstallOptionsType): Promise<InstallCallbackResultType>;

        /**
         * Returns information about the calling extension. Note: This function can be used without requesting the 'management'
         * permission in the manifest.
         */
        getSelf(): Promise<ExtensionInfo>;

        /**
         * Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission in the
         * manifest.
         *
         * @param options Optional.
         */
        uninstallSelf(options?: UninstallSelfOptionsType): Promise<void>;

        /**
         * Enables or disables the given add-on.
         *
         * @param id ID of the add-on to enable/disable.
         * @param enabled Whether to enable or disable the add-on.
         */
        setEnabled(id: string, enabled: boolean): Promise<void>;

        /**
         * Fired when an addon has been disabled.
         *
         * @param info
         */
        onDisabled: Events.Event<(info: ExtensionInfo) => void>;

        /**
         * Fired when an addon has been enabled.
         *
         * @param info
         */
        onEnabled: Events.Event<(info: ExtensionInfo) => void>;

        /**
         * Fired when an addon has been installed.
         *
         * @param info
         */
        onInstalled: Events.Event<(info: ExtensionInfo) => void>;

        /**
         * Fired when an addon has been uninstalled.
         *
         * @param info
         */
        onUninstalled: Events.Event<(info: ExtensionInfo) => void>;
    }
}
