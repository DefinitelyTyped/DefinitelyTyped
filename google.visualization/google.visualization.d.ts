declare module google {

    function load(visualization: string, version: string, packages: any): void;
    function setOnLoadCallback(handler: Function): void;
    function setOnLoadCallback(handler: () => void): void;

    //https://developers.google.com/chart/interactive/docs/reference
    module visualization {
        //#region DataTable

        // https://developers.google.com/chart/interactive/docs/reference#DataTable
        export class DataTable {
            constructor(data?: any, version?: any);
            addColumn(type: string, label?: string, id?: string): number;
            addColumn(descriptionObject: DataTableColumnDescription): number;
            addRow(cellObject: DataObjectCell): number;
            addRow(cellArray?: any[]): number;
            addRows(count: number): number;
            addRows(array: DataObjectCell[][]): number;
            addRows(array: any[]): number;
            getFilteredRows(filters: DataTableCellFilter[]): number[];
            getFormattedValue(rowIndex: number, columnIndex: number): string;
            getNumberOfColumns(): number;
            getNumberOfRows(): number;
            removeRow(rowIndex: number): void;
            removeRows(rowIndex: number, numberOfRows: number): void;
            setColumnLabel(columnIndex: number, label: string): void;
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

        function arrayToDataTable(data: any[]): DataTable;

        //#endregion
        //#region DataView

        // https://developers.google.com/chart/interactive/docs/reference#DataView
        export class DataView {
            constructor(data: DataTable);
            constructor(data: DataView);
            setColumns(columnIndexes: number[]): void;
        }

        //#endregion
        //#region GeoChart

        //https://google-developers.appspot.com/chart/interactive/docs/gallery/geochart
        export class GeoChart {
            constructor(element: Element);

            // https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=fr&csw=1#Methods
            draw(data: DataTable, options: GeoChartOptions): void;
            getSelection(): GeoChartSelection[];
            setSelection(selection: VisualizationSelectionArray[]): void;
            clearChart(): void;
        }

        // https://developers.google.com/chart/interactive/docs/gallery/geochart?hl=fr&csw=1#Configuration_Options
        export interface GeoChartOptions {
            backgroundColor?: any;
            colorAxis?: GeoChartColorAxis;
            datalessRegionColor?: string;
            displayMode?: string;
            enableRegionInteractivity?: boolean;
            height?: number;
            keepAspectRatio?: boolean;
            legend?: GeoChartLegend;
            region?: string;
            magnifyingGlass?: GeoChartMagnifyingGlass;
            markerOpacity?: number;
            resolution?: string;
            sizeAxis?: GeoChartAxis;
            tooltip?: GeoChartTooltip;
            width?: number;
        }
        export interface GeoChartAxis {
            maxSize?: number;
            maxValue?: number;
            minSize?: number;
            minValue?: number;
        }
        export interface GeoChartColorAxis extends GeoChartAxis {
            minValue?: number;
            maxValue?: number;
            values?: number[];
            colors?: string[];
        }
        export interface GeoChartTextStyle {
            color?: string;
            fontName?: string;
            fontSize?: number;
            bold?: boolean;
            italic?: boolean;
        }
        export interface GeoChartLegend {
            numberFormat?: string;
            textStyle?: GeoChartTextStyle;
        }
        export interface GeoChartMagnifyingGlass {
            enable?: boolean;
            zoomFactor?: number;
        }
        export interface GeoChartTooltip {
            textStyle?: GeoChartTextStyle;
            trigger?: string;
        }
        export interface GeoChartRegionClickEvent {
            region: string;
        }
        export interface GeoChartSelection {
            row: number;
        }

        //#endregion
        //#region Common

        export interface ChartArea {
            top: any;
            left: any;
            width: any;
            height: any;
        }

        export interface ChartTextStyle {
            color?: string;
            fontName?: string;
            fontSize?: number;
            bold?: boolean;
            italic?: boolean;
        }

        export interface ChartLegend {
            alignment?: string;
            maxLines?: number;
            position?: string;
            textStyle?: ChartTextStyle;
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
            minorGridlines?: ChartMinorGridlines;
        }

        export interface ChartMinorGridlines {
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

        export interface ChartLayoutInterface {
            getBoundingBox(id: string): ChartBoundingBox;
            getChartAreaBoundingBox(): ChartBoundingBox;
            getHAxisValue(position: number, axisIndex?: number): number;
            getVAxisValue(position: number, axisIndex?: number): number;
            getXLocation(position: number, axisIndex?: number): number;
            getYLocation(position: number, axisIndex?: number): number;
        }

        export interface VisualizationSelectionArray {
            column?: number;
            row?: number;
        }

        //#endregion
        //#region ColumnChart

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart
        export class ColumnChart {
            constructor(element: Element);

            // https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart#Methods
            draw(data: DataTable, options?: ColumnChartOptions): void;
            draw(data: DataView, options?: ColumnChartOptions): void;
            getChartLayoutInterface(): ChartLayoutInterface;
            getSelection(): any[];
            setSelection(selection: any[]): void;
            clearChart(): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart#Configuration_Options
        export interface ColumnChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            axisTitlesPosition?: string; // in, out, none
            backgroundColor?: any;
            bar?: ColumnChartBarOptions;
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

        export interface ColumnChartBarOptions {
            groupWidth: any;
        }

        //#endregion
        //#region LineChart

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart
        export class LineChart {
            constructor(element: Element);

            // https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#Methods
            draw(data: DataTable, options: any): void;
            draw(data: DataView, options: any): void;
            getChartLayoutInterface(): ChartLayoutInterface;
            getSelection(): any[];
            setSelection(selection: any[]): void;
            clearChart(): void;
        }

        // https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#Configuration_Options
        export interface LineChartOptions {
            aggregationTarget?: string;
            animation?: TransitionAnimation;
            axisTitlesPosition?: string;
            backgroundColor?: any;
            chartArea?: ChartArea;
            colors?: string[];
            curveType?: string;
            enableInteractivity?: boolean;
            focusTarget?: string;
            fontSize?: number;
            fontName?: string;
            hAxis?: ChartAxis;
            height?: number;
            interpolateNulls?: boolean;
            legend?: ChartLegend;
            lineWidth?: number;
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