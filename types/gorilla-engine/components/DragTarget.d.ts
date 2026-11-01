declare namespace GorillaEngine.UI {
    /** Properties for a target that receives internal drag operations. */
    interface DragTargetProps extends Common, Bounds, Clickable {
        /** Group of drag sources accepted by this target. */
        dragGroup: string;
        /** Name of the action invoked when compatible content is dropped. */
        onDrop: string;
    }

    /** A component that receives content from a compatible drag container. */
    class DragTarget extends Component {
        constructor(options: Partial<DragTargetProps>);
    }

    // tslint:disable-next-line:no-empty-interface
    interface DragTarget extends DragTargetProps {}
}
