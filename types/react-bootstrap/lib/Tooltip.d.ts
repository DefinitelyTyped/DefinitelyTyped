import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Tooltip extends React.Component<TooltipProps> { }
declare namespace Tooltip { }
export = Tooltip

interface TooltipProps extends React.HTMLProps<Tooltip> {
  // Optional
  arrowOffsetLeft?: number | string;
  arrowOffsetTop?: number | string;
  bsSize?: Sizes;
  bsStyle?: string;
  placement?: string;
  positionLeft?: number;
  positionTop?: number;
}
