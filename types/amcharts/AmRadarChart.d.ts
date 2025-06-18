import AmCoordinateChart from "./AmCoordinateChart";

/**
 * AmRadarChart is the class you have to use for radar and polar chart types.
 * @example
 * let chart;
 * let chartData = [
 *    {country:"Czech Republic",litres:156.90},
 *    {country:"Ireland",litres:131.10},
 *    {country:"Germany",litres:115.80},
 *    {country:"Australia",litres:109.90},
 *    {country:"Austria",litres:108.30},
 *    {country:"UK",litres:99.00}
 * ];
 *
 * window.onload = function() {
 *    chart = new AmCharts.AmRadarChart();
 *    chart.dataProvider = chartData;
 *    chart.categoryField = "country";
 *    chart.startDuration = 2;
 *
 *    let valueAxis = new AmCharts.ValueAxis();
 *    valueAxis.axisAlpha = 0.15;
 *    valueAxis.minimum = 0;
 *    valueAxis.dashLength = 3;
 *    valueAxis.axisTitleOffset = 20;
 *    valueAxis.gridCount = 5;
 *    chart.addValueAxis(valueAxis);
 *
 *    let graph = new AmCharts.AmGraph();
 *    graph.valueField = "litres";
 *    graph.bullet = "round";
 *    graph.balloonText = "[[value]] litres of beer per year"
 *    chart.addGraph(graph);
 *
 *    chart.write("chartdiv");
 * };
 */
export default class AmRadarChart extends AmCoordinateChart {
    /**
     * Bottom margin of the chart.
     */
    marginBottom: number;
    /**
     * Left margin of the chart.
     */
    marginLeft: number;
    /**
     * Right margin of the chart.
     */
    marginRight: number;
    /**
     * Top margin of the chart.
     */
    marginTop: number;
    /**
     * Radius of a radar. 0.35
     */
    radius: any;
}
