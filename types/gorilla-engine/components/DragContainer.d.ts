declare namespace GorillaEngine.UI {
    interface DragContainerProps extends Common, Bounds, Clickable {
        dragGroup: string;
        dragContent: string;
        externalDragStartAction: string;
        externalDragEndAction: string;
        destinationCanMoveDraggedFiles: boolean;
        externallyDraggedFiles: any;
        onDragging: string;
        onExternalDragStart: string;
        onExternalDragEnd: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface DragContainer extends DragContainerProps {}

    class DragContainer extends Component {
        constructor(options: Partial<DragContainerProps>);
    }
}
