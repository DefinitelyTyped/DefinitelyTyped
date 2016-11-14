// Type definitions for Highcharts 4.2.6
// Project: http://www.highcharts.com/
// Definitions by: Maciej Suchecki <http://github.com/mc-suchecki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="highcharts.d.ts" />

declare var HighchartsMore: (H: __Highcharts.Static) => __Highcharts.Static;

declare module "highcharts/highcharts-more" {
    export = HighchartsMore;
}
