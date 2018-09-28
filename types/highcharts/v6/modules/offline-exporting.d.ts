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
    /**
     * Download options for offline exporting.
     */
    interface OfflineExportingDownloadOptionsObject {
        /**
         * Name of resulting downloaded file without extension.
         */
        filename?: string;

        /**
         * URL pointing to location of dependency scripts to download on demand.
         * By default, the module will load these file from our server. Internet
         * Explorer requires the canvg library in order to export to PNG and to
         * export charts with embedded images. PDF export also requires the
         * jsPDF and svg2pdf for all browsers.
         */
        libURL?: string;

        /**
         * Scaling factor of downloaded image compared to source
         */
        scale?: number;

        /**
         * File type of resulting download
         */
        type?: string;
    }

    interface OfflineExportingOptionsObject {
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
         * The width of the PNG or JPG image generated on the server.
         */
        width?: number;
    }

    interface Chart {
        /**
         * Exporting and offline-exporting modules required. Export a chart to
         * an image locally in the user's browser. Requires the regular
         * exporting module.
         *
         * @param exportingOptions
         *        Exporting options, the same as in
         *        Highcharts.Chart#exportChart.
         *
         * @param chartOptions
         *        Additional chart options for the exported chart. For example a
         *        different background color can be added here, or `dataLabels`
         *        for export only.
         */
        exportChartLocal(exportingOptions: OfflineExportingOptionsObject, chartOptions: Highcharts.Options): void;
    }

    /**
     * Get data URL to an image of an SVG and call download on it options
     * object: - **filename:** Name of resulting downloaded file without
     * extension. Default is `chart`. - **type:** File type of resulting
     * download. Default is `image/png`. - **scale:** Scaling factor of
     * downloaded image compared to source. Default is `1`. - **libURL:** URL
     * pointing to location of dependency scripts to download on demand. Default
     * is the exporting.libURL option of the global Highcharts options pointing
     * to our server.
     *
     * @param svg
     *
     *
     * @param options
     *
     *
     * @param failCallback
     *
     *
     * @param successCallback
     *
     */
    function downloadSVGLocal(svg: string, options: OfflineExportingDownloadOptionsObject, failCallback: Function, successCallback: Function): void;
}

export = factory;
export as namespace OfflineExportingFactory;
