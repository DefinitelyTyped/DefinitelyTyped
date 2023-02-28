// Type definitions for react-lazyload ver 3.2
// Project: https://github.com/jasonslyvia/react-lazyload
// Definitions by: m0a <https://github.com/m0a>
//                 svobik7 <https://github.com/svobik7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode, CSSProperties } from 'react';

export interface LazyLoadProps {
    once?: boolean | undefined;
    height?: number | string | undefined;
    offset?: number | number[] | undefined;
    overflow?: boolean | undefined;
    resize?: boolean | undefined;
    scroll?: boolean | undefined;
    children?: ReactNode | undefined;
    throttle?: number | boolean | undefined;
    debounce?: number | boolean | undefined;
    placeholder?: ReactNode | undefined;
    scrollContainer?: string | Element | undefined;
    unmountIfInvisible?: boolean | undefined;
    preventLoading?: boolean | undefined;
    className?: string | undefined;
    classNamePrefix?: string | undefined;
    style?: CSSProperties | undefined;
}

export default class LazyLoad extends Component<LazyLoadProps> {
    constructor(props: LazyLoad);
}

export function lazyload(option: {}): LazyLoad;

export function forceCheck(): void;

export function forceVisible(): void;
