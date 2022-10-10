import { ZC } from "zingchart/server/zingchart-nodejs.min.js";
import zingchart from "zingchart/es6";
import { zingchart as zc } from 'zingchart/es6/index';

zingchart.ASYNC = true;
zingchart.DEV.CANVASVERSION = 2;
zingchart.FONTSIZE = 14;
ZC.VERSION = '2.9.4';

const chartConfig: zc.graphset[] = [
  {
    type: 'line',
    timeZone: 1,
    zoomSnap: true,
    labels: [{
      alpha: 0.5,
      text: 'testing',
    }],
    plot: {
      animation: {
        effect: 1,
        method: 4,
        sequence: 2,
        speed: 275,
      },
      preview: {},
      'selected-state': {
        'line-color': 'red',
      },
      rules: [{
        rule: '%x > 10',
        tooltip: {
          htmlMode: false,
        },
      }],
      tooltip: {
        htmlMode: true,
        text: 'Hello world',
        rules: [{
          rule: '%x > 10',
          text: 'tooltip text',
        }],
      },
      'value-box': {
        text: 'Hello World',
        rules: [{
          rule: '',
          visible: false,
        }]
      },
    },
    options: {
      link: {
        aspect: 'arc'
      },
      maxSize: 15,
      minSize: 5,
      node: {
        type: 'circle',
        tooltip: {
          padding: '8px',
          borderRadius: '3px',
        }
      }
    },
    'scale-x': {
      itemsOverlap: false,
      label: {
        text: 'Days'
      },
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      lineColor: 'red',
      offsetStart: '10%',
      step: '3hour',
      transform: {
        type: 'date',
      },
    },
    scaleY: {
      autoFit: true,
      zooming: true,
      guide: {
        items: [{
          borderRadius: 8,
        }, {
          borderRadius: 2,
        }],
      },
    },
    scaleY2: {
      autoFit: true,
      zooming: true,
      guide: {
        items: [{
          borderRadius: 8,
        }, {
          borderRadius: 2,
        }],
      },
    },
    scrollXScrollY: {
      bar: {
        alpha: 0.5,
      }
    },
    values: [1, 2, 3],
    zoom: {
      shared: true,
    },
    series: [
      {
        values: [2, 4, 5, 6, 3, 6, 6, 4, 5, 6],
        borderRadius: 3,
        barWidth: '50%',
        legendMarker: {
          lineStyle: 'dotted',
        },
        zIndex: 9999,
      },
    ],
  }, {
    arrows: [{
      alpha: 0,
    }, {
      backgroundColor: 'red',
    }],
  }
];

zingchart.render({
  id: 'myChart',
  data: chartConfig,
});
