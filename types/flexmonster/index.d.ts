// Type definitions for flexmonster 2.7
// Project: https://flexmonster.com/
// Definitions by:  Dima Zvazhii <https://github.com/Uaman>
//                  Ian Sadovy <https://github.com/iansadovy>
//                  Flexmonster Team (Admin) <https://github.com/flexmonsterowner>
//                  Flexmonster Team <https://github.com/flexmonsterteam>
//                  Iryna Kulchytska <https://github.com/irakulchytska>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export as namespace Flexmonster;

declare const Flexmonster: FlexmonsterConstructor;
export = Flexmonster;

interface FlexmonsterConstructor {
    new(params: Flexmonster.Params): Flexmonster.Pivot;
    (params: Flexmonster.Params): Flexmonster.Pivot;
}

declare namespace Flexmonster {
    interface Params {
        // params
        toolbar?: boolean;
        licenseKey?: string;
        width?: string | number;
        height?: string | number;
        componentFolder?: string;
        report?: Report | string;
        global?: Report;
        customizeCell?: (cell: CellBuilder, data: CellData) => void;
        customizeContextMenu?: (items: ContextMenuItem[], data: CellData | ChartData, viewType: string) => ContextMenuItem[];
        // events
        afterchartdraw?: () => void;
        aftergriddraw?: (param: object) => void;
        beforegriddraw?: (param: object) => void;
        beforetoolbarcreated?: (toolbar: Toolbar) => void;
        cellclick?: (cell: CellData) => void;
        celldoubleclick?: (cell: CellData) => void;
        chartclick?: (data: ChartData) => void;
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
        olapstructureerror?: () => void;
        olapstructureloaded?: () => void;
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
        alert(options: { title?: string; message?: string; type?: string; buttons?: Array<{ label: string; handler?: () => void; }>; blocking?: boolean; }): void;
        clear(): void;
        clearFilter(hierarchyName: string): void;
        clearXMLACache(proxyUrl: string, databaseId: string, callbackHandler: ((reponse: object) => void) | string, cubeId: string, measuresGroupId: string,
            username?: string, password?: string): void;
        closeFieldsList(): void;
        collapseAllData(): void;
        collapseData(hierarchyName: string): void;
        connectTo(object: DataSource): void;
        customizeCell(customizeCellFunction: (cell: CellBuilder, data: CellData) => void): void;
        customizeContextMenu(customizeFunction: (items: ContextMenuItem[], data: CellData | ChartData, viewType: string) => ContextMenuItem[]): void;
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
        getData(options: { slice?: Slice }, callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
            updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string): void;
        getFilter(hierarchyName: string): Filter;
        getFormat(measureName: string): Format;
        getMeasures(): Measure[];
        getMembers(hierarchyName: string, memberName: string, callbackHandler: ((members: Member[]) => void) | string): Member[];
        getOptions(): Options;
        getReport(format?: string): Report | string;
        getReportFilters(): Hierarchy[];
        getRows(): Hierarchy[];
        getSelectedCell(): CellData | CellData[];
        getSort(hierarchyName: string): string;
        getXMLACatalogs(proxyURL: string, dataSource: string, callbackHandler: ((response: any) => void) | string, username?: string, password?: string): void;
        getXMLACubes(proxyURL: string, dataSource: string, catalog: string, callbackHandler: ((response: any) => void) | string, username?: string, password?: string): void;
        getXMLADataSources(proxyURL: string, callbackHandler: ((response: any) => void) | string, username?: string, password?: string): void;
        getXMLAProviderName(proxyURL: string, callbackHandler: ((response: any) => void) | string, username?: string, password?: string): string;
        load(url: string, componentFolder?: string): void;
        off(eventType: string, handler?: ((...args: any[]) => any) | string): void;
        on(eventType: string, handler: ((...args: any[]) => any) | string): void;
        open(): void;
        openCalculatedValueEditor(uniqueName?: string, callbackHandler?: ((response: { uniqueName: string, isRemoved: boolean }) => void) | string): void;
        openFieldsList(): void;
        openFilter(hierarchyName: string): void;
        print(options?: PrintOptions): void;
        refresh(): void;
        removeAllCalculatedMeasures(): void;
        removeAllConditions(): void;
        removeCalculatedMeasure(uniqueName: string): void;
        removeCondition(id: string): void;
        removeSelection(): void;
        runQuery(slice: Slice): void;
        save(filename: string, destination: string, callbackHandler?: (() => void) | string, url?: string, embedData?: boolean): string;
        setFilter(hierarchyName: string, filter: Filter): void;
        setFormat(format: Format, measureName: string): void;
        setOptions(options: Options): void;
        setReport(report: Report): void;
        setSort(hierarchyName: string, sortName: string, customSorting?: string[]): void;
        showCharts(type?: string, multiple?: boolean): void;
        showGrid(): void;
        showGridAndCharts(type?: string, position?: string, multiple?: boolean): void;
        sortingMethod(hierarchyName: string, compareFunction: (a: string, b: string) => number): void;
        sortValues(axisName: string, type: string, tuple: number[], measure: MeasureObject): void;
        toolbar: Toolbar;
        updateData(object: DataSource | object[], options?: {ignoreScroll?: boolean, ignoreSorting?: boolean, partial?: boolean}): void;
        version: string;
        fusioncharts?: {
            getData(options: { type: string; slice?: Slice; prepareDataFunction?: (rawData: any) => any },
                callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
                updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string): void;
            getNumberFormat(format: object): object;
        };
        googlecharts?: {
            getData(options: { type?: string; slice?: Slice; prepareDataFunction?: (rawData: any) => any },
                callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
                updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string): void;
            getNumberFormat(format: object): object;
            getNumberFormatPattern(format: object): string;
        };
        highcharts?: {
            getData(options: { type?: string; slice?: Slice; xAxisType?: string; valuesOnly?: boolean, withDrilldown?: boolean, prepareDataFunction?: (rawData: any) => any },
                callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
                updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string): void;
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
            columns?: ColumnSize[];
            rows?: RowSize[];
        };
        localization?: object | string;
        version?: string;
        creationDate?: string;
    }

