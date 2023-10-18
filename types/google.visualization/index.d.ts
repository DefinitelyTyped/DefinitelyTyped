declare namespace google {
    /** Legacy https://developers.google.com/chart/interactive/docs/basic_load_libs#updateloader */
    function load(visualization: "visualization", version: string | number, options: LoadOptions): void;
    function setOnLoadCallback(handler: Function): void;
    function setOnLoadCallback(handler: () => void): void;

    // https://developers.google.com/chart/interactive/docs/basic_load_libs
    namespace charts {
        /** Loads with `safeMode` enabled. */
        function safeLoad(options: LoadOptions): Promise<void>;
        function load(options: LoadOptions): Promise<void>;
        function load(version: string | number, options: LoadOptions): Promise<void>;
        /** Legacy https://developers.google.com/chart/interactive/docs/basic_load_libs#updateloader */
        function load(visualization: "visualization", version: string | number, options: LoadOptions): Promise<void>;

        function setOnLoadCallback(handler: Function): void;
    }

    export interface LoadOptions {
        packages?: string | string[] | undefined;
        language?: string | undefined;
        callback?: Function | undefined;
        mapsApiKey?: string | undefined;
        safeMode?: boolean | undefined;
        /** not documented */
        debug?: boolean | undefined;
        /** not documented */
        pseudo?: boolean | undefined;
        /** not documented, looks for charts-version in url query params */
        enableUrlSettings?: boolean | undefined;
    }

    // https://developers.google.com/chart/interactive/docs/reference
    namespace visualization {
        export function dataTableToCsv(data: DataTable | DataView): string;
        export function arrayToDataTable(data: any[], firstRowIsData?: boolean): DataTable;

        export interface ChartSpecs {
            chartType: string;
            container?: HTMLElement | undefined;
            containerId?: string | undefined;
            options?: Object | undefined;
            dataTable?: Object | undefined;
            dataSourceUrl?: string | undefined;
            query?: string | undefined;
            refreshInterval?: number | undefined;
            view?: any;
        }

        export interface ErrorEventObject {
            id: string;
            message: string;
            detailedMessage?: string | undefined;
            options?: any;
        }

        // #region ChartWrapper
        // https://developers.google.com/chart/interactive/docs/reference#chartwrapperobject
        export class ChartWrapper {
            constructor(spec?: ChartSpecs);
            draw(container_ref?: HTMLElement): void;
            toJSON(): string;
            clone(): ChartWrapper;
            getDataSourceUrl(): string;
            getDataTable(): DataTable;
            getChartType(): string;
            getChartName(): string;
            getChart(): ChartBase | null;
            getContainerId(): string;
            getQuery(): string;
            getRefreshInterval(): number;
            getOption(key: string, default_val?: string): any;
            getOptions(): Object;
            getView(): any;
            setDataSourceUrl(url: string): void;
            setDataTable(table: DataTable): void;
            setChartType(type: string): void;
            setChartName(name: string): void;
            setContainerId(id: string): void;
            setQuery(query: string): void;
            setRefreshInterval(interval: number): void;
            setOption(key: string, value: any): void;
            setOptions(options: Object): void;
            setView(view_spec: string): void;
        }
        // #endregion

        // #region data
        // https://developers.google.com/chart/interactive/docs/reference#google_visualization_data_group
        export interface GroupKeyOptions {
            column: number;
            type: string;
            modifier?: ((value: any) => any) | undefined;
            label?: string | undefined;
            id?: string | undefined;
        }

        export interface GroupColumnOptions {
            column: number;
            aggregation: (values: any[]) => any;
            type: string;
            label?: string | undefined;
            id?: string | undefined;
        }

        namespace data {
            // https://developers.google.com/chart/interactive/docs/reference#data_modifier_functions
            function month(value: Date): number;

            // https://developers.google.com/chart/interactive/docs/reference#group
            function sum(values: ReadonlyArray<number>): number;
            function avg(values: ReadonlyArray<number>): number;
            function min(
                values: ReadonlyArray<number> | ReadonlyArray<string> | ReadonlyArray<Date>,
            ): number | string | Date | null;
            function max(
                values: ReadonlyArray<number> | ReadonlyArray<string> | ReadonlyArray<Date>,
            ): number | string | Date | null;
            function count(values: ReadonlyArray<any>): number;

            function group(
                data: DataTable | DataView,
                keys: ReadonlyArray<number | GroupKeyOptions>,
                columns?: ReadonlyArray<GroupColumnOptions>,
            ): DataTable;

            // https://developers.google.com/chart/interactive/docs/reference#join
            function join(
                dataA: DataTable | DataView,
                dataB: DataTable | DataView,
                joinMethod: "full" | "inner" | "left" | "right",
                keys: ReadonlyArray<[number | string, number | string]>,
                columnsA: ReadonlyArray<number | string>,
                columnsB: ReadonlyArray<number | string>,
            ): DataTable;
        }
        // #endregion

        // #region DataTable
        // https://developers.google.com/chart/interactive/docs/reference#DataTable
        export class DataTable {
            constructor(data?: any, version?: any);
            addColumn(type: string, label?: string, id?: string): number;
            addColumn(descriptionObject: DataTableColumnDescription): number;
            addRow(cellObject: DataObjectCell): number;
            addRow(cellArray?: any[]): number;
            addRows(numberOfEmptyRows: number): number;
            addRows(rows: DataObjectCell[][]): number;
            addRows(rows: any[][]): number;
            clone(): DataTable;
            getColumnId(columnIndex: number): string;
            getColumnIndex(columnIdentifier: number | string): number;
            getColumnLabel(columnIndex: number): string;
            getColumnPattern(columnIndex: number): string;
            getColumnProperties(columnIndex: number): Properties;
            getColumnProperty(columnIndex: number, name: string): any;
            getColumnRange(columnIndex: number): { min: any; max: any };
            getColumnRole(columnIndex: number): string;
            getColumnType(columnIndex: number): string;
            getDistinctValues(columnIndex: number): any[];
            getFilteredRows(filters: DataTableCellFilter[]): number[];
            getFormattedValue(rowIndex: number, columnIndex: number): string;
            getNumberOfColumns(): number;
            getNumberOfRows(): number;
            getProperty(rowIndex: number, columnIndex: number, name: string): any;
            getProperties(rowIndex: number, columnIndex: number): Properties;
            getRowProperties(rowIndex: number): Properties;
            getRowProperty(rowIndex: number, name: string): any;
            getSortedRows(sortColumn: number): number[];
            getSortedRows(sortColumn: SortByColumn): number[];
            getSortedRows(sortColumns: number[]): number[];
            getSortedRows(sortColumns: SortByColumn[]): number[];
            getTableProperties(): Properties;
            getTableProperty(name: string): any;
            getValue(rowIndex: number, columnIndex: number): any;
            insertColumn(columnIndex: number, type: string, label?: string, id?: string): void;
            insertRows(rowIndex: number, numberOfEmptyRows: number): void;
            insertRows(rowIndex: number, rows: DataObjectCell[][]): void;
            insertRows(rowIndex: number, rows: any[][]): void;
            removeColumn(columnIndex: number): void;
            removeColumns(columnIndex: number, numberOfColumns: number): void;
            removeRow(rowIndex: number): void;
            removeRows(rowIndex: number, numberOfRows: number): void;
            setCell(
                rowIndex: number,
                columnIndex: number,
                value?: any,
                formattedValue?: string,
                properties?: Properties,
            ): void;
            setColumnLabel(columnIndex: number, label: string): void;
            setColumnProperty(columnIndex: number, name: string, value: any): void;
            setColumnProperties(columnIndex: number, properties: Properties): void;
            setFormattedValue(rowIndex: number, columnIndex: number, formattedValue: string | null): void;
            setProperty(rowIndex: number, columnIndex: number, name: string, value: any): void;
            setProperties(rowIndex: number, columnIndex: number, properties: Properties): void;
            setRowProperty(rowIndex: number, name: string, value: any): void;
            setRowProperties(rowIndex: number, properties: Properties): void;
            setTableProperty(name: string, value: any): void;
            setTableProperties(properties: Properties): void;
            setValue(rowIndex: number, columnIndex: number, value: any): void;
            sort(sortColumn: number): number[];
            sort(sortColumn: SortByColumn): number[];
            sort(sortColumns: number[]): number[];
            sort(sortColumns: SortByColumn[]): number[];
            toJSON(): string;
        }

        export interface Properties {
            [property: string]: any;
        }

        export interface SortByColumn {
            column: number;
            desc: boolean;
        }

        export interface DataTableColumnDescription {
            type?: string | undefined;
            label?: string | undefined;
            id?: string | undefined;
            role?: string | undefined;
            pattern?: string | undefined;
            p?: any;
        }

        export interface DataObject {
            cols: DataObjectColumn[];
            rows: DataObjectRow[];
            p: any;
        }

        export interface DataObjectColumn {
            type: string;
            id?: string | undefined;
            label?: string | undefined;
            pattern?: string | undefined;
            p?: any;
        }

        export interface DataObjectRow {
            c: DataObjectCell[];
            p?: any;
        }

        export interface DataTableCellFilter {
            column: number;
            value?: any;
            minValue?: any;
            maxValue?: any;
            test?: ((value: any, row?: number, column?: number, data?: DataTable | DataView) => boolean) | undefined;
        }

        export interface DataObjectCell {
            v?: any;
            f?: string | undefined;
            p?: any;
        }

        export interface DataTableCellValueFilter extends DataTableCellFilter {
            value: any;
        }

        export interface DataTableCellRangeFilter extends DataTableCellFilter {
            minValue?: any;
            maxValue?: any;
        }

        // #endregion
        // #region Query

        // https://developers.google.com/chart/interactive/docs/reference#query
        export class Query {
            constructor(dataSourceUrl: string, options?: QueryOptions);

            abort(): void;

            setRefreshInterval(intervalSeconds: number): void;
            setTimeout(timeoutSeconds: number): void;
            setQuery(queryString: string): void;

            send(callback: (response: QueryResponse) => void): void;
        }

        export interface QueryOptions {
            sendMethod?: string | undefined;
            makeRequestParams?: Object | undefined;
        }
        // #endregion
        // #region QueryResponse

        // https://developers.google.com/chart/interactive/docs/reference#queryresponse
        export class QueryResponse {
            constructor(responseObject: Object);

            getDataTable(): DataTable;
            getDetailedMessage(): string;
            getMessage(): string;
            getReasons(): string[];
            hasWarning(): boolean;
            isError(): boolean;
        }

        // #endregion
        // #region DataView

        // https://developers.google.com/chart/interactive/docs/reference#DataView
        export class DataView {
            constructor(data: DataTable | DataView);

            getColumnId(columnIndex: number): String;
            getColumnLabel(columnIndex: number): string;
            getColumnPattern(columnIndex: number): string;
            getColumnProperty(columnIndex: number, name: string): any;
            getColumnRange(columnIndex: number): { min: any; max: any };
            getColumnType(columnIndex: number): string;
            getDistinctValues(columnIndex: number): any[];
            getFilteredRows(filters: DataTableCellFilter[]): number[];
            getFormattedValue(rowIndex: number, columnIndex: number): string;
            getNumberOfColumns(): number;
            getNumberOfRows(): number;
            getProperty(rowIndex: number, columnIndex: number, name: string): any;
            getProperties(rowIndex: number, columnIndex: number): Properties;
            getRowProperty(rowIndex: number, name: string): any;
            getSortedRows(sortColumn: number): number[];
            getSortedRows(sortColumn: SortByColumn): number[];
            getSortedRows(sortColumns: number[]): number[];
            getSortedRows(sortColumns: SortByColumn[]): number[];
            getTableProperty(name: string): any;
            getValue(rowIndex: number, columnIndex: number): any;
            getTableColumnIndex(viewColumnIndex: number): number;
            getTableRowIndex(viewRowIndex: number): number;
            getViewColumnIndex(tableColumnIndex: number): number;
            getViewColumns(): number[];
            getViewColumns(): ColumnSpec[];
            getViewRowIndex(tableRowIndex: number): number;
            getViewRows(): number[];

            hideColumns(columnIndexes: number[]): void;
            hideRows(min: number, max: number): void;
            hideRows(rowIndexes: number[]): void;

            setColumns(columnIndexes: number[]): void;
            setColumns(columnIndexes: ColumnSpec[]): void;
            setColumns(columnIndexes: any[]): void;
            setRows(min: number, max: number): void;
            setRows(rowIndexes: number[]): void;

            toDataTable(): DataTable;
            toJSON(): string;
        }

        export interface ColumnSpec {
            calc?: ((data: DataTable, row: number) => any) | undefined;
            type?: string | undefined;
            label?: string | undefined;
            id?: string | undefined;
            sourceColumn?: number | undefined;
            properties?: Properties | undefined;
            role?: string | undefined;
        }
        // #endregion
        // #region GeoChart

        // https://developers.google.com/chart/interactive/docs/gallery/geochart
        export class GeoChart extends ChartBaseRenderable {
            draw(data: DataTable | DataView, options: GeoChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=fr&csw=1#Configuration_Options
        export interface GeoChartOptions {
            backgroundColor?: string | ChartStrokeFill | undefined;
            colorAxis?: ChartColorAxis | undefined;
            datalessRegionColor?: string | undefined;
            defaultColor?: string | undefined;
            displayMode?: string | undefined;
            enableRegionInteractivity?: boolean | undefined;
            height?: number | undefined;
            keepAspectRatio?: boolean | undefined;
            legend?: ChartLegend | "none" | undefined;
            region?: string | undefined;
            magnifyingGlass?: GeoChartMagnifyingGlass | undefined;
            markerOpacity?: number | undefined;
            resolution?: string | undefined;
            sizeAxis?: ChartSizeAxis | undefined;
            tooltip?: ChartTooltip | undefined;
            width?: number | undefined;
        }
        export interface GeoChartMagnifyingGlass {
            enable?: boolean | undefined;
            zoomFactor?: number | undefined;
        }
        export interface GeoChartRegionClickEvent {
            region: string;
        }
        export interface GeoChartSelection {
            row: number;
        }

        // #endregion
        // #region Common
        export interface ChartAnnotations {
            boxStyle?: ChartBoxStyle | undefined;
            textStyle?: ChartTextStyle | undefined;
            datum?: ChartStemAndStyle | undefined;
            domain?: ChartStemAndStyle | undefined;
            highContrast?: boolean | undefined;
            stem?: ChartStem | undefined;
            style?: string | undefined; // 'line' or 'point'
        }

        export interface ChartBarColumnAnnotations extends ChartAnnotations {
            alwaysOutside?: boolean | undefined;
        }

        export interface ChartStemAndStyle {
            stem?: ChartStem | undefined;
            style?: string | undefined;
        }

        export interface ChartStem {
            color?: string | undefined;
            length?: number | undefined;
        }

        export interface ChartBoxStyle {
            stroke?: string | undefined;
            strokeWidth?: number | undefined;
            rx?: number | undefined;
            ry?: number | undefined;
            gradient?: {
                color1: string;
                color2: string;
                x1: string;
                y1: string;
                x2: string;
                y2: string;
                useObjectBoundingBoxUnits?: boolean | undefined;
            } | undefined;
        }

        export interface ChartTextStyle {
            fontName?: string | undefined;
            fontSize?: number | undefined;
            bold?: boolean | undefined;
            italic?: boolean | undefined;
            color?: string | undefined;
            auraColor?: string | undefined;
            opacity?: number | undefined;
        }

        export interface ChartCrosshair {
            color?: string | undefined;
            focused?: {
                color?: string | undefined;
                opacity?: number | undefined;
            } | undefined;
            opacity?: number | undefined;
            orientation?: ChartOrientation | undefined;
            selected?: {
                color?: string | undefined;
                opacity?: number | undefined;
            } | undefined;
            trigger?: string | undefined;
        }

        export interface ChartExplorer {
            actions?: string[] | undefined;
            axis?: string | undefined;
            keepInBounds?: boolean | undefined;
            maxZoomIn?: number | undefined;
            maxZoomOut?: number | undefined;
            zoomDelta?: number | undefined;
        }

        export interface ChartStrokeFill extends ChartStroke, ChartFill {
        }

        export interface ChartStroke {
            stroke?: string | undefined;
            strokeWidth?: number | undefined;
        }

        export interface ChartStrokeOpacity extends ChartStroke {
            strokeOpacity?: number | undefined;
        }

        export interface ChartFill {
            fill?: string | undefined;
            fillOpacity?: number | undefined;
        }

        export interface ChartArea {
            backgroundColor?: string | ChartStrokeFill | undefined;
            top?: number | string | undefined;
            left?: number | string | undefined;
            right?: number | string | undefined;
            bottom?: number | string | undefined;
            width?: number | string | undefined;
            height?: number | string | undefined;
        }

        export type ChartOrientation = "vertical" | "horizontal";
        export type ChartAxisTitlesPosition = "in" | "out" | "none";

        export type ChartSelectionMode = "single" | "multiple";

        export type ChartLegendPosition = "bottom" | "left" | "in" | "none" | "right" | "top";
        export type ChartLegendAlignment = "start" | "center" | "end";
        export interface ChartLegend {
            alignment?: ChartLegendAlignment | undefined;
            maxLines?: number | undefined;
            position?: ChartLegendPosition | undefined;
            textStyle?: ChartTextStyle | undefined;
            numberFormat?: string | undefined;
        }

        // https://developers.google.com/chart/interactive/docs/animation
        export interface TransitionAnimation {
            duration?: number | undefined;
            easing?: string | undefined; // linear, in, out, inAndOut
            startup?: boolean | undefined;
        }

        export interface ChartAxis {
            baseline?: number | undefined; // This option is only supported for a continuous axis. https://developers.google.com/chart/interactive/docs/customizing_axes#Terminology
            baselineColor?: string | undefined; // google's documentation on this is wrong, specifies it as a number. The color of the baseline for the horizontal axis. Can be any HTML color string, for example: 'red' or '#00cc00'
            direction?: number | undefined; // The direction in which the values along the horizontal axis grow. Specify -1 to reverse the order of the values.
            format?: string | undefined; // icu pattern set http://icu-project.org/apiref/icu4c/classDecimalFormat.html#_details
            gridlines?: ChartGridlines | undefined;
            minorGridlines?: ChartGridlines | undefined;
            logScale?: boolean | undefined;
            textPosition?: string | undefined;
            textStyle?: ChartTextStyle | undefined;
            ticks?: any[] | undefined;
            title?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            allowContainerBoundaryTextCutoff?: boolean | undefined;
            slantedText?: boolean | undefined;
            slantedTextAngle?: number | undefined;
            maxAlternation?: number | undefined;
            maxTextLines?: number | undefined;
            minTextSpacing?: number | undefined;
            showTextEvery?: number | undefined;
            maxValue?: number | Date | number[] | undefined;
            minValue?: number | Date | number[] | undefined;
            viewWindowMode?: string | undefined;
            viewWindow?: ChartViewWindow | undefined;
        }

        export interface ChartGridlines {
            color?: string | undefined;
            count?: number | undefined;
        }

        export interface ChartViewWindow {
            max?: number | Date | number[] | undefined;
            min?: number | Date | number[] | undefined;
        }

        export interface ChartTooltip {
            isHtml?: boolean | undefined;
            showColorCode?: boolean | undefined;
            textStyle?: ChartTextStyle | undefined;
            trigger?: string | undefined;
            ignoreBounds?: boolean | undefined;
        }

        export interface ChartBoundingBox {
            left: number;
            top: number;
            width: number;
            height: number;
        }

        export interface ChartColorAxis {
            minValue?: number | undefined;
            maxValue?: number | undefined;
            values?: number[] | undefined;
            colors?: string[] | undefined;
            legend?: ChartLegend | undefined;
        }

        export type ChartPointShape = "circle" | "triangle" | "square" | "diamond" | "star" | "polygon";

        export interface ChartLayoutInterface {
            getBoundingBox(id: string): ChartBoundingBox;
            getChartAreaBoundingBox(): ChartBoundingBox;
            getHAxisValue(position: number, axisIndex?: number): number;
            getVAxisValue(position: number, axisIndex?: number): number;
            getXLocation(position: number, axisIndex?: number): number;
            getYLocation(position: number, axisIndex?: number): number;
        }

        export interface GroupWidth {
            groupWidth: any; // number | string
        }

        export interface ChartSelection {
            column?: number | null | undefined;
            row?: number | null | undefined;
        }

        export interface Candlestick {
            hollowIsRising?: boolean | undefined;
            fallingColor?: ChartStrokeFill | undefined;
            risingColor?: ChartStrokeFill | undefined;
        }

        export interface ChartSeriesOptionsBase {
            color?: string | undefined;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/trendlines
        export interface ChartTrendlineOptions {
            type?: "linear" | "exponential" | "polynomial" | undefined;
            degree?: number | undefined;
            color?: string | undefined;
            lineWidth?: number | undefined;
            opacity?: number | undefined;
            pointSize?: number | undefined;
            pointsVisible?: boolean | undefined;
            labelInLegend?: string | undefined;
            visibleInLegend?: boolean | undefined;
            showR2?: boolean | undefined;
        }

        export interface ChartAction {
            id: string | number;
            text: string;
            action: () => void;
        }

        abstract class ChartBase {
            constructor(element: Element);
            getContainer(): Element;
            getSelection(): ChartSelection[];
            setSelection(selection?: ChartSelection[] | null): void;
        }

        abstract class ChartBaseClearable extends ChartBase {
            clearChart(): void;
        }

        abstract class ChartBaseRenderable extends ChartBaseClearable {
            getImageURI(): string;
        }

        abstract class CoreChartBase extends ChartBaseRenderable {
            getAction(id: string | number): ChartAction;
            getBoundingBox(id: string): ChartBoundingBox;
            getChartAreaBoundingBox(): ChartBoundingBox;
            getChartLayoutInterface(): ChartLayoutInterface;
            getHAxisValue(position: number, axisIndex?: number): number;
            getVAxisValue(position: number, axisIndex?: number): number;
            getXLocation(position: number, axisIndex?: number): number;
            getYLocation(position: number, axisIndex?: number): number;
            removeAction(id: string | number): void;
            setAction(action: ChartAction): void;
        }

        // #endregion
        // #region ScatterChart

        // https://developers.google.com/chart/interactive/docs/gallery/scatterchart
        export class ScatterChart extends CoreChartBase {
            draw(data: DataTable | DataView, options?: ScatterChartOptions): void;
        }

        export interface ScatterChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            annotations?: ChartAnnotations | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            crosshair?: ChartCrosshair | undefined;
            curveType?: "none" | "function" | undefined;
            dataOpacity?: number | undefined;
            enableInteractivity?: boolean | undefined;
            explorer?: ChartExplorer | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            forceIFrame?: boolean | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            legend?: ChartLegend | "none" | undefined;
            lineWidth?: number | undefined;
            orientation?: ChartOrientation | undefined;
            pointShape?: ChartPointShape | undefined;
            pointSize?: number | undefined;
            pointsVisible?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            theme?: string | undefined;
            trendlines?: { [key: number]: ChartTrendlineOptions } | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region ColumnChart

        // https://developers.google.com/chart/interactive/docs/gallery/columnchart
        export class ColumnChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: ColumnChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options
        export interface ColumnChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            annotations?: ChartBarColumnAnnotations | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            bar?: GroupWidth | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            enableInteractivity?: boolean | undefined;
            explorer?: ChartExplorer | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            isStacked?: boolean | "percent" | "relative" | "absolute" | undefined;
            legend?: ChartLegend | "none" | undefined;
            reverseCategories?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region LineChart

        // https://developers.google.com/chart/interactive/docs/gallery/linechart
        export class LineChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: LineChartOptions): void;
        }

        export interface LineChartSeriesOptions extends ChartSeriesOptionsBase {
            annotations?: ChartAnnotations | undefined;
            curveType?: "none" | "function" | undefined;
            pointShape?: ChartPointShape | undefined;
            pointSize?: number | undefined;
            pointsVisible?: boolean | undefined;
            lineWidth?: number | undefined;
            lineDashStyle?: number[] | undefined;
            visibleInLegend?: boolean | undefined;
            labelInLegend?: string | undefined;
            targetAxisIndex?: number | undefined;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/intervals#combining-interval-styles
        export interface Intervals {
            style?: "area" | "bars" | "boxes" | "line" | "points" | "sticks" | undefined;
            color?: string | undefined;
            barWidth?: number | undefined;
            boxWidth?: number | undefined;
            lineWidth?: number | undefined;
            pointSize?: number | undefined;
            fillOpacity?: number | undefined;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/linechart#Configuration_Options
        export interface LineChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            annotations?: ChartAnnotations | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            crosshair?: ChartCrosshair | undefined;
            curveType?: "none" | "function" | undefined;
            dataOpacity?: number | undefined;
            enableInteractivity?: boolean | undefined;
            explorer?: ChartExplorer | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            interpolateNulls?: boolean | undefined;
            legend?: ChartLegend | "none" | undefined;
            lineWidth?: number | undefined;
            min?: number | undefined;
            orientation?: ChartOrientation | undefined;
            reverseCategories?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: LineChartSeriesOptions[] | { [key: number]: LineChartSeriesOptions } | undefined;
            domainAxis?: { type: string } | undefined;
            trendlines?: { [key: number]: ChartTrendlineOptions } | undefined;
            pointShape?: ChartPointShape | undefined;
            pointSize?: number | undefined;
            pointsVisible?: boolean | undefined;
            intervals?: Intervals | undefined;
            interval?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region BarChart

        // https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options
        export interface BarChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            annotations?: ChartBarColumnAnnotations | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            bar?: GroupWidth | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            dataOpacity?: number | undefined;
            enableInteractivity?: boolean | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxes?: any;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            isStacked?: boolean | "percent" | "relative" | "absolute" | undefined;
            legend?: ChartLegend | "none" | undefined;
            reverseCategories?: boolean | undefined;
            series?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/barchart
        export class BarChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: BarChartOptions): void;
        }

        // #endregion
        // #region Histogram

        // https://developers.google.com/chart/interactive/docs/gallery/histogram
        export class Histogram extends CoreChartBase {
            draw(data: DataTable | DataView, options: HistogramOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/histogram#configuration-options
        export interface HistogramOptions {
            animation?: TransitionAnimation | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            bar?: GroupWidth | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            dataOpacity?: number | undefined;
            enableInteractivity?: boolean | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxis?: ChartAxis | undefined;
            histogram?: HistogramHistogramOptions | undefined;
            height?: number | undefined;
            interpolateNulls?: boolean | undefined;
            isStacked?: boolean | "percent" | "relative" | "absolute" | undefined;
            legend?: ChartLegend | "none" | undefined;
            orientation?: ChartOrientation | undefined;
            reverseCategories?: boolean | undefined;
            series?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        export interface HistogramHistogramOptions {
            bucketSize?: number | undefined;
            hideBucketItems?: boolean | undefined;
            lastBucketPercentile?: number | undefined;
        }

        // #endregion
        // #region AreaChart

        // https://developers.google.com/chart/interactive/docs/gallery/areachart
        export class AreaChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: AreaChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options
        export interface AreaChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            annotations?: ChartAnnotations | undefined;
            areaOpacity?: number | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            crosshair?: ChartCrosshair | undefined;
            dataOpacity?: number | undefined;
            enableInteractivity?: boolean | undefined;
            explorer?: ChartExplorer | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            interpolateNulls?: boolean | undefined;
            isStacked?: boolean | "percent" | "relative" | "absolute" | undefined;
            legend?: ChartLegend | "none" | undefined;
            lineWidth?: number | undefined;
            orientation?: ChartOrientation | undefined;
            pointSize?: number | undefined;
            reverseCategories?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region AnnotationChart

        // https://developers.google.com/chart/interactive/docs/gallery/annotationchart
        export class AnnotationChart extends ChartBaseClearable {
            draw(data: DataTable | DataView, options: AnnotationChartOptions, state?: any): void;
            setVisibleChartRange(start: Date, end: Date): void;
            getVisibleChartRange(): { start: Date; end: Date };
            hideDataColumns(columnIndexes: number | number[]): void;
            showDataColumns(columnIndexes: number | number[]): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/annotationchart#Configuration_Options
        export interface AnnotationChartOptions {
            allowHtml?: boolean | undefined;
            allValuesSuffix?: string | undefined;
            annotationsWidth?: number | undefined;
            colors?: string[] | undefined;
            dateFormat?: string | undefined;
            displayAnnotations?: boolean | undefined;
            displayAnnotationsFilter?: boolean | undefined;
            displayDateBarSeparator?: boolean | undefined;
            displayExactValues?: boolean | undefined;
            displayLegendDots?: boolean | undefined;
            displayLegendValues?: boolean | undefined;
            displayRangeSelector?: boolean | undefined;
            displayZoomButtons?: boolean | undefined;
            fill?: number | undefined;
            legendPosition?: "sameRow" | "newRow" | undefined;
            max?: number | undefined;
            min?: number | undefined;
            numberFormats?: any;
            scaleColumns?: number[] | undefined;
            scaleFormat?: string | undefined;
            scaleType?: string | undefined;
            thickness?: number | undefined;
            zoomEndTime?: Date | undefined;
            zoomStartTime?: Date | undefined;
        }

        // #endregion
        // #region SteppedAreaChart

        // https://developers.google.com/chart/interactive/docs/gallery/areachart
        export class SteppedAreaChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: SteppedAreaChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/steppedareachart#configuration-options
        export interface SteppedAreaChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            areaOpacity?: number | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            connectSteps?: boolean | undefined;
            enableInteractivity?: boolean | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            interpolateNulls?: boolean | undefined;
            isStacked?: boolean | "percent" | "relative" | "absolute" | undefined;
            legend?: ChartLegend | "none" | undefined;
            reverseCategories?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region PieChart

        // https://developers.google.com/chart/interactive/docs/gallery/piechart
        export class PieChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: PieChartOptions): void;
        }

        export interface PieChartLegend {
            alignment?: ChartLegendAlignment | undefined;
            maxLines?: number | undefined;
            position?: "bottom" | "labeled" | "left" | "none" | "right" | "top" | undefined;
            textStyle?: ChartTextStyle | undefined;
            numberFormat?: string | undefined;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options
        export interface PieChartOptions {
            backgroundColor?: string | ChartStrokeFill | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            enableInteractivity?: boolean | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            height?: number | undefined;
            is3D?: boolean | undefined;
            legend?: PieChartLegend | "none" | undefined;
            pieHole?: number | undefined;
            pieSliceBorderColor?: string | undefined;
            pieSliceText?: string | undefined;
            pieSliceTextStyle?: ChartTextStyle | undefined;
            pieStartAngle?: number | undefined;
            reverseCategories?: boolean | undefined;
            pieResidueSliceColor?: string | undefined;
            pieResidueSliceLabel?: string | undefined;
            slices?: any;
            sliceVisibilityThreshold?: number | undefined;
            title?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region BubbleChart

        // https://developers.google.com/chart/interactive/docs/gallery/scatterchart
        export class BubbleChart extends CoreChartBase {
            draw(data: DataTable | DataView, options?: BubbleChartOptions): void;
        }

        export interface BubbleChartOptions {
            animation?: TransitionAnimation | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            bubble?: ChartBubble | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            colorAxis?: ChartColorAxis | undefined;
            enableInteractivity?: boolean | undefined;
            explorer?: ChartExplorer | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            forceIFrame?: boolean | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            legend?: ChartLegend | "none" | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            sizeAxis?: ChartSizeAxis | undefined;
            sortBubblesBySize?: boolean | undefined;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        export interface ChartBubble {
            opacity?: number | undefined;
            stroke?: string | undefined;
            textStyle?: ChartTextStyle | undefined;
        }

        export interface ChartSizeAxis {
            maxSize?: number | undefined;
            maxValue?: number | undefined;
            minSize?: number | undefined;
            minValue?: number | undefined;
        }

        // #endregion
        // #region TreeMap

        // https://developers.google.com/chart/interactive/docs/gallery/treemap
        export class TreeMap extends ChartBaseClearable {
            draw(data: DataTable | DataView, options?: TreeMapOptions): void;
            goUpAndDraw(): void;
            getMaxPossibleDepth(): number;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/treemap#Configuration_Options
        export interface TreeMapOptions {
            fontColor?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            forceIFrame?: boolean | undefined;
            headerColor?: string | undefined;
            headerHeight?: number | undefined;
            headerHighlightColor?: string | undefined;
            hintOpacity?: number | undefined;
            maxColor?: string | undefined;
            maxDepth?: number | undefined;
            maxHighlightColor?: string | undefined;
            maxPostDepth?: number | undefined;
            maxColorValue?: number | undefined;
            midColor?: string | undefined;
            midHighlightColor?: string | undefined;
            minColor?: string | undefined;
            minHighlightColor?: string | undefined;
            minColorValue?: number | undefined;
            showScale?: boolean | undefined;
            showTooltips?: boolean | undefined;
            textStyle?: ChartTextStyle | undefined;
            title?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            useWeightedAverageForAggregation?: boolean | undefined;
        }

        // #endregion
        // #region Table

        // https://developers.google.com/chart/interactive/docs/gallery/table
        export class Table extends ChartBaseClearable {
            draw(data: DataTable | DataView, options?: TableOptions): void;
            getSortInfo(): TableSortInfo;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/table#Configuration_Options
        export interface TableOptions {
            allowHtml?: boolean | undefined;
            alternatingRowStyle?: boolean | undefined;
            cssClassNames?: CssClassNames | undefined;
            firstRowNumber?: number | undefined;
            frozenColumns?: number | undefined;
            height?: string | number | undefined;
            page?: string | undefined;
            pageSize?: number | undefined;
            pagingButtons?: number | "both" | "prev" | "next" | "auto" | undefined;
            rtlTable?: boolean | undefined;
            scrollLeftStartPosition?: number | undefined;
            showRowNumber?: boolean | undefined;
            sort?: string | undefined;
            sortAscending?: boolean | undefined;
            sortColumn?: number | undefined;
            startPage?: number | undefined;
            width?: string | number | undefined;
        }

        export interface CssClassNames {
            headerRow?: string | undefined;
            tableRow?: string | undefined;
            oddTableRow?: string | undefined;
            selectedTableRow?: string | undefined;
            hoverTableRow?: string | undefined;
            headerCell?: string | undefined;
            tableCell?: string | undefined;
            rowNumberCell?: string | undefined;
        }

        export interface TableSortInfo {
            column: number;
            ascending: boolean;
            sortedIndexes: number[];
        }

        // #endregion
        // #region Timeline

        // https://developers.google.com/chart/interactive/docs/gallery/timeline
        export class Timeline {
            constructor(element: Element);
            draw(data: DataTable | DataView, options?: TimelineOptions): void;
            clearChart(): void;
            getSelection(): ChartSelection[];
        }

        // https://developers.google.com/chart/interactive/docs/gallery/timeline#Configuration_Options
        export interface TimelineOptions {
            avoidOverlappingGridLines?: boolean | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            colors?: string[] | undefined;
            enableInteractivity?: boolean | undefined;
            fontName?: string | undefined;
            fontSize?: number | undefined;
            forceIFrame?: boolean | undefined;
            height?: number | undefined;
            timeline?: {
                barLabelStyle?: LabelStyle | undefined;
                colorByRowLabel?: boolean | undefined;
                groupByRowLabel?: boolean | undefined;
                rowLabelStyle?: LabelStyle | null | undefined;
                showBarLabels?: boolean | undefined;
                showRowLabels?: boolean | undefined;
                singleColor?: string | null | undefined;
            } | undefined;
            tooltip?: {
                isHtml?: boolean | undefined;
                trigger?: "focus" | "none" | undefined;
                textStyle?: ChartTextStyle | undefined;
            } | undefined;
            width?: number | undefined;
        }

        export interface LabelStyle {
            color: string;
            fontName: string;
            fontSize: number;
        }

        // #endregion
        // #region CandlestickChart

        // https://developers.google.com/chart/interactive/docs/gallery/candlestickchart
        export class CandlestickChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: CandlestickChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#Configuration_Options
        export interface CandlestickChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            bar?: GroupWidth | undefined;
            candlestick?: Candlestick | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            enableInteractivity?: boolean | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            legend?: ChartLegend | "none" | undefined;
            orientation?: ChartOrientation | undefined;
            reverseCategories?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region ComboChart

        // https://developers.google.com/chart/interactive/docs/gallery/combochart
        export class ComboChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: ComboChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/combochart#configuration-options
        export interface ComboChartOptions {
            aggregationTarget?: string | undefined;
            animation?: TransitionAnimation | undefined;
            annotations?: ChartAnnotations | undefined;
            areaOpacity?: number | undefined;
            axisTitlesPosition?: ChartAxisTitlesPosition | undefined;
            backgroundColor?: string | ChartStrokeFill | undefined;
            bar?: GroupWidth | undefined;
            candlestick?: Candlestick | undefined;
            chartArea?: ChartArea | undefined;
            colors?: string[] | undefined;
            crosshair?: ChartCrosshair | undefined;
            curveType?: "none" | "function" | undefined;
            dataOpacity?: number | undefined;
            enableInteractivity?: boolean | undefined;
            focusTarget?: string | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            forceIFrame?: boolean | undefined;
            hAxis?: ChartAxis | undefined;
            height?: number | undefined;
            interpolateNulls?: boolean | undefined;
            isStacked?: boolean | undefined;
            legend?: ChartLegend | "none" | undefined;
            lineDashStyle?: number[] | undefined;
            lineWidth?: number | undefined;
            orientation?: ChartOrientation | undefined;
            pointShape?: ChartPointShape | undefined;
            pointSize?: number | undefined;
            pointsVisible?: boolean | undefined;
            reverseCategories?: boolean | undefined;
            selectionMode?: ChartSelectionMode | undefined;
            series?: any;
            seriesType?: string | undefined;
            theme?: string | undefined;
            title?: string | undefined;
            titlePosition?: string | undefined;
            titleTextStyle?: ChartTextStyle | undefined;
            tooltip?: ChartTooltip | undefined;
            vAxes?: any;
            vAxis?: ChartAxis | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region Dashboard

        // https://developers.google.com/chart/interactive/docs/gallery/controls#dashboard
        export class Dashboard {
            constructor(containerRef: HTMLElement);
            bind(
                controls: ControlWrapper | ControlWrapper[],
                charts: ChartWrapper | ChartWrapper[],
            ): google.visualization.Dashboard;
            draw(data: DataTable | DataView): void;
            getSelection(): Object[];
        }

        // #endregion
        // #region ControlWrapper

        // https://developers.google.com/chart/interactive/docs/gallery/controls#controlwrapperobject
        export class ControlWrapper {
            constructor(opt_spec?: ControlWrapperOptions);
            draw(): void;
            toJSON(): string;
            clone(): ControlWrapper;
            getControlType(): string;
            getControlName(): string;
            getControl(): ControlWrapper;
            getContainerId(): string;
            getOption(key: string, opt_default_val?: any): any;
            getOptions(): Object;
            getState(): Object;
            setControlType(type: string): void;
            setControlName(name: string): void;
            setContainerId(id: number): void;
            setOption(key: string, value: string): void;
            setOptions(options_obj: Object): void;
            setState(state_obj: Object): void;
        }

        export interface ControlWrapperOptions {
            controlType: string;
            containerId: string;
            options?: Object | undefined;
            state?: Object | undefined;
        }

        // #endregion
        // #region calendar

        // https://developers.google.com/chart/interactive/docs/gallery/calendar
        export class Calendar extends ChartBaseClearable {
            draw(data: DataTable | DataView, options?: CalendarOptions): void;
            getBoundingBox(id: string): Object;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/calendar#Configuration_Options
        export interface CalendarOptions {
            calendar?: {
                cellColor?: ChartStrokeOpacity | undefined;
                cellSize?: number | undefined;
                dayOfWeekLabel?: ChartTextStyle | undefined;
                dayOfWeekRightSpace?: number | undefined;
                daysOfWeek?: string | undefined;
                focusedCellColor?: ChartStrokeOpacity | undefined;
                monthLabel?: ChartTextStyle | undefined;
                monthOutlineColor?: ChartStrokeOpacity | undefined;
                underMonthSpace?: number | undefined;
                underYearSpace?: number | undefined;
                unusedMonthOutlineColor?: ChartStrokeOpacity | undefined;
                yearLabel?: ChartTextStyle | undefined;
            } | undefined;
            colorAxis?: {
                colors?: string[] | undefined;
                maxValue?: number | undefined;
                minValue?: number | undefined;
                values?: number[] | undefined;
            } | undefined;
            forceIFrame?: boolean | undefined;
            height?: number | undefined;
            noDataPattern?: {
                backgroundColor: string;
                color: string;
            } | undefined;
            tooltip?: {
                isHtml: boolean;
            } | undefined;
            width?: number | undefined;
            title?: string | undefined;
        }

        // #endregion
        // #region Map

        // https://developers.google.com/chart/interactive/docs/gallery/map
        export class Map extends ChartBase {
            draw(data: DataTable | DataView, options?: MapOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/map#Configuration_Options
        export interface MapOptions {
            enableScrollWheel?: boolean | undefined;
            icons?: Object | undefined;
            lineColor?: string | undefined;
            lineWidth?: number | undefined;
            maps: {
                mapTypeId: {
                    name?: string | undefined;
                    styles?: any[] | undefined;
                };
            };
            mapType?: string | undefined;
            mapTypeIds?: any[] | undefined;
            showInfoWindow?: boolean | undefined;
            showLine?: boolean | undefined;
            showTooltip?: boolean | undefined;
            useMapTypeControl?: boolean | undefined;
            zoomLevel?: number | undefined;
        }

        // #endregion
        // #region Events

        namespace events {
            function addListener(visualization: any, eventName: string, callback: Function): any;
            function addListener(visualization: any, eventName: string, callback: (...args: any[]) => void): any;
            function addOneTimeListener(visualization: any, eventName: string, callback: Function): any;
            function addOneTimeListener(visualization: any, eventName: string, callback: (...args: any[]) => void): any;
            function removeListener(listener: any): void;
            function removeAllListeners(visualization: any): void;
            function trigger(visualization: any, eventName: string, args?: any): void;
        }

        // #endregion
        // #region Formatter

        class DefaultFormatter {
            /**
             * Reformats the data in the specified column.
             *
             * @param data - A DataTable containing the data to reformat. You cannot use a DataView here.
             * @param columnIndex - The zero-based index of the column to format. To format multiple columns, you must call this method multiple times, with different colIndex values.
             */
            format(data: DataTable, columnIndex: number): void;
        }

        export interface ArrowFormatOptions {
            /**
             * A number indicating the base value, used to compare against the cell value. If the cell value is higher, the cell will include a green up arrow; if the cell value is lower, it will include a red down arrow; if the same, no arrow.
             */
            base?: number | undefined;
        }

        /**
         * Adds an up or down arrow, indicating whether the cell value is above or below a specified value.
         */
        export class ArrowFormat extends DefaultFormatter {
            constructor(options?: ArrowFormatOptions);
        }

        export interface BarFormatOptions {
            /**
             * A number that is the base value to compare the cell value against. If the cell value is higher, it will be drawn to the right of the base; if lower, it will be drawn to the left. Default value is 0.
             */
            base?: number | undefined;
            /**
             * A string indicating the negative value section of bars. Possible values are 'red', 'green' and 'blue'; default value is 'red'.
             */
            colorNegative?: string | undefined;
            /**
             * A string indicating the color of the positive value section of bars. Possible values are 'red', 'green' and 'blue'. Default is 'blue'.
             */
            colorPositive?: string | undefined;
            /**
             * A boolean indicating if to draw a 1 pixel dark base line when negative values are present. The dark line is there to enhance visual scanning of the bars. Default value is 'false'.
             */
            drawZeroLine?: boolean | undefined;
            /**
             * The maximum number value for the bar range. Default value is the highest value in the table.
             */
            max?: number | undefined;
            /**
             * The minimum number value for the bar range. Default value is the lowest value in the table.
             */
            min?: number | undefined;
            /**
             * If true, shows values and bars; if false, shows only bars. Default value is true.
             */
            showValue?: boolean | undefined;
            /**
             * Thickness of each bar, in pixels. Default value is 100.
             */
            width?: number | undefined;
        }

        /**
         * Adds a colored bar, the direction and color of which indicates whether the cell value is above or below a specified value.
         */
        export class BarFormat extends DefaultFormatter {
            constructor(options?: BarFormatOptions);
        }

        /**
         * Colors a cell according to whether the values fall within a specified range.
         */
        export class ColorFormat extends DefaultFormatter {
            constructor();
            /**
             * Specifies a foreground color and/or background color to a cell, depending on the cell value. Any cell with a value in the specified from—to range will be assigned color and bgcolor. It is important to realize that the range is non-inclusive, because creating a range from 1—1,000 and a second from 1,000— 2,000 will not cover the value 1,000!
             *
             * @param from - [String, Number, Date, DateTime, or TimeOfDay] The lower boundary (inclusive) of the range, or null. If null, it will match -∞. String boundaries are compared alphabetically against string values.
             * @param to - [String, Number, Date, DateTime, or TimeOfDay] The high boundary (non-inclusive) of the range, or null. If null, it will match +∞. String boundaries are compared alphabetically against string values.
             * @param color - The color to apply to text in matching cells. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
             * @param bgcolor - The color to apply to the background of matching cells. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
             */
            addRange(from: any, to: any, color: string, bgcolor: string): void;
            /**
             * Assigns a background color from a range, according to the cell value. The color is scaled to match the cell's value within a range from a lower boundary color to an upper boundary color. Note that this method cannot compare string values, as addRange() can. Tip: Color ranges are often hard for viewers to gauge accurately; the simplest and easiest to read range is from a fully saturated color to white (e.g., #FF0000—FFFFFF).
             *
             * @param from - [Number, Date, DateTime, or TimeOfDay] The lower boundary (inclusive) of the range, or null. If null, it will match -∞.
             * @param to - [Number, Date, DateTime, or TimeOfDay] The higher boundary (non-inclusive) of the range, or null. If null, it will match +∞.
             * @param color - The color to apply to text in matching cells. This color is the same for all cells, no matter what their value.
             * @param fromBgColor - The background color for cells holding values at the low end of the gradient. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
             * @param toBgColor - The background color for cells holding values at the high end of the gradient. Values can be either '#RRGGBB' values or defined color constants, (example: '#FF0000' or 'red').
             */
            addGradientRange(from: any, to: any, color: string, fromBgColor: string, toBgColor: string): void;
        }

        export interface DateFormatOptions {
            /**
             * A quick formatting option for the date. The following string values are supported, reformatting the date February 28, 2016 as shown:
             * - 'short' - Short format: e.g., "2/28/16"
             * - 'medium' - Medium format: e.g., "Feb 28, 2016"
             * - 'long' - Long format: e.g., "February 28, 2016"
             * You cannot specify both formatType and pattern.
             */
            formatType?: string | undefined;
            /**
             * A custom format pattern to apply to the value, similar to the ICU date and time format.
             * You cannot specify both formatType and pattern.
             * @example
             * var formatter3 = new google.visualization.DateFormat({pattern: "EEE, MMM d, ''yy"});
             */
            pattern?: string | undefined;
            /**
             * The time zone in which to display the date value. This is a numeric value, indicating GMT + this number of time zones (can be negative). Date object are created by default with the assumed time zone of the computer on which they are created; this option is used to display that value in a different time zone. For example, if you created a Date object of 5pm noon on a computer located in Greenwich, England, and specified timeZone to be -5 (options['timeZone'] = -5, or Eastern Pacific Time in the US), the value displayed would be 12 noon.
             */
            timeZone?: number | undefined;
        }

        /**
         * Formats a Date or DateTime value in several different ways, including "January 1, 2009," "1/1/09" and "Jan 1, 2009."
         */
        export class DateFormat extends DefaultFormatter {
            constructor(options: DateFormatOptions);
            /**
             * Returns the formatted value of a given value. This method does not require a DataTable.
             */
            formatValue(value: Date): string;
        }

        export interface NumberFormatOptions {
            /**
             * A character to use as the decimal marker. The default is a dot (.).
             */
            decimalSymbol?: string | undefined;
            /**
             * A number specifying how many digits to display after the decimal. The default is 2. If you specify more digits than the number contains, it will display zeros for the smaller values. Truncated values will be rounded (5 rounded up).
             */
            fractionDigits?: number | undefined;
            /**
             * A character to be used to group digits to the left of the decimal into sets of three. Default is a comma (,).
             */
            groupingSymbol?: string | undefined;
            /**
             * The text color for negative values. No default value. Values can be any acceptable HTML color value, such as "red" or "#FF0000".
             */
            negativeColor?: string | undefined;
            /**
             * A boolean, where true indicates that negative values should be surrounded by parentheses. Default is true.
             */
            negativeParens?: boolean | undefined;
            /**
             * A format string. When provided, all other options are ignored, except negativeColor.
             * The format string is a subset of the ICU pattern set. For instance, {pattern:'#,###%'} will result in output values "1,000%", "750%", and "50%" for values 10, 7.5, and 0.5.
             */
            pattern?: string | undefined;
            /**
             * A string prefix for the value, for example "$".
             */
            prefix?: string | undefined;
            /**
             * A string suffix for the value, for example "%".
             */
            suffix?: string | undefined;
        }

        /**
         * Formats various aspects of numeric values.
         */
        export class NumberFormat extends DefaultFormatter {
            constructor(options?: NumberFormatOptions);
            /**
             * Returns the formatted value of a given value. This method does not require a DataTable.
             */
            formatValue(value: number): string;
        }

        /**
         * Concatenates cell values on the same row into a specified cell, along with arbitrary text.
         */
        export class PatternFormat {
            /**
             * Constructor.
             * Does not take an options object. Instead, it takes a string pattern parameter.
             * This is a string that describes which column values to put into the destination column, along with any arbitrary text. Embed placeholders in your string to indicate a value from another column to embed. The placeholders are {#}, where # is a the index of a source column to use. The index is an index in the srcColumnIndices array from the format() method below. To include a literal { or } character, escape it like this: \{ or \}. To include a literal \ mark, escape it as \\.
             */
            constructor(pattern: string);
            /**
             * The standard formatting call, with a few additional parameters
             *
             * @param dataTable - The DataTable on which to operate.
             * @param srcColumnIndices - An array of one or more (zero-based) column indices to pull as the sources from the underlying DataTable. This will be used as a data source for the pattern parameter in the constructor. The column numbers do not have to be in sorted order.
             * @param opt_dstColumnIndex - The destination column to place the output of the pattern manipulation. If not specified, the first element in srcColumIndices will be used as the destination.
             */
            format(data: DataTable, srcColumnIndices: number[], opt_dstColumnIndex?: number): void;
        }

        // #endregion
        // #region OrgChart

        // https://developers.google.com/chart/interactive/docs/gallery/orgchart
        export class OrgChart extends ChartBase {
            draw(data: DataTable | DataView, options: OrgChartOptions): void;
            collapse(row: number, collapsed: boolean): void;
            getChildrenIndexes(row: number): number[];
            getCollapsedNodes(): number[];
        }

        // https://developers.google.com/chart/interactive/docs/gallery/orgchart#Configuration_Options
        export interface OrgChartOptions {
            allowCollapse?: boolean | undefined;
            allowHtml?: boolean | undefined;
            color?: string | undefined;
            nodeClass?: string | undefined;
            selectedNodeClass?: string | undefined;
            selectionColor?: string | undefined;
            /**
             * Chart size
             * @default 'medium'
             */
            size?: string | undefined;
        }

        // #endregion
        // #region Gantt

        // https://developers.google.com/chart/interactive/docs/gallery/ganttchart
        export class Gantt extends ChartBaseClearable {
            draw(data: DataTable | DataView, options: GanttChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/ganttchart#configuration-options
        export interface GanttChartOptions {
            backgroundColor?: ChartFill | undefined;
            gantt?: GanttOptions | undefined;
            width?: number | undefined;
            height?: number | undefined;
        }

        export interface GanttOptions {
            arrow?: GanttArrow | undefined;
            barCornerRadius?: number | undefined;
            barHeight?: number | undefined;
            criticalPathEnabled?: boolean | undefined;
            criticalPathStyle?: ChartStroke | undefined;
            defaultStartDate?: Date | number | undefined;
            innerGridHorizLine?: ChartStroke | undefined;
            innerGridTrack?: ChartFill | undefined;
            innerGridDarkTrack?: ChartFill | undefined;
            labelMaxWidth?: number | undefined;
            labelStyle?: LabelStyle | undefined;
            percentEnabled?: boolean | undefined;
            percentStyle?: ChartFill | undefined;
            shadowEnabled?: boolean | undefined;
            shadowStyle?: ChartFill | undefined;
            shadowOffset?: number | undefined;
            sortTasks?: boolean | undefined;
            trackHeight?: number | undefined;
        }

        export interface GanttArrow {
            angle?: number | undefined;
            color?: string | undefined;
            length?: number | undefined;
            radius?: number | undefined;
            spaceAfter?: number | undefined;
            width?: number | undefined;
        }

        // #endregion
        // #region Gauge

        // https://developers.google.com/chart/interactive/docs/gallery/gauge
        // Note: can't extend ChartBaseClearable because Gauge doesn't have getSelection(), setSelection()
        export class Gauge {
            constructor(element: Element);
            getContainer(): Element;
            clearChart(): void;
            draw(data: DataTable | DataView, options: GaugeChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/gauge#configuration-options
        export interface GaugeChartOptions {
            animation?: TransitionAnimation | undefined;
            forceIFrame?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            max?: number | undefined;
            min?: number | undefined;
            majorTicks?: string[] | undefined;
            minorTicks?: number | undefined;
            greenColor?: string | undefined;
            greenFrom?: number | undefined;
            greenTo?: number | undefined;
            redColor?: string | undefined;
            redFrom?: number | undefined;
            redTo?: number | undefined;
            yellowColor?: string | undefined;
            yellowFrom?: number | undefined;
            yellowTo?: number | undefined;
        }

        // #endregion
        // #region Sankey

        // https://developers.google.com/chart/interactive/docs/gallery/sankey
        export class Sankey extends ChartBaseClearable {
            draw(data: DataTable | DataView, options: SankeyChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/sankey#configuration-options
        export interface SankeyChartOptions {
            width?: number | undefined;
            forceIFrame?: boolean | undefined;
            height?: number | undefined;
            sankey?: {
                iterations?: number | undefined;
                link?: {
                    color?: string | ChartStrokeFill | undefined;
                    colorMode?: "none" | "source" | "target" | "gradient" | undefined;
                    colors?: string[] | undefined;
                } | undefined;
                node?: {
                    colorMode?: "unique" | undefined;
                    colors?: string[] | undefined;
                    interactivity?: boolean | undefined;
                    label?: ChartTextStyle | undefined;
                    labelPadding?: number | undefined;
                    nodePadding?: number | undefined;
                    width?: number | undefined;
                } | undefined;
                tooltip?: ChartTooltip | undefined;
            } | undefined;
        }

        // #endregion
    }
}
