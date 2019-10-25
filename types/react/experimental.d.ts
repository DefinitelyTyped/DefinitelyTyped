/**
 * These are types for things that are present in the `experimental` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/experimental"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/experimental'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/experimental" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with `__EXPERIMENTAL__`.

import React = require('.');

export {};

declare module '.' {
    export type SuspenseListRevealOrder = 'forwards' | 'backwards' | 'together';
    export type SuspenseListTailMode = 'collapsed' | 'hidden';

    export interface SuspenseListCommonProps {
        children?: Iterable<ReactElement>;
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        revealOrder: 'forwards' | 'backwards';
        tail?: SuspenseListTailMode;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        revealOrder?: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps['revealOrder']>;
        tail?: never;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    export const SuspenseList: ExoticComponent<SuspenseListProps>;

    export interface SuspenseConfig {
        timeoutMs: number;
        busyDelayMs?: number;
        busyMinDurationMs?: number;
    }

    export function unstable_withSuspenseConfig(
        scope: () => void | undefined,
        config: SuspenseConfig | null | undefined,
    ): void;

    export interface TimeoutConfig {
        timeoutMs: number;
    }

    // must be synchronous
    export type TransitionFunction = () => void | undefined;
    export type TransitionStartFunction = (callback: TransitionFunction) => void;

    export function useDeferredValue<T extends (...args: any[]) => any>(
        value: T,
        config?: TimeoutConfig | null,
    ): ReturnType<T>;
    // if it's constructible but not callable, it will _crash_ at runtime
    export function useDeferredValue<T extends new (...args: any[]) => any>(
        value: T,
        config?: TimeoutConfig | null,
    ): never;
    export function useDeferredValue<T>(value: T, config?: TimeoutConfig | null): T;
    export function useTransition(config?: SuspenseConfig | null): [TransitionStartFunction, boolean];
}
