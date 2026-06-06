import { Color } from "../";
import { BoxPlotData } from "./box";

export const moduleType: "trace";
export const name: "violin";
export const categories: string[];
export const meta: { description: string };

// See https://github.com/plotly/plotly.js/blob/master/src/traces/violin/attributes.js
export interface ViolinData {
    type: "violin";

    x: BoxPlotData["x"];
    y: BoxPlotData["y"];
    x0: BoxPlotData["x0"];
    y0: BoxPlotData["y0"];
    name: BoxPlotData["name"];

    opacity: number; // Missing from the list of attributes

    orientation: BoxPlotData["orientation"];
    bandwidth: number;
    scalegroup: string;
    scalemode: "width" | "count";
    spanmode: "soft" | "hard" | "manual";
    span: any[];
    line: Partial<{
        color: Color;
        width: number;
    }>;
    fillcolor: Color;
    points: BoxPlotData["boxpoints"];
    jitter: BoxPlotData["jitter"];
    pointpos: BoxPlotData["pointpos"];
    width: BoxPlotData["width"];
    marker: BoxPlotData["marker"];
    text: BoxPlotData["text"];
    hovertext: BoxPlotData["hovertext"];
    hovertemplate: BoxPlotData["hovertemplate"];
    box: Partial<{
        visible: boolean;
        width: number;
        fillcolor: Color;
        line: Partial<{
            color: Color;
            width: number;
        }>;
    }>;
    meanline: Partial<{
        visible: boolean;
        color: Color;
        width: number;
    }>;
    side: "both" | "positive" | "negative";

    offsetgroup: BoxPlotData["offsetgroup"];
    alignmentgroup: BoxPlotData["alignmentgroup"];

    selected: BoxPlotData["selected"];
    unselected: BoxPlotData["unselected"];

    hoveron: "violins" | "points" | "kde" | "all" | string;
}
