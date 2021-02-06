import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import { FileStatus, FileUploaderSize } from "./shared";
import { ButtonKind } from "../Button";
import { FileUploaderButtonProps } from "./FileUploaderButton";

// FileUploader
export interface FileUploaderProps extends Omit<ReactAttr, "onChange"> {
    accept?: readonly string[],
    buttonKind?: ButtonKind,
    buttonLabel?: string,
    filenameStatus?: FileStatus, // required but has default value
    iconDescription?: string,
    labelDescription?: string,
    labelText?: React.ReactNode,
    labelTitle?: string,
    multiple?: boolean,
    name?: string,
    onChange?: FileUploaderButtonProps["onChange"],
    onDelete?(event: React.MouseEvent<HTMLElement>): void;
    size?: FileUploaderSize,
}

export declare class FileUploader extends React.Component<FileUploaderProps> { }

export default FileUploader;
