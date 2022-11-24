// Type definitions for chartjs-plugin-trendline 1.0
// Project: https://github.com/Makanz/chartjs-plugin-trendline
// Definitions by: Ferotiq <https://github.com/Ferotiq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { Plugin } from 'chart.js';

declare module 'chart.js' {
    interface ChartDatasetProperties<TType extends ChartType, TData> {
        trendlineLinear?: TrendlineLinearPlugin.TrendlineLinearOptions;
    }
}

declare namespace TrendlineLinearPlugin {
    interface TrendlineLinearOptions {
        style: string;
        lineStyle: 'dotted' | 'solid';
        width: number;
        projection?: boolean;
    }
}

declare const TrendlineLinearPlugin: Plugin;

export = TrendlineLinearPlugin;
export as namespace TrendlineLinearPlugin;
