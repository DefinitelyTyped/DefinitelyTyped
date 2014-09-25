// Type definitions for Google Visualisation Apis
// Project: https://developers.google.com/chart/
// Definitions by: Dan Ludwig <https://github.com/danludwig>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module google {

    function load(visualization: string, version: string, packages: any): void;
    function setOnLoadCallback(handler: Function): void;
    function setOnLoadCallback(handler: () => void): void;

    //https://developers.google.com/chart/interactive/docs/reference
    module visualization {

        export interface ChartSpecs {
            chartType: string;
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
            getColumnRole(columnIndex: string): string;
            getColumnType(columnIndex: number): string;
            getDistinctValues(columnIndex: number): any[];
            getFilteredRows(filters: DataTableCellFilter[]): number[];
            getFormattedValue(rowIndex: number, columnIndex: number): string;
            getNumberOfColumns(): number;
            getNumberOfRows(): number;
            getProperty(rowIndex: number, columnIndex: number, name: string): any;
            getProperties(rowIndex: number, columnIndex: number): Properties;
            getRowProperties(rowIndex: number): Properties;
            getRowProperty(rowIndex: number, name: string): Properties;
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
            setFormattedValue(rowIndex: number, columnIndex: number, formattedValue: string): void;
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

        function arrayToDataTable(data: any[], firstRowIsData?: boolean): DataTable;

        //#endregion
        //#region DataView

        // https://developers.google.com/chart/interactive/docs/reference#DataView
        export class DataView {
            constructor(data: DataTable);
            constructor(data: DataView);

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
            getRowProperty(rowIndex: number, name: string): Properties;
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
            calc: (dataTable: DataTable, row: number) => any;
            type: string;
            label?: string;
            id?: string;
            sourceColumn?: number;
            properties?: Properties;
            role?: string;
        }

        //#endregion
        //#region GeoChart

        //https://google-developers.appspot.com/chart/interactive/docs/gallery/geochart
        export class GeoChart extends ChartBase {
            draw(data: DataTable, options: GeoChartOptions): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=fr&csw=1#Configuration_Options
        export interface GeoChartOptions {
            backgroundColor?: any;
            colorAxis?: ChartColorAxis;
            datalessRegionColor?: string;
            displayMode?: string;
            enableRegionInteractivity?: boolean;
            height?: number;
            keepAspectRatio?: boolean;
            legend?: ChartLegend;
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
            orientation?: string;
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

        export interface ChartStroke {
            stroke: string;
            strokeWidth: number;
            fill: string;
        }

        export interface ChartArea {
            top?: any;
            left?: any;
            width?: any;
            height?: any;
        }

        export interface ChartLegend {
            alignment?: string;
            maxLines?: number;
            position?: string;
            textStyle?: ChartTextStyle;
            numberFormat?: string;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/animation
        export interface TransitionAnimation {
            duration?: number;
            easing?: string; // linear, in, out, inAndOut
        }

        export interface ChartAxis {
            baseline?: number; // This option is only supported for a continuous axis. https://google-developers.appspot.com/chart/interactive/docs/customizing_axes#Terminology
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
            maxValue?: number;
            minValue?: number;
            viewWindowMode?: string;
            viewWindow?: ChartViewWindow;
        }

        export interface ChartGridlines {
            color?: string;
            count?: number;
        }

        export interface ChartViewWindow {
            max?: number;
            min?: number;
        }

        export interface ChartTooltip {
            isHtml?: boolean;
            showColorCode?: boolean;
            textStyle?: ChartTextStyle;
            trigger?: string;
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

        class ChartBase {
            constructor(element: Element);
            getSelection(): VisualizationSelectionArray[];
            setSelection(selection: VisualizationSelectionArray[]): void;
            clearChart(): void;
            getImageURI(): string;
        }

        class CoreChartBase extends ChartBase {
            getBoundingBox(id: string): ChartBoundingBox;
            getChartAreaBoundingBox(): ChartBoundingBox;
            getChartLayoutInterface(): ChartLayoutInterface;
            getHAxisValue(position: number, axisIndex?: number): number;
            getVAxisValue(position: number, axisIndex?: number): number;
            getXLocation(position: number, axisIndex?: number): number;
            getYLocation(position: number, axisIndex?: number): number;
        }

        //#endregion
        //#region ScatterChart

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/scatterchart
        export class ScatterChart extends CoreChartBase {
            draw(data: DataTable, options?: ScatterChartOptions): void;
            draw(data: DataView, options?: ScatterChartOptions): void;
        }

        export interface ScatterChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            axisTitlesPosition?: string; // in, out, none
            backgroundColor?: any;
            chartArea?: ChartArea;
            colors?: string[];
            crosshair?: ChartCrosshair;
            curveType?: string;
            dataOpacity?: number;
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            fontSize?: number;
            fontName?: string;
            forceIFrame?: boolean;
            hAxis?: ChartAxis;
            height?: number;
            legend?: ChartLegend;
            lineWidth?: number;
            pointSize?: number;
            selectionMode?: string;
            series?: any;
            theme?: string;
            title?: string;
            titlePosition?: string;
            titleTextStyle?: ChartTextStyle;
            tooltip?: ChartTooltip;
            vAxis?: ChartAxis;
            width?: number;
        }

        //#endregion
        //#region ColumnChart

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart
        export class ColumnChart extends CoreChartBase {
            draw(data: DataTable, options: ColumnChartOptions): void;
            draw(data: DataView, options: ColumnChartOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart#Configuration_Options
        export interface ColumnChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            axisTitlesPosition?: string; // in, out, none
            backgroundColor?: any;
            bar?: GroupWidth;
            chartArea?: ChartArea;
            colors?: string[];
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            isStacked?: boolean;
            legend?: ChartLegend;
            reverseCategories?: boolean;
            selectionMode?: string // single / multiple
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart
        export class LineChart extends CoreChartBase {
            draw(data: DataTable, options: LineChartOptions): void;
            draw(data: DataView, options: LineChartOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#Configuration_Options
        export interface LineChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            axisTitlesPosition?: string;
            backgroundColor?: any;
            chartArea?: ChartArea;
            colors?: string[];
            crosshair?: ChartCrosshair;
            curveType?: string;
            dataOpacity?: number;
            enableInteractivity?: boolean;
            explorer?: ChartExplorer;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            interpolateNulls?: boolean;
            legend?: ChartLegend;
            lineWidth?: number;
            orientation?: string;
            pointSize?: number;
            reverseCategories?: boolean;
            selectionMode?: string // single / multiple
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
        //#region BarChart

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/barchart#Configuration_Options
        export interface BarChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            annotations?: ChartAnnotations;
            axisTitlesPosition?: string; // in, out, none
            backgroundColor?: any;
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
            isStacked?: boolean;
            legend?: ChartLegend;
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/barchart
        export class BarChart extends CoreChartBase {
            draw(data: DataTable, options: BarChartOptions): void;
            draw(data: DataView, options: BarChartOptions): void;
        }

        //#endregion
        //#region Histogram

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/histogram
        export class Histogram extends CoreChartBase {
            draw(data: DataTable, options: HistogramOptions): void;
            draw(data: DataView, options: HistogramOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/histogram#Configuration_Options
        export interface HistogramOptions {
            animation?: TransitionAnimation;
            axisTitlesPosition?: string; // in, out, none
            backgroundColor?: any;
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
            isStacked?: boolean;
            legend?: ChartLegend;
            orientation?: string;
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/areachart
        export class AreaChart extends CoreChartBase {
            draw(data: DataTable, options: AreaChartOptions): void;
            draw(data: DataView, options: AreaChartOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/areachart#Configuration_Options
        export interface AreaChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            areaOpacity?: number;
            axisTitlesPosition?: string;
            backgroundColor?: any;
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
            isStacked?: boolean;
            legend?: ChartLegend;
            lineWidth?: number;
            orientation?: string;
            pointSize?: number;
            reverseCategories?: boolean;
            selectionMode?: string // single / multiple
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
        //#region SteppedAreaChart

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/areachart
        export class SteppedAreaChart extends CoreChartBase {
            draw(data: DataTable, options: SteppedAreaChartOptions): void;
            draw(data: DataView, options: SteppedAreaChartOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/areachart#Configuration_Options
        export interface SteppedAreaChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            areaOpacity?: number;
            axisTitlesPosition?: string;
            backgroundColor?: any;
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
            isStacked?: boolean;
            legend?: ChartLegend;
            reverseCategories?: boolean;
            selectionMode?: string // single / multiple
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart
        export class PieChart extends CoreChartBase {
            draw(data: DataTable, options: PieChartOptions): void;
            draw(data: DataView, options: PieChartOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart#Configuration_Options
        export interface PieChartOptions {
            backgroundColor?: any;
            chartArea?: ChartArea;
            colors?: string[];
            enableInteractivity?: boolean;
            fontSize?: number;
            fontName?: string;
            height?: number;
            is3D?: boolean;
            legend?: ChartLegend;
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/scatterchart
        export class BubbleChart extends CoreChartBase {
            draw(data: DataTable, options?: BubbleChartOptions): void;
            draw(data: DataView, options?: BubbleChartOptions): void;
        }

        export interface BubbleChartOptions {
            animation?: TransitionAnimation;
            axisTitlesPosition?: string; // in, out, none
            backgroundColor?: any;
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
            legend?: ChartLegend;
            selectionMode?: string;
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/treemap
        export class TreeMap extends ChartBase {
            draw(data: DataTable, options?: TreeMapOptions): void;
            draw(data: DataView, options?: TreeMapOptions): void;
            goUpAndDraw(): void;
            getMaxPossibleDepth(): number;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/treemap#Configuration_Options
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/table
        export class Table extends ChartBase {
            draw(data: DataTable, options?: TableOptions): void;
            draw(data: DataView, options?: TableOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/table#Configuration_Options
        export interface TableOptions {
            allowHtml?: boolean;
            alternatingRowStyle?: boolean;
            cssClassName?: CssClassNames;
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

        //#endregion
        //#region Timeline

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/timeline
        export class Timeline {
            constructor(element: Element);
            draw(data: DataTable, options?: TimelineOptions): void;
            draw(data: DataView, options?: TimelineOptions): void;
            clearChart(): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/timeline#Configuration_Options
        export interface TimelineOptions {
            avoidOverlappingGridLines?: boolean;
            backgroundColor?: any;
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

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/candlestickchart
        export class CandlestickChart extends CoreChartBase {
            draw(data: DataTable, options: CandlestickChartOptions): void;
            draw(data: DataView, options: CandlestickChartOptions): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/candlestickchart#Configuration_Options
        export interface CandlestickChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            axisTitlesPosition?: string;
            backgroundColor?: any;
            bar?: GroupWidth;
            candlestick?: {
                hollowIsRising?: boolean;
                fallingColor?: ChartStroke;
                risingColor?: ChartStroke;
            }
            chartArea?: ChartArea;
            colors?: string[];
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            legend?: ChartLegend;
            orientation?: string;
            reverseCategories?: boolean;
            selectionMode?: string // single / multiple
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
        //#region Events

        module events {
            function addListener(visualization: any, eventName: string, callback: Function): any;
            function addListener(visualization: any, eventName: string, callback: (...args: any[]) => void): any;
            function removeListener(listener: any): void;
            function removeAllListeners(visualization: any): void;
            function trigger(visualization: any, eventName: string, args?: any): void;
        }

        //#endregion
    }
}
