import { Component, ReactNode, CSSProperties } from "react";
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
    containerStyle?: CSSProperties;
    style?: CSSProperties;
}

export class LazyLog extends Component<LazyLogProps> {
    static defaultProps: Partial<LazyLogProps>;
}

export default LazyLog;
