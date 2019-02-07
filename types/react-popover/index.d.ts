// Type definitions for react-popover 0.5
// Project: https://github.com/littlebits/react-popover
// Definitions by: Jakub Řičař <https://github.com/jacoporicare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = Popover;

declare class Popover extends React.Component<Popover.PopoverProps> {}

declare namespace Popover {
    type PopoverPlace =
        | 'above'
        | 'right'
        | 'below'
        | 'left'
        | 'row'
        | 'column'
        | 'start'
        | 'end';

    interface PopoverProps {
        body: React.ReactNode;
        isOpen?: boolean;
        preferPlace?: PopoverPlace;
        place?: PopoverPlace;
        onOuterAction?: (event: Event) => void;
        refreshIntervalMs?: number;
        enterExitTransitionDurationMs?: number;
        tipSize?: number;
        className?: string;
        style?: React.CSSProperties;
        target?: React.ReactElement<any>;
        appendTarget?: Element;
    }
}
