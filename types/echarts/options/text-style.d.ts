declare namespace echarts {
    namespace EChartOption {
        /**
         * @see https://echarts.apache.org/en/option.html#textStyle
         */
        interface BaseTextStyle {
            color?: string | undefined;
            fontStyle?: 'normal' | 'italic' | 'oblique' | undefined;
            fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            lineHeight?: number | undefined;
            width?: number | string | undefined;
            height?: number | string | undefined;
            textBorderColor?: string | undefined;
            textBorderWidth?: number | undefined;
            textShadowColor?: string | undefined;
            textShadowBlur?: number | undefined;
            textShadowOffsetX?: number | undefined;
            textShadowOffsetY?: number | undefined;
        }

        interface TextStyle extends BaseTextStyle {
            align?: string | undefined;
            verticalAlign?: string | undefined;
            backgroundColor?: string | object | undefined;
            borderColor?: string | undefined;
            borderWidth?: number | undefined;
            borderRadius?: number | undefined;
            padding?: number | number[] | undefined;
            shadowColor?: string | undefined;
            shadowBlur?: number | undefined;
            shadowOffsetX?: number | undefined;
            shadowOffsetY?: number | undefined;
        }

        /**
         * @see https://echarts.apache.org/en/tutorial.html#Rich%20Text
         */
        interface RichStyle {
            [userStyleName: string]: TextStyle;
        }

        interface BaseTextStyleWithRich {
            rich?: RichStyle | undefined;
        }

        interface TextStyleWithRich extends TextStyle {
            rich?: RichStyle | undefined;
        }
    }
}
