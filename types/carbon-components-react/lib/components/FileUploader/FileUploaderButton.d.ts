import * as React from "react";
import { ReactLabelAttr } from "../../../typings/shared";
import { ButtonKind } from "../Button";
import { FileUploaderSize } from "./shared";

export interface FileUploaderButtonProps extends Omit<ReactLabelAttr, "onChange"> {
    accept?: readonly string[] | undefined;
    buttonKind?: ButtonKind | undefined;
    disabled?: boolean | undefined;
    disableLabelChanges?: boolean | undefined;
    labelText?: React.ReactNode | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
    size?: FileUploaderSize | undefined;
}

declare const FileUploaderButton: React.FC<FileUploaderButtonProps>;

export default FileUploaderButton;
