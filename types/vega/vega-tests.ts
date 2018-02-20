import { Spec } from 'vega'
import { Data } from 'vega/data'

const specs: Spec[] = [
  // https://vega.github.io/editor/#/examples/vega/bar-chart
  {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "width": 400,
    "height": 200,
    "padding": 5,
  
    "data": [
      {
        "name": "table",
        "values": [
          {"category": "A", "amount": 28},
          {"category": "B", "amount": 55},
          {"category": "C", "amount": 43},
          {"category": "D", "amount": 91},
          {"category": "E", "amount": 81},
          {"category": "F", "amount": 53},
          {"category": "G", "amount": 19},
          {"category": "H", "amount": 87}
        ]
      }
    ],
  
    "signals": [
      {
        "name": "tooltip",
        "value": {},
        "on": [
          {"events": "rect:mouseover", "update": "datum"},
          {"events": "rect:mouseout",  "update": "{}"}
        ]
      }
    ],
  
    "scales": [
      {
        "name": "xscale",
        "type": "band",
        "domain": {"data": "table", "field": "category"},
        "range": "width",
        "padding": 0.05,
        "round": true
      },
      {
        "name": "yscale",
        "domain": {"data": "table", "field": "amount"},
        "nice": true,
        "range": "height"
      }
    ],
  
    "axes": [
      { "orient": "bottom", "scale": "xscale" },
      { "orient": "left", "scale": "yscale" }
    ],
  
    "marks": [
      {
        "type": "rect",
        "from": {"data":"table"},
        "encode": {
          "enter": {
            "x": {"scale": "xscale", "field": "category"},
            "width": {"scale": "xscale", "band": 1},
            "y": {"scale": "yscale", "field": "amount"},
            "y2": {"scale": "yscale", "value": 0}
          },
          "update": {
            "fill": {"value": "steelblue"}
          },
          "hover": {
            "fill": {"value": "red"}
          }
        }
      },
      {
        "type": "text",
        "encode": {
          "enter": {
            "align": {"value": "center"},
            "baseline": {"value": "bottom"},
            "fill": {"value": "#333"}
          },
          "update": {
            "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
            "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
            "text": {"signal": "tooltip.amount"},
            "fillOpacity": [
              {"test": "datum === tooltip", "value": 0},
              {"value": 1}
            ]
          }
        }
      }
    ]
  },

  // https://vega.github.io/editor/#/examples/vega/stacked-bar-chart
  {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "width": 500,
    "height": 200,
    "padding": 5,
  
    "data": [
      {
        "name": "table",
        "values": [
          {"x": 0, "y": 28, "c":0}, {"x": 0, "y": 55, "c":1},
          {"x": 1, "y": 43, "c":0}, {"x": 1, "y": 91, "c":1},
          {"x": 2, "y": 81, "c":0}, {"x": 2, "y": 53, "c":1},
          {"x": 3, "y": 19, "c":0}, {"x": 3, "y": 87, "c":1},
          {"x": 4, "y": 52, "c":0}, {"x": 4, "y": 48, "c":1},
          {"x": 5, "y": 24, "c":0}, {"x": 5, "y": 49, "c":1},
          {"x": 6, "y": 87, "c":0}, {"x": 6, "y": 66, "c":1},
          {"x": 7, "y": 17, "c":0}, {"x": 7, "y": 27, "c":1},
          {"x": 8, "y": 68, "c":0}, {"x": 8, "y": 16, "c":1},
          {"x": 9, "y": 49, "c":0}, {"x": 9, "y": 15, "c":1}
        ],
        "transform": [
          {
            "type": "stack",
            "groupby": ["x"],
            "sort": {"field": "c"},
            "field": "y"
          }
        ]
      }
    ],
  
    "scales": [
      {
        "name": "x",
        "type": "band",
        "range": "width",
        "domain": {"data": "table", "field": "x"}
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "nice": true, "zero": true,
        "domain": {"data": "table", "field": "y1"}
      },
      {
        "name": "color",
        "type": "ordinal",
        "range": "category",
        "domain": {"data": "table", "field": "c"}
      }
    ],
  
    "axes": [
      {"orient": "bottom", "scale": "x", "zindex": 1},
      {"orient": "left", "scale": "y", "zindex": 1}
    ],
  
    "marks": [
      {
        "type": "rect",
        "from": {"data": "table"},
        "encode": {
          "enter": {
            "x": {"scale": "x", "field": "x"},
            "width": {"scale": "x", "band": 1, "offset": -1},
            "y": {"scale": "y", "field": "y0"},
            "y2": {"scale": "y", "field": "y1"},
            "fill": {"scale": "color", "field": "c"}
          },
          "update": {
            "fillOpacity": {"value": 1}
          },
          "hover": {
            "fillOpacity": {"value": 0.5}
          }
        }
      }
    ]
  }
]
