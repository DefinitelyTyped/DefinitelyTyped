
import { FusionChartStatic } from "fusioncharts";

declare namespace World {}
declare var World: (H: FusionChartStatic) => FusionChartStatic;
export = World;
export as namespace World;

