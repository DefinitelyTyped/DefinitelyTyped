/// <reference path="highcharts-modules-no-data-to-display.d.ts" />
/// <reference path="highcharts.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

function test_NoDataToDisplay() {
    var chart = $("#container").highcharts();
    var chartHasData = chart.hasData();
    chart.hideNoData();
    chart.showNoData("Custom no data message");
}
