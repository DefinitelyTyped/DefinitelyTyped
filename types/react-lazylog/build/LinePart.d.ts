import { Component, ReactNode, CSSProperties } from "react";

export interface LinePartProps {
    part: { text: string };
    format?: (text: string) => ReactNode;
    style?: CSSProperties;
}

export default class LinePart extends Component<LinePartProps> {
    static defaultProps: Partial<LinePartProps>;
}
