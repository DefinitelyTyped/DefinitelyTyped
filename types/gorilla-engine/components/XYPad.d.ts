declare namespace GorillaEngine.UI {
    interface XYPadProps extends Common, Bounds, Clickable, Background {
        /**
         * The x- value of the XYPad inthe range of [minX, maxX].
         */
        valueX: number;
        /**
         * The y- value of the XYPad in the range of [minY, maxY].
         */
        valueY: number;
        /**
         * The minimum x- value of the XYPad.
         */
        minX: number;
        /**
         * The maximum x- value of the XYPad.
         */
        maxX: number;
        /**
         * The minimum y- value of the XYPad.
         */
        minY: number;
        /**
         * The maximum y- value of the XYPad.
         */
        maxY: number;
        /**
         * The step size for the x- value.
         */
        stepSizeX: number;
        /**
         * The step size for the y- value.
         */
        stepSizeY: number;
        /**
         * If set to true, the XYPad will snap to the mouse position when clicked.
         */
        snapsToMousePosition: boolean;
        /**
         * The path to the image used for the XYPad thumb.
         */
        thumbImage: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface XYPad extends XYPadProps {}
    class XYPad extends Component {
        constructor(options: Partial<XYPadProps>);
    }
}
