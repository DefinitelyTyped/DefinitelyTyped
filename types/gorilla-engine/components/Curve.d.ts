declare namespace GorillaEngine.UI {
    interface CurveProps extends Common, Bounds, Background, Font, Clickable {
        value: any;
        paramPath: string;
        color: string;
        thickness: number;
        handle: Partial<{
            color: string;
            cornerRadius: number;
            width: number;
            height: number;
            visible: boolean;
        }>;
        marking: Partial<{
            color: string;
            textColor: string;
            thickness: number;
            visible: boolean;
        }>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface Curve extends CurveProps {}
    class Curve extends Component {
        constructor(options: Partial<CurveProps>);
    }
}
