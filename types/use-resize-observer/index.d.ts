// Type definitions for use-resize-observer 6.0
// Project: https://github.com/ZeeCoder/use-resize-observer#readme
// Definitions by: PetrSvirak <https://github.com/PetrSvirak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5
export {};

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref,
 *         and ref.current's width (undefined before the first measurement),
 *         and ref.current's height (undefined before the first measurement).
 */
declare function useResizeObserver(): useResizeObserver.ObserverResultWithSize;

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @return a ref (optionally pass in your own),
 *         and ref.current's width (undefined before the first measurement),
 *         and ref.current's height (undefined before the first measurement).
 */
declare function useResizeObserver<TElement extends HTMLElement>(defaults: DefaultsWithoutResizeHandler<TElement>): useResizeObserver.ObserverResultWithSize<TElement>;

/***
 * Allows using a ResizeObserver to measure size of an element assigned with ref returned from the hook.
 * The hook is invoked at least once before the first measurement of actual size by the observer.
 * @param defaults The onResize callback will be called with new ref.current's width and height as a parameter.
 *         Because of that, the ref.current's width and height are not returned.
 * @return a ref (optionally pass in your own)
 *         The callback function will be called with new ref.current's width and height as a parameter.
 */
declare function useResizeObserver<TElement extends HTMLElement>(defaults: DefaultsWithResizeHandler<TElement>): useResizeObserver.ObserverResultForResizeHandler<TElement>;

import { RefObject } from 'react';

interface RefSize {
    width: number;
    height: number;
}

type ResizeHandler = (newSize: RefSize) => void;

interface DefaultsWithoutResizeHandler<TElement> {
    ref?: RefObject<TElement>;
}

interface DefaultsWithResizeHandler<TElement> {
    ref?: RefObject<TElement>;
    onResize: ResizeHandler;
}

declare namespace useResizeObserver {
    type ObserverDefaults<TElement extends HTMLElement = HTMLElement> =
        DefaultsWithoutResizeHandler<TElement>
        | DefaultsWithResizeHandler<TElement>;

    type ObserverRefSize = RefSize;

    interface ObserverResultWithSize<TElement = HTMLElement> {
        ref: RefObject<TElement>;
        width: number | undefined;
        height: number | undefined;
    }

    interface ObserverResultForResizeHandler<TElement = HTMLElement> {
        ref: RefObject<TElement>;
    }
}

export = useResizeObserver;
