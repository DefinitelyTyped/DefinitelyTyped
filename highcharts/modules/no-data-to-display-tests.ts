function test_NoDataToDisplay() {
    var chart = $("#container").highcharts();
    var chartHasData = chart.hasData();
    chart.hideNoData();
    chart.showNoData("Custom no data message");
}
