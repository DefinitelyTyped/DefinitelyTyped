declare namespace echarts {
    namespace EChartOption {
        /**
         * @todo describe
         */
        interface TextStyle {
            color?: string;
            fontStyle?: 'normal' | 'italic' | 'oblique';
            fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter'
                            | '100' | '200' | '300' | '400';
            fontFamily?: string;
            fontSize?: number;
            lineHeight?: number;
            width?: number | string;
            height?: number | string;
            textBorderColor?: string;
            textBorderWidth?: number;
            textShadowColor?: string;
            textShadowBlur?: number;
            textShadowOffsetX?: number;
            textShadowOffsetY?: number;
        }
    }
}
