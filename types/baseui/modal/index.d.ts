/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';
import { ButtonProps } from '../button';

export interface SIZE {
  default: 'default';
  full: 'full';
  auto: 'auto';
}

export interface SIZE_WIDTHS {
    default: '500px';
    full: '100%';
    auto: 'auto';
}
export interface ROLE {
  dialog: 'dialog';
  alertdialog: 'alertdialog';
}
export interface CLOSE_SOURCE {
  closeButton: 'closeButton';
  backdrop: 'backdrop';
  escape: 'escape';
}

export interface SharedStylePropsArg {
  children?: React.ReactNode;
  $animate?: boolean;
  $isVisible?: boolean;
  $isOpen?: boolean;
  $size?: SIZE[keyof SIZE];
  $role?: ROLE[keyof ROLE];
  $closeable?: boolean;
}

export interface ModalOverrides {
  Root?: Override<SharedStylePropsArg>;
  Backdrop?: Override<SharedStylePropsArg>;
  Dialog?: Override<SharedStylePropsArg>;
  DialogContainer?: Override<SharedStylePropsArg>;
  Close?: Override<SharedStylePropsArg>;
}
export interface ModalProps {
  animate?: boolean;
  autofocus?: boolean;
  children?: React.ReactNode;
  closeable?: boolean;
  isOpen?: boolean;
  mountNode?: HTMLElement;
  onClose?: (args: {
    closeSource?: CLOSE_SOURCE[keyof CLOSE_SOURCE];
  }) => any;
  overrides?: ModalOverrides;
  role?: ROLE[keyof ROLE];
  size?: SIZE[keyof SIZE];
}
export interface ModalState {
  isVisible: boolean;
  mounted: boolean;
}
export class Modal extends React.Component<ModalProps, ModalState> {
  addDomEvents(): void;
  removeDomEvents(): void;
  disableMountNodeScroll(): void;
  resentMountNodeScroll(): void;
  onDocumentKeyPress(event: KeyboardEvent): void;
  onBackdropClick(): void;
  onCloseClick(): void;
  clearTimers(): void;
  didOpen(): void;
  didClose(): void;
  triggerClose(source: CLOSE_SOURCE[keyof CLOSE_SOURCE]): void;
  captureLastFocus(): void;
  restoreLastFocus(): void;
  autoFocus(): void;
  animateOutComplete(): void;
  getSharedProps(): SharedStylePropsArg & { children: React.ReactNode };
  getMountNode(): HTMLElement;
  getChildren(): React.ReactNode;
  getRef(component: string): React.Ref<any>;
  renderModal(): React.ReactNode;
}

export class ModalButton extends React.Component<ButtonProps> {}

export const StyledRoot: StyletronComponent<any>;
export const StyledBackdrop: StyletronComponent<any>;
export const StyledDialog: StyletronComponent<any>;
export const StyledDialogContainer: StyletronComponent<any>;
export const StyledClose: StyletronComponent<any>;
export const ModalHeader: StyletronComponent<any>;
export const ModalBody: StyletronComponent<any>;
export const ModalFooter: StyletronComponent<any>;

export const SIZE: SIZE;
export const SIZE_WIDTHS: SIZE_WIDTHS;
export const ROLE: ROLE;
export const CLOSE_SOURCE: CLOSE_SOURCE;
