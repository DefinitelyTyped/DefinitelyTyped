// Type definitions for react-native-table-component 1.2
// Project: https://github.com/Gil2015/react-native-table-component#readme
// Definitions by: David Cole <https://github.com/davidcole1340>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ReactChildren } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

// cell.js

export interface CellProps {
  data?: any;
  width?: number | undefined;
  height?: number | undefined;
  flex?: number | undefined;
  style?: ViewStyle | undefined;
  textStyle?: TextStyle | undefined;
  borderStyle?: ViewStyle | undefined;
}

export class Cell extends Component<CellProps> {}

// cols.js

export interface ColProps {
  data?: any[] | undefined;
  style?: ViewStyle | undefined;
  width?: number | undefined;
  heightArr?: number[] | undefined;
  textStyle?: TextStyle | undefined;
}

export class Col extends Component<ColProps> {}

export interface ColsProps {
  data?: any[] | undefined;
  style?: ViewStyle | undefined;
  widthArr?: number[] | undefined;
  heightArr?: number[] | undefined;
  flexArr?: number[] | undefined;
  textStyle?: TextStyle | undefined;
}

export class Cols extends Component<ColsProps> {}

// rows.js

export interface RowProps {
  data?: any[] | undefined;
  style?: ViewStyle | undefined;
  widthArr?: number[] | undefined;
  height?: number | undefined;
  flexArr?: number[] | undefined;
  textStyle?: TextStyle | undefined;
}

export class Row extends Component<RowProps> {}

export interface RowsProps {
  data?: any[][] | undefined;
  style?: ViewStyle | undefined;
  widthArr?: number[] | undefined;
  heightArr?: number[] | undefined;
  flexArr?: number[] | undefined;
  textStyle?: TextStyle | undefined;
}

export class Rows extends Component<RowsProps> {}

// table.js

export interface TableProps {
  style?: ViewStyle | undefined;
  borderStyle?: ViewStyle | undefined;
}

export class Table extends Component<TableProps> {
  _renderChildren(props: TableProps): ReactChildren;
}

export interface TableWrapperProps {
  style?: ViewStyle | undefined;
  borderStyle?: ViewStyle | undefined;
}

export class TableWrapper extends Component<TableWrapperProps> {
  _renderChildren(props: TableWrapperProps): ReactChildren;
}
