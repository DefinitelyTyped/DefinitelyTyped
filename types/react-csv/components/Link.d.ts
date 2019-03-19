import { Component } from "react";
import { CommonPropTypes } from "./CommonPropTypes";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface LinkProps
    extends CommonPropTypes,
        Omit<
            React.DetailedHTMLProps<
                React.AnchorHTMLAttributes<HTMLAnchorElement>,
                HTMLAnchorElement
            >,
            "onClick"
        > {}
export default class Link extends Component<LinkProps> {}
