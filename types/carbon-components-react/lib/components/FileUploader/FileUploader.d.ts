import * as React from "react";
import { EmbeddedIconProps, ReactDivAttr, ReactInputAttr, ReactLabelAttr } from "../../../typings/shared";
import { ButtonKind } from "../Button";

interface SharedProps {
    accept?: string[],
    buttonKind?: ButtonKind,
    disabled?: ReactInputAttr["disabled"],
    disableLabelChanges?: boolean,
    labelText?: React.ReactNode,
    listFiles?: boolean,
    multiple?: boolean,
}

export type FileStatus = "complete" | "edit" | "uploading";

// FileUploaderButton

interface FileUploaderButtonInheritedProps extends
    Omit<ReactLabelAttr, "onChange">,
    SharedProps
{
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
}

export interface FileUploaderButtonProps extends FileUploaderButtonInheritedProps { }

export declare class FileUploaderButton extends React.Component<FileUploaderButtonProps> { }

// Filename

interface FilenameDivInheritedProps extends ReactDivAttr { }
interface FilenameIconInheritedProps extends
    React.SVGAttributes<SVGSVGElement>,
    EmbeddedIconProps
{ }

export interface FilenameDivProps extends FilenameDivInheritedProps {
    status: Extract<FileStatus, "uploading">,
}

export interface FilenameIconProps extends FilenameIconInheritedProps {
    status: Extract<FileStatus, "complete" | "edit">,
}

export interface FilenameEmptyProps extends FilenameDivInheritedProps {
    status?: null;
}

export type AllFilenameProps = FilenameDivProps | FilenameIconProps | FilenameEmptyProps;
export declare class Filename extends React.Component<AllFilenameProps> { }

// FileUploader

interface FileUploaderInheritedProps extends
    Omit<ReactLabelAttr, "onChange">,
    EmbeddedIconProps,
    SharedProps
{
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
}

export interface FileUploaderProps extends FileUploaderInheritedProps {
    buttonLabel?: string,
    filenameStatus?: FileStatus, // required but has default value
    labelDescription?: string,
}

export declare class FileUploader extends React.Component<FileUploaderProps> { }

export default FileUploader;
