import * as React from 'react';
import { Sizes, Omit } from 'react-bootstrap';

declare namespace Popover {
    export interface PopoverProps extends Omit<React.HTMLProps<Popover>, "title"> {
        // Optional
        arrowOffsetLeft?: number | string | undefined;
        arrowOffsetTop?: number | string | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        placement?: string | undefined;
        positionLeft?: number | string | undefined; // String support added since v0.30.0
        positionTop?: number | string | undefined; // String support added since v0.30.0
        title?: React.ReactNode | undefined;
    }
}
declare class Popover extends React.Component<Popover.PopoverProps> { }
export = Popover;
