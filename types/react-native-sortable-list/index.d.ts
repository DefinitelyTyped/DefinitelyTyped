// Type definitions for react-native-sortable-list 0.0.22
// Project: https://github.com/gitim/react-native-sortable-list
// Definitions by: Michael Sivolobov <https://github.com/sivolobov>, Vince Maiuri <https://github.com/RookY2K>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

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
    style?: StyleProp<ViewStyle>

    /**
     * these styles will be applied to the inner scroll view content container
     */
    contentContainerStyle?: StyleProp<ViewStyle>

    /**
     * these styles will be applied to the inner scroll view content container, excluding the header and footer
     */
    innerContainerStyle?: StyleProp<ViewStyle>

    /**
     * when true, the SortableList's children are arranged horizontally in a row instead of vertically in a column.
     * The default value is false.
     */
    horizontal?: boolean

    /**
     * when false, the vertical scroll indicator will not be visible. The default value is true.
     */
    showsVerticalScrollIndicator?: boolean

    /**
     * when false, the horizontal scroll indicator will not be visible. The default value is true.
     */
    showsHorizontalScrollIndicator?: boolean

    /**
     * when false, rows are not sortable. The default value is true.
     */
    sortingEnabled?: boolean

    /**
     * when false, the content does not scrollable. The default value is true.
     */
    scrollEnabled?: boolean

    /**
     * whether you intend to use the toggleRowActive method to activate a row or use the out of box solution.
     */
    manuallyActivateRows?: boolean

    /**
     * determines the height for vertical list and the width for horizontal list of the area at the begining and
     * the end of the list that will trigger autoscrolling. Defaults to 60.
     */
    autoscrollAreaSize?: number

    /**
     * determines time delay in ms before pressed row becomes active. Defaults to 200 ms.
     */
    rowActivationTime?: number

    /**
     * A RefreshControl that works the same way as a ScrollView's refreshControl.
     */
    refreshControl?: JSX.Element

    /**
     * Takes a row key, row index, data entry from the data source and its statuses disabled, active and should
     * return a renderable component to be rendered as the row. The child component will receive a method called
     * toggleRowActive (only if manuallyActivateRows={true}) to manually activate the row. Useful if you have
     * multiple touch responders in your view.
     */
    renderRow: (props: RowProps) => JSX.Element

    /**
     * Renders returned component at the top of the list.
     */
    renderHeader?: () => JSX.Element

    /**
     * Renders returned component at the bottom of the list.
     */
    renderFooter?: () => JSX.Element

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

    /**
     * Called when a row was pressed.
     */
    onPressRow?: (key: DataKey) => void
}

interface SortableListStatic extends React.ClassicComponentClass<SortableListProps> {}

declare var SortableList: SortableListStatic;
declare type SortableList = SortableListStatic;

export default SortableList;
