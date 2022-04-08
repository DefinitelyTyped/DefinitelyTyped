// Type definitions for react-native-table-component 1.2
// Project: https://github.com/Gil2015/react-native-table-component#readme
// Definitions by: David Cole <https://github.com/davidcole1340>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ReactChildren } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

// cell.js

export interface CellProps {
  data?: any;
  width?: number;
  height?: number;
  flex?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  borderStyle?: ViewStyle;
}

export class Cell extends Component<CellProps> {}

// cols.js

export interface ColProps {
  data?: any[];
  style?: ViewStyle;
  width?: number;
  heightArr?: number[];
  textStyle?: TextStyle;
}

export class Col extends Component<ColProps> {}

export interface ColsProps {
  data?: any[];
  style?: ViewStyle;
  widthArr?: number[];
  heightArr?: number[];
  flexArr?: number[];
  textStyle?: TextStyle;
}

export class Cols extends Component<ColsProps> {}

// rows.js

export interface RowProps {
  data?: any[];
  style?: ViewStyle;
  widthArr?: number[];
  height?: number;
  flexArr?: number[];
  textStyle?: TextStyle;
}

export class Row extends Component<RowProps> {}

export interface RowsProps {
  data?: any[][];
  style?: ViewStyle;
  widthArr?: number[];
  heightArr?: number[];
  flexArr?: number[];
  textStyle?: TextStyle;
}

export class Rows extends Component<RowsProps> {}

// table.js

export interface TableProps {
  style?: ViewStyle;
  borderStyle?: ViewStyle;
}

export class Table extends Component<TableProps> {
  _renderChildren(props: TableProps): ReactChildren;
}

export interface TableWrapperProps {
  style?: ViewStyle;
  borderStyle?: ViewStyle;
}

export class TableWrapper extends Component<TableWrapperProps> {
  _renderChildren(props: TableWrapperProps): ReactChildren;
}
