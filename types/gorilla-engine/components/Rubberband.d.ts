declare namespace GorillaEngine.UI {
    interface RubberbandProps extends Common, Bounds {
    }
    /**
     * A container that forwards mouse down events to its children as if they were individually clicked.
     */

    class Rubberband extends Component {
        constructor(options: Partial<RubberbandProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface Rubberband extends RubberbandProps {}
}
