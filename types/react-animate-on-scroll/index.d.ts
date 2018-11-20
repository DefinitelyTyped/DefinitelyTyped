// Type definitions for react-animate-on-scroll 2.1
// Project: https://github.com/dbramwell/react-animate-on-scroll
// Definitions by: Ricardo Albuquerque <https://github.com/ralbuque>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ScrollAnimationProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    duration?: number;
    delay?: number;
    initiallyVisible?: boolean;
    animateOnce?: boolean;
    style?: object;
    scrollableParentSelector?: string;
    className?: string;
}

export default class ScrollAnimation extends React.Component<ScrollAnimationProps> {
    constructor(props: ScrollAnimationProps);
}
