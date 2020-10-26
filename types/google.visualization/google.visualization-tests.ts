

function test_arrayToDataTable() {
    var array = [
        ['City', 'Population', 'Area'],
        ['Rome', 2761477, 1285.31],
        ['Milan', 1324110, 181.76],
        ['Naples', 959574, 117.27],
        ['Turin', 907563, 130.17],
        ['Palermo', 655875, 158.9],
        ['Genoa', 607906, 243.60],
        ['Bologna', 380181, 140.7],
        ['Florence', 371282, 102.41],
        ['Fiumicino', 67370, 213.44],
        ['Anzio', 52192, 43.43],
        ['Ciampino', 38262, 11],
    ];

    var dataTable = google.visualization.arrayToDataTable(array);
}

function test_ctorDataTable() {
    var dataTable = new google.visualization.DataTable();
    return dataTable;
}

function test_dataTableAddColumn() {
    var dataTable = test_ctorDataTable();
    dataTable.addColumn('string', 'First Column');
    dataTable.addColumn('number', 'Second Column');
}

function test_dataTableAddRow() {
    var dataTable = test_ctorDataTable();
    dataTable.addRow(['row1', 6]);
    dataTable.addRow(['row2', -1]);
    dataTable.addRow(['row3', 0]);
}

function test_geoChart() {
    var data = google.visualization.arrayToDataTable([
        ['Country',   'Population', 'Area Percentage'],
        ['France',  65700000, 50],
        ['Germany', 81890000, 27],
        ['Poland',  38540000, 23],
    ]);

    var options = {
        sizeAxis: { minValue: 0, maxValue: 100 },
        region: '155', // Western Europe
        displayMode: 'markers',
        defaultColor: '#ffffff',
        colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.GeoChart(container);
        chart.draw(data, options);
    }
}

function test_scatterChart() {
    var data = google.visualization.arrayToDataTable([
        ['Age', 'Weight'],
        [ 8,      12],
        [ 4,      5.5],
        [ 11,     14],
        [ 4,      5],
        [ 3,      3.5],
        [ 6.5,    7]
    ]);

    var options: google.visualization.ScatterChartOptions = {
        title: 'Age vs. Weight comparison',
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.ScatterChart(container);
        chart.draw(data, options);
    }
}

function test_barChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options: google.visualization.BarChartOptions = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" }
    };
    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.BarChart(container);
        chart.draw(data, options);
    }
}

function test_histogram() {
    var data = google.visualization.arrayToDataTable([
        ['Dinosaur', 'Length'],
        ['Acrocanthosaurus (top-spined lizard)', 12.2],
        ['Albertosaurus (Alberta lizard)', 9.1],
        ['Allosaurus (other lizard)', 12.2],
        ['Apatosaurus (deceptive lizard)', 22.9],
        ['Archaeopteryx (ancient wing)', 0.9],
        ['Argentinosaurus (Argentina lizard)', 36.6],
        ['Baryonyx (heavy claws)', 9.1],
        ['Brachiosaurus (arm lizard)', 30.5],
        ['Ceratosaurus (horned lizard)', 6.1],
        ['Coelophysis (hollow form)', 2.7],
        ['Compsognathus (elegant jaw)', 0.9],
        ['Deinonychus (terrible claw)', 2.7],
        ['Diplodocus (double beam)', 27.1],
        ['Dromicelomimus (emu mimic)', 3.4],
        ['Gallimimus (fowl mimic)', 5.5],
        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
        ['Megalosaurus (big lizard)', 7.9],
        ['Microvenator (small hunter)', 1.2],
        ['Ornithomimus (bird mimic)', 4.6],
        ['Oviraptor (egg robber)', 1.5],
        ['Plateosaurus (flat lizard)', 7.9],
        ['Sauronithoides (narrow-clawed lizard)', 2.0],
        ['Seismosaurus (tremor lizard)', 45.7],
        ['Spinosaurus (spiny lizard)', 12.2],
        ['Supersaurus (super lizard)', 30.5],
        ['Tyrannosaurus (tyrant lizard)', 15.2],
        ['Ultrasaurus (ultra lizard)', 30.5],
        ['Velociraptor (swift robber)', 1.8]]);

    var options: google.visualization.HistogramOptions = {
        title: 'Lengths of dinosaurs, in meters',
        legend: { position: 'none' }
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.Histogram(container);
        chart.draw(data, options);
    }
}

