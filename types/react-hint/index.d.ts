import * as React from "react";

export interface ReactHintProps {
    attribute?: string;
    autoPosition?: boolean;
    className?: string;
    delay?: number | { show: number, hide: number };
    events?: boolean | { click: boolean, focus: boolean, hover: boolean };
    onRenderContent?: React.ReactNode;
    persist?: boolean;
    position?: 'top' | 'left' | 'right' | 'bottom';
    ref?(ref: React.FunctionComponent<ReactHintProps>): void;
}

export default function ReactHintFactory(react: typeof React): React.FunctionComponent<ReactHintProps>;
