import * as React from "react";
import { FileStatus } from "./shared";

export interface FilenameIconProps extends React.HTMLAttributes<HTMLElement> {
    iconDescription?: string | undefined;
    invalid?: boolean | undefined;
    status?: FileStatus | undefined;
}

declare const Filename: React.FC<FilenameIconProps>;

export default Filename;