    interface DataSource {
        type?: string;
        dataSourceType?: string;
        browseForFile?: boolean;
        catalog?: string;
        cube?: string;
        data?: object[];
        dataSourceInfo?: string;
        fieldSeparator?: string;
        thousandSeparator?: string;
        filename?: string;
        ignoreQuotedLineBreaks?: boolean;
        proxyUrl?: string;
        recordsetDelimiter?: string;
        binary?: boolean;
        roles?: string;
        localeIdentifier?: string;
        effectiveUserName?: string;
        customData?: string;
        hash?: string;
        username?: string;
        password?: string;
        requestHeaders?: object;
        subquery?: string | object;
        // elasticsearch
        host?: string | string[] | object;
        index?: string;
        mapping?: object;
    }

    interface Slice {
        columns?: Hierarchy[];
        measures?: Measure[];
        reportFilters?: Hierarchy[];
        rows?: Hierarchy[];
        drills?: {
            drillAll?: boolean;
            columns?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
            rows?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
        };
        expands?: {
            expandAll?: boolean;
            columns?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
            rows?: Array<{ tuple: string[]; measure?: MeasureObject; }>;
        };
        sorting?: {
            column?: Array<{ type: string; tuple: string[]; measure: MeasureObject; }>;
            row?: Array<{ type: string; tuple: string[]; measure: MeasureObject; }>;
        };
        drillThrough?: string[];
        flatOrder?: string[];
    }

