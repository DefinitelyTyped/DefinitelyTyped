declare namespace GorillaEngine.UI {
    interface DropZoneProps extends Common, Bounds, Clickable {
        acceptedFileTypes: string[] | string;
        onDraggedFiles;
        onDroppedFile;
    }

    interface DropZone extends DropZoneProps {}

    class DropZone extends Component {
        constructor(options: Partial<DropZoneProps>);
    }
}
