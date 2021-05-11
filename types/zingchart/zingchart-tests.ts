import { zingchart, ZC } from "zingchart/server/zingchart-nodejs.min.js";

zingchart.ASYNC = true;
zingchart.DEV.CANVASVERSION = 2;
ZC.VERSION = '2.9.4';

zingchart.render({
    id: 'myChart',
    data: {
        type: 'line',
        series: [
            {
                values: [2, 4, 5, 6, 3, 6, 6, 4, 5, 6],
            },
        ],
        'scale-x': {
            label: {
              text: 'Days'
            },
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        plot: {
            animation: {
              effect: 1,
              method: 4,
              sequence: 2,
              speed: 275,
            }
        },
    },
});