function test_areaChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
    ]);

    var options:google.visualization.AreaChartOptions = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        annotations: {
            textStyle: {
                bold: true,
                italic: true,
                color: "black"
            }
        }
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.AreaChart(container);
        chart.draw(data, options);
    }
}

function test_steppedAreaChart() {
    var data = google.visualization.arrayToDataTable([
        ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
        ['Alfred Hitchcock (1935)', 8.4,         7.9],
        ['Ralph Thomas (1959)',     6.9,         6.5],
        ['Don Sharp (1978)',        6.5,         6.4],
        ['James Hawes (2008)',      4.4,         6.2]
    ]);

    var options = {
        title: 'The decline of \'The 39 Steps\'',
        vAxis: {title: 'Accumulated Rating'},
        isStacked: true
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.SteppedAreaChart(container);
        chart.draw(data, options);
    }
}

function test_lineChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
    ]);

    var options = {
        title: 'Company Performance'
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.LineChart(container);
        chart.draw(data, options);
    }
}

function test_pieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.PieChart(container);
        chart.draw(data, options);
    }
}

function test_bubbleChart() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
        ['CAN',    80.66,              1.67,      'North America',  33739900],
        ['DEU',    79.84,              1.36,      'Europe',         81902307],
        ['DNK',    78.6,               1.84,      'Europe',         5523095],
        ['EGY',    72.73,              2.78,      'Middle East',    79716203],
        ['GBR',    80.05,              2,         'Europe',         61801570],
        ['IRN',    72.49,              1.7,       'Middle East',    73137148],
        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
        ['ISR',    81.55,              2.96,      'Middle East',    7485600],
        ['RUS',    68.6,               1.54,      'Europe',         141850000],
        ['USA',    78.09,              2.05,      'North America',  307007000]
    ]);

    var options = {
        title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
        hAxis: {title: 'Life Expectancy'},
        vAxis: {title: 'Fertility Rate'},
        bubble: {textStyle: {fontSize: 11}}
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.BubbleChart(container);
        chart.draw(data, options);
    }
}

function test_treemap() {
    // Create and populate the data table.
    var data = google.visualization.arrayToDataTable([
        ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
        ['Global',    null,                 0,                               0],
        ['America',   'Global',             0,                               0],
        ['Europe',    'Global',             0,                               0],
        ['Asia',      'Global',             0,                               0],
        ['Australia', 'Global',             0,                               0],
        ['Africa',    'Global',             0,                               0],
        ['Brazil',    'America',            11,                              10],
        ['USA',       'America',            52,                              31],
        ['Mexico',    'America',            24,                              12],
        ['Canada',    'America',            16,                              -23],
        ['France',    'Europe',             42,                              -11],
        ['Germany',   'Europe',             31,                              -2],
        ['Sweden',    'Europe',             22,                              -13],
        ['Italy',     'Europe',             17,                              4],
        ['UK',        'Europe',             21,                              -5],
        ['China',     'Asia',               36,                              4],
        ['Japan',     'Asia',               20,                              -12],
        ['India',     'Asia',               40,                              63],
        ['Laos',      'Asia',               4,                               34],
        ['Mongolia',  'Asia',               1,                               -5],
        ['Israel',    'Asia',               12,                              24],
        ['Iran',      'Asia',               18,                              13],
        ['Pakistan',  'Asia',               11,                              -52],
        ['Egypt',     'Africa',             21,                              0],
        ['S. Africa', 'Africa',             30,                              43],
        ['Sudan',     'Africa',             12,                              2],
        ['Congo',     'Africa',             10,                              12],
        ['Zaire',     'Africa',             8,                               10]
    ]);

    // Create and draw the visualization.
    var container = document.getElementById('chart_div');
    if (container) {
        var tree = new google.visualization.TreeMap(container);
        tree.draw(data, {
            minColor: '#f00',
            midColor: '#ddd',
            maxColor: '#0d0',
            headerHeight: 15,
            fontColor: 'black',
            showScale: true});
    }
}

