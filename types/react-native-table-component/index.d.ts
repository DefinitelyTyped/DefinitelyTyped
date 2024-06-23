import { Component, ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

// cell.js

export interface CellProps {
    data?: any;
    width?: number | undefined;
    height?: number | undefined;
    flex?: number | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
    borderStyle?: StyleProp<ViewStyle> | undefined;
}

export class Cell extends Component<CellProps> {}

// cols.js

export interface ColProps {
    data?: any[] | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    width?: number | undefined;
    heightArr?: number[] | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
}

export class Col extends Component<ColProps> {}

export interface ColsProps {
    data?: any[] | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    widthArr?: number[] | undefined;
    heightArr?: number[] | undefined;
    flexArr?: number[] | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
}

export class Cols extends Component<ColsProps> {}

// rows.js

export interface RowProps {
    data?: any[] | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    widthArr?: number[] | undefined;
    height?: number | undefined;
    flexArr?: number[] | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
}

export class Row extends Component<RowProps> {}

export interface RowsProps {
    data?: any[][] | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    widthArr?: number[] | undefined;
    heightArr?: number[] | undefined;
    flexArr?: number[] | undefined;
    textStyle?: StyleProp<TextStyle> | undefined;
}

export class Rows extends Component<RowsProps> {}

// table.js

export interface TableProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
    borderStyle?: StyleProp<ViewStyle> | undefined;
}

export class Table extends Component<TableProps> {
    _renderChildren(props: TableProps): ReactNode;
}

export interface TableWrapperProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
    borderStyle?: StyleProp<ViewStyle> | undefined;
}

export class TableWrapper extends Component<TableWrapperProps> {
    _renderChildren(props: TableWrapperProps): ReactNode;
}
