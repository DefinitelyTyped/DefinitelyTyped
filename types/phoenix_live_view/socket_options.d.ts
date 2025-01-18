import { HooksOptions } from "./hooks";
import { UploadersOptions } from "./upload_entry";
import View from "./view";

export interface Defaults {
    debounce: number;
    throttle: number;
}

export interface EventMetadata {
    click: (e: PointerEvent, el: HTMLElement) => any;
    keyup: (e: KeyboardEvent, el: HTMLElement) => any;
    keydown: (e: KeyboardEvent, el: HTMLElement) => any;
    blur: (e: FocusEvent, el: HTMLElement) => any;
    focus: (e: FocusEvent, el: HTMLElement) => any;
    focusout: (e: FocusEvent, el: HTMLElement) => any;
    focusin: (e: FocusEvent, el: HTMLElement) => any;
}

export interface DomOptions {
    jsQuerySelectorAll: (sourceEl: HTMLElement, query: any, defaultQuery: () => Node[]) => Node[];
    onPatchStart: (container: Node) => void;
    onPatchEnd: (container: Node) => void;
    onNodeAdded: (node: Node) => void;
    onBeforeElUpdated: (fromEl: HTMLElement, toEl: HTMLElement) => void;
}

export default interface SocketOptions {
    // Phoenix Socket options
    /*
     * @param {Function} [opts.transport] - The Websocket Transport, for example WebSocket or Phoenix.LongPoll.
     *
     * Defaults to WebSocket with automatic LongPoll fallback if WebSocket is not defined.
     * To fallback to LongPoll when WebSocket attempts fail, use `longPollFallbackMs: 2500`.
     */
    transport: new(endpoint: string) => object;
    /*
     * @param {Function} [opts.longPollFallbackMs] - The millisecond time to attempt the primary transport
     * before falling back to the LongPoll transport. Disabled by default.
     */
    longPollFallbackMs: number;
    /*
     * @param {Function} [opts.debug] - When true, enables debug logging. Default false.
     */
    debug: boolean;
    /*
     * @param {Function} [opts.encode] - The function to encode outgoing messages.
     * Defaults to JSON encoder.
     */
    encode: (payload: object, callback: (encoded: any) => any) => any;
    /*
     * @param {Function} [opts.decode] - The function to decode incoming messages.
     * Defaults to JSON:
     *
     * ```javascript
     * (payload, callback) => callback(JSON.parse(payload))
     * ```
     */
    decode: (payload: string, callback: (decoded: any) => any) => any;
    /*
     * @param {number} [opts.timeout] - The default timeout in milliseconds to trigger push timeouts.
     * Defaults to `DEFAULT_TIMEOUT`
     */
    timeout: number;
    /*
     * @param {number} [opts.heartbeatIntervalMs] - The millisec interval to send a heartbeat message
     */
    heartbeatIntervalMs: number;
    /*
     * @param {number} [opts.reconnectAfterMs] - The optional function that returns the millisec
     * socket reconnect interval. Defaults to stepped backoff of:
     *
     * ```javascript
     * function(tries){
     *   return [10, 50, 100, 150, 200, 250, 500, 1000, 2000][tries - 1] || 5000
     * }
     * ````
     */
    reconnectAfterMs: (tries: number) => number;
    /*
     * @param {number} [opts.rejoinAfterMs] - The optional function that returns the millisec
     * rejoin interval for individual channels.
     *
     * ```javascript
     * function(tries){
     *   return [1000, 2000, 5000][tries - 1] || 10000
     * }
     * ````
     */
    rejoinAfterMs: (tries: number) => number;
    /*
     * @param {Function} [opts.logger] - The optional function for specialized logging, ie:
     *
     * ```javascript
     * function(kind, msg, data) {
     *   console.log(`${kind}: ${msg}`, data)
     * }
     * ```
     */
    logger: (kind: string, msg: any, data: any) => void;
    /*
     * @param {number} [opts.longpollerTimeout] - The maximum timeout of a long poll AJAX request.
     * Defaults to 20s (double the server long poll timer).
     */
    longpollerTimeout: number;
    /*
     * @param {string} [opts.binaryType] - The binary type to use for binary WebSocket frames.
     * Defaults to "arraybuffer"
     */
    binaryType: "arraybuffer" | "blob";
    /*
     * @param {vsn} [opts.vsn] - The serializer's protocol version to send on connect.
     * Defaults to DEFAULT_VSN.
     */
    vsn: string;
    // LiveSocket - specific options
    /*
     * @param {object} [opts.defaults] - The optional defaults to use for various bindings,
     * such as `phx-debounce`. Supports the following keys:
     *
     *   - debounce - the millisecond phx-debounce time. Defaults 300
     *   - throttle - the millisecond phx-throttle time. Defaults 300
     */
    defaults: Partial<Defaults>;
    /*
     * @param {Function} [opts.params] - The optional function for passing connect params.
     * The function receives the element associated with a given LiveView. For example:
     *
     *     (el) => {view: el.getAttribute("data-my-view-name", token: window.myToken}
     */
    params: object | ((el: HTMLElement) => object);
    /*
     * @param {string} [opts.bindingPrefix] - The optional prefix to use for all phx DOM annotations.
     * Defaults to "phx-".
     */
    bindingPrefix: string;
    /*
     * @param {object} [opts.hooks] - The optional object for referencing LiveView hook callbacks.
     */
    hooks: HooksOptions;
    /*
     * @param {object} [opts.uploaders] - The optional object for referencing LiveView uploader callbacks.
     */
    uploaders: UploadersOptions;
    /*
     * @param {integer} [opts.loaderTimeout] - The optional delay in milliseconds to wait before apply
     * loading states.
     */
    loaderTimeout: number;
    /*
     * @param {integer} [opts.maxReloads] - The maximum reloads before entering failsafe mode.
     */
    maxReloads: number;
    /*
     * @param {integer} [opts.reloadJitterMin] - The minimum time between normal reload attempts.
     */
    reloadJitterMin: number;
    /*
     * @param {integer} [opts.reloadJitterMax] - The maximum time between normal reload attempts.
     */
    reloadJitterMax: number;
    /*
     * @param {integer} [opts.failsafeJitter] - The time between reload attempts in failsafe mode.
     */
    failsafeJitter: number;
    /*
     * @param {Function} [opts.viewLogger] - The optional function to log debug information. For example:
     *
     *     (view, kind, msg, obj) => console.log(`${view.id} ${kind}: ${msg} - `, obj)
     */
    viewLogger: (view: View, kind: string, msg: any, obj: any) => void;
    /*
     * @param {object} [opts.metadata] - The optional object mapping event names to functions for
     * populating event metadata. For example:
     *
     *     metadata: {
     *       click: (e, el) => {
     *         return {
     *           ctrlKey: e.ctrlKey,
     *           metaKey: e.metaKey,
     *           detail: e.detail || 1,
     *         }
     *       }
     *     }
     */
    metadata: Partial<EventMetadata>;
    /*
     * @param {object} [opts.sessionStorage] - An optional Storage compatible object
     * Useful when LiveView won't have access to `sessionStorage`.  For example, This could
     * happen if a site loads a cross-domain LiveView in an iframe.
     */
    sessionStorage: object;
    /*
     * @param {object} [opts.localStorage] - An optional Storage compatible object
     * Useful for when LiveView won't have access to `localStorage`.
     * See `opts.sessionStorage` for examples.
     */
    localStorage: object;
    /*
     * @param {object} [opts.dom] - For integration with client-side libraries which
     * require a broader access to full DOM management, the LiveSocket constructor
     * accepts a `dom` option with an `onBeforeElUpdated` callback.
     */
    dom: Partial<DomOptions>;
}
