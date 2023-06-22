import * as React from 'react';
import { ReactAttr } from '../../../typings/shared';
import { FileStatus, FileUploaderSize } from './shared';
import { ButtonKind } from '../Button';
import { FileUploaderButtonProps } from './FileUploaderButton';

// FileUploader
export interface FileUploaderProps extends Omit<ReactAttr, 'onChange'> {
    accept?: readonly string[] | undefined;
    buttonKind?: ButtonKind | undefined;
    buttonLabel?: string | undefined;
    disabled?: boolean | undefined;
    filenameStatus?: FileStatus | undefined; // required but has default value
    iconDescription?: string | undefined;
    labelDescription?: string | undefined;
    labelText?: React.ReactNode | undefined;
    labelTitle?: string | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    onChange?: FileUploaderButtonProps['onChange'] | undefined;
    onDelete?(event: React.MouseEvent<HTMLElement>): void;
    size?: FileUploaderSize | undefined;
}

export declare class FileUploader extends React.Component<FileUploaderProps> {}

export default FileUploader;
