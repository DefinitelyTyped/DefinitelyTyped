declare namespace GorillaEngine.UI {
    interface RubberbandProps extends Common, Bounds {
    }

    class Rubberband extends Component {
        constructor(options: Partial<RubberbandProps>);
    }
    interface Rubberband extends RubberbandProps {}
}
