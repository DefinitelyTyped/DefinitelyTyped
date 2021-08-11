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
    theme_: string;
    initOptions_: {
        theme?: string;
        devicePixelRatio?: number;
        renderer?: string;
        width?: number | string;
        height?: number | string;
    };
    setOption(options: any): void;
    options_: any;
    html(): string;
}
