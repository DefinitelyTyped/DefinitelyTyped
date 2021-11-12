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
                type?: string | undefined;
                id?: string | undefined;
                disabled?: boolean | undefined;
                xAxisIndex?: number | number[] | undefined;
                yAxisIndex?: number | number[] | undefined;
                radiusAxisIndex?: number | number[] | undefined;
                angleAxisIndex?: number | number[] | undefined;
                singleAxisIndex?: number | number[] | undefined;
                filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none' | undefined;
                start?: number | undefined;
                end?: number | undefined;
                startValue?: number | string | Date | undefined;
                endValue?: number | string | Date | undefined;
                minSpan?: number | undefined;
                maxSpan?: number | undefined;
                minValueSpan?: number | string | Date | undefined;
                maxValueSpan?: number | string | Date | undefined;
                orient?: string | undefined;
                zoomLock?: boolean | undefined;
                throttle?: number | undefined;
                rangeMode?: string[] | undefined;
                zoomOnMouseWheel?: boolean | undefined;
                moveOnMouseMove?: boolean | undefined;
                moveOnMouseWheel?: boolean | undefined;
                preventDefaultMouseMove?: boolean | undefined;
            }

            /**
             * @see https://echarts.apache.org/en/option.html#dataZoom-slider
             */
            interface Slider {
                type?: string | undefined;
                id?: string | undefined;
                show?: boolean | undefined;
                backgroundColor?: string | undefined;
                dataBackground?: object | undefined;
                fillerColor?: string | undefined;
                borderColor?: string | undefined;
                handleIcon?: string | undefined;
                handleSize?: number | string | undefined;
                handleStyle?: object | undefined;
                moveHandleIcon?: string | undefined;
                moveHandleSize?: number | undefined;
                moveHandleStyle?: object | undefined;
                labelPrecision?: number | undefined;
                labelFormatter?: string | Function | undefined;
                showDetail?: boolean | undefined;
                showDataShadow?: string | undefined;
                realtime?: boolean | undefined;
                textStyle?: BaseTextStyle | undefined;
                xAxisIndex?: number | number[] | undefined;
                yAxisIndex?: number | number[] | undefined;
                radiusAxisIndex?: number | number[] | undefined;
                angleAxisIndex?: number | number[] | undefined;
                singleAxisIndex?: number | number[] | undefined;
                filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none' | undefined;
                start?: number | undefined;
                end?: number | undefined;
                startValue?: number | string | Date | undefined;
                endValue?: number | string | Date | undefined;
                minSpan?: number | undefined;
                maxSpan?: number | undefined;
                minValueSpan?: number | string | Date | undefined;
                maxValueSpan?: number | string | Date | undefined;
                orient?: 'vertical' | 'horizontal' | undefined;
                zoomLock?: boolean | undefined;
                throttle?: number | undefined;
                rangeMode?: string[] | undefined;
                zlevel?: number | undefined;
                z?: number | undefined;
                left?: string | number | undefined;
                top?: string | number | undefined;
                right?: string | number | undefined;
                bottom?: string | number | undefined;
            }
        }
    }
}
