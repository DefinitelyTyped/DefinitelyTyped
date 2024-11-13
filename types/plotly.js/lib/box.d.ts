import { Color, MarkerSymbol, PlotData } from "../";
import { ScatterSelectedMarker } from "./scatter";

export const moduleType: "trace";
export const name: "box";
export const categories: string[];
export const meta: { description: string };

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
