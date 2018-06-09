import { Component, ReactNode, CSSProperties } from "react";

export interface LineContentProps {
    data: { text: string }[];
    number: number;
    formatPart?: (text: string) => ReactNode;
    style?: CSSProperties;
}

export default class LineContent extends Component<LineContentProps> {
    static defaultProps: Partial<LineContentProps>;
}
