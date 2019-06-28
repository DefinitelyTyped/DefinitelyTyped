/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';
import { NormalizedOffsets, PopperDataObject, TetherPlacement } from '../layer';

export interface ACCESSIBILITY_TYPE {
  none: 'none';
  menu: 'menu';
  tooltip: 'tooltip';
}
export interface PLACEMENT {
  auto: 'auto';
  topLeft: 'topLeft';
  top: 'top';
  topRight: 'topRight';
  rightTop: 'rightTop';
  right: 'right';
  rightBottom: 'rightBottom';
  bottomRight: 'bottomRight';
  bottom: 'bottom';
  bottomLeft: 'bottomLeft';
  leftBottom: 'leftBottom';
  left: 'left';
  leftTop: 'leftTop';
}
export interface TRIGGER_TYPE {
  click: 'click';
  hover: 'hover';
}
export interface STATE_CHANGE_TYPE {
  open: 'open';
  close: 'close';
}
export type ANIMATE_IN_TIME = 20;
export type ANIMATE_OUT_TIME = 0;

export type StateReducer = (
  stateChangeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
  nextState: State,
  currentState: State,
) => State;

export type StatefulPopoverProps = BasePopoverProps & {
  children?: React.ReactNode;
  content?: React.ReactNode | ((args: { close: () => void }) => React.ReactNode);
  dismissOnClickOutside?: boolean;
  dismissOnEsc?: boolean;
  initialState?: State;
  onClose?: () => any;
  onOpen?: () => any;
  stateReducer?: StateReducer;
};
export const StatefulPopover: React.FC<StatefulPopoverProps>;

export type StatefulPopoverContainerProps = StatefulPopoverProps & { children: (props: PopoverProps & { children: never }) => React.ReactNode };
export interface State {
  isOpen: boolean;
}
export class StatefulContainer extends React.Component<StatefulPopoverContainerProps, State> {
  onBlur(): void;
  onClick(): void;
  onClickOutside(): void;
  onEsc(): void;
  onFocus(): void;
  onMouseEnter(): void;
  onMouseLeave(): void;
  onContentClose(): void;
  open(): void;
  close(): void;
  internalSetState(type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE], changes: State): void;
}

export interface SharedStylePropsArg {
  $arrowOffset?: Offset;
  $isAnimating?: boolean;
  $isOpen?: boolean;
  $popoverOffset?: Offset;
  $placement?: TetherPlacement[keyof TetherPlacement];
  $showArrow?: boolean;
}
export interface Overrides {
  Body?: Override<SharedStylePropsArg>;
  Arrow?: Override<SharedStylePropsArg>;
  Inner?: Override<SharedStylePropsArg>;
}
export interface BasePopoverProps {
  accessibilityType?: ACCESSIBILITY_TYPE[keyof ACCESSIBILITY_TYPE];
  'data-baseweb'?: string;
  id?: string;
  ignoreBoundary?: boolean;
  onMouseEnterDelay?: number;
  onMouseLeaveDelay?: number;
  overrides?: Overrides;
  placement?: TetherPlacement[keyof TetherPlacement];
  showArrow?: boolean;
  triggerType?: TRIGGER_TYPE[keyof TRIGGER_TYPE];
  mountNode?: HTMLElement;
  animateOutTime?: number;
}
export type PopoverProps = BasePopoverProps & {
  children: React.ReactNode;
  content: React.ReactNode | (() => React.ReactNode);
  isOpen: boolean;
  onBlur?: () => any;
  onClick?: (e: Event) => any;
  onClickOutside?: (event: MouseEvent) => any;
  onEsc?: () => any;
  onFocus?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
};

export interface Offset {
  top: number;
  left: number;
}
export interface PopoverPrivateState {
  isAnimating: boolean;
  arrowOffset: Offset;
  popoverOffset: Offset;
  placement: TetherPlacement[keyof TetherPlacement];
  isLayerMounted: boolean;
  isMounted: boolean;
}
export class Popover extends React.Component<PopoverProps, PopoverPrivateState> {
  init(prevProps: PopoverProps, prevState: PopoverPrivateState): void;
  getDefaultState(props: PopoverProps): {
    isAnimating: false;
    arrowOffset: {left: 0, top: 0};
    popoverOffset: {left: 0, top: 0};
    placement: PLACEMENT[keyof PLACEMENT];
    isMounted: false;
    isLayerMounted: false;
  };
  animateIn(): void;
  animateOut(): void;
  clearTimers(): void;
  onAnchorClick(e: Event): void;
  onAnchorMouseEnter(): void;
  onAnchorMouseLeave(): void;
  onPopoverMouseEnter(): void;
  onPopoverMouseLeave(): void;
  onKeyPress(evt: KeyboardEvent): void;
  onPopperUpdate(normalizedOffsets: NormalizedOffsets, data: PopperDataObject): void;
  triggerOnMouseLeaveWithDelay(): void;
  triggerOnMouseLeave(): void;
  triggerOnMouseEnterWithDelay(): void;
  triggerOnMouseEnter(): void;
  addDomEvents(): void;
  removeDomEvents(): void;
  onDocumentClick(evt: MouseEvent): void;
  isClickTrigger(): boolean;
  isHoverTrigger(): boolean;
  isAccessibilityTypeMenu(): boolean;
  isAccessibilityTypeTooltip(): boolean;
  getAnchorIdAttr(): string | null;
  getPopoverIdAttr(): string | null;
  getAnchorProps(): object;
  getPopoverBodyProps(): object;
  getSharedProps(): SharedStylePropsArg & { children?: React.ReactNode };
  getAnchorFromChildren(): React.ReactNode;
  renderAnchor(): React.ReactNode;
  renderPopover(): React.ReactNode;
}

export const StyledArrow: StyletronComponent<any>;
export const StyledBody: StyletronComponent<any>;
export const StyledInner: StyletronComponent<any>;
export const StyledPadding: StyletronComponent<any>;

export const ACCESSIBILITY_TYPE: ACCESSIBILITY_TYPE;
export const PLACEMENT: PLACEMENT;
export const TRIGGER_TYPE: TRIGGER_TYPE;
export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
export const POPOVER_MARGIN: 8;
export const ARROW_SIZE: 6;
export const ANIMATE_IN_TIME: ANIMATE_IN_TIME;
export const ANIMATE_OUT_TIME: ANIMATE_OUT_TIME;
export const ARROW_WIDTH: number;
