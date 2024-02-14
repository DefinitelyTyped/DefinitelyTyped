import * as React from "react";
import { PlotParams } from "react-plotly.js";
import { TableRenderers } from "./TableRenderers";
import { Pivot, PivotData } from "./Utilities";
export interface PivotTableProps extends Pivot {
    // maybe some generic can be implemented for the last two.
    renderers?: TableRenderers;

    /**
     * key to renderers object specifying the renderer to use
     * @default "Table"
     */
    rendererName?: string;

    // plotly options
    plotlyOptions?: PlotParams["layout"];
    plotlyConfig?: PlotParams["config"];
    onRendererUpdate?: PlotParams["onUpdate"];

    // table options
    tableColorScaleGenerator?: (values: number[]) => (x: number) => React.CSSProperties;
    tableOptions?: {
        clickCallback?: (e: React.MouseEvent, value: any, filters: Record<string, string>, data: PivotData) => void;
    };
}

export default class PivotTable extends React.PureComponent<PivotTableProps> {}
