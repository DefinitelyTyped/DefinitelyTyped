// Tests that were present in the old 1.1 type declarations
// These tests are copied more or less directly from http://dygraphs.com/tests/

import Dygraph, { dygraphs } from 'dygraphs';

function demo() {
    const g14 = new Dygraph(document.getElementById('div_g14')!, 'data', {
        rollPeriod: 14,
        errorBars: true,
        labelsSeparateLines: true,
    });
}

function twoAxes() {
    const data = [] as number[][];

    const g = new Dygraph(document.getElementById('demodiv')!, data, {
        labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
        series: {
            Y3: {
                axis: 'y2',
            },
            Y4: {
                axis: 'y2',
            },
        },
        axes: {
            y2: {
                // set axis-related properties here
                labelsKMB: true,
            },
            y: {
                axisLabelWidth: 60,
            },
        },
        ylabel: 'Primary y-axis',
        y2label: 'Secondary y-axis',
    });

    const g2 = new Dygraph(document.getElementById('demodiv_y2_primary')!, data, {
        labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
        ylabel: 'Primary y-axis',
        y2label: 'Secondary y-axis',
        series: {
            Y3: {
                axis: 'y2',
            },
            Y4: {
                axis: 'y2',
            },
        },
        axes: {
            y: {
                // set axis-related properties here
                drawGrid: false,
                independentTicks: false,
            },
            y2: {
                // set axis-related properties here
                labelsKMB: true,
                drawGrid: true,
                independentTicks: true,
            },
        },
    });

    const g3 = new Dygraph(document.getElementById('demodiv_two_grids')!, data, {
        labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
        ylabel: 'Primary y-axis',
        y2label: 'Secondary y-axis',
        series: {
            Y3: {
                axis: 'y2',
            },
            Y4: {
                axis: 'y2',
            },
        },
        axes: {
            y2: {
                // set axis-related properties here
                labelsKMB: true,
                drawGrid: true,
                independentTicks: true,
                gridLinePattern: [2, 2],
            },
        },
    });

    const g4 = new Dygraph(document.getElementById('demodiv_one')!, data, {
        labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
        labelsKMB: true,
        ylabel: 'Primary y-axis',
        y2label: 'Secondary y-axis',
    });

    const g5 = new Dygraph(document.getElementById('demodiv_one_right')!, data, {
        labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
        ylabel: 'Primary y-axis',
        y2label: 'Secondary y-axis',
        series: {
            Y1: {
                axis: 'y2',
            },
            Y2: {
                axis: 'y2',
            },
            Y3: {
                axis: 'y2',
            },
            Y4: {
                axis: 'y2',
            },
        },
        axes: {
            y: {
                // set axis-related properties here
                drawGrid: false,
                independentTicks: false,
            },
            y2: {
                // set axis-related properties here
                labelsKMB: true,
                drawGrid: true,
                independentTicks: true,
            },
        },
    });

    function update(el: HTMLInputElement) {
        g.updateOptions({ fillGraph: el.checked });
        g2.updateOptions({ fillGraph: el.checked });
        g3.updateOptions({ fillGraph: el.checked });
        g4.updateOptions({ fillGraph: el.checked });
        g5.updateOptions({ fillGraph: el.checked });
    }
}

function perSeries() {
    const data = '1234';
    const g = new Dygraph(document.getElementById('demodiv')!, data, {
        strokeWidth: 2,
        series: {
            parabola: {
                strokeWidth: 0.0,
                drawPoints: true,
                pointSize: 4,
                highlightCircleSize: 6,
            },
            line: {
                strokeWidth: 1.0,
                drawPoints: true,
                pointSize: 1.5,
            },
            'sine wave': {
                strokeWidth: 3,
                highlightCircleSize: 10,
            },
            'sine wave2': {
                strokePattern: [10, 2, 5, 2],
                strokeWidth: 2,
                highlightCircleSize: 3,
            },
        },
    });

    const g2 = new Dygraph(document.getElementById('demodiv2')!, data, {
        legend: 'always',
        strokeWidth: 2,
        series: {
            parabola: {
                strokePattern: null,
                drawPoints: true,
                pointSize: 4,
                highlightCircleSize: 6,
            },
            line: {
                strokePattern: Dygraph.DASHED_LINE,
                strokeWidth: 1.0,
                drawPoints: true,
                pointSize: 1.5,
            },
            'another line': {
                strokePattern: [25, 5],
            },
            'sine wave': {
                strokePattern: Dygraph.DOTTED_LINE,
                strokeWidth: 3,
                highlightCircleSize: 10,
            },
            'sine wave2': {
                strokePattern: Dygraph.DOT_DASH_LINE,
                strokeWidth: 2,
                highlightCircleSize: 3,
            },
        },
    });

    const g3 = new Dygraph(document.getElementById('demodiv3')!, data, {
        strokeWidth: 2,
        series: {
            parabola: {
                strokeWidth: 0.0,
                drawPoints: true,
                pointSize: 4,
                highlightCircleSize: 6,
            },
            line: {
                strokeWidth: 1.0,
                drawPoints: true,
                pointSize: 1.5,
            },
            'sine wave': {
                strokeWidth: 3,
                highlightCircleSize: 10,
            },
            'sine wave2': {
                strokePattern: [10, 2, 5, 2],
                strokeWidth: 2,
                highlightCircleSize: 3,
            },
        },
    });
}

