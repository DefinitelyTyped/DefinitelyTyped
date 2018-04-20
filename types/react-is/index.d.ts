// Type definitions for react-is 16.3
// Project: https://reactjs.org/
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ReactIs;

import { ComponentClass, ReactElement, SFC } from 'react';

export function typeOf(value: any): symbol | undefined;
export function isValidElementType<P = {}>(value: any): value is string | ComponentClass<P> | SFC<P>;

export function isContextConsumer<P = {}>(value: any): value is ReactElement<P>;
export function isContextProvider<P = {}>(value: any): value is ReactElement<P>;
export function isElement<P = {}>(value: any): value is ReactElement<P>;
export function isFragment<P = {}>(value: any): value is ReactElement<P>;
export function isPortal<P = {}>(value: any): value is ReactElement<P>;
export function isStrictMode<P = {}>(value: any): value is ReactElement<P>;

export const ContextProvider: symbol;
export const ContextConsumer: symbol;
export const Element: symbol;
export const Fragment: symbol;
export const Portal: symbol;
export const StrictMode: symbol;
