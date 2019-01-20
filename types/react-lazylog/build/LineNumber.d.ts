import { Component, ReactNode } from "react";
import * as ReactDOM from "react-dom";

export interface LineNumberProps {
    number: number;
    highlight?: boolean;
    onClick?: ReactDOM.MouseEventHandler<HTMLAnchorElement>;
    style?: ReactDOM.CSSProperties;
}

export default class LinePart extends Component<LineNumberProps> {
    static defaultProps: Partial<LineNumberProps>;
}
