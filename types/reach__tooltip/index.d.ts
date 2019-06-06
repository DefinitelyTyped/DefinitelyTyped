// Type definitions for @reach/alert 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Setsun <https://github.com/setsun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

type TriggerState = {
  'aria-describedby': string;
  'data-reach-tooltip-trigger': string;
  ref: React.Ref<any>;
  onMouseEnter: Function;
  onMouseMove: Function;
  onFocus: Function;
  onBlur: Function;
  onMouseLeave: Function;
  onKeyDown: Function;
  onMouseDown: Function;
};

type TooltipState = {
  id: string;
  triggerRect: ClientRect;
  isVisible: boolean;
};

type isVisible = boolean;

export const useTooltip: (tooltipConfig: {
  onMouseEnter?: Function;
  onMouseMove?: Function;
  onMouseLeave?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onKeyDown?: Function;
  onMouseDown?: Function;
  ref?: React.Ref<any>;
  DEBUG_STYLE?: React.CSSProperties;
}) => [
  TriggerState,
  TooltipState,
  isVisible
];

type TooltipPopupProps = {
  // own props
  label: React.ReactNode;
  ariaLabel?: string;
  position?: (
    triggerRect: ClientRect,
    tooltipRect: ClientRect
  ) => any;

  style?: React.CSSProperties;

  // hook spread props
  isVisible?: boolean;
  id?: string;
  triggerRect?: ClientRect;
};

export const TooltipPopup: React.ComponentType<TooltipPopupProps>

type TooltipProps = {
  children: React.ReactNode;
  label: React.ReactNode;
  ariaLabel?: string;
}

declare const Tooltip: React.ComponentType<TooltipProps>

export default Tooltip;
