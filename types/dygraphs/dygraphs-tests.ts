// These tests are copied more or less directly from http://dygraphs.com/tests/ 

function demo() {
    const g14 = new Dygraph(
        document.getElementById("div_g14"),
        'data', {
            rollPeriod: 14,
            errorBars: true,
            labelsDivWidth: 100,
            labelsDivStyles: {
                'boxShadow': '4px 4px 4px #888'
            },
            labelsSeparateLines: true,
        }
    );
}

function twoAxes() {
    var data = [] as number[][];

    var g = new Dygraph(
            document.getElementById("demodiv"),
            data,
            {
                labels: [ 'Date', 'Y1', 'Y2', 'Y3', 'Y4' ],
                series: {
                    'Y3': {
                        axis: 'y2'
                    },
                    'Y4': {
                        axis: 'y2'
                    },
                },
                axes: {
                    y2: {
                        // set axis-related properties here
                        labelsKMB: true
                    },
                    y: {
                        axisLabelWidth: 60
                    }
                },
                ylabel: 'Primary y-axis',
                y2label: 'Secondary y-axis',
            }
    );
    
    var g2 = new Dygraph(
            document.getElementById("demodiv_y2_primary"),
            data,
            {
                labels: [ 'Date', 'Y1', 'Y2', 'Y3', 'Y4' ],
                ylabel: 'Primary y-axis',
                y2label: 'Secondary y-axis',
                series : {
                    'Y3': {
                        axis: 'y2'
                    },
                    'Y4': {
                        axis: 'y2'
                    }
                },
                axes: {
                    y: {
                        // set axis-related properties here
                        drawGrid: false,
                        independentTicks: false
                    },
                    y2: {
                        // set axis-related properties here
                        labelsKMB: true,
                        drawGrid: true,
                        independentTicks: true
                    }
                }
            }
    );
    
    var g3 = new Dygraph(
            document.getElementById("demodiv_two_grids"),
            data,
            {
                labels: [ 'Date', 'Y1', 'Y2', 'Y3', 'Y4' ],
                ylabel: 'Primary y-axis',
                y2label: 'Secondary y-axis',
                series : {
                    'Y3': {
                        axis: 'y2'
                    },
                    'Y4': {
                        axis: 'y2'
                    }
                },
                axes: {
                    y2: {
                        // set axis-related properties here
                        labelsKMB: true,
                        drawGrid: true,
                        independentTicks: true,
                        gridLinePattern: [2,2]
                    }
                }
            }
    );

    var g4 = new Dygraph(
        document.getElementById("demodiv_one"),
        data,
        {
            labels: [ 'Date', 'Y1', 'Y2', 'Y3', 'Y4' ],
            labelsKMB: true,
            ylabel: 'Primary y-axis',
            y2label: 'Secondary y-axis',
        }
    );
    
    var g5 = new Dygraph(
        document.getElementById("demodiv_one_right"),
        data,
        {
            labels: [ 'Date', 'Y1', 'Y2', 'Y3', 'Y4' ],
            ylabel: 'Primary y-axis',
            y2label: 'Secondary y-axis',
            series : {
                'Y1': {
                        axis: 'y2'
                },
                'Y2': {
                    axis: 'y2'
                },
                'Y3': {
                    axis: 'y2'
                },
                'Y4': {
                    axis: 'y2'
                }
            },
            axes: {
                y: {
                    // set axis-related properties here
                    drawGrid: false,
                    independentTicks: false
                },
                y2: {
                    // set axis-related properties here
                    labelsKMB: true,
                    drawGrid: true,
                    independentTicks: true
                }
            }
        }
    );
    
    function update(el: HTMLInputElement) {
        g.updateOptions( { fillGraph: el.checked } );
        g2.updateOptions( { fillGraph: el.checked } );
        g3.updateOptions( { fillGraph: el.checked } );
        g4.updateOptions( { fillGraph: el.checked } );
        g5.updateOptions( { fillGraph: el.checked } );
    }
}

