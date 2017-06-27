// Type definitions for ZeroClipboard 2.0
// Project: https://github.com/zeroclipboard/zeroclipboard
// Definitions by: Eric J. Smith <https://github.com/ejsmith>, Blake Niemyjski <https://github.com/niemyjski>, György Balássy <https://github.com/balassy>, Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace ZC {
  // Basic collection types for shorthands and interoperation
  interface List<T> { [index: number]: T;  length: number; }
  interface Dictionary<T> { [key: string]: T; }

  // Generic version EventHandler containers.
  // Mimicking native interfaces in lib.dom.d.ts of the same name.
  interface EventListener<T extends ZeroClipboardEvent> { (ev: T): void; }
  interface EventListenerObject<T extends ZeroClipboardEvent> { handleEvent(ev: T): void; }
  type EventListenerOrEventListenerObject<T extends ZeroClipboardEvent> = EventListener<T> | EventListenerObject<T>;

  export interface ZeroClipboardStatic extends ZeroClipboardCommon {
    new(elements?: Element | List<Element>): ZeroClipboardClient;

    /**
     * The version of the ZeroClipboard library being used, e.g. "2.0.0".
     * @type {string}
     */
    version: string;
    /**
     * Get a copy of the active configuration for ZeroClipboard.
     * @return {ZeroClipboardConfig}
     */
    config(): ZeroClipboardConfig;
    /**
     *  Get a copy of the actively configured value for this configuration property for ZeroClipboard.
     * @param  {string} propName
     * @return {any}
     */
    config(propName: string): any;
    config(propName: "swfPath"): string;
    config(propName: "trustedDomains"): string[];
    config(propName: "cacheBust"): boolean;
    config(propName: "forceEnhancedClipboard"): boolean;
    config(propName: "flashLoadTimeout"): number;
    config(propName: "autoActivate"): boolean;
    config(propName: "bubbleEvents"): boolean;
    config(propName: "fixLineEndings"): boolean;
    config(propName: "containerId"): string;
    config(propName: "containerClass"): string;
    config(propName: "swfObjectId"): string;
    config(propName: "hoverClass"): string;
    config(propName: "activeClass"): string;
    config(propName: "forceHandCursor"): boolean;
    config(propName: "title"): string;
    config(propName: "zIndex"): number;
    /**
     * Set the active configuration for ZeroClipboard. Returns a copy of the updated active configuration.
     * @param  {ZeroClipboardConfig} config
     * @return {ZeroClipboardConfig}
     */
    config(config: ZeroClipboardConfig): ZeroClipboardConfig;
    /**
     * Create the Flash bridge SWF object.
     * IMPORTANT: This method should be considered private.
     * @private
     */
    create(): void;
    /**
     * Emit the "destroy" event, remove all event handlers, and destroy the Flash bridge.
     */
    destroy(): void;
    /**
     * Focus/"activate" the provided element by moving the Flash SWF object in front of it.
     * @param {Element} element
     * @since 2.1.0
     */
    focus(element: Element): void;
    /**
     * Focus/"activate" the provided element by moving the Flash SWF object in front of it.
     * @param {Element} element
     * @deprecated: The preferred method to use is focus but the alias activate is available for backward compatibility's sake.
     */
    activate(element: Element): void;
    /**
     * Blur/"deactivate" the currently focused/"activated" element, moving the Flash SWF object off the screen.
     * @since 2.1.0
     */
    blur(): void;
    /**
     * Blur/"deactivate" the currently focused/"activated" element, moving the Flash SWF object off the screen.
     * @deprecated: The preferred method to use is blur but the alias deactivate is available for backward compatibility's sake.
     */
    deactivate(): void;
    /**
     * Return the currently "activated" element that the Flash SWF object is in front of it.
     * @return {HTMLElement} or {null}
     */
    activeElement(): HTMLElement;
    /**
     * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
     * @return {Object}
     */
    state(): Object;
    /**
     * Indicates if Flash Player is definitely unusable (disabled, outdated, unavailable, or deactivated).
     * IMPORTANT: This method should be considered private.
     * @return {boolean}
     * @private
     */
    isFlashUnusable(): boolean;
  }

  interface ZeroClipboardClient extends ZeroClipboardCommon {
    /**
     * A unique identifier for this ZeroClipboard client instance.
     * @type {string}
     */
    id: string;
    /**
     * Remove all event handlers and unclip all clipped elements.
     */
    destroy(): void;
    /**
     * Set the pending data of type "text/plain" for clipboard injection.
     * @param {string} data
     */
    setText(data: string): void;
    /**
     * Set the pending data of type "text/html" for clipboard injection.
     * @param {string} data
     */
    setHtml(data: string): void;
    /**
     * Set the pending data of type "application/rtf" for clipboard injection.
     * @param {string} data
     */
    setRichText(data: string): void;
    /**
     * Register clipboard actions for new element(s) to the client. This includes automatically invoking
     * ZeroClipboard.focus on the current element when it is hovered over, unless the autoActivate configuration
     * property is set to false.
     * @param  {Element[]} elements
     * @return {ZeroClipboardClient}
     */
    clip(elements: List<Element>): ZeroClipboardClient;
    /**
     * Register clipboard actions for new element(s) to the client. This includes automatically invoking
     * ZeroClipboard.focus on the current element when it is hovered over, unless the autoActivate configuration
     * property is set to false.
     * @param  {Element} element
     * @return {ZeroClipboardClient}
     */
    clip(element: Element): ZeroClipboardClient;
    /**
     * Unregister the clipboard actions of previously registered element(s) on the page. If no elements are provided,
     * ALL clipped/registered elements will be unregistered.
     * @param  {Element[]} elements
     * @return {ZeroClipboardClient}
     */
    unclip(elements: List<Element>): ZeroClipboardClient;
    /**
     * Unregister the clipboard actions of previously registered element(s) on the page. If no elements are provided,
     * ALL clipped/registered elements will be unregistered.
     * @param  {Element} element
     * @return {ZeroClipboardClient}
     */
    unclip(elements?: Element): ZeroClipboardClient;
    /**
     * Get all of the elements to which this client is clipped/registered.
     * @return {HTMLElement[]}
     */
    elements(): HTMLElement[];
  }

  interface ZeroClipboardEvent {
    client?: ZeroClipboardClient;
    type: string;
    target: HTMLElement;
    relatedTarget: HTMLElement;
    currentTarget: HTMLObjectElement;
    timeStamp: number;
  }

  interface ZeroClipboardReadyEvent extends ZeroClipboardEvent {
    message: string;
    version: string;
  }

  interface ZeroClipboardBeforeCopyEvent extends ZeroClipboardEvent {

  }

  interface ZeroClipboardCopyEvent extends ZeroClipboardEvent {
    clipboardData: {
      setData(format: string, data: string): void;
      setData(data: Dictionary<string>): void;
      clearData(mimeType?: string): void;
    };
  }

  interface ZeroClipboardAfterCopyEvent extends ZeroClipboardEvent {
    success: Dictionary<boolean>;
    data: Dictionary<string>;
    errors: any[];
  }

  interface ZeroClipboardDestroyEvent extends ZeroClipboardEvent {
    success: Dictionary<boolean>;
    data: Dictionary<string>;
  }

  interface ZeroClipboardErrorEvent extends ZeroClipboardEvent {
    name: string;
    message: string;
    minimumVersion?: string;
    version?: string;
    jsVersion?: string;
    swfVersion?: string;
    property?: string;
    configuredValue?: string;
    actualValue?: string;
    data?: Dictionary<string>;
    errors?: any[];
  }

  interface ZeroClipboardCommon {
    /**
     * Set the pending data of type format for clipboard injection.
     * @param {string} format
     * @param {string} data
     */
    setData(format: string, data: string): void;
    /**
     * Set the pending data of various formats for clipboard injection. This particular function signature (passing in
     * an Object) will implicitly clear out any existing pending data.
     * @param {Dictionary<string>} data
     */
    setData(data: Dictionary<string>): void;
    /**
     * Clear the pending data of type format for clipboard injection.
     * @param {string} mimeType
     */
    clearData(mimeType: string): void;
    /**
     * Clear the pending data of ALL formats for clipboard injection.
     */
    clearData(): void;
    /**
     * Get the pending data of type format for clipboard injection.
     * @param  {string} format
     * @return {string}
     * @since 2.1.0
     */
    getData(format: string): string;
    /**
     * Get a copy of the pending data of ALL formats for clipboard injection.
     * @return {Dictionary<string>}
     * @since 2.1.0
     */
    getData(): Dictionary<string>;
    /**
     * Add a listener function/object for an eventType. If called as a client method will be within the client instance.
     * @param {string} eventType
     * @param {EventListener<ZeroClipboardEvent>} listener
     */
    on(eventType: string, listener: EventListenerOrEventListenerObject<ZeroClipboardEvent>): void;
    /**
     * The ready event is fired when the Flash SWF completes loading and is ready for action. Please note that you need
     * to set most configuration options [with ZeroClipboard.config(...)] before ZeroClipboard.create() is invoked.
     * @param {"ready"} eventType
     * @param {EventListener<ZeroClipboardReadyEvent>} listener
     */
    on(eventType: "ready", listener: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>): void;
    /**
     * On click, the Flash object will fire off a beforecopy event. This event is generally only used for "UI
     * preparation" if you want to alter anything before the copy event fires.
     * IMPORTANT: Handlers of this event are expected to operate synchronously if they intend to be finished before
     * the "copy" event is triggered.
     * @param {"beforecopy"} eventType
     * @param {EventListener<ZeroClipboardBeforeCopyEvent>} listener
     */
    on(eventType: "beforecopy", listener: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>): void;
    /**
     * On click (and after the beforecopy event), the Flash object will fire off a copy event. If the HTML object has
     * data-clipboard-text or data-clipboard-target, then ZeroClipboard will take care of getting an initial set of
     * data. It will then invoke any copy event handlers, in which you can call event.clipboardData.setData to set the
     * text, which will complete the loop.
     * IMPORTANT: If a handler of this event intends to modify the pending data for clipboard injection, it MUST
     * operate synchronously in order to maintain the temporarily elevated permissions granted by the user's click
     * event. The most common "gotcha" for this restriction is if someone wants to make an asynchronous XMLHttpRequest
     * in response to the copy event to get the data to inject - this won't work; make it a synchronous XMLHttpRequest
     * instead, or do the work in advance before the copy event is fired.
     * @param {"copy"} eventType
     * @param {EventListener<ZeroClipboardCopyEvent>} listener
     */
    on(eventType: "copy", listener: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>): void;
    /**
     * The aftercopy event is fired when the text is copied [or failed to copy] to the clipboard.
     * @param {"aftercopy"} eventType
     * @param {EventListener<ZeroClipboardAfterCopyEvent>} listener
     */
    on(eventType: "aftercopy", listener: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>): void;
    /**
     * The destroy event is fired when ZeroClipboard.destroy() is invoked.
     * IMPORTANT: Handlers of this event are expected to operate synchronously if they intend to be finished before the
     * destruction is complete.
     * @param {"destroy"} eventType
     * @param {EventListener<ZeroClipboardDestroyEvent>} listener
     */
    on(eventType: "destroy", listener: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>): void;
    /**
     * The error event is fired under a number of conditions, which will be detailed as sub-sections. Some consumers
     * may not consider all error types to be critical, and thus ZeroClipboard does not take it upon itself to implode
     * by calling ZeroClipboard.destroy() under error conditions. However, many consumers may want to do just that.
     * @param {"error"} eventType
     * @param {EventListener<ZeroClipboardErrorEvent>} listener
     */
    on(eventType: "error", listener: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>): void;
    /**
     * Add a set of eventType to listener function/object mappings.
     * @param {EventListener<ZeroClipboardErrorEvent>} listenerObj
     */
    on(listenerObj: {
      ready?: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>;
      beforecopy?: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>;
      copy?: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>;
      aftercopy?: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>;
      destroy?: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>;
      error?: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>;
    }): void;
    /**
     * Remove a listener function/object for an eventType.
     * @param {string} eventType
     * @param {EventListener<ZeroClipboardEvent>} listener
     */
    off(eventType: "ready", listener: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>): void;
    off(eventType: "beforecopy", listener: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>): void;
    off(eventType: "copy", listener: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>): void;
    off(eventType: "aftercopy", listener: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>): void;
    off(eventType: "destroy", listener: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>): void;
    off(eventType: "error", listener: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>): void;
    off(eventType: string, listener: EventListenerOrEventListenerObject<ZeroClipboardEvent>): void;
    /**
     * Remove a set of eventType to listener function/object mappings.
     * @param {EventListener<ZeroClipboardErrorEvent>} listenerObj
     */
    off(listenerObj: {
      ready?: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>;
      beforecopy?: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>;
      copy?: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>;
      aftercopy?: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>;
      destroy?: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>;
      error?: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>;
    }): void;
    /**
     * Remove a set of eventType to listener function/object mappings.
     */
    off(eventType: "ready"): void;
    off(eventType: "beforecopy"): void;
    off(eventType: "copy"): void;
    off(eventType: "aftercopy"): void;
    off(eventType: "destroy"): void;
    off(eventType: "error"): void;
    off(eventType: string): void;
    /**
     * Remove ALL listener functions/objects for ALL registered event types.
     */
    off(): void;
    /**
     * Dispatch an event to all registered listeners. The emission of some types of events will result in side effects.
     * @param  {string} eventType
     * @return {any}
     */
    emit(eventType: string): any;
    emit(eventType: "ready"): void;
    emit(eventType: "beforecopy"): void;
    emit(eventType: "copy"): any;
    emit(eventType: "aftercopy"): void;
    emit(eventType: "destroy"): void;
    emit(eventType: "error"): void;
    /**
     * Dispatch an event to all registered listeners. The emission of some types of events will result in side effects.
     * @param  {string} data
     * @param  {string} name
     * @return {any}
     */
    emit(data: {type: string, name: string}): any;
    /**
     * Retrieves a copy of the registered listener functions/objects for the given eventType.
     * @param  {string} eventType
     * @return {EventListener<ZeroClipboardEvent>}
     */
    handlers(eventType: string): EventListenerOrEventListenerObject<ZeroClipboardEvent>[];
    handlers(eventType: "ready"): EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>[];
    handlers(eventType: "beforecopy"): EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>[];
    handlers(eventType: "copy"): EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>[];
    handlers(eventType: "aftercopy"): EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>[];
    handlers(eventType: "destroy"): EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>[];
    handlers(eventType: "error"): EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>[];
    /**
     * Retrieves a copy of the map of registered listener functions/objects for ALL event types.
     * @return {Object}
     */
    handlers(): {
      ready?: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>[];
      beforecopy?: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>[];
      copy?: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>[];
      aftercopy?: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>[];
      destroy?: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>[];
      error?: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>[];
    };
  }

  interface ZeroClipboardConfig {
    /**
     * SWF URL, relative to the page. Default value will be "ZeroClipboard.swf" under the same path as the ZeroClipboard JS file.
     * @type {string}
     */
    swfPath?: string;
    /**
     * SWF inbound scripting policy: page domains that the SWF should trust. (single string, or array of strings)
     * @type {SingleOrList<string>}
     */
    trustedDomains?: string[];
    /**
     * Include a "noCache" query parameter on requests for the SWF.
     * @type {boolean}
     */
    cacheBust?: boolean;
    /**
     * Enable use of the fancy "Desktop" clipboard, even on Linux where it is known to suck.
     * @type {boolean}
     */
    forceEnhancedClipboard?: boolean;
    /**
     * How many milliseconds to wait for the Flash SWF to load and respond before assuming that
     * Flash is deactivated (e.g. click-to-play) in the user's browser. If you don't care about
     * how long it takes to load the SWF, you can set this to `null`.
     * @type {number}
     */
    flashLoadTimeout?: number;
    /**
     * Setting this to `false` would allow users to handle calling `ZeroClipboard.focus(...);`
     * themselves instead of relying on our per-element `mouseover` handler.
     * @type {boolean}
     */
    autoActivate?: boolean;
    /**
     * Bubble synthetic events in JavaScript after they are received by the Flash object.
     * @type {boolean}
     */
    bubbleEvents?: boolean;
    /**
     * Ensure OS-compliant line endings, i.e. "\r\n" on Windows, "\n" elsewhere
     * @type {boolean}
     */
    fixLineEndings?: boolean;
    /**
     * Sets the ID of the `div` encapsulating the Flash object.
     * Value is validated against the [HTML4 spec for `ID` tokens][valid_ids].
     * @type {string}
     */
    containerId?: string;
    /**
     * Sets the class of the `div` encapsulating the Flash object.
     * @type {string}
     */
    containerClass?: string;
    /**
     * Sets the ID and name of the Flash `object` element.
     * Value is validated against the [HTML4 spec for `ID` and `Name` tokens][valid_ids].
     * @type {string}
     */
    swfObjectId?: string;
    /**
     * The class used to indicate that a clipped element is being hovered over.
     * @type {string}
     */
    hoverClass?: string;
    /**
     * The class used to indicate that a clipped element is active (is being clicked).
     * @type {string}
     */
    activeClass?: string;
    /**
     * Forcibly set the hand cursor ("pointer") for all clipped elements.
     * IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
     * @type {boolean}
     */
    forceHandCursor?: boolean;
    /**
     * Sets the title of the `div` encapsulating the Flash object.
     * IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
     * @type {string}
     */
    title?: string;
    /**
     * The z-index used by the Flash object.
     * Max value (32-bit): 2147483647.
     * IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
     * @type {number}
     */
    zIndex?: number;
  }
}

/**
 * [ZeroClipboard description]
 * @type {ZC.ZeroClipboardStatic}
 */
declare var ZeroClipboard: ZC.ZeroClipboardStatic;

/**
 * AMD and CommonJS module `zeroclipboard`
 * @module
 */
declare module "zeroclipboard" {
  export = ZeroClipboard;
}
