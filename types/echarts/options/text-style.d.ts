declare namespace echarts {
    namespace EChartOption {

        /**
         * @see https://echarts.apache.org/en/option.html#textStyle
         */
        interface BaseTextStyle {
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

        interface TextStyle extends BaseTextStyle {
            align?: string;
            verticalAlign?: string;
            backgroundColor?: string | object;
            borderColor?: string;
            borderWidth?: number;
            borderRadius?: number;
            padding?: number | number[];
            shadowColor?: string;
            shadowBlur?: number;
            shadowOffsetX?: number;
            shadowOffsetY?: number;
        }

        /**
         * @see https://echarts.apache.org/en/tutorial.html#Rich%20Text
         */
        interface RichStyle {
            [userStyleName: string]: TextStyle;
        }

        interface BaseTextStyleWithRich {
            rich?: RichStyle;
        }

        interface TextStyleWithRich extends TextStyle {
            rich?: RichStyle;
        }
    }
}
