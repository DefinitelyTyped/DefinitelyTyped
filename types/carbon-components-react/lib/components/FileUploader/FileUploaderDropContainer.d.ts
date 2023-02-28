import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface FileUploaderDropContainerProps extends ReactAttr<HTMLLabelElement> {
    /**
     * Specify the types of files that this input should be able to receive
     */
    accept?: readonly string[] | undefined;

    /**
     * Provide a custom className to be applied to the container node
     */
    className?: string | undefined;

    /**
     * Specify whether file input is disabled
     */
    disabled?: boolean | undefined;

    /**
     * Provide a unique id for the underlying <input> node
     */
    id?: string | undefined;

    /**
     * Provide the label text to be read by screen readers when interacting with
     * this control
     */
    // Required but has a default value
    labelText?: string | undefined;

    /**
     * Specify if the component should accept multiple files to upload
     */
    multiple?: boolean | undefined;

    /**
     * Provide a name for the underlying <input> node
     */
    name?: string | undefined;

    /**
     * Event handler that is called after files are added to the uploader
     * The event handler signature looks like `onAddFiles(evt, { addedFiles })`
     */
    onAddFiles?: ((event: React.DragEvent<HTMLElement>, content: { addedFiles: File[] }) => void) | undefined;

    /**
     * Provide a custom regex pattern for the acceptedTypes
     */
    pattern?: string;

    /**
     * Provide an accessibility role for the <FileUploaderButton>
     */
    role?: string | undefined;

    /**
     * Provide a custom tabIndex value for the <FileUploaderButton>
     */
    tabIndex?: number | undefined;
}

declare const FileUploaderDropContainer: React.FC<FileUploaderDropContainerProps>;

export default FileUploaderDropContainer;
