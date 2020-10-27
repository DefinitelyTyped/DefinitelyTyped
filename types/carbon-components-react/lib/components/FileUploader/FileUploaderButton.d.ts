import { ReactLabelAttr } from "../../../typings/shared";
import * as React from "react";
import { FileUploaderSize } from "./shared";
import { ButtonKind } from "../Button";

export interface FileUploaderButtonProps extends Omit<ReactLabelAttr, "onChange"> {
    accept?: readonly string[],
    buttonKind?: ButtonKind,
    disabled?: boolean;
    disableLabelChanges?: boolean,
    labelText?: React.ReactNode,
    listFiles?: boolean,
    multiple?: boolean,
    name?: string;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
    size?: FileUploaderSize,
}

declare const FileUploaderButton: React.FC<FileUploaderButtonProps>;

export default FileUploaderButton;
