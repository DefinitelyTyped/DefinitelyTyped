import * as React from "react";
import {
    ValidityProps,
    ReactAttr,
    EmbeddedIconProps
} from "../../../typings/shared";
import { FileStatus } from "./FileUploader";

interface FileUploaderItemInheritedProps extends
    ReactAttr<HTMLSpanElement>,
    EmbeddedIconProps,
    Pick<ValidityProps, "invalid"> {
}

export interface FileUploaderItemProps extends FileUploaderItemInheritedProps {
    /**
     * Unique identifier for the file object
     */
    // Required but has a default value
    uuid?: string;

    /**
     * Name of the uploaded file
     */
    name?: string;

    /**
     * Status of the file upload
     */
    status?: FileStatus;

    /**
     * Event handler that is called after removing a file from the file uploader
     * The event handler signature looks like `onDelete(evt, { uuid })`
     */
    onDelete?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, content: { uuid: string }) => void;

    /**
     * Error message subject for an invalid file upload
     */
    errorSubject?: NonNullable<React.ReactNode>;

    /**
     * Error message body for an invalid file upload
     */
    errorBody?: NonNullable<React.ReactNode>;
}

declare const FileUploaderItem: React.FC<FileUploaderItemProps>;

export default FileUploaderItem;