    interface Options {
        chart?: {
            activeMeasure?: MeasureObject;
            activeTupleIndex?: number;
            autoRange?: boolean;
            labelsHierarchy?: string;
            multipleMeasures?: boolean;
            oneLevel?: boolean;
            showFilter?: boolean;
            showLegend?: boolean;
            showLegendButton?: boolean;
            showMeasures?: boolean;
            showWarning?: boolean;
            title?: string;
            type?: string;
            showDataLabels?: boolean;
            reversedAxes?: boolean;
            showAllLabels?: boolean;
            showOneMeasureSelection?: boolean;
            position?: string;
            pieDataIndex?: string;
            axisShortNumberFormat?: boolean;
        };
        grid?: {
            showFilter?: boolean;
            showGrandTotals?: string;
            showHeaders?: boolean;
            showHierarchies?: boolean;
            showHierarchyCaptions?: boolean;
            showReportFiltersArea?: boolean;
            showTotals?: boolean;
            showEmptyValues?: boolean;
            title?: string;
            type?: string;
            showAutoCalculationBar?: boolean;
            dragging?: boolean;
            grandTotalsPosition?: string;
            drillThroughMaxRows?: number;
        };
        filter?: {
            timezoneOffset?: number;
            weekOffset?: number;
            dateFormat?: string;
            liveSearch?: boolean;
        };
        configuratorActive?: boolean;
        configuratorButton?: boolean;
        dateTimezoneOffset?: number;
        datePattern?: string;
        dateTimePattern?: string;
        defaultHierarchySortName?: string;
        drillThrough?: boolean;
        editing?: boolean;
        selectEmptyCells?: boolean;
        showAggregations?: boolean;
        showCalculatedValuesButton?: boolean;
        showDefaultSlice?: boolean;
        showMemberProperties?: boolean;
        sorting?: string;
        viewType?: string;
        showAggregationLabels?: boolean;
        useOlapFormatting?: boolean;
        defaultDateType?: string;
        timePattern?: string;
        showOutdatedDataAlert?: boolean;
        showEmptyData?: boolean;
        saveAllFormats?: boolean;
        showDrillThroughConfigurator?: boolean;
        grouping?: boolean;
        showAllFieldsDrillThrough?: boolean;
        validateFormulas?: boolean;
        showFieldListSearch?: boolean;
        strictDataTypes?: boolean;
        caseSensitiveMembers?: boolean;
        simplifyFieldListFolders?: boolean;
        validateReportFiles?: boolean;
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
        type: string;
        members?: FilterItem[];
        quantity?: number;
        measure?: MeasureObject;
    }

    interface FilterItem {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
    }

    interface CellData {
        columnIndex?: number;
        columns?: object[];
        escapedLabel?: string;
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
        label?: string;
        level?: number;
        measure?: MeasureObject;
        member?: Member;
        recordId?: string | string[];
        rowData?: CellData[];
        rowIndex?: number;
        rows?: object[];
        type?: string;
        value?: number;
        width?: number;
        x?: number;
        y?: number;
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
        useOlapFormattingInExcel?: boolean;
        useCustomizeCellForData?: boolean;
        excelExportAll?: boolean;
        requestHeaders?: object;
        fontUrl?: string;
    }

    interface Hierarchy {
        caption?: string;
        dimensionName?: string;
        filter?: Filter;
        sortName?: string;
        sortOrder?: string[];
        uniqueName?: string;
        levels?: Level[];
    }

    interface Filter {
        members?: string[];
        exclude?: string[];
        include?: string[];
        query?: NumberQuery | LabelQuery | DateQuery | TimeQuery | ValueQuery;
        measure?: string | MeasureObject;
    }

    interface NumberQuery {
        equal?: number;
        not_equal?: number;
        greater?: number;
        greater_equal?: number;
        less?: number;
        less_equal?: number;
        between?: number[];
        not_between?: number[];
    }

