declare namespace GorillaEngine.UI {
  interface SliceStyle {
    y: number;
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
      }
      color: string;
      border: {
        width: number;
        color: string;
        radius: number;
      }
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
    showLabels?: boolean;
    tickHeight: number;
    font?: { size: number };
  }

  interface SliceEditorProps extends Common, Bounds, Background, Clickable {
    slices: any;
    audioLengthInSamples: number;
    audioLengthInBeats: number;
    minSliceSpacing: number;
    canChangeSlices: boolean;
    canAddSlices: boolean;
    canRemoveSlices: boolean;
    snapSlicesToGrid: boolean;
    zoom: { start: number; end: number };
    addModulation(modulation: Partial<Modulation>): Modulation;
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
      border: Partial<{
        width: number;
        radius: number;
        color: string;
      }>;
    }>;
    addMarker(marker: any): void;
    addSlice(slice: any): void;
    removeSlice(slice: any): void;
    getSlicesForZoneModule(): any[];
    clearSlices(): void;
    setZoom: (start: number, end: number) => void;
    mappedSampleChanged(): void;
    modulations: Modulation[];
  }

  interface SliceEditor extends SliceEditorProps { }

  class SliceEditor extends Component {
    constructor(options: Partial<SliceEditorProps>);
  }
}