function test_table() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
        ['Mike',  {v: 10000, f: '$10,000'}, true],
        ['Jim',   {v:8000,   f: '$8,000'},  false],
        ['Alice', {v: 12500, f: '$12,500'}, true],
        ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]);

    var container = document.getElementById('chart_div');
    if (container) {
        var table = new google.visualization.Table(container);
        table.draw(data, {showRowNumber: true});
    }
}

function test_timeline() {
    var container = document.getElementById('example1');

    if (container) {
        var chart = new google.visualization.Timeline(container);

        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        dataTable.addRows([
            [ 'Washington', new Date(1789, 3, 29), new Date(1797, 2, 3) ],
            [ 'Adams',      new Date(1797, 2, 3),  new Date(1801, 2, 3) ],
            [ 'Jefferson',  new Date(1801, 2, 3),  new Date(1809, 2, 3) ]]);

        chart.draw(dataTable);
    }
}

function test_candlestickChart() {
    var data = google.visualization.arrayToDataTable([
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15]
        // Treat first row as data as well.
    ], true);

    var options: google.visualization.CandlestickChartOptions = {
        legend:'none'
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.CandlestickChart(container);
        chart.draw(data, options);
    }
}

function test_formatter_ArrowFormat() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Department');
    data.addColumn('number', 'Revenues Change');
    data.addRows([
        ['Shoes', { v: 12, f: '12.0%' }],
        ['Sports', { v: -7.3, f: '-7.3%' }],
        ['Toys', { v: 0, f: '0%' }],
        ['Electronics', { v: -2.1, f: '-2.1%' }],
        ['Food', { v: 22, f: '22.0%' }]
    ]);
    data.setFormattedValue(2, 1, null);

    var container = document.getElementById('arrowformat_div');
    if (container) {
        var table = new google.visualization.Table(container);

        var formatter = new google.visualization.ArrowFormat();
        formatter.format(data, 1); // Apply formatter to second column

        table.draw(data, { allowHtml: true, showRowNumber: true });
    }
}

function test_formatter_BarFormat() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Department');
    data.addColumn('number', 'Revenues');
    data.addRows([
        ['Shoes', 10700],
        ['Sports', -15400],
        ['Toys', 12500],
        ['Electronics', -2100],
        ['Food', 22600],
        ['Art', 1100]
    ]);

    var container = document.getElementById('barformat_div');
    if (container) {
        var table = new google.visualization.Table(container);

        var formatter = new google.visualization.BarFormat({ width: 120 });
        formatter.format(data, 1); // Apply formatter to second column

        table.draw(data, { allowHtml: true, showRowNumber: true, width: '100%', height: '100%' });
    }
}

function test_formatter_ColorFormat() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Department');
    data.addColumn('number', 'Revenues');
    data.addRows([
        ['Shoes', 10700],
        ['Sports', -15400],
        ['Toys', 12500],
        ['Electronics', -2100],
        ['Food', 22600],
        ['Art', 1100]
    ]);

    var container = document.getElementById('colorformat_div');
    if (container) {
        var table = new google.visualization.Table(container);

        var formatter = new google.visualization.ColorFormat();
        formatter.addRange(-20000, 0, 'white', 'orange');
        formatter.addRange(20000, null, 'red', '#33ff33');
        formatter.format(data, 1); // Apply formatter to second column

        table.draw(data, { allowHtml: true, showRowNumber: true, width: '100%', height: '100%' });
    }
}

