﻿/// <reference path="nvd3.d.ts" />
module nvd3_test_candlestick {
    var data = [{
        values: [
            { "date": 15854, "open": 165.42, "high": 165.8, "low": 164.34, "close": 165.22, "volume": 160363400, "adjusted": 164.35 },
            { "date": 15855, "open": 165.35, "high": 166.59, "low": 165.22, "close": 165.83, "volume": 107793800, "adjusted": 164.96 },
            { "date": 15856, "open": 165.37, "high": 166.31, "low": 163.13, "close": 163.45, "volume": 176850100, "adjusted": 162.59 },
            { "date": 15859, "open": 163.83, "high": 164.46, "low": 162.66, "close": 164.35, "volume": 168390700, "adjusted": 163.48 },
            { "date": 15860, "open": 164.44, "high": 165.1, "low": 162.73, "close": 163.56, "volume": 157631500, "adjusted": 162.7 },
            { "date": 15861, "open": 163.09, "high": 163.42, "low": 161.13, "close": 161.27, "volume": 211737800, "adjusted": 160.42 },
            { "date": 15862, "open": 161.2, "high": 162.74, "low": 160.25, "close": 162.73, "volume": 200225500, "adjusted": 161.87 },
            { "date": 15863, "open": 163.85, "high": 164.95, "low": 163.14, "close": 164.8, "volume": 188337800, "adjusted": 163.93 },
            { "date": 15866, "open": 165.31, "high": 165.4, "low": 164.37, "close": 164.8, "volume": 105667100, "adjusted": 163.93 },
            { "date": 15867, "open": 163.3, "high": 164.54, "low": 162.74, "close": 163.1, "volume": 159505400, "adjusted": 162.24 },
            { "date": 15868, "open": 164.22, "high": 164.39, "low": 161.6, "close": 161.75, "volume": 177361500, "adjusted": 160.9 },
            { "date": 15869, "open": 161.66, "high": 164.5, "low": 161.3, "close": 164.21, "volume": 163587800, "adjusted": 163.35 },
            { "date": 15870, "open": 164.03, "high": 164.67, "low": 162.91, "close": 163.18, "volume": 141197500, "adjusted": 162.32 },
            { "date": 15873, "open": 164.29, "high": 165.22, "low": 163.22, "close": 164.44, "volume": 136295600, "adjusted": 163.57 },
            { "date": 15874, "open": 164.53, "high": 165.99, "low": 164.52, "close": 165.74, "volume": 114695600, "adjusted": 164.87 },
            { "date": 15875, "open": 165.6, "high": 165.89, "low": 163.38, "close": 163.45, "volume": 206149500, "adjusted": 162.59 },
            { "date": 15876, "open": 161.86, "high": 163.47, "low": 158.98, "close": 159.4, "volume": 321255900, "adjusted": 158.56 },
            { "date": 15877, "open": 159.64, "high": 159.76, "low": 157.47, "close": 159.07, "volume": 271956800, "adjusted": 159.07 },
            { "date": 15880, "open": 157.41, "high": 158.43, "low": 155.73, "close": 157.06, "volume": 222329000, "adjusted": 157.06 },
            { "date": 15881, "open": 158.48, "high": 160.1, "low": 157.42, "close": 158.57, "volume": 162262200, "adjusted": 158.57 },
            { "date": 15882, "open": 159.87, "high": 160.5, "low": 159.25, "close": 160.14, "volume": 134848000, "adjusted": 160.14 },
            { "date": 15883, "open": 161.1, "high": 161.82, "low": 160.95, "close": 161.08, "volume": 129483700, "adjusted": 161.08 },
            { "date": 15884, "open": 160.63, "high": 161.4, "low": 159.86, "close": 160.42, "volume": 160402900, "adjusted": 160.42 },
            { "date": 15887, "open": 161.26, "high": 162.48, "low": 161.08, "close": 161.36, "volume": 131954800, "adjusted": 161.36 },
            { "date": 15888, "open": 161.12, "high": 162.3, "low": 160.5, "close": 161.21, "volume": 154863700, "adjusted": 161.21 },
            { "date": 15889, "open": 160.48, "high": 161.77, "low": 160.22, "close": 161.28, "volume": 75216400, "adjusted": 161.28 },
            { "date": 15891, "open": 162.47, "high": 163.08, "low": 161.3, "close": 163.02, "volume": 122416900, "adjusted": 163.02 },
            { "date": 15894, "open": 163.86, "high": 164.39, "low": 163.08, "close": 163.95, "volume": 108092500, "adjusted": 163.95 },
            { "date": 15895, "open": 164.98, "high": 165.33, "low": 164.27, "close": 165.13, "volume": 119298000, "adjusted": 165.13 },
            { "date": 15896, "open": 164.97, "high": 165.75, "low": 164.63, "close": 165.19, "volume": 121410100, "adjusted": 165.19 },
            { "date": 15897, "open": 167.11, "high": 167.61, "low": 165.18, "close": 167.44, "volume": 135592200, "adjusted": 167.44 },
            { "date": 15898, "open": 167.39, "high": 167.93, "low": 167.13, "close": 167.51, "volume": 104212700, "adjusted": 167.51 },
            { "date": 15901, "open": 167.97, "high": 168.39, "low": 167.68, "close": 168.15, "volume": 69450600, "adjusted": 168.15 },
            { "date": 15902, "open": 168.26, "high": 168.36, "low": 167.07, "close": 167.52, "volume": 88702100, "adjusted": 167.52 },
            { "date": 15903, "open": 168.16, "high": 168.48, "low": 167.73, "close": 167.95, "volume": 92873900, "adjusted": 167.95 },
            { "date": 15904, "open": 168.31, "high": 169.27, "low": 168.2, "close": 168.87, "volume": 103620100, "adjusted": 168.87 },
            { "date": 15905, "open": 168.52, "high": 169.23, "low": 168.31, "close": 169.17, "volume": 103831700, "adjusted": 169.17 },
            { "date": 15908, "open": 169.41, "high": 169.74, "low": 169.01, "close": 169.5, "volume": 79428600, "adjusted": 169.5 },
            { "date": 15909, "open": 169.8, "high": 169.83, "low": 169.05, "close": 169.14, "volume": 80829700, "adjusted": 169.14 },
            { "date": 15910, "open": 169.79, "high": 169.86, "low": 168.18, "close": 168.52, "volume": 112914000, "adjusted": 168.52 },
            { "date": 15911, "open": 168.22, "high": 169.08, "low": 167.94, "close": 168.93, "volume": 111088600, "adjusted": 168.93 },
            { "date": 15912, "open": 168.22, "high": 169.16, "low": 167.52, "close": 169.11, "volume": 107814600, "adjusted": 169.11 },
            { "date": 15915, "open": 168.68, "high": 169.06, "low": 168.11, "close": 168.59, "volume": 79695000, "adjusted": 168.59 },
            { "date": 15916, "open": 169.1, "high": 169.28, "low": 168.19, "close": 168.59, "volume": 85209600, "adjusted": 168.59 },
            { "date": 15917, "open": 168.94, "high": 169.85, "low": 168.49, "close": 168.71, "volume": 142388700, "adjusted": 168.71 },
            { "date": 15918, "open": 169.99, "high": 170.81, "low": 169.9, "close": 170.66, "volume": 110438400, "adjusted": 170.66 },
            { "date": 15919, "open": 170.28, "high": 170.97, "low": 170.05, "close": 170.95, "volume": 91116700, "adjusted": 170.95 },
            { "date": 15922, "open": 170.57, "high": 170.96, "low": 170.35, "close": 170.7, "volume": 54072700, "adjusted": 170.7 },
            { "date": 15923, "open": 170.37, "high": 170.74, "low": 169.35, "close": 169.73, "volume": 87495000, "adjusted": 169.73 },
            { "date": 15924, "open": 169.19, "high": 169.43, "low": 168.55, "close": 169.18, "volume": 84854700, "adjusted": 169.18 },
            { "date": 15925, "open": 169.98, "high": 170.18, "low": 168.93, "close": 169.8, "volume": 102181300, "adjusted": 169.8 },
            { "date": 15926, "open": 169.58, "high": 170.1, "low": 168.72, "close": 169.31, "volume": 91757700, "adjusted": 169.31 },
            { "date": 15929, "open": 168.46, "high": 169.31, "low": 168.38, "close": 169.11, "volume": 68593300, "adjusted": 169.11 },
            { "date": 15930, "open": 169.41, "high": 169.9, "low": 168.41, "close": 169.61, "volume": 80806000, "adjusted": 169.61 },
            { "date": 15931, "open": 169.53, "high": 169.8, "low": 168.7, "close": 168.74, "volume": 79829200, "adjusted": 168.74 },
            { "date": 15932, "open": 167.41, "high": 167.43, "low": 166.09, "close": 166.38, "volume": 152931800, "adjusted": 166.38 },
            { "date": 15933, "open": 166.06, "high": 166.63, "low": 165.5, "close": 165.83, "volume": 130868200, "adjusted": 165.83 },
            { "date": 15936, "open": 165.64, "high": 166.21, "low": 164.76, "close": 164.77, "volume": 96437600, "adjusted": 164.77 },
            { "date": 15937, "open": 165.04, "high": 166.2, "low": 164.86, "close": 165.58, "volume": 89294400, "adjusted": 165.58 },
            { "date": 15938, "open": 165.12, "high": 166.03, "low": 164.19, "close": 164.56, "volume": 159530500, "adjusted": 164.56 },
            { "date": 15939, "open": 164.9, "high": 166.3, "low": 164.89, "close": 166.06, "volume": 101471400, "adjusted": 166.06 },
            { "date": 15940, "open": 166.55, "high": 166.83, "low": 165.77, "close": 166.62, "volume": 90888900, "adjusted": 166.62 },
            { "date": 15943, "open": 166.79, "high": 167.3, "low": 165.89, "close": 166, "volume": 89702100, "adjusted": 166 },
            { "date": 15944, "open": 164.36, "high": 166, "low": 163.21, "close": 163.33, "volume": 158619400, "adjusted": 163.33 },
            { "date": 15945, "open": 163.26, "high": 164.49, "low": 163.05, "close": 163.91, "volume": 108113000, "adjusted": 163.91 },
            { "date": 15946, "open": 163.55, "high": 165.04, "low": 163.4, "close": 164.17, "volume": 119200500, "adjusted": 164.17 },
            { "date": 15947, "open": 164.51, "high": 164.53, "low": 163.17, "close": 163.65, "volume": 134560800, "adjusted": 163.65 },
            { "date": 15951, "open": 165.23, "high": 165.58, "low": 163.7, "close": 164.39, "volume": 142322300, "adjusted": 164.39 },
            { "date": 15952, "open": 164.43, "high": 166.03, "low": 164.13, "close": 165.75, "volume": 97304000, "adjusted": 165.75 },
            { "date": 15953, "open": 165.85, "high": 166.4, "low": 165.73, "close": 165.96, "volume": 62930500, "adjusted": 165.96 }
        ]
    }];

    nv.addGraph(function () {
        var chart = nv.models.candlestickBar()
            .x(function (d) { return d['date'] })
            .y(function (d) { return d['close'] });
        d3.select("#chart1 svg")
            .datum(data)
            .transition().duration(500)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });
}