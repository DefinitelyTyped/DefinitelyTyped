import { Color, MarkerSymbol, PlotData } from "../../index";
import { ScatterSelectedMarker } from "./scatter";

// See https://github.com/plotly/plotly.js/blob/master/src/traces/box/attributes.js
export interface BoxPlotData extends PlotData {
    type: "box";
    x0: any;
    y0: any;
    width: number;
    quartilemethod: "linear" | "exclusive" | "inclusive";
    boxpoints: "all" | "outliers" | "suspectedoutliers" | false;
    jitter: number;
    pointpos: number;
    marker: Partial<BoxPlotMarker>;
    offsetgroup: string;
    alignmentgroup: string;
    selected: ScatterSelectedMarker;
    unselected: ScatterSelectedMarker;
}

export interface BoxPlotMarker {
    outliercolor: Color;
    symbol: MarkerSymbol;
    opacity: number;
    size: number;
    color: Color;
    line: Partial<{
        color: Color;
        width: number;
        outliercolor: Color;
        outlierwidth: number;
    }>;
}
