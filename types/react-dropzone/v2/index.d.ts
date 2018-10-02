// Type definitions for react-dropzone 2.2
// Project: https://github.com/okonet/react-dropzone
// Definitions by: Mathieu Larouche Dube <https://github.com/matdube>, Ivo Jesus <https://github.com/LynxEyes>, Luís Rodrigues <https://github.com/goblindegook>, Ben Bayard <https://github.com/benbayard>
// Definitions: https://github.com/Vooban/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

declare module "react-dropzone" {
    interface DropzoneProps {
        // Drop behavior
        onDrop?: (accepted: File[], rejected: File[]) => any;
        onDropAccepted?: (accepted: File[]) => any;
        onDropRejected?: (rejected: File[]) => any;

        // Drag behavior
        onDragStart?: Function;
        onDragEnter?: Function;
        onDragLeave?: Function;

        style?: React.CSSProperties; // CSS styles to apply
        activeStyle?: React.CSSProperties; // CSS styles to apply when drop will be accepted
        rejectStyle?: React.CSSProperties; // CSS styles to apply when drop will be rejected
        className?: string; // Optional className
        activeClassName?: string; // className for accepted state
        rejectClassName?: string; // className for rejected state

        disablePreview?: boolean; // Enable/disable preview generation
        disableClick?: boolean; // Disallow clicking on the dropzone container to open file dialog

        inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Pass additional attributes to the <input type="file"/> tag
        multiple?: boolean; // Allow dropping multiple files
        accept?: string; // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
        name?: string; // name attribute for the input tag
        maxSize?: number;
        minSize?: number;

        onFileDialogCancel?: () => void;
    }

    class Dropzone extends React.Component<DropzoneProps, never> {
        open(): void;
    }

    export = Dropzone;
}
