// Type definitions for @novnc/novnc 1.3
// Project: https://github.com/novnc/noVNC
// Definitions by: Jake Jarvis <https://github.com/jakejarvis>
//                 Maksim Ovcharik <https://github.com/ovcharik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@novnc/novnc/core/rfb' {
    /**
     * An `object` specifying the credentials to provide to the server when authenticating.
     */
    interface NoVncCredentials {
        /** The user that authenticates */
        username: string;
        /** Password for the user */
        password: string;
        /** Target machine or session */
        target: string;
    }

    /**
     * An `object` specifying extra details about how the connection should be made.
     */
    interface NoVncOptions {
        /**
         * A `boolean` indicating if the remote server should be shared or if any other connected
         * clients should be disconnected. Enabled by default.
         */
        shared?: boolean;
        /**
         * An `object` specifying the credentials to provide to the server when authenticating.
         */
        credentials?: NoVncCredentials;
        /**
         * A `string` specifying the ID to provide to any VNC repeater encountered.
         */
        repeaterID?: string;
        /**
         * An `Array` of `string`s specifying the sub-protocols to use in the WebSocket connection.
         * Empty by default.
         */
        wsProtocols?: string[];
    }

    interface NoVncEvents {
        /**
         * The `connect` event is fired after all the handshaking with the server is completed and the
         * connection is fully established. After this event the `NoVncClient` object is ready to
         * receive graphics updates and to send input.
         */
        connect: CustomEvent<Record<string, never>>;

        /**
         * The `disconnect` event is fired when the connection has been terminated. The `detail`
         * property is an `object` that contains the property `clean`. `clean` is a `boolean` indicating
         * if the termination was clean or not. In the event of an unexpected termination or an error
         * `clean` will be set to false.
         */
        disconnect: CustomEvent<{ clean: boolean }>;

        /**
         * The `credentialsrequired` event is fired when the server requests more credentials than were
         * specified to {@link NoVncClient}. The `detail` property is an `object` containing the
         * property `types` which is an `Array` of `string` listing the credentials that are required.
         */
        credentialsrequired: CustomEvent<{ types: Array<keyof NoVncCredentials> }>;

        /**
         * The `securityfailure` event is fired when the handshaking process with the server fails
         * during the security negotiation step. The `detail` property is an `object` containing the
         * following properties:
         *
         * | Property | Type        | Description
         * | -------- | ----------- | -----------
         * | `status` | `number`    | The failure status code
         * | `reason` | `string`    | The **optional** reason for the failure
         *
         * The property `status` corresponds to the
         * [SecurityResult](https://github.com/rfbproto/rfbproto/blob/master/rfbproto.rst#securityresult)
         * status code in cases of failure. A status of zero will not be sent in this event since that
         * indicates a successful security handshaking process. The optional property `reason` is
         * provided by the server and thus the language of the string is not known. However most servers
         * will probably send English strings. The server can choose to not send a reason and in these
         * cases the `reason` property will be omitted.
         */
        securityfailure: CustomEvent<{ status: number; reason?: string }>;

        /**
         * The `clipboard` event is fired when the server has sent clipboard data. The `detail` property
         * is an `object` containing the property `text` which is a `string` with the clipboard data.
         */
        clipboard: CustomEvent<{ text: string }>;

        /**
         * The `bell` event is fired when the server has requested an audible bell.
         */
        bell: CustomEvent<Record<string, never>>;

        /**
         * The `desktopname` event is fired when the name of the remote desktop changes. The `detail`
         * property is an `object` with the property `name` which is a `string` specifying the new name.
         */
        desktopname: CustomEvent<{ name: string }>;

        /**
         * The `capabilities` event is fired whenever an entry is added or removed from `capabilities`.
         * The `detail` property is an `object` with the property `capabilities` containing the new
         * value of `capabilities`.
         */
        capabilities: CustomEvent<{ capabilities: NoVncClient['capabilities'] }>;
    }

    type NoVncEventType = keyof NoVncEvents;
    type NoVncEvent = NoVncEvents[NoVncEventType];

    class NoVncEventTarget extends EventTarget {
        protected _listeners: Map<NoVncEventType, (event: Event) => void>;

        addEventListener<T extends NoVncEventType>(type: T, listener: (event: NoVncEvents[T]) => void): void;
        addEventListener(type: string, listener: (event: CustomEvent) => void): void;

        removeEventListener<T extends NoVncEventType>(type: T, listener: (event: NoVncEvents[T]) => void): void;
        removeEventListener(type: string, listener: (event: CustomEvent) => void): void;

        dispatchEvent(event: NoVncEvent | CustomEvent): boolean;
    }

    /**
     * The `NoVncClient` object represents a single connection to a VNC server. It communicates using
     * a WebSocket that must provide a standard NoVncClient protocol stream.
     */
    export default class NoVncClient extends NoVncEventTarget {
        readonly _target: Element;
        readonly _url: string | null;

        /**
         * Returns a new `NoVncClient` object and initiates a new connection to a specified VNC server.
         *
         * @param target - A block {@link HTMLElement} that specifies where the `NoVncClient` object
         * should attach itself. The existing contents of the `HTMLElement` will be untouched, but new
         * elements will be added during the lifetime of the `NoVncClient` object.
         * @param url - A `string`, {@link WebSocket}, or {@link RTCDataChannel} specifying the VNC server to connect
         * to. This must be a valid WebSocket URL.
         * @param options - An {@link NoVncOptions} specifying extra details about how the connection
         * should be made.
         */
        constructor(target: Element, url: string | WebSocket | RTCDataChannel, options?: NoVncOptions);

        /**
         * Is a `boolean` indicating if any events (e.g. key presses or mouse movement) should be
         * prevented from being sent to the server. Disabled by default.
         */
        viewOnly: boolean;

        /**
         * Is a `boolean` indicating if keyboard focus should automatically be moved to the remote
         * session when a `mousedown` or `touchstart` event is received. Enabled by default.
         */
        focusOnClick: boolean;

        /**
         * Is a `boolean` indicating if the remote session should be clipped to its container. When
         * disabled scrollbars will be shown to handle the resulting overflow. Disabled by default.
         */
        clipViewport: boolean;

        /**
         * Is a `boolean` indicating if mouse events should control the relative position of a clipped
         * remote session. Only relevant if `clipViewport` is enabled. Disabled by default.
         */
        dragViewport: boolean;

        /**
         * Is a `boolean` indicating if the remote session should be scaled locally so it fits its
         * container. When disabled it will be centered if the remote session is smaller than its
         * container, or handled according to `clipViewport` if it is larger. Disabled by default.
         */
        scaleViewport: boolean;

        /**
         * Is a `boolean` indicating if a request to resize the remote session should be sent whenever
         * the container changes dimensions. Disabled by default.
         */
        resizeSession: boolean;

        /**
         * Is a `boolean` indicating whether a dot cursor should be shown instead of a zero-sized or
         * fully-transparent cursor if the server sets such invisible cursor. Disabled by default.
         */
        showDotCursor: boolean;

        /**
         * Is a valid CSS [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
         * style value indicating which background style should be applied to the element containing the
         * remote session screen. The default value is `rgb(40, 40, 40)` (solid gray color).
         */
        background: string;

        /**
         * Is an `int` in range `[0-9]` controlling the desired JPEG quality. Value `0` implies low
         * quality and `9` implies high quality. Default value is `6`.
         */
        qualityLevel: number;

        /**
         * Is an `int` in range `[0-9]` controlling the desired compression level. Value `0` means no
         * compression. Level 1 uses a minimum of CPU resources and achieves weak compression ratios,
         * while level 9 offers best compression but is slow in terms of CPU consumption on the server
         * side. Use high levels with very slow network connections. Default value is `2`.
         */
        compressionLevel: number;

        /**
         * Is an `object` indicating which optional extensions are available on the server. Some methods
         * may only be called if the corresponding capability is set. The following capabilities are
         * defined:
         *
         * | name     | type      | description
         * | -------- | --------- | -----------
         * | `power`  | `boolean` | Machine power control is available
         */
        readonly capabilities: {
            /** Machine power control is available */
            power: boolean;
        };

        /**
         * Disconnect from the server.
         */
        disconnect(): void;

        /**
         * Send credentials to server. Should be called after the
         * {@link NoVncEventType.credentialsrequired} event has fired.
         *
         * @param credentials An {@link NoVncCredentials} specifying the credentials to provide to the
         * server when authenticating.
         */
        sendCredentials(credentials: NoVncCredentials): void;

        /**
         * Send a key event to the server.
         *
         * @param keysym A `number` specifying the NoVncClient keysym to send. Can be `0` if a valid
         * **`code`** is specified.
         * @param code A `string` specifying the physical key to send. Valid values are those that can
         * be specified to {@link KeyboardEvent.code}. If the physical key cannot be determined then
         * `null` shall be specified.
         * @param down A `boolean` specifying if a press or a release event should be sent. If omitted
         * then both a press and release event are sent.
         */
        sendKey(keysym: number, code: string | null, down?: boolean): void;

        /**
         * Send the key sequence *left Control*, *left Alt*, *Delete*. This is a convenience wrapper
         * around {@link sendKey}.
         */
        sendCtrlAltDel(): void;

        /**
         * Sets the keyboard focus on the remote session. Keyboard events will be sent to the remote
         * server after this point.
         *
         * @param options A {@link FocusOptions} providing options to control how the focus will be
         * performed. Please see {@link HTMLElement.focus} for available options.
         */
        focus(options?: FocusOptions): void;

        /**
         * Remove keyboard focus on the remote session. Keyboard events will no longer be sent to the
         * remote server after this point.
         */
        blur(): void;

        /**
         * Request to shut down the remote machine. The capability `power` must be set for this method
         * to have any effect.
         */
        machineShutdown(): void;

        /**
         * Request a clean reboot of the remote machine. The capability `power` must be set for this
         * method to have any effect.
         */
        machineReboot(): void;

        /**
         * Request a forced reset of the remote machine. The capability `power` must be set for this
         * method to have any effect.
         */
        machineReset(): void;

        /**
         * Send clipboard data to the remote server.
         *
         * @param text A `string` specifying the clipboard data to send.
         */
        clipboardPasteFrom(text: string): void;
    }
}

declare module '@novnc/novnc/core/util/browser' {
    let isTouchDevice: boolean;
    let dragThreshold: number;

    const supportsCursorURIs: boolean;
    const hasScrollbarGutter: boolean;

    function isMac(): boolean;
    function isWindows(): boolean;
    function isIOS(): boolean;
    function isSafari(): boolean;
    function isFirefox(): boolean;
}

declare module '@novnc/novnc/core/input/util' {
    interface KeyboardEventBase {
        char?: string;
        charCode?: number;
        code: string;
        key: string;
        keyCode?: number;
        location?: number;
        type?: string;
    }

    function getKeycode(event: KeyboardEventBase): string;
    function getKey(event: KeyboardEventBase): string;
    function getKeysym(event: KeyboardEventBase): number;
}
