// NOTE: Users of the React 18 alpha should add a reference
// to 'react-is/next' in their project. See next.d.ts's top comment
// for reference and documentation on how exactly to do it.

export as namespace ReactIs;

import { ElementType, LazyExoticComponent, MemoExoticComponent, ReactElement } from "react";

export function typeOf(value: any): symbol | undefined;
export function isValidElementType(value: any): value is ElementType;
/**
 * @deprecated
 */
export function isAsyncMode(value: any): value is ReactElement;
export function isContextConsumer(value: any): value is ReactElement;
export function isContextProvider(value: any): value is ReactElement;
export function isElement(value: any): value is ReactElement;
export function isForwardRef(value: any): value is ReactElement;
export function isFragment(value: any): value is ReactElement;
export function isLazy(value: any): value is LazyExoticComponent<any>;
export function isMemo(value: any): value is MemoExoticComponent<any>;
export function isProfiler(value: any): value is ReactElement;
export function isPortal(value: any): value is ReactElement;
export function isStrictMode(value: any): value is ReactElement;
export function isSuspense(value: any): value is ReactElement;

/**
 * @deprecated
 */
export const AsyncMode: symbol;
export const ContextConsumer: symbol;
export const ContextProvider: symbol;
export const Element: symbol;
export const ForwardRef: symbol;
export const Fragment: symbol;
export const Lazy: symbol;
export const Memo: symbol;
export const Portal: symbol;
export const Profiler: symbol;
export const StrictMode: symbol;
export const Suspense: symbol;
