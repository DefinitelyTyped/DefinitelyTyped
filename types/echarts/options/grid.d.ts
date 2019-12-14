declare namespace echarts {
    namespace EChartOption {
        /**
         * Drawing grid in rectangular coordinate.
         * In a single grid, at most two X and Y axes each is allowed.
         * Line chart, bar chart, and scatter chart (bubble chart) can be drawn in grid.
         *
         * @see https://echarts.apache.org/en/option.html#grid
         */
        interface Grid {
            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option or API.
             */
            id?: string;
            /**
             * Whether to show the grid in rectangular coordinate.
             *
             * @default false
             */
            show?: boolean;
            /**
             * zlevel value of all graphical elements in.
             * zlevel is used to make layers with Canvas.
             * Graphical elements with different zlevel values will be placed in different Canvases,
             * which is a common optimization technique.
             * We can put those frequently changed elements (like those with animations) to a seperate zlevel.
             * Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.
             * Canvases with bigger zlevel will be placed on Canvases with smaller zlevel.
             *
             * @default 0
             */
            zlevel?: number;
            /**
             * z value of all graphical elements in , which controls order of drawing graphical components.
             * Components with smaller z values may be overwritten by those with larger z values.
             * z has a lower priority to zlevel, and will not create new Canvas.
             *
             * @default 2
             */
            z?: number;
            /**
             * Distance between grid component and the left side of the container.
             * left value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'left', 'center', or 'right'.
             * If the left value is set to be 'left', 'center', or 'right',
             * then the component will be aligned automatically based on position.
             *
             * @default '10%'
             */
            left?: number | string;
            /**
             * Distance between grid component and the top side of the container.
             * top value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%';
             * and it can also be 'top', 'middle', or 'bottom'.
             *
             * @default 60
             */
            top?: number | string;
            /**
             * Distance between grid component and the right side of the container.
             * right value can be instant pixel value like 20;
             * it can also be percentage value relative to container width like '20%'.
             *
             * @default '10%'
             */
            right?: number | string;
            /**
             * Distance between grid component and the bottom side of the container.
             * bottom value can be instant pixel value like 20; it can also be percentage value relative to container width like '20%'.
             *
             * @default 60
             */
            bottom?: number | string;
            /**
             * Width of grid component. Adaptive by default.
             *
             * @default 'auto'
             */
            width?: number | string;
            /**
             * Height of grid component. Adaptive by default.
             *
             * @default 'auto'
             */
            height?: number | string;
            /**
             * Whether the grid region contains axis tick label of axis.
             * When containLabel is false:
             * grid.left grid.right grid.top grid.bottom grid.width grid.height decide the location
             * and size of the rectangle that is made of by xAxis and yAxis.
             * Setting to false will help when multiple grids need to be aligned at their axes.
             * When containLabel is true:
             * grid.left grid.right grid.top grid.bottom grid.width grid.height decide the location
             * and size of the rectangle that contains the axes and the labels of the axes.
             * Setting to true will help when the length of axis labels is dynamic and is hard to approximate.
             * This will avoid labels from overflowing the container or overlapping other components.
             *
             * @default false
             */
            containLabel?: boolean;
            /**
             * Background color of grid, which is transparent by default.
             * Attention: Works only if show: true is set.
             *
             * @default 'transparent'
             */
            backgroundColor?: string;
            /**
             * Border color of grid. Support the same color format as backgroundColor.
             * Attention: Works only if show: true is set.
             *
             * @default '#ccc'
             */
            borderColor?: string;
            /**
             * Border width of grid.
             * Attention: Works only if show: true is set.
             *
             * @default 1
             */
            borderWidth?: number;
            /**
             * Size of shadow blur. This attribute should be used along with
             * shadowColor,shadowOffsetX, shadowOffsetY to set shadow to component.
             * Attention:
             * This property works only if show: true is configured and
             * backgroundColor is defined other than transparent.
             */
            shadowBlur?: number;
            /**
             * Shadow color. Support same format as color.
             * Attention: This property works only if show: true configured.
             */
            shadowColor?: string;
            /**
             * Offset distance on the horizontal direction of shadow.
             * Attention: This property works only if show: true configured.
             *
             * @default 0
             */
            shadowOffsetX?: number;
            /**
             * Offset distance on the vertical direction of shadow.
             * Attention: This property works only if show: true configured.
             *
             * @default 0
             */
            shadowOffsetY?: number;
            /**
             * tooltip settings in the coordinate system component.
             * @see https://echarts.apache.org/en/option.html#grid.tooltip
             */
            tooltip?: Tooltip;
        }
    }
}
