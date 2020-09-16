import * as Chart from 'chart.js';
import * as ChartJsAnnotation from 'chartjs-plugin-annotation';
import moment = require('moment');

Chart.pluginService.register(ChartJsAnnotation);
Chart.pluginService.unregister(ChartJsAnnotation);

const ctx = new CanvasRenderingContext2D();
const chartData = {};

// example from the demo codepen https://codepen.io/compwright/pen/mmQMrZ
const codepenChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Combo Bar Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: true
    },
    annotation: {
      events: ['click'],
      annotations: [
        {
          drawTime: 'afterDatasetsDraw',
          id: 'hline',
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 30,
          borderColor: 'black',
          borderWidth: 5,
          label: {
            backgroundColor: 'red',
            content: 'Test Label',
            enabled: true
          },
          // tslint:disable-next-line:object-literal-shorthand
          onClick: function(e) {
            // The annotation is is bound to the `this` variable
            console.log('Annotation', e.type, this);
          }
        },
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          xMin: 'February',
          xMax: 'April',
          yMin: -30,
          yMax: 30,
          backgroundColor: 'rgba(101, 33, 171, 0.5)',
          borderColor: 'rgb(101, 33, 171)',
          borderWidth: 1,
          onClick(e) {
            console.log('Box', e.type, this);
          }
        }
      ]
    }
  }
});

// examples from github readme
// https://github.com/chartjs/chartjs-plugin-annotation/tree/v0.5.7

const exampleChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
  options: {
    annotation: {
      // Defines when the annotations are drawn.
      // This allows positioning of the annotation relative to the other
      // elements of the graph.
      //
      // Should be one of: afterDraw, afterDatasetsDraw, beforeDatasetsDraw
      // See http://www.chartjs.org/docs/#advanced-usage-creating-plugins
      drawTime: 'afterDatasetsDraw', // (default)

      // Mouse events to enable on each annotation.
      // Should be an array of one or more browser-supported mouse events
      // See https://developer.mozilla.org/en-US/docs/Web/Events
      events: ['click'],

      // Double-click speed in ms used to distinguish single-clicks from
      // double-clicks whenever you need to capture both. When listening for
      // both click and dblclick, click events will be delayed by this
      // amount.
      dblClickSpeed: 350, // ms (default)

      // Array of annotation configuration objects
      // See below for detailed descriptions of the annotation options
      annotations: [{
        drawTime: 'afterDraw', // overrides annotation.drawTime if set
        id: 'a-line-1', // optional
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: '25',
        borderColor: 'red',
        borderWidth: 2,

        // Fires when the user clicks this annotation on the chart
        // (be sure to enable the event in the events array below).
        onClick(e) {
          // `this` is bound to the annotation element
        }
      }]
    }
  }
});

// https://github.com/chartjs/chartjs-plugin-annotation/tree/v0.5.7#line-annotations
const lineAnnotation: ChartJsAnnotation.LineAnnotationOptions = {
  type: 'line',

  // optional drawTime to control layering, overrides global drawTime setting
  drawTime: 'afterDatasetsDraw',

  // optional annotation ID (must be unique)
  id: 'a-line-1',

  // set to 'vertical' to draw a vertical line
  mode: 'horizontal',

  // ID of the scale to bind onto
  scaleID: 'y-axis-0',

  // Data value to draw the line at
  value: 25,

  // Optional value at which the line draw should end
  endValue: 26,

  // Line color
  borderColor: 'red',

  // Line width
  borderWidth: 2,

  // Line dash
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
  borderDash: [2, 2],

  // Line Dash Offset
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
  borderDashOffset: 5,

  label: {
    // Background color of label, default below
    backgroundColor: 'rgba(0,0,0,0.8)',

    // Font family of text, inherits from global
    fontFamily: "sans-serif",

    // Font size of text, inherits from global
    fontSize: 12,

    // Font style of text, default below
    fontStyle: "bold",

    // Font color of text, default below
    fontColor: "#fff",

    // Padding of label to add left/right, default below
    xPadding: 6,

    // Padding of label to add top/bottom, default below
    yPadding: 6,

    // Radius of label rectangle, default below
    cornerRadius: 6,

    // Anchor position of label on line, can be one of: top, bottom, left, right, center. Default below.
    position: "center",

    // Adjustment along x-axis (left-right) of label relative to above number (can be negative)
    // For horizontal lines positioned left or right, negative values move
    // the label toward the edge, and positive values toward the center.
    xAdjust: 0,

    // Adjustment along y-axis (top-bottom) of label relative to above number (can be negative)
    // For vertical lines positioned top or bottom, negative values move
    // the label toward the edge, and positive values toward the center.
    yAdjust: 0,

    // Whether the label is enabled and should be displayed
    enabled: false,

    // Text to display in label - default is null
    content: "Test label"
  },

  // Mouse event handlers - be sure to enable the corresponding events in the
  // annotation events array or the event handler will not be called.
  // See https://developer.mozilla.org/en-US/docs/Web/Events for a list of
  // supported mouse events.
  onMouseenter(e) { },
  onMouseover(e) { },
  onMouseleave(e) { },
  onMouseout(e) { },
  onMousemove(e) { },
  onMousedown(e) { },
  onMouseup(e) { },
  onClick(e) { },
  onDblclick(e) { },
  onContextmenu(e) { },
  onWheel(e) { }
};

// https://github.com/chartjs/chartjs-plugin-annotation/tree/v0.5.7#box-annotations
const boxAnnotation: ChartJsAnnotation.BoxAnnotationOptions = {
  type: 'box',

  // optional drawTime to control layering, overrides global drawTime setting
  drawTime: 'beforeDatasetsDraw',

  // optional annotation ID (must be unique)
  id: 'a-box-1',

  // ID of the X scale to bind onto
  xScaleID: 'x-axis-0',

  // ID of the Y scale to bind onto
  yScaleID: 'y-axis-0',

  // Left edge of the box. in units along the x axis
  xMin: 25,

  // Right edge of the box
  xMax: 40,

  // Top edge of the box in units along the y axis
  yMax: 20,

  // Bottom edge of the box
  yMin: 15,

  // Stroke color
  borderColor: 'red',

  // Stroke width
  borderWidth: 2,

  // Fill color
  backgroundColor: 'green',

  // Mouse event handlers - be sure to enable the corresponding events in the
  // annotation events array or the event handler will not be called.
  // See https://developer.mozilla.org/en-US/docs/Web/Events for a list of
  // supported mouse events.
  onMouseenter(e) { },
  onMouseover(e) { },
  onMouseleave(e) { },
  onMouseout(e) { },
  onMousemove(e) { },
  onMousedown(e) { },
  onMouseup(e) { },
  onClick(e) { },
  onDblclick(e) { },
  onContextmenu(e) { },
  onWheel(e) { }
};

// Date and Moment support
// https://github.com/chartjs/chartjs-plugin-annotation/blob/v0.5.7/samples/line-time-scale.html#L171
const dateBox: ChartJsAnnotation.BoxAnnotationOptions = {
  type: "box",
  xMin: new Date('2020-01-01'),
  xMax: new Date('2020-02-01'),
  yMin: moment('2020-01-01'),
  yMax: moment('2020-02-01'),
};

const annotatedChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
  options: {
    annotation: {
      annotations: [
        lineAnnotation,
        boxAnnotation,
        dateBox
      ]
    }
  }
});
