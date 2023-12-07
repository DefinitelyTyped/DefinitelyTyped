// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react-dom/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

export as namespace ReactDOM;

import { ReactNode, ReactPortal } from "react";

export function createPortal(
    children: ReactNode,
    container: Element | DocumentFragment,
    key?: null | string,
): ReactPortal;

export const version: string;

export function flushSync<R>(fn: () => R): R;

export function unstable_batchedUpdates<A, R>(callback: (a: A) => R, a: A): R;
export function unstable_batchedUpdates<R>(callback: () => R): R;
