import { Context, PropsWithChildren } from "react";

export default function ScrollToBottom(
    props: PropsWithChildren<{
        /**
         * Recurring interval of stickiness check, in milliseconds (minimum is 17 ms)
         */
        checkInterval?: number;
        /**
         * Set the class name for the root element
         */
        className?: string;
        /**
         * Set the debounce for tracking the `onScroll` event
         */
        debounce?: number;
        /**
         * Show debug information in console
         */
        debug?: boolean;
        /**
         * Set the class name for the follow button
         */
        followButtonClassName?: string;
        /**
         * Set the initial scroll behavior, either `"auto"` (discrete scrolling) or `"smooth"`
         */
        initialScrollBehavior?: "auto" | "smooth";
        /**
         * Set it to `"bottom"` for scroll-to-bottom, `"top"` for scroll-to-top
         */
        mode?: "bottom" | "top";
        /**
         * Set the nonce for Content Security Policy
         */
        nonce?: string;
        /**
         * A function to determine how far should scroll when scroll is needed
         */
        scroller?: (values: {
            /**
             * Maximum distance (in pixel) to scroll
             */
            maxValue: number;
            /**
             * Minimum distance (in pixel) to scroll
             */
            minValue: number;
            /**
             * View height of the scrollable container
             */
            offsetHeight: number;
            /**
             * Total height of the content in the container, must be equal or greater than offsetHeight
             */
            scrollHeight: number;
            /**
             * Current scroll position (in pixel)
             */
            scrollTop: number;
        }) => number;
        /**
         * Set the class name for the container element that house all `props.children`
         */
        scrollViewClassName?: string;
    }>,
): null;

/**
 * Scroll panel to specified position
 */
export function useScrollTo(): (scrollTop: number | "100%") => void;

/**
 * Scroll panel to bottom
 */
export function useScrollToBottom(): (option?: ScrollOption) => void;

/**
 * Scroll panel to end (depends on `mode`)
 */
export function useScrollToEnd(): (option?: ScrollOption) => void;

/**
 * Scroll panel to start (depends on `mode`)
 */
export function useScrollToStart(): (option?: ScrollOption) => void;

/**
 * Scroll panel to top
 */
export function useScrollToTop(): (option?: ScrollOption) => void;

/**
 * Observe scroll position change by passing a callback function
 */
export function useObserveScrollPosition(observer: (({ scrollTop }: { scrollTop: number }) => void) | false): void;

/**
 * `true` if the panel is animating scroll effect
 */
export function useAnimating(): [boolean];

/**
 * `true` if the panel is animating scroll effect and towards the end (depends on `mode`)
 */
export function useAnimatingToEnd(): [boolean];

/**
 * `true` if the panel is currently near bottom
 */
export function useAtBottom(): [boolean];

/**
 * `true` if the panel is currently near the end (depends on `mode`)
 */
export function useAtEnd(): [boolean];

/**
 * `true` if the panel is currently near the start (depends on `mode`)
 */
export function useAtStart(): [boolean];

/**
 * `true` if the panel is currently near top
 */
export function useAtTop(): [boolean];

/**
 * `"bottom"` for scroll-to-bottom, `"top"` for scroll-to-top
 */
export function useMode(): ["bottom" | "top"];

/**
 * `true` if the panel is sticking to the end
 */
export function useSticky(): [boolean];

/**
 * This context contains functions used to manipulate the container. And will not update throughout the lifetime of the composer.
 */

export const FunctionContext: Context<{
    /**
     * Scroll panel to specified position
     */
    scrollTo: (scrollTop: number | "100%") => void;
    /**
     * Scroll panel to bottom
     */
    scrollToBottom: (option?: ScrollOption) => void;
    /**
     * Scroll panel to end (depends on mode)
     */
    scrollToEnd: (option?: ScrollOption) => void;
    /**
     * Scroll panel to start (depends on mode)
     */
    scrollToStart: (option?: ScrollOption) => void;
    /**
     * Scroll panel to top
     */
    scrollToTop: (option?: ScrollOption) => void;
}>;

/**
 * This context contains state of the container.
 */
export const StateContext: Context<{
    /**
     * `true` if the panel is animating scroll effect
     */
    animating: boolean;
    /**
     * `true` if the panel is animating scroll effect and towards the end (depends on `mode`)
     */
    animatingToEnd: boolean;
    /**
     * `true` if the panel is currently near bottom
     */
    atBottom: boolean;
    /**
     * `true` if the panel is currently near the end (depends on `mode`)
     */
    atEnd: boolean;
    /**
     * `true` if the panel is currently near the start (depends on `mode`)
     */
    atStart: boolean;
    /**
     * `true` if the panel is currently near top
     */
    atTop: boolean;
    /**
     * `"bottom"` for scroll-to-bottom, `"top"` for scroll-to-top
     */
    mode: string;
    /**
     * `true` if the panel is sticking to the end
     */
    sticky: boolean;
}>;

/**
 * scrollToBottom/scrollToEnd/scrollToStart/scrollToTop accept an option in v3.0.0
 * reference: https://github.com/compulim/react-scroll-to-bottom#300---2020-06-21
 */
export interface ScrollOption {
    /**
     * In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard
     * Note: if not set behavior to smooth, `react-scroll-to-bottom` will warn
     * reference: https://github.com/compulim/react-scroll-to-bottom/blob/main/packages/component/src/ScrollToBottom/Composer.js#L188
     */
    behavior?: "smooth" | "auto";
}
