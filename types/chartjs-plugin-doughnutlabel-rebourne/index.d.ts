// Type definitions for chartjs-plugin-doughnutlabel-rebourne 3.0
// Project: https://github.com/alexkuc/chartjs-plugin-doughnutlabel-rebourne
// Definitions by: Piotr Ładoński <https://github.com/Voodu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import { ChartType, Plugin } from 'chart.js';

declare module 'chart.js' {
    interface PluginOptionsByType<TType extends ChartType> {
        doughnutlabel?: DoughnutLabel.Options;
    }
}

declare namespace DoughnutLabel {
    interface Options {
        labels?: Label[];
        /** Which plugin core api to use to draw labels */
        api?: Exclude<keyof Plugin, 'id'>;
        /** How much padding to add when scaling very large text (value in percentage of 100) */
        paddingPercentage?: number | `${number}`;
        /** Show labels or not (plugin scope) */
        display?: boolean;
        /** Color of the labels (plugin scope) */
        color?: CanvasRenderingContext2D['fillStyle'];
        /** The font options used to draw the label text (plugin scope) */
        font?: Font;
    }

    interface Label {
        /** The text to display */
        text: string;
        /** The font options used to draw the label text (single label scope) */
        font?: Font;
        /** Color of the labels (single label scope) */
        color?: CanvasRenderingContext2D['fillStyle'];
        /** Show the label or not (single label scope) */
        display?: boolean;
    }

    interface Font {
        /** Defaults to `Chart.defaults.global.defaultFontFamily` */
        family?: string;
        /** Defaults to 1.2 */
        lineHeight?: number | `${number}`;
        /** Defaults to `Chart.defaults.global.defaultFontSize` */
        size?: number | `${number}`;
        /** Defaults to `Chart.defaults.global.defaultFontStyle` */
        style?: string;
        /** Defaults to `'normal'` */
        weight?: string;
    }
}

declare const DoughnutLabelPlugin: Plugin<'doughnut'>;

export = DoughnutLabelPlugin;
