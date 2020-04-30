import * as React from "react";
import { EmbeddedIconProps, ReactInputAttr, ReactLabelAttr, ReactAttr } from "../../../typings/shared";
import { ButtonKind } from "../Button";

interface SharedProps {
    accept?: readonly string[],
    buttonKind?: ButtonKind,
    disabled?: ReactInputAttr["disabled"],
    disableLabelChanges?: boolean,
    listFiles?: boolean,
    multiple?: boolean,
}

export type FileStatus = "complete" | "edit" | "uploading";
export type FileUploaderSize = "default" | "field" | "small";

// FileUploaderButton

interface FileUploaderButtonInheritedProps extends
    Omit<ReactLabelAttr, "onChange">,
    SharedProps
{
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
}

export interface FileUploaderButtonProps extends FileUploaderButtonInheritedProps {
    labelText?: React.ReactNode,
    size?: FileUploaderSize,
}

export declare class FileUploaderButton extends React.Component<FileUploaderButtonProps> { }

// Filename

interface FilenameIconInheritedProps extends React.SVGAttributes<SVGSVGElement>, EmbeddedIconProps { }

export interface FilenameIconProps extends FilenameIconInheritedProps {
    invalid?: boolean,
    status?: FileStatus,
}

export declare const Filename: React.FC<FilenameIconProps>;

// FileUploader

interface FileUploaderInheritedProps extends
    Omit<ReactAttr, "onChange">,
    EmbeddedIconProps,
    SharedProps
{
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
}

export interface FileUploaderProps extends FileUploaderInheritedProps {
    buttonLabel?: string,
    filenameStatus?: FileStatus, // required but has default value
    labelDescription?: string,
    labelTitle?: string,
    size?: FileUploaderSize,
}

export declare class FileUploader extends React.Component<FileUploaderProps> { }

export default FileUploader;
