// Type definitions for react-dropzone
// Project: https://github.com/paramaggarwal/react-dropzone
// Definitions by: Mathieu Larouche Dube <https://github.com/matdube>
// Definitions: https://github.com/Vooban/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactDropzone {
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
        /**
        * Clicking the <Dropzone> brings up the browser file picker. To disable, set to true.
        */
        disableClick?: boolean;
        /**
        * To accept only a single file, set this to false.
        */
        multiple?: boolean;
        /**
        * Filters the file types that are valid. It should have a valid MIME type according to input element, for example:
        * application/pdf
        * image/*
        * audio/aiff,audio/midi
        */
        accept?: string;
    }

    export class Dropzone extends React.Component<DropzoneProps, {}> {
    }

}

declare module "react-dropzone" {
    const Dropzone: typeof ReactDropzone.Dropzone;
    export = Dropzone;
}

