// Type definitions for chartjs-plugin-crosshair 1.1
// Project: https://chartjs-plugin-crosshair.netlify.com
// Definitions by: Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as Chart from 'chart.js';

declare module 'chart.js' {
    interface ChartPluginsOptions {
        crosshair?: CrosshairOptions;
    }

    interface InteractionModeRegistry {
        'interpolate': 'interpolate';
    }

    interface ChartDataSets {
        interpolate?: boolean;
    }
}

// This is a workaround needed because:
// classes exported with `export = ` can't be augmented by normal module augmentation (like we use above)
// see https://github.com/Microsoft/TypeScript/issues/14080
declare global {
    interface Chart {
        panZoom: (increment: number) => void;
    }
}

export interface CrosshairOptions {
    line?: LineOptions;
    sync?: SyncOptions;
    zoom?: ZoomOptions;
    snap?: SnapOptions;
    callbacks?: CallbackOptions;
}

/** https://chartjs-plugin-crosshair.netlify.app/options.html#crosshair-line-options */
export interface LineOptions {
    color?: string;
    width?: number;
    dashPattern?: number[];
}

/** https://chartjs-plugin-crosshair.netlify.app/options.html#chart-interaction-syncing */
export interface SyncOptions {
    enabled?: boolean;
    group?: number;
    suppressTooltips?: boolean;
}

/** https://chartjs-plugin-crosshair.netlify.app/options.html#zooming */
export interface ZoomOptions {
    enabled?: boolean;
    zoomboxBackgroundColor?: string;
    zoomboxBorderColor?: string;
    zoomButtonText?: string;
    zoomButtonClass?: string;
}

/** https://chartjs-plugin-crosshair.netlify.app/options.html#snapping */
export interface SnapOptions {
    enabled?: boolean;
}

/** https://chartjs-plugin-crosshair.netlify.app/options.html#callbacks */
export interface CallbackOptions {
    beforeZoom?: (start: number, end: number) => boolean;
    afterZoom?: (start: number, end: number) => void;
}
