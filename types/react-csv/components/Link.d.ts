import { Component } from "react";
import { CommonPropTypes } from "./CommonPropTypes";

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface LinkProps extends
    CommonPropTypes,
    Omit<
        React.DetailedHTMLProps<
            React.AnchorHTMLAttributes<HTMLAnchorElement>,
            HTMLAnchorElement
        >,
        "onClick"
    >
{}
export default class Link extends Component<LinkProps> {}
