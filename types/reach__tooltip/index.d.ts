// Type definitions for @reach/tooltip 0.2
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

import * as React from 'react';

export interface TriggerParams {
    "aria-describedby": string;
    "data-reach-tooltip-trigger": string;
    ref: React.Ref<any>;
    onMouseEnter: React.ReactEventHandler;
    onMouseMove: React.ReactEventHandler;
    onFocus: React.ReactEventHandler;
    onBlur: React.ReactEventHandler;
    onMouseLeave: React.ReactEventHandler;
    onKeyDown: React.ReactEventHandler;
    onMouseDown: React.ReactEventHandler;
}

export interface TooltipParams {
    id: string;
    triggerRect: DOMRect;
    isVisible: boolean;
}

export function useTooltip(attrs?: React.HTMLProps<any>): [TriggerParams, TooltipParams, boolean];

export interface BaseTooltipProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
    ariaLabel?: string;
    position?: (position1: DOMRect, position2: DOMRect) => DOMRect;
    label: React.ReactNode;
}

export interface TooltipProps extends BaseTooltipProps {
    children: React.ReactNode;
}

export interface TooltipPopupProps extends BaseTooltipProps {
    children?: React.ReactNode;
}

declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;

export const TooltipPopup: React.FC<TooltipPopupProps>;
export const TooltipContent: React.FC<BaseTooltipProps>;
