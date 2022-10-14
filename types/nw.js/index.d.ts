// Type definitions for nw.js 0.13
// Project: http://nwjs.io
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { EventEmitter } from 'events';

declare global {
    /**
     * Helpers class and interfaces defined here, to make `nw` module cleaner.
     */
    module NWJS_Helpers {
        /**
         * The clipboard object.
         */
        interface clip {
            /**
             * Write `data` of `type` to the clipboard.
             *
             * @param data {string} the data to write to the clipboard
             * @param type {string} (Optional) the type of the data. Support text, png, jpeg, html and rtf. By default, type is set to "text".
             * @param raw {boolean} (Optional) requiring raw image data. This option is only valid if type is png or jpeg. By default, raw is set to false.
             */
            set(data: string, type?: string, raw?: boolean): void;

            /**
             * Get the data of `type` from clipboard.
             *
             * @param type {string} (Optional) the type of the data. Support text, png, jpeg, html and rtf. By default, type is set to "text".
             * @param raw {boolean} (Optional) requiring raw image data. This option is only valid if type is png or jpeg.
             * @returns {string} the data retrieved from the clipboard.
             */
            get(type?: string, raw?: boolean): string;

            /**
             * Get an array contains list of available types of data in clipboard currenly.
             * You can use the returned list as a suggestion to get the right data from clipboard.
             *
             * @returns {string[]} List of available types of data in clipboard currenly.
             */
            readAvailableTypes(): string[];

            /**
             * Clear the clipboard.
             */
            clear(): void;
        }

        /**
         * Object that contains options to use while creation of nw.Menu. example: new nw.Menu(MenuOption)
         */
        interface MenuOption {
            /**
             * {string} (Optional) two types are accepted by this method: "menubar" or "contextmenu". The value is set to "contextmenu" by default.
             */
            type: string;
        }

        /**
         * Options to modify default `edit` and `window` MenuItems in Mac.
         */
        interface CreateMacBuiltinOption {
            /**
             * {Boolean} (Optional) do not populate the Edit menu
             */
            hideEdit?: boolean | undefined;

            /**
             * {Boolean} (Optional) do not populate the Window menu
             */
            hideWindow?: boolean | undefined;
        }

        /**
         * Options for MenuItem.
         */
        interface MenuItemOption {
            /**
             * {string} (Optional) Label for normal item or checkbox
             */
            label?: string | undefined;

            /**
             * {string} (Optional) Icon for normal item or checkbox
             */
            icon?: string | undefined;

            /**
             * {string} (Optional) Tooltip for normal item or checkbox
             */
            tooltip?: string | undefined;

            /**
             * {string} (Optional) The type of the item. Three types are accepted: normal, checkbox, separator
             */
            type?: string | 'normal' | 'checkbox' | 'separator' | undefined;

            /**
             * {Function} (Optional) The callback function when item is triggered by mouse click or keyboard shortcut
             */
            click?: Function | undefined;

            /**
             * {boolean} (Optional) Whether the item is enabled or disabled. It"s set to true by default.
             */
            enabled?: boolean | undefined;

            /**
             * {boolean} (Optional) Whether the checkbox is checked or not. It"s set to false by default.
             */
            checked?: boolean | undefined;

            /**
             * {nw.Menu} (Optional) A submenu
             */
            submenu?: nw.Menu | undefined;

            /**
             * {string} (Optional) The key of the shortcut
             */
            key?: string | undefined;

            /**
             * {string} (Optional) The modifiers of the shortcut
             */
            modifiers?: string | undefined;
        }

        /**
         * nw.Screen screen object
         */
        interface screen {
            /**
             * Unique id for a screen
             */
            id: number;

            /**
             * Physical screen resolution, can be negative, not necessarily start from 0,depending on screen arrangement
             */
            bounds: {
                x: number;
                y: number;
                width: number;
                height: number;
            };

            /**
             * Useable area within the screen bound
             */
            work_area: {
                x: number;
                y: number;
                width: number;
                height: number;
            };

            scaleFactor: number;

            isBuiltIn: boolean;

            rotation: number;

            touchSupport: number;
        }

        /**
         * This API behaves similar functions as Screen.chooseDesktopMedia. But it doesn"t have GUI.
         */
        interface DesktopCaptureMonitor extends EventEmitter {
            /**
             * Boolean of whether the DesktopCaptureMonitor is started.
             */
            started: boolean;

            /**
             * The DesktopCaptureMonitor will start monitoring the system and trigger the the events.
             *
             * @param should_include_screens {boolean} Whether should include screens
             * @param should_include_windows {boolean} Whether should include windows
             */
            start(should_include_screens: boolean, should_include_windows: boolean): void;

            /**
             * The DesktopCaptureMonitor will stop monitoring the system.
             */
            stop(): void;

            /**
             * Register and return a valid stream id passed into chromeMediaSourceId in getUserMedia constraints.
             *
             * @param id {string} valid stream id.
             */
            registerStream(id: string): void;

            on(event: string, listener: Function): this;

            /**
             * Emit when a new source was added.
             *
             * @param event {string} Event name
             * @param listener {Function(id?,name?,order?,type?,primary?)} The callback that handles the `added` event.
             * - (optional) id {string} Is the media id.
             * - (optional) name {string} Is the title of the window or screen.
             * - (optional) order {number} Is the z-order of the windows, if screens are selected they will appear first.
             * - (optional) type {string} Type of the stream: "screen", "window", "other" or "unknown".
             * - (optional) primary {boolean} This will be true if the source is the primary monitor. (Windows OS only)
             */
            on(
                event: 'added',
                listener: (id?: string, name?: string, order?: number, type?: string, primary?: boolean) => any,
            ): this;

            /**
             * Emit when a source was removed.
             *
             * @param event {string} Event name
             * @param listener {Function(order?)} The callback that handles the `remove` event.
             * - (optional) order {number} Is the order of the media source that is no longer capturable.
             */
            on(event: 'removed', listener: (order?: number) => any): this;

            /**
             * Emit when the Z-order of a source changed (this may change for windows as others are focused).
             *
             * @param event {string} Event name
             * @param listener {Function(id?,new_order?,old_order?)} The callback that handles the `orderchanged` event.
             * - (optional) id {string} Is the media id of the screen or window that has changed z-order.
             * - (optional) new_order {number} Is the new z-order.
             * - (optional) old_order {number} Is the old z-order.
             */
            on(event: 'orderchanged', listener: (id?: string, new_order?: number, old_order?: number) => any): this;

            /**
             * Emit when the name of the source has changed. This can happen when a window changes title.
             *
             * @param event {string} Event name
             * @param listener {Function(id?,new_order?,old_order?)} The callback that handles the `namechanged ` event.
             * - (optional) id {string} Is the media id of the screen or window that has a name changed.
             * - (optional) name {string} Is the new name of the screen or window.
             */
            on(event: 'namechanged', listener: (id?: string, name?: string) => any): this;

            /**
             * Emit when the thumbnail of a source changed.
             *
             * @param event {string} Event name
             * @param listener {Function(id?,new_order?,old_order?)} The callback that handles the `thumbnailchanged ` event.
             * - (optional) id {string} Is the media id of the screen or window that has an updated thumbnail.
             * - (optional) name {string} Is the base64 encoded png of the thumbnail.
             */
            on(event: 'thumbnailchanged', listener: (id?: string, thumbnail?: string) => any): this;
        }

        /**
         * Shortcut option is an object contains initial settings for the Shortcut.
         */
        interface ShortcutOption {
            /**
             * {Function} (Optional) A callback when the hotkey is triggered.
             */
            active: Function;

            /**
             * {Function} (Optional) A callback when failed to register the hotkey.
             *
             * @param msg {string} Failure message
             */
            failed: (msg?: string) => any;

            /**
             * {string} Key combinations of the shortcut, such as "ctrl+shift+a".
             */
            key: string;
        }

        /**
         *  Option for tray that contains initial settings for the Tray.
         */
        interface TrayOption {
            /**
             * {string} title
             */
            title?: string | undefined;

            /**
             * {string} tooltip
             */
            tooltip?: string | undefined;

            /**
             * {string} icon
             */
            icon?: string | undefined;

            /**
             * {string} alternate
             */
            alticon?: string | undefined;

            /**
             * {boolean} whether icons are templates
             */
            iconsAreTemplates?: boolean | undefined;

            /**
             * {Menu} popup menu
             */
            menu?: nw.Menu | undefined;
        }

        /**
         * Options for nw.Window.get().print().
         */
        interface PrintOption {
            /**
             * The device name of the printer
             */
            printer: string;

            /**
             * The path of the output PDF when printing to PDF
             */
            pdf_path: string;

            /**
             * Whether to enable header and footer
             */
            headerFooterEnabled: boolean;

            /**
             * Whether to use landscape or portrait
             */
            landscape: boolean;

            /**
             * The paper size spec
             * example: 'mediaSize':{'name': 'CUSTOM', 'width_microns': 279400, 'height_microns': 215900, 'custom_display_name':'Letter', 'is_default': true}
             */
            mediaSize: any;

            /**
             * Whether to print CSS backgrounds
             */
            shouldPrintBackgrounds: boolean;
        }

        /**
         * Config for nw.Window.get().capturePage().
         */
        interface CapturePageConfig {
            /**
             * (Optional) The image format used to generate the image. It supports two formats: "png" and "jpeg". If ignored, it’s "jpeg" by default.
             */
            format?: string | undefined;

            /**
             *  (Optional) It supports three types: "raw", "buffer" and "datauri". If ignored, it’s "datauri" by default.
             */
            datatype?: string | undefined;
        }

        /**
         * This includes multiple functions to manipulate the cookies.
         */
        interface Cookies {
            /**
             * Retrieves information about a single cookie.
             *
             * @param details {Objet} Details to identify the cookie being retrieved.
             * @param callback {function(cookie?)} The callback when cookie retrieved.
             * - (Optional) cookie {Cookie} Contains details about the cookie. This parameter is null if no such cookie was found.
             */
            get(details: CookiesGetDetails, callback: (cookie?: Cookie) => void): void;

            /**
             * Retrieves all cookies from a single cookie store that match the given information.
             *
             * @param details {Objet} Information to filter the cookies being retrieved.
             * @param callback {function(cookies?)} The callback when cookies retrieved.
             * - (Optional) cookies {Cookie[]} All the existing, unexpired cookies that match the given cookie info.
             */
            getAll(details: CookiesGetAllDetails, callback: (cookies?: Cookie[]) => void): void;

            /**
             * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
             *
             * @param details {Objet} Details about the cookie being set.
             * @param callback {function(cookie?)} The callback when cookie has been set.
             * - (Optional) cookie {Cookie} Contains details about the cookie that's been set. If setting failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set.
             */
            set(details: CookiesSetDetails, callback: (cookie?: Cookie) => void): void;

            /**
             * Deletes a cookie by name.
             *
             * @param details {Objet} Information to identify the cookie to remove.
             * @param callback {function(cookie?)} The callback when cookie has been set.
             * - (Optional) details {Objet} Contains details about the cookie that's been removed. If removal failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set.
             */
            remove(details: CookiesRemoveDetails, callback: (details?: CookiesRemovedDetails) => void): void;

            /**
             * Fired when a cookie is set or removed.
             */
            onChanged: {
                /**
                 * Add a new listener for onChanged event.
                 *
                 * @param callback {function(changeInfo?)} The callback when cookie has been changed.
                 * - (Optional) changeInfo {Objet} Contains details about the cookie that's been changed.
                 */
                addListener(callback: (changeInfo: CookiesOnChangedCallbackChangeInfo) => void): void;
            };
        }

        /**
         * Represents information about an HTTP cookie.
         */
        interface Cookie {
            /**
             * The name of the cookie.
             */
            name: string;

            /**
             * The value of the cookie.
             */
            value: string;

            /**
             * The domain of the cookie (e.g. "www.google.com", "example.com").
             */
            domain: string;

            /**
             * True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie).
             */
            hostOnly: boolean;

            /**
             * The path of the cookie.
             */
            path: string;

            /**
             * True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS).
             */
            secure: boolean;

            /**
             * True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts).
             */
            httpOnly: boolean;

            /**
             * The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests).
             */
            sameSite: string | 'no_restriction' | 'lax' | 'strict';

            /**
             * True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date.
             */
            session: boolean;

            /**
             * (Optional) The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
             */
            expirationDate?: number | undefined;

            /**
             * The ID of the cookie store containing this cookie.
             */
            storeId: string;
        }

        /**
         * Coockies.get() details argument object
         */
        interface CookiesGetDetails {
            /**
             * The URL with which the cookie to retrieve is associated.
             */
            url: string;

            /**
             * The name of the cookie to retrieve.
             */
            name: string;

            /**
             * The ID of the cookie store in which to look for the cookie.
             */
            storeId: string;
        }

        /**
         * Coockies.getAll() details argument object
         */
        interface CookiesGetAllDetails {
            /**
             * Restricts the retrieved cookies to those that would match the given URL.
             */
            url?: string | undefined;

            /**
             * Filters the cookies by name.
             */
            name?: string | undefined;

            /**
             * Restricts the retrieved cookies to those whose domains match or are subdomains of this one.
             */
            domain?: string | undefined;

            /**
             * Restricts the retrieved cookies to those whose path exactly matches this string.
             */
            path?: string | undefined;

            /**
             * Filters the cookies by their Secure property.
             */
            secure?: boolean | undefined;

            /**
             * Filters out session vs. persistent cookies.
             */
            session: boolean;

            /**
             * The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.
             */
            storeId?: string | undefined;
        }

        /**
         * Coockies.set() details argument object
         */
        interface CookiesSetDetails {
            /**
             * The request-URI to associate with the setting of the cookie.
             */
            url: string;

            /**
             * The name of the cookie. Empty by default if omitted.
             */
            name?: string | undefined;

            /**
             * The value of the cookie. Empty by default if omitted.
             */
            value?: string | undefined;

            /**
             * The domain of the cookie. If omitted, the cookie becomes a host-only cookie.
             */
            domain?: string | undefined;

            /**
             * The path of the cookie. Defaults to the path portion of the url parameter.
             */
            path?: string | undefined;

            /**
             * Whether the cookie should be marked as Secure. Defaults to false.
             */
            secure?: boolean | undefined;

            /**
             * Whether the cookie should be marked as HttpOnly. Defaults to false.
             */
            httpOnly?: boolean | undefined;

            /**
             * The cookie's same-site status: defaults to 'no_restriction'.
             */
            sameSite?: string | 'no_restriction' | 'lax' | 'strict' | undefined;

            /**
             * The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.
             */
            expirationDate?: number | undefined;

            /**
             * The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store.
             */
            storeId?: string | undefined;
        }

        /**
         * Coockies.remove() details argument object
         */
        interface CookiesRemoveDetails {
            /**
             * The URL associated with the cookie.
             */
            url: string;

            /**
             * The name of the cookie to remove.
             */
            name: string;

            /**
             * The ID of the cookie store to look in for the cookie.
             */
            storeId: string;
        }

        /**
         * Coockies.remove() callback details argument object
         */
        interface CookiesRemovedDetails {
            /**
             * The URL associated with the cookie that's been removed.
             */
            url: string;

            /**
             * The name of the cookie that's been removed.
             */
            name: string;

            /**
             * The ID of the cookie store from which the cookie was removed.
             */
            storeId: string;
        }

        /**
         * Coockies.onChanged.addListener() callback details argument object
         */
        interface CookiesOnChangedCallbackChangeInfo {
            /**
             * True if a cookie was removed.
             */
            removed: boolean;

            /**
             * Information about the cookie that was set or removed.
             */
            cookie: Cookie;

            /**
             * The underlying reason behind the cookie's change.
             */
            cause: string | 'evicted' | 'expired' | 'explicit' | 'expired_overwrite' | 'overwrite';
        }

        /**
         * nw.Window.get().on('new-win-policy') callback policy argument object
         */
        interface WinPolicy {
            /**
             * Ignore the request, navigation won’t happen.
             */
            ignore(): void;

            /**
             * Force the link to be opened in the same frame
             */
            forceCurrent(): void;

            /**
             * Force the link to be a downloadable, or open by external program
             */
            forceDownload(): void;

            /**
             * Force the link to be opened in a new window
             */
            forceNewWindow(): void;

            /**
             * Force the link to be opened in a new popup window
             */
            forceNewPopup(): void;

            /**
             * Control the options for the new popup window.
             *
             *@param m {Object} The object is in the same format as the Window subfields in manifest format.
             */
            setNewWindowManifest(m: WindowOption): void;
        }

        /**
         * nw.Window Option that is in the same format as the Window subfields in manifest format.
         */
        interface WindowOption {
            /**
             * The id used to identify the window.
             */
            id?: string | undefined;

            /**
             * The default title of window created by NW.js
             */
            title?: string | undefined;

            /**
             * The initial width of the main window.
             */
            width?: number | undefined;

            /**
             * The initial height of the main window.
             */
            height?: number | undefined;

            /**
             * Path to window’s icon
             */
            icon?: string | undefined;

            /**
             * Controls where window will be put, be `null` or `center` or `mouse`
             */
            position?: string | undefined;

            /**
             * Minimum width of window
             */
            min_width?: number | undefined;

            /**
             * Minimum height of window
             */
            min_height?: number | undefined;

            /**
             * Maximum width of window
             */
            max_width?: number | undefined;

            /**
             * Maximum height of window
             */
            max_height?: number | undefined;

            /**
             * Show as desktop background window under X11 environment
             */
            as_desktop?: boolean | undefined;

            /**
             * Whether window is resizable
             */
            resizable?: boolean | undefined;

            /**
             * Whether the window should always stay on top of other windows.
             */
            always_on_top?: boolean | undefined;

            /**
             * Whether the window should be visible on all workspaces simultaneously (on platforms that support multiple workspaces, currently Mac OS X and Linux).
             */
            visible_on_all_workspaces?: boolean | undefined;

            /**
             * Whether window is fullscreen
             */
            fullscreen?: boolean | undefined;

            /**
             * Whether the window is shown in taskbar or dock. The default is true.
             */
            show_in_taskbar?: boolean | undefined;

            /**
             * Specify it to false to make the window frameless
             */
            frame?: boolean | undefined;

            /**
             * Specify it to false if you want your app to be hidden on startup
             */
            show?: boolean | undefined;

            /**
             * Whether to use Kiosk mode.
             */
            kiosk?: boolean | undefined;

            /**
             * Whether to turn on transparent window mode.
             */
            transparent?: boolean | undefined;
        }

        interface WindowOpenOption extends WindowOption {
            /**
             * (Optional) Whether to open a new window in a separate render process.
             */
            new_instance?: boolean | undefined;

            /**
             * (Optional) The script to be injected before document loaded.
             */
            inject_js_start?: string | undefined;

            /**
             * (Optional) The script to be injected before document unloaded.
             */
            inject_js_end?: string | undefined;

            /**
             * (Optional) The id used to identify the window.
             */
            id?: string | undefined;
        }

        /**
         * nw.Window.get().on('navigation') callback policy argument object
         */
        interface WinNavigationPolicy {
            /**
             * Ignore the request, navigation won’t happen.
             */
            ignore(): void;
        }

        interface win extends EventEmitter {
            /**
             * Get the corresponding DOM window object of the native window.
             */
            window: Window;

            /**
             * Get or set left offset from window to screen.
             */
            x: number;

            /**
             * Get or set top offset from window to screen.
             */
            y: number;

            /**
             * Get or set window's width.
             */
            width: number;

            /**
             * Get or set window's height.
             */
            height: number;

            /**
             * Get or set window's title.
             */
            title: string;

            /**
             * Get or set window's menubar.
             */
            menu: nw.Menu;

            /**
             * Get whether we're in fullscreen mode.
             */
            isFullscreen: boolean;

            /**
             * Get whether transparency is turned on
             */
            isTransparent: boolean;

            /**
             * Get whether we're in kiosk mode.
             */
            isKioskMode: boolean;

            /**
             * Get or set the page zoom.
             */
            zoomLevel: number;

            /**
             * This includes multiple functions to manipulate the cookies.
             */
            cookies: Cookies;

            /**
             * Moves a window's left and top edge to the specified coordinates.
             *
             * @param x {Integer} Offset to the left of the screen
             * @param y {Integer} Offset to the top of the screen
             */
            moveTo(x: number, y: number): void;

            /**
             * Moves a window a specified number of pixels relative to its current coordinates.
             *
             * @param x {Integer} Horizontal offset
             * @param y {Integer} Vertical offset
             */
            moveBy(x: number, y: number): void;

            /**
             * Resizes a window to the specified width and height.
             *
             * @param width {Integer} The width of the window
             * @param height {Integer} The height of the window
             */
            resizeTo(width: number, height: number): void;

            /**
             * Resizes a window by the specified amount.
             *
             * @param width {Integer} The offset width of the window
             * @param height {Integer} The offset height of the window
             */
            resizeBy(width: number, height: number): void;

            /**
             * Focus on the window.
             */
            focus(): void;

            /**
             * Move focus away.
             */
            blur(): void;

            /**
             * Show the window if it's not shown.
             *
             * @param is_show {boolean} (Optional) Specify whether the window should be shown or hidden. It's set to true by default.
             */
            show(is_show?: boolean): void;

            /**
             * Hide the window.
             */
            hide(): void;

            /**
             * Close current window.
             *
             * @param force {boolean} (Optional) Specify whether to close the window forcely and bypass close event.
             */
            close(force?: boolean): void;

            /**
             * Reloads the current window.
             */
            reload(): void;

            /**
             * Reloads the current page by starting a new renderer process from scratch.
             */
            reloadDev(): void;

            /**
             * Like reload(), but don't use caches (aka 'shift-reload').
             */
            reloadIgnoringCache(): void;

            /**
             * Maximize the window on GTK and Windows, and zoom the window on Mac OS X.
             */
            maximize(): void;

            /**
             * Minimize the window to task bar on Windows, iconify the window on GTK, and miniaturize the window on Mac OS X.
             */
            minimize(): void;

            /**
             * Restore window to previous state after the window is minimized.
             */
            restore(): void;

            /**
             * Make the window fullscreen.
             */
            enterFullscreen(): void;

            /**
             * Leave the fullscreen mode.
             */
            leaveFullscreen(): void;

            /**
             * Toggle the fullscreen mode.
             */
            toggleFullscreen(): void;

            /**
             * Enter the Kiosk mode.
             */
            enterKioskMode(): void;

            /**
             * Leave the Kiosk mode.
             */
            leaveKioskMode(): void;

            /**
             * Toggle the kiosk mode.
             */
            toggleKioskMode(): void;

            /**
             * Open the devtools to inspect the window.
             *
             * @param iframe {Integer} (Optional) the id or the element of the <iframe> to be jailed on. By default, the DevTools is shown for entire window.
             * @param callback {function(dev_win?)} callback with the native window of the DevTools window.
             * - (optional) dev_win {window} Window object that you can use any properties and methods of Window except the events
             */
            showDevTools(iframe?: string | HTMLIFrameElement, callback?: (dev_win?: Window) => void): void;

            /**
             * Close the devtools window.
             */
            closeDevTools(): void;

            /**
             * Enumerate the printers in the system.
             *
             * @param callback {function(dev_win?)} callback with the native window of the DevTools window.
             * - (optional) printers {any[]} An array of json objects for the printer information.
             */
            getPrinters(callback: (printers?: any[]) => void): void;

            /**
             * Query the status of devtools window.
             */
            isDevToolsOpen(): boolean;

            /**
             * Print the web contents in the window without the need for user’s interaction.
             *
             * @param options {any | PrintOption} Specify whether to close the window forcely and bypass close event.
             */
            print(options: any | PrintOption): void;

            /**
             * Set window's maximum size.
             *
             * @param width {Integer} The maximum width of the window
             * @param height {Integer} The maximum height of the window
             */
            setMaximumSize(width: number, height: number): void;

            /**
             * Set window's minimum size.
             *
             * @param width {Integer} The minimum width of the window
             * @param height {Integer} The minimum height of the window
             */
            setMinimumSize(width: number, height: number): void;

            /**
             * Set whether window is resizable.
             *
             * @param resizable {boolean} Whether the window can be resized
             */
            setResizable(resizable: boolean): void;

            /**
             * Sets the widget to be on top of all other windows in the window system.
             *
             * @param top {boolean} Whether the window should always be on top
             */
            setAlwaysOnTop(top: boolean): void;

            /**
             * For platforms that support multiple workspaces (currently Mac OS X and Linux), this allows NW.js windows to be visible on all workspaces simultaneously.
             *
             * @param visible {boolean} Whether the window should be visible on all workspaces
             */
            setVisibleOnAllWorkspaces(visible: boolean): void;

            /**
             * Returns a a boolean indicating if the platform (currently Mac OS X and Linux) support Window API method setVisibleOnAllWorkspace(Boolean).
             */
            canSetVisibleOnAllWorkspaces(): boolean;

            /**
             * Move window to specified position.
             *
             * @param position {string} The position of the window. There are three valid positions: null or center or mouse
             */
            setPosition(position: string): void;

            /**
             * Control whether to show window in taskbar or dock.
             *
             * @param show {boolean} Whether show in task bar
             */
            setShowInTaskbar(show: boolean): void;

            /**
             * Request the user’s attension by making the window flashes in the task bar.
             *
             * @param attension {boolean | number} If a Boolean, it indicates to request or cancel user’s attension. If an Integer, it indicates the number of times the window flashes.
             */
            requestAttention(attension: boolean | number): void;

            /**
             * Captures the visible area of the window.
             *
             * @param callback {string} The callback when finished capturing the window
             * - (optional) arg {base64string|Buffer} Captured page data.
             * @param config {string|CapturePageConfig} (Optional) Conig how captured page returned.
             */
            capturePage(callback: (arg: string | Object) => void, config?: string | CapturePageConfig): void;

            /**
             * Show window progress bar.
             *
             * @param progress {number} valid values within [0, 1]. Setting to negative value (<0) removes the progress bar.
             */
            setProgressBar(progress: number): void;

            /**
             * Set the badge label on the window icon in taskbar or dock.
             *
             * @param label {string} Badge label.
             */
            setBadgeLabel(label: string): void;

            /**
             * Execute a piece of JavaScript in the frame.
             *
             * @param frame {HTMLIFrameElement} The frame to execute in. If iframe is null, it assumes in current window / frame.
             * @param script {string} The source code of the script to be executed
             */
            eval(frame: HTMLIFrameElement, script: string): void;

            /**
             * Load and execute the compiled snapshot in the frame.
             *
             * @param frame {HTMLIFrameElement} The frame to execute in. If iframe is null, it assumes in current window / frame.
             * @param path {string} the path of the snapshot file generated by nwjc
             */
            evalNWBin(frame: HTMLIFrameElement, path: string): void;

            on(event: string, listener: Function): this;

            /**
             * The close event is a special event that will affect the result of the Window.close() function.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `close` event.
             * - (optional) byCommandQ {string} Whether it’s being closed by ⌘+Q.
             */
            on(event: 'close', listener: (byCommandQ?: string | any) => any): this;

            /**
             * The closed event is emitted after corresponding window is closed.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `closed` event.
             */
            on(event: 'closed', listener: () => any): this;

            /**
             * Emitted when the window starts to reload, normally you cannot catch this event because usually it’s emitted before you actually setup the callback.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `loading` event.
             */
            on(event: 'loading', listener: () => any): this;

            /**
             * Emitted when the window is fully loaded, this event behaves the same with window.onload, but doesn’t rely on the DOM.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `loaded` event.
             */
            on(event: 'loaded', listener: () => any): this;

            /**
             * Emitted when the document object in this window or a child iframe is available, after all files are loaded, but before DOM is constructed or any script is run.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `document-start` event.
             * - (optional) frame {HTMLIFrameElement|any} Is the iframe object, or null if the event is for the window..
             */
            on(event: 'document-start', listener: (frame: HTMLIFrameElement | any) => any): this;

            /**
             * Emitted when the document object in this window or a child iframe is unloaded, but before the onunload event is emitted.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `document-end` event.
             * - (optional) frame {HTMLIFrameElement|any} Is the iframe object, or null if the event is for the window..
             */
            on(event: 'document-end', listener: (frame: HTMLIFrameElement | any) => any): this;

            /**
             * Emitted when window gets focus.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `focus` event.
             */
            on(event: 'focus', listener: () => any): this;

            /**
             * Emitted when window loses focus.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `blur` event.
             */
            on(event: 'blur', listener: () => any): this;

            /**
             * Emitted when window is minimized.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `minimize` event.
             */
            on(event: 'minimize', listener: () => any): this;

            /**
             * Emitted when window is restored from minimize, maximize and fullscreen state.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `restore` event.
             */
            on(event: 'restore', listener: () => any): this;

            /**
             * Emitted when window is maximized.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `maximize` event.
             */
            on(event: 'maximize', listener: () => any): this;

            /**
             * Emitted after window is moved.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `move` event.
             * - (optional) x {Integer} The new location of the left corner of the window.
             * - (optional) y {Integer} The new location of the top corner of the window.
             */
            on(event: 'move', listener: (x?: number, y?: number) => any): this;

            /**
             * Emitted after window is resized.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `resize` event.
             * - (optional) width {Integer} The new width of the window.
             * - (optional) height {Integer} The new height of the window.
             */
            on(event: 'resize', listener: (width?: number, height?: number) => any): this;

            /**
             * Emitted when window enters fullscreen state.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `enter-fullscreen` event.
             */
            on(event: 'enter-fullscreen', listener: () => any): this;

            /**
             * Emitted when window zooming changed.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `zoom` event.
             * - (optional) zoom {Integer} Indicating the new zoom level
             */
            on(event: 'zoom', listener: (zoom?: number) => any): this;

            /**
             * Emitted after Devtools is closed.
             *
             * @param event {string} Event name
             * @param listener {function} The callback that handles the `devtools-closed` event.
             */
            on(event: 'devtools-closed', listener: () => any): this;

            /**
             * Emitted when a new window is requested from this window or a child iframe.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `new-win-policy` event.
             * - (optional) frame {HTMLIFrameElement} Is the object of the child iframe where the request is from, or null if it’s from the top window.
             * - (optional) url {string} Is the address of the requested link
             * - (optional) policy {Object} Is an object contain window policy.
             */
            on(
                event: 'new-win-policy',
                listener: (frame?: HTMLIFrameElement | any, url?: string, policy?: WinPolicy) => any,
            ): this;

            /**
             * Emitted when navigating to another page.
             *
             * @param event {string} Event name
             * @param listener {function(byCommandQ?)} The callback that handles the `navigation` event.
             * - (optional) frame {HTMLIFrameElement} Is the object of the child iframe where the request is from, or null if it’s from the top window.
             * - (optional) url {string} Is the address of the requested link
             * - (optional) policy {Object} Is an object contain window policy.
             */
            on(
                event: 'navigation',
                listener: (frame?: HTMLIFrameElement | any, url?: string, policy?: WinNavigationPolicy) => any,
            ): this;
        }
    }

    namespace nw {
        /* Reference: http://docs.nwjs.io/en/latest/References/App/ */
        /**
         * Application General Functionality And Properties.
         */
        export interface App {
            /**
             * Get the filtered command line arguments when starting the app.
             */
            argv: string[];

            /**
             * Get all the command line arguments when starting the app.
             */
            fullArgv: string[];

            /**
             * Get a list of patterns of filtered command line arguments used by `App.argv`.
             */
            filteredArgv: Object[];

            /**
             * Get the application's data path in user's directory.
             */
            dataPath: string;

            /**
             * Get the json object of the manifest file.
             */
            manifest: any;

            /**
             * Clear the HTTP cache in memory and the one on disk. This method call is synchronized.
             */
            clearCache(): void;

            /**
             * Send the `close` event to all windows of current app.
             */
            closeAllWindows(): void;

            /**
             * Crash the browser process to test the Crash dump feature.
             */
            crashBrowser(): void;

            /**
             * Crash the renderer process to test the Crash dump feature.
             */
            crashRenderer(): void;

            /**
             * Query the proxy to be used for loading `url` in DOM.
             *
             * @param url {string} the URL to query for proxy
             * @returns {string} Proxy config that is in the same format used in PAC (e.g. "DIRECT", "PROXY localhost:8080").
             */
            getProxyForURL(url: string): string;

            /**
             * Set the proxy config which the web engine will be used to request network resources.
             *
             * @param config {string} Proxy rules
             */
            setProxyConfig(config: string): void;

            /**
             * Quit current app.
             */
            quit(): void;

            /**
             * Add an entry to the whitelist used for controlling cross-origin access.
             *
             * @param sourceOrigin {string} The source origin. e.g. https://github.com/
             * @param destinationProtocol {string} The destination protocol where the sourceOrigin can access to. e.g. app
             * @param destinationHost {string} The destination host where the sourceOrigin can access to. e.g. myapp
             * @param allowDestinationSubdomains {Boolean} If set to true, the sourceOrigin is allowed to access subdomains of
             */
            addOriginAccessWhitelistEntry(
                sourceOrigin: string,
                destinationProtocol: string,
                destinationHost: string,
                allowDestinationSubdomains: boolean,
            ): void;

            /**
             * Remove an entry from the whitelist used for controlling cross-origin access.
             *
             * @param sourceOrigin {string} The source origin. e.g. https://github.com/
             * @param destinationProtocol {string} The destination protocol where the sourceOrigin can access to. e.g. app
             * @param destinationHost {string} The destination host where the sourceOrigin can access to. e.g. myapp
             * @param allowDestinationSubdomains {Boolean} If set to true, the sourceOrigin is allowed to access subdomains of
             */
            removeOriginAccessWhitelistEntry(
                sourceOrigin: string,
                destinationProtocol: string,
                destinationHost: string,
                allowDestinationSubdomains: boolean,
            ): void;

            /**
             * Register a global keyboard shortcut (also known as system-wide hot key) to the system.
             *
             * @param shortcut {Shortcut} the Shortcut object to register.
             */
            registerGlobalHotKey(shortcut: Shortcut): void;

            /**
             * Unregisters a global keyboard shortcut.
             *
             * @param shortcut {Shortcut} the Shortcut object to register.
             */
            unregisterGlobalHotKey(shortcut: Shortcut): void;

            on(event: string, listener: Function): this;

            /**
             * Emitted when users opened a file with your app.
             *
             * @param event {string} Event name
             * @param listener {Function(args?)} The callback that handles the `open` event.
             * - (optional) args {string} the full command line of the program.
             */
            on(event: 'open', listener: (args?: string) => any): this;

            /**
             * This event is sent when the user clicks the dock icon for an already running application. This is a Mac specific feature.
             *
             * @param event {string} Event name
             * @param listener {Function} The callback that handles the `reopen` event.
             */
            on(event: 'reopen', listener: () => any): this;
        }

        /* Clipboard: http://docs.nwjs.io/en/latest/References/Clipboard/ */
        /**
         * `Clipboard` is an abstraction of clipboard for Windows, Linux and Mac.
         */
        export interface Clipboard {
            /**
             * Get the clipboard object.
             *
             * @returns {Clipboard} the clipboard object.
             */
            get(): NWJS_Helpers.clip;
        }

        /* Menu: http://docs.nwjs.io/en/latest/References/Menu/ */
        /**
         * `Menu` represents a menubar or a context menu.
         */
        class Menu {
            /**
             * Create a Menu object.
             *
             * @param option {Object} (Optional) Option to customize returned menu object.
             */
            constructor(option?: NWJS_Helpers.MenuOption);

            /**
             * Get an array that contains all items of a menu. Each item is an instance of MenuItem.
             */
            items: MenuItem[];

            /**
             * Append `item` to the tail of the menu.
             *
             * @param item {MenuItem} the item to be appended to the tail of the menu
             */
            append(item: MenuItem): void;

            /**
             * Insert the `item` at `i`th position of the menu. The index is started from 0.
             *
             * @param item {MenuItem} the item to be inserted into the menu
             * @param i {Integer} the index in the menu list to insert the the item
             */
            insert(item: MenuItem, i: number): void;

            /**
             * Remove `item` from the menu.
             *
             * @param item {MenuItem} the item to be removed
             */
            remove(item: MenuItem): void;

            /**
             * Remove the `i`th item form the menu.
             *
             * @param i {Integer} the index of the item to be removed from the menu
             */
            removeAt(i: number): void;

            /**
             * Popup the context menu at the anchor in (`x`, `y`) in current window.
             *
             * @param x {Integer} the x position of the anchor
             * @param y {Integer} the y position of the anchor
             */
            popup(x: number, y: number): void;

            /**
             * Creates the builtin menus (App, Edit and Window) within the menubar on Mac.
             *
             * @param appname {string} The application name
             * @param options {Object} (Optional) Options to modify default `edit` and `window` MenuItems in Mac
             */
            createMacBuiltin(appname: string, options?: NWJS_Helpers.CreateMacBuiltinOption): void;
        }

        /* MenuItem: http://docs.nwjs.io/en/latest/References/MenuItem/ */
        /**
         * `MenuItem` represents an item in a menu.
         */
        class MenuItem extends EventEmitter {
            /**
             * Create a new MenuItem.
             *
             * @param option {Object} Customize how MenuItem render and behave.
             */
            constructor(option: NWJS_Helpers.MenuItemOption);

            /**
             * Get the `type` of a `MenuItem`
             */
            type: string;

            /**
             * Get or set the `label` of a `MenuItem`
             */
            label: string;

            /**
             * Get or set the `icon` of a `MenuItem`
             */
            icon: string;

            /**
             * Get or set whether `icon` image is treated as "template" (`true` by default).
             */
            iconIsTemplate: boolean;

            /**
             * Get or set the `tooltip` of a `MenuItem`
             */
            tooltip: boolean;

            /**
             * Get or set whether the `MenuItem` is `checked`
             */
            checked: boolean;

            /**
             * Get or set whether the `MenuItem` is `enabled`
             */
            enabled: boolean;

            /**
             * Get or set the `submenu` of a `MenuItem`, the `submenu` must be a `Menu` object.
             */
            submenu: Menu;

            /**
             * Get or set the click `callback` of a `MenuItem`
             */
            click: Function;

            /**
             * A single character string to specify the shortcut key for the menu item.
             */
            key: string;

            /**
             * A string to specify the modifier keys for the shortcut of the menu item.
             */
            modifiers: string;

            on(event: string, listener: Function): this;

            /**
             * Emitted when user activates the menu item.
             *
             * @param event {string} Event name
             * @param listener {Function} The callback that handles the `click` event.
             */
            on(event: 'click', listener: () => any): this;
        }

        /* Screen: http://docs.nwjs.io/en/latest/References/Screen/ */
        /**
         * Screen is an instance of EventEmitter object, and you"re able to use Screen.on(...) to respond to native screen"s events.
         * Screen is a singleton object, need to be initiated once by calling nw.Screen.Init().
         */
        interface Screen extends EventEmitter {
            /**
             * Init the Screen singleton object, you only need to call this once.
             */
            Init(): void;

            /**
             * Get the array of screen (number of screen connected to the computer)
             */
            screens: NWJS_Helpers.screen[];

            /**
             *
             * @param sources {string[]} Array of source types.
             * @param callback {Function} callback function with chosed streamId.
             * - (optional) streamId {string}  streamId will be false if failed to execute or existing session is alive.
             */
            chooseDesktopMedia(sources: string[], callback: (streamId?: string | boolean) => void): void;

            /**
             * Use this API to monitor the changes of screens and windows on desktop. This is an instance of EventEmitter.
             */
            DesktopCaptureMonitor: NWJS_Helpers.DesktopCaptureMonitor;

            on(event: string, listener: Function): this;

            /**
             * Emitted when the screen resolution, arrangement is changed.
             *
             * @param event {string} Event name
             * @param listener {Function(screen?)} The callback that handles the `displayBoundsChanged` event.
             * - (optional) screen {screen} screen object
             */
            on(event: 'displayBoundsChanged', listener: (screen: NWJS_Helpers.screen) => any): this;

            /**
             * Emitted when a new screen added.
             *
             * @param event {string} Event name
             * @param listener {Function(screen?)} The callback that handles the `displayAdded` event.
             * - (optional) screen {screen} screen object
             */
            on(event: 'displayAdded ', listener: (screen: NWJS_Helpers.screen) => any): this;

            /**
             * Emitted when existing screen removed.
             *
             * @param event {string} Event name
             * @param listener {Function(screen?)} The callback that handles the `displayRemoved` event.
             * - (optional) screen {screen} screen object
             */
            on(event: 'displayRemoved ', listener: (screen: NWJS_Helpers.screen) => any): this;
        }

        /* Shell: http://docs.nwjs.io/en/latest/References/Shell/ */
        /**
         * `Shell` is a collection of APIs that do desktop related jobs.
         */
        interface Shell {
            /**
             * Open the given external URI in the desktop"s default manner.
             *
             * @param uri {string} A URL to open in system default manner.
             */
            openExternal(uri: string): void;

            /**
             * Open the given file_path in the desktop"s default manner.
             *
             * @param file_path {string} path to a local file
             */
            openItem(file_path: string): void;

            /**
             * Show the given file_path in the parent folder with file manager. If possible, select the file.
             *
             * @param file_path {string} path to a local file
             */
            showItemInFolder(file_path: string): void;
        }

        /* Shortcut: http://docs.nwjs.io/en/latest/References/Shortcut/ */
        /**
         * `Shortcut` represents a global keyboard shortcut, also known as system-wide hotkey.
         */
        export class Shortcut extends EventEmitter {
            /**
             * Create new Shortcut.
             *
             * @param option {Object} Shortcut option is an object contains initial settings for the Shortcut.
             */
            constructor(option: NWJS_Helpers.ShortcutOption);

            /**
             * Get or set the active callback of a Shortcut. It will be called when user presses the shortcut.
             */
            active: Function;

            /**
             * Get or set the failed callback of a Shortcut. It will be called when application passes an invalid key , or failed to register the key.
             *
             * @param msg {string} Failure message
             */
            failed: (msg?: string) => any;

            /**
             * Get the key of a Shortcut.
             */
            key: string;

            on(event: string, listener: Function): this;

            /**
             * Get or set the active callback of a Shortcut. It will be called when user presses the shortcut.
             *
             * @param event {string} Event name
             * @param listener {Function} The callback that handles the `active` event.
             */
            on(event: 'active', listener: () => any): this;

            /**
             * Get or set the failed callback of a Shortcut. It will be called when application passes an invalid key, or failed to register the key.
             *
             * @param event {string} Event name
             * @param listener {Function(msg?)} The callback that handles the `failed` event.
             * - (optional) msg {string} Failure message
             */
            on(event: 'failed', listener: (msg?: string) => any): this;
        }

        /* Tray: http://docs.nwjs.io/en/latest/References/Tray/ */
        /**
         * `Tray` is an abstraction of different controls on different platforms, usually it"s a small icon shown on the OS"s notification area. On Mac OS X it"s called Status Item, on GTK it"s Status Icon, and on Windows it"s System Tray Icon.
         */
        export class Tray extends EventEmitter {
            /**
             * Create a new Tray.
             * @param option {Object} Contains initial settings for the Tray.
             */
            constructor(option: NWJS_Helpers.TrayOption);

            /**
             * Get or set the title of the tray.
             */
            title: string;

            /**
             * Get or set the tooltip of the tray.
             */
            tooltip: string;

            /**
             * Get or set the icon of the tray.
             */
            icon: string;

            /**
             * Get or set the alternate (active) tray icon. (Mac)
             */
            alticon: string;

            /**
             * Get or set whether icon and alticon images are treated as "templates" (true by default). (Mac)
             */
            iconsAreTemplates: boolean;

            /**
             * Get or set the menu of the tray.
             */
            menu: Menu;

            /**
             * Remove the tray.
             */
            remove(): void;

            on(event: string, listener: Function): this;

            /**
             * Emitted when user clicks the menu item with left mouse button.
             *
             * @param event {string} Event name
             * @param listener {Function} The callback that handles the `click` event.
             */
            on(event: 'click ', listener: () => any): this;
        }

        /* Window: http://docs.nwjs.io/en/latest/References/Window/ */
        /**
         * Window is a wrapper of the DOM's window object. It has extended operations and can receive various window events.
         */
        interface Window extends EventEmitter {
            /**
             * Get the native Window Object.
             *
             * @param event {DOM Window} (Optional) Is the DOM window
             */
            get(window_object?: Object): NWJS_Helpers.win;

            /**
             * Get all windows.
             *
             * @param callback {(windows: NWJS_Helpers.win[]) => void} A callback function whose parameter is an array of nw.Window objects
             */
            getAll(callback: (windows: NWJS_Helpers.win[]) => void): void;

            /**
             * Open a new window and load url in it.
             *
             * @param url {string} URL to be loaded in the opened window
             * @param option {object} (Optional) New window open options like window subfields in manifest format plus some more options
             * @param callback {string} (Optional) Callback when with the opened native Window object
             * - (Optional) new_win {object} New opened window object.
             */
            open(
                url: string,
                option?: NWJS_Helpers.WindowOpenOption,
                callback?: (new_win?: NWJS_Helpers.win) => void,
            ): void;
        }

        export function require(id: string): any;

        export var App: App;
        export var Clipboard: Clipboard;
        export var Screen: Screen;
        export var Shell: Shell;
        export var Window: Window;
    }
}

declare module 'nw.gui' {
    export class Menu extends nw.Menu {}
    export class MenuItem extends nw.MenuItem {}
    export class Shortcut extends nw.Shortcut {}
    export class Tray extends nw.Tray {}
    export var App: nw.App;
    export var Clipboard: nw.Clipboard;
    export var Screen: nw.Screen;
    export var Shell: nw.Shell;
    export var Window: nw.Window;
}
