// Type definitions for use-resize-observer 5.0
// Project: https://github.com/ZeeCoder/use-resize-observer#readme
// Definitions by: PetrSvirak <https://github.com/PetrSvirak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5
export {};

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref,
 *         and ref.current's width (1 before the first measurement),
 *         and ref.current's height (1 before the first measurement).
 */
declare function useResizeObserver(): useResizeObserver.ObserverResultWithDefaultSize;

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref (optionally pass in your own),
 *         and ref.current's width (undefined before the first measurement),
 *         and ref.current's height (undefined before the first measurement).
 */
declare function useResizeObserver<TElement extends HTMLElement>(defaults: DefaultsWithoutSize<TElement>): useResizeObserver.ObserverResultWithoutDefaultSize<TElement>;

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref (optionally pass in your own),
 *         and ref.current's width (defaultWidth the first measurement),
 *         and height (undefined before the first measurement)".
 */
declare function useResizeObserver<TElement extends HTMLElement>(defaults: DefaultsWithWidthOnly<TElement>): useResizeObserver.ObserverResultWithDefaultWidthOnly<TElement>;

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref (optionally pass in your own),
 *         and ref.current's width (undefined the first measurement),
 *         and height (defaultHeight before the first measurement)".
 */

declare function useResizeObserver<TElement extends HTMLElement>(defaults: DefaultsWithHeightOnly<TElement>): useResizeObserver.ObserverResultWithDefaultHeightOnly<TElement>;

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref (optionally pass in your own),
 *         and ref.current's width (defaultWidth the first measurement),
 *         and height (defaultHeight before the first measurement)".
 */
declare function useResizeObserver<TElement extends HTMLElement>(defaults: DefaultsWithSize<TElement>): useResizeObserver.ObserverResultWithDefaultSize<TElement>;

import { RefObject } from 'react';

interface DefaultsWithoutSize<TElement> {
    ref?: RefObject<TElement>;
    useDefaults?: false;
}

interface DefaultsWithWidthOnly<TElement> {
    ref?: RefObject<TElement>;
    useDefaults?: true;
    defaultWidth: number;
}

interface DefaultsWithHeightOnly<TElement> {
    ref?: RefObject<TElement>;
    useDefaults?: true;
    defaultHeight: number;
}

type DefaultsWithSize<TElement> = DefaultsWithHeightOnly<TElement> & DefaultsWithWidthOnly<TElement>;

declare namespace useResizeObserver {
    type ObserverDefaults<TElement extends HTMLElement = HTMLElement> =
        DefaultsWithoutSize<TElement>
        | DefaultsWithHeightOnly<TElement>
        | DefaultsWithWidthOnly<TElement>
        | DefaultsWithSize<TElement>;

    interface ObserverResultWithoutDefaultSize<TElement = HTMLElement> {
        height?: number;
        ref: RefObject<TElement>;
        width?: number;
    }

    interface ObserverResultWithDefaultHeightOnly<TElement = HTMLElement> {
        height: number;
        ref: RefObject<TElement>;
        width?: number;
    }

    interface ObserverResultWithDefaultWidthOnly<TElement = HTMLElement> {
        height?: number;
        ref: RefObject<TElement>;
        width: number;
    }

    type ObserverResultWithDefaultSize<TElement = HTMLElement> =
        ObserverResultWithDefaultHeightOnly<TElement>
        & ObserverResultWithDefaultWidthOnly<TElement>;
}

export = useResizeObserver;
