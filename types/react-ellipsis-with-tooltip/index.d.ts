// Type definitions for react-ellipsis-with-tooltip 1.1
// Project: https://github.com/amirfefer/react-ellipsis-with-tooltip
// Definitions by: Piotr Bender <https://github.com/SIN3d73>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
import * as React from 'react';

export interface EllipsisWithTooltipProps {
    placement?: 'auto-start'
        | 'auto'
        | 'auto-end'
        | 'top-start'
        | 'top'
        | 'top-end'
        | 'right-start'
        | 'right'
        | 'right-end'
        | 'bottom-end'
        | 'bottom'
        | 'bottom-start'
        | 'left-end'
        | 'left'
        | 'left-start';
    style?: React.CSSProperties;
    delayShow?: number;
    delayHide?: number;
    children: React.ReactNode;
}

declare class EllipsisWithTooltip extends React.Component<EllipsisWithTooltipProps> {}

export default EllipsisWithTooltip;
