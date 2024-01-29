import * as React from "react";
import { TableRenderers } from "./TableRenderers";
import { Pivot } from "./Utilities";
export interface PivotTableProps extends Pivot {
    // maybe some generic can be implemented for the last two.
    renderers?: TableRenderers;

    /**
     * key to renderers object specifying the renderer to use
     * @default "Table"
     */
    rendererName?: string;
}

export default class PivotTable extends React.PureComponent<PivotTableProps> {}
