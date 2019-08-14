// Type definitions for react-collapse 4.0
// Project: https://github.com/nkbt/react-collapse
// Definitions by: Adam Binford <https://github.com/Kimahriman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

export interface CollapseProps extends React.HTMLProps<Collapse> {
    isOpened: boolean;
    children: React.ReactNode;

    springConfig?: { [key: string]: number }; // react-motion doesn't export the config interface
    forceInitialAnimation?: boolean;
    hasNestedCollapse?: boolean;
    fixedHeight?: number;
    theme?: {
        collapse: string
        content: string
    };
    style?: React.CSSProperties;
    onRender?: ({ current, from, to }: { current: number; from: number; to: number; }) => void;
    onRest?: () => void;
    onMeasure?: ({ width, height }: { width: number; height: number; }) => void;
}

export class Collapse extends React.PureComponent<CollapseProps> { }

export class UnmountClosed extends React.PureComponent<CollapseProps> { }
