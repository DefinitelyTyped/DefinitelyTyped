// Type definitions for react-hint 3.2
// Project: https://github.com/slmgc/react-hint
// Definitions by: Lucas Ghizoni <https://github.com/lucasghizoni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface ReactHintProps {
    attribute?: string;
    autoPosition?: boolean;
    className?: string;
    delay?: number | { show: number, hide: number };
    events?: boolean | { click: boolean, focus: boolean, hover: boolean };
    onRenderContent?: (target: HTMLElement, content: any) => React.ReactNode;
    persist?: boolean;
    position?: 'top' | 'left' | 'right' | 'bottom';
    ref?(ref: React.ComponentClass<ReactHintProps, any>): void;
}

export default function ReactHintFactory(react: typeof React): React.ComponentClass<ReactHintProps, any>;
