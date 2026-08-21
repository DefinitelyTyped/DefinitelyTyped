declare namespace GorillaEngine.UI {
    interface WindowProps extends Common, Background {
        /**
         * The width of the plugin window. */
        width: number;
        /**
         * The height of the plugin window. */
        height: number;
        /**
         * The initial scaling of the window's dimensions. */
        uiScale: number;
        /**
         * The minimum allowed scaling of the window's dimensions.
         */
        uiScaleMin: number;
        /**
         * The maximum allowed scaling of the window's dimensions.
         */
        uiScaleMax: number;
    }
    // tslint:disable-next-line:no-empty-interface
    interface Window extends WindowProps {}
    class Window extends Component {
        constructor(options: Partial<WindowProps>);
    }
}
