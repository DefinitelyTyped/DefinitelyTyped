declare namespace echarts {
    namespace EChartOption {
        /**
         * An axis with a single dimension. It can be used to display data in one dimension
         *
         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis
         */
        interface SingleAxis extends BasicComponents.CartesianAxis {
            /**
             * Orientation of the axis. By default, it's 'horizontal'.
             * You can set it to be 'vertical' to make a vertical axis.
             *
             * @default 'horizontal'
             */
            orient?: 'horizontal' | 'vertical';

            /**
             * Options:
             * + 'value' - Numerical axis, suitable for continuous data.
             * + 'category' Category axis, suitable for discrete category data.
             *   Data should only be set via data for this type.
             * + 'time' Time axis, suitable for continuous time series data.
             *   As compared to value axis, it has a better formatting for time
             *   and a different tick calculation method.
             *   For example, it decides to use month, week, day or hour for tick
             *   based on the range of span.
             * + 'log' Log axis, suitable for log data.
             *
             * @default 'value'
             * @see https://echarts.apache.org/en/option.html#singleAxis.type
             */
            type?: BasicComponents.CartesianAxis.Type;
        }
    }
}
