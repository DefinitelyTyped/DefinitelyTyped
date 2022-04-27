declare namespace echarts {
    namespace EChartOption {
        type VisualMap = VisualMap.Continuous | VisualMap.Piecewise;
    }
    namespace VisualMap {
        interface Continuous {
            type?: 'continuous' | undefined;
            id?: string | undefined;
            min?: number | undefined;
            max?: number | undefined;
            range?: number[] | undefined;
            calculable?: boolean | undefined;
            realtime?: boolean | undefined;
            inverse?: boolean | undefined;
            precision?: number | undefined;
            itemWidth?: number | undefined;
            itemHeight?: number | undefined;
            align?: 'auto' | 'left' | 'right' | 'top' | 'bottom' | undefined;
            text?: string[] | undefined;
            textGap?: number | undefined;
            show?: boolean | undefined;
            dimension?: string | number | undefined;
            seriesIndex?: number | number[] | undefined;
            hoverLink?: boolean | undefined;
            inRange?: RangeObject | undefined;
            outOfRange?: RangeObject | undefined;
            controller?: {
                inRange?: RangeObject | undefined;
                outOfRange?: RangeObject | undefined;
            } | undefined;
            zlevel?: number | undefined;
            z?: number | undefined;
            left?: number | string | undefined;
            top?: number | string | undefined;
            right?: number | string | undefined;
            bottom?: number | string | undefined;
            orient?: 'vertical' | 'horizontal' | undefined;
            padding?: number | number[] | undefined;
            backgroundColor?: string | undefined;
            borderColor?: string | undefined;
            borderWidth?: number | undefined;
            color?: string[] | undefined;
            textStyle?: EChartOption.BaseTextStyleWithRich | undefined;
            formatter?: string | Function | undefined;
        }
        interface Piecewise {
            type?: 'piecewise' | undefined;
            id?: string | undefined;
            splitNumber?: number | undefined;
            pieces?: PiecesObject[] | undefined;
            categories?: string[] | undefined;
            min?: number | undefined;
            max?: number | undefined;
            minOpen?: boolean | undefined;
            maxOpen?: boolean | undefined;
            selectedMode?: 'multiple' | 'single' | undefined;
            inverse?: boolean | undefined;
            precision?: number | undefined;
            itemWidth?: number | undefined;
            itemHeight?: number | undefined;
            align?: 'auto' | 'left' | 'right' | undefined;
            text?: string[] | undefined;
            textGap?: number | number[] | undefined;
            showLabel?: boolean | undefined;
            itemGap?: number | undefined;
            itemSymbol?: string | undefined;
            show?: boolean | undefined;
            dimension?: string | number | undefined;
            seriesIndex?: number | number[] | undefined;
            hoverLink?: boolean | undefined;
            inRange?: RangeObject | undefined;
            outOfRange?: RangeObject | undefined;
            controller?: {
                inRange?: RangeObject | undefined;
                outOfRange?: RangeObject | undefined;
            } | undefined;
            zlevel?: number | undefined;
            z?: number | undefined;
            left?: number | string | undefined;
            top?: number | string | undefined;
            right?: number | string | undefined;
            bottom?: number | string | undefined;
            orient?: 'vertical' | 'horizontal' | undefined;
            padding?: number | number[] | undefined;
            backgroundColor?: string | undefined;
            borderColor?: string | undefined;
            borderWidth?: number | undefined;
            color?: string[] | undefined;
            textStyle?: EChartOption.TextStyle | undefined;
            formatter?: string | Function | undefined;
        }
        interface RangeObject {
            symbol?: string | string[] | undefined;
            symbolSize?: number | number[] | undefined;
            color?: string | string[] | undefined;
            colorAlpha?: number | number[] | undefined;
            opacity?: number | number[] | undefined;
            colorLightness?: number | number[] | undefined;
            colorSaturation?: number | number[] | undefined;
            colorHue?: number | number[] | undefined;
        }
        interface PiecesObject {
            min?: number | undefined;
            max?: number | undefined;
            label?: string | undefined;
            value?: number | undefined;
            color?: string | undefined;
        }
    }
}
