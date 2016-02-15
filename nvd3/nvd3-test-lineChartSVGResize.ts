﻿/// <reference path="nvd3.d.ts" />
module nvd3_test_lineChartSVGResize {
    nv.addGraph(function () {
        var chart = nv.models.lineChart();
        var fitScreen = false;
        var width = 600;
        var height = 300;
        var zoom = 1;

        chart.useInteractiveGuideline(true);
        chart.xAxis
            .tickFormat(d3.format(',r'));

        chart.lines.dispatch.on("elementClick", function (evt) {
            console.log(evt);
        });

        chart.yAxis
            .axisLabel('Voltage (v)')
            .tickFormat(d3.format(',.2f'));

        d3.select('#chart1 svg')
            .attr('perserveAspectRatio', 'xMinYMid')
            .attr('width', width)
            .attr('height', height)
            .datum(sinAndCos());

        setChartViewBox();
        resizeChart();

        nv.utils.windowResize(resizeChart);

        d3.select('#zoomIn').on('click', zoomIn);
        d3.select('#zoomOut').on('click', zoomOut);


        function setChartViewBox() {
            var w = width * zoom,
                h = height * zoom;

            chart
                .width(w)
                .height(h);

            d3.select('#chart1 svg')
                .attr('viewBox', '0 0 ' + w + ' ' + h)
                .transition().duration(500)
                .call(chart);
        }

        function zoomOut() {
            zoom += .25;
            setChartViewBox();
        }

        function zoomIn() {
            if (zoom <= .5) return;
            zoom -= .25;
            setChartViewBox();
        }

        // This resize simply sets the SVG's dimensions, without a need to recall the chart code
        // Resizing because of the viewbox and perserveAspectRatio settings
        // This scales the interior of the chart unlike the above
        function resizeChart() {
            var container = d3.select('#chart1');
            var svg = container.select('svg');

            if (fitScreen) {
                // resize based on container's width AND HEIGHT
                var windowSize = nv.utils.windowSize();
                svg.attr("width", windowSize.width);
                svg.attr("height", windowSize.height);
            } else {
                // resize based on container's width
                var aspect = chart.width() / chart.height();
                var targetWidth = parseInt(container.style('width'));
                svg.attr("width", targetWidth);
                svg.attr("height", Math.round(targetWidth / aspect));
            }
        }
        return chart;
    });

    function sinAndCos() {
        var sin = [],
            cos = [];

        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: Math.sin(i / 10) });
            cos.push({ x: i, y: .5 * Math.cos(i / 10) });
        }
        return [
            {
                values: sin,
                key: "Sine Wave",
                color: "#ff7f0e"
            },
            {
                values: cos,
                key: "Cosine Wave",
                color: "#2ca02c"
            }
        ];
    }

  
}