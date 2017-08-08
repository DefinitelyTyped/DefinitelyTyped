// Type definitions for Highcharts No Data to Display 4.2.7
// Project: http://www.highcharts.com/
// Definitions by: Andrey Zolotin <http://github.com/nitoloz>, Rowell Heria <http://github.com/rowellx68>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Static } from "highcharts";

declare module "highcharts" {
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

declare function HighchartsNoDataToDisplay(H: Static): Static;
export = HighchartsNoDataToDisplay;
export as namespace HighchartsNoDataToDisplay;
