declare namespace echarts {
    namespace EChartOption {
        /**
         * An axis with a single dimension. It can be used to display data in one dimension
         *
         * @see https://echarts.apache.org/en/option.html#xAxis
         */
        interface SingleAxis extends BasicComponents.CartesianAxis {
            /**
             * Orientation of the axis. By default, it's 'horizontal'.
             * You can set it to be 'vertical' to make a vertical axis.
             *
             * @default 'horizontal'
             */
            orient?: 'horizontal' | 'vertical' | undefined;

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
            type?: BasicComponents.CartesianAxis.Type | undefined;
            /**
             * Distance between grid component and the left side of the container.
             * left value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'left', 'center', or 'right'.
             * If the left value is set to be 'left', 'center', or 'right',
             * then the component will be aligned automatically based on position.
             *
             * @default '5%'
             */
            left?: string | number | undefined;
            /**
             * Distance between grid component and the top side of the container.
             * top value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'top', 'middle', or 'bottom'.
             * If the left value is set to be 'top', 'middle', or 'bottom',
             * then the component will be aligned automatically based on position.
             *
             * @default '5%'
             */
            top?: string | number | undefined;
            /**
             * Distance between grid component and the right side of the container.
             * right value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             *
             * @default '5%'
             */
            right?: string | number | undefined;
            /**
             * Distance between grid component and the bottom side of the container.
             * bottom value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             *
             * @default '5%'
             */
            bottom?: string | number | undefined;
            /**
             * Width of grid component. Adaptive by default.
             *
             * @default 'auto'
             */
            width?: string | number | undefined;
            /**
             * Height of grid component. Adaptive by default.
             *
             * @default 'auto'
             */
            height?: string | number | undefined;
        }
    }
}