function perSeries() {
    var data = '1234';
    var g = new Dygraph(
                    document.getElementById("demodiv"),
                    data,
                    {
                        strokeWidth: 2,
                        series : {
                            'parabola': {
                                strokeWidth: 0.0,
                                drawPoints: true,
                                pointSize: 4,
                                highlightCircleSize: 6
                            },
                            'line': {
                                strokeWidth: 1.0,
                                drawPoints: true,
                                pointSize: 1.5
                            },
                            'sine wave': {
                                strokeWidth: 3,
                                highlightCircleSize: 10
                            },
                            'sine wave2': {
                                strokePattern: [10, 2, 5, 2],
                                strokeWidth: 2,
                                highlightCircleSize: 3
                            }
                        }
                    }
            );

    var g2 = new Dygraph(
                    document.getElementById("demodiv2"),
                    data,
                    {
                        legend: 'always',
                        strokeWidth: 2,
                        series: {
                            'parabola': {
                                strokePattern: null,
                                drawPoints: true,
                                pointSize: 4,
                                highlightCircleSize: 6
                            },
                            'line': {
                                strokePattern: Dygraph.DASHED_LINE,
                                strokeWidth: 1.0,
                                drawPoints: true,
                                pointSize: 1.5
                            },
                            'another line': {
                                strokePattern: [25, 5]
                            },
                            'sine wave': {
                                strokePattern: Dygraph.DOTTED_LINE,
                                strokeWidth: 3,
                                highlightCircleSize: 10
                            },
                            'sine wave2': {
                                strokePattern: Dygraph.DOT_DASH_LINE,
                                strokeWidth: 2,
                                highlightCircleSize: 3
                            }
                        }
                    }
            );

    var g3 = new Dygraph(
                    document.getElementById("demodiv3"),
                    data,
                    {
                        strokeWidth: 2,
                        series: {
                            'parabola': {
                                strokeWidth: 0.0,
                                drawPoints: true,
                                pointSize: 4,
                                highlightCircleSize: 6
                            },
                            'line': {
                                strokeWidth: 1.0,
                                drawPoints: true,
                                pointSize: 1.5
                            },
                            'sine wave': {
                                strokeWidth: 3,
                                highlightCircleSize: 10
                            },
                            'sine wave2': {
                                strokePattern: [10, 2, 5, 2],
                                strokeWidth: 2,
                                highlightCircleSize: 3
                            }
                        }
                    }
            );
}

function highlightedRegion() {
    var highlight_start = 0, highlight_end = 0;
    var g = new Dygraph(
            document.getElementById("div_g"),
            [],
            {
                labels: ['X', 'Est.', 'Actual'],
                animatedZooms: true,
                underlayCallback: function(canvas, area, g) {
                    var bottom_left = g.toDomCoords(highlight_start, -20);
                    var top_right = g.toDomCoords(highlight_end, +20);

                    var left = bottom_left[0];
                    var right = top_right[0];

                    canvas.fillStyle = "rgba(255, 255, 102, 1.0)";
                    canvas.fillRect(left, area.y, right - left, area.h);
                }

            }
    );
}

function makeGraph(className: string, numSeries: number, numRows: number, isStacked: boolean) {
    var div = document.createElement('div');
    div.className = className;
    div.style.display = 'inline-block';
    document.body.appendChild(div);

    var labels = ['x'];
    for (var i = 0; i < numSeries; ++i) {
        var label = '' + i;
        label = 's' + '000'.substr(label.length) + label;
        labels[i + 1] = label;
    }
    var g = new Dygraph(
            div,
            'data',
            {
                width: 480,
                height: 320,
                labels: labels.slice(),
                stackedGraph: isStacked,

                highlightCircleSize: 2,
                strokeWidth: 1,
                strokeBorderWidth: isStacked ? null : 1,

                highlightSeriesOpts: {
                    strokeWidth: 3,
                    strokeBorderWidth: 1,
                    highlightCircleSize: 5,
                },
            });
    g.setSelection(false, 's005');
};

