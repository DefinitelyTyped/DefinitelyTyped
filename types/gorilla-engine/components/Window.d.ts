declare namespace GorillaEngine.UI {
    interface WindowProps extends Common, Background {
        width: number;
        height: number;
        uiScale: number;
        uiScaleMin: number;
        uiScaleMax: number;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Window extends WindowProps {}
    class Window extends Component {
        constructor(options: Partial<WindowProps>);
    }
}
