import * as React from 'react';
import Card from './Card';

declare class Tooltip extends React.Component<TooltipProps> {}

export default Tooltip;

export interface TooltipProps extends Card.CardProps {
    parent: string | JSX.Element | React.RefObject<unknown>;
    active?: boolean;
    group?: string;
    tooltipTimeout?: number;
}
