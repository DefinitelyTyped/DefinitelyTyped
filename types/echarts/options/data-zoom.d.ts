declare namespace echarts {
    namespace EChartOption {
        /**
         * Data zoom component of inside type.
         * Refer to dataZoom for more information.
         * The inside means it's inside the coordinates.
         * Translation: data area can be translated when moving in coordinates.
         * Scaling:
         * PC: when mouse rolls (similar with touch pad) in coordinates.
         * Mobile: when touches and moved with two fingers in coordinates
         * on touch screens.
         *
         * @todo describe
         * @see https://echarts.apache.org/en/option.html#dataZoom-inside
         * @see https://echarts.apache.org/en/option.html#dataZoom-slider
         */
        type DataZoom = DataZoom.Inside | DataZoom.Slider;

        namespace DataZoom {
            /**
             * Data zoom component of inside type.
             * Refer to dataZoom for more information.
             * The inside means it's inside the coordinates.
             * Translation: data area can be translated when moving in coordinates.
             * Scaling:
             * PC: when mouse rolls (similar with touch pad) in coordinates.
             * Mobile: when touches and moved with two fingers in coordinates
             * on touch screens.
             *
             * @see https://echarts.apache.org/en/option.html#dataZoom-inside
             */
            interface Inside {
                type?: string;
                id?: string;
                disabled?: boolean;
                xAxisIndex?: number | number[];
                yAxisIndex?: number | number[];
                radiusAxisIndex?: number | number[];
                angleAxisIndex?: number | number[];
                singleAxisIndex?: number | number[];
                filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none';
                start?: number;
                end?: number;
                startValue?: number | string | Date;
                endValue?: number | string | Date;
                minSpan?: number;
                maxSpan?: number;
                minValueSpan?: number | string | Date;
                maxValueSpan?: number | string | Date;
                orient?: string;
                zoomLock?: boolean;
                throttle?: number;
                rangeMode?: string[];
                zoomOnMouseWheel?: boolean;
                moveOnMouseMove?: boolean;
                moveOnMouseWheel?: boolean;
                preventDefaultMouseMove?: boolean;
            }

            /**
             * @see https://echarts.apache.org/en/option.html#dataZoom-slider
             */
            interface Slider {
                type?: string;
                id?: string;
                show?: boolean;
                backgroundColor?: string;
                dataBackground?: object;
                fillerColor?: string;
                borderColor?: string;
                handleIcon?: string;
                handleSize?: number | string;
                handleStyle?: object;
                labelPrecision?: number;
                labelFormatter?: string | Function;
                showDetail?: boolean;
                showDataShadow?: string;
                realtime?: boolean;
                textStyle?: BaseTextStyle;
                xAxisIndex?: number | number[];
                yAxisIndex?: number | number[];
                radiusAxisIndex?: number | number[];
                angleAxisIndex?: number | number[];
                singleAxisIndex?: number | number[];
                filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none';
                start?: number;
                end?: number;
                startValue?: number | string | Date;
                endValue?: number | string | Date;
                minSpan?: number;
                maxSpan?: number;
                minValueSpan?: number | string | Date;
                maxValueSpan?: number | string | Date;
                orient?: 'vertical' | 'horizontal';
                zoomLock?: boolean;
                throttle?: number;
                rangeMode?: string[];
                zlevel?: number;
                z?: number;
                left?: string | number;
                top?: string | number;
                right?: string | number;
                bottom?: string | number;
            }
        }
    }
}
