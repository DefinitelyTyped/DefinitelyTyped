declare namespace GorillaEngine.UI {
    interface RubberbandProps extends Common, Bounds {
    }

    class Rubberband extends Component {
        constructor(options: Partial<RubberbandProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface Rubberband extends RubberbandProps {}
}
