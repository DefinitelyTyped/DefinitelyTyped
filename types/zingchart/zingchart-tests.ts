import zingchart from "zingchart/es6";
import { zingchart as zc } from "zingchart/es6/index";
import { ZC } from "zingchart/server/zingchart-nodejs.min.js";

zingchart.ASYNC = true;
zingchart.DEV.CANVASVERSION = 2;
zingchart.FONTSIZE = 14;
ZC.VERSION = "2.9.4";

const chartConfig: zc.graphset[] = [
    {
        type: "grid",
        plotarea: {
            margin: "35 20 20 20",
        },
        options: {
            headerRow: true,
            dataClass: ["fillRed", "fillGreen", "fillBlue", "fillOrange"],
            colLabels: ["First Name", "Last Name", "Birthday", "Country"],
            style: {
                ".td_even": {
                    backgroundColor: "#FBFDFE",
                },
            },
        },
        series: [
            {
                values: ["Jon", "Anderson", "January 25, 1950", "United Kingdom"],
            },
            {
                values: ["Steve", "Hogarth", "January 25, 1950", "United Kingdom"],
            },
            {
                values: ["Jim", "Carrey", "June 12, 1972", "United States"],
            },
            {
                values: ["Paul", "Hogan", "October 22, 1956", "Australia"],
            },
            {
                values: ["Brenden", "Morrow", "January 16, 1979", "Canada"],
            },
            {
                values: ["Kate", "Moss", "January 16, 1974", "United Kingdom"],
            },
            {
                values: ["David", "Chokachi", "January 16, 1968", "United States"],
            },
            {
                values: ["Josie", "Davis", "January 16, 1973", "United Kingdom"],
            },
            {
                values: ["Alex", "Morgan", "July 2, 1989", "United States"],
            },
            {
                values: ["Tom", "Cruise", "July 3, 1962", "United States"],
            },
            {
                values: ["Tony", "Bennett", "August 3, 1926", "United States"],
            },
            {
                values: ["Martha", "Stewart", "August 3, 1941", "United States"],
            },
            {
                values: ["Tom", "Brady", "August 3, 1977", "United States"],
            },
            {
                values: ["Julie", "Bowen", "March 3, 1970", "United States"],
            },
            {
                values: ["Barack", "Obama", "August 4, 1961", "United States"],
            },
        ],
    },
    {
        type: "line",
        x: "15%",
        y: "25%",
        timeZone: 1,
        zoomSnap: true,
        labels: [
            {
                alpha: 0.5,
                text: "testing",
            },
        ],
        plot: {
            animation: {
                effect: 1,
                method: 4,
                sequence: 2,
                speed: 275,
            },
            preview: {},
            "selected-state": {
                "line-color": "red",
            },
            rules: [
                {
                    rule: "%x > 10",
                    tooltip: {
                        htmlMode: false,
                    },
                },
            ],
            tooltip: {
                htmlMode: true,
                text: "Hello world",
                rules: [
                    {
                        rule: "%x > 10",
                        text: "tooltip text",
                    },
                ],
            },
            "value-box": {
                text: "Hello World",
                rules: [
                    {
                        rule: "",
                        visible: false,
                    },
                ],
            },
        },
        options: {
            link: {
                aspect: "arc",
            },
            maxSize: "15px",
            minSize: 5,
            node: {
                type: "circle",
                tooltip: {
                    padding: "8px",
                    borderRadius: "3px",
                },
            },
        },
        "scale-x": {
            itemsOverlap: false,
            label: {
                text: "Days",
            },
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            lineColor: "red",
            offsetStart: "10%",
            step: "3hour",
            transform: {
                type: "date",
            },
        },
        scaleY: {
            autoFit: true,
            zooming: true,
            guide: {
                items: [
                    {
                        borderRadius: 8,
                    },
                    {
                        borderRadius: 2,
                    },
                ],
            },
        },
        scaleY2: {
            autoFit: true,
            zooming: true,
            guide: {
                items: [
                    {
                        borderRadius: 8,
                    },
                    {
                        borderRadius: 2,
                    },
                ],
            },
        },
        scrollXScrollY: {
            bar: {
                alpha: 0.5,
            },
        },
        values: [1, 2, 3],
        zoom: {
            shared: true,
        },
        series: [
            {
                values: [2, 4, 5, 6, 3, 6, 6, 4, 5, 6],
                borderRadius: 3,
                barWidth: "50%",
                legendMarker: {
                    lineStyle: "dotted",
                },
                zIndex: 9999,
            },
        ],
    },
    {
        arrows: [
            {
                alpha: 0,
            },
            {
                backgroundColor: "blue",
            },
        ],
    },
];

zingchart.render({
    id: "myChart",
    data: chartConfig,
});
