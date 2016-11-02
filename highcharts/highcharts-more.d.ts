// Type definitions for Highcharts 4.2.6
// Project: http://www.highcharts.com/
// Definitions by: Maciej Suchecki <http://github.com/mc-suchecki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Static } from "highcharts";

declare var HighchartsMore: (H: Static) => Static;

declare module "highcharts/highcharts-more" {
    export = HighchartsMore;
}
