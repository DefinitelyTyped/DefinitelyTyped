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
        tooltip;
        centerLine;
        values;
        centerValue: number;
    }
    interface GridMeasure {
        fractionOfBar: number;
        showLabels: boolean;
        tickHeight: number;
        font;
    }

    interface SliceEditorProps extends Common, Bounds, Background, Clickable {
        slices;
        audioLengthInSamples: number;
        audioLengthInBeats: number;
        canChangeSlices: boolean;
        canAddSlices: boolean;
        canRemoveSlices: boolean;
        snapSlicesToGrid: boolean;
        zoom: { start: number; end: number };
        addModulation(modulation: Partial<Modulation>);
        grid: Partial<{
            position: string;
            height: number;
            minTickSpacing: number;
            enabled: boolean;
            backgroundColor: string;
            backgroundImage: string;
            measures: GridMeasure[];
            addMeasure(measure: GridMeasure);
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
        addMarker(marker);
        addSlice(slice);
        clearSlices();
        setZoom: (start, end) => void;
        mappedSampleChanged();
        modulations: Modulation[];
    }

    export interface SliceEditor extends SliceEditorProps {}

    export class SliceEditor extends Component {
        constructor(options: Partial<SliceEditorProps>);
    }
}
