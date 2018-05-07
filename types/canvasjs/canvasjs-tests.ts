import * as CanvasJS from "canvasjs";

// Column Chart
const columnChart = new CanvasJS.Chart("chartContainer",
    {
        title: {
            text: "Top Oil Reserves",
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        theme: "theme2",
        data: [
            {
                type: "column",
                lineDashType: "longDash",
                showInLegend: true,
                legendMarkerColor: "grey",
                legendText: "MMbbl = one million barrels",
                dataPoints: [
                    { y: 297571, label: "Venezuela" },
                    { y: 267017, label: "Saudi" },
                    { y: 175200, label: "Canada" },
                    { y: 154580, label: "Iran" },
                    { y: 116000, label: "Russia" },
                    { y: 97800, label: "UAE" },
                    { y: 20682, label: "US" },
                    { y: 20350, label: "China" }
                ]
            }
        ]
    });
columnChart.render();
const option = columnChart.get("title");
columnChart.print();
columnChart.exportChart({ format: "jpg" });
columnChart.destroy();
columnChart.axisX[0].convertPixelToValue(20);
columnChart.toolTip.get("text");

// Line Chart
const lineChart = new CanvasJS.Chart("chartContainer",
    {
        theme: "theme2",
        title: {
            text: "Earthquakes - per month"
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"
        },
        axisY: {
            includeZero: false
        },
        data: [
            {
                type: "line",
                // lineThickness: 3,
                dataPoints: [
                    { x: new Date(2012, 0, 1), y: 450 },
                    { x: new Date(2012, 1, 1), y: 414 },
                    { x: new Date(2012, 2, 1), y: 520, indexLabel: "highest", markerColor: "red", markerType: "triangle" },
                    { x: new Date(2012, 3, 1), y: 460 },
                    { x: new Date(2012, 4, 1), y: 450 },
                    { x: new Date(2012, 5, 1), y: 500 },
                    { x: new Date(2012, 6, 1), y: 480 },
                    { x: new Date(2012, 7, 1), y: 480 },
                    { x: new Date(2012, 8, 1), y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
                    { x: new Date(2012, 9, 1), y: 500 },
                    { x: new Date(2012, 10, 1), y: 480 },
                    { x: new Date(2012, 11, 1), y: 510 }
                ]
            }
        ]
    });
lineChart.render();

// Spline Chart
const splineChart = new CanvasJS.Chart("chartContainer",
    {
        theme: "theme2",
        title: {
            text: "Game of Thrones, Viewers of the first airing on HBO"
        },
        axisY: {
            includeZero: false,
            // suffix: " k",
            valueFormatString: "#,,.",
            suffix: " mn"
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                type: "spline",
                showInLegend: true,
                name: "Season 2",
                // markerSize: 0,
                // color: "rgba(54,158,173,.6)",
                dataPoints: [
                    { label: "Ep. 1", y: 3858000 },
                    { label: "Ep. 2", y: 3759000 },
                    { label: "Ep. 3", y: 3766000 },
                    { label: "Ep. 4", y: 3654000 },
                    { label: "Ep. 5", y: 3903000 },
                    { label: "Ep. 6", y: 3879000 },
                    { label: "Ep. 7", y: 3694000 },
                    { label: "Ep. 8", y: 3864000 },
                    { label: "Ep. 9", y: 3384000 },
                    { label: "Ep. 10", y: 4200000 }
                ]
            },
            {
                type: "spline",
                showInLegend: true,
                // markerSize: 0,
                name: "Season 1",
                dataPoints: [
                    { label: "Ep. 1", y: 2220000 },
                    { label: "Ep. 2", y: 2200000 },
                    { label: "Ep. 3", y: 2440000 },
                    { label: "Ep. 4", y: 2450000 },
                    { label: "Ep. 5", y: 2580000 },
                    { label: "Ep. 6", y: 2440000 },
                    { label: "Ep. 7", y: 2400000 },
                    { label: "Ep. 8", y: 2720000 },
                    { label: "Ep. 9", y: 2660000 },
                    { label: "Ep. 10", y: 3040000 }
                ]
            }
        ],
        legend: {
            cursor: "pointer",
            itemclick: (e) => {
                e.dataSeries.visible = !(typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible);
                splineChart.render();
            }
        },
    });
splineChart.render();

// Bar Chart
const barChart = new CanvasJS.Chart("chartContainer", {
    title: {
        text: "Fortune Global 500 Companies by Country"
    },
    axisX: {
        interval: 1,
        gridThickness: 0,
        labelFontSize: 10,
        labelFontStyle: "normal",
        labelFontWeight: "normal",
        labelFontFamily: "Lucida Sans Unicode"
    },
    axisY: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)"
    },
    data: [
        {
            type: "bar",
            name: "companies",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                { y: 5, label: "Sweden" },
                { y: 6, label: "Taiwan" },
                { y: 7, label: "Russia" },
                { y: 8, label: "Spain" },
                { y: 8, label: "Brazil" },
                { y: 8, label: "India" },
                { y: 9, label: "Italy" },
                { y: 9, label: "Australia" },
                { y: 12, label: "Canada" },
                { y: 13, label: "South Korea" },
                { y: 13, label: "Netherlands" },
                { y: 15, label: "Switzerland" },
                { y: 28, label: "Britain" },
                { y: 32, label: "Germany" },
                { y: 32, label: "France" },
                { y: 68, label: "Japan" },
                { y: 73, label: "China" },
                { y: 132, label: "US" }
            ]
        }
    ]
});
barChart.render();

// Pie Chart
const pieChart = new CanvasJS.Chart("chartContainer",
    {
        title: {
            text: "Desktop Search Engine Market Share, Dec-2012"
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "left",
            fontSize: 20,
            fontFamily: "Helvetica"
        },
        theme: "theme2",
        data: [
            {
                type: "pie",
                indexLabelFontFamily: "Garamond",
                indexLabelFontSize: 20,
                indexLabel: "{label} {y}%",
                startAngle: -20,
                showInLegend: true,
                toolTipContent: "{legendText} {y}%",
                dataPoints: [
                    { y: 83.24, legendText: "Google", label: "Google" },
                    { y: 8.16, legendText: "Yahoo!", label: "Yahoo!" },
                    { y: 4.67, legendText: "Bing", label: "Bing" },
                    { y: 1.67, legendText: "Baidu", label: "Baidu" },
                    { y: 0.98, legendText: "Others", label: "Others" }
                ]
            }
        ]
    });
pieChart.render();

CanvasJS.addColorSet("MyColorSet", [
    "123456",
    "blue",
    "red",
    "orange"
]);

CanvasJS.addCultureInfo("js", {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
});

CanvasJS.formatNumber(20);

CanvasJS.formatDate(new Date());
