/// <reference types="jquery" />

var cal = new CalHeatMap();
cal.init();
cal.init({});

cal.init({ itemSelector: "div" });
cal.init({ itemSelector: "#id" });
cal.init({ itemSelector: ".class" });
cal.init({ itemSelector: "[title=hi]" });
cal.init({ itemSelector: "div > span + b" });

cal.init({ itemSelector: document.getElementById("myId") });
cal.init({ itemSelector: document.getElementsByClassName(".class")[0] });
cal.init({ itemSelector: document.querySelector(".class") });
cal.init({ itemSelector: $(".class")[0] });
cal.init({ itemSelector: d3.select(".class")[0][0] });

cal.init({
    itemSelector: "#domain-a",
    domain: "month",
    subDomain: "day",
    cellSize: 20,
    subDomainTextFormat: "%d",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#domain-b",
    domain: "month",
    subDomain: "x_day",
    cellSize: 20, subDomainTextFormat: "%d",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#cellSize-a",
    domain: "day",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#cellSize-b",
    domain: "day",
    range: 1,
    cellSize: 15,
    displayLegend: false
});

cal.init({
    itemSelector: "#cellPadding-a",
    domain: "day",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#cellPadding-b",
    domain: "day",
    range: 1,
    cellPadding: 5,
    displayLegend: false
});

cal.init({
    itemSelector: "#cellRadius-a",
    cellSize: 15,
    domain: "day",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#cellRadius-b",
    cellSize: 15,
    domain: "day",
    range: 1,
    cellRadius: 10,
    displayLegend: false
});

cal.init({
    itemSelector: "#domainGutter-a",
    domain: "day",
    range: 2,
    displayLegend: false
});

cal.init({
    itemSelector: "#domainGutter-b",
    domain: "day",
    range: 2,
    domainGutter: 10,
    displayLegend: false
});

cal.init({
    itemSelector: "#domainMargin-a",
    domain: "day",
    range: 2,
    displayLegend: false
});

cal.init({
    itemSelector: "#domainMargin-b",
    domain: "day",
    range: 2,
    displayLegend: false,
    domainMargin: 10
});

cal.init({
    itemSelector: "#domainDynamicDimension-a",
    domain: "month",
    range: 5,
    cellSize: 8,
    displayLegend: false,
    nextSelector: "#domainDynamicDimension-next",
    previousSelector: "#domainDynamicDimension-previous"
});

cal.init({
    itemSelector: "#domainDynamicDimension-b",
    domain: "month",
    range: 5,
    cellSize: 8,
    displayLegend: false,
    domainDynamicDimension: false,
    nextSelector: "#domainDynamicDimension-next",
    previousSelector: "#domainDynamicDimension-previous",
    itemNamespace: "domainDynamicDimension"
});

cal.init({
    itemSelector: "#verticalOrientation-a",
    domain: "day",
    range: 2,
    displayLegend: false
});

cal.init({
    itemSelector: "#verticalOrientation-b",
    domain: "day",
    range: 2,
    displayLegend: false,
    verticalOrientation: true
});

cal.init({
    itemSelector: "#label-a",
    domain: "day",
    range: 2,
    displayLegend: false
});

cal.init({
    itemSelector: "#label-b",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "top"
    }
});

cal.init({
    itemSelector: "#label-c",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "left",
        width: 46
    }
});

cal.init({
    itemSelector: "#label-d",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "right",
        width: 46,
        offset: { x: 10, y: 30 }
    }
});

cal.init({
    itemSelector: "#label-e",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "left",
        width: 46,
        rotate: "left"
    }
});

cal.init({
    itemSelector: "#label-f",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "right",
        width: 150,
        rotate: "left"
    }
});

cal.init({
    itemSelector: "#label-g",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "right",
        width: 46,
        rotate: "left"
    }
});

cal.init({
    itemSelector: "#label-h",
    domain: "day",
    range: 2,
    displayLegend: false,
    label: {
        position: "right",
        width: 46,
        rotate: "right",
        align: "right"
    }
});

cal.init({
    itemSelector: "#colLimit-a",
    domain: "day",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#colLimit-b",
    domain: "day",
    colLimit: 24,
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#rowLimit-a",
    domain: "month",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#rowLimit-b",
    domain: "month",
    rowLimit: 10,
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#tooltip-a",
    domain: "month",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#tooltip-b",
    domain: "month",
    range: 1,
    displayLegend: false,
    tooltip: true
});

cal.init({
    itemSelector: "#start-a",
    domain: "day",
    range: 2,
    displayLegend: false
});

cal.init({
    itemSelector: "#start-b",
    domain: "day",
    range: 2,
    start: new Date(2000, 0, 15),
    displayLegend: false
});

cal.init({
    start: new Date(2000, 0), // January, 1st 2000
    range: 12,
    domain: "year",
    subDomain: "month",
    data: "http://localhost/api?start={{d:start}}&stop={{d:end}}"
});

