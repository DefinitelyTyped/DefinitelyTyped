import { Component, ReactNode } from "react";
import * as ReactDOM from "react-dom";

export interface LineProps {
    data: Array<{ text: string }>;
    number: number;
    rowHeight: number;
    highlight?: boolean;
    selectable?: boolean;
    style?: ReactDOM.CSSProperties;
    formatPart?: (text: string) => ReactNode;
    onLineNumberClick?: ReactDOM.MouseEventHandler<HTMLAnchorElement>;

    /**
     * This is never called
     * https://github.com/mozilla-frontend-infra/react-lazylog/issues/18
     */
    onRowClick?: () => any;
}

export default class Line extends Component<LineProps> {
    static defaultProps: Partial<LineProps>;
}
