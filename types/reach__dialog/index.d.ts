// Type definitions for @reach/dialog 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type DialogProps = {
    isOpen?: boolean;
    onDismiss?: () => void;
    children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export type DialogOverlayProps = {
    initialFocusRef?: React.RefObject<HTMLElement>;
} & DialogProps;

export type DialogContentProps = {
    children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export const Dialog: React.FC<DialogProps>;
export const DialogOverlay: React.FC<DialogOverlayProps>;
export const DialogContent: React.FC<DialogContentProps>;
