import { Component, CSSProperties, ReactNode } from "react";

export interface LinePartProps {
    part: { text: string };
    format?: ((text: string) => ReactNode) | undefined;
    style?: CSSProperties | undefined;
}

export default class LinePart extends Component<LinePartProps> {
    static defaultProps: Partial<LinePartProps>;
}
