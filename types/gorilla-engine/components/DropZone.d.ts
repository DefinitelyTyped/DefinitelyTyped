declare namespace GorillaEngine.UI {
    interface DropZoneProps extends Common, Bounds, Clickable {
        acceptedFileTypes: string[] | string;
        onDraggedFiles: string;
        onDroppedFile: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface DropZone extends DropZoneProps {}

    class DropZone extends Component {
        constructor(options: Partial<DropZoneProps>);
    }
}
