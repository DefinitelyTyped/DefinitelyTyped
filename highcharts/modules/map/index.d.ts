// Type definitions for Highmaps 4.2.7
// Project: http://www.highcharts.com/products/highmaps
// Definitions by: Albert Ozimek <https://github.com/AlbertOzimek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Static } from 'highcharts';

declare module 'highcharts' {
    export interface Static {
        mapChart(renderTo: string | HTMLElement, options: Options, callback?: (chart: ChartObject) => void): ChartObject;
    }
}

