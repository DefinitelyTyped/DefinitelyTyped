import * as React from 'react';

export interface CustomColumnComponentProps<T> {
    data: any,
    rowData: T,
    metaData: ColumnMetaData
}

export interface ColumnMetaData {
    columnName: string;
    order?: number;
    locked?: boolean;
    cssClassName?: string;
    displayName?: string;
    customComponent?: any; //TODO: should be React.Component, but getting weird error.
}

export interface BodyCssClassNameFunction<T> {
    (rowData:T): string;
}

export interface RowMetaData<T> {
    bodyCssClassName?: BodyCssClassNameFunction<T> | string;
}

export interface GriddleProps<T> {
    columns?: string[];
    columnMetadata?: ColumnMetaData[];
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
    customRowComponent?: any; //TODO: should be React.Component, but getting weird error.
    customGridComponent?: any; //TODO: should be React.Component, but getting weird error.
    customPagerComponent?: any; //TODO: should be React.Component, but getting weird error.
    enableToggleCustom?: boolean;
    noDataMessage?: string;
    noDataClassName?: string;
    customNoDataComponent?: any; //TODO: should be React.Component, but getting weird error.
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
    externalLoadingComponent?: any; //TODO: should be React.Component, but getting weird error.
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

declare class Griddle<T> extends React.Component<GriddleProps<T>, any> {}

export default Griddle;