﻿/// <reference path="nvd3.d.ts" />
module nvd3_test_timeSeries {
    var data = [{
        values: []
    }];

    var i, x;
    var gap = false;
    var prevVal = 3000;
    var tickCount = 100;
    var probEnterGap = 0.1;
    var probExitGap = 0.2;
    var barTimespan = 30 * 60; // thirty minutes in seconds
    var startOfTime = 1425096000;
    for (i = 0; i < tickCount; i++) {
        x = startOfTime + i * barTimespan;
        if (!gap) {
            if (Math.random() > probEnterGap) {
                prevVal += (Math.random() - 0.5) * 500;
                if (prevVal <= 0) {
                    prevVal = Math.random() * 100;
                }
                data[0].values.push({ x: x * 1000, y: prevVal });
            }
            else {
                gap = true;
            }
        }
        else {
            if (Math.random() < probExitGap) {
                gap = false;
            }
        }
    }

    var chart;

    var halfBarXMin = data[0].values[0].x - barTimespan / 2 * 1000;
    var halfBarXMax = data[0].values[data[0].values.length - 1].x + barTimespan / 2 * 1000;

    function renderChart(location, meaning) {
        nv.addGraph(function () {
            chart = nv.models.historicalBarChart();
            chart
                .xScale(d3.time.scale()) // use a time scale instead of plain numbers in order to get nice round default values in the axis
                .color(['#68c'])
                .forceX([halfBarXMin, halfBarXMax]) // fix half-bar problem on the first and last bars
                .useInteractiveGuideline(true) // check out the css that turns the guideline into this nice thing
                .margin({ "left": 80, "right": 50, "top": 20, "bottom": 30 })
                .duration(0)
                ;

            var tickMultiFormat = d3.time.format.multi([
                ["%-I:%M%p", function (d) { return d.getMinutes(); }], // not the beginning of the hour
                ["%-I%p", function (d) { return d.getHours(); }], // not midnight
                ["%b %-d", function (d) { return d.getDate() != 1; }], // not the first of the month
                ["%b %-d", function (d) { return d.getMonth(); }], // not Jan 1st
                ["%Y", function () { return true; }]
            ]);
            chart.xAxis
                .showMaxMin(false)
                .tickPadding(10)
                .tickFormat(function (d) { return tickMultiFormat(new Date(d)); })
                ;

            chart.yAxis
                .showMaxMin(false)
                .tickFormat(d3.format(",.0f"))
                ;

            var svgElem = d3.select(location);
            svgElem
                .datum(data)
                .transition()
                .call(chart);

            // make our own x-axis tick marks because NVD3 doesn't provide any
            var tickY2 = chart.yAxis.scale().range()[1];
            var lineElems = svgElem
                .select('.nv-x.nv-axis.nvd3-svg')
                .select('.nvd3.nv-wrap.nv-axis')
                .select('g')
                .selectAll('.tick')
                .data(chart.xScale().ticks())
                .append('line')
                .attr('class', 'x-axis-tick-mark')
                .attr('x2', 0)
                .attr('y1', tickY2 + 4)
                .attr('y2', tickY2)
                .attr('stroke-width', 1)
                ;

            // set up the tooltip to display full dates
            var tsFormat = d3.time.format('%b %-d, %Y %I:%M%p');
            var contentGenerator = chart.interactiveLayer.tooltip.contentGenerator();
            var tooltip = chart.interactiveLayer.tooltip;
            tooltip.contentGenerator(function (d) { d.value = d.series[0].data.x; return contentGenerator(d); });
            tooltip.headerFormatter(function (d) { return tsFormat(new Date(d)); });

            // common stuff for the sections below
            var xScale = chart.xScale();
            var xPixelFirstBar = xScale(data[0].values[0].x);
            var xPixelSecondBar = xScale(data[0].values[0].x + barTimespan * 1000);
            var barWidth = xPixelSecondBar - xPixelFirstBar; // number of pixels representing time delta per bar

            // fix the bar widths so they don't overlap when there are gaps
            function fixBarWidths(barSpacingFraction) {
                svgElem
                    .selectAll('.nv-bars')
                    .selectAll('rect')
                    .attr('width', (1 - barSpacingFraction) * barWidth)
                    .attr('transform', function (d, i) {
                        var deltaX = xScale(data[0].values[i].x) - xPixelFirstBar;
                        deltaX += barSpacingFraction / 2 * barWidth;
                        return 'translate(' + deltaX + ', 0)';
                    })
                    ;
            }

            /*
            If you're representing sample measurements spaced a certain time apart, the tick marks should
            be in the middle of the bars and some spacing between bars is recommended to aid with interpretation.
            On the other hand, if you want to represent a quantity measured over a span of time (one bar), you're
            better off placing the ticks on the edge of the bar and leaving no gap in between bars.
            */
            function shiftXAxis() {
                var xAxisElem = svgElem.select('.nv-axis.nv-x');
                var transform = xAxisElem.attr('transform');
                var xShift = -barWidth / 2;
                transform = transform.replace('0,', xShift + ',');
                xAxisElem.attr('transform', transform);
            }

            if (meaning === 'instant') {
                fixBarWidths(0.2);
            }
            else if (meaning === 'timespan') {
                fixBarWidths(0.0);
                shiftXAxis();
            }

            return chart;
        });
    }

    renderChart('#test1', 'instant');
    renderChart('#test2', 'timespan');

    window.setTimeout(function () {
        window.setTimeout(function () {
            document.getElementById('sc-one').style.display = 'block';
            document.getElementById('sc-two').style.display = 'none';
        }, 0);
    }, 0);

    function switchChartStyle(style) {
        if (style === 'instant') {
            document.getElementById('sc-one').style.display = 'block';
            document.getElementById('sc-two').style.display = 'none';
        }
        else if (style === 'timespan') {
            document.getElementById('sc-one').style.display = 'none';
            document.getElementById('sc-two').style.display = 'block';
        }
    }

}