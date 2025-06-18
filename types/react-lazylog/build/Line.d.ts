import { Component, CSSProperties, MouseEventHandler, ReactNode } from "react";

export interface LineProps {
    data: Array<{ text: string }>;
    number: number;
    rowHeight: number;
    highlight?: boolean | undefined;
    selectable?: boolean | undefined;
    style?: CSSProperties | undefined;
    formatPart?: ((text: string) => ReactNode) | undefined;
    onLineNumberClick?: MouseEventHandler<HTMLAnchorElement> | undefined;

    /**
     * This is never called
     * https://github.com/mozilla-frontend-infra/react-lazylog/issues/18
     */
    onRowClick?: (() => any) | undefined;
}

export default class Line extends Component<LineProps> {
    static defaultProps: Partial<LineProps>;
}
