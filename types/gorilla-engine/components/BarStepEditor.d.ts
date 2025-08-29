declare namespace GorillaEngine.UI {
    interface BarStepEditorProps extends Common, Bounds, Background, Clickable {
        /**
         * The spacing between the bars.
         */
        divSize: number;
        min: number;
        max: number;
        /**
         * The path to the respective script in the instrument.
         */
        paramPath: string;
        /**
         * Index of the first
         */
        startIndex: number;
        endIndex: number;
        /**
         * The dimension of the step
         */
        step: Partial<{
            /**
             * The horizontal offset of the step relative to its default position
             */
            x: number;
            /**
             * The vertical offset of the step relative to its default position
             */
            y: number;
            /**
             * The width of a step.
             */
            width: number;
            /**
             * The height of a step.
             */
            height: number;
            /**
             * The corner radius of the step.
             */
            cornerRadius: number;
            borderSizeX: number;
            borderSizeY: number;
            /**
             * The color of the step when it is active.
             */
            activeColor: string;

            markDefault: boolean;
            incrementHeight: number;
            backgroundColor: string;
            /**
             * The color of the step when it is on.
             */
            onColor: string;
            /**
             * The color of the step when it is off.
             */
            offColor: string;
        }>;
    }

    class BarStepEditor extends Component {
        constructor(options: Partial<BarStepEditorProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface BarStepEditor extends BarStepEditorProps {}
}
