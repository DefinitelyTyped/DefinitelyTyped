declare namespace GorillaEngine.UI {
    interface StepEditorProps extends Common, Background, Bounds, Clickable {
        value: any;
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

    // tslint:disable-next-line:no-empty-interface
    interface StepEditor extends StepEditorProps {}
    class StepEditor extends Component {
        constructor(options: Partial<StepEditorProps>);
    }
}
