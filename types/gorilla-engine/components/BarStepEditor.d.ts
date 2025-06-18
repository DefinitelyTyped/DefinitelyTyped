declare namespace GorillaEngine.UI {
    interface BarStepEditorProps extends Common, Bounds, Background, Clickable {
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
            incrementHeight: number;
            backgroundColor: string;
            markDefault: boolean;
            onColor: string;
            offColor: string;
        }>;
    }

    class BarStepEditor extends Component {
        constructor(options: Partial<BarStepEditorProps>);
    }
    // tslint:disable-next-line:no-empty-interface
    interface BarStepEditor extends BarStepEditorProps {}
}
