import * as React from "react";
import { FileStatus } from "./shared";

export interface FilenameIconProps extends React.HTMLAttributes<HTMLElement> {
    iconDescription?: string,
    invalid?: boolean,
    status?: FileStatus,
}

declare const Filename: React.FC<FilenameIconProps>;

export default Filename;
