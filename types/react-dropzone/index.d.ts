// Type definitions for react-dropzone 3.13
// Project: https://github.com/okonet/react-dropzone
// Definitions by: Mathieu Larouche Dube <https://github.com/matdube>, Ivo Jesus <https://github.com/LynxEyes>, Luís Rodrigues <https://github.com/goblindegook>, Ben Bayard <https://github.com/benbayard>
// Definitions: https://github.com/Vooban/DefinitelyTyped
// TypeScript Version: 2.3

import { CSSProperties, Component, DragEvent, InputHTMLAttributes } from "react";

declare namespace Dropzone {
    interface ImageFile extends File {
        preview?: string;
    }

    interface DropFilesEventHandler {
        (accepted: ImageFile[], rejected?: ImageFile[]): void;
        <E extends DragEvent<HTMLDivElement>>(event: E): void;
    }

    interface DropzoneProps extends InputHTMLAttributes<HTMLDivElement> {
        disableClick?: boolean;
        disablePreview?: boolean;
        preventDropOnDocument?: boolean;
        inputProps?: InputHTMLAttributes<HTMLInputElement>;
        maxSize?: number;
        minSize?: number;
        activeClassName?: string;
        rejectClassName?: string;
        activeStyle?: CSSProperties;
        rejectStyle?: CSSProperties;
        onDrop?: DropFilesEventHandler;
        onDropAccepted?: DropFilesEventHandler;
        onDropRejected?: DropFilesEventHandler;
        onFileDialogCancel?: () => void;
    }
}

declare class Dropzone extends Component<Dropzone.DropzoneProps> {
    open(): void;
}

export = Dropzone;
