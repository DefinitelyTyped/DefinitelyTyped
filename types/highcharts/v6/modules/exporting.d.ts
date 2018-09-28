import * as Highcharts from "highcharts";

/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
declare function factory(highcharts: typeof Highcharts): void;

/**
 * The Highcharts object is the placeholder for all other members, and various
 * utility functions. The most important member of the namespace would be the
 * chart constructor.
 */
declare module "../highcharts" {
    interface ExportingOptionsObject {
        /**
         * The file name for the export without extension.
         */
        filename?: string;

        /**
         * The pixel height of the source (in-page) chart.
         */
        sourceHeight?: number;

        /**
         * The pixel width of the source (in-page) chart.
         */
        sourceWidth?: number;

        /**
         * The MIME type of the converted image.
         */
        type?: string;

        /**
         * The URL for the server module to do the conversion.
         */
        url?: string;

        /**
         * The width of the PNG or JPG image generated on the server.
         */
        width?: number;
    }

    interface Chart {
        /**
         * Exporting module required. Submit an SVG version of the chart to a
         * server along with some parameters for conversion.
         *
         * @param exportingOptions
         *        Exporting options in addition to those defined in exporting.
         *
         * @param chartOptions
         *        Additional chart options for the exported chart. For example a
         *        different background color can be added here, or `dataLabels`
         *        for export only.
         *
         * @see https://api.highcharts.com/class-reference/Highcharts.Chart#exportChart
         */
        exportChart(exportingOptions: ExportingOptionsObject, chartOptions: Highcharts.Options): void;

        /**
         * Return the unfiltered innerHTML of the chart container. Used as hook
         * for plugins. In styled mode, it also takes care of inlining CSS style
         * rules.
         *
         * @return The unfiltered SVG of the chart.
         */
        getChartHTML(): string;

        /**
         * Return an SVG representation of the chart.
         *
         * @param chartOptions
         *        Additional chart options for the generated SVG representation.
         *        For collections like `xAxis`, `yAxis` or `series`, the
         *        additional options is either merged in to the orininal item of
         *        the same `id`, or to the first item if a common id is not
         *        found.
         *
         * @return The SVG representation of the rendered chart.
         *
         * @fires Highcharts.Chart#getSVG
         */
        getSVG(chartOptions: Highcharts.Options): string;

        /**
         * Exporting module required. Clears away other elements in the page and
         * prints the chart as it is displayed. By default, when the exporting
         * module is enabled, a context button with a drop down menu in the
         * upper right corner accesses this function.
         *
         * @fires Highcharts.Chart#beforePrint
         * @fires Highcharts.Chart#afterPrint
         */
        print(): void;
    }
}

export = factory;
export as namespace ExportingFactory;
