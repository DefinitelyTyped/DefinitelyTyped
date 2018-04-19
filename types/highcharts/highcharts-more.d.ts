// Type definitions for Highcharts 4.2.6
// Project: http://www.highcharts.com/
// Definitions by: Maciej Suchecki <https://github.com/mc-suchecki>
//                 Alasdair Shepherd <https://github.com/DaemonExMachina>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Highcharts from "highcharts";

declare namespace HighChartsMore {
    type Static = (H: Highcharts.Static) => Highcharts.Static;
}

declare const HighchartsMore: HighChartsMore.Static;
export = HighchartsMore;
export as namespace HighchartsMore;
