import * as Highcharts from "highcharts";
import * as React from "react";

declare namespace ReactHighcharts {
    /**
     * Props for ReactHighcharts component.
     */
    interface ReactHighchartsProps {
        /**
         * Highcharts configuration options.
         */
        config: Highcharts.Options;

        /**
         * Chart will not rerender if the config is referentially equal to previous and this property is true
         */
        isPureConfig?: boolean | undefined;

        neverReflow?: boolean | undefined;

        /**
         * after-render callback.
         */
        callback?: ((chart: Highcharts.ChartObject) => void) | undefined;

        /**
         * Passing properties to the wrapping DOM element
         */
        domProps?: Partial<React.JSX.IntrinsicElements["div"]> | undefined;
    }

    function withHighcharts(Highcharts: Highcharts.Static): typeof ReactHighcharts;
}

/**
 * React interface for highcharts.
 */
declare class ReactHighcharts extends React.Component<ReactHighcharts.ReactHighchartsProps> {
    static chartType: string;
    static Highcharts: Highcharts.Static;
    static displayName: string;
}

export = ReactHighcharts;
