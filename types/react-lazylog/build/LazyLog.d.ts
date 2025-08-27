import { Range } from "immutable";
import { Component, CSSProperties, ReactNode } from "react";

export interface WebsocketOptions {
    onOpen?: ((e: Event, socket: WebSocket) => void) | undefined;
    onClose?: ((e: CloseEvent) => void) | undefined;
    onError?: ((e: Event) => void) | undefined;
    formatMessage?: ((message: any) => string) | undefined;
}

export interface LazyLogProps {
    caseInsensitive?: boolean | undefined;
    containerStyle?: CSSProperties | undefined;
    enableSearch?: boolean | undefined;
    extraLines?: number | undefined;
    fetchOptions?: RequestInit | undefined;
    follow?: boolean | undefined;
    formatPart?: ((text: string) => ReactNode) | undefined;
    height?: string | number | undefined;
    highlight?: number | number[] | undefined;
    highlightLineClassName?: string | undefined;
    lineClassName?: string | undefined;
    loadingComponent?: any;
    onError?: ((error: any) => any) | undefined;
    onHighlight?: ((range: Range) => any) | undefined;
    onLoad?: (() => any) | undefined;
    overscanRowCount?: number | undefined;
    rowHeight?: number | undefined;
    scrollToLine?: number | undefined;
    selectableLines?: boolean | undefined;
    stream?: boolean | undefined;
    style?: CSSProperties | undefined;
    text?: string | undefined;
    url: string;
    websocket?: boolean | undefined;
    websocketOptions?: WebsocketOptions | undefined;
    width?: string | number | undefined;
}

export class LazyLog extends Component<LazyLogProps> {
    static defaultProps: Partial<LazyLogProps>;
}

export default LazyLog;
