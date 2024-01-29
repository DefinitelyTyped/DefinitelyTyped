declare namespace GorillaEngine.UI {
    interface XYPadProps extends Common, Bounds, Clickable, Background {
        valueX: number;
        valueY: number;
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
        stepSizeX: number;
        stepSizeY: number;
        snapsToMousePosition: boolean;
        thumbImage: string;
    }

    interface XYPad extends XYPadProps {}
    class XYPad extends Component {
        constructor(options: Partial<XYPadProps>);
    }
}