cal.init({
    data: "http://localhost/datas.csv",
    dataType: "csv"
});

var dt = new Date();
dt.setDate(dt.getDate() + 1);
cal.init({
    itemSelector: "#highlight-a",
    domain: "day",
    range: 2,
    displayLegend: false,
    highlight: ["now", dt]
});

cal.init({
    itemSelector: "#weekStartOnMonday-a",
    domain: "month",
    subDomain: "x_day",
    cellSize: 20,
    subDomainTextFormat: "%d",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#weekStartOnMonday-b",
    domain: "month",
    subDomain: "x_day",
    cellSize: 20,
    subDomainTextFormat: "%d",
    range: 1,
    weekStartOnMonday: false,
    displayLegend: false
});

cal.init({
    itemSelector: "#minDate-a",
    domain: "month",
    start: new Date(2000, 4),
    minDate: new Date(2000, 1),
    maxDate: new Date(2000, 8),
    subDomain: "day",
    range: 4,
    displayLegend: false
});

cal.init({
    itemSelector: "#legend-a",
    domain: "day",
    range: 2
});

cal.init({
    itemSelector: "#legend-b",
    domain: "day",
    range: 2, legend: [-2.5, 0, 2.5]
});

cal.init({
    itemSelector: "#displayLegend-a",
    domain: "day",
    range: 2
});

cal.init({
    itemSelector: "#displayLegend-b",
    domain: "day",
    range: 2,
    displayLegend: false
});

cal.init({
    itemSelector: "#legendCellSize-a",
    domain: "day",
    range: 2
});

cal.init({
    itemSelector: "#legendCellSize-b",
    domain: "day",
    range: 2, legendCellSize: 5
});

cal.init({
    itemSelector: "#legendCellPadding-a",
    domain: "day",
    range: 3
});

cal.init({
    itemSelector: "#legendCellPadding-b",
    domain: "day",
    range: 3, legendCellPadding: 5
});

cal.init({
    itemSelector: "#legendMargin-a",
    domain: "day",
    range: 3
});

cal.init({
    itemSelector: "#legendMargin-b",
    domain: "day",
    range: 3,
    legendMargin: [50, 0, 0, 50]
});

cal.init({
    itemSelector: "#legendVerticalPosition-a",
    domain: "day",
    range: 2
});

cal.init({
    itemSelector: "#legendVerticalPosition-b",
    domain: "day",
    range: 2,
    legendVerticalPosition: "top",
    legendMargin: [0, 0, 10, 0]
});

cal.init({
    itemSelector: "#legendVerticalPosition-c",
    domain: "day",
    range: 2,
    legendVerticalPosition: "center",
    legendMargin: [0, 10, 0, 0]
});

cal.init({
    itemSelector: "#legendVerticalPosition-d",
    domain: "day",
    range: 2,
    legendVerticalPosition: "center",
    legendHorizontalPosition: "right",
    legendMargin: [0, 0, 0, 10]
});

cal.init({
    itemSelector: "#legendHorizontalPosition-a",
    domain: "day",
    range: 3
});

cal.init({
    itemSelector: "#legendHorizontalPosition-b",
    domain: "day",
    range: 3,
    legendHorizontalPosition: "right"
});

cal.init({
    itemSelector: "#legendOrientation-a",
    domain: "day",
    range: 3,
    legendVerticalPosition: "center",
    legendOrientation: "vertical",
    legendMargin: [0, 10, 0, 0]
});

cal.init({
    itemSelector: "#legendOrientation-b",
    domain: "month",
    subDomain: "x_day",
    range: 3,
    verticalOrientation: true,
    legendVerticalPosition: "center",
    legendHorizontalPosition: "right",
    legendOrientation: "vertical",
    legendMargin: [0, 0, 0, 20]
});

cal.init({
    legendColors: {
        min: "#efefef",
        max: "steelblue",
        empty: "white"
        // Will use the CSS for the missing keys
    }
});

cal.init({
    legendColors: ["#efefef", "steelblue"]
});

cal.init({
    itemName: ["cat", "cats"]
});
cal.init({
    itemName: "cat"
});
cal.init({
    itemName: ["cat"]
});

cal.init({
    subDomainDateFormat: function(date: Date): string
    {
        return date.toString();
    }
});

cal.init({
    itemSelector: "#subDomainTextFormat-a",
    start: new Date(2000, 0, 1, 1),
    domain: "month",
    subDomain: "x_day",
    cellSize: 20,
    range: 1,
    displayLegend: false,
    subDomainTextFormat: "%d"
});

