import { ElementType, ReactElement } from "react";
export {};

// extracted from:
// - https://github.com/facebook/react/blob/v18.0.0/packages/react-test-renderer/index.js
// - https://reactjs.org/docs/test-renderer.html

/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export interface ReactTestRendererJSON {
    type: string;
    props: { [propName: string]: any };
    children: null | ReactTestRendererNode[];
}
/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export type ReactTestRendererNode = ReactTestRendererJSON | string;
/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export interface ReactTestRendererTree extends ReactTestRendererJSON {
    nodeType: "component" | "host";
    instance: any;
    rendered: null | ReactTestRendererTree | ReactTestRendererTree[];
}
/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export interface ReactTestInstance {
    instance: any;
    type: ElementType;
    props: { [propName: string]: any };
    parent: null | ReactTestInstance;
    children: Array<ReactTestInstance | string>;

    find(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance;
    findByType(type: ElementType): ReactTestInstance;
    findByProps(props: { [propName: string]: any }): ReactTestInstance;

    findAll(predicate: (node: ReactTestInstance) => boolean, options?: { deep: boolean }): ReactTestInstance[];
    findAllByType(type: ElementType, options?: { deep: boolean }): ReactTestInstance[];
    findAllByProps(props: { [propName: string]: any }, options?: { deep: boolean }): ReactTestInstance[];
}
/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export interface ReactTestRenderer {
    toJSON(): null | ReactTestRendererJSON | ReactTestRendererJSON[];
    toTree(): null | ReactTestRendererTree;
    unmount(nextElement?: ReactElement): void;
    update(nextElement: ReactElement): void;
    getInstance(): null | ReactTestInstance;
    root: ReactTestInstance;
}
/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export interface TestRendererOptions {
    createNodeMock(element: ReactElement): any;
}

/**
 * @deprecated See https://react.dev/warnings/react-test-renderer
 */
export function create(nextElement: ReactElement, options?: TestRendererOptions): ReactTestRenderer;

// VoidOrUndefinedOnly is here to forbid any sneaky "Promise" returns.
// the actual return value is always a "DebugPromiseLike".
declare const UNDEFINED_VOID_ONLY: unique symbol;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };
/**
 * @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer.
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback An asynchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 * @deprecated See https://react.dev/warnings/react-test-renderer
 */
// VoidOrUndefinedOnly is here to forbid any sneaky return values
export function act(callback: () => Promise<VoidOrUndefinedOnly>): Promise<undefined>;
/**
 * @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer.
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback A synchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 * @deprecated See https://react.dev/warnings/react-test-renderer
 */
export function act(callback: () => VoidOrUndefinedOnly): DebugPromiseLike;

// Intentionally doesn't extend PromiseLike<never>.
// Ideally this should be as hard to accidentally use as possible.
/** @deprecated react-test-renderer is deprecated. See https://react.dev/warnings/react-test-renderer. */
export interface DebugPromiseLike {
    // the actual then() in here is 1-ary, but that doesn't count as a PromiseLike.
    then(onfulfilled: (value: never) => never, onrejected: (reason: never) => never): never;
}
