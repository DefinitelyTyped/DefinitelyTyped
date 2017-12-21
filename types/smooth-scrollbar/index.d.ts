// Type definitions for smooth-scrollbar 7.2
// Project: https://github.com/idiotWu/smooth-scrollbar
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Scrollbar;

export interface ScrollbarOptions {
    /**
     * Scrolling speed scale.
     * @default 1
     */
    speed?: number;
    /**
     * Delta reduction damping, a float value between (0, 1), the lower the value is, the more smooth the scrolling will be.
     * @default 0.1
     */
    damping?: number;
    /**
     * Minimal size for scrollbar thumb.
     * @default 20
     */
    thumbMinSize?: number;
    /**
     * Execute listeners in synchronous or asynchronous.
     * @default false
     */
    syncCallbacks?: boolean;
    /**
     * Render scrolling by integer pixels, set to true to improve performance.
     * @default true
     */
    renderByPixels?: boolean;
    /**
     * Whether allow upper scrollable content to continue scrolling when current scrollbar reaches edge.
     * When set to "auto", it will be enabled on nested scrollbars, and disabled on first-class scrollbars.
     * @default "auto"
     */
    continuousScrolling?: boolean | "auto";
    /**
     * Experimental overscroll effect, "bounce" for iOS style effect and "glow" for Android style effect.
     * Be careful when you enable this feature!
     * @default false
     */
    overscrollEffect?: boolean | "bounce" | "glow";
    /**
     * Canvas paint color with 'glow' effect.
     * @default "#87ceeb"
     */
    overscrollEffectColor?: string;
    /**
     * The same as damping, but for overscrolling.
     * @default 0.2
     */
    overscrollDamping?: number;
}

export interface ScrollbarTargets {
    readonly container: HTMLElement;
    readonly content: HTMLElement;
    readonly xAxis: {
        readonly track: HTMLElement;
        readonly thumb: HTMLElement;
    };
    readonly yAxis: {
        readonly track: HTMLElement;
        readonly thumb: HTMLElement;
    };
}

export interface ScrollIntoViewOptions {
    /**
     * scrolling stop offset to top edge of container
     * @default 0
     */
    offsetTop?: number;
    /**
     * scrolling stop offset to left edge of container
     * @default 0
     */
    offsetLeft?: number;
    /**
     * whether to scroll container when target element is visible
     * @default false
     */
    onlyScrollIfNeeded?: boolean;
}

export interface ScrollStatusObject {
    /**
     * Scrolling direction
     */
    direction: {
        x: "none" | "right" | "left";
        y: "none" | "up" | "down";
    };
    /**
     * Scrolling offset
     */
    offset: {
        x: number;
        y: number;
    };
    /**
     * Max scroll distance in px
     */
    limit: {
        x: number;
        y: number;
    };
}

export default class Scrollbar {
    /**
     * Init scrollbar on given element, and returns scrollbar instance
     * @param element Element to init scrollbar
     * @param options Scrollbar options
     * @return Scrollbar instance
     */
    static init(element: HTMLElement, options?: ScrollbarOptions): Scrollbar;
    /**
     * Automatically init scrollbar on all elements refer to selector scrollbar, [scrollbar], [data-scrollbar]
     * @return An array of scrollbars
     */
    static initAll(options?: ScrollbarOptions): Scrollbar[];
    /**
     * Check if scrollbar exists on given element:
     * @param element HTML element
     */
    static has(element: HTMLElement): boolean;
    /**
     * Get scrollbar on the given element
     * @param element HTML element
     * @return Scrollbar instance of undefined if element doesn't have scrollbar
     */
    static get(element: HTMLElement): Scrollbar | undefined;
    /**
     * Get all scrollbar instances
     * @return An array of scrollbar instances
     */
    static getAll(): Scrollbar[];
    /**
     * Remove scrollbar on the given element
     * @param element HTML element
     */
    static destroy(element: HTMLElement, isRemoval?: boolean): void;
    /**
     * Destroys all scrollbar instances
     */
    static destroyAll(): void;
    /**
     * Current scrollbar targets
     */
    readonly targets: ScrollbarTargets;
    /**
     * Current scrolling offset
     */
    offset: {
        x: number;
        y: number;
    };
    /**
     * Max scrolling offset
     */
    limit: {
        x: number;
        y: number;
    };
    /**
     * Alias for offset.y
     */
    scrollTop: number;
    /**
     * Alias for offset.x
     */
    scrollLeft: number;

