import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import { FileStatus, FileUploaderSize } from "./shared";

export interface FileUploaderItemProps extends ReactAttr<HTMLSpanElement> {
    /**
     * Unique identifier for the file object
     */
    // Required but has a default value
    uuid?: string | undefined;

    iconDescription?: string | undefined;

    invalid?: boolean | undefined;

    /**
     * Name of the uploaded file
     */
    name?: string | undefined;

    /**
     * Specify the size of the uploaded items, from a list of available
     * sizes. For `default` size, this prop can remain unspecified.
     */
    size?: FileUploaderSize | undefined;

    /**
     * Status of the file upload
     */
    status?: FileStatus | undefined;

    /**
     * Event handler that is called after removing a file from the file uploader
     * The event handler signature looks like `onDelete(evt, { uuid })`
     */
    onDelete?:
        | ((event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, content: { uuid: string }) => void)
        | undefined;

    /**
     * Error message subject for an invalid file upload
     */
    errorSubject?: NonNullable<React.ReactNode> | undefined;

    /**
     * Error message body for an invalid file upload
     */
    errorBody?: NonNullable<React.ReactNode> | undefined;
}

declare const FileUploaderItem: React.FC<FileUploaderItemProps>;

export default FileUploaderItem;
