import { Component, CSSProperties, ReactNode } from "react";

export interface LineContentProps {
    data: Array<{ text: string }>;
    number: number;
    formatPart?: ((text: string) => ReactNode) | undefined;
    style?: CSSProperties | undefined;
}

export default class LineContent extends Component<LineContentProps> {
    static defaultProps: Partial<LineContentProps>;
}
