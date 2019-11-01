// Type definitions for @testing-library/react-hooks 3.1
// Project: https://github.com/testing-library/react-hooks-testing-library
// Definitions by: Michael Peyper <https://github.com/mpeyper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { ComponentType } from 'react';
export { act } from 'react-test-renderer';

export interface RenderHookOptions<P> {
    initialProps?: P;
    wrapper?: React.ComponentType;
}

export interface HookResult<R> {
    readonly current: R;
    readonly error: Error;
}

export interface RenderHookResult<P, R> {
    readonly result: HookResult<R>;
    readonly waitForNextUpdate: () => Promise<void>;
    readonly unmount: () => boolean;
    readonly rerender: (newProps?: P) => void;
}

/**
 * Renders a test component that will call the provided `callback`, including any hooks it calls, every time it renders.
 */
export function renderHook<P, R>(callback: (props: P) => R, options?: RenderHookOptions<P>): RenderHookResult<P, R>;

/**
 * Unmounts any rendered hooks rendered with `renderHook`, ensuring all effects have been flushed.
 */
export function cleanup(): Promise<void>;