    /**
     * Scrollbars are automatically updated with 100ms debounce (or childList changes if MutationObserver is supported).
     * You can call update() to force an update, this will be useful when you modified contents inside scrollbar
     * @param async By default, updating will operate synchronously, set to true to update asynchronously (in next frame).
     */
    update(async?: boolean): void;
    /**
     * Return the size of scrollbar container and scroll content
     * @return Container and content dimensions
     */
    getSize(): { container: { width: number; height: number }; content: { width: number; height: number } };
    /**
     * Like window.scrollTo(), scroll content will be set to the given position immediately.
     * @param x X position
     * @param y Y position
     * @param withoutCallbacks Set to true to disable callback functions temporarily.
     */
    setPosition(x: number, y: number, withoutCallbacks?: boolean): void;
    /**
     * Scroll to given position with easing, callback will be invoked with instance after scrolling:
     * @param x X position
     * @param y Y position
     * @param duration description
     * @param callback Callback
     */
    scrollTo(x: number, y: number, duration?: number, callback?: (instance: this) => void): void;
    /**
     * Scroll target element into visible area of scrollbar, like DOM method element.scrollIntoView().
     * This will be helpful when you want to create some anchors.
     * @param element Element to scroll into
     * @param options Options
     */
    scrollIntoView(element: HTMLElement, options?: ScrollIntoViewOptions): void;
    /**
     * Check if an element is visible in the current view area.
     * @param element HTML element
     * @return True/false
     */
    isVisible(element: HTMLElement): boolean;
    /**
     * Register scrolling listener to scrollbar instance, callbacks will be invoked in every small scrolling.
     * @param listener A listener
     */
    addListener(listener: (status: ScrollStatusObject) => void): void;
    /**
     * Remove the given listeneer from listeners collection, like Element.removeEventListener().
     * @param listener A listener
     */
    removeListener(listener: (status: ScrollStatusObject) => void): void;
    /**
     * This is another useful method when you want to make infinite scrolling.
     * Callbacks will be invoked with status object when you scrolling down over a threshold.
     * @param listener A listener
     * @param threshold Threshold, default 50
     */
    infiniteScroll(listener: (status: ScrollStatusObject) => void, threshold?: number): void;
    /**
     * Remove DOM event handlers that match regex rules
     * @param regexps regexps
     * @example
     * instance.unregisterEvents(/touch/, /key/);
     */
    unregisterEvents(...regexps: RegExp[]): void;
    /**
     * Recover events that are unregistered.
     * @param regexps regexps
     */
    registerEvents(...regexps: RegExp[]): void;
    /**
     * Clear all movements and stop scrollbar immediately, will be useful when you want to stop scrollbar and set it to another position.
     */
    clearMovement(): void;
    /**
     * Alias for clearMovement() method.
     */
    stop(): void;
    /**
     * Remove this scrollbar instance
     * @param isRemoval Set to true if scrollbar being removed from DOM
     */
    destroy(isRemoval?: boolean): void;
    /**
     * Get content element of the scrollbar, which contains all of your contents within scrollbar.
     * In other words, all contents that you've put them into target element, will be moved here after you initialized the scrollbar.
     * @return HTML content element
     */
    getContentElem(): HTMLElement;
    /**
     * Show scrollbar track, you can choose whether 'x' or 'y' or 'both', default is 'both' which will show tracks both on x-axis and y-axis.
     * @param direction Track direction
     */
    showTrack(direction?: "x" | "y" | "both"): void;
    /**
     * Like showTrack() method, but for hiding the track on specified direction.
     * @param direction Track direction
     */
    hideTrack(direction?: "x" | "y" | "both"): void;
}
