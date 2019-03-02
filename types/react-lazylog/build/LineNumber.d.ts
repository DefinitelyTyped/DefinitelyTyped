import { Component, ReactNode, CSSProperties, MouseEventHandler } from "react";

export interface LineNumberProps {
    number: number;
    highlight?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    style?: CSSProperties;
}

export default class LinePart extends Component<LineNumberProps> {
    static defaultProps: Partial<LineNumberProps>;
}
