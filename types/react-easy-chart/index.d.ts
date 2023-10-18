/// <reference types="react" />

declare module "react-easy-chart" {
    interface BarData {
        x: number | Date | string;
        y: number;
        color?: string | undefined;
    }
    interface BarChartProps {
        /** Whether to show axis labels */
        axes?: boolean | undefined;

        /** Labels for each of the axis */
        axisLabels?: { x?: string | undefined; y?: string | undefined; y2?: string | undefined } | undefined;

        /** The width of an individual bar in pixels */
        barWidth?: number | undefined;

        clickHandler?: ((data: BarData, mouseEvent: MouseEvent) => any) | undefined;

        /** Whether to automatically color the bars */
        colorBars?: boolean | undefined;

        data: Array<BarData>;

        /** A d3 time formatting pattern to be applied to format the x axis values */
        datePattern?: string | undefined;

        /** Whether to show horizontal grid lines on the chart */
        grid?: boolean | undefined;

        /** Height of the chart in pixels */
        height?: number | undefined;

        /** Interpolation method if you add a line to this chart (via lineData) */
        interpolate?: string | undefined;

        lineData?: Array<LineData> | undefined;

        /** css margins */
        margin?: {
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
        } | undefined;

        mouseMoveHandler?: ((data: BarData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOutHandler?: ((data: BarData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOverHandler?: ((data: BarData, mouseEvent: MouseEvent) => any) | undefined;

        /** The d3 time format to be used for the x axis (when xType is 'time') */
        tickTimeDisplayFormat?: string | undefined;

        /** Width of the chart in pixels */
        width?: number | undefined;

        /** The range that the x axis should show (otherwise automatically calculated) */
        xDomainRange?: Array<number> | Array<Date> | Array<string> | undefined;

        /** The amount of ticks to be shown on the x axis */
        xTickNumber?: number | undefined;

        /** What data type the x axis is */
        xType?: "time" | "text" | "linear" | undefined;

        /** What data type the second y axis is */
        y2Type?: "time" | "text" | "linear" | undefined;

        /** Whether to show the axis on the right (default false: left) */
        yAxisOrientRight?: boolean | undefined;

        /** The range that the y axis should show (otherwise automatically calculated) */
        yDomainRange?: Array<number> | undefined;

        /** The amount of ticks to be shown on the y axis */
        yTickNumber?: number | undefined;
    }
    class BarChart extends React.Component<BarChartProps> {
    }

    interface PieData {
        key: string;
        value: number;
        color?: string | undefined;
    }
    interface PieChartProps {
        clickHandler?: ((data: PieData, mouseEvent: MouseEvent) => any) | undefined;

        data: Array<{ key: string; value: number; color?: string | undefined }>;

        /** Size in pixels of the inner hole (diameter) */
        innerHoleSize?: number | undefined;

        /** Whether to add labels the to pie segments */
        labels?: boolean | undefined;

        mouseMoveHandler?: ((data: PieData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOutHandler?: ((data: PieData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOverHandler?: ((data: PieData, mouseEvent: MouseEvent) => any) | undefined;

        /** Padding around the chart in pixels */
        padding?: number | undefined;

        /** Size in pixels in each dimension */
        size?: number | undefined;

        styles?: { [cssSelector: string]: React.CSSProperties } | undefined;
    }
    class PieChart extends React.Component<PieChartProps> {
    }

    interface LineData {
        x: number | Date | string;
        y: number | Date | string;
    }
    interface LineChartProps {
        /** Whether to show axis labels */
        axes?: boolean | undefined;

        /** Labels for each of the axis */
        axisLabels?: { x?: string | undefined; y?: string | undefined } | undefined;

        clickHandler?: ((data: LineData, mouseEvent: MouseEvent) => any) | undefined;

        data: Array<Array<LineData>>;

        /** Whether to show circles on the data points */
        dataPoints?: boolean | undefined;

        /** Whether to show horizontal grid lines on the chart */
        grid?: boolean | undefined;

        /** Height of the chart in pixels */
        height?: number | undefined;

        /** Smoothing option for the lines */
        interpolate?:
            | "linear"
            | "linear-closed"
            | "step"
            | "step-before"
            | "step-after"
            | "basis"
            | "basis-open"
            | "basis-closed"
            | "bundle"
            | "cardinal"
            | "cardinal-open"
            | "cardinal-closed"
            | "monotone"
            | undefined;

        lineColors?: Array<string> | undefined;

        /** css margins */
        margin?: {
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
        } | undefined;

        mouseMoveHandler?: ((data: LineData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOutHandler?: ((data: LineData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOverHandler?: ((data: LineData, mouseEvent: MouseEvent) => any) | undefined;

        /** The d3 time format to be used for the x axis (when xType is 'time') */
        tickTimeDisplayFormat?: string | undefined;

        /** Whether to show vertical grid lines on the chart */
        verticalGrid?: boolean | undefined;

        /** Width of the chart in pixels */
        width?: number | undefined;

        /** The range that the x axis should show (otherwise automatically calculated) */
        xDomainRange?: Array<number> | Array<Date> | Array<string> | undefined;

        /** The amount of ticks to be shown on the x axis */
        xTicks?: number | undefined;

        /** What data type the x axis is */
        xType?: "time" | "text" | "linear" | undefined;

        /** Whether to show the axis on the right (default false: left) */
        yAxisOrientRight?: boolean | undefined;

        /** The range that the y axis should show (otherwise automatically calculated) */
        yDomainRange?: Array<number> | Array<string> | undefined;

        /** The amount of ticks to be shown on the y axis */
        yTicks?: number | undefined;

        /** What data type the x axis is */
        yType?: "time" | "text" | "linear" | undefined;
    }
    class LineChart extends React.Component<LineChartProps> {
    }

    interface AreaChartProps extends LineChartProps {
        /** Make the gradient area a solid fill rather than a gradient */
        noAreaGradient?: boolean | undefined;
    }
    class AreaChart extends React.Component<AreaChartProps> {
    }

    interface ScatterplotData {
        type: string | number;
        x: number | Date | string;
        y: number | Date | string;
        z?: number | undefined;
    }
    interface ScatterplotChartProps {
        /** Whether to show axis labels */
        axes?: boolean | undefined;

        /** Labels for each of the axis */
        axisLabels?: { x?: string | undefined; y?: string | undefined } | undefined;

        clickHandler?: ((data: ScatterplotData, mouseEvent: MouseEvent) => any) | undefined;

        /** Allows styling of individual types of points */
        config?: Array<{ type: string; color: string; stroke: string }> | undefined;

        data: Array<ScatterplotData>;

        /** Radius of the dots on the chart */
        dotRadius?: number | undefined;

        /** Whether to show horizontal grid lines on the chart */
        grid?: boolean | undefined;

        /** Height of the chart in pixels */
        height?: number | undefined;

        /** css margins */
        margin?: {
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
        } | undefined;

        mouseMoveHandler?: ((data: ScatterplotData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOutHandler?: ((data: ScatterplotData, mouseEvent: MouseEvent) => any) | undefined;

        mouseOverHandler?: ((data: ScatterplotData, mouseEvent: MouseEvent) => any) | undefined;

        /** Whether to show vertical grid lines on the chart */
        verticalGrid?: boolean | undefined;

        /** Width of the chart in pixels */
        width?: number | undefined;

        /** The range that the x axis should show (otherwise automatically calculated) */
        xDomainRange?: Array<number> | Array<Date> | Array<string> | undefined;

        /** What data type the x axis is */
        xType?: "time" | "text" | "linear" | undefined;

        /** Whether to show the axis on the right (default false: left) */
        yAxisOrientRight?: boolean | undefined;

        /** The range that the y axis should show (otherwise automatically calculated) */
        yDomainRange?: Array<number> | Array<Date> | Array<string> | undefined;

        /** What data type the x axis is */
        yType?: "time" | "text" | "linear" | undefined;
    }
    class ScatterplotChart extends React.Component<ScatterplotChartProps> {
    }

    interface LegendProps {
        /** Override the color of the items */
        config?: Array<{ color: string }> | undefined;

        data: Array<any>;

        dataId: string;

        /** change list items to inline-block (default block) */
        horizontal?: boolean | undefined;

        /** Override the css styles of individual components, see http://rma-consulting.github.io/react-easy-chart/legend/index.html */
        styles?: { [cssSelector: string]: React.CSSProperties } | undefined;
    }
    class Legend extends React.Component<LegendProps> {
    }
}
