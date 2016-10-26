// Type definitions for Highcharts 4.2.6 (boost module)
// Project: http://www.highcharts.com/
// Definitions by: Daniel Martin <http://github.com/inad9300>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="highcharts.d.ts" />

declare var HighchartsBoost: (H: __Highcharts.Static) => __Highcharts.Static;

declare module "highcharts/modules/boost" {
    export = HighchartsBoost;
}
