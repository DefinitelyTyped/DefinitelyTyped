// Type definitions for Highcharts No Data to Display
// Project: http://www.highcharts.com/
// Definitions by: Andrey Zolotin <http://github.com/nitoloz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="highcharts.d.ts" />
declare namespace __Highcharts {
    interface ChartObject {
        /**
         * Returns true if there are data points within the plot area now
         * @return {boolean} If chart has any data.
         * @since 3.0.8
         */
        hasData(): boolean;

        /**
         * Hide the 'No data to display' message added by the no-data-to-display plugin.
         * @since 3.0.8
         */
        hideNoData(): void;

        /**
         * Display a no-data message.
         * @param {String} message An optional message to show in place of the default one
         * @since 3.0.8
         */
        showNoData(message?: string): void;
    }
}