function test_formatter_DateFormat() {
    function drawDateFormatTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Employee Name');
        data.addColumn('date', 'Start Date (Long)');
        data.addColumn('date', 'Start Date (Medium)');
        data.addColumn('date', 'Start Date (Short)');
        data.addRows([
            ['Mike', new Date(2008, 1, 28, 0, 31, 26),
                new Date(2008, 1, 28, 0, 31, 26),
                new Date(2008, 1, 28, 0, 31, 26)],
            ['Bob', new Date(2007, 5, 1, 0),
                new Date(2007, 5, 1, 0),
                new Date(2007, 5, 1, 0)],
            ['Alice', new Date(2006, 7, 16),
                new Date(2006, 7, 16),
                new Date(2006, 7, 16)]
        ]);

        // Create three formatters in three styles.
        var formatter_long = new google.visualization.DateFormat({ formatType: 'long' });
        var formatter_medium = new google.visualization.DateFormat({ formatType: 'medium' });
        var formatter_short = new google.visualization.DateFormat({ formatType: 'short' });

        // Reformat our data.
        formatter_long.format(data, 1);
        formatter_medium.format(data, 2);
        formatter_short.format(data, 3);

        // Draw our data
        var container = document.getElementById('dateformat_div');
        if (container) {
            var table = new google.visualization.Table(container);
            table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
        }
    }
}

function test_formatter_NumberFormat() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Department');
    data.addColumn('number', 'Revenues');
    data.addRows([
        ['Shoes', 10700],
        ['Sports', -15400],
        ['Toys', 12500],
        ['Electronics', -2100],
        ['Food', 22600],
        ['Art', 1100]
    ]);

    var container = document.getElementById('numberformat_div');
    if (container) {
        var table = new google.visualization.Table(container);

        var formatter = new google.visualization.NumberFormat(
            { prefix: '$', negativeColor: 'red', negativeParens: true });
        formatter.format(data, 1); // Apply formatter to second column

        table.draw(data, { allowHtml: true, showRowNumber: true, width: '100%', height: '100%' });
    }
}

function test_formatter_PatternFormat() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Email');
    data.addRows([
        ['John Lennon', 'john@beatles.co.uk'],
        ['Paul McCartney', 'paul@beatles.co.uk'],
        ['George Harrison', 'george@beatles.co.uk'],
        ['Ringo Starr', 'ringo@beatles.co.uk']
    ]);

    var container = document.getElementById('patternformat_div');
    if (container) {
        var table = new google.visualization.Table(container);

        var formatter = new google.visualization.PatternFormat(
            '<a href="mailto:{1}">{0}</a>');
        // Apply formatter and set the formatted value of the first column.
        formatter.format(data, [0, 1]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0]); // Create a view with the first column only.

        table.draw(view, { allowHtml: true, showRowNumber: true, width: '100%', height: '100%' });
    }
}

function test_ChartsLoadWithCallback() {
    google.charts.load('current', {packages: ['corechart', 'table', 'sankey']});

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Element');
        data.addColumn('number', 'Percentage');
        data.addRows([
            ['Nitrogen', 0.78],
            ['Oxygen', 0.21],
            ['Other', 0.01]
        ]);

        // Instantiate and draw the chart.
        var container = document.getElementById('myPieChart');
        if (container) {
            var chart = new google.visualization.PieChart(container);
            chart.draw(data, {});
        }
    }

    google.charts.setOnLoadCallback(drawChart);
}

function test_ChartsLoadWithPromise() {
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Element');
        data.addColumn('number', 'Percentage');
        data.addRows([
            ['Nitrogen', 0.78],
            ['Oxygen', 0.21],
            ['Other', 0.01]
        ]);

        // Instantiate and draw the chart.
        var container = document.getElementById('myPieChart');
        if (container) {
            var chart = new google.visualization.PieChart(container);
            chart.draw(data, {});
        }
    }

    google.charts.load('current', {packages: ['corechart', 'table', 'sankey']}).then(drawChart);
}

