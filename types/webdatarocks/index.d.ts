// Type definitions for webdatarocks 1.1
// Project: https://www.webdatarocks.com/
// Definitions by:  webdatarocksteam <https://github.com/webdatarocksteam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export as namespace WebDataRocks;

declare const WebDataRocks: WebDataRocksConstructor;
export = WebDataRocks;

interface WebDataRocksConstructor {
    new(params: WebDataRocks.Params): WebDataRocks.Pivot;
    (params: WebDataRocks.Params): WebDataRocks.Pivot;
}
declare namespace WebDataRocks {
    interface Params {
        // params
        toolbar?: boolean;
        width?: string | number;
        height?: string | number;
        report?: Report | string;
        global?: Report;
        customizeCell?: (cell: CellBuilder, data: CellData) => void;
        // events
        aftergriddraw?: (param: object) => void;
        beforegriddraw?: (param: object) => void;
        beforetoolbarcreated?: (toolbar: any) => void;
        cellclick?: (cell: CellData) => void;
        celldoubleclick?: (cell: CellData) => void;
        datachanged?: (param: object) => void;
        dataerror?: (param: object) => void;
        datafilecancelled?: () => void;
        dataloaded?: () => void;
        exportcomplete?: () => void;
        exportstart?: () => void;
        fieldslistclose?: () => void;
        fieldslistopen?: () => void;
        filterclose?: () => void;
        filteropen?: () => void;
        loadingdata?: () => void;
        loadinglocalization?: () => void;
        loadingolapstructure?: () => void;
        loadingreportfile?: () => void;
        localizationerror?: () => void;
        localizationloaded?: () => void;
        openingreportfile?: () => void;
        printcomplete?: () => void;
        printstart?: () => void;
        querycomplete?: () => void;
        queryerror?: () => void;
        ready?: () => void;
        reportchange?: () => void;
        reportcomplete?: () => void;
        reportfileloaded?: () => void;
        reportfilecancelled?: () => void;
        reportfileerror?: () => void;
        runningquery?: () => void;
        update?: () => void;
        // other
        container?: string;
    }

    interface Pivot {
        addCalculatedMeasure(measure: Measure): void;
        addCondition(condition: ConditionalFormat): void;
        addJSON(json: object[]): void;
        clear(): void;
        clearFilter(hierarchyName: string): void;
        closeFieldsList(): void;
        collapseAllData(): void;
        collapseData(hierarchyName: string): void;
        connectTo(object: DataSource): void;
        customizeCell(customizeCellFunction: (cell: CellBuilder, data: CellData) => void): void;
        dispose(): void;
        expandAllData(withAllChildren?: boolean): void;
        expandData(hierarchyName: string): void;
        exportTo(type: string, exportOptions?: ExportOptions, callbackHandler?: ((result: object) => void) | string): void;
        getAllConditions(): ConditionalFormat[];
        getAllHierarchies(): Hierarchy[];
        getAllMeasures(): Measure[];
        getCell(rowIdx: number, colIdx: number): CellData;
        getColumns(): Hierarchy[];
        getCondition(id: string): ConditionalFormat;
        getData(options: { slice?: Slice }, callbackHandler: ((rawData: any, error?: any) => void) | string,
        updateHandler?: ((rawData: any, error?: any) => void) | string): void;
        getFilter(hierarchyName: string): FilterItem[];
        getFilterProperties(hierarchyName: string): FilterProperties;
        getFormat(measureName: string): Format;
        getMeasures(): Measure[];
        getMembers(hierarchyName: string, memberName: string, callbackHandler: ((members: Member[]) => void) | string): Member[];
        getOptions(): Options;
        getReportFilters(): Hierarchy[];
        getReport(format?: string): Report | string;
        getRows(): Hierarchy[];
        getSelectedCell(): CellData ;
        getSort(hierarchyName: string): string;
        load(url: string): void;
        on(eventType: string, handler?: ((...args: any[]) => any) | string): void;
        off(eventType: string, handler: ((...args: any[]) => any) | string): void;
        open(): void;
        openFieldsList(): void;
        print(options?: PrintOptions): void;
        refresh(): void;
        removeAllCalculatedMeasures(): void;
        removeAllConditions(): void;
        removeCondition(id: string): void;
        removeCalculatedMeasure(uniqueName: string): void;
        removeSelection(): void;
        runQuery(slice: Slice): void;
        save(filename: string, destination: string, callbackHandler?: (() => void) | string, url?: string, embedData?: boolean): string;
        setBottomX(hierarchyName: string, num: number, measureName: string): void;
        setFilter(hierarchyName: string, items: string[], negation?: boolean): void;
        setFormat(format: Format, measureName: string): void;
        setOptions(options: Options): void;
        setReport(report: Report): void;
        setSort(hierarchyName: string, sortName: string, customSorting?: string[]): void;
        setTopX(hierarchyName: string, num: number, measureName: string): void;
        sortValues(axisName: string, type: string, tuple: number[], measureName: string): void;
        updateData(object: DataSource | object[], options?: {ignoreScroll?: boolean, ignoreSorting?: boolean, partial?: boolean}): void;
        version: string;
        fusioncharts?: {
            getData(options: { type: string; slice?: Slice; prepareDataFunction?: (rawData: any) => any },
                callbackHandler: ((rawData: any, error?: any) => void) | string,
                updateHandler?: ((rawData: any, error?: any) => void) | string): void;
            getNumberFormat(format: object): object;
        };
        googlecharts?: {
            getData(options: { type?: string; slice?: Slice; prepareDataFunction?: (rawData: any) => any },
                callbackHandler: ((rawData: any, error?: any) => void) | string,
                updateHandler?: ((rawData: any, error?: any) => void) | string): void;
            getNumberFormat(format: object): object;
            getNumberFormatPattern(format: object): string;
        };
        highcharts?: {
            getData(options: { type?: string; slice?: Slice; xAxisType?: string; valuesOnly?: boolean, withDrilldown?: boolean, prepareDataFunction?: (rawData: any) => any },
                callbackHandler: ((rawData: any, error?: any) => void) | string,
                updateHandler?: ((rawData: any, error?: any) => void) | string): void;
            getAxisFormat(format: object): string;
            getPointXFormat(format: object): string;
            getPointYFormat(format: object): string;
            getPointZFormat(format: object): string;
        };
    }