function highlightedRegion() {
    const highlight_start = 0;
    const highlight_end = 0;
    const g = new Dygraph(document.getElementById('div_g')!, [], {
        labels: ['X', 'Est.', 'Actual'],
        animatedZooms: true,
        underlayCallback: (canvas, area, g) => {
            const bottom_left = g.toDomCoords(highlight_start, -20);
            const top_right = g.toDomCoords(highlight_end, +20);

            const left = bottom_left[0];
            const right = top_right[0];

            canvas.fillStyle = 'rgba(255, 255, 102, 1.0)';
            canvas.fillRect(left, area.y, right - left, area.h);
        },
    });
}

function makeGraph(className: string, numSeries: number, numRows: number, isStacked: boolean) {
    const div = document.createElement('div');
    div.className = className;
    div.style.display = 'inline-block';
    document.body.appendChild(div);

    const labels = ['x'];
    for (let i = 0; i < numSeries; ++i) {
        let label = '' + i;
        label = `s${'000'.substr(label.length)}${label}`;
        labels[i + 1] = label;
    }
    const g = new Dygraph(div, 'data', {
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
}

function linearRegressionAddSeries() {
    let orig_colors = [] as string[];

    const g = new Dygraph(document.getElementById('demodiv')!, 'data', {
        labels: ['X', 'Y1', 'Y2'],
        drawPoints: true,
        strokeWidth: 0.0,
        drawCallback: (g, is_initial) => {
            if (!is_initial) return;

            orig_colors = g.getColors();
        },
    });
}

function callbacks() {
    const s = document.getElementById('status')!;
    let g = new Dygraph(document.getElementById('demodiv')!, 'data');
    const pts_info = (e: MouseEvent, x: number, pts: readonly dygraphs.Point[], row?: number) => {
        let str = `(${x}) `;
        for (let i = 0; i < pts.length; i++) {
            const p = pts[i];
            if (i) str += ', ';
            str += `${p.name}: ${p.yval}`;
        }

        const { offsetX, offsetY } = e;
        const dataXY = g.toDataCoords(offsetX, offsetY);
        str += `, (${offsetX}, ${offsetY})`;
        str += ` -> (${dataXY[0]}, ${dataXY[1]})`;
        str += `, row #${row}`;

        return str;
    };

    g = new Dygraph(document.getElementById('div_g')!, 'NoisyData', {
        rollPeriod: 7,
        showRoller: true,
        errorBars: true,

        highlightCallback: (e, x, pts, row) => {
            s.innerHTML += `<b>Highlight</b> ${pts_info(e, x, pts, row)}<br/>`;
        },

        unhighlightCallback: e => {
            s.innerHTML += '<b>Unhighlight</b><br/>';
        },

        clickCallback: (e, x, pts) => {
            s.innerHTML += `<b>Click</b> ${pts_info(e, x, pts)}<br/>`;
        },

        pointClickCallback: (e, p) => {
            s.innerHTML += `<b>Point Click</b> ${p.name}: ${p.x}<br/>`;
        },

        zoomCallback: (minX, maxX, yRanges) => {
            s.innerHTML += `<b>Zoom</b> [${minX}, ${maxX}, [${yRanges}]]<br/>`;
        },

        drawCallback: g => {
            s.innerHTML += `<b>Draw</b> [${g.xAxisRange()}]<br/>`;
        },
    });
}

function valueAxisFormatters() {
    function formatDate(d: Date) {
        const yyyy = d.getFullYear();
        const mm = d.getMonth() + 1;
        const dd = d.getDate();
        return `${yyyy}-${(mm < 10 ? '0' : '') + mm + (dd < 10 ? '0' : '') + dd}`;
    }

    const g = new Dygraph(document.getElementById('demodiv')!, 'data', {
        labels: ['Date', 'Y1', 'Y2', 'Y3', 'Y4'],
        width: 640,
        height: 350,
        series: {
            Y3: { axis: 'y2' },
            Y4: { axis: 'y2' },
        },
        axes: {
            x: {
                valueFormatter: ms => {
                    return `xvf(${formatDate(new Date(ms))})`;
                },
                axisLabelFormatter: d => {
                    return `xalf(${formatDate(d as Date)})`;
                },
                pixelsPerLabel: 100,
                axisLabelWidth: 100,
            },
            y: {
                valueFormatter: y => {
                    return `yvf(${y.toPrecision(2)})`;
                },
                axisLabelFormatter: y => {
                    return `yalf(${(y as number).toPrecision(2)})`;
                },
                axisLabelWidth: 100,
            },
            y2: {
                valueFormatter: y2 => {
                    return `y2vf(${y2.toPrecision(2)})`;
                },
                axisLabelFormatter: y2 => {
                    return `y2alf(${(y2 as number).toPrecision(2)})`;
                },
            },
        },
    });
}

function annotation() {
    const eventDiv = document.getElementById('events')!;
    function nameAnnotation(ann: dygraphs.Annotation) {
        return `(${ann.series}, ${ann.x})`;
    }

    const annotations = [] as dygraphs.Annotation[];
    let graph_initialized = false;

    const g = new Dygraph(
        document.getElementById('g_div')!,
        () => {
            const zp = (x: number) => {
                if (x < 10) return '0' + x;
                else return '' + x;
            };
            let r = 'date,parabola,line,another line,sine wave\n';
            for (let i = 1; i <= 31; i++) {
                r += '200610' + zp(i);
                r += ',' + 10 * (i * (31 - i));
                r += ',' + 10 * (8 * i);
                r += ',' + 10 * (250 - 8 * i);
                r += ',' + 10 * (125 + 125 * Math.sin(0.3 * i));
                r += '\n';
            }
            return r;
        },
        {
            rollPeriod: 1,
            showRoller: true,
            width: 480,
            height: 320,
            drawCallback: (g, is_initial) => {
                if (is_initial) {
                    graph_initialized = true;
                    if (annotations.length > 0) {
                        g.setAnnotations(annotations);
                    }
                }

                const anns = g.annotations();
                let html = '';
                anns.forEach(ann => {
                    const name = nameAnnotation(ann);
                    html += `<span id='${name}'>`;
                    html += `${name}: ${ann.shortText || '(icon)'}`;
                    html += ` -> ${ann.text}</span><br/>`;
                });
                document.getElementById('list')!.innerHTML = html;
            },
        },
    );

    let last_ann = 0;
    for (let x = 10; x < 15; x += 2) {
        annotations.push({
            series: 'sine wave',
            x: '200610' + x,
            shortText: '' + x,
            text: 'Stock Market Crash ' + x,
        });
        last_ann = x;
    }
    annotations.push({
        series: 'another line',
        x: '20061013',
        icon: 'dollar.png',
        width: 18,
        height: 23,
        tickHeight: 4,
        text: 'Another one',
        cssClass: 'annotation',
        clickHandler: () => {
            document.getElementById('events')!.innerHTML += 'special handler<br/>';
        },
    });
    annotations.push({
        series: 'parabola',
        x: '20061012',
        shortText: 'P',
        text: 'Parabola Annotation at same x-coord',
    });

    if (graph_initialized) {
        g.setAnnotations(annotations);
    }

    function add() {
        const x = last_ann + 2;
        const annnotations = g.annotations();
        annotations.push({
            series: 'line',
            x: '200610' + x,
            shortText: '' + x,
            text: 'Line ' + x,
            tickHeight: 10,
        });
        last_ann = x;
        g.setAnnotations(annotations);
    }

    function bottom(el: HTMLInputElement) {
        let to_bottom = true;
        if (el.value !== 'Shove to bottom') to_bottom = false;

        const anns = g.annotations();

        anns.map(ann => {
            ann.attachAtBottom = to_bottom;

            return ann;
        });
        g.setAnnotations(anns);

        el.value = to_bottom ? 'Lift back up' : 'Shove to bottom';
    }

    let saveBg = '';
    let num = 0;
    g.updateOptions({
        annotationClickHandler: (ann, point, dg, event) => {
            eventDiv.innerHTML += `click: ${nameAnnotation(ann)} <br/>`;
        },
        annotationDblClickHandler: (ann, point, dg, event) => {
            eventDiv.innerHTML += `dblclick: ${nameAnnotation(ann)} <br/>`;
        },
        annotationMouseOverHandler: (ann, point, dg, event) => {
            document.getElementById(nameAnnotation(ann))!.style.fontWeight = 'bold';
            saveBg = ann.div!.style.backgroundColor;
            ann.div!.style.backgroundColor = '#ddd';
        },
        annotationMouseOutHandler: (ann, point, dg, event) => {
            document.getElementById(nameAnnotation(ann))!.style.fontWeight = 'normal';
            ann.div!.style.backgroundColor = saveBg;
        },

        pointClickCallback: (event, p) => {
            // Check if the point is already annotated.
            if (p.annotation) return;

            // If not, add one.
            const ann = {
                series: p.name,
                xval: p.xval,
                shortText: '' + num,
                text: 'Annotation #' + num,
            };
            const anns = g.annotations();
            anns.push(ann);
            g.setAnnotations(anns);

            num++;
        },
    });
}

function valueRangeTest() {
    new Dygraph(document.getElementById('valueRange-test')!, [], {
        axes: {
            x: { valueRange: [0, 100] },
            y: { valueRange: [0, null] },
            y2: { valueRange: null },
        },
    });
}

function resize() {
    const d = new Dygraph(document.getElementById('demo')!, 'dummy-data', {});
    d.resize();
    d.resize(300, 200);
}
