import type { Plugin } from "chart.js";

declare module "chart.js" {
    interface ChartDatasetProperties<TType extends ChartType, TData> {
        trendlineLinear?: TrendlineLinearPlugin.TrendlineLinearOptions;
    }
}

declare namespace TrendlineLinearPlugin {
    interface TrendlineLinearOptions {
        style: string;
        lineStyle: "dotted" | "solid";
        width: number;
        projection?: boolean;
    }
}

declare const TrendlineLinearPlugin: Plugin;

export = TrendlineLinearPlugin;
export as namespace TrendlineLinearPlugin;