    interface Report {
        dataSource?: DataSource;
        slice?: Slice;
        options?: Options;
        conditions?: ConditionalFormat[];
        formats?: Format[];
        tableSizes?: {
            columns?: ColumnSize[],
            rows?: RowSize[]
        };
        localization?: object | string;
    }

    interface DataSource {
        browseForFile?: boolean;
        data?: object[];
        dataSourceType?: string;
        fieldSeparator?: string;
        filename?: string;
        ignoreQuotedLineBreaks?: boolean;
        recordsetDelimiter?: string;
    }

    interface Slice {
        columns?: Hierarchy[];
        measures?: Measure[];
        reportFilters?: Hierarchy[];
        rows?: Hierarchy[];
        drills?: {
            drillAll?: boolean,
            columns?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
            rows?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
        };
        expands?: {
            expandAll?: boolean,
            columns?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
            rows?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
        };
        sorting?: {
            column?: Array<{ type: string; tuple: string[]; measure: MeasureObject; }>;
            row?: Array<{ type: string; tuple: string[]; measure: MeasureObject; }>;
        };
        flatOrder?: string[];
    }

    interface Options {
        grid?: {
            showFilter?: boolean,
            showGrandTotals?: string | boolean,
            showHeaders?: boolean,
            showHierarchies?: boolean,
            showHierarchyCaptions?: boolean,
            showReportFiltersArea?: boolean,
            showTotals?: string | boolean,
            title?: string,
            type?: string
        };
        configuratorActive?: boolean;
        configuratorButton?: boolean;
        datePattern?: string;
        dateTimePattern?: string;
        defaultHierarchySortName?: string;
        drillThrough?: boolean;
        editing?: boolean;
        selectEmptyCells?: boolean;
        showAggregations?: boolean;
        showCalculatedValuesButton?: boolean;
        showDefaultSlice?: boolean;
        sorting?: string;
        showAggregationLabels?: boolean;
    }

    interface PrintOptions {
        header?: string;
        footer?: string;
    }

    interface Member {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
        children?: Member[];
        isLeaf?: boolean;
        parentMember?: string;
    }

    interface FilterProperties {
        type?: string;
        members?: FilterItem[];
        quantity?: number;
        measure?: string;
    }

    interface FilterItem {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
    }

    interface CellData  {
        columnIndex?: number;
        columns?: any[];
        height?: number;
        hierarchy?: Hierarchy;
        isClassicTotalRow?: boolean;
        isDrillThrough?: boolean;
        isGrandTotal?: boolean;
        isGrandTotalColumn?: boolean;
        isGrandTotalRow?: boolean;
        isTotal?: boolean;
        isTotalColumn?: boolean;
        isTotalRow?: boolean;
        member?: Member;
        width?: number;
        x?: number;
        y?: number;
        label?: string;
        measure?: string;
        rowIndex?: number;
        rows?: any[];
        type?: string;
        value?: number;
    }

    interface ExportOptions {
        filename?: string;
        destinationType?: string;
        excelSheetName?: string;
        footer?: string;
        header?: string;
        pageOrientation?: string;
        showFilters?: boolean;
        url?: string;
    }

    interface Hierarchy {
        caption?: string;
        dimensionName?: string;
        filter?: {
            members?: string[],
            negation?: boolean,
            measure?: string,
            quantity?: number,
            type?: string
        };
        sort?: "asc" | "desc" | "unsorted";
        uniqueName?: string;
    }

    interface Measure {
        uniqueName?: string;
        active?: boolean;
        aggregation?: string;
        availableAggregations?: string[];
        caption?: string;
        formula?: string;
        format?: string;
        grandTotalCaption?: string;
    }

    interface MeasureObject {
        uniqueName: string;
        aggregation?: string;
    }

    interface ConditionalFormat {
        formula?: string;
        format?: Style;
        formatCSS?: string;
        row?: number;
        column?: number;
        measure?: string;
        hierarchy?: string;
        member?: string;
        isTotal?: number;
    }

    interface Style {
        color?: string;
        backgroundColor?: string;
        backgroundImage?: string;
        borderColor?: string;
        fontSize?: string;
        fontWeight?: string;
        fill?: string;
        textAlign?: string;
        fontFamily?: string;
        width?: number;
        maxWidth?: number;
        height?: number;
        maxHeight?: number;
    }

    interface Format {
        name?: string;
        thousandsSeparator?: string;
        decimalSeparator?: string;
        decimalPlaces?: number;
        maxDecimalPlaces?: number;
        maxSymbols?: number;
        currencySymbol?: string;
        currencySymbolAlign?: string;
        nullValue?: string;
        infinityValue?: string;
        divideByZeroValue?: string;
        textAlign?: string;
    }

    interface ColumnSize {
        width?: number;
        idx?: number;
        tuple?: string[];
        measure?: string;
    }

    interface RowSize {
        height?: number;
        idx?: number;
        tuple?: string[];
        measure?: string;
    }

    interface CellBuilder {
        attr?: object;
        classes?: string[];
        style?: object;
        tag?: string;
        text?: string;
        addClass(value?: string): void;
        toHtml(): string;
    }
}
