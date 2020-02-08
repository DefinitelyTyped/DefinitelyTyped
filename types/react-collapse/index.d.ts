// Type definitions for react-collapse 5.0
// Project: https://github.com/nkbt/react-collapse
// Definitions by:  Adam Binford <https://github.com/Kimahriman>
//                  Kristofer Giltvedt Selbekk <https://github.com/selbekk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

export interface CollapseCallbackArgs {
    /** `true` only when Collapse reached final height */
    isFullyOpened: boolean;
    /** `true` only when Collapse is fully closed and height is zero */
    isFullyClosed: boolean;
    /** `true` if Collapse has any non-zero height */
    isOpened: boolean;
    /** current pixel height of Collapse container (changes until reaches `contentHeight`) */
    containerHeight: number;
    /** determined height of supplied Content */
    contentHeight: number;
}

export interface CollapseProps extends React.HTMLProps<Collapse> {
    /** Expands or collapses content. */
    isOpened: boolean;
    /** One or multiple children with static, variable or dynamic height. */
    children: React.ReactNode;
    /** It is possible to set className for extra div elements that ReactCollapse creates. */
    theme?: {
        collapse?: string;
        content?: string;
    };
    /** Callback function triggered when animation has completed */
    onRest?: (args: CollapseCallbackArgs) => void;
    /** Callback function triggered when animation begins */
    onWork?: (args: CollapseCallbackArgs) => void;
    /** A way to control the initial element style. Will not be valid after the initial render */
    initialStyle?: {
        height?: string | number;
        overflow?: string;
    };
    /** How often (in ms) the height of the content is checked. */
    checkTimeout?: number;
}

export class Collapse extends React.PureComponent<CollapseProps> {}

export class UnmountClosed extends React.PureComponent<CollapseProps> {}
