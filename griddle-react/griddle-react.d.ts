import * as React from 'react';

type ReactClass<T> = React.ComponentClass<T> | React.StatelessComponent<T>

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

export interface ColumnMetaData<T> {
  columnName: string;
  order?: number;
  locked?: boolean;
  cssClassName?: string;
  displayName?: string;
  customComponent?: ReactClass<CustomColumnComponentProps<T>>;
}

export interface BodyCssClassNameFunction<T> {
  (rowData: T): string;
}

export interface RowMetaData<T> {
  bodyCssClassName?: BodyCssClassNameFunction<T> | string;
}

export interface GriddleProps<T> {
  columns?: string[];
  columnMetadata?: ColumnMetaData<T>[];
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
  useGriddleStyles?: boolean;
  customRowComponent?: ReactClass<CustomRowComponentProps<T>>
  customGridComponent?: ReactClass<CustomGridComponentProps<T>>
  customPagerComponent?: ReactClass<CustomPagerComponentProps>
  enableToggleCustom?: boolean;
  noDataMessage?: string;
  noDataClassName?: string;
  customNoDataComponent?: ReactClass<void>
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
  externalLoadingComponent?: ReactClass<void>
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

declare class Griddle<T> extends React.Component<GriddleProps<T>, any> {
}

export default Griddle;