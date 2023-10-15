//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.runtime
 *
 * Use the <code>browser.runtime</code> API to retrieve the background page, return details about the manifest,
 * and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the
 * relative path of URLs to fully-qualified URLs.
 *
 * Comments found in source JSON schema files:
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";
import { Manifest } from "./manifest";
import { Tabs } from "./tabs";

export namespace Runtime {
    /**
     * An object which allows two way communication with other pages.
     */
    interface Port {
        name: string;

        disconnect(): void;

        /**
         * @param port
         */
        onDisconnect: Events.Event<(port: Port) => void>;

        /**
         * @param message
         * @param port
         */
        onMessage: Events.Event<(message: any, port: Port) => void>;

        /**
         * Send a message to the other end. This takes one argument, which is a JSON object representing the message to send.
         * It will be delivered to any script listening to the port's onMessage event, or to the native application if this port
         * is connected to a native application.
         *
         * @param message
         */
        postMessage(message: any): void;

        /**
         * This property will <b>only</b> be present on ports passed to onConnect/onConnectExternal listeners.
         * Optional.
         */
        sender?: MessageSender;

        /**
         * If the port was disconnected due to an error, this will be set to an object with a string property message,
         * giving you more information about the error. See onDisconnect.
         * Optional.
         */
        error?: PortErrorType;
    }

    /**
     * An object containing information about the script context that sent a message or request.
     */
    interface MessageSender {
        /**
         * The $(ref:tabs.Tab) which opened the connection, if any. This property will <strong>only</strong>
         * be present when the connection was opened from a tab (including content scripts), and <strong>only</strong>
         * if the receiver is an extension, not an app.
         * Optional.
         */
        tab?: Tabs.Tab;

        /**
         * The $(topic:frame_ids)[frame] that opened the connection. 0 for top-level frames, positive for child frames.
         * This will only be set when <code>tab</code> is set.
         * Optional.
         */
        frameId?: number;

        /**
         * The ID of the extension or app that opened the connection, if any.
         * Optional.
         */
        id?: string;

        /**
         * The URL of the page or frame that opened the connection. If the sender is in an iframe,
         * it will be iframe's URL not the URL of the page which hosts it.
         * Optional.
         */
        url?: string;
    }

    /**
     * The operating system the browser is running on.
     */
    type PlatformOs = "mac" | "win" | "android" | "cros" | "linux" | "openbsd";

    /**
     * The machine's processor architecture.
     */
    type PlatformArch = "aarch64" | "arm" | "ppc64" | "s390x" | "sparc64" | "x86-32" | "x86-64" | "noarch";

    /**
     * An object containing information about the current platform.
     */
    interface PlatformInfo {
        /**
         * The operating system the browser is running on.
         */
        os: PlatformOs;

        /**
         * The machine's processor architecture.
         */
        arch: PlatformArch;
    }

    /**
     * An object containing information about the current browser.
     */
    interface BrowserInfo {
        /**
         * The name of the browser, for example 'Firefox'.
         */
        name: string;

        /**
         * The name of the browser vendor, for example 'Mozilla'.
         */
        vendor: string;

        /**
         * The browser's version, for example '42.0.0' or '0.8.1pre'.
         */
        version: string;

        /**
         * The browser's build ID/date, for example '20160101'.
         */
        buildID: string;
    }

    /**
     * Result of the update check.
     */
    type RequestUpdateCheckStatus = "throttled" | "no_update" | "update_available";

    /**
     * The reason that this event is being dispatched.
     */
    type OnInstalledReason = "install" | "update" | "browser_update";

    /**
     * The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the application
     * is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS is updated to a
     * newer version. 'periodic' is used when the system runs for more than the permitted uptime set in the enterprise policy.
     */
    type OnRestartRequiredReason = "app_update" | "os_update" | "periodic";

    /**
     * If an update is available, this contains more information about the available update.
     */
    interface RequestUpdateCheckCallbackDetailsType {
        /**
         * The version of the available update.
         */
        version: string;
    }

    interface ConnectConnectInfoType {
        /**
         * Will be passed into onConnect for processes that are listening for the connection event.
         * Optional.
         */
        name?: string;

        /**
         * Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the connection
         * event.
         * Optional.
         */
        includeTlsChannelId?: boolean;
    }

    interface SendMessageOptionsType {
        [s: string]: unknown;
    }

    interface OnInstalledDetailsType {
        /**
         * The reason that this event is being dispatched.
         */
        reason: OnInstalledReason;

        /**
         * Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is
         * 'update'.
         * Optional.
         */
        previousVersion?: string;

        /**
         * Indicates whether the addon is installed as a temporary extension.
         */
        temporary: boolean;
    }