    interface LabelQuery {
        equal?: string;
        not_equal?: string;
        begin?: string;
        not_begin?: string;
        end?: string;
        not_end?: string;
        contain?: string;
        not_contain?: string;
        greater?: string;
        greater_equal?: string;
        less?: string;
        less_equal?: string;
        between?: string[];
        not_between?: string[];
    }

    interface DateQuery {
        equal?: string;
        not_equal?: string;
        before?: string;
        before_equal?: string;
        after?: string;
        after_equal?: string;
        between?: string[];
        not_between?: string[];
        last?: string;
        current?: string;
        next?: string;
    }

    interface TimeQuery {
        equal?: string;
        not_equal?: string;
        greater?: string;
        greater_equal?: string;
        less?: string;
        less_equal?: string;
        between?: string[];
        not_between?: string[];
    }

    interface ValueQuery extends NumberQuery {
        top?: number;
        bottom?: number;
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
        measureName?: string;
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
        negativeCurrencyFormat?: string;
        positiveCurrencyFormat?: string;
        nullValue?: string;
        infinityValue?: string;
        divideByZeroValue?: string;
        textAlign?: string;
        isPercent?: boolean;
        beautifyFloatingPoint?: boolean;
    }

    interface ColumnSize {
        width?: number;
        idx?: number;
        tuple?: string[];
        measure?: MeasureObject;
    }

    interface RowSize {
        height?: number;
        idx?: number;
        tuple?: string[];
        measure?: MeasureObject;
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

    interface ContextMenuItem {
        label?: string;
        handler?: (() => void) | string;
        submenu?: ContextMenuItem[];
        isSelected?: boolean;
        class?: string;
    }

    interface ChartData {
        element: any;
        columns?: object[];
        id?: string;
        label?: string;
        measure?: MeasureObject;
        rows?: object[];
        value?: number;
    }

    interface Toolbar {
        getTabs: () => ToolbarTab[];
        // Connect tab
        connectLocalCSVHandler: () => void;
        connectLocalJSONHandler: () => void;
        connectRemoteCSV: () => void;
        connectRemoteJSON: () => void;
        connectOLAP: () => void;
        // Open tab
        openLocalReport: () => void;
        openRemoteReport: () => void;
        // Save tab
        saveHandler: () => void;
        // Export tab
        printHandler: () => void;
        exportHandler: (type: string) => void;
        // Grid tab
        gridHandler: () => void;
        // Charts tab
        chartsHandler: (type: string) => void;
        chartsMultipleHandler: () => void;
        // Format tab
        formatCellsHandler: () => void;
        conditionalFormattingHandler: () => void;
        // Options tab
        optionsHandler: () => void;
        // Fields tab
        fieldsHandler: () => void;
        // Fullscreen tab
        fullscreenHandler: () => void;
        icons: {
            connect: string,
            connect_csv: string,
            connect_csv_remote: string,
            connect_json_remote: string,
            connect_olap: string,
            open: string,
            open_local: string,
            open_remote: string,
            save: string,
            export: string,
            export_print: string,
            export_html: string,
            export_csv: string,
            export_excel: string,
            export_image: string,
            export_pdf: string,
            grid: string,
            charts: string,
            charts_bar: string,
            charts_line: string,
            charts_scatter: string,
            charts_pie: string,
            charts_stacked_column: string,
            charts_column_line: string,
            format: string,
            format_number: string,
            format_conditional: string,
            options: string,
            fields: string,
            fullscreen: string,
            minimize: string
        };
    }

    interface ToolbarTab {
        android: boolean;
        args: any;
        handler: (() => void) | string;
        icon: string;
        id: string;
        ios: boolean;
        mobile: boolean;
        menu: ToolbarTab[];
        title: string;
    }

    interface GetDataValueObject {
        data: object[];
        meta: object;
    }

    interface GetDataErrorObject {
        dataHeight: number;
        dataWidth: number;
        errorMessage: string;
    }

    interface Level {
        caption: string;
        uniqueName: string;
    }
}
