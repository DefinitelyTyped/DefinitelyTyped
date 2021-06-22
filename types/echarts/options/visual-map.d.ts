declare namespace echarts {
    namespace EChartOption {
        type VisualMap = VisualMap.Continuous | VisualMap.Piecewise;
    }
    namespace VisualMap {
        interface Continuous {
            type?: 'continuous';
            id?: string;
            min?: number;
            max?: number;
            range?: number[];
            calculable?: boolean;
            realtime?: boolean;
            inverse?: boolean;
            precision?: number;
            itemWidth?: number;
            itemHeight?: number;
            align?: 'auto' | 'left' | 'right' | 'top' | 'bottom';
            text?: string[];
            textGap?: number;
            show?: boolean;
            dimension?: string | number;
            seriesIndex?: number | number[];
            hoverLink?: boolean;
            inRange?: RangeObject;
            outOfRange?: RangeObject;
            controller?: {
                inRange?: RangeObject;
                outOfRange?: RangeObject;
            };
            zlevel?: number;
            z?: number;
            left?: number | string;
            top?: number | string;
            right?: number | string;
            bottom?: number | string;
            orient?: 'vertical' | 'horizontal';
            padding?: number | number[];
            backgroundColor?: string;
            borderColor?: string;
            borderWidth?: number;
            color?: string[];
            textStyle?: EChartOption.BaseTextStyleWithRich;
            formatter?: string | Function;
        }
        interface Piecewise {
            type?: 'piecewise';
            id?: string;
            splitNumber?: number;
            pieces?: PiecesObject[];
            categories?: string[];
            min?: number;
            max?: number;
            minOpen?: boolean;
            maxOpen?: boolean;
            selectedMode?: 'multiple' | 'single';
            inverse?: boolean;
            precision?: number;
            itemWidth?: number;
            itemHeight?: number;
            align?: 'auto' | 'left' | 'right';
            text?: string[];
            textGap?: number | number[];
            showLabel?: boolean;
            itemGap?: number;
            itemSymbol?: string;
            show?: boolean;
            dimension?: string | number;
            seriesIndex?: number | number[];
            hoverLink?: boolean;
            inRange?: RangeObject;
            outOfRange?: RangeObject;
            controller?: {
                inRange?: RangeObject;
                outOfRange?: RangeObject;
            };
            zlevel?: number;
            z?: number;
            left?: number | string;
            top?: number | string;
            right?: number | string;
            bottom?: number | string;
            orient?: 'vertical' | 'horizontal';
            padding?: number | number[];
            backgroundColor?: string;
            borderColor?: string;
            borderWidth?: number;
            color?: string[];
            textStyle?: EChartOption.TextStyle;
            formatter?: string | Function;
        }
        interface RangeObject {
            symbol?: string | string[];
            symbolSize?: number | number[];
            color?: string | string[];
            colorAlpha?: number | number[];
            opacity?: number | number[];
            colorLightness?: number | number[];
            colorSaturation?: number | number[];
            colorHue?: number | number[];
        }
        interface PiecesObject {
            min?: number;
            max?: number;
            label?: string;
            value?: number;
            color?: string;
        }
    }
}