    /**
     * The manifest details of the available update.
     */
    interface OnUpdateAvailableDetailsType {
        /**
         * The version number of the available update.
         */
        version: string;
    }

    /**
     * This will be defined during an API method callback if there was an error
     */
    interface PropertyLastErrorType {
        /**
         * Details about the error which occurred.
         * Optional.
         */
        message?: string;
    }

    /**
     * If the port was disconnected due to an error, this will be set to an object with a string property message,
     * giving you more information about the error. See onDisconnect.
     */
    interface PortErrorType {
        message: string;
    }

    interface Static {
        /**
         * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app.
         * If the background page is an event page, the system will ensure it is loaded before calling the callback.
         * If there is no background page, an error is set.
         */
        getBackgroundPage(): Promise<Window>;

        /**
         * <p>Open your Extension's options page, if possible.</p><p>The precise behavior may depend on your manifest's <code>
         * $(topic:optionsV2)[options_ui]</code> or <code>$(topic:options)[options_page]</code> key,
         * or what the browser happens to support at the time.</p><p>If your Extension does not declare an options page,
         * or the browser failed to create one for some other reason, the callback will set $(ref:lastError).</p>
         */
        openOptionsPage(): Promise<void>;

        /**
         * Returns details about the app or extension from the manifest. The object returned is a serialization of the full
         * $(topic:manifest)[manifest file].
         *
         * @returns The manifest details.
         */
        getManifest(): Manifest.WebExtensionManifest;

        /**
         * Converts a relative path within an app/extension install directory to a fully-qualified URL.
         *
         * @param path A path to a resource within an app/extension expressed relative to its install directory.
         * @returns The fully-qualified URL to the resource.
         */
        getURL(path: string): string;

        /**
         * Get the frameId of any window global or frame element.
         *
         * @param target A WindowProxy or a Browsing Context container element (IFrame, Frame, Embed, Object) for the target frame.
         * @returns The frameId of the target frame, or -1 if it doesn't exist.
         */
        getFrameId(target: any): number;

        /**
         * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics,
         * and implement surveys. Maximum 1023 characters.
         *
         * @param url Optional. URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme.
         * Set an empty string to not open a new tab upon uninstallation.
         * @returns Called when the uninstall URL is set. If the given URL is invalid, $(ref:runtime.lastError) will be set.
         */
        setUninstallURL(url?: string): Promise<void>;

        /**
         * Reloads the app or extension.
         */
        reload(): void;

        /**
         * Requests an update check for this app/extension.
         */
        requestUpdateCheck(): Promise<[RequestUpdateCheckStatus, RequestUpdateCheckCallbackDetailsType]>;

        /**
         * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps.
         * This is useful for content scripts connecting to their extension processes, inter-app/extension communication,
         * and $(topic:manifest/externally_connectable)[web messaging]. Note that this does not connect to any listeners in a
         * content script. Extensions may connect to content scripts embedded in tabs via $(ref:tabs.connect).
         *
         * @param extensionId Optional. The ID of the extension or app to connect to. If omitted,
         * a connection will be attempted with your own extension. Required if sending messages from a web page for
         * $(topic:manifest/externally_connectable)[web messaging].
         * @param connectInfo Optional.
         * @returns Port through which messages can be sent and received. The port's $(ref:runtime.Port onDisconnect)
         * event is fired if the extension/app does not exist.
         */
        connect(extensionId?: string, connectInfo?: ConnectConnectInfoType): Port;

        /**
         * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps.
         * This is useful for content scripts connecting to their extension processes, inter-app/extension communication,
         * and $(topic:manifest/externally_connectable)[web messaging]. Note that this does not connect to any listeners in a
         * content script. Extensions may connect to content scripts embedded in tabs via $(ref:tabs.connect).
         *
         * @param connectInfo Optional.
         * @returns Port through which messages can be sent and received. The port's $(ref:runtime.Port onDisconnect)
         * event is fired if the extension/app does not exist.
         */
        connect(connectInfo?: ConnectConnectInfoType): Port;

        /**
         * Connects to a native application in the host machine.
         *
         * @param application The name of the registered application to connect to.
         * @returns Port through which messages can be sent and received with the application
         */
        connectNative(application: string): Port;

        /**
         * Sends a single message to event listeners within your extension/app or a different extension/app.
         * Similar to $(ref:runtime.connect) but only sends a single message, with an optional response.
         * If sending to your extension, the $(ref:runtime.onMessage) event will be fired in each page, or $(ref:runtime.
         * onMessageExternal), if a different extension. Note that extensions cannot send messages to content scripts using this
         * method. To send messages to content scripts, use $(ref:tabs.sendMessage).
         *
         * @param extensionId Optional. The ID of the extension/app to send the message to. If omitted,
         * the message will be sent to your own extension/app. Required if sending messages from a web page for
         * $(topic:manifest/externally_connectable)[web messaging].
         * @param message
         * @param options Optional.
         */
        sendMessage(extensionId: string | undefined, message: any, options?: SendMessageOptionsType): Promise<any>;

