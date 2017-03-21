// Type definitions for Highmaps 4.2.7
// Project: http://www.highcharts.com/products/highmaps
// Definitions by: Albert Ozimek <https://github.com/AlbertOzimek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as highcharts from 'highcharts';
import * as geojson from 'geojson';

declare module 'highcharts' {
    interface Static {
        mapChart(renderTo: string | HTMLElement, options: MapOptions, callback?: (chart: highcharts.ChartObject) => void): highcharts.ChartObject;
    }

    interface MapOptions {
        chart?: highcharts.ChartOptions;

        legend?: highcharts.LegendOptions;

        mapNavigation?: Navigation;

        series?: MapSeriesOptions[];

        colorAxis?: ColorAxis;

        title?: highcharts.TitleOptions;
    }

    interface MapSeriesOptions {
        data?: number[] | [number, number][] | [string, number][] | highcharts.DataPoint[];

        dataLabels?: MapSeriesOptionsDataLabels;

        joinBy?: Array<string>;

        mapData?: geojson.GeoJsonObject;

        name?: string;

        states?: MapSeriesOptionsStates;

        tooltip?: MapSeriesOptionsTooltip;

        type?: string;
    }

    interface Navigation {}

    interface MapSeriesOptionsDataLabels {}

    interface MapSeriesOptionsStates {}

    interface MapSeriesOptionsTooltip {}

    interface ColorAxis {}
}
