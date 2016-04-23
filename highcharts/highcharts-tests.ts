/// <reference path="highcharts.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

function originalTests() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    Highcharts.setOptions({
        lang: {
            months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
        }
    });


    var animate: HighchartsAnimation = {
        duration: 200,
        easing: "linear"
    };


    var gradient: HighchartsGradient = {
        linearGradient: {
            x1: 0,
            y1: 0,
            x2: 500,
            y2: 500
        },
        stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(200, 200, 255)']
        ]
    }

    var color = "#fcfcff";

    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: "container"
        },
        xAxis: {},
        series: [<HighchartsLineChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    chart1.addSeries<HighchartsBarChartSeriesOptions>({
        enableMouseTracking: true,
        data: [1, 2, 3, 4, 5]
    });

    console.log((<HighchartsLineChartSeriesOptions>chart1.series[0].options).dashStyle);

    var chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            width: 400,
            height: 400,
            spacingRight: 20
        },
        xAxis: [{
            type: 'logarithmic',
            min: 1,
            max: 1000,
            endOnTick: true,
            tickInterval: 1,
            minorTickInterval: 0.1,
            gridLineWidth: 1
        }],
        yAxis: [{
            type: 'logarithmic',
            min: 1,
            max: 1000,
            tickInterval: 1,
            minorTickInterval: 0.1,
            title: {
                text: null
            }
        }],
        legend: {
            enabled: false
        },
        series: [<HighchartsScatterChartSeriesOptions>{
            data: [
                [550, 870], [738, 362], [719, 711], [547, 665], [595, 197], [332, 144],
                [581, 555], [196, 862], [6, 837], [400, 924], [888, 148], [785, 730],
                [374, 358], [440, 69], [704, 318], [646, 506], [238, 662], [233, 56],
                [622, 572], [563, 903], [744, 672], [904, 646], [390, 325], [536, 491],
                [676, 186], [467, 145], [790, 114], [437, 793], [853, 243], [947, 196],
                [395, 728], [527, 148], [516, 675], [632, 562], [52, 552], [605, 580],
                [790, 865], [156, 87], [584, 290], [339, 921], [383, 633], [106, 373],
                [762, 863], [424, 149], [608, 959], [574, 711], [468, 664], [268, 77],
                [894, 850], [171, 102], [203, 565], [592, 549], [86, 486], [526, 244],
                [323, 575], [488, 842], [401, 618], [148, 43], [828, 314], [554, 711],
                [685, 868], [387, 435], [469, 828], [623, 506], [436, 184], [450, 156],
                [805, 517], [465, 997], [728, 802], [231, 438], [935, 438], [519, 856],
                [378, 579], [73, 765], [223, 219], [359, 317], [686, 742], [17, 790],
                [20, 35], [410, 644], [984, 325], [503, 882], [900, 187], [578, 968],
                [27, 718], [355, 704], [395, 332], [641, 548], [964, 374], [215, 472],
                [323, 66], [882, 542], [671, 327], [650, 193], [828, 632], [760, 929],
                [607, 335], [928, 826], [462, 598], [631, 411]
            ],
            type: 'scatter'
        }]
    });

    var div: HTMLDivElement;
    var r = new Highcharts.Renderer(div, 20, 30);
    var box = r.text("Hello", 10, 10).getBBox();

    var highChartSettings: HighchartsOptions = {
        chart: {
            width: 400,
            height: 400
        },
        xAxis: [{
        }],
        series: [<HighchartsPieChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };

    var container = $("#container").highcharts(highChartSettings, (chart) => {
        chart.series[0].setVisible(true, true);
    });

    var singleYAxisOptions: HighchartsOptions = {
        yAxis: {}
    };
    var multipleYAxisOptions: HighchartsOptions = {
        yAxis: [{}, {}]
    };

    var renderToIdChart = new Highcharts.Chart("container", {
        xAxis: {},
        series: [<HighchartsLineChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    var renderToElementChart = new Highcharts.Chart(div, {
        xAxis: {},
        series: [<HighchartsLineChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    var createWithFunction = Highcharts.chart({
        xAxis: {},
        series: [<HighchartsLineChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    var createWithFunctionRenderToId = Highcharts.chart("container", {
        xAxis: {},
        series: [<HighchartsLineChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    var createWithFunctionRenderToElement = Highcharts.chart(div, {
        xAxis: {},
        series: [<HighchartsLineChartSeriesOptions>{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });
}

function test_alldefaults() {
    var options: HighchartsOptions = {
        chart: {},
        credits: {},
        data: {},
        drilldown: {},
        exporting: {},
        labels: {},
        legend: {},
        loading: {},
        colors: [],
        navigation: {},
        noData: {},
        pane: {},
        plotOptions: {},
        series: [{}],
        subtitle: {},
        title: {},
        tooltip: {},
        xAxis: {},
        yAxis: {}
    };
}

function test_ChartOptions() {
    var emptyChartOptions: HighchartsChartOptions = {
        events: {},
        options3d: {},
        resetZoomButton: {}
    };

    var allValuesSet: HighchartsChartOptions = {
        alignTicks: false,
        animation: {
            duration: 500,
            easing: "linear"
        },
        backgroundColor: <HighchartsGradient> {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 1
            },
            stops: [[0]]
        },
        borderColor: "#000000",
        borderRadius: 20,
        borderWidth: 5,
        className: "class",
        defaultSeriesType: "deprecated",
        events: <HighchartsChartEvents> {
            addSeries: () => {},
            afterPrint: () => {},
            beforePrint: () => {},
            click: () => {},
            drilldown: () => {},
            drillup: () => {},
            load: () => {},
            redraw: () => {},
            selection: () => {}
        },
        height: 200,
        ignoreHiddenSeries: true,
        inverted: true,
        margin: [5, 5, 5, 5],
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        options3d: <HighchartsChartOptions3d> {
            alpha: 20,
            beta: 20,
            depth: 50,
            enabled: true,
            frame: {
                back: <HighchartsChartOptions3dFrame> {
                    color: "black",
                    size: 2
                },
                bottom: <HighchartsChartOptions3dFrame> {
                    color: "black",
                    size: 2
                },
                side: <HighchartsChartOptions3dFrame> {
                    color: "black",
                    size: 2
                }
            },
            viewDistance: 100
        },
        panKey: "a",
        panning: true,
        pinchType: "xy",
        plotBackgroundColor: "white",
        plotBackgroundImage: "http://image.url/image.jpg",
        plotBorderColor: "grey",
        plotBorderWidth: 5,
        plotShadow: <HighchartsShadow> {
            color: "magenta",
            offsetX: 10,
            offsetY: 10,
            opacity: .5,
            width: 5
        },
        polar: true,
        reflow: false,
        renderTo: "elementId",
        resetZoomButton: <HighchartsChartResetZoomButton> {
            position: <HighchartsPosition> {
                align: "left",
                verticalAlign: "top",
                x: 5,
                y: 5
            },
            relativeTo: "chart",
            theme: <HighchartsButtonTheme> {
                display: "hidden",
                fill: "black",
                stroke: "white",
                r: 2,
                style: {}
            }
        },
        selectionMarkerFill: "rgba(100, 100, 100, .5)",
        shadow: false,
        showAxes: true,
        spacing: [5, 5, 10, 5],
        spacingBottom: 5,
        spacingLeft: 5,
        spacingRight: 5,
        spacingTop: 5,
        style: {},
        type: "spline",
        width: 100,
        zoomType: "x"
    };

    //alignticks example
    $('#container').highcharts({
        chart: {
            alignTicks: true,
            type: 'line'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: [{
            title: {
                text: 'Primary Axis'
            }
        }, {
            title: {
                text: 'Secondary Axis'
            },
            gridLineWidth: 0,
            opposite: true
        }],
        legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'left',
            x: 100,
            verticalAlign: 'top',
            y: 70
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
            }
        },
        plotOptions: {},
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            data: [129.9, 271.5, 306.4, 29.2, 544.0, 376.0, 435.6, 348.5, 216.4, 294.1, 35.6, 354.4],
            yAxis: 1
        }]
    });

    // animation example
    $('#container').highcharts(<HighchartsOptions> {
        chart: {
            animation: {
                duration: 1500,
                easing: 'easeOutBounce'
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
    var i = 1;
    $('#update').click(function () {
        var chart = $('#container').highcharts();
        chart.series[0].data[0].update(i % 2 ? 200 : 0);
        i += 1;
    });

    // background gradient example
    $('#container').highcharts({
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(200, 200, 255)']
                ]
            },
            type: 'line'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'left',
            x: 100,
            verticalAlign: 'top',
            y: 70
        },
        tooltip: {
            formatter: function () {
                return `<b>${this.series.name}</b><br/>${this.x}: ${this.y}`;
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // border example
    $('#container').highcharts({
        chart: {
            borderColor: '#EBBA95',
            borderRadius: 20,
            borderWidth: 2,
            type: 'line'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            floating: true,
            align: 'left',
            x: 100,
            verticalAlign: 'top',
            y: 70
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // events examples
    $('#container').highcharts({
        chart: {
            events: {
                addSeries: function () {
                    var label = (<HighchartsChartObject>this).renderer.label('A series was added, about to redraw chart', 100, 120)
                        .attr({
                            fill: Highcharts.getOptions().colors[0],
                            padding: 10,
                            r: 5,
                            zIndex: 8
                        })
                        .css({
                            color: '#FFFFFF'
                        })
                        .add();

                    setTimeout(function () {
                        label.fadeOut();
                    }, 1000);
                }
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // activate the button
    $('#button').click(function () {
        var chart = $('#container').highcharts();

        chart.addSeries({
            data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
        });

        $(this).attr('disabled', 'true');
    });

    // options3d examples
    $('#container').highcharts({
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                frame: {
                    bottom: {
                        size: 1,
                        color: '#C0C0C0'
                    },
                    side: {
                        size: 1,
                        color: '#C0C0C0'
                    },
                    back: {
                        size: 1,
                        color: '#D0D0D0'
                    }
                }
            },
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // zoom&pan example
    $('#container').highcharts({
        chart: {
            type: 'line',
            zoomType: 'x',
            panning: true,
            panKey: 'shift'
        },
        title: {
            text: 'Zooming and panning'
        },
        subtitle: {
            text: 'Click and drag to zoom in. Hold down shift key to pan.'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // reset zoom example
    $('#container').highcharts({
        chart: {
            zoomType: 'x',
            resetZoomButton: {
                position: {
                    x: 0,
                    y: -30
                },
                theme: {
                    fill: 'white',
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#41739D',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                }
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
}

function test_CreditsOptions() {
    var allDefaults: HighchartsCreditsOptions = {};

    // custom url and text example
    $('#container').highcharts({
        credits: {
            text: 'Example.com',
            href: 'http://www.example.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
}

function test_Data() {
    // all defaults
    var data: HighchartsDataOptions = {};

    // data from table example
    $('#container').highcharts({
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        }
    });

    // data from csv example
    $('#container').highcharts({
        data: {
            csv: document.getElementById('csv').innerHTML
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        series: [
            <HighchartsLineChartSeriesOptions> {
                lineWidth: 1
            },
            <HighchartsAreaSplineChartSeriesOptions> {
                type: 'areaspline',
                color: '#c4392d',
                negativeColor: '#5679c4',
                fillOpacity: 0.5
            }
        ]
    });

    // limited data example
    $('#container').highcharts({
        data: <HighchartsDataOptions> {
            csv: document.getElementById('csv').innerHTML,
            startRow: 114,
            endRow: 134,
            endColumn: 1,
            firstRowAsNames: false
        },
        xAxis: {
            allowDecimals: false
        },
        series: [<HighchartsLineChartSeriesOptions> {
            name: 'Annual mean'
        }]
    });

    // delimiter example
    $('#container').highcharts({
        xAxis: {
            type: 'category'
        },
        data: {
            csv: document.getElementById('csv').innerHTML,
            itemDelimiter: ';',
            lineDelimiter: '\n',
            decimalPoint: ','
        }
    });
}

function test_Drilldown() {
    var allDefaults: HighchartsDrilldownOptions = {};

    // multiseries drilldown example
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        xAxis: {
            type: 'category'
        },
        plotOptions: {
            series: <HighchartsColumnChart> {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [<HighchartsColumnChartSeriesOptions>{
            name: '2010',
            data: [{
                name: 'Republican',
                y: 5,
                drilldown: 'republican-2010'
            }, {
                name: 'Democrats',
                y: 2,
                drilldown: 'democrats-2010'
            }, {
                name: 'Other',
                y: 4,
                drilldown: 'other-2010'
            }]
        }, <HighchartsColumnChartSeriesOptions>{
            name: '2014',
            data: [{
                name: 'Republican',
                y: 4,
                drilldown: 'republican-2014'
            }, {
                name: 'Democrats',
                y: 4,
                drilldown: 'democrats-2014'
            }, {
                name: 'Other',
                y: 4,
                drilldown: 'other-2014'
            }]
        }],
        drilldown: {
            series: [<HighchartsColumnChartSeriesOptions>{
                id: 'republican-2010',
                data: [
                    ['East', 4],
                    ['West', 2],
                    ['North', 1],
                    ['South', 4]
                ]
            }, <HighchartsColumnChartSeriesOptions>{
                id: 'democrats-2010',
                data: [
                    ['East', 6],
                    ['West', 2],
                    ['North', 2],
                    ['South', 4]
                ]
            }, <HighchartsColumnChartSeriesOptions>{
                id: 'other-2010',
                data: [
                    ['East', 2],
                    ['West', 7],
                    ['North', 3],
                    ['South', 2]
                ]
            }, <HighchartsColumnChartSeriesOptions>{
                id: 'republican-2014',
                data: [
                    ['East', 2],
                    ['West', 4],
                    ['North', 1],
                    ['South', 7]
                ]
            }, <HighchartsColumnChartSeriesOptions>{
                id: 'democrats-2014',
                data: [
                    ['East', 4],
                    ['West', 2],
                    ['North', 5],
                    ['South', 3]
                ]
            }, <HighchartsColumnChartSeriesOptions>{
                id: 'other-2014',
                data: [
                    ['East', 7],
                    ['West', 8],
                    ['North', 2],
                    ['South', 2]
                ]
            }]
        }
    });

    // label and drillup example
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            series: <HighchartsColumnChart> {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [<HighchartsColumnChartSeriesOptions>{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Animals',
                y: 5,
                drilldown: 'animals'
            }, {
                name: 'Fruits',
                y: 2,
                drilldown: 'fruits'
            }, {
                name: 'Cars',
                y: 4
            }]
        }],
        drilldown: {
            activeAxisLabelStyle: {
                textDecoration: 'none',
                fontStyle: 'italic'
            },
            activeDataLabelStyle: {
                textDecoration: 'none',
                fontStyle: 'italic'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    y: 0,
                    x: 0
                },
                theme: {
                    fill: 'white',
                    'stroke-width': 1,
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#bada55'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#bada55'
                        }
                    }
                }
            },
            series: [{
                id: 'animals',
                data: [
                    ['Cats', 4],
                    ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
                ]
            }, {
                id: 'fruits',
                data: [
                    ['Apples', 4],
                    ['Oranges', 2]
                ]
            }]
        }
    });
}

function test_Exporting() {
    var allDefaults: HighchartsExportingOptions = {};

    // source size example
    $('#container').highcharts({
        title: {
            text: 'Highcharts sourceWidth and sourceHeight demo'
        },
        subtitle: {
            text: 'The on-screen chart is 600x400.<br/>The exported chart is 800x400<br/>(sourceWidth and sourceHeight multiplied by scale)',
            floating: true,
            align: 'left',
            x: 60,
            y: 50
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }],
        exporting: {
            sourceWidth: 400,
            sourceHeight: 200,
            scale: 2,
            chartOptions: {
                subtitle: null
            }
        }
    });
}

function test_Loading() {
    var allDefaults: HighchartsLoadingOptions = {};

    // examples
    // the button handler
    var isLoading = false,
        $button = $('#button'),
        chart: HighchartsChartObject;

    $button.click(function () {
        if (!isLoading) {
            chart.showLoading();
            $button.html('Hide loading');
        } else {
            chart.hideLoading();
            $button.html('Show loading');
        }
        isLoading = !isLoading;
    });

    // create the chart
    $('#container').highcharts({
        loading: {
            hideDuration: 1000,
            showDuration: 1000,
            labelStyle: {
                color: 'white'
            },
            style: {
                backgroundColor: 'gray'
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
    chart = $('#container').highcharts();
}

function test_Navigation() {
    var allDefaults: HighchartsNavigationOptions = {};

    // examples
    $('#container').highcharts({
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }],
        navigation: {
            buttonOptions: {
                align: 'center',
                height: 40,
                width: 48,
                symbolFill: 'blue',
                symbolStroke: 'blue',
                symbolSize: 24,
                symbolX: 23,
                symbolY: 21,
                symbolStrokeWidth: 2,
                verticalAlign: 'bottom',
                y: -20
            },
            menuItemStyle: {
                borderLeft: '20px solid #E0E0E0',
                fontWeight: 'normal',
                background: 'none'
            },
            menuItemHoverStyle: {
                fontWeight: 'bold',
                background: 'none',
                color: 'black'
            },
            menuStyle: {
                background: '#E0E0E0'
            }
        }
    });
}

function test_NoData() {
    var allDefaults: HighchartsNoDataOptions = {};

    // example
    $('#container').highcharts({
        title: {
            text: 'No data in line chart - with custom options'
        },
        series: [{
            type: 'line',
            name: 'Random data',
            data: []
        }],
        lang: {
            noData: "Nichts zu anzeigen"
        },
        noData: {
            style: {
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#303030'
            }
        }
    });
}

function test_AreaOptions() {
    var allDefaults: HighchartsAreaChartSeriesOptions = {};

    // examples
    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            series: <HighchartsAreaChartSeriesOptions> {
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, (<HighchartsGradient>Highcharts.Color(Highcharts.getOptions().colors[0])).setOpacity(0).get('rgba')]
                    ]
                },
                fillOpacity: 0.1,
                lineColor: '#303030',
                negativeFillColor: 'red',
                stacking: 'normal',
                step: 'right',
                threshold: 100,
                trackByArea: true,
                stickyTracking: false // to show the difference in tracking
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
}

function test_AreaRange() {
    var allDefaults: HighchartsAreaRangeChartSeriesOptions = {};

    // example
    $('#container').highcharts({
        chart: {
            type: "arearange",
            zoomType: 'x'
        },
        series: [<HighchartsAreaRangeChartSeriesOptions>{
            data: (function (arr: number[], len: number) {
                var i: number;
                for (i = 0; i < len; i = i + 1) {
                    arr.push(i);
                }
                return arr;
            }([], 50))
        }]
    });

    $('#setextremes').click(function () {
        $('#container').highcharts().xAxis[0].setExtremes(10, 15);
    });

    $('#unsetextremes').click(function () {
        $('#container').highcharts().xAxis[0].setExtremes();
    });

    // datalabels example
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {
        // Shorten the data
        data = data.splice(181, 14);
        $('#container').highcharts({
            chart: {
                type: 'arearange'
            },
            title: {
                text: 'Temperature variation by day'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },
            legend: {
                enabled: false
            },
            series: [<HighchartsAreaRangeChartSeriesOptions> {
                name: 'Temperatures',
                data: data,
                dataLabels: {
                    enabled: true,
                    yHigh: 20,
                    yLow: -20
                }
            }]

        });
    });
}

function test_Bar() {
    var allDefaults: HighchartsBarChartSeriesOptions = {};

    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            series: <HighchartsBarChartSeriesOptions> {
                borderColor: '#303030',
                borderRadius: 5,
                borderWidth: 2,
                colorByPoint: true,
                colors: ["black", "red", "blue"],
                groupPadding: 1,
                maxPointWidth: 50,
                minPointLength: 3,
                pointRange: 24 * 3600 * 1000,
                pointWidth: 20,
                states: {
                    hover: {
                        brightness: -0.3, // darken
                        enabled: true,
                        halo: {
                            size: 9,
                            attributes: {
                                fill: Highcharts.getOptions().colors[2],
                                'stroke-width': 2,
                                stroke: Highcharts.getOptions().colors[1]
                            }
                        }
                    }
                }
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // 3d example
    $('#container').highcharts({
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50
            }
        },
        plotOptions: {
            column: {
                depth: 25,
                edgeColor: "black",
                edgeWidth: 2,
                groupZPadding: 2,
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    // grouping example
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color: string) {
        return (<HighchartsGradient>Highcharts.Color(color))
            .setOpacity(0.5)
            .get('rgba');
    });

    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            min: 0,
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#FFFFFF',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            shadow: true
        },
        tooltip: {
            shared: true,
            valueSuffix: ' mm'
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false
            }
        },
        series: [<HighchartsBarChartSeriesOptions> {
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            pointPadding: 0
        }, <HighchartsBarChartSeriesOptions> {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
            pointPadding: 0.1
        }, <HighchartsBarChartSeriesOptions> {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
            pointPadding: 0.2
        }, <HighchartsBarChartSeriesOptions> {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
            pointPadding: 0.3
        }]
    });
}

function test_BoxPlot() {
    var allDefaults: HighchartsBoxPlotChartSeriesOptions = {};

    // boxplot example
    $('#container').highcharts({
        chart: {
            type: 'boxplot'
        },
        title: {
            text: 'Highcharts box plot styling'
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5'],
            title: {
                text: 'Experiment No.'
            }
        },
        yAxis: {
            title: {
                text: 'Observations'
            }
        },
        plotOptions: {
            boxplot: {
                fillColor: '#F0F0E0',
                lineWidth: 2,
                medianColor: '#0C5DA5',
                medianWidth: 3,
                stemColor: '#A63400',
                stemDashStyle: 'dot',
                stemWidth: 1,
                whiskerColor: '#3D9200',
                whiskerLength: '20%',
                whiskerWidth: 3
            }
        },
        series: [{
            name: 'Observations',
            data: [
                [760, 801, 848, 895, 965],
                [733, 853, 939, 980, 1080],
                [714, 762, 817, 870, 918],
                [724, 802, 806, 871, 950],
                [834, 836, 864, 882, 910]
            ]
        }]
    });
}

function test_Bubble() {
    var allDefaults: HighchartsBubbleChartSeriesOptions = {};

    // bubble example
    $('#container').highcharts({
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
        title: {
            text: 'Highcharts with negative bubbles'
        },
        xAxis: {
            gridLineWidth: 1
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false
        },
        plotOptions: {
            bubble: {
                minSize: 3,
                maxSize: 50
            }
        },
        series: [<HighchartsBubbleChartSeriesOptions> {
            data: [
                [9, 81, 13],
                [98, 5, 39],
                [51, 50, 23],
                [41, 22, -36],
                [58, 24, -30],
                [78, 37, -16],
                [55, 56, 3],
                [18, 45, 20],
                [42, 44, -22],
                [3, 52, 9],
                [31, 18, 47],
                [79, 91, 13],
                [93, 23, -27],
                [44, 83, -28]
            ],
            displayNegative: true,
            negativeColor: Highcharts.getOptions().colors[1],
            sizeBy: "width",
            zMin: 0,
            zMax: 100,
            zThreshold: 0
        }]
    });

    // size by absolute value example
    $('#container').highcharts({
        chart: {
            type: 'bubble'
        },
        title: {
            text: 'Size by absolute value'
        },
        subtitle: {
            text: 'Size is computed by absolute value on negative bubbles'
        },
        series: [<HighchartsBubbleChartSeriesOptions>{
            data: [
                [-5, 0, -5],
                [-4, 0, -4],
                [-3, 0, -3],
                [-2, 0, -2],
                [-1, 0, -1],
                [0, 0, 0],
                [1, 0, 1],
                [2, 0, 2],
                [3, 0, 3],
                [4, 0, 4],
                [5, 0, 5]
            ],
            sizeByAbsoluteValues: true,
            negativeColor: '#FF0000'
        }]
    });
}

function test_Column() {
    var allDefaults: HighchartsColumnChartSeriesOptions = {};

    // same options as bar chart
}

function test_ColumnRange() {
    var allDefaults: HighchartsColumnRangeChartSeriesOptions = {};

    // same options as bar chart and datalabels from arearange
}

function test_ErrorBar() {
    var allDefaults: HighchartsErrorBarChartSeriesOptions = {};

    // error bar styling example
    $('#container').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Temperature'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: {
            labels: {
                format: '{value}°C'
            },
            title: {
                text: 'Temperature'
            }
        },
        tooltip: {
            shared: true
        },
        series: [<HighchartsSplineChartSeriesOptions>{
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            marker: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b><br/>'
            }
        }, <HighchartsErrorBarChartSeriesOptions> {
            color: '#FF0000',
            name: 'Temperature error',
            type: 'errorbar',
            data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
            tooltip: {
                pointFormat: 'Error range: {point.low}-{point.high}°C'
            },
            stemColor: "grey",
            stemDashStyle: "Solid",
            stemWidth: 3,
            whiskerLength: 0
        }]
    });
}

function test_Funnel() {
    var allDefaults: HighchartsFunnelChartSeriesOptions = {};

    // funnel demo
    $('#container').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Sales funnel',
            x: -50
        },
        plotOptions: {
            series: <HighchartsFunnelChartSeriesOptions> {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%',
                reversed: false,
                height: "10%",
                width: 100
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Website visits', 15654],
                ['Downloads', 4064],
                ['Requested price list', 1987],
                ['Invoice sent', 976],
                ['Finalized', 846]
            ]
        }]
    });
}

function test_Gauge() {
    var allDefaults: HighchartsGaugeChartSeriesOptions = {};

    // example
    $('#container').highcharts({
        chart: {
            type: 'gauge'
        },
        pane: {
            startAngle: -150,
            endAngle: 150
        },
        yAxis: {
            min: 0,
            max: 100
        },
        plotOptions: {
            gauge: {
                dial: {
                    radius: '100%',
                    backgroundColor: 'silver',
                    borderColor: 'black',
                    borderWidth: 1,
                    baseWidth: 10,
                    topWidth: 1,
                    baseLength: '90%', // of radius
                    rearLength: '50%'
                },
                pivot: {
                    radius: 4,
                    borderWidth: 0,
                    borderColor: '#1f9fd9',
                    backgroundColor: '#1f9fd9'
                },
                dataLabels: {
                    borderWidth: 2,
                    borderColor: '#d3e9f7',
                    padding: 5,
                    borderRadius: 2,
                    verticalAlign: 'center',
                    y: 30,
                    style: {
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [<HighchartsGaugeChartSeriesOptions> {
            data: [80],
            overshoot: 5
        }]
    });
}

function test_HeatMap() {
    var allDefaults: HighchartsHeatMapSeriesOptions = {};

    // heatmap demo
    $('#container').highcharts({
        data: {
            csv: document.getElementById('csv').innerHTML
        },
        chart: {
            type: 'heatmap',
            inverted: true
        },
        title: {
            text: 'Highcharts heat map',
            align: 'left'
        },
        subtitle: {
            text: 'Temperature variation by day and hour through May 2015',
            align: 'left'
        },
        xAxis: {
            tickPixelInterval: 50,
            min: Date.UTC(2015, 4, 1),
            max: Date.UTC(2015, 4, 30)
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                format: '{value}:00'
            },
            minPadding: 0,
            maxPadding: 0,
            startOnTick: false,
            endOnTick: false,
            tickPositions: [0, 6, 12, 18, 24],
            tickWidth: 1,
            min: 0,
            max: 23
        },
        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a']
            ],
            min: -5
        },
        series: [<HighchartsHeatMapSeriesOptions> {
            borderWidth: 0,
            colsize: 24 * 36e5, // one day
            tooltip: {
                headerFormat: 'Temperature<br/>',
                pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
            }
        }]
    });
}

function test_Line() {
    var allDefaults: HighchartsLineChartSeriesOptions = {};

    // step example
    $('#container').highcharts({
        title: {
            text: 'Step line types, with null values in the series'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [<HighchartsLineChartSeriesOptions>{
            data: [1, 2, 3, 4, null, 6, 7, null, 9],
            step: 'right',
            name: 'Right',
            linecap: 'round'
        }, <HighchartsLineChartSeriesOptions>{
            data: [5, 6, 7, 8, null, 10, 11, null, 13],
            step: 'center',
            name: 'Center',
            linecap: 'round'
        }, <HighchartsLineChartSeriesOptions>{
            data: [9, 10, 11, 12, null, 14, 15, null, 17],
            step: 'left',
            name: 'Left',
            linecap: 'round'
        }]
    });
}

function test_Pie() {
    var allDefaults: HighchartsPieChartSeriesOptions = {};

    // pie demo
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                center: [100, 100],
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [<HighchartsPieChartSeriesOptions>{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "Microsoft Internet Explorer",
                y: 56.33
            }, {
                name: "Chrome",
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.91
            }, {
                name: "Proprietary or Undetectable",
                y: 0.2
            }]
        }]
    });

    // semi circle
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2015',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [<HighchartsPieChartSeriesOptions>{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   10.38],
                ['IE',       56.33],
                ['Chrome', 24.03],
                ['Safari',    4.77],
                ['Opera',     0.91],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });

    // slice and size
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                innerSize: 10,
                size: 80,
                slicedOffset: 20
            }
        },
        series: [{
            data: [
                {
                    name: 'Firefox',
                    y: 44.2,
                    selected: true,
                    sliced: true
                },
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ]
        }]
    });
}

function test_Polygon() {
    var allDefaults: HighchartsPolygonChartSeriesOptions = {};

    $('#container').highcharts({
        chart: {
            type: 'polygon'
        },
        xAxis: {
            minPadding: 0.05,
            maxPadding: 0.05
        },
        plotOptions: {
            polygon: {
                lineWidth: 5
            }
        },
        series: [{
            data: [
                [34, 29.9],
                [35, 144.0],
                [43, 176.0],
                [46, 71.5],
                [12, 106.4],
                [78, 129.2]
            ]
        }]
    });
}

function test_Pyramid() {
    var allDefaults: HighchartsPyramidChartSeriesOptions = {};

    // pyramid demo
    $('#container').highcharts({
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'Sales pyramid',
            x: -50
        },
        plotOptions: {
            pyramid: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Website visits',   15654],
                ['Downloads',       4064],
                ['Requested price list', 1987],
                ['Invoice sent',    976],
                ['Finalized',    846]
            ]
        }]
    });
}

function test_SolidGauge() {
    var allDefaults: HighchartsSolidGaugeChartSeriesOptions = {};

    // partial solid gauge demo
    var gaugeOptions: HighchartsOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
}

function test_TreeMap() {
    var allDefaults: HighchartsTreeMapChartSeriesOptions = {};

    // allowDrillToNode
    var treeMap: HighchartsTreeMapChartSeriesOptions = {
        type: "treemap",
        layoutAlgorithm: 'squarified',
        allowDrillToNode: true,
        alternateStartingDirection: true,
        interactByLeaf: true,
        layoutStartingDirection: "horizontal",
        levelIsConstant: true,
        data: [{
            id: "id_1",
            name: 'A'
        }, {
            id: "id_2",
            name: 'A1',
            value: 2,
            parent: 'id_1'
        }, {
            id: "id_3",
            name: 'A2',
            value: 2,
            parent: 'id_1'
        }, {
            id: "id_4",
            name: 'A3',
            value: 2,
            parent: 'id_1'
        }, {
            name: 'B',
            value: 6
        }, {
            name: 'C',
            value: 4
        }, {
            name: 'D',
            value: 3
        }, {
            name: 'E',
            value: 2
        }, {
            name: 'F',
            value: 2
        }, {
            name: 'G',
            value: 1
        }]
    };
}

function test_Waterfall() {
    var allDefaults: HighchartsWaterFallChartSeriesOptions = {};

    // partial waterfall demo
    var series: HighchartsWaterFallChartSeriesOptions = {
        upColor: Highcharts.getOptions().colors[2],
        color: Highcharts.getOptions().colors[3],
        data: [{
            name: 'Start',
            y: 120000
        }, {
            name: 'Product Revenue',
            y: 569000
        }, {
            name: 'Service Revenue',
            y: 231000
        }, {
            name: 'Positive Balance',
            isIntermediateSum: true,
            color: Highcharts.getOptions().colors[1]
        }, {
            name: 'Fixed Costs',
            y: -342000
        }, {
            name: 'Variable Costs',
            y: -233000
        }, {
            name: 'Balance',
            isSum: true,
            color: Highcharts.getOptions().colors[1]
        }],
        dataLabels: {
            enabled: true,
            formatter: function () {
                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
            },
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                textShadow: '0px 0px 3px black'
            }
        },
        pointPadding: 0
    };
}

function test_AxisOptions() {
    var allDefaults: HighchartsAxisOptions = {};

    var axis: HighchartsAxisOptions = {
        allowDecimals: false,
        alternateGridColor: '#000000',
        breaks: [{
            breakSize: 1,
            from: 5,
            to: 10,
            repeat: 2
        }],
        categories: ['A', 'B'],
        ceiling: 100,
        dateTimeLabelFormats: {
            millisecond: "ms format"
        },
        endOnTick: false,
        events: {
            afterBreaks: () => {},
            afterSetExtremes: () => {},
            pointBreak: () => {},
            setExtremes: () => {}
        },
        floor: 0,
        gridLineColor: '#111111',
        gridLineDashStyle: 'Solid',
        gridLineWidth: 1,
        gridZIndex: 1,
        id: "axis1",
        labels: {
            align: "left",
            autoRotation: [-45],
            autoRotationLimit: 70,
            distance: 10,
            enabled: true,
            format: "format",
            formatter: function() { return this.value; },
            maxStaggerLines: 5,
            overflow: false,
            padding: 10,
            rotation: 10,
            staggerLines: 10,
            step: 3,
            style: {},
            useHTML: false,
            x: 0,
            y: 0
        },
        lineColor: "#C0D0E0",
        lineWidth: 2,
        linkedTo: 1,
        max: 1200,
        maxPadding: 5,
        min: 0,
        minPadding: 5,
        minRange: 10,
        minTickInterval: 5,
        minorGridLineColor: "#E0E0E0",
        minorGridLineDashStyle: 'Solid',
        minorGridLineWidth: 2,
        minorTickColor: '#A0A0A0',
        minorTickInterval: 5,
        minorTickLength: 3,
        minorTickPosition: 'inside',
        minorTickWidth: 0,
        offset: 0,
        opposite: false,
        plotBands: [{
            borderColor: 'black',
            borderWidth: 2,
            color: 'gray',
            events: {
                click: () => {},
                mouseover: () => {},
                mouseout: () => {},
                mousemove: () => {}
            },
            from: 0,
            id: 'plotband1',
            innerRadius: 10,
            label: {
                align: 'left',
                rotation: 10,
                style: {},
                text: 'text',
                textAlign: 'left',
                useHTML: false,
                verticalAlign: 'bottom',
                x: 0,
                y: 0
            },
            outerRadius: 20,
            thickness: 1,
            to: 2,
            zIndex: 2
        }],
        plotLines: [{
            color: '#000000',
            dashStyle: 'Solid',
            events: {
                click: () => {},
                mouseover: () => {},
                mouseout: () => {},
                mousemove: () => {}
            },
            id: 'plotline1',
            label: {
                align: 'left',
                rotation: 10,
                style: {},
                text: 'text',
                textAlign: 'left',
                useHTML: false,
                verticalAlign: 'bottom',
                x: 0,
                y: 0
            },
            value: 10,
            width: 100,
            zIndex: 2
        }],
        reversed: false,
        showEmpty: false,
        showFirstLabel: true,
        showLastLabel: true,
        startOfWeek: 1,
        startOnTick: false,
        tickAmount: 10,
        tickColor: 'black',
        tickInterval: 1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickPosition: 'outside',
        tickPositioner: () => {},
        tickPositions: [0, 1, 2],
        tickWidth: 1,
        tickmarkPlacement: 'between',
        title: {
            align: 'left',
            rotation: 10,
            style: {},
            text: 'text',
            x: 0,
            y: 0
        },
        type: 'linear',
        units: [
            ['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ['second', [1, 2, 5, 10, 15, 30]],
            ['minute', [1, 2, 5, 10, 15, 30]]],
        visible: true
    };
}

function test_AxisObject() {
    var axis = $("#container").highcharts().xAxis[0];
    axis.addPlotBand({
        from: 5.5,
        to: 7.5,
        color: '#FCFFC5',
        id: 'plot-band-1'
    });
    axis.removePlotBand('plot-band-1');
    axis.addPlotLine({
        value: 5.5,
        color: 'red',
        width: 2,
        id: 'plot-line-1'
    });
    axis.removePlotLine('plot-line-1');
    var extremes = axis.getExtremes();
    console.log('dataMax: ' + extremes.dataMax + '<br/>' +
                'dataMin: ' + extremes.dataMin + '<br/>' +
                'max: ' + extremes.max + '<br/>' +
                'min: ' + extremes.min + '<br/>');
    axis.remove();
    axis.remove(false);
    axis.setCategories(['A', 'B', 'C']);
    axis.setCategories(['A', 'B', 'C', 'D'], false);
    axis.setExtremes();
    axis.setExtremes(10, 20);
    axis.setExtremes(10, 20, false);
    axis.setExtremes(10, 20, false, false);
    axis.setExtremes(10, 20, false, {duration: 50});
    axis.setTitle({text: 'text'});
    axis.setTitle({text: 'text'}, false);
    axis.toPixels(10);
    axis.toPixels(10, true);
    axis.toValue(10);
    axis.toValue(10, true);
    axis.update(<HighchartsAxisOptions>{});
    axis.update(<HighchartsAxisOptions>{}, true);
}

function test_ChartObject() {
    var chart = $("#container").highcharts();
    chart.addAxis(<HighchartsAxisOptions>{});
    chart.addAxis(<HighchartsAxisOptions>{}, true);
    chart.addAxis(<HighchartsAxisOptions>{}, true, false);
    chart.addAxis(<HighchartsAxisOptions>{}, true, true, false);
    chart.addAxis(<HighchartsAxisOptions>{}, true, true, {duration: 50});
    chart.addSeries(<HighchartsIndividualSeriesOptions>{});
    chart.addSeries(<HighchartsIndividualSeriesOptions>{}, false);
    chart.addSeries(<HighchartsIndividualSeriesOptions>{}, false, false);
    chart.addSeries(<HighchartsIndividualSeriesOptions>{}, false, {duration: 50});
    chart.addSeriesAsDrilldown(<HighchartsPointObject>{}, <HighchartsIndividualSeriesOptions>{});
    var container = chart.container;
    console.log(container.id);
    chart.destroy();
    chart.drillUp();
    chart.exportChart(<HighchartsExportingOptions>{}, <HighchartsOptions>{});
    var object = chart.get('axisIdOrSeriesIdOrPointId');
    var svg1 = chart.getSVG();
    var svg2 = chart.getSVG(<HighchartsOptions>{});
    var selectedPoints = chart.getSelectedPoints();
    var selectedSeries = chart.getSelectedSeries();
    chart.hideLoading();
    var options = chart.options;
    chart.print();
    chart.redraw();
    chart.redraw(false);
    chart.redraw({duration: 50, easing: 'fadeIn'});
    chart.reflow();
    var series = chart.series;
    chart.setSize(200, 200);
    chart.setSize(200, 200, false);
    chart.setSize(200, 200, {duration: 50});
    chart.setTitle({}, {});
    chart.setTitle({}, {}, false);
    chart.showLoading();
    chart.showLoading("Loading label");
    var firstXAxis = chart.xAxis[0];
    var firstYAxis = chart.yAxis[0];
}

function test_ElementObject() {
    var renderer = new Highcharts.Renderer($("#container")[0], 400, 400);
    var group = renderer.g().add();
    renderer
        .circle(200, 150, 100)
        .attr({
            fill: '#FCFFC5',
            stroke: 'black',
            'stroke-width': 1
        })
        .add(group);
    var rect = renderer
        .rect(90, 150, 100, 100, 5)
        .attr({
            fill: '#C5FFC5',
            stroke: 'black',
            'stroke-width': 1
        })
        .add(group);
    rect.animate({
        x: 50,
        y: 50,
        width: 200,
        height: 20,
        'stroke-width': 10
    });
    rect.destroy();
    var styledText = renderer
        .text('Series 1', 140, 140)
        .attr({
            rotation: -25
        })
        .css({
            color: '#4572A7',
            fontSize: '16px'
        })
        .add();
    var bbox = styledText.getBBox();
    styledText.on('click', () => {});
    group.toFront();
}

function test_PointObject() {
    var point = <HighchartsPointObject>$('#container').highcharts().get('point1');
    var category = point.category;
    var percentage = point.percentage;
    point.remove();
    point.remove(false);
    point.remove(false, {duration: 50});
    point.select();
    point.select(false);
    point.select(false, true);
    var isSelected = point.selected;
    var series = point.series;
    point.slice();
    point.slice(false);
    point.slice(false, false);
    point.slice(false, false, false);
    point.slice(false, false, {duration: 50});
    var total = point.total;
    point.update(0);
    point.update([0, 0]);
    point.update({});
    point.update({}, false);
    point.update({}, false, false);
    point.update({}, false, {duration: 50});
    var x = point.x;
    var y = point.y;
}

function test_RendererObject() {
    var renderer = $('#container').highcharts().renderer;
    renderer.arc(0, 0, 20, 10, 0, Math.PI);
    renderer.circle(0, 0, 100);
    renderer.g('groupName');
    renderer.image('http://source', 20, 20, 100, 100);
    renderer.label('Label', 200, 100, 'rect', 0, 0, false, false, 'class');
    renderer.path(['M', 100, 100, 'L', 100, 200]);
    renderer.rect(20, 20, 100, 100, 2);
    renderer.text('text', 10, 10);
}

function test_SeriesObject() {
    var series = <HighchartsSeriesObject>$('#container').highcharts().get('series1');
    series.addPoint(0);
    series.addPoint([0, 0]);
    series.addPoint({});
    series.addPoint({}, false);
    series.addPoint({}, false, true);
    series.addPoint({}, false, true, false);
    series.addPoint({}, false, true, {duration: 50});
    var chart = series.chart;
    var data = series.data;
    series.hide();
    var name = series.name;
    var options = series.options;
    series.remove();
    series.remove(false);
    series.removePoint(0);
    series.removePoint(0, false);
    series.removePoint(0, false, false);
    series.removePoint(0, false, {duration: 50});
    series.select();
    series.select(true);
    var isSelected = series.selected;
    series.setData([0, 1, 2]);
    series.setData([[0, 0], [1, 1], [2, 2]]);
    series.setData([{}, {}, {}]);
    series.setData([0, 1, 2], false);
    series.setData([0, 1, 2], false, false);
    series.setData([0, 1, 2], false, {duration: 50});
    series.setData([0, 1, 2], false, false, false);
    series.setVisible();
    series.setVisible(true);
    series.setVisible(true, false);
    series.show();
    var type = series.type;
    series.update({});
    series.update({}, false);
    var visible = series.visible;
    var xAxis = series.xAxis;
    var yAxis = series.yAxis;
}
