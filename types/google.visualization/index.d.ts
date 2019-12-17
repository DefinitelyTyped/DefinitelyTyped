// Type definitions for Google Visualisation Apis
// Project: https://developers.google.com/chart/
// Definitions by: Dan Ludwig <https://github.com/danludwig>, Gregory Moore <https://github.com/gmoore-sjcorg>, Dan Manastireanu <https://github.com/danmana>, Michael Cheng <https://github.com/mlcheng>, Ivan Bisultanov <https://github.com/IvanBisultanov>, Gleb Mazovetskiy <https://github.com/glebm>, Shrujal Shah <https://github.com/shrujalshah28>, David <https://github.com/dckorben>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace google {

    function load(visualization: string, version: string, packages: any): void;
    function setOnLoadCallback(handler: Function): void;
    function setOnLoadCallback(handler: () => void): void;

    // https://developers.google.com/chart/interactive/docs/basic_load_libs
    namespace charts {
        function load(version: string, packages: Object): void;
        function setOnLoadCallback(handler: Function): void;
    }

    // https://developers.google.com/chart/interactive/docs/reference
    namespace visualization {

        export function dataTableToCsv(data: DataTable | DataView): string;
        export function arrayToDataTable(data: any[], firstRowIsData?: boolean): DataTable;
        
        export interface ChartSpecs {
            chartType: string;
            container?: HTMLElement;
            containerId?: string;
            options?: Object;
            dataTable?: Object;
            dataSourceUrl?: string;
            query?: string;
            refreshInterval?: number;
            view?: any;
        }

        export interface ErrorEventObject {
            id: string;
            message: string;
            detailedMessage?: string;
            options?: any;
        }

        //#region ChartWrapper
        // https://developers.google.com/chart/interactive/docs/reference#chartwrapperobject
        export class ChartWrapper {
            constructor(spec?: ChartSpecs);
            draw(container_ref?: HTMLElement): void;
            toJSON(): string;
            clone():ChartWrapper;
            getDataSourceUrl(): string;
            getDataTable(): DataTable;
            getChartType(): string;
            getChartName(): string;
            getChart(): any;
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
        //#endregion
        
        //#region data
        // https://developers.google.com/chart/interactive/docs/reference#google_visualization_data_group
        export interface GroupKeyOptions {
            column: number;
            type: string;
            modifier?: (value: any) => any;
            label?: string;
            id?: string;
        }

        export interface GroupColumnOptions {
            column: number;
            aggregation: (values: any[]) => any;
            type: string;
            label?: string;
            id?: string;
        }
        
        export class data {
            // https://developers.google.com/chart/interactive/docs/reference#data_modifier_functions
            static month(value: Date): number;
            
            // https://developers.google.com/chart/interactive/docs/reference#group
            static sum(values: number[] | string[] | Date[]): number;
            static avg(values: number[] | string[] | Date[]): number;
            static min(values: number[] | string[] | Date[]): number | string | Date;
            static max(values: number[] | string[] | Date[]): number | string | Date;
            static count(values: any[]): number;

            static group(data: DataTable | DataView, keys: (number | GroupKeyOptions)[], columns?: GroupColumnOptions[]): DataTable;
                        
            // https://developers.google.com/chart/interactive/docs/reference#join
            static join(dataA: DataTable | DataView, dataB: DataTable | DataView, joinMethod: 'full' | 'inner' | 'left' | 'right', keys: number[][], columnsA: number[], columnsB: number[]): DataTable;
        }
        //#endregion
        
        //#region DataTable
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
            setCell(rowIndex: number, columnIndex: number, value?: any, formattedValue?: string, properties?: Properties): void;
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
            [property: string]: any
        }

        export interface SortByColumn {
            column: number;
            desc: boolean;
        }

        export interface DataTableColumnDescription {
            type?: string;
            label?: string;
            id?: string;
            role?: string;
            pattern?: string;
            p?: any;
        }

        export interface DataObject {
            cols: DataObjectColumn[];
            rows: DataObjectRow[];
            p: any;
        }

        export interface DataObjectColumn {
            type: string;
            id?: string;
            label?: string;
            pattern?: string;
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
            test?: (value: any, row?: number, column?: number, data?: DataTable | DataView) => boolean;
        }

        export interface DataObjectCell {
            v?: any;
            f?: string;
            p?: any;
        }

        export interface DataTableCellValueFilter extends DataTableCellFilter {
            value: any;
        }

        export interface DataTableCellRangeFilter extends DataTableCellFilter {
            minValue?: any;
            maxValue?: any;
        }

        //#endregion
        //#region Query

        // https://developers.google.com/chart/interactive/docs/reference#query
        export class Query {
            constructor(dataSourceUrl: string, options?: QueryOptions);

            abort(): void;

            setRefreshInterval(intervalSeconds: number): void;
            setTimeout(timeoutSeconds: number): void;
            setQuery(queryString:string): void;

            send(callback: (response: QueryResponse) => void): void;
        }

        export interface QueryOptions {
            sendMethod?: string,
            makeRequestParams?: Object
        }
        //#endregion
        //#region QueryResponse

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

        //#endregion
        //#region DataView

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
            calc?: (data: DataTable, row: number) => any;
            type?: string;
            label?: string;
            id?: string;
            sourceColumn?: number;
            properties?: Properties;
            role?: string;
        }
        //#endregion
        //#region GeoChart

        // https://developers.google.com/chart/interactive/docs/gallery/geochart
        export class GeoChart extends ChartBaseRenderable {
            draw(data: DataTable | DataView, options: GeoChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=fr&csw=1#Configuration_Options
        export interface GeoChartOptions {
            backgroundColor?: string | ChartStrokeFill;
            colorAxis?: ChartColorAxis;
            datalessRegionColor?: string;
            defaultColor?: string;
            displayMode?: string;
            enableRegionInteractivity?: boolean;
            height?: number;
            keepAspectRatio?: boolean;
            legend?: ChartLegend | 'none';
            region?: string;
            magnifyingGlass?: GeoChartMagnifyingGlass;
            markerOpacity?: number;
            resolution?: string;
            sizeAxis?: ChartSizeAxis;
            tooltip?: ChartTooltip;
            width?: number;
        }
        export interface GeoChartMagnifyingGlass {
            enable?: boolean;
            zoomFactor?: number;
        }
        export interface GeoChartRegionClickEvent {
            region: string;
        }
        export interface GeoChartSelection {
            row: number;
        }

        //#endregion
        //#region Common        
        export interface ChartAnnotations {
            boxStyle?: ChartBoxStyle;
            textStyle?: ChartTextStyle;
            datum?: ChartStemAndStyle;
            domain?: ChartStemAndStyle;
            highContrast?: boolean;
            stem?: ChartStem;
            style?: string; // 'line' or 'point'
        }

        export interface ChartBarColumnAnnotations extends ChartAnnotations {
            alwaysOutside?: boolean;
        }

        export interface ChartStemAndStyle {
            stem?: ChartStem;
            style?: string;
        }

        export interface ChartStem {
            color?: string;
            length?: number;
        }

        export interface ChartBoxStyle {
            stroke?: string;
            strokeWidth?: number;
            rx?: number;
            ry?: number;
            gradient?: {
                color1: string;
                color2: string;
                x1: string;
                y1: string;
                x2: string;
                y2: string;
                useObjectBoundingBoxUnits?: boolean;
            }
        }

        export interface ChartTextStyle {
            fontName?: string;
            fontSize?: number;
            bold?: boolean;
            italic?: boolean;
            color?: string;
            auraColor?: string;
            opacity?: number;
        }

        export interface ChartCrosshair {
            color?: string;
            focused?: {
                color?: string;
                opacity?: number;
            }
            opacity?: number;
            orientation?: ChartOrientation;
            selected?: {
                color?: string;
                opacity?: number;
            }
            trigger?: string;
        }

        export interface ChartExplorer {
            actions?: string[];
            axis?: string;
            keepInBounds?: boolean;
            maxZoomIn?: number;
            maxZoomOut?: number;
            zoomDelta?: number;
        }

        export interface ChartStrokeFill {
            stroke?: string;
            strokeWidth?: number;
            fill?: string;
        }

        export interface ChartArea {
            backgroundColor?: string | ChartStrokeFill;
            top?: number | string;
            left?: number | string;
            right?: number | string;
            bottom?: number | string;
            width?: number | string;
            height?: number | string;
        }

        export type ChartOrientation = 'vertical' | 'horizontal';
        export type ChartAxisTitlesPosition = 'in' | 'out' | 'none';
        
        export type ChartSelectionMode = 'single' | 'multiple';
        
        export type ChartLegendPosition = 'bottom' | 'left' | 'in' | 'none' | 'right' | 'top';
        export type ChartLegendAlignment = 'start' | 'center' | 'end';
        export interface ChartLegend {
            alignment?: ChartLegendAlignment;
            maxLines?: number;
            position?: ChartLegendPosition;
            textStyle?: ChartTextStyle;
            numberFormat?: string;
        }

        // https://developers.google.com/chart/interactive/docs/animation
        export interface TransitionAnimation {
            duration?: number;
            easing?: string; // linear, in, out, inAndOut
            startup?: boolean;
        }

        export interface ChartAxis {
            baseline?: number; // This option is only supported for a continuous axis. https://developers.google.com/chart/interactive/docs/customizing_axes#Terminology
            baselineColor?: string; // google's documentation on this is wrong, specifies it as a number. The color of the baseline for the horizontal axis. Can be any HTML color string, for example: 'red' or '#00cc00'
            direction?: number; // The direction in which the values along the horizontal axis grow. Specify -1 to reverse the order of the values.
            format?: string; // icu pattern set http://icu-project.org/apiref/icu4c/classDecimalFormat.html#_details
            gridlines?: ChartGridlines;
            minorGridlines?: ChartGridlines;
            logScale?: boolean;
            textPosition?: string;
            textStyle?: ChartTextStyle;
            ticks?: any[];
            title?: string;
            titleTextStyle?: ChartTextStyle;
            allowContainerBoundaryTextCufoff?: boolean;
            slantedText?: boolean;
            slantedTextAngle?: number;
            maxAlternation?: number;
            maxTextLines?: number;
            minTextSpacing?: number;
            showTextEvery?: number;
            maxValue?: number | Date | number[];
            minValue?: number | Date | number[];
            viewWindowMode?: string;
            viewWindow?: ChartViewWindow;
        }

        export interface ChartGridlines {
            color?: string;
            count?: number;
        }

        export interface ChartViewWindow {
            max?: number | Date | number[];
            min?: number | Date | number[];
        }

        export interface ChartTooltip {
            isHtml?: boolean;
            showColorCode?: boolean;
            textStyle?: ChartTextStyle;
            trigger?: string;
            ignoreBounds?: boolean;
        }

        export interface ChartBoundingBox {
            left: number;
            top: number;
            width: number;
            height: number;
        }

        export interface ChartColorAxis {
            minValue?: number;
            maxValue?: number;
            values?: number[];
            colors?: string[];
            legend?: ChartLegend;
        }
        
        export type ChartPointShape = 'circle' | 'triangle' | 'square' | 'diamond' | 'star' | 'polygon';
        
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

        export interface VisualizationSelectionArray {
            column?: number;
            row?: number;
        }

        export interface Candlestick {
            hollowIsRising?: boolean;
            fallingColor?: ChartStrokeFill;
            risingColor?: ChartStrokeFill;
        }
        
        export interface ChartSeriesOptionsBase {
            color?: string;
        }
        
        // https://developers.google.com/chart/interactive/docs/gallery/trendlines
        export interface ChartTrendlineOptions {
            type?: 'linear' | 'exponential' | 'polynomial';
            degree?: number;
            color?: string;
            lineWidth?: number;
            opacity?: number;
            pointSize?: number;
            pointsVisible?: boolean;
            labelInLegend?: string;
            visibleInLegend?: boolean;
            showR2?: boolean
        }

        export interface ChartAction {
            id: string | number;
            text: string;
            action: () => void;
        }

        abstract class ChartBase {
            constructor(element: Element);
            getContainer(): Element;
            getSelection(): VisualizationSelectionArray[];
            setSelection(selection: VisualizationSelectionArray[]): void;
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

        //#endregion
        //#region ScatterChart

        // https://developers.google.com/chart/interactive/docs/gallery/scatterchart
        export class ScatterChart extends CoreChartBase {
            draw(data: DataTable | DataView, options?: ScatterChartOptions): void;
        }

        export interface ScatterChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            chartArea?: ChartArea;
            colors?: string[];
            crosshair?: ChartCrosshair;
            curveType?: 'none' | 'function';
            dataOpacity?: number;
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            fontSize?: number;
            fontName?: string;
            forceIFrame?: boolean;
            hAxis?: ChartAxis;
            height?: number;
            legend?: ChartLegend | 'none';
            lineWidth?: number;
            orientation?: ChartOrientation;
            pointShape?: ChartPointShape;
            pointSize?: number;
            pointsVisible?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: any;
            theme?: string;
            trendlines?: { [key: number]: ChartTrendlineOptions; };
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region ColumnChart

        // https://developers.google.com/chart/interactive/docs/gallery/columnchart
        export class ColumnChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: ColumnChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options
        export interface ColumnChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartBarColumnAnnotations;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            bar?: GroupWidth;
            chartArea?: ChartArea;
            colors?: string[];
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            isStacked?: boolean | 'percent' | 'relative' | 'absolute';
            legend?: ChartLegend | 'none';
            reverseCategories?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region LineChart

        // https://developers.google.com/chart/interactive/docs/gallery/linechart
        export class LineChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: LineChartOptions): void;
        }
       
        export interface LineChartSeriesOptions extends ChartSeriesOptionsBase {
            annotations?: ChartAnnotations;
            curveType?: 'none' | 'function';
            pointShape?: ChartPointShape;
            pointSize?: number;
            pointsVisible?: boolean;
            lineWidth?: number;
            lineDashStyle?: number[];
            visibleInLegend?: boolean;
            labelInLegend?: string;
            targetAxisIndex?: number;
        }
        
        // https://developers.google.com/chart/interactive/docs/gallery/linechart#Configuration_Options
        export interface LineChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            chartArea?: ChartArea;
            colors?: string[];
            crosshair?: ChartCrosshair;
            curveType?: 'none' | 'function';
            dataOpacity?: number;
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            interpolateNulls?: boolean;
            legend?: ChartLegend | 'none';
            lineWidth?: number;
            min?: number;
            orientation?: ChartOrientation;
            reverseCategories?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: LineChartSeriesOptions[] | { [key: number]: LineChartSeriesOptions; };
            domainAxis?: { type: string };
            trendlines?: { [key: number]: ChartTrendlineOptions; };
            pointShape?: ChartPointShape;
            pointSize?: number;
            pointsVisible?: boolean;
            intervals?: { style: string };
            interval?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region BarChart

        // https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options
        export interface BarChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartBarColumnAnnotations;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            bar?: GroupWidth;
            chartArea?: ChartArea;
            colors?: string[];
            dataOpacity?: number;
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxes?: any;
            hAxis?: ChartAxis;
            height?: number;
            isStacked?: boolean | 'percent' | 'relative' | 'absolute';
            legend?: ChartLegend | 'none';
            reverseCategories?: boolean;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/barchart
        export class BarChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: BarChartOptions): void;
        }

        //#endregion
        //#region Histogram

        // https://developers.google.com/chart/interactive/docs/gallery/histogram
        export class Histogram extends CoreChartBase {
            draw(data: DataTable | DataView, options: HistogramOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/histogram#configuration-options
        export interface HistogramOptions {
            animation?: TransitionAnimation;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            bar?: GroupWidth;
            chartArea?: ChartArea;
            colors?: string[];
            dataOpacity?: number;
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            histogram?: HistogramHistogramOptions;
            height?: number;
            interpolateNulls?: boolean;
            isStacked?: boolean | 'percent' | 'relative' | 'absolute';
            legend?: ChartLegend | 'none';
            orientation?: ChartOrientation;
            reverseCategories?: boolean;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        export interface HistogramHistogramOptions {
            bucketSize?: number;
            hideBucketItems?: boolean;
            lastBucketPercentile?: number;
        }

        //#endregion
        //#region AreaChart

        // https://developers.google.com/chart/interactive/docs/gallery/areachart
        export class AreaChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: AreaChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options
        export interface AreaChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            areaOpacity?: number;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            chartArea?: ChartArea;
            colors?: string[];
            crosshair?: ChartCrosshair;
            dataOpacity?: number;
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            interpolateNulls?: boolean;
            isStacked?: boolean | 'percent' | 'relative' | 'absolute';
            legend?: ChartLegend | 'none';
            lineWidth?: number;
            orientation?: ChartOrientation;
            pointSize?: number;
            reverseCategories?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region AnnotationChart

        // https://developers.google.com/chart/interactive/docs/gallery/annotationchart
        export class AnnotationChart extends ChartBaseClearable {
            draw(data: DataTable | DataView, options: AnnotationChartOptions, state?: any): void;
            setVisibleChartRange(start: Date, end: Date): void;
            getVisibleChartRange(): {start: Date; end: Date };
            hideDataColumns(columnIndexes: number | number[]): void;
            showDataColumns(columnIndexes: number | number[]): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/annotationchart#Configuration_Options
        export interface AnnotationChartOptions
        {
            allowHtml?: boolean;
            allValuesSuffix?: string;
            annotationsWidth?: number;
            colors?: string[];
            dateFormat?: string;
            displayAnnotations?: boolean;
            displayAnnotationsFilter?: boolean;
            displayDateBarSeparator?: boolean;
            displayExactValues?: boolean;
            displayLegendDots?: boolean;
            displayLegendValues?: boolean;
            displayRangeSelector?: boolean;
            displayZoomButtons?: boolean;
            fill?: number;
            legendPosition?: 'sameRow' | 'newRow';
            max?: number;
            min?: number;
            numberFormats?: any;
            scaleColumns?: number[];
            scaleFormat?: string;
            scaleType?: string;
            thickness?: number;
            zoomEndTime?: Date;
            zoomStartTime?: Date;
        }

        //#endregion
        //#region SteppedAreaChart

        // https://developers.google.com/chart/interactive/docs/gallery/areachart
        export class SteppedAreaChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: SteppedAreaChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/steppedareachart#configuration-options
        export interface SteppedAreaChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            areaOpacity?: number;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            chartArea?: ChartArea;
            colors?: string[];
            connectSteps?: boolean;
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            interpolateNulls?: boolean;
            isStacked?: boolean | 'percent' | 'relative' | 'absolute';
            legend?: ChartLegend | 'none';
            reverseCategories?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region PieChart

        // https://developers.google.com/chart/interactive/docs/gallery/piechart
        export class PieChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: PieChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options
        export interface PieChartOptions {
            backgroundColor?: string | ChartStrokeFill;
            chartArea?: ChartArea;
            colors?: string[];
            enableInteractivity?: boolean;
            fontSize?: number;
            fontName?: string;
            height?: number;
            is3D?: boolean;
            legend?: ChartLegend | 'none';
            pieHole?: number;
            pieSliceBorderColor?: string;
            pieSliceText?: string;
            pieSliceTextStyle?: ChartTextStyle;
            pieStartAngle?: number;
            reverseCategories?: boolean;
            pieResidueSliceColor?: string;
            pieResidueSliceLabel?: string;
            slices?: any;
            sliceVisibilityThreshold?: number;
            title?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            width?: number;
        }

        //#endregion
        //#region BubbleChart

        // https://developers.google.com/chart/interactive/docs/gallery/scatterchart
        export class BubbleChart extends CoreChartBase {
            draw(data: DataTable | DataView, options?: BubbleChartOptions): void;
        }

        export interface BubbleChartOptions {
            animation?: TransitionAnimation;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            bubble?: ChartBubble;
            chartArea?: ChartArea;
            colors?: string[];
            colorAxis?: ChartColorAxis;
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            fontSize?: number;
            fontName?: string;
            forceIFrame?: boolean;
            hAxis?: ChartAxis;
            height?: number;
            legend?: ChartLegend | 'none';
            selectionMode?: ChartSelectionMode;
            series?: any;
            sizeAxis?: ChartSizeAxis;
            sortBubblesBySize?: boolean;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxis?: ChartAxis;
            width?: number;
        }

        export interface ChartBubble {
            opacity?: number;
            stroke?: string;
            textStyle?: ChartTextStyle;
        }

        export interface ChartSizeAxis {
            maxSize?: number;
            maxValue?: number;
            minSize?: number;
            minValue?: number;
        }

        //#endregion
        //#region TreeMap

        // https://developers.google.com/chart/interactive/docs/gallery/treemap
        export class TreeMap extends ChartBaseClearable {
            draw(data: DataTable | DataView, options?: TreeMapOptions): void;
            goUpAndDraw(): void;
            getMaxPossibleDepth(): number;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/treemap#Configuration_Options
        export interface TreeMapOptions {
            fontColor?: string;
            fontFamily?: string;
            fontSize?: number;
            forceIFrame?: boolean;
            headerColor?: string;
            headerHeight?: number;
            headerHighlightColor?: string;
            hintOpacity?: number;
            maxColor?: string;
            maxDepth?: number;
            maxHighlightColor?: string;
            maxPostDepth?: number;
            maxColorValue?: number;
            midColor?: string;
            midHighlightColor?: string;
            minColor?: string;
            minHighlightColor?: string;
            minColorValue?: number;
            showScale?: boolean;
            showTooltips?: boolean;
            textStyle?: ChartTextStyle;
            title?: string;
            titleTextStyle?: ChartTextStyle;
            useWeightedAverageForAggregation?: boolean;
        }

        //#endregion
        //#region Table

        // https://developers.google.com/chart/interactive/docs/gallery/table
        export class Table extends ChartBaseClearable {
            draw(data: DataTable | DataView, options?: TableOptions): void;
            getSortInfo(): TableSortInfo;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/table#Configuration_Options
        export interface TableOptions {
            allowHtml?: boolean;
            alternatingRowStyle?: boolean;
            cssClassNames?: CssClassNames;
            firstRowNumber?: number;
            height?: string;
            page?: string;
            pageSize?: number;
            rtlTable?: boolean;
            scrollLeftStartPosition?: number;
            showRowNumber?: boolean;
            sort?: string;
            sortAscending?: boolean;
            sortColumn?: number;
            startPage?: number;
            width?: string;
        }

        export interface CssClassNames {
            headerRow?: string;
            tableRow?: string;
            oddTableRow?: string;
            selectedTableRow?: string;
            hoverTableRow?: string;
            headerCell?: string;
            tableCell?: string;
            rowNumberCell?: string;
        }

        export interface TableSortInfo {
            column: number;
            ascending: boolean;
            sortedIndexes: number[];
        }

        //#endregion
        //#region Timeline

        // https://developers.google.com/chart/interactive/docs/gallery/timeline
        export class Timeline {
            constructor(element: Element);
            draw(data: DataTable | DataView, options?: TimelineOptions): void;
            clearChart(): void;
            getSelection(): VisualizationSelectionArray[];
        }

        // https://developers.google.com/chart/interactive/docs/gallery/timeline#Configuration_Options
        export interface TimelineOptions {
            avoidOverlappingGridLines?: boolean;
            backgroundColor?: string | ChartStrokeFill;
            colors?: string[];
            enableInteractivity?: boolean;
            forceIFrame?: boolean;
            height?: number;
            timeline?: {
                barLabelStyle?: LabelStyle;
                colorByRowLabel?: boolean;
                groupByRowLabel?: boolean;
                rowLabelStyle?: LabelStyle;
                showRowLabels?: boolean;
                singleColor?: string;
            }
            width?: number;
        }

        export interface LabelStyle {
            color: string;
            fontName: string;
            fontSize: string;
        }

        //#endregion
        //#region CandlestickChart

        // https://developers.google.com/chart/interactive/docs/gallery/candlestickchart
        export class CandlestickChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: CandlestickChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#Configuration_Options
        export interface CandlestickChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            bar?: GroupWidth;
            candlestick?: Candlestick;
            chartArea?: ChartArea;
            colors?: string[];
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            legend?: ChartLegend | 'none';
            orientation?: ChartOrientation;
            reverseCategories?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region ComboChart

        // https://developers.google.com/chart/interactive/docs/gallery/combochart
        export class ComboChart extends CoreChartBase {
            draw(data: DataTable | DataView, options: ComboChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/combochart#configuration-options
        export interface ComboChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            areaOpacity?: number;
            axisTitlesPosition?: ChartAxisTitlesPosition;
            backgroundColor?: string | ChartStrokeFill;
            bar?: GroupWidth;
            candlestick?: Candlestick;
            chartArea?: ChartArea;
            colors?: string[];
            crosshair?: ChartCrosshair;
            curveType?: 'none' | 'function';
            dataOpacity?: number;
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            forceIFrame?: boolean;
            hAxis?: ChartAxis;
            height?: number;
            interpolateNulls?: boolean;
            isStacked?: boolean;
            legend?: ChartLegend | 'none';
            lineDashStyle?: number[];
            lineWidth?: number;
            orientation?: ChartOrientation;
            pointShape?: ChartPointShape;
            pointSize?: number;
            pointsVisible?: boolean;
            reverseCategories?: boolean;
            selectionMode?: ChartSelectionMode;
            series?: any;
            seriesType?: string;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxes?: any;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region Dashboard

        // https://developers.google.com/chart/interactive/docs/gallery/controls#dashboard
        export class Dashboard {
            constructor(containerRef: HTMLElement);
            bind(controls: ControlWrapper | ControlWrapper[], charts: ChartWrapper | ChartWrapper[]): google.visualization.Dashboard;
            draw(data: DataTable | DataView): void;
            getSelection(): Object[];
        }

        //#endregion
        //#region ControlWrapper
        
        // https://developers.google.com/chart/interactive/docs/gallery/controls#controlwrapperobject
        export class ControlWrapper {
            constructor(opt_spec?: ControlWrapperOptions)
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
            options?: Object;
            state?: Object;
        }

        //#endregion
        //#region calendar

        // https://developers.google.com/chart/interactive/docs/gallery/calendar
        export class Calendar extends ChartBaseClearable {
            draw(data: DataTable | DataView, options?: CalendarOptions): void;
            getBoundingBox(id: string): Object;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/calendar#Configuration_Options
        export interface CalendarOptions {
            calendar: {
                cellColor: Object;
                cellSize: number;
                dayOfWeekLabel: Object;
                dayOfWeekRightSpace: number;
                daysOfWeek: string;
                focusedCellColor: Object;
                monthLabel: Object;
                monthOutlineColor: Object;
                underMonthSpace: number;
                underYearSpace: number;
                unusedMonthOutlineColor: Object;
            };
            colorAxis?: {
                colors: string[];
                maxValue: number;
                minValue: number;
                values: number[];
            };
            forceIFrame?: boolean;
            height?: number;
            noDataPattern?: Object;
            tooltip: {
                isHtml: boolean;
            };
            width?: number;
        }

        //#endregion
        //#region Map

        // https://developers.google.com/chart/interactive/docs/gallery/map
        export class Map extends ChartBase {
            draw(data: DataTable | DataView, options?: MapOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/map#Configuration_Options
        export interface MapOptions {
            enableScrollWheel?: boolean;
            icons?: Object;
            lineColor?: string;
            lineWidth?: number;
            maps: {
                mapTypeId: {
                    name?: string;
                    styles?: any[];
                }
            };
            mapType?: string;
            mapTypeIds?: any[];
            showInfoWindow?: boolean;
            showLine?: boolean;
            showTooltip?: boolean;
            useMapTypeControl?: boolean;
            zoomLevel?: number;
        }

        //#endregion         
        //#region Events

        namespace events {
            function addListener(visualization: any, eventName: string, callback: Function): any;
            function addListener(visualization: any, eventName: string, callback: (...args: any[]) => void): any;
            function addOneTimeListener(visualization: any, eventName: string, callback: Function): any;
            function addOneTimeListener(visualization: any, eventName: string, callback: (...args: any[]) => void): any;
            function removeListener(listener: any): void;
            function removeAllListeners(visualization: any): void;
            function trigger(visualization: any, eventName: string, args?: any): void;
        }

        //#endregion
        //#region Formatter

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
            base?: number;
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
            base?: number;
            /**
             * A string indicating the negative value section of bars. Possible values are 'red', 'green' and 'blue'; default value is 'red'.
             */
            colorNegative?: string;
            /**
             * A string indicating the color of the positive value section of bars. Possible values are 'red', 'green' and 'blue'. Default is 'blue'.
             */
            colorPositive?: string;
            /**
             * A boolean indicating if to draw a 1 pixel dark base line when negative values are present. The dark line is there to enhance visual scanning of the bars. Default value is 'false'.
             */
            drawZeroLine?: boolean;
            /**
             * The maximum number value for the bar range. Default value is the highest value in the table.
             */
            max?: number;
            /**
             * The minimum number value for the bar range. Default value is the lowest value in the table.
             */
            min?: number;
            /**
             * If true, shows values and bars; if false, shows only bars. Default value is true.
             */
            showValue?: boolean;
            /**
             * Thickness of each bar, in pixels. Default value is 100.
             */
            width?: number;
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
            formatType?: string;
            /**
             * A custom format pattern to apply to the value, similar to the ICU date and time format.
             * You cannot specify both formatType and pattern.
             * @example
             * var formatter3 = new google.visualization.DateFormat({pattern: "EEE, MMM d, ''yy"});
             */
            pattern?: string;
            /**
             * The time zone in which to display the date value. This is a numeric value, indicating GMT + this number of time zones (can be negative). Date object are created by default with the assumed time zone of the computer on which they are created; this option is used to display that value in a different time zone. For example, if you created a Date object of 5pm noon on a computer located in Greenwich, England, and specified timeZone to be -5 (options['timeZone'] = -5, or Eastern Pacific Time in the US), the value displayed would be 12 noon.
             */
            timeZone?: number;
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
            decimalSymbol?: string;
            /**
             * A number specifying how many digits to display after the decimal. The default is 2. If you specify more digits than the number contains, it will display zeros for the smaller values. Truncated values will be rounded (5 rounded up).
             */
            fractionDigits?: number;
            /**
             * A character to be used to group digits to the left of the decimal into sets of three. Default is a comma (,).
             */
            groupingSymbol?: string;
            /**
             * The text color for negative values. No default value. Values can be any acceptable HTML color value, such as "red" or "#FF0000".
             */
            negativeColor?: string;
            /**
             * A boolean, where true indicates that negative values should be surrounded by parentheses. Default is true.
             */
            negativeParens?: boolean;
            /**
             * A format string. When provided, all other options are ignored, except negativeColor.
             * The format string is a subset of the ICU pattern set. For instance, {pattern:'#,###%'} will result in output values "1,000%", "750%", and "50%" for values 10, 7.5, and 0.5.
             */
            pattern?: string;
            /**
             * A string prefix for the value, for example "$".
             */
            prefix?: string;
            /**
             * A string suffix for the value, for example "%".
             */
            suffix?: string;
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

        //#endregion
        //#region OrgChart

        // https://developers.google.com/chart/interactive/docs/gallery/orgchart
        export class OrgChart extends ChartBase {
            draw(data: DataTable | DataView, options: OrgChartOptions): void;
            collapse(row: number, collapsed: boolean): void;
            getChildrenIndexes(row: number): number[];
            getCollapsedNodes(): number[];
        }

        // https://developers.google.com/chart/interactive/docs/gallery/orgchart#Configuration_Options
        export interface OrgChartOptions {
            allowCollapse?: boolean;
            allowHtml?: boolean;
            color?: string;
            nodeClass?: string;
            selectedNodeClass?: string;
            selectionColor?: string;
            /**
             * Chart size
             * @type {('small'|'medium'|'large')}
             * @default 'medium'
             */
            size?: string;
        }

        //#endregion
    }
}
