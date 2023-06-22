import * as React from 'react';
import { Pivot } from './Utilities';
import { TableRenderers } from './TableRenderers';
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
