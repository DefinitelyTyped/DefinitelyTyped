declare namespace GorillaEngine.UI {
    interface StepEditorProps extends Common, Background, Bounds, Clickable {
        value: any;
        divSize: number;
        min: number;
        max: number;
        paramPath: string;
        startIndex: number;
        endIndex: number;
        step: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
            cornerRadius: number;
            borderSizeX: number;
            borderSizeY: number;
            activeColor: string;
            markDefault: boolean;
            incrementHeight: number;
            backgroundColor: string;
            onColor: string;
            offColor: string;
        }>;
    }

    interface StepEditor extends StepEditorProps {}
    class StepEditor extends Component {
        constructor(options: Partial<StepEditorProps>);
    }
}