function linearRegressionAddSeries() {
    var labels = ['X', 'Y1', 'Y2'];
    var orig_colors = [] as string[];

    var g = new Dygraph(
                            document.getElementById("demodiv"),
                            'data',
                            {
                                labels: labels,
                                drawPoints: true,
                                strokeWidth: 0.0,
                                drawCallback: function(g, is_initial) {
                                    if (!is_initial) return;
                                    var c = g.getColors();
                                    for (var i = 0; i < c.length; i++) orig_colors.push(c[i]);
                                }
                            }
                    );
}

function callbacks() {
    var s = document.getElementById("status");
    var g: Dygraph = null;
    var pts_info = function(e: MouseEvent, x: number, pts: dygraphs.Point[], row?: number) {
        var str = "(" + x + ") ";
        for (var i = 0; i < pts.length; i++) {
            var p = pts[i];
            if (i) str += ", ";
            str += p.name + ": " + p.yval;
        }

        var x = e.offsetX;
        var y = e.offsetY;
        var dataXY = g.toDataCoords(x, y);
        str += ", (" + x + ", " + y + ")";
        str += " -> (" + dataXY[0] + ", " + dataXY[1] + ")";
        str += ", row #"+row;

        return str;
    };

    g = new Dygraph(
                document.getElementById("div_g"),
                'NoisyData', {
                    rollPeriod: 7,
                    showRoller: true,
                    errorBars: true,

                    highlightCallback: function(e, x, pts, row) {
                        s.innerHTML += "<b>Highlight</b> " + pts_info(e,x,pts,row) + "<br/>";
                    },

                    unhighlightCallback: function(e) {
                        s.innerHTML += "<b>Unhighlight</b><br/>";
                    },

                    clickCallback: function(e, x, pts) {
                        s.innerHTML += "<b>Click</b> " + pts_info(e,x,pts) + "<br/>";
                    },

                    pointClickCallback: function(e, p) {
                        s.innerHTML += "<b>Point Click</b> " + p.name + ": " + p.x + "<br/>";
                    },

                    zoomCallback: function(minX, maxX, yRanges) {
                        s.innerHTML += "<b>Zoom</b> [" + minX + ", " + maxX + ", [" + yRanges + "]]<br/>";
                    },

                    drawCallback: function(g) {
                        s.innerHTML += "<b>Draw</b> [" + g.xAxisRange() + "]<br/>";
                    }
                }
            );
}

function valueAxisFormatters() {
    function formatDate(d: Date) {
                var yyyy = d.getFullYear(),
                        mm = d.getMonth() + 1,
                        dd = d.getDate();
                return yyyy + '-' + (mm < 10 ? '0' : '') + mm + (dd < 10 ? '0' : '') + dd;
            }

    var g = new Dygraph(
            document.getElementById("demodiv"),
            'data',
            {
                labels: [ 'Date', 'Y1', 'Y2', 'Y3', 'Y4' ],
                width: 640,
                height: 350,
                series: {
                    'Y3': { axis: 'y2' },
                    'Y4': { axis: 'y2' }
                },
                axes: {
                    x: {
                        valueFormatter: function(ms) {
                            return 'xvf(' + formatDate(new Date(ms)) + ')';
                        },
                        axisLabelFormatter: function(d: Date) {
                            return 'xalf(' + formatDate(d) + ')';
                        },
                        pixelsPerLabel: 100,
                        axisLabelWidth: 100,
                    },
                    y: {
                        valueFormatter: function(y) {
                            return 'yvf(' + y.toPrecision(2) + ')';
                        },
                        axisLabelFormatter: function(y: number) {
                            return 'yalf(' + y.toPrecision(2) + ')';
                        },
                        axisLabelWidth: 100,
                    },
                    y2: {
                        valueFormatter: function(y2) {
                            return 'y2vf(' + y2.toPrecision(2) + ')';
                        },
                        axisLabelFormatter: function(y2: number) {
                            return 'y2alf(' + y2.toPrecision(2) + ')';
                        }
                    }
                }
            });
}

