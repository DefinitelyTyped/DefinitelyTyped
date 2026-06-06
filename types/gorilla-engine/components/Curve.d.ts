declare namespace GorillaEngine.UI {
    /**
     * TODO:: Is this control even exposed to the user? Or is it part of AmpEnv
     */
    interface CurveProps extends Common, Bounds, Background, Font, Clickable {
        /**
         * The value of the curve.
         */
        value: any;
        /**
         * The path to the parameter that the curve is bound to.
         */
        paramPath: string;
        /**
         * The color of the curve.
         */
        color: string;
        /**
         * The thickness of the curve.
         */
        thickness: number;
        /**
         * The handle configuration.
         */
        handle: Partial<{
            /**
             * The value of the handle.
             */
            value: any;
            /**
             * The color of the handle.
             */
            color: string;
            /**
             * The corner radius of the handle.
             */
            cornerRadius: number;
            /**
             * The width of the handle.
             */
            width: number;
            /**
             * The height of the handle.
             */
            height: number;
            /**
             * Whether the handle is visible.
             */
            visible: boolean;
        }>;
        /**
         * The marking configuration.
         */
        marking: Partial<{
            /**
             * The color of the marking.
             */
            color: string;
            /**
             * The text color of the marking.
             */
            textColor: string;
            /**
             * The thickness of the marking.
             */
            thickness: number;
            /**
             * Whether the marking is visible.
             */
            visible: boolean;
        }>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface Curve extends CurveProps {}
    class Curve extends Component {
        constructor(options: Partial<CurveProps>);
    }
}
