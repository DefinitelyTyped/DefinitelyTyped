// Type definitions for react-native-collapsible 0.8
// Project: https://github.com/oblador/react-native-collapsible
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type EasingMode =
'linear' |
'easeInQuad' |
'easeOutQuad' |
'easeInOutQuad' |
'easeInCubic' |
'easeOutCubic' |
'easeInOutCubic' |
'easeInQuart' |
'easeOutQuart' |
'easeInOutQuart' |
'easeInQuint' |
'easeOutQuint' |
'easeInOutQuint' |
'easeInSine' |
'easeOutSine' |
'easeInOutSine' |
'easeInExpo' |
'easeOutExpo' |
'easeInOutExpo' |
'easeInCirc' |
'easeOutCirc' |
'easeInOutCirc' |
'easeInElastic' |
'easeOutElastic' |
'easeInOutElastic' |
'easeInBack' |
'easeOutBack' |
'easeInOutBack' |
'easeInBounce' |
'easeOutBounce' |
'easeInOutBounce';

export interface CollapsibleProps {
    /**
     * Alignment of the content when transitioning, can be top, center or bottom
     *
     * @default top
     */
    align?: 'top' | 'center' | 'bottom';

    /**
     * Whether to show the child components or not
     *
     * @default true
     */
    collapsed?: boolean;

    /**
     * Which height should the component collapse to
     *
     * @default 0
     */
    collapsedHeight?: number;

    /**
     * Duration of transition in milliseconds
     *
     * @default 300
     */
    duration?: number;

    /**
     * Function or function name from Easing (or tween-functions if < RN 0.8). Collapsible will try to combine Easing functions for you if you name them like tween-functions
     *
     * @default easeOutCubic
     */
    easing?: EasingMode | any;
}

export default class Collapsible extends React.Component<CollapsibleProps, any> {}