function annotation() {
var eventDiv = document.getElementById("events");
    function nameAnnotation(ann: dygraphs.Annotation) {
        return "(" + ann.series + ", " + ann.x + ")";
    }

    var annotations = [] as dygraphs.Annotation[];
    var graph_initialized = false;

    var g = new Dygraph(
                    document.getElementById("g_div"),
                    function() {
                        var zp = function(x: number) { if (x < 10) return "0"+x; else return ''+x; };
                        var r = "date,parabola,line,another line,sine wave\n";
                        for (var i=1; i<=31; i++) {
                            r += "200610" + zp(i);
                            r += "," + 10*(i*(31-i));
                            r += "," + 10*(8*i);
                            r += "," + 10*(250 - 8*i);
                            r += "," + 10*(125 + 125 * Math.sin(0.3*i));
                            r += "\n";
                        }
                        return r;
                    },
                    {
                        rollPeriod: 1,
                        showRoller: true,
                        width: 480,
                        height: 320,
                        drawCallback: function(g, is_initial) {
                            if (is_initial) {
                                graph_initialized = true;
                                if (annotations.length > 0) {
                                    g.setAnnotations(annotations);
                                }
                            }

                            var ann = g.annotations();
                            var html = "";
                            for (var i = 0; i < ann.length; i++) {
                                var name = nameAnnotation(ann[i]);
                                html += "<span id='" + name + "'>"
                                html += name + ": " + (ann[i].shortText || '(icon)')
                                html += " -> " + ann[i].text + "</span><br/>";
                            }
                            document.getElementById("list").innerHTML = html;
                        }
                    }
            );

    var last_ann = 0;
    for (var x = 10; x < 15; x += 2) {
        annotations.push( {
            series: 'sine wave',
            x: "200610" + x,
            shortText: '' + x,
            text: 'Stock Market Crash ' + x
        } );
        last_ann = x;
    }
    annotations.push( {
        series: 'another line',
        x: "20061013",
        icon: 'dollar.png',
        width: 18,
        height: 23,
        tickHeight: 4,
        text: 'Another one',
        cssClass: 'annotation',
        clickHandler: function() {
            document.getElementById("events").innerHTML += "special handler<br/>";
        }
    } );
    annotations.push( {
        series: 'parabola',
        x: '20061012',
        shortText: 'P',
        text: 'Parabola Annotation at same x-coord'
    } );

    if (graph_initialized) {
        g.setAnnotations(annotations);
    }

    function add() {
        var x = last_ann + 2;
        var annnotations = g.annotations();
        annotations.push({
            series: 'line',
            x: "200610" + x,
            shortText: ''+x,
            text: 'Line ' + x,
            tickHeight: 10
        } );
        last_ann = x;
        g.setAnnotations(annotations);
    }

    function bottom(el: HTMLInputElement) {
        var to_bottom = true;
        if (el.value != 'Shove to bottom') to_bottom = false;

        var anns = g.annotations();
        for (var i = 0; i < anns.length; i++) {
            anns[i].attachAtBottom = to_bottom;
        }
        g.setAnnotations(anns);

        if (to_bottom) {
            el.value = 'Lift back up';
        } else {
            el.value = 'Shove to bottom';
        }
    }

    var saveBg = '';
    var num = 0;
    g.updateOptions( {
        annotationClickHandler: function(ann, point, dg, event) {
            eventDiv.innerHTML += "click: " + nameAnnotation(ann) + "<br/>";
        },
        annotationDblClickHandler: function(ann, point, dg, event) {
            eventDiv.innerHTML += "dblclick: " + nameAnnotation(ann) + "<br/>";
        },
        annotationMouseOverHandler: function(ann, point, dg, event) {
            document.getElementById(nameAnnotation(ann)).style.fontWeight = 'bold';
            saveBg = ann.div.style.backgroundColor;
            ann.div.style.backgroundColor = '#ddd';
        },
        annotationMouseOutHandler: function(ann, point, dg, event) {
            document.getElementById(nameAnnotation(ann)).style.fontWeight = 'normal';
            ann.div.style.backgroundColor = saveBg;
        },

        pointClickCallback: function(event, p) {
            // Check if the point is already annotated.
            if (p.annotation) return;

            // If not, add one.
            var ann = {
                series: p.name,
                xval: p.xval,
                shortText: '' + num,
                text: "Annotation #" + num
            };
            var anns = g.annotations();
            anns.push(ann);
            g.setAnnotations(anns);

            num++;
        }
    });
}
