declare namespace GorillaEngine.UI {
    /** Properties for a target that receives files from the operating system. */
    interface DropZoneProps extends Common, Bounds, Clickable {
        /**
         * File patterns accepted by the drop zone, such as `"*.wav"`.
         * Include `"*"` to accept every file type.
         */
        acceptedFileTypes: string[] | string;
        /** Name of the action invoked when files are dragged over the component. */
        onDraggedFiles: string;
        /** Name of the action invoked when a file is dropped. */
        onDroppedFile: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface DropZone extends DropZoneProps {}

    /** A component that accepts files dragged from the operating system. */
    class DropZone extends Component {
        constructor(options: Partial<DropZoneProps>);
    }
}
