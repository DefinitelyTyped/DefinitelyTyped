import * as Chart from "chart.js";

declare module "chart.js" {
    interface ChartPluginsOptions {
        colorschemes?: ColorSchemesOptions | undefined;
    }
}

export interface ColorSchemesOptions {
    scheme: string | string[];
    fillAlpha?: number | undefined;
    reverse?: boolean | undefined;
    override?: boolean | undefined;
    custom?: ((schemeColors: string[]) => string[] | void) | undefined;
}

declare const ColorSchemesPlugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions;

export default ColorSchemesPlugin;