function test_ChartAnnotations() {
    var annotations:google.visualization.ChartAnnotations = {
        boxStyle: {
            // Color of the box outline.
            stroke: '#888',
            // Thickness of the box outline.
            strokeWidth: 1,
            // x-radius of the corner curvature.
            rx: 10,
            // y-radius of the corner curvature.
            ry: 10,
            // Attributes for linear gradient fill.
            gradient: {
                // Start color for gradient.
                color1: '#fbf6a7',
                // Finish color for gradient.
                color2: '#33b679',
                // Where on the boundary to start and
                // end the color1/color2 gradient,
                // relative to the upper left corner
                // of the boundary.
                x1: '0%', y1: '0%',
                x2: '100%', y2: '100%',
                // If true, the boundary for x1,
                // y1, x2, and y2 is the box. If
                // false, it's the entire chart.
                useObjectBoundingBoxUnits: true
            }
        },
        datum: {
            stem: {
                color: 'black',
                length: 12
            },
            style: 'point'
        },
        domain: {
            stem: {
                color: 'black',
                length: 5
            },
            style: 'point'
        },
        highContrast: true,
        stem: {
            color: 'black',
            length: 5
        },
        style: 'line',
        textStyle: {
            fontName: 'Times-Roman',
            fontSize: 18,
            bold: true,
            italic: true,
            // The color of the text.
            color: '#871b47',
            // The color of the text outline.
            auraColor: '#d799ae',
            // The transparency of the text.
            opacity: 0.8
        }
    };

    var barAnnotations:google.visualization.ChartBarColumnAnnotations = {
        alwaysOutside: true,
        textStyle: {
            fontName: 'Times-Roman',
            fontSize: 18,
            bold: true
        }
    };
}


function test_OrgChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');

    // For each orgchart box, provide the name, manager, and tooltip to show.
    data.addRows([
        [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'}, '', 'The President'],
        [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'}, 'Mike', 'VP'],
        ['Alice', 'Mike', ''],
        ['Bob', 'Jim', 'Bob Sponge'],
        ['Carol', 'Bob', '']
    ]);

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.OrgChart(container);
        chart.draw(data, {
            allowCollapse: true,
            allowHtml: true,
            nodeClass: 'node',
            selectedNodeClass: 'selected',
            size: 'small'
        });
        chart.collapse(1, true);
        var children = chart.getChildrenIndexes(0);
        var collapsed = chart.getCollapsedNodes();
    }
}

function test_addListeners() {
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'Fruit');
        data.addColumn('number', 'Calories');
        data.addRows([
            ['Apple', 95],
            ['Banana', 105],
            ['Kiwi', 42]
        ]);
    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.LineChart(container);
        google.visualization.events.addOneTimeListener(chart, 'ready', () => {
            console.log('Fruit chart ready');
        });
        google.visualization.events.addListener(chart, 'error', (err: any) => {
            console.log('Fruit chart ' + err.id + ' error: ' + err.message);
        });
        chart.draw(data, {});
    }
}

function test_chartChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance'
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chartWrapper = new google.visualization.ChartWrapper({
            chartType: 'LineChart',
            container,
            options
        });

        var chart = chartWrapper.getChart();

        function isClearable(baseChart: google.visualization.ChartBase): baseChart is google.visualization.ChartBaseClearable {
            return 'clearChart' in baseChart;
        }

        if (chart) {
            if (isClearable(chart)) {
                chart.clearChart()
            }
        }
    }
}

function test_GaugeChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ]);

    var options = {
        title: 'Company Performance'
    };

    var container = document.getElementById('chart_div');
    if (container) {
        var chart = new google.visualization.Gauge(container);

        chart.draw(data, {
            width: 400,
            height: 120,
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5
        });
    }
}
