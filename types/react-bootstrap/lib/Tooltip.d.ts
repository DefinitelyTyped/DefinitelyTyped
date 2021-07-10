import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Tooltip {
    export interface TooltipProps extends React.HTMLProps<Tooltip> {
        // Optional
        arrowOffsetLeft?: number | string | undefined;
        arrowOffsetTop?: number | string | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        placement?: string | undefined;
        positionLeft?: number | undefined;
        positionTop?: number | undefined;
    }
}
declare class Tooltip extends React.Component<Tooltip.TooltipProps> { }
export = Tooltip;
