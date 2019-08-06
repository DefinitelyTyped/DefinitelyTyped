/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface KIND {
  info: 'info';
  positive: 'positive';
  warning: 'warning';
  negative: 'negative';
}
export interface PLACEMENT {
  topLeft: 'topLeft';
  top: 'top';
  topRight: 'topRight';
  bottomRight: 'bottomRight';
  bottom: 'bottom';
  bottomLeft: 'bottomLeft';
}
export interface TYPE {
  inline: 'inline';
  toast: 'toast';
}

export interface toaster {
  getRef: () => React.Ref<typeof ToasterContainer>;
  show: (children: React.ReactNode, props: Readonly<ToastProps>) => React.Key;
  info: (children: React.ReactNode, props: Readonly<ToastProps>) => React.Key;
  positive: (children: React.ReactNode, props: Readonly<ToastProps>) => React.Key;
  warning: (children: React.ReactNode, props: Readonly<ToastProps>) => React.Key;
  negative: (children: React.ReactNode, props: Readonly<ToastProps>) => React.Key;
  update: (key: React.Key, props: Readonly<ToastProps>) => void;
  clear: (key: React.Key) => void;
}

export interface ToasterContainerState {
  isMounted: boolean;
  toasts: Readonly<ToastProps>;
}
export interface ToasterSharedStylePropsArg {
  $placement?: PLACEMENT[keyof PLACEMENT];
}
export interface ToasterOverrides {
  Root?: Override<ToasterSharedStylePropsArg>;
  ToastBody?: Override<SharedStylePropsArg>;
  ToastCloseIcon?: Override<SharedStylePropsArg>;
}
export interface ToasterProps {
  overrides?: ToasterOverrides;
  placement?: PLACEMENT[keyof PLACEMENT];
  usePortal?: boolean;
  autoHideDuration?: number;
}
export class ToasterContainer extends React.Component<Readonly<ToasterProps>, ToasterContainerState> {
  getToastProps(props: ToastProps): Readonly<ToastProps> & { key: React.Key };
  show(props: ToastProps): React.Key;
  update(key: React.Key, props: ToastProps): void;
  dismiss(key: React.Key): void;
  clearAll(): void;
  clear(key: React.Key): void;
  internalOnClose(key: React.Key): void;
  getOnCloseHandler(key: React.Key, onClose?: () => any): () => any;
  renderToast(toastProps: ToastProps & { key: React.Key }): React.ReactNode;
  getSharedProps(): { $placement: PLACEMENT[keyof PLACEMENT] };
}

export interface SharedStylePropsArg {
  $color?: string;
  $size?: number | string;
  $kind?: KIND[keyof KIND];
  $type?: TYPE[keyof TYPE];
  $closeable?: boolean;
  $isRendered?: boolean;
  $isVisible?: boolean;
}

export interface ToastPrivateState {
  isVisible: boolean;
  isRendered: boolean;
}

export interface ToastOverrides {
  Body?: Override<SharedStylePropsArg>;
  CloseIcon?: Override<SharedStylePropsArg>;
}
export interface ToastProps {
  autoHideDuration?: number;
  children?: React.ReactNode;
  closeable?: boolean;
  kind?: KIND[keyof KIND];
  notificationType?: TYPE[keyof TYPE];
  onClose?: () => any;
  onBlur?: (e: Event) => any;
  onFocus?: (e: Event) => any;
  onMouseEnter?: (e: Event) => any;
  onMouseLeave?: (e: Event) => any;
  'data-baseweb'?: string;
  overrides?: ToastOverrides;
  key?: React.Key;
}

export class Toast extends React.Component<ToastProps, ToastPrivateState> {
  startTimeout(): void;
  clearTimeout(): void;
  animateIn(): void;
  animateOut(): void;
  dismiss(): void;
  onFocus(e: Event): void;
  onMouseEnter(e: Event): void;
  onBlur(e: Event): void;
  onMouseLeave(e: Event): void;
  getSharedProps(): Readonly<SharedStylePropsArg>;
}

export const Root: StyletronComponent<any>;
export const Body: StyletronComponent<any>;
export const CloseIconSvg: StyletronComponent<any>;

export const KIND: KIND;
export const PLACEMENT: PLACEMENT;
export const TYPE: TYPE;
