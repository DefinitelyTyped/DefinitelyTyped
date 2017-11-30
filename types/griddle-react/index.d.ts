// Type definitions for griddle-react 0.7
// Project: https://github.com/griddlegriddle/griddle
// Definitions by: David Hara <https://github.com/hodavidhara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/*
The MIT License (MIT)

Copyright (c) 2016 David Hara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as React from 'react';

type ReactClass<T> = React.ComponentClass<T> | React.StatelessComponent<T>;

export interface CustomColumnComponentProps<T> {
  data: any;
  rowData: T;
  metaData: ColumnMetaData<T>;
}

export interface CustomRowComponentProps<T> {
  data: T;
}

export interface CustomGridComponentProps<T> {
  data: T[];
}

export interface CustomPagerComponentProps {
  currentPage: number;
  maxPage: number;
  nextText: string;
  previousText: string;
  next(): void;
  previous(): void;
  setPage(number: number): void;
}

export interface CustomHeaderComponentProps {
  filterByColumn?(filter: string, columnName: string): void;
  columnName: string;
  displayName: string;
}

export interface CustomFilterComponentProps {
  placeholderText?: string;
  changeFilter(val: any): void;
}

export interface ColumnMetaData<T> {
  columnName: string;
  cssClassName?: string;
  customComponent?: ReactClass<CustomColumnComponentProps<T>>;
  customHeaderComponent?: ReactClass<CustomHeaderComponentProps>;
  customHeaderComponentProps?: {};
  displayName?: string;
  locked?: boolean;
  order?: number;
  sortable?: boolean;
  visible?: boolean;
}

export type BodyCssClassNameFunction<T> = (rowData: T) => string;

export interface RowMetaData<T> {
  bodyCssClassName?: BodyCssClassNameFunction<T> | string;
}

export interface GriddleProps<T> {
  columns?: string[];
  columnMetadata?: Array<ColumnMetaData<T>>;
  rowMetadata?: RowMetaData<T>;
  results?: T[];
  resultsPerPage?: number;
  initialSort?: string;
  initialSortAscending?: boolean;
  gridClassName?: string;
  tableClassName?: string;
  customFormatClassName?: string;
  settingsText?: string;
  filterPlaceholderText?: string;
  nextText?: string;
  previousText?: string;
  maxRowsText?: string;
  enableCustomFormatText?: string;
  childrenColumnName?: string;
  metadataColumns?: string[];
  showFilter?: boolean;
  showSettings?: boolean;
  useCustomRowComponent?: boolean;
  useCustomGridComponent?: boolean;
  useCustomPagerComponent?: boolean;
  useCustomFilterer?: boolean;
  useCustomFilterComponent?: boolean;
  useGriddleStyles?: boolean;
  customRowComponent?: ReactClass<CustomRowComponentProps<T>>;
  customGridComponent?: ReactClass<CustomGridComponentProps<T>>;
  customPagerComponent?: ReactClass<CustomPagerComponentProps>;
  customFilterComponent?: ReactClass<CustomFilterComponentProps>;
  customFilterer?(items: T[], query: any): T[];
  enableToggleCustom?: boolean;
  noDataMessage?: string;
  noDataClassName?: string;
  customNoDataComponent?: ReactClass<void>;
  showTableHeading?: boolean;
  showPager?: boolean;
  useFixedHeader?: boolean;
  useExternal?: boolean;
  externalSetPage?(index: number): void;
  externalChangeSort?(sort: string, sortAscending: boolean): void;
  externalSetFilter?(filter: string): void;
  externalSetPageSize?(size: number): void;
  externalMaxPage?: number;
  externalCurrentPage?: number;
  externalSortColumn?: string;
  externalSortAscending?: boolean;
  externalLoadingComponent?: ReactClass<void>;
  externalIsLoading?: boolean;
  enableInfiniteScroll?: boolean;
  bodyHeight?: number;
  paddingHeight?: number;
  rowHeight?: number;
  infiniteScrollLoadTreshold?: number;
  useFixedLayout?: boolean;
  isSubGriddle?: boolean;
  enableSort?: boolean;
  sortAscendingClassName?: string;
  sortDescendingClassName?: string;
  parentRowCollapsedClassName?: string;
  parentRowExpandedClassName?: string;
  settingsToggleClassName?: string;
  nextClassName?: string;
  previousClassName?: string;
  sortAscendingComponent?: string | React.ReactElement<any>;
  sortDescendingComponent?: string | React.ReactElement<any>;
  sortDefaultComponent?: string | React.ReactElement<any>;
  parentRowCollapsedComponent?: string | React.ReactElement<any>;
  parentRowExpandedComponent?: string | React.ReactElement<any>;
  settingsIconComponent?: string | React.ReactElement<any>;
  nextIconComponent?: string | React.ReactElement<any>;
  previousIconComponent?: string | React.ReactElement<any>;
  onRowClick?(): void;
}

declare class Griddle<T> extends React.Component<GriddleProps<T>> {
}

export default Griddle;
