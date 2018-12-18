import * as React from "react";
import * as Highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";

const config: Highcharts.Options = {};

function callback(chart: Highcharts.ChartObject): void {}

export const _ = () => (
    <>
        <ReactHighcharts config={config} />
        <ReactHighcharts config={config} callback={callback} />
    </>
);
