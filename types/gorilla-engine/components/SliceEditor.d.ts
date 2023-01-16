declare namespace GorillaEngine.UI {
    interface SliceStyle {
        y: number;
        width: number;
        height: number;
        color: string;
        image: string;
    }

    interface Modulation {
        color: string;
        tooltip: string;
        centerLine: any;
        values: any;
        centerValue: number;
    }
    interface GridMeasure {
        fractionOfBar: number;
        showLabels: boolean;
        tickHeight: number;
        font: string;
    }

    interface SliceEditorProps extends Common, Bounds, Background, Clickable {
        slices: any;
        audioLengthInSamples: number;
        audioLengthInBeats: number;
        canChangeSlices: boolean;
        canAddSlices: boolean;
        canRemoveSlices: boolean;
        snapSlicesToGrid: boolean;
        zoom: { start: number; end: number };
        addModulation(modulation: Partial<Modulation>): void;
        grid: Partial<{
            position: string;
            height: number;
            minTickSpacing: number;
            enabled: boolean;
            backgroundColor: string;
            backgroundImage: string;
            measures: GridMeasure[];
            addMeasure(measure: GridMeasure): void;
        }>;
        sliceStyles: Partial<{
            normal: Partial<SliceStyle>;
            hover: Partial<SliceStyle>;
            selected: Partial<SliceStyle>;
        }>;
        selectionAreaStyle: Partial<{
            backgroundColor: string;
            border: Partial<{
                width: number;
                radius: number;
                color: string;
            }>;
        }>;
        addMarker(marker: any): void;
        addSlice(slice: any): void;
        clearSlices(): void;
        setZoom: (start: number, end: number) => void;
        mappedSampleChanged(): void;
        modulations: Modulation[];
    }

    interface SliceEditor extends SliceEditorProps {}

    class SliceEditor extends Component {
        constructor(options: Partial<SliceEditorProps>);
    }
}
