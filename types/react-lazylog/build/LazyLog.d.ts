import { Component, ReactNode } from "react";
import * as ReactDOM from "react-dom";
import { Range } from "immutable";

export interface LazyLogProps {
    url: string;
    fetchOptions?: RequestInit;
    stream?: boolean;
    height?: string | number;
    width?: string | number;
    follow?: boolean;
    scrollToLine?: number;
    highlight?: number | number[];
    selectableLines?: boolean;
    formatPart?: (text: string) => ReactNode;
    onLoad?: () => any;
    onError?: (error: any) => any;
    onHighlight?: (range: Range) => any;
    rowHeight?: number;
    overscanRowCount?: number;
    containerStyle?: ReactDOM.CSSProperties;
    style?: ReactDOM.CSSProperties;
}

export class LazyLog extends Component<LazyLogProps> {
    static defaultProps: Partial<LazyLogProps>;
}

export default LazyLog;
