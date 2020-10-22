// Type definitions for react-lazyload ver 3.0
// Project: https://github.com/jasonslyvia/react-lazyload
// Definitions by: m0a <https://github.com/m0a>
//                 svobik7 <https://github.com/svobik7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from "react";

export interface LazyLoadProps {
    once?: boolean;
    height?: number | string;
    offset?: number | number[];
    overflow?: boolean;
    resize?: boolean;
    scroll?: boolean;
    children?: ReactNode;
    throttle?: number | boolean;
    debounce?: number | boolean;
    placeholder?: ReactNode;
    scrollContainer?: string | Element;
    unmountIfInvisible?: boolean;
    preventLoading?: boolean;
    classNamePrefix?: string;
}

export default class LazyLoad extends Component<LazyLoadProps> {
    constructor(props: LazyLoad);
}

export function lazyload(option: {}): LazyLoad;

export function forceCheck(): void;

export function forceVisible(): void;