cal.init({
    itemSelector: "#subDomainTextFormat-b",
    start: new Date(2000, 0, 1, 1),
    data: "datas-years.json",
    domain: "month",
    subDomain: "x_day",
    cellSize: 20,
    range: 1,
    displayLegend: false,
    subDomainTextFormat: function(date: Date, value: number): number
    {
        return value;
    }
});

cal.init({
    itemSelector: "#domainLabelFormat-a",
    domain: "month",
    subDomain: "day",
    range: 1,
    displayLegend: false
});

cal.init({
    itemSelector: "#domainLabelFormat-b",
    domain: "month",
    subDomain: "day",
    range: 1,
    displayLegend: false,
    domainLabelFormat: "%m-%Y"
});

cal.init({
    itemSelector: "#legendTitleFormat-a",
    domain: "day",
    range: 3
});

cal.init({
    itemSelector: "#animationDuration-a",
    domain: "day",
    range: 4,
    previousSelector: "#animationDuration-previous",
    nextSelector: "#animationDuration-next",
    itemNamespace: "animationDuration-a"
});

cal.init({
    itemSelector: "#animationDuration-b",
    domain: "day",
    range: 4, animationDuration: 1500,
    previousSelector: "#animationDuration-previous",
    nextSelector: "#animationDuration-next",
    itemNamespace: "animationDuration-b"
});

cal.init({
    itemSelector: "#previousSelector-a",
    domain: "day",
    range: 4,
    previousSelector: "#previousSelector-a-previous",
    nextSelector: "#previousSelector-a-next"
});

cal.init({
    itemSelector: "#previousSelector-b",
    domain: "day",
    range: 4,
    previousSelector: "#example-previousSelector  ul + p > em",
    nextSelector: "#example-previousSelector [title=next] li"
});

cal.init({
    nextSelector: "#next" // Attach #next onClick event to cal.next()
});

cal.init({
    nextSelector: "#next",
    // Attach #next.cal onClick event to cal.next()
    itemNamespace: "cal"
});


cal.previous();
cal.previous(5);

cal.next();
cal.next(5);

cal.jumpTo(new Date(2000, 4));
cal.jumpTo(new Date(2000, 4), true);

cal.rewind();

var randomData = {};
cal.update(randomData);
cal.update(randomData, () => { }, cal.RESET_ALL_ON_UPDATE);
cal.update(randomData, false, cal.APPEND_ON_UPDATE);
cal.update(randomData, false, cal.RESET_SINGLE_ON_UPDATE);

cal.highlight(new Date(2000, 0, 2));

// Add January 5th to already highlighted dates
cal.options.highlight.push(new Date(2000, 0, 5));
cal.highlight(cal.options.highlight);

var svg: string = cal.getSVG();


cal.options.legendVerticalPosition = "center";
cal.options.legendHorizontalPosition = "right";
cal.options.legendOrientation = "vertical";


cal.setLegend();

cal.removeLegend();

cal.showLegend();

cal = cal.destroy();


cal.init({
    itemSelector: "#onClick-a",
    domain: "day",
    range: 5, data: "datas-years.json",
    start: new Date(2000, 0),
    onClick: function(date: Date, nb: number)
    {
        $("#onClick-placeholder").html("You just clicked <br/>on <b>" +
            date + "</b> <br/>with <b>" +
            (nb === null ? "unknown" : nb) + "</b> items"
        );
    }
});

cal.init({
    itemSelector: "#afterLoad-a",
    domain: "day",
    range: 5,
    afterLoad: function() { },
    onComplete: function() { }
});

cal.init({
    itemSelector: "#afterLoadPreviousDomain-a",
    domain: "day",
    range: 5, afterLoadPreviousDomain: function(date: Date) { },
    previousSelector: "#afterLoadPreviousDomain-selector"
});

cal.init({
    itemSelector: "#afterLoadNextDomain-a",
    domain: "day",
    range: 5, afterLoadNextDomain: function(date: Date) { },
    nextSelector: "#afterLoadNextDomain-selector"
});

cal.init({
    itemSelector: "#onComplete-a",
    domain: "day",
    range: 5,
    onComplete: function() { }
});

var datas = [
    { date: 946702811, value: 15 },
    { date: 946702812, value: 25 },
    { date: 946702813, value: 10 }
]

cal.init({
    data: datas,
    afterLoadData: (data: any) =>
    {
        var stats: CalHeatMap.DataFormat = {};
        for (var d in data)
        {
            stats[data[d].date] = data[d].value;
        }
        return stats;
    }
});

cal.init({
    itemSelector: "#onMinDomainReached-a",
    domain: "month",
    range: 5,
    start: new Date(2000, 4),
    minDate: new Date(2000, 3),
    maxDate: new Date(2000, 11),
    onMinDomainReached: function(hit: boolean) { },
    onMaxDomainReached: function(hit: boolean) { },
    nextSelector: "#onMinDomainReached-next",
    previousSelector: "#onMinDomainReached-previous",
    displayLegend: false
});
