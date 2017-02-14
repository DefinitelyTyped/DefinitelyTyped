// Type definitions for Highmaps 4.2.7
// Project: http://www.highcharts.com/products/highmaps
// Definitions by: Albert Ozimek <https://github.com/AlbertOzimek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { Highcharts } from "highcharts";

 declare namespace Highmaps {
     interface Static extends Highcharts.Static {
         mapChart(renderTo: string | HTMLElement, options: any, callback?: (chart: any) => void): any;
     }
 }

declare var Highmaps: Highcharts.Static;
export = Highmaps;
export as namespace Highcharts;

