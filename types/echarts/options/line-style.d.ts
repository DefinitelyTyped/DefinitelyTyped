declare namespace echarts {
    namespace EChartOption {
        /**
         * Line style
         */
        interface LineStyle {
            color?: EChartOption.Color | EChartOption.Color[] | undefined;
            width?: number | undefined;
            type?: "solid" | "dashed" | "dotted" | undefined;
            shadowBlur?: number | undefined;
            shadowColor?: EChartOption.Color | undefined;
            shadowOffsetX?: number | undefined;
            shadowOffsetY?: number | undefined;
            opacity?: number | undefined;
        }
    }
}
