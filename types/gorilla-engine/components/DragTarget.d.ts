declare namespace GorillaEngine.UI {
    interface DragTargetProps extends Common, Bounds, Clickable {
        dragGroup: string;
        onDrop: string;
    }

    class DragTarget extends Component {
        constructor(options: Partial<DragTargetProps>);
    }

    // tslint:disable-next-line:no-empty-interface
    interface DragTarget extends DragTargetProps {}
}
