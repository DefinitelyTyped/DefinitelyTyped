export = ECharts;
declare function ECharts(
    options?: {
        theme?: string;
        devicePixelRatio?: number;
        renderer?: string;
        width?: number | string;
        height?: number | string;
    },
    ...args: any[]
): void;
declare class ECharts {
    constructor(
        options?: {
            theme?: string;
            devicePixelRatio?: number;
            renderer?: string;
            width?: number | string;
            height?: number | string;
        },
        ...args: any[]
    );
    layout: LayoutConfig;
    private theme_;
    private initOptions_;
    setOption(options: any): void;
    private options_;
    html(): string;
}
import LayoutConfig = require("../process/LayoutConfig.js");
