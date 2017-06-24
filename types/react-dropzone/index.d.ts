// Type definitions for react-dropzone
// Project: https://github.com/okonet/react-dropzone
// Definitions by: Mathieu Larouche Dube <https://github.com/matdube>, Ivo Jesus <https://github.com/LynxEyes>, Luís Rodrigues <https://github.com/goblindegook>
// Definitions: https://github.com/Vooban/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react"/>

declare module "react-dropzone" {
    interface DropzoneProps {
        // Drop behavior
        onDrop?: Function,
        onDropAccepted?: Function,
        onDropRejected?: Function,

        // Drag behavior
        onDragStart?: Function,
        onDragEnter?: Function,
        onDragLeave?: Function,

        style?: Object, // CSS styles to apply
        activeStyle?: Object, // CSS styles to apply when drop will be accepted
        rejectStyle?: Object, // CSS styles to apply when drop will be rejected
        className?: string, // Optional className
        activeClassName?: string, // className for accepted state
        rejectClassName?: string, // className for rejected state

        disablePreview?: boolean, // Enable/disable preview generation
        disableClick?: boolean, // Disallow clicking on the dropzone container to open file dialog

        inputProps?: Object, // Pass additional attributes to the <input type="file"/> tag
        multiple?: boolean, // Allow dropping multiple files
        accept?: string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
        name?: string, // name attribute for the input tag
        maxSize?: number,
        minSize?: number

        onFileDialogCancel?: () => void;
    }

    let Dropzone: React.ClassicComponentClass<DropzoneProps>;
    export = Dropzone;
}
