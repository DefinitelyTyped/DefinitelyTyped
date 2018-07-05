function test_NoDataToDisplay() {
    const chart = $("#container").highcharts();
    const chartHasData = chart.hasData();
    chart.hideNoData();
    chart.showNoData("Custom no data message");
}

HighchartsNoDataToDisplay(Highcharts);
