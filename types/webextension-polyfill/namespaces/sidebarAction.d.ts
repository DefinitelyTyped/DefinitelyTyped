/**
 * Namespace: browser.sidebarAction
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use sidebar actions to add a sidebar to Firefox.
 * Permissions: "manifest:sidebar_action"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export namespace SidebarAction {
    /**
     * Pixel data for an image. Must be an ImageData object (for example, from a <code>canvas</code> element).
     */
    interface ImageDataType extends ImageData {
        [s: string]: unknown;
    }

    interface SetTitleDetailsType {
        /**
         * The string the sidebar action should display when moused over.
         */
        title: string | null;

        /**
         * Sets the sidebar title for the tab specified by tabId. Automatically resets when the tab is closed.
         * Optional.
         */
        tabId?: number;

        /**
         * Sets the sidebar title for the window specified by windowId.
         * Optional.
         */
        windowId?: number;
    }

    interface GetTitleDetailsType {
        /**
         * Specify the tab to get the title from. If no tab nor window is specified, the global title is returned.
         * Optional.
         */
        tabId?: number;

        /**
         * Specify the window to get the title from. If no tab nor window is specified, the global title is returned.
         * Optional.
         */
        windowId?: number;
    }

    interface SetIconDetailsType {
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set.
         * If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density.
         * If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>
         * scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported.
         * At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.
         * imageData = {'19': foo}'
         * Optional.
         */
        imageData?: ImageDataType | Record<string, ImageDataType>;

        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set.
         * If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density.
         * If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>
         * scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported.
         * At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         * Optional.
         */
        path?: string | SetIconDetailsTypePathC2Type;

        /**
         * Sets the sidebar icon for the tab specified by tabId. Automatically resets when the tab is closed.
         * Optional.
         */
        tabId?: number;

        /**
         * Sets the sidebar icon for the window specified by windowId.
         * Optional.
         */
        windowId?: number;
    }

    interface SetPanelDetailsType {
        /**
         * Sets the sidebar url for the tab specified by tabId. Automatically resets when the tab is closed.
         * Optional.
         */
        tabId?: number;

        /**
         * Sets the sidebar url for the window specified by windowId.
         * Optional.
         */
        windowId?: number;

        /**
         * The url to the html file to show in a sidebar.  If set to the empty string (''), no sidebar is shown.
         */
        panel: string | null;
    }

    interface GetPanelDetailsType {
        /**
         * Specify the tab to get the panel from. If no tab nor window is specified, the global panel is returned.
         * Optional.
         */
        tabId?: number;

        /**
         * Specify the window to get the panel from. If no tab nor window is specified, the global panel is returned.
         * Optional.
         */
        windowId?: number;
    }

    interface IsOpenDetailsType {
        /**
         * Specify the window to get the openness from.
         * Optional.
         */
        windowId?: number;
    }

    interface SetIconDetailsTypePathC2Type {
        [s: string]: unknown;
    }

    interface Static {
        /**
         * Sets the title of the sidebar action. This shows up in the tooltip.
         *
         * @param details
         */
        setTitle(details: SetTitleDetailsType): Promise<void>;

        /**
         * Gets the title of the sidebar action.
         *
         * @param details
         */
        getTitle(details: GetTitleDetailsType): Promise<string>;

        /**
         * Sets the icon for the sidebar action. The icon can be specified either as the path to an image file or as the pixel data
         * from a canvas element, or as dictionary of either one of those. Either the <strong>path</strong> or the <strong>
         * imageData</strong> property must be specified.
         *
         * @param details
         */
        setIcon(details: SetIconDetailsType): Promise<void>;

        /**
         * Sets the url to the html document to be opened in the sidebar when the user clicks on the sidebar action's icon.
         *
         * @param details
         */
        setPanel(details: SetPanelDetailsType): Promise<void>;

        /**
         * Gets the url to the html document set as the panel for this sidebar action.
         *
         * @param details
         */
        getPanel(details: GetPanelDetailsType): Promise<string>;

        /**
         * Opens the extension sidebar in the active window.
         */
        open(): Promise<void>;

        /**
         * Closes the extension sidebar in the active window if the sidebar belongs to the extension.
         */
        close(): Promise<void>;

        /**
         * Toggles the extension sidebar in the active window.
         */
        toggle(): void;

        /**
         * Checks whether the sidebar action is open.
         *
         * @param details
         */
        isOpen(details: IsOpenDetailsType): Promise<boolean>;
    }
}
