// Type definitions for chartjs-plugin-trendline 1.0
// Project: https://github.com/Makanz/chartjs-plugin-trendline
// Definitions by: Ferotiq <https://github.com/Ferotiq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Chart from 'chart.js';

declare module 'chart.js' {
    interface ChartPluginsOptions {
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

declare const TrendlineLinearPlugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions;

export = TrendlineLinearPlugin;
export as namespace TrendlineLinearPlugin;
