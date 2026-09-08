declare namespace GorillaEngine.UI {
    /** Properties for a source in an internal or operating-system drag operation. */
    interface DragContainerProps extends Common, Bounds, Clickable {
        /** Group used to match this source with compatible drag targets. */
        dragGroup: string;
        /** Data made available to an internal drag target. */
        dragContent: string;
        /** Name of the action invoked when an external drag starts. */
        externalDragStartAction: string;
        /** Name of the action invoked when an external drag ends. */
        externalDragEndAction: string;
        /** Whether an external destination may move, rather than only copy, dragged files. */
        destinationCanMoveDraggedFiles: boolean;
        /** File paths supplied to an external drag operation. */
        externallyDraggedFiles: any;
        /** Name of the action invoked while a drag operation is in progress. */
        onDragging: string;
        /** Name of the action invoked when an external drag starts. */
        onExternalDragStart: string;
        /** Name of the action invoked when an external drag ends. */
        onExternalDragEnd: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface DragContainer extends DragContainerProps {}

    /** A component that provides data or files for drag-and-drop operations. */
    class DragContainer extends Component {
        constructor(options: Partial<DragContainerProps>);
    }
}
