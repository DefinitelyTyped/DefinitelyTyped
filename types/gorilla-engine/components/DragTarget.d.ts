declare namespace GorillaEngine.UI {
    interface DragTargetProps extends Common, Bounds, Clickable {
        dragGroup: string;
        onDrop: string;
    }

    class DragTarget extends Component {
        constructor(options: Partial<DragTargetProps>);
    }

    interface DragTarget extends DragTargetProps {}
}
