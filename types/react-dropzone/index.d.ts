// Type definitions for react-dropzone 4.2.3
// Project: https://github.com/okonet/react-dropzone
// Definitions by: Mathieu Larouche Dube <https://github.com/matdube>,
//                 Ivo Jesus <https://github.com/LynxEyes>,
//                 Luís Rodrigues <https://github.com/goblindegook>,
//                 Ben Bayard <https://github.com/benbayard>,
//                 Karol Janyst <https://github.com/LKay>,
//                 Andris Causs <https://github.com/codeaid>,
//                 Juraj Husar <https://github.com/jurosh>,
//                 Monroe Ekilah <https://github.com/ekilah>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CSSProperties, Component, DragEvent, InputHTMLAttributes } from "react";

export interface ImageFile extends File {
    preview?: string;
}

export type DropFileEventHandler = (acceptedOrRejected: ImageFile[], event: DragEvent<HTMLDivElement>) => void;
export type DropFilesEventHandler = (accepted: ImageFile[], rejected: ImageFile[], event: DragEvent<HTMLDivElement>) => void;

type PickedAttributes = "className" | "multiple" | "name" | "onClick" | "onDragStart" | "onDragEnter" | "onDragOver" | "onDragLeave" | "style";

export interface DropzoneProps extends Pick<InputHTMLAttributes<HTMLDivElement>, PickedAttributes> {
    accept?: string | ReadonlyArray<string>;
    disableClick?: boolean;
    disabled?: boolean;
    disablePreview?: boolean;
    preventDropOnDocument?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    maxSize?: number;
    minSize?: number;
    activeClassName?: string;
    acceptClassName?: string;
    rejectClassName?: string;
    disabledClassName?: string;
    activeStyle?: CSSProperties;
    acceptStyle?: CSSProperties;
    rejectStyle?: CSSProperties;
    disabledStyle?: CSSProperties;
    onDrop?: DropFilesEventHandler;
    onDropAccepted?: DropFileEventHandler;
    onDropRejected?: DropFileEventHandler;
    onFileDialogCancel?: () => void;
}

export default class Dropzone extends Component<DropzoneProps> {
    open(): void;
}
