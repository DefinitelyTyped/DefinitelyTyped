// Type definitions for react-native-sortable-list
// Project: https://github.com/gitim/react-native-sortable-list
// Definitions by: Michael Sivolobov <https://github.com/sivolobov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewStyle } from 'react-native';

type DataKey = string | number;

type DataValue = any

type DataByNumber = {
    [key: number]: DataValue
}

type DataByString = {
    [key: string]: DataValue
}

type Data = DataByNumber | DataByString;

export interface RowProps {
    active: boolean
    data: DataValue
    key?: DataKey
    index?: number
    disabled?: boolean
}

interface SortableListProps {

    /**
     * data source
     */
    data: Data

    /**
     * an array of keys from data, the order of keys from the array will be used to initial rows order
     */
    order?: DataKey[]

    /**
     * style of HOC
     */
    style?: ViewStyle

    /**
     * these styles will be applied to the inner scroll view content container
     */
    contentContainerStyle?: ViewStyle

    /**
     * when false, rows are not sortable. The default value is true.
     */
    sortingEnabled?: boolean

    /**
     * when false, the content does not scrollable. The default value is true.
     */
    scrollEnabled?: boolean

    /**
     * Takes a row key, row index, data entry from the data source and its statuses disabled,
     *  active and should return a renderable component to be rendered as the row.
     */
    renderRow: (props: RowProps) => JSX.Element

    /**
     * Called when rows were reordered, takes an array of rows keys of the next rows order.
     */
    onChangeOrder?: (nextOrder: DataKey[]) => void

    /**
     * Called when a row was activated (user long tapped).
     */
    onActivateRow?: (key: DataKey) => void

    /**
     * Called when the active row was released.
     */
    onReleaseRow?: (key: DataKey) => void
}

interface SortableListStatic extends React.ClassicComponentClass<SortableListProps> {}

declare var SortableList: SortableListStatic;
declare type SortableList = SortableListStatic;

export default SortableList;