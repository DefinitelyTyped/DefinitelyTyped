/// <reference types="jquery" />
import * as Highcharts from "highcharts"; // May also use /// <reference types="highcharts" />

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

    const animate: Highcharts.Animation = {
        duration: 200,
        easing: "linear"
    };

    const gradient: Highcharts.Gradient = {
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
    };

    const color: Highcharts.Color = "#fcfcff";

    const chart1 = new Highcharts.Chart({
        chart: {
            renderTo: "container"
        },
        xAxis: {},
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            description: "foo",
            type: "line",
            allowPointSelect: true
        }]
    });

    chart1.addSeries<Highcharts.BarChartSeriesOptions>({
        enableMouseTracking: true,
        data: [1, 2, 3, 4, 5],
        description: "some description"
    });

    const chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            width: 400,
            height: 400,
            spacingRight: 20
        },
        xAxis: [<Highcharts.AxisOptions> {
            description: 'x-foo',
            min: 1,
            max: 1000,
            endOnTick: true,
            tickInterval: 1,
            minorTickInterval: 0.1,
            gridLineWidth: 1,
            type: 'logarithmic'
        }],
        yAxis: [<Highcharts.AxisOptions> {
            description: 'y-foo',
            min: 1,
            max: 1000,
            tickInterval: 1,
            minorTickInterval: 0.1,
            title: {
                text: null
            },
            type: 'logarithmic'
        }],
        legend: {
            enabled: false
        },
        series: [<Highcharts.ScatterChartSeriesOptions> {
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

    const chart3 = new Highcharts.Chart({
        chart: {
            renderTo: "container"
        },
        xAxis: {},
        series: [<Highcharts.ColumnRangeChartSeriesOptions> {
            data: [[1, 1, 2], [2, 2, 3], [3, 2, 3]],
            description: "foo",
            type: "columnrange",
            allowPointSelect: true
        }]
    });

    const chart4 = new Highcharts.Chart({
        chart: {
            renderTo: "container"
        },
        xAxis: {},
        series: [<Highcharts.ColumnRangeChartSeriesOptions> {
            data: [["01-01-2018", 1, 2], ["02-01-2018", 2, 3], ["03-01-2018", 2, 3]],
            description: "column range data",
            type: "columnrange",
            allowPointSelect: true
        }]
    });

    const div: HTMLDivElement = null as any;
    const r = new Highcharts.Renderer(div, 20, 30);
    const box = r.text("Hello", 10, 10).getBBox();

    const highChartSettings: Highcharts.Options = {
        chart: {
            width: 400,
            height: 400
        },
        xAxis: [{
        }],
        series: [<Highcharts.PieChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    };

    const container = $("#container").highcharts(highChartSettings, (chart) => {
        chart.series[0].setVisible(true, true);
    });

    const singleYAxisOptions: Highcharts.Options = {
        yAxis: {}
    };
    const multipleYAxisOptions: Highcharts.Options = {
        yAxis: [{}, {}]
    };

    const renderToIdChart = new Highcharts.Chart("container", {
        xAxis: {},
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    const renderToElementChart = new Highcharts.Chart(div, {
        xAxis: {},
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    const createWithFunction = Highcharts.chart({
        xAxis: {},
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    const createWithFunctionRenderToId = Highcharts.chart("container", {
        xAxis: {},
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });

    const createWithFunctionRenderToElement = Highcharts.chart(div, {
        xAxis: {},
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: "line",
            allowPointSelect: true
        }]
    });
}

function test_alldefaults() {
    const options: Highcharts.Options = {
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
    const emptyChartOptions: Highcharts.ChartOptions = {
        events: {},
        options3d: {},
        resetZoomButton: {}
    };

    const allValuesSet: Highcharts.ChartOptions = {
        alignTicks: false,
        animation: {
            duration: 500,
            easing: "linear"
        },
        backgroundColor: <Highcharts.Gradient> {
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
        colorCount: 42,
        defaultSeriesType: "deprecated",
        description: "an arbitrary description",
        events: <Highcharts.ChartEvents> {
            addSeries: () => { },
            afterPrint: () => { },
            beforePrint: () => { },
            click: () => { },
            drilldown: () => { },
            drillup: () => { },
            drillupall: () => { },
            load: () => { },
            redraw: () => { },
            selection: () => { }
        },
        height: 200,
        ignoreHiddenSeries: true,
        inverted: true,
        margin: [5, 5, 5, 5],
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        options3d: <Highcharts.ChartOptions3d> {
            alpha: 20,
            beta: 20,
            depth: 50,
            enabled: true,
            frame: {
                back: <Highcharts.ChartOptions3dFrame> {
                    color: "black",
                    size: 2
                },
                bottom: <Highcharts.ChartOptions3dFrame> {
                    color: "black",
                    size: 2
                },
                side: <Highcharts.ChartOptions3dFrame> {
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
        plotShadow: <Highcharts.Shadow> {
            color: "magenta",
            offsetX: 10,
            offsetY: 10,
            opacity: .5,
            width: 5
        },
        polar: true,
        reflow: false,
        renderTo: "elementId",
        resetZoomButton: <Highcharts.ChartResetZoomButton> {
            position: <Highcharts.Position> {
                align: "left",
                verticalAlign: "top",
                x: 5,
                y: 5
            },
            relativeTo: "chart",
            theme: <Highcharts.ButtonTheme> {
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
        typeDescription: "load accessibility module to read this",
        width: 100,
        zoomType: "x"
    };

    // alignticks example
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
            formatter() {
                return `<b> ${this.series.name}</b> <br/> ${this.x}: ${this.y}`;
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
    $('#container').highcharts(<Highcharts.Options> {
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
    let i = 1;
    $('#update').click(() => {
        const chart = $('#container').highcharts();
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
            formatter() {
                return `<b> ${this.series.name}</b> <br/> ${this.x}: ${this.y}`;
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
                addSeries() {
                    const label = (<Highcharts.ChartObject> this).renderer.label('A series was added, about to redraw chart', 100, 120)
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

                    setTimeout(() => {
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
    $('#button').click(() => {
        const chart = $('#container').highcharts();

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

    // typedescription example
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

    // tooltip split example (incl. padding)
    $('#container').highcharts({
        chart: {
            type: 'spline'
        },

        title: {
            text: 'Mountain house indoor temperatures'
        },

        subtitle: {
            text: 'Split tooltips in Highcharts makes it easier to read overlapping line series'
        },

        tooltip: {
            valueSuffix: '°C',
            split: true,
            padding: 5
        },

        xAxis: {
        },

        yAxis: {
        },

        plotOptions: {
            series: {
                lineWidth: 1.5,
                marker: {
                    radius: 2
                }
            }
        },

        data: {
            columns: [
                ["Time", 1451616120000, 1451865660000, 1451952060000, 1452038400000, 1452124800000, 1452211200000,
                    1452297600000, 1452384000000, 1452470400000, 1452556800000, 1452643200000, 1452729600000, 1452816000000,
                    1452902400000, 1452988800000, 1453075200000, 1453161600000, 1453248000000, 1453334400000, 1453420800000,
                    1453507200000, 1453593600000, 1453680000000, 1453766400000, 1453852800000, 1453939200000, 1454025600000],
                ["Kitchen", 5, 4, 5, 9, 6, 15, 19, 14, 6, 5, 6, 6, 15, 18, 15, 6, 6, 6, 6, 6, 6, 6, 16, 10, 6, 6, 6],
                ["Living room", 9, 10, 16, 13, 6, 20, 24, 16, 7, 7, 6, 6, 20, 23, 18, 9, 7, 6, 6, 7, 6, 21, 20, 16, 6, 6, 6],
                ["Hall", 7, 7, 13, 12, 5, 17, 22, 14, 4, 5, 5, 6, 18, 21, 17, 9, 5, 6, 5, 6, 6, 18, 20, 14, 5, 5, 5],
                ["Bathroom", 7, 7, 13, 12, 5, 17, 22, 14, 4, 5, 5, 6, 18, 21, 17, 9, 5, 6, 5, 6, 6, 18, 20, 14, 5, 5, 5],
                ["Bedroom 1", 6, 19, 19, 10, 5, 15, 21, 14, 6, 6, 5, 5, 17, 21, 16, 6, 5, 5, 5, 5, 5, 17, 18, 13, 5, 5, 5],
                ["Bedroom 2", 7, 19, 19, 9, 5, 11, 19, 15, 6, 5, 6, 6, 16, 19, 17, 8, 9, 6, 5, 6, 5, 17, 19, 14, 6, 6, 6],
                ["Shed", 6, 6, 5, 5, 6, 6, 6, 5, 5, 6, 6, 5, 6, 6, 6, 6, 6, 6, null, null, 6, 6, 6, 6, 6, 6, 6]
            ]
        }
    });
}

function test_CreditsOptions() {
    const allDefaults: Highcharts.CreditsOptions = {};

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
    const data: Highcharts.DataOptions = {};

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
            <Highcharts.LineChartSeriesOptions> {
                lineWidth: 1
            },
            <Highcharts.AreaSplineChartSeriesOptions> {
                type: 'areaspline',
                color: '#c4392d',
                negativeColor: '#5679c4',
                fillOpacity: 0.5
            }
        ]
    });

    // limited data example
    $('#container').highcharts({
        data: <Highcharts.DataOptions> {
            csv: document.getElementById('csv').innerHTML,
            startRow: 114,
            endRow: 134,
            endColumn: 1,
            firstRowAsNames: false
        },
        xAxis: {
            allowDecimals: false
        },
        series: [<Highcharts.LineChartSeriesOptions> {
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
    const allDefaults: Highcharts.DrilldownOptions = {};

    // multiseries drilldown example
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        xAxis: {
            type: 'category'
        },
        plotOptions: {
            series: <Highcharts.ColumnChart> {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [<Highcharts.ColumnChartSeriesOptions> {
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
        }, <Highcharts.ColumnChartSeriesOptions> {
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
            series: [<Highcharts.ColumnChartSeriesOptions> {
                id: 'republican-2010',
                data: [
                    ['East', 4],
                    ['West', 2],
                    ['North', 1],
                    ['South', 4]
                ]
            }, <Highcharts.ColumnChartSeriesOptions> {
                id: 'democrats-2010',
                data: [
                    ['East', 6],
                    ['West', 2],
                    ['North', 2],
                    ['South', 4]
                ]
            }, <Highcharts.ColumnChartSeriesOptions> {
                id: 'other-2010',
                data: [
                    ['East', 2],
                    ['West', 7],
                    ['North', 3],
                    ['South', 2]
                ]
            }, <Highcharts.ColumnChartSeriesOptions> {
                id: 'republican-2014',
                data: [
                    ['East', 2],
                    ['West', 4],
                    ['North', 1],
                    ['South', 7]
                ]
            }, <Highcharts.ColumnChartSeriesOptions> {
                id: 'democrats-2014',
                data: [
                    ['East', 4],
                    ['West', 2],
                    ['North', 5],
                    ['South', 3]
                ]
            }, <Highcharts.ColumnChartSeriesOptions> {
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
            series: <Highcharts.ColumnChart> {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [<Highcharts.ColumnChartSeriesOptions> {
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
    const allDefaults: Highcharts.ExportingOptions = {};

    // source size example
    $('#container').highcharts({
        title: {
            text: 'Highcharts sourceWidth and sourceHeight demo'
        },
        subtitle: {
            text: 'The on-screen chart is 600x400.<br/> The exported chart is 800x400<br/> (sourceWidth and sourceHeight multiplied by scale)',
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
        exporting: <Highcharts.ExportingOptions> {
            error: () => {
                console.log('succesfully asserted exporting.error');
            },
            libURL: 'https://code.highcharts.com/{version}/lib',
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
    const allDefaults: Highcharts.LoadingOptions = {};

    // examples
    // the button handler
    let isLoading = false;
    const $button = $('#button');
    let chart: Highcharts.ChartObject;

    $button.click(() => {
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
    const allDefaults: Highcharts.NavigationOptions = {};

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
    const allDefaults: Highcharts.NoDataOptions = {};

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
    const allDefaults: Highcharts.AreaChartSeriesOptions = {};

    // examples
    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            series: <Highcharts.AreaChartSeriesOptions> {
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, (<Highcharts.Gradient> Highcharts.Color(Highcharts.getOptions().colors[0])).setOpacity(0).get('rgba')]
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
    const allDefaults: Highcharts.AreaRangeChartSeriesOptions = {};

    // example
    $('#container').highcharts({
        chart: {
            type: "arearange",
            zoomType: 'x'
        },
        series: [<Highcharts.AreaRangeChartSeriesOptions> {
            data: (((arr: number[], len: number) => {
                for (let i = 0; i < len; i = i + 1) {
                    arr.push(i);
                }
                return arr;
            })([], 50))
        }]
    });

    $('#setextremes').click(() => {
        $('#container').highcharts().xAxis[0].setExtremes(10, 15);
    });

    $('#unsetextremes').click(() => {
        $('#container').highcharts().xAxis[0].setExtremes();
    });

    // datalabels example
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', (data) => {
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
            series: [<Highcharts.AreaRangeChartSeriesOptions> {
                name: 'Temperatures',
                data,
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
    const allDefaults: Highcharts.BarChartSeriesOptions = {};

    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        plotOptions: {
            series: <Highcharts.BarChartSeriesOptions> {
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
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, (color: string) => {
        return (<Highcharts.Gradient> Highcharts.Color(color))
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
        series: [<Highcharts.BarChartSeriesOptions> {
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            pointPadding: 0
        }, <Highcharts.BarChartSeriesOptions> {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
            pointPadding: 0.1
        }, <Highcharts.BarChartSeriesOptions> {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
            pointPadding: 0.2
        }, <Highcharts.BarChartSeriesOptions> {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
            pointPadding: 0.3
        }]
    });
}

function test_BoxPlot() {
    const allDefaults: Highcharts.BoxPlotChartSeriesOptions = {};

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
                760, 801, 848, 895, 965,
                733, 853, 939, 980, 1080,
                714, 762, 817, 870, 918,
                724, 802, 806, 871, 950,
                834, 836, 864, 882, 910
            ]
        }]
    });
}

function test_Bubble() {
    const allDefaults: Highcharts.BubbleChartSeriesOptions = {};

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
        series: [<Highcharts.BubbleChartSeriesOptions> {
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
        series: [<Highcharts.BubbleChartSeriesOptions> {
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
    const allDefaults: Highcharts.ColumnChartSeriesOptions = {};

    // same options as bar chart
}

function test_ColumnCrispFalse() {
    // conform example: http://jsfiddle.net/gh/get/jquery/3.1.1/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/column-crisp-false/
    const numbers = () => {
        const arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(i);
        }
        return arr;
    };
    const chart = new Highcharts.Chart(<Highcharts.Options> {
        title: {
            text: 'Crisp columns are disabled'
        },

        subtitle: {
            text: 'Resulting in blurry, but evenly spaced columns'
        },

        series: [{
            data: numbers(),
            type: 'column',
            crisp: false
        }]
    });
}

function test_ColumnRange() {
    const allDefaults: Highcharts.ColumnRangeChartSeriesOptions = {};

    // same options as bar chart and datalabels from arearange
}

function test_ErrorBar() {
    const allDefaults: Highcharts.ErrorBarChartSeriesOptions = {};

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
        series: [<Highcharts.SplineChartSeriesOptions> {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            marker: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}"> {series.name}</span> : <b> {point.y:.1f}°C</b> <br/> '
            }
        }, <Highcharts.ErrorBarChartSeriesOptions> {
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

function test_FindNearestPointBy() {
    // conform example: http://jsfiddle.net/gh/get/library/pure/highslide-software/highcharts.com/tree/master/samples/highcharts/series/findnearestpointby/
    const chart = new Highcharts.Chart({
        title: {
            text: 'The top series snaps hover along X axis'
        },

        plotOptions: {
            line: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [<Highcharts.IndividualSeriesOptions> {
            findNearestPointBy: 'x',
            // Hover at [3.5, 6] to demo x-dimension search
            // Compare to Series 2 behavior at [5.5, 3]
            data: [
                [0, 6],
                [1, 6],
                [1, 7],
                [2, 6],
                [3, 6],
                [3.5, 4],
                [4, 6],
                [5, 6],
                [6, 6],
                [7, 6]
            ]
        }, <Highcharts.IndividualSeriesOptions> {
            findNearestPointBy: 'xy',
            // Hover at [1, 4] to demo xy-dimension search.
            // Useful when having multiple points on the same x-value.
            data: [
                [0, 3],
                [1, 3],
                [1, 4],
                [2, 3],
                [3, 3],
                [4, 3],
                [5, 3],
                [5.5, 5.5],
                [6, 3],
                [7, 3]
            ]
        }]
    });
}

function test_Funnel() {
    const allDefaults: Highcharts.FunnelChartSeriesOptions = {};

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
            series: <Highcharts.FunnelChartSeriesOptions> {
                dataLabels: {
                    enabled: true,
                    format: '<b> {point.name}</b>  ({point.y:,.0f})',
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
    const allDefaults: Highcharts.GaugeChartSeriesOptions = {};

    // example
    $('#container').highcharts({
        chart: {
            type: 'gauge'
        },
        pane: {
            center: ['50%', '85%'],
            startAngle: -150,
            endAngle: 150
        },
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [0.1, '#DF5353'],
                [0.5, '#DDDF0D'],
                [0.9, '#55BF3B'],
            ],
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
        series: [<Highcharts.GaugeChartSeriesOptions> {
            data: [80],
            overshoot: 5
        }]
    });
}

function test_HeatMap() {
    const allDefaults: Highcharts.HeatMapSeriesOptions = {};

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
        series: [<Highcharts.HeatMapSeriesOptions> {
            borderWidth: 0,
            colsize: 24 * 36e5, // one day
            tooltip: {
                headerFormat: 'Temperature<br/> ',
                pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b> {point.value} ℃</b> '
            }
        }]
    });
}

function test_Line() {
    const allDefaults: Highcharts.LineChartSeriesOptions = {};

    // step example
    $('#container').highcharts({
        title: {
            text: 'Step line types, with null values in the series'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [<Highcharts.LineChartSeriesOptions> {
            data: [1, 2, 3, 4, null, 6, 7, null, 9],
            step: 'right',
            name: 'Right',
            linecap: 'round'
        }, <Highcharts.LineChartSeriesOptions> {
            data: [5, 6, 7, 8, null, 10, 11, null, 13],
            step: 'center',
            name: 'Center',
            linecap: 'round'
        }, <Highcharts.LineChartSeriesOptions> {
            data: [9, 10, 11, 12, null, 14, 15, null, 17],
            step: 'left',
            name: 'Left',
            linecap: 'round'
        }]
    });
}

function test_Pie() {
    const allDefaults: Highcharts.PieChartSeriesOptions = {};

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
            pointFormat: '{series.name}: <b> {point.percentage:.1f}%</b> '
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                center: [100, 100],
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b> {point.name}</b> : {point.percentage:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [<Highcharts.PieChartSeriesOptions> {
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
            text: 'Browser<br> shares<br> 2015',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b> {point.percentage:.1f}%</b> '
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textOutline: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [<Highcharts.PieChartSeriesOptions> {
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox', 10.38],
                ['IE', 56.33],
                ['Chrome', 24.03],
                ['Safari', 4.77],
                ['Opera', 0.91],
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
                ['IE7', 26.6],
                ['IE6', 20],
                ['Chrome', 3.1],
                ['Other', 5.4]
            ]
        }]
    });
}

function test_Polygon() {
    const allDefaults: Highcharts.PolygonChartSeriesOptions = {};

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
    const allDefaults: Highcharts.PyramidChartSeriesOptions = {};

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
                    format: '<b> {point.name}</b>  ({point.y:,.0f})',
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
                ['Website visits', 15654],
                ['Downloads', 4064],
                ['Requested price list', 1987],
                ['Invoice sent', 976],
                ['Finalized', 846]
            ]
        }]
    });
}

function test_SolidGauge() {
    const allDefaults: Highcharts.SolidGaugeChartSeriesOptions = {};

    // partial solid gauge demo
    const gaugeOptions: Highcharts.Options = {
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
        colorAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ]
        },
        yAxis: {
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
    const allDefaults: Highcharts.TreeMapChartSeriesOptions = {};

    // allowDrillToNode
    const treeMap: Highcharts.TreeMapChartSeriesOptions = {
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
    const allDefaults: Highcharts.WaterFallChartSeriesOptions = {};

    // partial waterfall demo
    const series: Highcharts.WaterFallChartSeriesOptions = {
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
            formatter() {
                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
            },
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                textOutline: '0px 0px 3px black'
            }
        },
        pointPadding: 0
    };
}

function test_AccessibilityOptions() {
    const accessibilityOptions: Highcharts.AccessibilityOptions = <Highcharts.AccessibilityOptions> {
        describeSingleSeries: true,
        enabled: true,
        keyboardNavigation: <Highcharts.KeyboardNavigationOptions> {
            enabled: true,
            skipNullPoints: true
        },
        onTableAnchorClick: () => { },
        pointDateFormat: 'dd-MM-yyyy',
        pointDateFormatter: () => { },
        pointDescriptionFormatter: () => { },
        pointDescriptionThreshold: false,
        screenReaderSectionFormatter: () => { },
        seriesDescriptionFormatter: () => { }
    };

    const chart = new Highcharts.Chart(<Highcharts.Options> {
        accessibility: accessibilityOptions
    });
}

function test_AddAndUpdateCredits() {
    // example based on: http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/credits/credits-update/
    const chart = new Highcharts.Chart({
        title: {
            text: 'Credits update'
        },

        credits: {
            enabled: false
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    chart.addCredits({
        enabled: true
    });

    chart.credits.update({
        enabled: false
    });

    if (chart.credits) {
        chart.credits.update({
            text: 'MyFancyCompany',
            href: 'http://www.example.com',
            position: {
                align: 'left',
                x: 10
            },
            style: {
                fontSize: '2em',
                color: 'blue'
            }
        });
    }

    if (chart.credits) {
        chart.credits.update({
            text: 'Highcharts.com',
            href: 'http://www.highcharts.com',
            position: {
                align: 'right',
                x: -10
            },
            style: {
                color: '#909090',
                fontSize: '9px'
            }
        });
    }
}

function test_AxisOptions() {
    const allDefaults: Highcharts.AxisOptions = {};

    const axis: Highcharts.AxisOptions = {
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
        className: 'highcharts-axis',
        dateTimeLabelFormats: {
            millisecond: "ms format"
        },
        endOnTick: false,
        events: {
            afterBreaks: () => { },
            afterSetExtremes: () => { },
            pointBreak: () => { },
            setExtremes: () => { }
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
            formatter() { return String(this.value); },
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
                click: () => { },
                mouseover: () => { },
                mouseout: () => { },
                mousemove: () => { }
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
                click: () => { },
                mouseover: () => { },
                mouseout: () => { },
                mousemove: () => { }
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
        softMax: 2,
        softMin: 1,
        startOfWeek: 1,
        startOnTick: false,
        tickAmount: 10,
        tickColor: 'black',
        tickInterval: 1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickPosition: 'outside',
        tickPositioner: () => { },
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
    const axis = $("#container").highcharts().xAxis[0];
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
    const extremes = axis.getExtremes();
    console.log(`dataMax: ${extremes.dataMax}<br/> ` +
        `dataMin: ${extremes.dataMin}<br/> ` +
        `max: ${extremes.max}<br/> ` +
        `min: ${extremes.min}<br/> `);
    axis.remove();
    axis.remove(false);
    axis.setCategories(['A', 'B', 'C']);
    axis.setCategories(['A', 'B', 'C', 'D'], false);
    axis.setExtremes();
    axis.setExtremes(10, 20);
    axis.setExtremes(10, 20, false);
    axis.setExtremes(10, 20, false, false);
    axis.setExtremes(10, 20, false, { duration: 50 });
    axis.setTitle({ text: 'text' });
    axis.setTitle({ text: 'text' }, false);
    axis.toPixels(10);
    axis.toPixels(10, true);
    axis.toValue(10);
    axis.toValue(10, true);
    axis.update(<Highcharts.AxisOptions> {});
    axis.update(<Highcharts.AxisOptions> {}, true);
}

function test_ChartObject() {
    const chart = $("#container").highcharts();
    chart.addAxis(<Highcharts.AxisOptions> {});
    chart.addAxis(<Highcharts.AxisOptions> {}, true);
    chart.addAxis(<Highcharts.AxisOptions> {}, true, false);
    chart.addAxis(<Highcharts.AxisOptions> {}, true, true, false);
    chart.addAxis(<Highcharts.AxisOptions> {}, true, true, { duration: 50 });
    chart.addSeries(<Highcharts.IndividualSeriesOptions> {});
    chart.addSeries(<Highcharts.IndividualSeriesOptions> {}, false);
    chart.addSeries(<Highcharts.IndividualSeriesOptions> {}, false, false);
    chart.addSeries(<Highcharts.IndividualSeriesOptions> {}, false, { duration: 50 });
    chart.addSeriesAsDrilldown(<Highcharts.PointObject> {}, <Highcharts.IndividualSeriesOptions> {});
    const container = chart.container;
    console.log(container.id);
    chart.destroy();
    chart.drillUp();
    chart.exportChart(<Highcharts.ExportingOptions> {}, <Highcharts.Options> {});
    chart.exportChartLocal(<Highcharts.ExportingOptions> {}, <Highcharts.Options> {});
    const object = chart.get('axisIdOrSeriesIdOrPointId');
    const svg1 = chart.getSVG();
    const svg2 = chart.getSVG(<Highcharts.Options> {});
    const selectedPoints = chart.getSelectedPoints();
    const selectedSeries = chart.getSelectedSeries();
    chart.hideLoading();
    const options = chart.options;
    chart.print();
    chart.redraw();
    chart.redraw(false);
    chart.redraw({ duration: 50, easing: 'fadeIn' });
    chart.reflow();
    const series = chart.series;
    chart.setSize(200, 200);
    chart.setSize(200, 200, false);
    chart.setSize(200, 200, { duration: 50 });
    chart.setTitle({}, {});
    chart.setTitle({}, {}, false);
    chart.showLoading();
    chart.showLoading("Loading label");
    const firstXAxis = chart.xAxis[0];
    const firstYAxis = chart.yAxis[0];
    const legend = chart.legend;
    chart.update(<Highcharts.Options> {});
    chart.update(<Highcharts.Options> {}, true);
    chart.update(<Highcharts.Options> {}, true, true);
    chart.update(<Highcharts.Options> {}, true, true, true);
    chart.update(<Highcharts.Options> {}, true, true, {
        duration: 3000,
    });
}

function test_ElementObject() {
    const renderer = new Highcharts.Renderer($("#container")[0], 400, 400);
    const group = renderer.g().add();
    renderer
        .circle(200, 150, 100)
        .attr({
            fill: '#FCFFC5',
            stroke: 'black',
            'stroke-width': 1
        })
        .add(group);
    const rect = renderer
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
    const styledText = renderer
        .text('Series 1', 140, 140)
        .attr({
            rotation: -25
        })
        .css({
            color: '#4572A7',
            fontSize: '16px'
        })
        .add();
    const bbox = styledText.getBBox();
    styledText.on('click', () => { });
    group.toFront();
}

function test_NumericSymbolMagnitude() {
    // conform example: http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/lang/numericsymbolmagnitude/

    const chart = new Highcharts.Chart({
        title: {
            text: 'Numeric symbols magnitude'
        },

        subtitle: {
            text: 'Japanese uses ten thousands (万) as numeric symbol'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [2990, 7150, 10640, 12920, 14400, 17600,
                13560, 14850, 21640, 19410, 9560, 5440],
            type: 'column'
        }]
    });

    chart.update({
        lang: {
            numericSymbols: ['万', '億'],
            numericSymbolMagnitude: 10000
        }
    });
}

function test_PaneBackground() {
    const pane = <Highcharts.PaneBackground> {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 5,
        className: 'good',
        innerRadius: 10,
        outerRadius: '110%',
        shape: 'circle'
    };
}

function test_PointObject() {
    const point = <Highcharts.PointObject> $('#container').highcharts().get('point1');
    const category = point.category;
    const percentage = point.percentage;
    point.index;
    point.remove();
    point.remove(false);
    point.remove(false, { duration: 50 });
    point.select();
    point.select(false);
    point.select(false, true);
    const isSelected = point.selected;
    const series = point.series;
    point.slice();
    point.slice(false);
    point.slice(false, false);
    point.slice(false, false, false);
    point.slice(false, false, { duration: 50 });
    const total = point.total;
    point.update(0);
    point.update([0, 0]);
    point.update({});
    point.update({}, false);
    point.update({}, false, false);
    point.update({}, false, { duration: 50 });
    const x = point.x;
    const y = point.y;
}

function test_RendererObject() {
    const renderer = $('#container').highcharts().renderer;
    renderer.arc(0, 0, 20, 10, 0, Math.PI);
    renderer.circle(0, 0, 100);
    renderer.definition(<object> {});
    renderer.g('groupName');
    renderer.image('http://source', 20, 20, 100, 100);
    renderer.label('Label', 200, 100, 'rect', 0, 0, false, false, 'class');
    renderer.path(['M', 100, 100, 'L', 100, 200]);
    renderer.rect(20, 20, 100, 100, 2);
    renderer.text('text', 10, 10);
}

function test_ResponsiveOptions() {
    const responsiveOptions: Highcharts.ResponsiveOptions = <Highcharts.ResponsiveOptions> {
        rules: [
            <Highcharts.RulesOptions> {
                chartOptions: <Highcharts.Options> {
                    chart: {
                        description: 'just a test'
                    }
                },
                condition: <Highcharts.ConditionOptions> {
                    callback: () => { },
                    maxHeight: 420,
                    maxWidth: 420,
                    minHeight: 420,
                    minWidth: 420
                }
            }
        ]
    };

    const chart = new Highcharts.Chart(<Highcharts.Options> {
        responsive: responsiveOptions
    });
}

function test_SeriesObject() {
    const series = <Highcharts.SeriesObject> $('#container').highcharts().get('series1');
    series.addPoint(0);
    series.addPoint([0, 0]);
    series.addPoint({});
    series.addPoint({}, false);
    series.addPoint({}, false, true);
    series.addPoint({}, false, true, false);
    series.addPoint({}, false, true, { duration: 50 });
    const chart = series.chart;
    const data = series.data;
    series.hide();
    const name = series.name;
    const options = series.options;
    series.remove();
    series.remove(false);
    series.removePoint(0);
    series.removePoint(0, false);
    series.removePoint(0, false, false);
    series.removePoint(0, false, { duration: 50 });
    series.select();
    series.select(true);
    const isSelected = series.selected;
    series.setData([0, 1, 2]);
    series.setData([[0, 0], [1, 1], [2, 2]]);
    series.setData([{}, {}, {}]);
    series.setData([0, 1, 2], false);
    series.setData([0, 1, 2], false, false);
    series.setData([0, 1, 2], false, { duration: 50 });
    series.setData([0, 1, 2], false, false, false);
    series.setVisible();
    series.setVisible(true);
    series.setVisible(true, false);
    series.show();
    const type = series.type;
    series.update({});
    series.update({}, false);
    const visible = series.visible;
    const xAxis = series.xAxis;
    const yAxis = series.yAxis;
}
function test_LegendObject() {
    const legend = $('#container').highcharts().legend;
    legend.update({});
    legend.update({}, false);
}

function test_SeriesDataLabel() {
    $('#container').highcharts({
        title: {
            text: 'Styling data labels by CSS'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr']
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    borderRadius: 2,
                    y: -10,
                    shape: 'callout'
                }
            }
        },

        series: [{
            data: [100, 300, {
                y: 500,
                dataLabels: {
                    className: 'highlight'
                }
            }, 400]
        }]
    });
}

function test_SoftMinSoftMax() {
    // conform example: http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/softmin-softmax/
    const chart: Highcharts.ChartObject = new Highcharts.Chart({
        title: {
            text: 'Y axis softMax is 100'
        },

        subtitle: {
            text: 'Click the button to change data max'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            softMax: 100,
            title: {
                text: 'Percentage'
            }
        },

        series: [{
            data: [0, 1, 0, 2, 3, 5, 8, 5, 15, 14, 25, 54]
        }]
    });

    chart.series[0].data[11].update(120);
}

function test_StyledColorZones() {
    $('#container').highcharts({
        title: {
            text: 'Styled color zones'
        },

        yAxis: {
            min: -10
        },

        plotOptions: {
            series: {
                zones: [{
                    value: 0,
                    className: 'zone-0'
                }, {
                    value: 10,
                    className: 'zone-1'
                }, {
                    className: 'zone-2'
                }],
                threshold: -10
            }
        },

        series: [{
            type: 'areaspline',
            data: [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5]
        }, {
            type: 'column',
            data: [1, 13, 2, -4, 6, 7, 5, 3, 2, -1, 2]
        }]
    });
}

function test_TitleUpdate() {
    // conform example: http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/title-update/
    let i = 1;

    const chart = new Highcharts.Chart({
        subtitle: {
            text: 'Subtitle'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    chart.title.update({ text: 'New title ' + i });
    i += 1;

    chart.subtitle.update({ text: 'New title ' + i });
    i += 1;

    chart.title.update({
        style: {
            color: 'red'
        }
    });
    chart.subtitle.update({
        style: {
            color: 'green'
        }
    });
}

function test_AddAndFireEvent() {
    const chart = $('#container').highcharts();
    const type = 'drilldown';
    const evt = Highcharts.addEvent(chart, type, it => {});
    Highcharts.fireEvent(chart, type);
}

function test_WordCloud() {
    const allDefaults: Highcharts.WordCloudChartSeriesOptions = {};

    // partial wordcloud demo
    const series: Highcharts.WordCloudChartSeriesOptions = {
        type: 'wordcloud',
        data: [],
        name: 'Occurrences',
        rotation: {
            to: 0
        },
        tooltip: {
            headerFormat: null,
            pointFormatter() {
                return `<strong>${this.name}</strong>: Occurrence ${this.weight}`;
            }
        }
    };
}

// Test wrapping the tooltip refresh behavior.
function test_WrapTooltipBehavior() {
    Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', (proceed, points) => {
        // When refresh is called, code inside this wrap is executed.
        // Many prototype functions use this so arrow functions should only be used to replace behaviors.
    });
}
