// Type definitions for @reach/alert-dialog 0.2
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { DialogProps, DialogContentProps } from '@reach/dialog';

export type AlertDialogProps = {
    isOpen?: boolean;
    onDismiss?: () => void;
    leastDestructiveRef: React.RefObject<HTMLElement>;
    children: React.ReactNode;
} & DialogProps;

export type AlertDialogContentProps = {
    children: React.ReactNode;
} & DialogContentProps;

export const AlertDialog: React.FunctionComponent<AlertDialogProps>;
export const AlertDialogLabel: React.FC<React.HTMLProps<HTMLDivElement>>;
export const AlertDialogDescription: React.FC<React.HTMLProps<HTMLDivElement>>;
export const AlertDialogOverlay: React.FC<AlertDialogProps>;
export const AlertDialogContent: React.FC<AlertDialogContentProps>;
