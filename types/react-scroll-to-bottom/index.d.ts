// Type definitions for react-scroll-to-bottom 4.2
// Project: https://github.com/compulim/react-scroll-to-bottom
// Definitions by: Zechariah Tan <https://github.com/zS1L3NT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.6

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
        initialScrollBehavior?: 'auto' | 'smooth';
        /**
         * Set it to `"bottom"` for scroll-to-bottom, `"top"` for scroll-to-top
         */
        mode?: 'bottom' | 'top';
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
export function useScrollTo(): (scrollTop: number | '100%') => void;

/**
 * Scroll panel to bottom
 */
export function useScrollToBottom(): () => void;

/**
 * Scroll panel to end (depends on `mode`)
 */
export function useScrollToEnd(): () => void;

/**
 * Scroll panel to start (depends on `mode`)
 */
export function useScrollToStart(): () => void;

/**
 * Scroll panel to top
 */
export function useScrollToTop(): () => void;

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
export function useMode(): ['bottom' | 'top'];

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
    scrollTo: (scrollTop: number | '100%') => void;
    /**
     * Scroll panel to bottom
     */
    scrollToBottom: () => void;
    /**
     * Scroll panel to end (depends on mode)
     */
    scrollToEnd: () => void;
    /**
     * Scroll panel to start (depends on mode)
     */
    scrollToStart: () => void;
    /**
     * Scroll panel to top
     */
    scrollToTop: () => void;
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
