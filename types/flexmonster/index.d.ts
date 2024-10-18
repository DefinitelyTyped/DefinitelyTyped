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
        toolbar?: boolean | undefined;
        licenseKey?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        componentFolder?: string | undefined;
        report?: Report | string | undefined;
        global?: Report | undefined;
        customizeCell?: ((cell: CellBuilder, data: CellData) => void) | undefined;
        customizeContextMenu?:
            | ((items: ContextMenuItem[], data: CellData | ChartData, viewType: string) => ContextMenuItem[])
            | undefined;
        // events
        afterchartdraw?: (() => void) | undefined;
        aftergriddraw?: ((param: object) => void) | undefined;
        beforegriddraw?: ((param: object) => void) | undefined;
        beforetoolbarcreated?: ((toolbar: Toolbar) => void) | undefined;
        cellclick?: ((cell: CellData) => void) | undefined;
        celldoubleclick?: ((cell: CellData) => void) | undefined;
        chartclick?: ((data: ChartData) => void) | undefined;
        datachanged?: ((param: object) => void) | undefined;
        dataerror?: ((param: object) => void) | undefined;
        datafilecancelled?: (() => void) | undefined;
        dataloaded?: (() => void) | undefined;
        exportcomplete?: (() => void) | undefined;
        exportstart?: (() => void) | undefined;
        fieldslistclose?: (() => void) | undefined;
        fieldslistopen?: (() => void) | undefined;
        filterclose?: (() => void) | undefined;
        filteropen?: (() => void) | undefined;
        loadingdata?: (() => void) | undefined;
        loadinglocalization?: (() => void) | undefined;
        loadingolapstructure?: (() => void) | undefined;
        loadingreportfile?: (() => void) | undefined;
        localizationerror?: (() => void) | undefined;
        localizationloaded?: (() => void) | undefined;
        olapstructureerror?: (() => void) | undefined;
        olapstructureloaded?: (() => void) | undefined;
        openingreportfile?: (() => void) | undefined;
        printcomplete?: (() => void) | undefined;
        printstart?: (() => void) | undefined;
        querycomplete?: (() => void) | undefined;
        queryerror?: (() => void) | undefined;
        ready?: (() => void) | undefined;
        reportchange?: (() => void) | undefined;
        reportcomplete?: (() => void) | undefined;
        reportfileloaded?: (() => void) | undefined;
        reportfilecancelled?: (() => void) | undefined;
        reportfileerror?: (() => void) | undefined;
        runningquery?: (() => void) | undefined;
        update?: (() => void) | undefined;
        // other
        container?: string | undefined;
    }

    interface Pivot {
        addCalculatedMeasure(measure: Measure): void;
        addCondition(condition: ConditionalFormat): void;
        addJSON(json: object[]): void;
        alert(
            options: {
                title?: string | undefined;
                message?: string | undefined;
                type?: string | undefined;
                buttons?: Array<{ label: string; handler?: (() => void) | undefined }> | undefined;
                blocking?: boolean | undefined;
            },
        ): void;
        clear(): void;
        clearFilter(hierarchyName: string): void;
        clearXMLACache(
            proxyUrl: string,
            databaseId: string,
            callbackHandler: ((reponse: object) => void) | string,
            cubeId: string,
            measuresGroupId: string,
            username?: string,
            password?: string,
        ): void;
        closeFieldsList(): void;
        collapseAllData(): void;
        collapseData(hierarchyName: string): void;
        connectTo(object: DataSource): void;
        customizeCell(customizeCellFunction: (cell: CellBuilder, data: CellData) => void): void;
        customizeContextMenu(
            customizeFunction: (
                items: ContextMenuItem[],
                data: CellData | ChartData,
                viewType: string,
            ) => ContextMenuItem[],
        ): void;
        dispose(): void;
        expandAllData(withAllChildren?: boolean): void;
        expandData(hierarchyName: string): void;
        exportTo(
            type: string,
            exportOptions?: ExportOptions,
            callbackHandler?: ((result: object) => void) | string,
        ): void;
        getAllConditions(): ConditionalFormat[];
        getAllHierarchies(): Hierarchy[];
        getAllMeasures(): Measure[];
        getCell(rowIdx: number, colIdx: number): CellData;
        getColumns(): Hierarchy[];
        getCondition(id: string): ConditionalFormat;
        getData(
            options: { slice?: Slice | undefined },
            callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
            updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
        ): void;
        getFilter(hierarchyName: string): Filter;
        getFormat(measureName: string): Format;
        getMeasures(): Measure[];
        getMembers(
            hierarchyName: string,
            memberName: string,
            callbackHandler: ((members: Member[]) => void) | string,
        ): Member[];
        getOptions(): Options;
        getReport(format?: string): Report | string;
        getReportFilters(): Hierarchy[];
        getRows(): Hierarchy[];
        getSelectedCell(): CellData | CellData[];
        getSort(hierarchyName: string): string;
        getXMLACatalogs(
            proxyURL: string,
            dataSource: string,
            callbackHandler: ((response: any) => void) | string,
            username?: string,
            password?: string,
        ): void;
        getXMLACubes(
            proxyURL: string,
            dataSource: string,
            catalog: string,
            callbackHandler: ((response: any) => void) | string,
            username?: string,
            password?: string,
        ): void;
        getXMLADataSources(
            proxyURL: string,
            callbackHandler: ((response: any) => void) | string,
            username?: string,
            password?: string,
        ): void;
        getXMLAProviderName(
            proxyURL: string,
            callbackHandler: ((response: any) => void) | string,
            username?: string,
            password?: string,
        ): string;
        load(url: string, componentFolder?: string): void;
        off(eventType: string, handler?: ((...args: any[]) => any) | string): void;
        on(eventType: string, handler: ((...args: any[]) => any) | string): void;
        open(): void;
        openCalculatedValueEditor(
            uniqueName?: string,
            callbackHandler?: ((response: { uniqueName: string; isRemoved: boolean }) => void) | string,
        ): void;
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
        save(
            filename: string,
            destination: string,
            callbackHandler?: (() => void) | string,
            url?: string,
            embedData?: boolean,
        ): string;
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
        updateData(
            object: DataSource | object[],
            options?: {
                ignoreScroll?: boolean | undefined;
                ignoreSorting?: boolean | undefined;
                partial?: boolean | undefined;
            },
        ): void;
        version: string;
        fusioncharts?: {
            getData(
                options: {
                    type: string;
                    slice?: Slice | undefined;
                    prepareDataFunction?: ((rawData: any) => any) | undefined;
                },
                callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
                updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
            ): void;
            getNumberFormat(format: object): object;
        } | undefined;
        googlecharts?: {
            getData(
                options: {
                    type?: string | undefined;
                    slice?: Slice | undefined;
                    prepareDataFunction?: ((rawData: any) => any) | undefined;
                },
                callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
                updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
            ): void;
            getNumberFormat(format: object): object;
            getNumberFormatPattern(format: object): string;
        } | undefined;
        highcharts?: {
            getData(
                options: {
                    type?: string | undefined;
                    slice?: Slice | undefined;
                    xAxisType?: string | undefined;
                    valuesOnly?: boolean | undefined;
                    withDrilldown?: boolean | undefined;
                    prepareDataFunction?: ((rawData: any) => any) | undefined;
                },
                callbackHandler: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
                updateHandler?: ((rawData: GetDataValueObject, error?: GetDataErrorObject) => void) | string,
            ): void;
            getAxisFormat(format: object): string;
            getPointXFormat(format: object): string;
            getPointYFormat(format: object): string;
            getPointZFormat(format: object): string;
        } | undefined;
    }

    interface Report {
        dataSource?: DataSource | undefined;
        slice?: Slice | undefined;
        options?: Options | undefined;
        conditions?: ConditionalFormat[] | undefined;
        formats?: Format[] | undefined;
        tableSizes?: {
            columns?: ColumnSize[] | undefined;
            rows?: RowSize[] | undefined;
        } | undefined;
        localization?: object | string | undefined;
        version?: string | undefined;
        creationDate?: string | undefined;
    }

    interface DataSource {
        type?: string | undefined;
        dataSourceType?: string | undefined;
        browseForFile?: boolean | undefined;
        catalog?: string | undefined;
        cube?: string | undefined;
        data?: object[] | undefined;
        dataSourceInfo?: string | undefined;
        fieldSeparator?: string | undefined;
        thousandSeparator?: string | undefined;
        filename?: string | undefined;
        ignoreQuotedLineBreaks?: boolean | undefined;
        proxyUrl?: string | undefined;
        recordsetDelimiter?: string | undefined;
        binary?: boolean | undefined;
        roles?: string | undefined;
        localeIdentifier?: string | undefined;
        effectiveUserName?: string | undefined;
        customData?: string | undefined;
        hash?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
        requestHeaders?: object | undefined;
        subquery?: string | object | undefined;
        // elasticsearch
        host?: string | string[] | object | undefined;
        index?: string | undefined;
        mapping?: object | undefined;
    }

    interface Slice {
        columns?: Hierarchy[] | undefined;
        measures?: Measure[] | undefined;
        reportFilters?: Hierarchy[] | undefined;
        rows?: Hierarchy[] | undefined;
        drills?: {
            drillAll?: boolean | undefined;
            columns?: Array<{ tuple: string[]; measure?: MeasureObject | undefined }> | undefined;
            rows?: Array<{ tuple: string[]; measure?: MeasureObject | undefined }> | undefined;
        } | undefined;
        expands?: {
            expandAll?: boolean | undefined;
            columns?: Array<{ tuple: string[]; measure?: MeasureObject | undefined }> | undefined;
            rows?: Array<{ tuple: string[]; measure?: MeasureObject | undefined }> | undefined;
        } | undefined;
        sorting?: {
            column?: Array<{ type: string; tuple: string[]; measure: MeasureObject }> | undefined;
            row?: Array<{ type: string; tuple: string[]; measure: MeasureObject }> | undefined;
        } | undefined;
        drillThrough?: string[] | undefined;
        flatOrder?: string[] | undefined;
    }

    interface Options {
        chart?: {
            activeMeasure?: MeasureObject | undefined;
            activeTupleIndex?: number | undefined;
            autoRange?: boolean | undefined;
            labelsHierarchy?: string | undefined;
            multipleMeasures?: boolean | undefined;
            oneLevel?: boolean | undefined;
            showFilter?: boolean | undefined;
            showLegend?: boolean | undefined;
            showLegendButton?: boolean | undefined;
            showMeasures?: boolean | undefined;
            showWarning?: boolean | undefined;
            title?: string | undefined;
            type?: string | undefined;
            showDataLabels?: boolean | undefined;
            reversedAxes?: boolean | undefined;
            showAllLabels?: boolean | undefined;
            showOneMeasureSelection?: boolean | undefined;
            position?: string | undefined;
            pieDataIndex?: string | undefined;
            axisShortNumberFormat?: boolean | undefined;
        } | undefined;
        grid?: {
            showFilter?: boolean | undefined;
            showGrandTotals?: string | undefined;
            showHeaders?: boolean | undefined;
            showHierarchies?: boolean | undefined;
            showHierarchyCaptions?: boolean | undefined;
            showReportFiltersArea?: boolean | undefined;
            showTotals?: boolean | undefined;
            showEmptyValues?: boolean | undefined;
            title?: string | undefined;
            type?: string | undefined;
            showAutoCalculationBar?: boolean | undefined;
            dragging?: boolean | undefined;
            grandTotalsPosition?: string | undefined;
            drillThroughMaxRows?: number | undefined;
        } | undefined;
        filter?: {
            timezoneOffset?: number | undefined;
            weekOffset?: number | undefined;
            dateFormat?: string | undefined;
            liveSearch?: boolean | undefined;
        } | undefined;
        configuratorActive?: boolean | undefined;
        configuratorButton?: boolean | undefined;
        dateTimezoneOffset?: number | undefined;
        datePattern?: string | undefined;
        dateTimePattern?: string | undefined;
        defaultHierarchySortName?: string | undefined;
        drillThrough?: boolean | undefined;
        editing?: boolean | undefined;
        selectEmptyCells?: boolean | undefined;
        showAggregations?: boolean | undefined;
        showCalculatedValuesButton?: boolean | undefined;
        showDefaultSlice?: boolean | undefined;
        showMemberProperties?: boolean | undefined;
        sorting?: string | undefined;
        viewType?: string | undefined;
        showAggregationLabels?: boolean | undefined;
        useOlapFormatting?: boolean | undefined;
        defaultDateType?: string | undefined;
        timePattern?: string | undefined;
        showOutdatedDataAlert?: boolean | undefined;
        showEmptyData?: boolean | undefined;
        saveAllFormats?: boolean | undefined;
        showDrillThroughConfigurator?: boolean | undefined;
        grouping?: boolean | undefined;
        showAllFieldsDrillThrough?: boolean | undefined;
        validateFormulas?: boolean | undefined;
        showFieldListSearch?: boolean | undefined;
        strictDataTypes?: boolean | undefined;
        caseSensitiveMembers?: boolean | undefined;
        simplifyFieldListFolders?: boolean | undefined;
        validateReportFiles?: boolean | undefined;
    }

    interface PrintOptions {
        header?: string | undefined;
        footer?: string | undefined;
    }

    interface Member {
        caption?: string | undefined;
        uniqueName?: string | undefined;
        hierarchyName?: string | undefined;
        children?: Member[] | undefined;
        isLeaf?: boolean | undefined;
        parentMember?: string | undefined;
    }

    interface FilterProperties {
        type: string;
        members?: FilterItem[] | undefined;
        quantity?: number | undefined;
        measure?: MeasureObject | undefined;
    }

    interface FilterItem {
        caption?: string | undefined;
        uniqueName?: string | undefined;
        hierarchyName?: string | undefined;
    }

    interface CellData {
        columnIndex?: number | undefined;
        columns?: object[] | undefined;
        escapedLabel?: string | undefined;
        height?: number | undefined;
        hierarchy?: Hierarchy | undefined;
        isClassicTotalRow?: boolean | undefined;
        isDrillThrough?: boolean | undefined;
        isGrandTotal?: boolean | undefined;
        isGrandTotalColumn?: boolean | undefined;
        isGrandTotalRow?: boolean | undefined;
        isTotal?: boolean | undefined;
        isTotalColumn?: boolean | undefined;
        isTotalRow?: boolean | undefined;
        label?: string | undefined;
        level?: number | undefined;
        measure?: MeasureObject | undefined;
        member?: Member | undefined;
        recordId?: string | string[] | undefined;
        rowData?: CellData[] | undefined;
        rowIndex?: number | undefined;
        rows?: object[] | undefined;
        type?: string | undefined;
        value?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }

    interface ExportOptions {
        filename?: string | undefined;
        destinationType?: string | undefined;
        excelSheetName?: string | undefined;
        footer?: string | undefined;
        header?: string | undefined;
        pageOrientation?: string | undefined;
        showFilters?: boolean | undefined;
        url?: string | undefined;
        useOlapFormattingInExcel?: boolean | undefined;
        useCustomizeCellForData?: boolean | undefined;
        excelExportAll?: boolean | undefined;
        requestHeaders?: object | undefined;
        fontUrl?: string | undefined;
    }

    interface Hierarchy {
        caption?: string | undefined;
        dimensionName?: string | undefined;
        filter?: Filter | undefined;
        sortName?: string | undefined;
        sortOrder?: string[] | undefined;
        uniqueName?: string | undefined;
        levels?: Level[] | undefined;
    }

    interface Filter {
        members?: string[] | undefined;
        exclude?: string[] | undefined;
        include?: string[] | undefined;
        query?: NumberQuery | LabelQuery | DateQuery | TimeQuery | ValueQuery | undefined;
        measure?: string | MeasureObject | undefined;
    }

    interface NumberQuery {
        equal?: number | undefined;
        not_equal?: number | undefined;
        greater?: number | undefined;
        greater_equal?: number | undefined;
        less?: number | undefined;
        less_equal?: number | undefined;
        between?: number[] | undefined;
        not_between?: number[] | undefined;
    }

    interface LabelQuery {
        equal?: string | undefined;
        not_equal?: string | undefined;
        begin?: string | undefined;
        not_begin?: string | undefined;
        end?: string | undefined;
        not_end?: string | undefined;
        contain?: string | undefined;
        not_contain?: string | undefined;
        greater?: string | undefined;
        greater_equal?: string | undefined;
        less?: string | undefined;
        less_equal?: string | undefined;
        between?: string[] | undefined;
        not_between?: string[] | undefined;
    }

    interface DateQuery {
        equal?: string | undefined;
        not_equal?: string | undefined;
        before?: string | undefined;
        before_equal?: string | undefined;
        after?: string | undefined;
        after_equal?: string | undefined;
        between?: string[] | undefined;
        not_between?: string[] | undefined;
        last?: string | undefined;
        current?: string | undefined;
        next?: string | undefined;
    }

    interface TimeQuery {
        equal?: string | undefined;
        not_equal?: string | undefined;
        greater?: string | undefined;
        greater_equal?: string | undefined;
        less?: string | undefined;
        less_equal?: string | undefined;
        between?: string[] | undefined;
        not_between?: string[] | undefined;
    }

    interface ValueQuery extends NumberQuery {
        top?: number | undefined;
        bottom?: number | undefined;
    }

    interface Measure {
        uniqueName?: string | undefined;
        active?: boolean | undefined;
        aggregation?: string | undefined;
        availableAggregations?: string[] | undefined;
        caption?: string | undefined;
        formula?: string | undefined;
        format?: string | undefined;
        grandTotalCaption?: string | undefined;
    }

    interface MeasureObject {
        uniqueName: string;
        aggregation?: string | undefined;
    }

    interface ConditionalFormat {
        formula?: string | undefined;
        format?: Style | undefined;
        formatCSS?: string | undefined;
        row?: number | undefined;
        column?: number | undefined;
        measureName?: string | undefined;
        hierarchy?: string | undefined;
        member?: string | undefined;
        isTotal?: number | undefined;
    }

    interface Style {
        color?: string | undefined;
        backgroundColor?: string | undefined;
        backgroundImage?: string | undefined;
        borderColor?: string | undefined;
        fontSize?: string | undefined;
        fontWeight?: string | undefined;
        fill?: string | undefined;
        textAlign?: string | undefined;
        fontFamily?: string | undefined;
        width?: number | undefined;
        maxWidth?: number | undefined;
        height?: number | undefined;
        maxHeight?: number | undefined;
    }

    interface Format {
        name?: string | undefined;
        thousandsSeparator?: string | undefined;
        decimalSeparator?: string | undefined;
        decimalPlaces?: number | undefined;
        maxDecimalPlaces?: number | undefined;
        maxSymbols?: number | undefined;
        currencySymbol?: string | undefined;
        currencySymbolAlign?: string | undefined;
        negativeCurrencyFormat?: string | undefined;
        positiveCurrencyFormat?: string | undefined;
        nullValue?: string | undefined;
        infinityValue?: string | undefined;
        divideByZeroValue?: string | undefined;
        textAlign?: string | undefined;
        isPercent?: boolean | undefined;
        beautifyFloatingPoint?: boolean | undefined;
    }

    interface ColumnSize {
        width?: number | undefined;
        idx?: number | undefined;
        tuple?: string[] | undefined;
        measure?: MeasureObject | undefined;
    }

    interface RowSize {
        height?: number | undefined;
        idx?: number | undefined;
        tuple?: string[] | undefined;
        measure?: MeasureObject | undefined;
    }

    interface CellBuilder {
        attr?: object | undefined;
        classes?: string[] | undefined;
        style?: object | undefined;
        tag?: string | undefined;
        text?: string | undefined;
        addClass(value?: string): void;
        toHtml(): string;
    }

    interface ContextMenuItem {
        label?: string | undefined;
        handler?: (() => void) | string | undefined;
        submenu?: ContextMenuItem[] | undefined;
        isSelected?: boolean | undefined;
        class?: string | undefined;
    }

    interface ChartData {
        element: any;
        columns?: object[] | undefined;
        id?: string | undefined;
        label?: string | undefined;
        measure?: MeasureObject | undefined;
        rows?: object[] | undefined;
        value?: number | undefined;
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
            connect: string;
            connect_csv: string;
            connect_csv_remote: string;
            connect_json_remote: string;
            connect_olap: string;
            open: string;
            open_local: string;
            open_remote: string;
            save: string;
            export: string;
            export_print: string;
            export_html: string;
            export_csv: string;
            export_excel: string;
            export_image: string;
            export_pdf: string;
            grid: string;
            charts: string;
            charts_bar: string;
            charts_line: string;
            charts_scatter: string;
            charts_pie: string;
            charts_stacked_column: string;
            charts_column_line: string;
            format: string;
            format_number: string;
            format_conditional: string;
            options: string;
            fields: string;
            fullscreen: string;
            minimize: string;
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
