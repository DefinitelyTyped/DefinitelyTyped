declare module google {

    function load(visualization: string, version: string, packages: any): void;
    function setOnLoadCallback(handler: Function): void;
    function setOnLoadCallback(handler: () => void): void;

    module visualization {
        function arrayToDataTable(data: any[]): DataTable;

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

        export interface DataObject {
            cols: DataObjectColumn[];
            rows: DataObjectRow[];
            p: any;
        }

        export interface DataObjectCell {
            v?: any;
            f?: any;
            p?: any;
        }

        export interface DataTableColumnDescription {
            type?: string;
            label?: string;
            id?: string;
            role?: string;
            pattern?: string;
        }

        // https://developers.google.com/chart/interactive/docs/reference#DataTable
        export class DataTable {
            constructor(data?: any, version?: any);
            addColumn(type: string, label?: string, id?: string): number;
            addColumn(descriptionObject: DataTableColumnDescription): number;
            addRow(cellObject: DataObjectCell): number;
            addRow(cellArray?: any[]): number;
            addRows(count: number): number;
            addRows(array: DataObjectCell[][]);
            addRows(array: any[]);
        }

        //https://google-developers.appspot.com/chart/interactive/docs/gallery/geochart
        export class GeoChart {
            constructor(element: Element);
            draw(chart: DataTable, options: GeoChartOptions);
        }
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
        //export interface GeoChartColor {
        //    fill?: string;
        //    stroke?: string;
        //    strokeWidth: number;
        //}
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
        export interface GeoChartAxis {
            maxSize?: number;
            maxValue?: number;
            minSize?: number;
            minValue?: number;
        }
        export interface GeoChartTooltip {
            textStyle?: GeoChartTextStyle;
            trigger?: string;
        }

        module events {
            function addListener(chart: any, eventName: string, callback: Function);
            function addListener(chart: any, eventName: string, callback: () => any);
        }
    }
}