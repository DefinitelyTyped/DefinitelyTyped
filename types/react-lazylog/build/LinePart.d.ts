import { Component, ReactNode } from "react";
import * as ReactDOM from "react-dom";

export interface LinePartProps {
    part: { text: string };
    format?: (text: string) => ReactNode;
    style?: ReactDOM.CSSProperties;
}

export default class LinePart extends Component<LinePartProps> {
    static defaultProps: Partial<LinePartProps>;
}
