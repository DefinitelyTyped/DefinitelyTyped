declare namespace GorillaEngine.UI {
    interface SliceStyle {
        y: number;
        xOffset: number;
        width: number;
        height: number;
        color: string;
        image: string;
    }

    interface Modulation {
        legacyCompatibility?: boolean;
        color?: string;
        visible?: boolean;
        active?: boolean;
        resolution?: any;
        tooltip: {
            enabled?: boolean;
            text?: string;
            font?: {
                size?: number;
                color: string;
            };
            color: string;
            border: {
                width: number;
                color: string;
                radius: number;
            };
        };
        centerLine?: {
            width?: number;
            backgroundColor?: string;
            visible?: boolean;
        };
        values: any;
        centerValue: {
            value?: number;
            backgroundColor?: string;
            visible?: boolean;
        };
        indication?: {
            enabled?: boolean;
            backgroundColor?: string;
        };
        setValues: (values: any) => void;
    }
    interface GridMeasure {
        fractionOfBar: number;
        enabled: boolean;
        showLabels?: boolean;
        tickWidth: boolean;
        tickHeight: number;
        tickColor?: string;
        tickImage?: string;
        font?: { name: string; size: number; kerning: number; color: string };
    }

    interface Marker {
        value: number;
        snapToGrid?: boolean;
        snapToSlices?: boolean;
        boundToSlice?: boolean;
        fireChangeEventOnlyOnMouseUp?: boolean;
        group?: string;
        canPassPeers?: boolean;
        hideCoveredSlice?: boolean;
        overlayColorLeft?: string;
        overlayColorRight?: string;
        enforceValueOnConstraintViolation?: boolean;
        valueOffsetOnConstraintViolation?: number;
        styles?: {
            normal: SliceStyle;
            hover: SliceStyle;
            selected: SliceStyle;
        };
    }

    interface Slice {
        value: number;
    }

    interface SliceEditorProps extends Common, Bounds, Background, Clickable {
        slices: any;
        audioLengthInSamples: number;
        audioLengthInBeats: number;
        minSliceSpacing: number;
        minMarkerSpacing: number;
        canChangeSlices: boolean;
        canAddSlices: boolean;
        canRemoveSlices: boolean;
        snapSlicesToGrid: boolean;
        zoom: { start: number; end: number; dragToZoomFactor: number; dragToZoomEnabled: boolean };
        addModulation(modulation: Partial<Modulation>): Modulation;
        removeModulation(modulation: Partial<Modulation>): void;
        grid: Partial<{
            position: string;
            height: number;
            minTickSpacing: number;
            minLabelSpacing: number;
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
            enabled: boolean;
            border: Partial<{
                width: number;
                radius: number;
                color: string;
            }>;
        }>;
        addMarker(marker: Partial<Marker>): Marker;
        removeMarker(marker: Partial<Marker>): void;
        addSlice(sliceLegthInFrames: number): Slice;
        removeSlice(slice: Slice): void;
        getSlicesForZoneModule(): number[];
        clearSlices(): void;
        addGridMeasure(measure: Partial<GridMeasure>): GridMeasure;
        removeGridMeasure(measure: Partial<GridMeasure>): void;
        setModulationValues(values: number[]): void;
        bindMarkerToSlice(slice: Slice): void;
        unbindMarkerFromSlice(): void;
        mappedSampleChanged(): void;
        modulations: Modulation[];
    }

    interface SliceEditor extends SliceEditorProps {}

    class SliceEditor extends Component {
        constructor(options: Partial<SliceEditorProps>);
    }
}
