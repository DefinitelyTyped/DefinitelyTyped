// Type definitions for react-highcharts 16.0
// Project: https://github.com/kirjs/react-highcharts
// Definitions by: Jiri Marsicek <https://github.com/j1r1k>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
     *
     * @param after-render callback.
     */
    callback?(chart: Highcharts.ChartObject): void;

    /**
     * Chart will not rerender if the config is referentially equal to previous and this property is true
     */
    isPureConfig?: boolean;
}

/**
 * React interface for highcharts.
 */
declare class ReactHighcharts extends React.Component<ReactHighchartsProps> {
    static Highcharts: Highcharts.Static;
}

export default ReactHighcharts;
