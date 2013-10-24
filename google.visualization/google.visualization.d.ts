declare module google {

    function load(visualization: string, version: string, packages: any): void;
    function setOnLoadCallback(handler: Function): void;
    function setOnLoadCallback(handler: () => void): void;

    module visualization {
        function arrayToDataTable(data: any[]): any;

        module events {
            function addListener(chart: any, eventName: string, callback: Function);
            function addListener(chart: any, eventName: string, callback: () => any);
        }

        //https://google-developers.appspot.com/chart/interactive/docs/gallery/geochart
        //export interface GeoChartColor { // can't overload GeoChartOptions.backgroundColor
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
        export class GeoChart {
            constructor(element: Element);
            draw(chart: any, options: any);
        }
    }
}