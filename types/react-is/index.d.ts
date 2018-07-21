// Type definitions for react-is 16.3
// Project: https://reactjs.org/
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace ReactIs;

import { ReactElement, ReactType } from 'react';

export function typeOf(value: any): symbol | undefined;
export function isValidElementType(value: any): value is ReactType;

export function isContextConsumer(value: any): value is ReactElement<any>;
export function isContextProvider(value: any): value is ReactElement<any>;
export function isElement(value: any): value is ReactElement<any>;
export function isFragment(value: any): value is ReactElement<any>;
export function isPortal(value: any): value is ReactElement<any>;
export function isStrictMode(value: any): value is ReactElement<any>;

export const ContextProvider: symbol;
export const ContextConsumer: symbol;
export const Element: symbol;
export const Fragment: symbol;
export const Portal: symbol;
export const StrictMode: symbol;
