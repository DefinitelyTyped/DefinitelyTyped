declare namespace echarts {
    namespace EChartOption {
        /**
         * Line style
         */
        interface LineStyle {
            color?: EChartOption.Color;
            width?: number;
            type?: 'solid' | 'dashed' | 'dotted';
            shadowBlur?: number;
            shadowColor?: EChartOption.Color;
            shadowOffsetX?: number;
            shadowOffsetY?: number;
            opacity?: number;
        }
    }
}
