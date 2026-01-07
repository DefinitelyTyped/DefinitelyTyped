declare namespace GorillaEngine.UI {
    interface AmpItem {
        /**
         * Sets the color of the respective envelope handle.
         * This can be a named color (e.g., "red") or a hexadecimal value (e.g., "FF0000"). To specify an RGBA color set the hex alpha as a prefix (e.g., "80FF0000").
         */
        color: string;
        /**
         * Sets the thickness of the respective envelope handle.
         */
        size: number;
        /**
         * Sets the corner radius for the respective envelope handle.
         */
        cornerRadius: number;
        /**
         * Sets the default value for the respective
         */
        value: number;
        /**
         * Sets a value binding for the respective envelope handle.
         */
        "value&": any;
        /**
         * Sets the visibility of the respective envelope handle.
         * If set to `false`, the handle will not be rendered.
         */
        visible: boolean;
        /**
         * Sets the path to the image used for the respective envelope handle.
         */
        imagePath: string;
        /**
         * Sets the text displayed on the respective envelope handle.
         */
        text: string;
        /**
         * Sets the color of the text. This can be a named color (e.g., "red") or a hexadecimal value (e.g., "FF0000"). To specify an RGBA color set the hex alpha as a prefix (e.g., "80FF0000").
         */
        textColor: string;
    }

    interface AmpEnvProps extends Common, Bounds, Background, Font {
        /**
         * Configures the visual properties for the **attack** envelope handle.
         */
        attack: Partial<AmpItem>;
        /**
         * Configures the visual properties for the **decay** envelope handle.
         */
        decay: Partial<AmpItem>;
        /**
         * Configures the visual properties for the **sustain** envelope handle.
         */
        sustain: Partial<AmpItem>;
        /**
         * Configures the visual properties for the **release** envelope handle.
         */
        release: Partial<AmpItem>;
        /**
         * Configures the visual properties for the envelope curve.
         */
        curve: Partial<{
            color: string;
            thickness: number;
        }>;
    }

    // tslint:disable-next-line:no-empty-interface
    interface AmpEnv extends AmpEnvProps {}
    class AmpEnv extends Component {
        constructor(options: Partial<AmpEnvProps>);
    }
}
