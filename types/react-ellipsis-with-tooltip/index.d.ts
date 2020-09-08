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

// eslint-disable-next-line react/prefer-stateless-function
declare class EllipsisWithTooltip extends React.Component<EllipsisWithTooltipProps> {}

export default EllipsisWithTooltip;
