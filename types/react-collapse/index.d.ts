import * as React from "react";

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
        collapse?: string | undefined;
        content?: string | undefined;
    } | undefined;
    /** Callback function triggered when animation has completed */
    onRest?: ((args: CollapseCallbackArgs) => void) | undefined;
    /** Callback function triggered when animation begins */
    onWork?: ((args: CollapseCallbackArgs) => void) | undefined;
    /** A way to control the initial element style. Will not be valid after the initial render */
    initialStyle?: {
        height?: string | number | undefined;
        overflow?: string | undefined;
    } | undefined;
    /** How often (in ms) the height of the content is checked. */
    checkTimeout?: number | undefined;
}

export class Collapse extends React.PureComponent<CollapseProps> {}

export class UnmountClosed extends React.PureComponent<CollapseProps> {}
