import * as React from "react";

export interface ReactHintProps {
    attribute?: string;
    autoPosition?: boolean;
    className?: string;
    delay?: number | { show: number; hide: number };
    events?: boolean | { click: boolean; focus: boolean; hover: boolean };
    onRenderContent?: (target: HTMLElement, content: any) => React.ReactNode;
    persist?: boolean;
    position?: "top" | "left" | "right" | "bottom";
    ref?(ref: React.ComponentClass<ReactHintProps, any>): void;
}

export default function ReactHintFactory(react: typeof React): React.ComponentClass<ReactHintProps, any>;
