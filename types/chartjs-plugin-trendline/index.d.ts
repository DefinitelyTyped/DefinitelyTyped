// Type definitions for chartjs-plugin-trendline x.x
// Project: https://github.com/Makanz/chartjs-plugin-trendline (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Ferotiq <https://github.com/Ferotiq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Chart from "chart.js";

declare module "chart.js" {
    interface ChartPluginsOptions {
        trendlineLinear?: TrendlineLinearOptions
    }
}

export interface TrendlineLinearOptions {
    style: string;
    lineStyle: "dotted" | "solid";
    width: number;
    projection?: boolean;
}

declare const TrendlineLinearPlugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions;

export default TrendlineLinearPlugin;
