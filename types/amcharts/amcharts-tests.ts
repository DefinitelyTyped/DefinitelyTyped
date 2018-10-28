import { AmCharts } from "amcharts";

const theme = AmCharts.themes.light;

// Global namespace settings.
AmCharts.useUTC = false;
AmCharts.theme = theme;

// "JSON"-style API.
const chart = AmCharts.makeChart("chartdiv", {
    type: "gauge",
    arrows: [
        {
            value: 130
        }
    ],
    titles: [
        {
            text: "Speedometer",
            size: 15
        }
    ],
    axes: [
        {
            bottomText: "0 km/h",
            endValue: 220,
            valueInterval: 10,
            bands: [
                {
                    color: "#00CC00",
                    endValue: 90,
                    startValue: 0
                },
                {
                    color: "#ffac29",
                    endValue: 130,
                    startValue: 90
                },
                {
                    color: "#ea3838",
                    endValue: 220,
                    startValue: 130,
                    innerRadius: "95%"
                }
            ]
        }
    ]
});

// Object based API.
const amAngularGauge = new AmCharts.AmAngularGauge(theme);
const amBalloon = new AmCharts.AmBalloon();
const amChart = new AmCharts.AmChart(theme);
const amCoordinateChart = new AmCharts.AmCoordinateChart(theme);
const amGraph = new AmCharts.AmGraph();
const amLegend = new AmCharts.AmLegend();
const amPieChart = new AmCharts.AmPieChart(theme);
const amRadarChart = new AmCharts.AmRadarChart(theme);
const amRectangularChart = new AmCharts.AmRectangularChart(theme);
const amSerialChart = new AmCharts.AmSerialChart(theme);
const amXYChart = new AmCharts.AmXYChart(theme);
const axisBase = new AmCharts.AxisBase();
const categoryBase = new AmCharts.CategoryAxis();
const chartCursor = new AmCharts.ChartCursor();
const chartScrollbar = new AmCharts.ChartScrollbar();
const gaugeArrow = new AmCharts.GaugeArrow();
const gaugeAxis = new AmCharts.GaugeAxis();
const gaugeBand = new AmCharts.GaugeBand();
const graphDataItem = new AmCharts.GraphDataItem();
const guid = new AmCharts.Guide();
const label = new AmCharts.Label();
const serialDateItem = new AmCharts.SerialDataItem();
const slice = new AmCharts.Slice();
const title = new AmCharts.Title();
const trendLine = new AmCharts.TrendLine();
const valueAxis = new AmCharts.ValueAxis();
