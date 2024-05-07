import { ChartObject, IndividualSeriesOptions, Options } from "highcharts";

declare global {
    interface HighChartsNGConfig {
        options: Options;
        // The below properties are watched separately for changes.

        // Series object (optional) - a list of series using normal highcharts series options.
        series?: IndividualSeriesOptions[] | undefined;
        // Title configuration (optional)
        title?: {
            text?: string | undefined;
        } | undefined;
        // Boolean to control showng loading status on chart (optional)
        // Could be a string if you want to show specific loading text.
        loading?: boolean | string | undefined;
        // Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        // properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
        xAxis?: {
            currentMin?: number | undefined;
            currentMax?: number | undefined;
            title?: { text?: string | undefined } | undefined;
        } | undefined;
        // Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
        useHighStocks?: boolean | undefined;
        // size (optional) if left out the chart will default to size of the div or something sensible.
        size?: {
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
        // function (optional) - setup some logic for the chart
        func?: ((chart: ChartObject) => void) | undefined;
        // no data text (optional) to show if all series are empty
        noData?: string | undefined;
    }

    // Instantiated Chart
    interface HighChartsNGChart extends HighChartsNGConfig {
        // This is a simple way to access all the Highcharts API that is not currently managed by this directive.
        getHighcharts(): ChartObject;
    }
}
