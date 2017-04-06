
import { FusionChartStatic } from "fusioncharts";

declare namespace Charts {}
declare var Charts: (H: FusionChartStatic) => FusionChartStatic;
export = Charts;
export as namespace Charts;

