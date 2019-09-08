declare namespace echarts {
    namespace EChartOption {
        /**
         * Line style
         */
        interface LineStyle {
            color?: string[];
            width?: number;
            type?: 'solid' | 'dashed' | 'dotted';
            shadowBlur?: number;
            shadowColor?: string;
            shadowOffsetX?: number;
            shadowOffsetY?: number;
            opacity?: number;
        }
    }
}
