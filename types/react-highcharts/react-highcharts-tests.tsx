import * as Highcharts from "highcharts";
import * as React from "react";
import ReactHighcharts from "react-highcharts";

// @ts-ignore - `props.config` is required
<ReactHighcharts />;

// With required props
<ReactHighcharts config={{}} />;

// With optional props
<ReactHighcharts
    config={{}}
    isPureConfig={true}
    neverReflow={true}
    callback={(chart) => {
        // $ExpectType ChartObject
        chart;
    }}
    domProps={{
        className: "div-classname",
    }}
/>;

// $ExpectType string
ReactHighcharts.chartType;

// $ExpectType Static
ReactHighcharts.Highcharts;

// $ExpectType string
ReactHighcharts.displayName;

// $ExpectType typeof ReactHighcharts
const AnotherReactHighcharts = ReactHighcharts.withHighcharts(ReactHighcharts.Highcharts);
<AnotherReactHighcharts config={{}} />;
