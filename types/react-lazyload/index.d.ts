import { Component, CSSProperties, ReactNode } from "react";

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
