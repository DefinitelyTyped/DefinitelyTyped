import * as Highcharts from "highcharts";
import * as React from "react";

/**
 * Props for ReactHighcharts component.
 */
interface ReactHighchartsProps {
    /**
     * Highcharts configuration options.
     */
    config: Highcharts.Options;
    /**
     * @param after-render callback.
     */
    callback?(chart: Highcharts.ChartObject): void;

    /**
     * Chart will not rerender if the config is referentially equal to previous and this property is true
     */
    isPureConfig?: boolean | undefined;
}

/**
 * React interface for highcharts.
 */
declare class ReactHighcharts extends React.Component<ReactHighchartsProps> {
    static Highcharts: Highcharts.Static;
}

export default ReactHighcharts;
