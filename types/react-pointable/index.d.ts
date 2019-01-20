// Type definitions for react-pointable 1.2
// Project: https://github.com/MilllerTime/react-pointable
// Definitions by: Stefan Fochler <https://github.com/istefo>
//                 Dibyo Majumdar <https://github.com/mdibyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export type TouchAction = 'auto' | 'none' | 'pan-x' | 'pan-y' | 'manipulation';

export interface PointableProps extends ReactDOM.HTMLAttributes<Element>, ReactDOM.SVGAttributes<Element> {
    tagName?: keyof ElementTagNameMap;
    touchAction?: TouchAction;
    elementRef?(el: HTMLElement|SVGElement): void;
}

export default class Pointable extends React.Component<PointableProps> {
    static defaultProps: {
        tagName: 'div',
        touchAction: 'auto'
    };
}
