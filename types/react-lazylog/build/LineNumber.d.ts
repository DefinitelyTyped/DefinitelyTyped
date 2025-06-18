import { Component, CSSProperties, MouseEventHandler, ReactNode } from "react";

export interface LineNumberProps {
    number: number;
    highlight?: boolean | undefined;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    style?: CSSProperties | undefined;
}

export default class LinePart extends Component<LineNumberProps> {
    static defaultProps: Partial<LineNumberProps>;
}
