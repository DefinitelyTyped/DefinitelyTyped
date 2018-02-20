import { Spec } from 'vega'

// https://vega.github.io/editor/#/examples/vega/bar-chart
const barChart: Spec ={
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
};

// https://vega.github.io/editor/#/examples/vega/stacked-bar-chart
const stackedBarChart: Spec = {
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
};

// https://vega.github.io/editor/#/examples/vega/grouped-bar-chart
const groupedBarChart: Spec = 
{
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 300,
  "height": 240,
  "padding": 5,

  "data": [
    {
      "name": "table",
      "values": [
        {"category":"A", "position":0, "value":0.1},
        {"category":"A", "position":1, "value":0.6},
        {"category":"A", "position":2, "value":0.9},
        {"category":"A", "position":3, "value":0.4},
        {"category":"B", "position":0, "value":0.7},
        {"category":"B", "position":1, "value":0.2},
        {"category":"B", "position":2, "value":1.1},
        {"category":"B", "position":3, "value":0.8},
        {"category":"C", "position":0, "value":0.6},
        {"category":"C", "position":1, "value":0.1},
        {"category":"C", "position":2, "value":0.2},
        {"category":"C", "position":3, "value":0.7}
      ]
    }
  ],

  "scales": [
    {
      "name": "yscale",
      "type": "band",
      "domain": {"data": "table", "field": "category"},
      "range": "height",
      "padding": 0.2
    },
    {
      "name": "xscale",
      "type": "linear",
      "domain": {"data": "table", "field": "value"},
      "range": "width",
      "round": true,
      "zero": true,
      "nice": true
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "table", "field": "position"},
      "range": {"scheme": "category20"}
    }
  ],

  "axes": [
    {"orient": "left", "scale": "yscale", "tickSize": 0, "labelPadding": 4, "zindex": 1},
    {"orient": "bottom", "scale": "xscale"}
  ],

  "marks": [
    {
      "type": "group",

      "from": {
        "facet": {
          "data": "table",
          "name": "facet",
          "groupby": "category"
        }
      },

      "encode": {
        "enter": {
          "y": {"scale": "yscale", "field": "category"}
        }
      },

      "signals": [
        {"name": "height", "update": "bandwidth('yscale')"}
      ],

      "scales": [
        {
          "name": "pos",
          "type": "band",
          "range": "height",
          "domain": {"data": "facet", "field": "position"}
        }
      ],

      "marks": [
        {
          "name": "bars",
          "from": {"data": "facet"},
          "type": "rect",
          "encode": {
            "enter": {
              "y": {"scale": "pos", "field": "position"},
              "height": {"scale": "pos", "band": 1},
              "x": {"scale": "xscale", "field": "value"},
              "x2": {"scale": "xscale", "value": 0},
              "fill": {"scale": "color", "field": "position"}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "bars"},
          "encode": {
            "enter": {
              "x": {"field": "x2", "offset": -5},
              "y": {"field": "y", "offset": {"field": "height", "mult": 0.5}},
              "fill": {"value": "white"},
              "align": {"value": "right"},
              "baseline": {"value": "middle"},
              "text": {"field": "datum.value"}
            }
          }
        }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/nested-bar-chart
const nestedBarChart: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 300,
  "padding": 5,
  "autosize": "pad",

  "signals": [
    {
      "name": "rangeStep", "value": 20,
      "bind": {"input": "range", "min": 5, "max": 50, "step": 1}
    },
    {
      "name": "innerPadding", "value": 0.1,
      "bind": {"input": "range", "min": 0, "max": 0.7, "step": 0.01}
    },
    {
      "name": "outerPadding", "value": 0.2,
      "bind": {"input": "range", "min": 0, "max": 0.4, "step": 0.01}
    },
    {
      "name": "height",
      "update": "trellisExtent[1]"
    }
  ],

  "data": [
    {
      "name": "tuples",
      "values": [
        {"a": 0, "b": "a", "c": 6.3},
        {"a": 0, "b": "a", "c": 4.2},
        {"a": 0, "b": "b", "c": 6.8},
        {"a": 0, "b": "c", "c": 5.1},
        {"a": 1, "b": "b", "c": 4.4},
        {"a": 2, "b": "b", "c": 3.5},
        {"a": 2, "b": "c", "c": 6.2}
      ],
      "transform": [
        {
          "type": "aggregate",
          "groupby": ["a", "b"],
          "fields": ["c"],
          "ops": ["average"],
          "as": ["c"]
        }
      ]
    },
    {
      "name": "trellis",
      "source": "tuples",
      "transform": [
        {
          "type": "aggregate",
          "groupby": ["a"]
        },
        {
          "type": "formula", "as": "span",
          "expr": "rangeStep * bandspace(datum.count, innerPadding, outerPadding)"
        },
        {
          "type": "stack",
          "field": "span"
        },
        {
          "type": "extent",
          "field": "y1",
          "signal": "trellisExtent"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "domain": {"data": "tuples", "field": "c"},
      "nice": true,
      "zero": true,
      "round": true,
      "range": "width"
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category",
      "domain": {"data": "trellis", "field": "a"}
    }
  ],

  "axes": [
    { "orient": "bottom", "scale": "xscale", "domain": true }
  ],

  "marks": [
    {
      "type": "group",

      "from": {
        "data": "trellis",
        "facet": {
          "name": "faceted_tuples",
          "data": "tuples",
          "groupby": "a"
        }
      },

      "encode": {
        "enter": {
          "x": {"value": 0},
          "width": {"signal": "width"}
        },
        "update": {
          "y": {"field": "y0"},
          "y2": {"field": "y1"}
        }
      },

      "scales": [
        {
          "name": "yscale",
          "type": "band",
          "paddingInner": {"signal": "innerPadding"},
          "paddingOuter": {"signal": "outerPadding"},
          "round": true,
          "domain": {"data": "faceted_tuples", "field": "b"},
          "range": {"step": {"signal": "rangeStep"}}
        }
      ],

      "axes": [
        { "orient": "left", "scale": "yscale",
          "ticks": false, "domain": false, "labelPadding": 4 }
      ],

      "marks": [
        {
          "type": "rect",
          "from": {"data": "faceted_tuples"},
          "encode": {
            "enter": {
              "x": {"value": 0},
              "x2": {"scale": "xscale", "field": "c"},
              "fill": {"scale": "color", "field": "a"},
              "strokeWidth": {"value": 2}
            },
            "update": {
              "y": {"scale": "yscale", "field": "b"},
              "height": {"scale": "yscale", "band": 1},
              "stroke": {"value": null},
              // "zindex": {"value": 0} // Doesn't actually seem to be valid?
            },
            "hover": {
              "stroke": {"value": "firebrick"},
              // "zindex": {"value": 1} // Doesn't actually seem to be valid?
            }
          }
        }
      ]
    }
  ]
}
