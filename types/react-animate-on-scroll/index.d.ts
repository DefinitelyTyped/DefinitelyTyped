// Type definitions for react-animate-on-scroll 2.1
// Project: https://github.com/dbramwell/react-animate-on-scroll, http://dbramwell.github.io/react-animate-on-scroll
// Definitions by: Ricardo Albuquerque <https://github.com/ralbuque>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ScrollAnimationProps {
    animateIn?: string | undefined;
    animateOut?: string | undefined;
    offset?: number | undefined;
    duration?: number | undefined;
    delay?: number | undefined;
    initiallyVisible?: boolean | undefined;
    animateOnce?: boolean | undefined;
    style?: object | undefined;
    scrollableParentSelector?: string | undefined;
    className?: string | undefined;
}

export default class ScrollAnimation extends React.Component<ScrollAnimationProps> {
    constructor(props: ScrollAnimationProps);
}
