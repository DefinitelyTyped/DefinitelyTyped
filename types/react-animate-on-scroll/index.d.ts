import * as React from "react";

export interface ScrollAnimationProps {
    animateIn?: string | undefined;
    animateOut?: string | undefined;
    children?: React.ReactNode;
    offset?: number | undefined;
    duration?: number | undefined;
    delay?: number | undefined;
    initiallyVisible?: boolean | undefined;
    animateOnce?: boolean | undefined;
    style?: object | undefined;
    scrollableParentSelector?: string | undefined;
    className?: string | undefined;
    animatePreScroll?: boolean | undefined;
    afterAnimatedOut?: (visibile: VisibleType) => {} | undefined;
    afterAnimatedIn?: (visibile: VisibleType) => {} | undefined;
}

export interface VisibleType {
    inViewport: boolean;
    onScreen: boolean;
}

export default class ScrollAnimation extends React.Component<ScrollAnimationProps> {
    constructor(props: ScrollAnimationProps);
}
