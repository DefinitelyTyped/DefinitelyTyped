import * as React from 'react';

export interface TETHER_PLACEMENT {
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

export type TetherPlacement = TETHER_PLACEMENT;

export interface NormalizedOffset {
  top: number;
  left: number;
}

export interface NormalizedOffsets {
  arrow?: NormalizedOffset;
  popper: NormalizedOffset;
}

export interface PopperOffset {
  top?: number | null;
  left?: number | null;
}

export interface PopperDataObject {
  offsets: {
    arrow?: PopperOffset;
    popper: PopperOffset;
  };
  placement: string;
}

export interface TetherProps {
  anchorRef?: React.Ref<HTMLElement>;
  arrowRef?: React.Ref<HTMLElement>;
  popperRef?: React.Ref<HTMLElement>;
  children: React.ReactNode;
  onPopperUpdate?: (offsets: NormalizedOffsets, popper: PopperDataObject) => any;
  placement?: TETHER_PLACEMENT[keyof TETHER_PLACEMENT];
  popperOptions?: any;
}
export interface TetherState {
  isMounted: boolean;
}

export class TetherBehavior extends React.Component<TetherProps, TetherState> {
  state: {
    isMounted: boolean;
  };
  initializePopper(): void;
  onPopperUpdate(data: PopperDataObject): void;
  destroyPopover(): void;
}

export interface LayersManagerProps {
  children: React.ReactNode;
}
export interface LayerProps {
  children: React.ReactNode;
  host?: HTMLElement;
  index?: number;
  mountNode?: HTMLElement;
  onMount?: () => any;
  onUnmount?: () => any;
}
export class LayersManager extends React.Component<LayersManagerProps> {
  host: React.Ref<HTMLElement>;
}
export const Layer: React.FC<LayerProps>;

export const TETHER_PLACEMENT: TETHER_PLACEMENT;
