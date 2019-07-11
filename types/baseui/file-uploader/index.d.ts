/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface FileUploaderOverrides<T> {
  Root?: Override<T>;
  FileDragAndDrop?: Override<T>;
  ContentMessage?: Override<T>;
  ContentSeparator?: Override<T>;
  HiddenInput?: Override<T>;
  ProgressMessage?: Override<T>;
  ErrorMessage?: Override<T>;
  ButtonComponent?: Override<T>;
}

export interface StyleProps {
  $afterFileDrop: boolean;
  $isDisabled: boolean;
  $isDragActive: boolean;
  $isDragAccept: boolean;
  $isDragReject: boolean;
  $isFocused: boolean;
}

export type DropFilesEventHandler = (
  accepted: File[],
  rejected: File[],
  event: React.SyntheticEvent<HTMLElement>,
) => any;

export type DropFileEventHandler = (
  acceptedOrRejected: File[],
  event: React.SyntheticEvent<HTMLElement>,
) => any;

export type GetDataTransferItems = (
  event: React.SyntheticEvent<any>,
) => Promise<Array<File | DataTransferItem>>;

export interface FileUploaderProps {
  accept?: string | string[];
  disableClick?: boolean;
  disabled?: boolean;
  getDataTransferItems?: GetDataTransferItems;
  maxSize?: number;
  minSize?: number;
  multiple?: boolean;
  name?: string;
  onClick?: (event: React.MouseEventHandler<HTMLElement>) => any;
  onFocus?: (event: React.FocusEventHandler<HTMLElement>) => any;
  onBlur?: (event: React.FocusEventHandler<HTMLElement>) => any;
  onKeyDown?: (event: React.KeyboardEventHandler<HTMLElement>) => any;
  onDragStart?: (event: React.DragEventHandler<HTMLElement>) => any;
  onDragEnter?: (event: React.DragEventHandler<HTMLElement>) => any;
  onDragOver?: (event: React.DragEventHandler<HTMLElement>) => any;
  onDragLeave?: (event: React.DragEventHandler<HTMLElement>) => any;
  onDrop?: DropFilesEventHandler;
  onDropAccepted?: DropFileEventHandler;
  onDropRejected?: DropFileEventHandler;
  onFileDialogCancel?: () => any;
  preventDropOnDocument?: boolean;
  errorMessage?: string;
  onCancel?: () => any;
  onRetry?: () => any;
  overrides?: FileUploaderOverrides<StyleProps>;
  progressAmount?: number;
  progressMessage?: string;
}
export const FileUploader: React.FC<FileUploaderProps>;

export const StyledRoot: StyletronComponent<any>;
export const StyledFileDragAndDrop: StyletronComponent<any>;
export const StyledContentMessage: StyletronComponent<any>;
export const StyledErrorMessage: StyletronComponent<any>;
export const StyledHiddenInput: StyletronComponent<any>;
