import { Component, ReactNode } from "react";
import * as ReactDOM from "react-dom";

export interface LineContentProps {
    data: Array<{ text: string }>;
    number: number;
    formatPart?: (text: string) => ReactNode;
    style?: ReactDOM.CSSProperties;
}

export default class LineContent extends Component<LineContentProps> {
    static defaultProps: Partial<LineContentProps>;
}
