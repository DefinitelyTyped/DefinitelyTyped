// Type definitions for chartjs-plugin-colorschemes 0.4
// Project: https://nagix.github.io/chartjs-plugin-colorschemes
// Definitions by: Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Chart from 'chart.js';

declare module 'chart.js' {
    interface ChartPluginsOptions {
        colorschemes?: ColorSchemesOptions;
    }
}

export interface ColorSchemesOptions {
    scheme: string | string[];
    fillAlpha?: number;
    reverse?: boolean;
    override?: boolean;
    custom?: (schemeColors: string[]) => string[] | void;
}

declare const ColorSchemesPlugin: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions;

export default ColorSchemesPlugin;
