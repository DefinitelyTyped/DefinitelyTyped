// Type definitions for react-native-sortable-list
// Project: https://github.com/gitim/react-native-sortable-list
// Definitions by: Michael Sivolobov <https://github.com/sivolobov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
/// <reference path="../react-native/react-native.d.ts"/>

declare namespace __SortableList {

    type DataKey = string | number;

    export type DataValue = any

    type DataByNumber = {
        [key: number]: DataValue
    }

    type DataByString = {
        [key: string]: DataValue
    }

    export type Data = DataByNumber | DataByString;

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
        style?: React.ViewStyle

        /**
         * these styles will be applied to the inner scroll view content container
         */
        contentContainerStyle?: React.ViewStyle

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

    export interface SortableListStatic extends React.ClassicComponentClass<SortableListProps> {}

    export var SortableList: SortableListStatic;
    export type SortableList = SortableListStatic;
}

declare module 'react-native-sortable-list' {
    import SortableList = __SortableList;

    export interface RowProps extends SortableList.RowProps {}

    export default SortableList.SortableList;
}
