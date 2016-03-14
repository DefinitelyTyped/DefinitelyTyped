// Type definitions for react-dropzone
// Project: https://github.com/paramaggarwal/react-dropzone
// Definitions by: Mathieu Larouche Dube <https://github.com/matdube>
// Definitions: https://github.com/Vooban/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module ReactDropzone {
    import React = __React;
    interface DropzoneProps {
        onDrop?: Function;
        onDropAccepted?: Function;
        onDropRejected?: Function;
        onDragEnter?: Function;
        onDragLeave?: Function;
        style?: Object;
        activeStyle?: Object;
        className?: string;
        activeClassName?: string;
        rejectClassName?: string;
        disableClick?: boolean;
        multiple?: boolean;
        accept?: string;
    }

    export class Dropzone extends React.Component<DropzoneProps, {}> {
    }

}

declare module "react-dropzone" {
    const Dropzone: typeof ReactDropzone.Dropzone;
    export = Dropzone;
}