        /**
         * Sends a single message to event listeners within your extension/app or a different extension/app.
         * Similar to $(ref:runtime.connect) but only sends a single message, with an optional response.
         * If sending to your extension, the $(ref:runtime.onMessage) event will be fired in each page, or $(ref:runtime.
         * onMessageExternal), if a different extension. Note that extensions cannot send messages to content scripts using this
         * method. To send messages to content scripts, use $(ref:tabs.sendMessage).
         *
         * @param message
         * @param options Optional.
         */
        sendMessage(message: any, options?: SendMessageOptionsType): Promise<any>;

        /**
         * Send a single message to a native application.
         *
         * @param application The name of the native messaging host.
         * @param message The message that will be passed to the native messaging host.
         */
        sendNativeMessage(application: string, message: any): Promise<any>;

        /**
         * Returns information about the current browser.
         *
         * @returns Called with results
         */
        getBrowserInfo(): Promise<BrowserInfo>;

        /**
         * Returns information about the current platform.
         *
         * @returns Called with results
         */
        getPlatformInfo(): Promise<PlatformInfo>;

        /**
         * Fired when a profile that has this extension installed first starts up. This event is not fired for incognito profiles.
         */
        onStartup: Events.Event<() => void>;

        /**
         * Fired when the extension is first installed, when the extension is updated to a new version,
         * and when the browser is updated to a new version.
         *
         * @param details
         */
        onInstalled: Events.Event<(details: OnInstalledDetailsType) => void>;

        /**
         * Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up.
         * Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed
         * to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent
         * and the page won't be unloaded.
         */
        onSuspend: Events.Event<() => void>;

        /**
         * Sent after onSuspend to indicate that the app won't be unloaded after all.
         */
        onSuspendCanceled: Events.Event<() => void>;

        /**
         * Fired when an update is available, but isn't installed immediately because the app is currently running.
         * If you do nothing, the update will be installed the next time the background page gets unloaded,
         * if you want it to be installed sooner you can explicitly call $(ref:runtime.reload).
         * If your extension is using a persistent background page, the background page of course never gets unloaded,
         * so unless you call $(ref:runtime.reload) manually in response to this event the update will not get installed until the
         * next time the browser itself restarts. If no handlers are listening for this event,
         * and your extension has a persistent background page, it behaves as if $(ref:runtime.reload)
         * is called in response to this event.
         *
         * @param details The manifest details of the available update.
         */
        onUpdateAvailable: Events.Event<(details: OnUpdateAvailableDetailsType) => void>;

        /**
         * Fired when a connection is made from either an extension process or a content script.
         *
         * @param port
         */
        onConnect: Events.Event<(port: Port) => void>;

        /**
         * Fired when a connection is made from another extension.
         *
         * @param port
         */
        onConnectExternal: Events.Event<(port: Port) => void>;

        /**
         * Fired when a message is sent from either an extension process or a content script.
         *
         * @param message Optional. The message sent by the calling script.
         * @param sender
         * @param sendResponse Function to call (at most once) when you have a response. This is an alternative to returning a
         * Promise. The argument should be any JSON-ifiable object. If you have more than one <code>onMessage</code>
         * listener in the same document, then only one may send a response. This function becomes invalid when the event listener
         * returns, unless you return true from the event listener to indicate you wish to send a response asynchronously (this
         * will keep the message channel open to the other end until <code>sendResponse</code> is called).
         */
        onMessage: Events.Event<
            (message: any, sender: MessageSender, sendResponse: () => void) => Promise<any> | true | void
        >;

        /**
         * Fired when a message is sent from another extension/app. Cannot be used in a content script.
         *
         * @param message Optional. The message sent by the calling script.
         * @param sender
         * @param sendResponse Function to call (at most once) when you have a response. This is an alternative to returning a
         * Promise. The argument should be any JSON-ifiable object. If you have more than one <code>onMessage</code>
         * listener in the same document, then only one may send a response. This function becomes invalid when the event listener
         * returns, unless you return true from the event listener to indicate you wish to send a response asynchronously (this
         * will keep the message channel open to the other end until <code>sendResponse</code> is called).
         */
        onMessageExternal: Events.Event<
            (message: any, sender: MessageSender, sendResponse: () => void) => Promise<any> | true | void
        >;

        /**
         * This will be defined during an API method callback if there was an error
         * Optional.
         */
        lastError?: PropertyLastErrorType;

        /**
         * The ID of the extension/app.
         */
        id: string;
    }
}
