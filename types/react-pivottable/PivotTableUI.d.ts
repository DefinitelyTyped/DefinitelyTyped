import * as React from 'react';
import { TSorterFn } from './Utilities';
import { PivotTableProps } from './PivotTable';

export interface PivotTableUIProps extends PivotTableProps {
    /**
     * @summary
     * This is required in the docs. The param exposes all the Api.
     * @see function called every time anything changes in the UI,
     * with the new value of the properties needed to render the new state.
     * This function must be hooked into a state-management system in order
     * for the "dumb" PivotTableUI component to work.
     * @link https://github.com/plotly/react-pivottable/blob/master/README.md
     */
    onChange(e: PivotTableUIProps): void;

    /**
     * contains attribute names to omit from the UI
     */
    hiddenAttributes?: string[];

    /**
     * contains attribute names to omit from the aggregator arguments dropdowns
     */
    hiddenFromAggregators?: string[];

    /**
     * contains attribute names to omit from the drag'n'drop portion of the UI
     */
    hiddenFromDragDrop?: string[];

    /**
     * If the attributes' names' combined length in characters exceeds this value
     * then the unused attributes area will be shown vertically to the left of
     * the UI instead of horizontally above it. 0 therefore means 'always vertical',
     * and Infinity means 'always horizontal'.
     * @default  85
     */
    unusedOrientationCutoff?: number;

    /**
     * maximum number of values to list in the double-click menu.
     * @default 500
     */
    menuLimit?: number;
}
export default class PivotTableUI extends React.Component<PivotTableUIProps> {}

export interface DraggableAttributeProps {
    name: string;
    attrValues: { [K: string]: number };
    addValuesToFilter: (param: string, val: string[]) => void;
    removeValuesFromFilter: (param: string, val: string[]) => void;
    moveFilterBoxToTop: (attr: string) => void;
    sorter: TSorterFn;
    valueFilter?: { [K: string]: boolean };
    menuLimit?: number;
    zIndex?: number;
}
export class DraggableAttribute extends React.Component<DraggableAttributeProps> {}

export interface DropdownProps {
    toggle(): void;
    open: boolean;
    current: string;
    values: string[];
    zIndex?: number;
    setValue(param: string): void;
}

export class Dropdown extends React.PureComponent<DropdownProps> {}
