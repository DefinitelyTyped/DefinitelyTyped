/**
 * These are types for things that are present in the upcoming React 18 release.
 *
 * Once React 18 is released they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/next"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/next'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/next" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,

import React = require('.');

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

declare module '.' {
    export interface SuspenseProps {
        /**
         * The presence of this prop indicates that the content is computationally expensive to render.
         * In other words, the tree is CPU bound and not I/O bound (e.g. due to fetching data).
         * @see {@link https://github.com/facebook/react/pull/19936}
         */
        unstable_expectedLoadTime?: number | undefined;
    }

    export type SuspenseListRevealOrder = 'forwards' | 'backwards' | 'together';
    export type SuspenseListTailMode = 'collapsed' | 'hidden';

    export interface SuspenseListCommonProps {
        /**
         * Note that SuspenseList require more than one child;
         * it is a runtime warning to provide only a single child.
         *
         * It does, however, allow those children to be wrapped inside a single
         * level of `<React.Fragment>`.
         */
        children: ReactElement | Iterable<ReactElement>;
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder: 'forwards' | 'backwards';
        /**
         * Dictates how unloaded items in a SuspenseList is shown.
         *
         * - By default, `SuspenseList` will show all fallbacks in the list.
         * - `collapsed` shows only the next fallback in the list.
         * - `hidden` doesn’t show any unloaded items.
         */
        tail?: SuspenseListTailMode | undefined;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder?: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps['revealOrder']> | undefined;
        /**
         * The tail property is invalid when not using the `forwards` or `backwards` reveal orders.
         */
        tail?: never | undefined;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    /**
     * `SuspenseList` helps coordinate many components that can suspend by orchestrating the order
     * in which these components are revealed to the user.
     *
     * When multiple components need to fetch data, this data may arrive in an unpredictable order.
     * However, if you wrap these items in a `SuspenseList`, React will not show an item in the list
     * until previous items have been displayed (this behavior is adjustable).
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist
     * @see https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist
     */
    export const SuspenseList: ExoticComponent<SuspenseListProps>;

    // must be synchronous
    export type TransitionFunction = () => VoidOrUndefinedOnly;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it for at most `timeoutMs`.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue
     */
    export function useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The `useTransition` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
     *
     * @param config An optional object with `timeoutMs`
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#usetransition
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to `useTransition` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;

    export function useId(): string;

    /**
     * this should be an internal type
     */
    interface MutableSource<T> {
        _source: T;
    }

    export type MutableSourceSubscribe<T> = (source: T, callback: () => void) => () => void;

    /**
     * @param source A source could be anything as long as they can be subscribed to and have a "version".
     * @param getVersion A function returns a value which will change whenever part of the source changes.
     */
    export function unstable_createMutableSource<T>(source: T, getVersion: () => any): MutableSource<T>;

    /**
     * useMutableSource() enables React components to safely and efficiently read from a mutable external source in Concurrent Mode.
     * The API will detect mutations that occur during a render to avoid tearing
     * and it will automatically schedule updates when the source is mutated.
     * @param MutableSource
     * @param getSnapshot
     * @param subscribe
     *
     * @see https://github.com/reactjs/rfcs/blob/master/text/0147-use-mutable-source.md
     */
    export function unstable_useMutableSource<T, TResult extends unknown>(MutableSource: MutableSource<T>, getSnapshot: (source: T) => TResult, subscribe: MutableSourceSubscribe<T>): TResult;
}
