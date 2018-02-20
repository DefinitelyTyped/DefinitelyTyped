import * as vega from 'vega'

type Spec = vega.Spec

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
              "zindex": {"value": 0}
            },
            "hover": {
              "stroke": {"value": "firebrick"},
              "zindex": {"value": 1}
            }
          }
        }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/line-chart
const lineChart: Spec = {
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
              "stroke": {"value": null}
            },
            "hover": {
              "stroke": {"value": "firebrick"}
            }
          }
        }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/area-chart
const areaChart: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 200,
  "padding": 5,

  "signals": [
    {
      "name": "interpolate",
      "value": "monotone",
      "bind": {
        "input": "select",
        "options": [
          "basis",
          "cardinal",
          "catmull-rom",
          "linear",
          "monotone",
          "natural",
          "step",
          "step-after",
          "step-before"
        ]
      }
    }
  ],

  "data": [
    {
      "name": "table",
      "values": [
        {"u": 1,  "v": 28}, {"u": 2,  "v": 55},
        {"u": 3,  "v": 43}, {"u": 4,  "v": 91},
        {"u": 5,  "v": 81}, {"u": 6,  "v": 53},
        {"u": 7,  "v": 19}, {"u": 8,  "v": 87},
        {"u": 9,  "v": 52}, {"u": 10, "v": 48},
        {"u": 11, "v": 24}, {"u": 12, "v": 49},
        {"u": 13, "v": 87}, {"u": 14, "v": 66},
        {"u": 15, "v": 17}, {"u": 16, "v": 27},
        {"u": 17, "v": 68}, {"u": 18, "v": 16},
        {"u": 19, "v": 49}, {"u": 20, "v": 15}
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "linear",
      "range": "width",
      "zero": false,
      "domain": {"data": "table", "field": "u"}
    },
    {
      "name": "yscale",
      "type": "linear",
      "range": "height",
      "nice": true,
      "zero": true,
      "domain": {"data": "table", "field": "v"}
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "tickCount": 20},
    {"orient": "left", "scale": "yscale"}
  ],

  "marks": [
    {
      "type": "area",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "u"},
          "y": {"scale": "yscale", "field": "v"},
          "y2": {"scale": "yscale", "value": 0},
          "fill": {"value": "steelblue"}
        },
        "update": {
          "interpolate": {"signal": "interpolate"},
          "fillOpacity": {"value": 1}
        },
        "hover": {
          "fillOpacity": {"value": 0.5}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/stacked-area-chart
const stackedAreaChart: Spec = {
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
      "type": "point",
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
      "type": "group",
      "from": {
        "facet": {
          "name": "series",
          "data": "table",
          "groupby": "c"
        }
      },
      "marks": [
        {
          "type": "area",
          "from": {"data": "series"},
          "encode": {
            "enter": {
              "interpolate": {"value": "monotone"},
              "x": {"scale": "x", "field": "x"},
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
};

// https://vega.github.io/editor/#/examples/vega/horizon-graph
const horizonGraph: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 100,

  "signals": [
    {
      "name": "layers",
      "value": 2,
      "on": [{"events": "mousedown!", "update": "1 + (layers % 4)"}],
      "bind": {"input": "select", "options": [1, 2, 3, 4]}
    },
    {
      "name": "height",
      "update": "floor(200 / layers)"
    },
    {
      "name": "vheight",
      "update": "height * layers"
    },
    {
      "name": "opacity",
      "update": "pow(layers, -2/3)"
    }
  ],

  "data": [
    {
      "name": "layer_indices",
      "values": [0, 1, 2, 3],
      "transform": [
        {"type": "filter", "expr": "datum.data < layers"},
        {"type": "formula", "expr": "datum.data * -height", "as": "offset"}
      ]
    },
    {
      "name": "table",
      "values": [
        {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
        {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
        {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
        {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
        {"x": 9,  "y": 52}, {"x": 10, "y": 48},
        {"x": 11, "y": 24}, {"x": 12, "y": 49},
        {"x": 13, "y": 87}, {"x": 14, "y": 66},
        {"x": 15, "y": 17}, {"x": 16, "y": 27},
        {"x": 17, "y": 68}, {"x": 18, "y": 16},
        {"x": 19, "y": 49}, {"x": 20, "y": 15}
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "range": "width",
      "zero": false, "round": true,
      "domain": {"data": "table", "field": "x"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": [{"signal":"vheight"}, 0],
      "nice": true, "zero": true,
      "domain": {"data": "table", "field": "y"}
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "x", "tickCount": 20}
  ],

  "marks": [
    {
      "type": "group",
      "encode": {
        "update": {
          "width": {"field": {"group": "width"}},
          "height": {"field": {"group": "height"}},
          "clip": {"value": true}
        }
      },
      "marks": [
        {
          "type": "group",
          "from": {"data": "layer_indices"},
          "encode": {
            "update": {
              "y": {"field": "offset"}
            }
          },
          "marks": [
            {
              "type": "area",
              "from": {"data": "table"},
              "encode": {
                "enter": {
                  "interpolate": {"value": "monotone"},
                  "x": {"scale": "x", "field": "x"},
                  "fill": {"value": "steelblue"}
                },
                "update": {
                  "y": {"scale": "y", "field": "y"},
                  "y2": {"scale": "y", "value": 0},
                  "fillOpacity": {"signal": "opacity"}
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/job-voyager
const jobVoyager: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 800,
  "height": 500,
  "padding": 5,

  "signals": [
    {
      "name": "sex", "value": "all",
      "bind": {"input": "radio", "options": ["men", "women", "all"]}
    },
    {
      "name": "query", "value": "",
      "on": [
        {"events": "area:click!", "update": "datum.job"},
        {"events": "dblclick!", "update": "''"}
      ],
      "bind": {"input": "text", "placeholder": "search", "autocomplete": "off"}
    }
  ],

  "data": [
    {
      "name": "jobs",
      "url": "data/jobs.json",
      "transform": [
        {
          "type": "filter",
          "expr": "(sex === 'all' || datum.sex === sex) && (!query || test(regexp(query,'i'), datum.job))"
        },
        {
          "type": "stack",
          "field": "perc",
          "groupby": ["year"],
          "sort": {
            "field": ["job", "sex"],
            "order": ["descending", "descending"]
          }
        }
      ]
    },
    {
      "name": "series",
      "source": "jobs",
      "transform": [
        {
          "type": "aggregate",
          "groupby": ["job", "sex"],
          "fields": ["perc", "perc"],
          "ops": ["sum", "argmax"],
          "as": ["sum", "argmax"]
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "range": "width",
      "zero": false, "round": true,
      "domain": {"data": "jobs", "field": "year"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height", "round": true, "zero": true,
      "domain": {"data": "jobs", "field": "y1"}
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": ["men", "women"],
      "range": ["#33f", "#f33"]
    },
    {
      "name": "alpha",
      "type": "linear", "zero": true,
      "domain": {"data": "series", "field": "sum"},
      "range": [0.4, 0.8]
    },
    {
      "name": "font",
      "type": "sqrt",
      "range": [0, 20], "round": true, "zero": true,
      "domain": {"data": "series", "field": "argmax.perc"}
    },
    {
      "name": "opacity",
      "type": "quantile",
      "range": [0, 0, 0, 0, 0, 0.1, 0.2, 0.4, 0.7, 1.0],
      "domain": {"data": "series", "field": "argmax.perc"}
    },
    {
      "name": "align",
      "type": "quantize",
      "range": ["left", "center", "right"], "zero": false,
      "domain": [1730, 2130]
    },
    {
      "name": "offset",
      "type": "quantize",
      "range": [6, 0, -6], "zero": false,
      "domain": [1730, 2130]
    }
  ],

  "axes": [
    {
      "orient": "bottom", "scale": "x", "format": "d", "tickCount": 15
    },
    {
      "orient": "right", "scale": "y", "format": "%",
      "grid": true, "domain": false, "tickSize": 12,
      "encode": {
        "grid": {"enter": {"stroke": {"value": "#ccc"}}},
        "ticks": {"enter": {"stroke": {"value": "#ccc"}}}
      }
    }
  ],

  "marks": [
    {
      "type": "group",
      "from": {
        "data": "series",
        "facet": {
          "name": "facet",
          "data": "jobs",
          "groupby": ["job", "sex"]
        }
      },

      "marks": [
        {
          "type": "area",
          "from": {"data": "facet"},
          "encode": {
            "update": {
              "x": {"scale": "x", "field": "year"},
              "y": {"scale": "y", "field": "y0"},
              "y2": {"scale": "y", "field": "y1"},
              "fill": {"scale": "color", "field": "sex"},
              "fillOpacity": {"scale": "alpha", "field": {"parent": "sum"}}
            },
            "hover": {
              "fillOpacity": {"value": 0.2}
            }
          }
        }
      ]
    },
    {
      "type": "text",
      "from": {"data": "series"},
      "interactive": false,
      "encode": {
        "update": {
          "x": {"scale": "x", "field": "argmax.year"},
          "dx": {"scale": "offset", "field": "argmax.year"},
          "y": {"signal": "scale('y', 0.5 * (datum.argmax.y0 + datum.argmax.y1))"},
          "fill": {"value": "#000"},
          "fillOpacity": {"scale": "opacity", "field": "argmax.perc"},
          "fontSize": {"scale": "font", "field": "argmax.perc", "offset": 5},
          "text": {"field": "job"},
          "align": {"scale": "align", "field": "argmax.year"},
          "baseline": {"value": "middle"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/pie-chart
const pieChart: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 200,
  "height": 200,
  "autosize": "none",

  "signals": [
    {
      "name": "startAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
    },
    {
      "name": "endAngle", "value": 6.29,
      "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
    },
    {
      "name": "padAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 0.1}
    },
    {
      "name": "innerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 90, "step": 1}
    },
    {
      "name": "cornerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5}
    },
    {
      "name": "sort", "value": false,
      "bind": {"input": "checkbox"}
    }
  ],

  "data": [
    {
      "name": "table",
      "values": [
        {"id": 1, "field": 4},
        {"id": 2, "field": 6},
        {"id": 3, "field": 10},
        {"id": 4, "field": 3},
        {"id": 5, "field": 7},
        {"id": 6, "field": 8}
      ],
      "transform": [
        {
          "type": "pie",
          "field": "field",
          "startAngle": {"signal": "startAngle"},
          "endAngle": {"signal": "endAngle"},
          "sort": {"signal": "sort"}
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "range": {"scheme": "category20"}
    }
  ],

  "marks": [
    {
      "type": "arc",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "fill": {"scale": "color", "field": "id"},
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"}
        },
        "update": {
          "startAngle": {"field": "startAngle"},
          "endAngle": {"field": "endAngle"},
          "padAngle": {"signal": "padAngle"},
          "innerRadius": {"signal": "innerRadius"},
          "outerRadius": {"signal": "width / 2"},
          "cornerRadius": {"signal": "cornerRadius"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/donut-chart
const donutChart: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 200,
  "height": 200,
  "autosize": "none",

  "signals": [
    {
      "name": "startAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
    },
    {
      "name": "endAngle", "value": 6.29,
      "bind": {"input": "range", "min": 0, "max": 6.29, "step": 0.01}
    },
    {
      "name": "padAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 0.1}
    },
    {
      "name": "innerRadius", "value": 60,
      "bind": {"input": "range", "min": 0, "max": 90, "step": 1}
    },
    {
      "name": "cornerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5}
    },
    {
      "name": "sort", "value": false,
      "bind": {"input": "checkbox"}
    }
  ],

  "data": [
    {
      "name": "table",
      "values": [
        {"id": 1, "field": 4},
        {"id": 2, "field": 6},
        {"id": 3, "field": 10},
        {"id": 4, "field": 3},
        {"id": 5, "field": 7},
        {"id": 6, "field": 8}
      ],
      "transform": [
        {
          "type": "pie",
          "field": "field",
          "startAngle": {"signal": "startAngle"},
          "endAngle": {"signal": "endAngle"},
          "sort": {"signal": "sort"}
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "range": {"scheme": "category20"}
    }
  ],

  "marks": [
    {
      "type": "arc",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "fill": {"scale": "color", "field": "id"},
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"}
        },
        "update": {
          "startAngle": {"field": "startAngle"},
          "endAngle": {"field": "endAngle"},
          "padAngle": {"signal": "padAngle"},
          "innerRadius": {"signal": "innerRadius"},
          "outerRadius": {"signal": "width / 2"},
          "cornerRadius": {"signal": "cornerRadius"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/radial-plot
const radialPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 200,
  "height": 200,

  "data": [
    {
      "name": "table",
      "values": [12, 23, 47, 6, 52, 19],
      "transform": [{"type": "pie", "field": "data"}]
    }
  ],

  "scales": [
    {
      "name": "r",
      "type": "sqrt",
      "domain": {"data": "table", "field": "data"},
      "zero": true,
      "range": [20, 100]
    }
  ],

  "marks": [
    {
      "type": "arc",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "x": {"field": {"group": "width"}, "mult": 0.5},
          "y": {"field": {"group": "height"}, "mult": 0.5},
          "startAngle": {"field": "startAngle"},
          "endAngle": {"field": "endAngle"},
          "innerRadius": {"value": 20},
          "outerRadius": {"scale": "r", "field": "data"},
          "stroke": {"value": "#fff"}
        },
        "update": {
          "fill": {"value": "#ccc"}
        },
        "hover": {
          "fill": {"value": "pink"}
        }
      }
    },

    {
      "type": "text",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "x": {"field": {"group": "width"}, "mult": 0.5},
          "y": {"field": {"group": "height"}, "mult": 0.5},
          "radius": {"scale": "r", "field": "data", "offset": 8},
          "theta": {"signal": "(datum.startAngle + datum.endAngle)/2"},
          "fill": {"value": "#000"},
          "align": {"value": "center"},
          "baseline": {"value": "middle"},
          "text": {"field": "data"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/scatter-plot
const scatterPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 200,
  "height": 200,
  "padding": 5,

  "data": [
    {
      "name": "source",
      "url": "data/cars.json",
      "transform": [
        {
          "type": "filter",
          "expr": "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {"data": "source", "field": "Horsepower"},
      "range": "width"
    },
    {
      "name": "y",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {"data": "source", "field": "Miles_per_Gallon"},
      "range": "height"
    },
    {
      "name": "size",
      "type": "linear",
      "round": true,
      "nice": false,
      "zero": true,
      "domain": {"data": "source", "field": "Acceleration"},
      "range": [4,361]
    }
  ],

  "axes": [
    {
      "scale": "x",
      "grid": true,
      "domain": false,
      "orient": "bottom",
      "tickCount": 5,
      "title": "Horsepower"
    },
    {
      "scale": "y",
      "grid": true,
      "domain": false,
      "orient": "left",
      "titlePadding": 5,
      "title": "Miles_per_Gallon"
    }
  ],

  "legends": [
    {
      "size": "size",
      "title": "Acceleration",
      "format": "s",
      "encode": {
        "symbols": {
          "update": {
            "strokeWidth": {"value": 2},
            "opacity": {"value": 0.5},
            "stroke": {"value": "#4682b4"},
            "shape": {"value": "circle"}
          }
        }
      }
    }
  ],

  "marks": [
    {
      "name": "marks",
      "type": "symbol",
      "from": {"data": "source"},
      "encode": {
        "update": {
          "x": {"scale": "x", "field": "Horsepower"},
          "y": {"scale": "y", "field": "Miles_per_Gallon"},
          "size": {"scale": "size", "field": "Acceleration"},
          "shape": {"value": "circle"},
          "strokeWidth": {"value": 2},
          "opacity": {"value": 0.5},
          "stroke": {"value": "#4682b4"},
          "fill": {"value": "transparent"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/scatter-plot-null-values
const scatterPlotNullValues = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 450,
  "height": 450,
  "padding": 5,
  "autosize": {"type": "fit", "resize": true},

  "signals": [
    { "name": "yField", "value": "IMDB_Rating",
      "bind": {"input": "select", "options": ["IMDB_Rating", "Rotten_Tomatoes_Rating", "US_Gross", "Worldwide_Gross"]} },
    { "name": "xField", "value": "Rotten_Tomatoes_Rating",
      "bind": {"input": "select", "options": ["IMDB_Rating", "Rotten_Tomatoes_Rating", "US_Gross", "Worldwide_Gross"]} },
    { "name": "nullSize", "value": 8 },
    { "name": "nullGap", "update": "nullSize + 10" }
  ],

  "data": [
    {
      "name": "movies",
      "url": "data/movies.json",
      "transform": [
        {
          "type": "formula",
          "expr": "datum.Title + ' (' + (year(datum.Release_Date) || '?') + ')'",
          "as":   "tooltip"
        }
      ]
    },
    {
      "name": "valid",
      "source": "movies",
      "transform": [
        {
          "type": "filter",
          "expr": "datum[xField] != null && datum[yField] != null"
        }
      ]
    },
    {
      "name": "nullXY",
      "source": "movies",
      "transform": [
        {
          "type": "filter",
          "expr": "datum[xField] == null && datum[yField] == null"
        },
        { "type": "aggregate" }
      ]
    },
    {
      "name": "nullY",
      "source": "movies",
      "transform": [
        {
          "type": "filter",
          "expr": "datum[xField] != null && datum[yField] == null"
        }
      ]
    },
    {
      "name": "nullX",
      "source": "movies",
      "transform": [
        {
          "type": "filter",
          "expr": "datum[xField] == null && datum[yField] != null"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "yscale",
      "type": "linear",
      "range": [{"signal": "height - nullGap"}, 0],
      "nice": true,
      "domain": {"data": "valid", "field": {"signal": "yField"}}
    },
    {
      "name": "xscale",
      "type": "linear",
      "range": [{"signal": "nullGap"}, {"signal": "width"}],
      "nice": true,
      "domain": {"data": "valid", "field": {"signal": "xField"}}
    }
  ],

  "axes": [
    {
      "orient": "bottom", "scale": "xscale", "offset": 5, "format": "s",
      "title": {"signal": "xField"}
    },
    {
      "orient": "left", "scale": "yscale", "offset": 5, "format": "s",
      "title": {"signal": "yField"}
    }
  ],

  "marks": [
    {
      "type": "symbol",
      "from": {"data": "valid"},
      "encode": {
        "enter": {
          "size": {"value": 50},
          "tooltip": {"field": "tooltip"}
        },
        "update": {
          "x": {"scale": "xscale", "field": {"signal": "xField"}},
          "y": {"scale": "yscale", "field": {"signal": "yField"}},
          "fill": {"value": "steelblue"},
          "fillOpacity": {"value": 0.5},
          "zindex": {"value": 0}
        },
        "hover": {
          "fill": {"value": "firebrick"},
          "fillOpacity": {"value": 1},
          "zindex": {"value": 1}
        }
      }
    },
    {
      "type": "symbol",
      "from": {"data": "nullY"},
      "encode": {
        "enter": {
          "size": {"value": 50},
          "tooltip": {"field": "tooltip"}
        },
        "update": {
          "x": {"scale": "xscale", "field": {"signal": "xField"}},
          "y": {"signal": "height - nullSize/2"},
          "fill": {"value": "#aaa"},
          "fillOpacity": {"value": 0.2}
        },
        "hover": {
          "fill": {"value": "firebrick"},
          "fillOpacity": {"value": 1}
        }
      }
    },
    {
      "type": "symbol",
      "from": {"data": "nullX"},
      "encode": {
        "enter": {
          "size": {"value": 50},
          "tooltip": {"field": "tooltip"}
        },
        "update": {
          "x": {"signal": "nullSize/2"},
          "y": {"scale": "yscale", "field": {"signal": "yField"}},
          "fill": {"value": "#aaa"},
          "fillOpacity": {"value": 0.2},
          "zindex": {"value": 0}
        },
        "hover": {
          "fill": {"value": "firebrick"},
          "fillOpacity": {"value": 1},
          "zindex": {"value": 1}
        }
      }
    },
    {
      "type": "text",
      "interactive": false,
      "from": {"data": "nullXY"},
      "encode": {
        "update": {
          "x": {"signal": "nullSize", "offset": -4},
          "y": {"signal": "height", "offset": 13},
          "text": {"signal": "datum.count + ' null'"},
          "align": {"value": "right"},
          "baseline": {"value": "top"},
          "fill": {"value": "#999"},
          "fontSize": {"value": 9}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/connected-scatter-plot
const connectedScatterPlot = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 800,
  "height": 500,
  "padding": 5,

  "data": [
    {
      "name": "drive",
      "url": "data/driving.json"
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "domain": {"data": "drive", "field": "miles"},
      "range": "width",
      "nice": true,
      "zero": false,
      "round": true
    },
    {
      "name": "y",
      "type": "linear",
      "domain": {"data": "drive", "field": "gas"},
      "range": "height",
      "nice": true,
      "zero": false,
      "round": true
    },
    {
      "name": "align",
      "type": "ordinal",
      "domain": ["left", "right", "top", "bottom"],
      "range": ["right", "left", "center", "center"]
    },
    {
      "name": "base",
      "type": "ordinal",
      "domain": ["left", "right", "top", "bottom"],
      "range": ["middle", "middle", "bottom", "top"]
    },
    {
      "name": "dx",
      "type": "ordinal",
      "domain": ["left", "right", "top", "bottom"],
      "range": [-7, 6, 0, 0]
    },
    {
      "name": "dy",
      "type": "ordinal",
      "domain": ["left", "right", "top", "bottom"],
      "range": [1, 1, -5, 6]
    }
  ],

  "axes": [
    {
      "orient": "top",
      "scale": "x",
      "tickCount": 5,
      "tickSize": 0,
      "grid": true,
      "domain": false,
      "encode": {
        "domain": {
          "enter": { "stroke": {"value": "transparent"} }
        },
        "labels": {
          "enter": {
            "align": {"value": "left"},
            "baseline": {"value": "top"},
            "fontSize": {"value": 12},
            "fontWeight": {"value": "bold"}
          }
        }
      }
    },
    {
      "title": "Miles driven per capita each year",
      "orient": "bottom", "scale": "x",
      "domain": false, "ticks": false, "labels": false
    },
    {
      "orient": "left",
      "scale": "y",
      "tickCount": 5,
      "tickSize": 0,
      "grid": true,
      "domain": false,
      "format": "$0.2f",
      "encode": {
        "domain": {
          "enter": {"stroke": {"value": "transparent"}}
        },
        "labels": {
          "enter": {
            "align": {"value": "left"},
            "baseline": {"value": "bottom"},
            "fontSize": {"value": 12},
            "fontWeight": {"value": "bold"}
          }
        }
      }
    },
    {
      "title": "Price of a gallon of gasoline (adjusted for inflation)",
      "orient": "right", "scale": "y",
      "domain": false, "ticks": false, "labels": false
    }
  ],

  "marks": [
    {
      "type": "line",
      "from": {"data": "drive"},
      "encode": {
        "enter": {
          "interpolate": {"value": "cardinal"},
          "x": {"scale": "x", "field": "miles"},
          "y": {"scale": "y", "field": "gas"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 3}
        }
      }
    },
    {
      "type": "symbol",
      "from": {"data": "drive"},
      "encode": {
        "enter": {
          "x": {"scale": "x", "field": "miles"},
          "y": {"scale": "y", "field": "gas"},
          "fill": {"value": "#fff"},
          "stroke": {"value": "#000"},
          "strokeWidth": {"value": 1},
          "size": {"value": 49}
        }
      }
    },
    {
      "type": "text",
      "from": {"data": "drive"},
      "encode": {
        "enter": {
          "x": {"scale": "x", "field": "miles"},
          "y": {"scale": "y", "field": "gas"},
          "dx": {"scale": "dx", "field": "side"},
          "dy": {"scale": "dy", "field": "side"},
          "fill": {"value": "#000"},
          "text": {"field": "year"},
          "align": {"scale": "align", "field": "side"},
          "baseline": {"scale": "base", "field": "side"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/error-bars
const errorBars: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 160,
  "padding": 5,

  "config": {
    "axisBand": {
      "bandPosition": 1,
      "tickExtra": true,
      "tickOffset": 0
    }
  },

  "signals": [
    {
      "name": "errorMeasure", "value": "95% Confidence Interval",
      "bind": {"input": "select", "options": [
        "95% Confidence Interval",
        "Standard Error",
        "Standard Deviation",
        "Interquartile Range"
      ]}
    },
    {
      "name": "lookup",
      "value": {
        "95% Confidence Interval": "ci",
        "Standard Deviation": "stdev",
        "Standard Error": "stderr",
        "Interquartile Range": "iqr"
      }
    },
    {
      "name": "measure",
      "update": "lookup[errorMeasure]"
    }
  ],

  "data": [
    {
      "name": "barley",
      "url": "data/barley.json"
    },
    {
      "name": "summary",
      "source": "barley",
      "transform": [
        {
          "type": "aggregate",
          "groupby": ["variety"],
          "fields": ["yield", "yield", "yield", "yield", "yield", "yield", "yield"],
          "ops": ["mean", "stdev", "stderr", "ci0", "ci1", "q1", "q3"],
          "as": ["mean", "stdev", "stderr", "ci0", "ci1", "iqr0", "iqr1"]
        },
        {
          "type": "formula", "as": "stdev0",
          "expr": "datum.mean - datum.stdev"
        },
        {
          "type": "formula", "as": "stdev1",
          "expr": "datum.mean + datum.stdev"
        },
        {
          "type": "formula", "as": "stderr0",
          "expr": "datum.mean - datum.stderr"
        },
        {
          "type": "formula", "as": "stderr1",
          "expr": "datum.mean + datum.stderr"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "yscale",
      "type": "band",
      "range": "height",
      "domain": {
        "data": "summary",
        "field": "variety",
        "sort": {"op": "max", "field": "mean", "order": "descending"}
      }
    },
    {
      "name": "xscale",
      "type": "linear",
      "range": "width", "round": true,
      "domain": {"data": "summary", "fields": ["stdev0", "stdev1"]},
      "zero": false, "nice": true
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "zindex": 1, "title": "Barley Yield"},
    {"orient": "left", "scale": "yscale", "tickCount": 5, "zindex": 1}
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "summary"},
      "encode": {
        "enter": {
          "fill": {"value": "black"},
          "height": {"value": 1}
        },
        "update": {
          "y": {"scale": "yscale", "field": "variety", "band": 0.5},
          "x": {"scale": "xscale", "signal": "datum[measure+'0']"},
          "x2": {"scale": "xscale", "signal": "datum[measure+'1']"}
        }
      }
    },
    {
      "type": "symbol",
      "from": {"data": "summary"},
      "encode": {
        "enter": {
          "fill": {"value": "black"},
          "size": {"value": 40}
        },
        "update": {
          "x": {"scale": "xscale", "field": "mean"},
          "y": {"scale": "yscale", "field": "variety", "band": 0.5}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/barley-trellis-plot
const barleyTrellisPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 200,
  "padding": 5,

  "signals": [
    {"name": "offset", "value": 15},
    {"name": "cellHeight", "value": 100},
    {"name": "height", "update": "6 * (offset + cellHeight)"}
  ],

  "data": [
    {
      "name": "barley",
      "url": "data/barley.json"
    }
  ],

  "scales": [
    {
      "name": "gscale",
      "type": "band",
      "range": [0, {"signal": "height"}],
      "round": true,
      "domain": {
        "data": "barley",
        "field": "site",
        "sort": {
          "field": "yield",
          "op": "median",
          "order": "descending"
        }
      }
    },
    {
      "name": "xscale",
      "type": "linear",
      "nice": true,
      "range": "width",
      "round": true,
      "domain": {"data": "barley", "field": "yield"}
    },
    {
      "name": "cscale",
      "type": "ordinal",
      "range": "category",
      "domain": {"data": "barley", "field": "year"}
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "zindex": 1}
  ],

  "legends": [
    {
      "stroke": "cscale",
      "title": "Year",
      "padding": 4,
      "encode": {
        "symbols": {
          "enter": {
            "strokeWidth": {"value": 2},
            "size": {"value": 50}
          }
        }
      }
    }
  ],

  "marks": [
    {
      "name": "site",
      "type": "group",

      "from": {
        "facet": {
          "data": "barley",
          "name": "sites",
          "groupby": "site"
        }
      },

      "encode": {
        "enter": {
          "y": {"scale": "gscale", "field": "site", "offset": {"signal": "offset"}},
          "height": {"signal": "cellHeight"},
          "width": {"signal": "width"},
          "stroke": {"value": "#ccc"}
        }
      },

      "scales": [
        {
          "name": "yscale",
          "type": "point",
          "range": [0, {"signal": "cellHeight"}],
          "padding": 1,
          "round": true,
          "domain": {
            "data": "barley",
            "field": "variety",
            "sort": {
              "field": "yield",
              "op": "median",
              "order": "descending"
            }
          }
        }
      ],

      "axes": [
        {
          "orient": "left",
          "scale": "yscale",
          "tickSize": 0,
          "domain": false,
          "grid": true,
          "encode": {
            "grid": {
              "enter": {"strokeDash": {"value": [3,3]}}
            }
          }
        },
        {
          "orient": "right",
          "scale": "yscale",
          "tickSize": 0,
          "domain": false
        }
      ],

      "marks": [
        {
          "type": "symbol",
          "from": {"data": "sites"},
          "encode": {
            "enter": {
              "x": {"scale": "xscale", "field": "yield"},
              "y": {"scale": "yscale", "field": "variety"},
              "stroke": {"scale": "cscale", "field": "year"},
              "strokeWidth": {"value": 2},
              "size": {"value": 50}
            }
          }
        }
      ]
    },

    {
      "type": "text",
      "from": {"data": "site"},
      "encode": {
        "enter": {
          "x": {"field": "width", "mult": 0.5},
          "y": {"field": "y"},
          "fontSize": {"value": 11},
          "fontWeight": {"value": "bold"},
          "text": {"field": "datum.site"},
          "align": {"value": "center"},
          "baseline": {"value": "bottom"},
          "fill": {"value": "#000"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/histogram
const histogram: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 100,
  "padding": 5,

  "signals": [
    { "name": "binOffset", "value": 0,
      "bind": {"input": "range", "min": -0.1, "max": 0.1} },
    { "name": "binStep", "value": 0.1,
      "bind": {"input": "range", "min": 0.001, "max": 0.4, "step": 0.001} }
  ],

  "data": [
    {
      "name": "points",
      "url": "data/normal-2d.json"
    },
    {
      "name": "binned",
      "source": "points",
      "transform": [
        {
          "type": "bin", "field": "u",
          "extent": [-1, 1],
          "anchor": {"signal": "binOffset"},
          "step": {"signal": "binStep"},
          "nice": false
        },
        {
          "type": "aggregate",
          "key": "bin0", "groupby": ["bin0", "bin1"],
          "fields": ["bin0"], "ops": ["count"], "as": ["count"]
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "linear",
      "range": "width",
      "domain": [-1, 1]
    },
    {
      "name": "yscale",
      "type": "linear",
      "range": "height", "round": true,
      "domain": {"data": "binned", "field": "count"},
      "zero": true, "nice": true
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "zindex": 1},
    {"orient": "left", "scale": "yscale", "tickCount": 5, "zindex": 1}
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "binned"},
      "encode": {
        "update": {
          "x": {"scale": "xscale", "field": "bin0"},
          "x2": {"scale": "xscale", "field": "bin1",
                 "offset": {"signal": "binStep > 0.02 ? -0.5 : 0"}},
          "y": {"scale": "yscale", "field": "count"},
          "y2": {"scale": "yscale", "value": 0},
          "fill": {"value": "steelblue"}
        },
        "hover": { "fill": {"value": "firebrick"} }
      }
    },
    {
      "type": "rect",
      "from": {"data": "points"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "u"},
          "width": {"value": 1},
          "y": {"value": 25, "offset": {"signal": "height"}},
          "height": {"value": 5},
          "fill": {"value": "steelblue"},
          "fillOpacity": {"value": 0.4}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/histogram-null-values
const histogramNullValues: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 400,
  "height": 200,
  "padding": 5,
  "autosize": {"type": "fit", "resize": true},

  "signals": [
    {
      "name": "maxbins", "value": 10,
      "bind": {"input": "select", "options": [5, 10, 20]}
    },
    {
      "name": "binDomain",
      "update": "sequence(bins.start, bins.stop + bins.step, bins.step)"
    },
    {
      "name": "nullGap", "value": 10
    },
    {
      "name": "barStep",
      "update": "(width - nullGap) / binDomain.length"
    }
  ],

  "data": [
    {
      "name": "table",
      "url": "data/movies.json",
      "transform": [
        {
          "type": "extent", "field": "IMDB_Rating",
          "signal": "extent"
        },
        {
          "type": "bin", "signal": "bins",
          "field": "IMDB_Rating", "extent": {"signal": "extent"},
          "maxbins": {"signal": "maxbins"}
        }
      ]
    },
    {
      "name": "counts",
      "source": "table",
      "transform": [
        {
          "type": "filter",
          "expr": "datum['IMDB_Rating'] != null"
        },
        {
          "type": "aggregate",
          "groupby": ["bin0", "bin1"]
        }
      ]
    },
    {
      "name": "nulls",
      "source": "table",
      "transform": [
        {
          "type": "filter",
          "expr": "datum['IMDB_Rating'] == null"
        },
        {
          "type": "aggregate"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "yscale",
      "type": "linear",
      "range": "height",
      "round": true, "nice": true,
      "domain": {
        "fields": [
          {"data": "counts", "field": "count"},
          {"data": "nulls", "field": "count"}
        ]
      }
    },
    {
      "name": "xscale",
      "type": "bin-linear",
      "range": [{"signal": "barStep + nullGap"}, {"signal": "width"}],
      "round": true,
      "domain": {"signal": "binDomain"}
    },
    {
      "name": "xscale-null",
      "type": "band",
      "range": [0, {"signal": "barStep"}],
      "round": true,
      "domain": [null]
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "tickCount": 10},
    {"orient": "bottom", "scale": "xscale-null"},
    {"orient": "left", "scale": "yscale", "tickCount": 5, "offset": 5}
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "counts"},
      "encode": {
        "update": {
          "x": {"scale": "xscale", "field": "bin0", "offset": 1},
          "x2": {"scale": "xscale", "field": "bin1"},
          "y": {"scale": "yscale", "field": "count"},
          "y2": {"scale": "yscale", "value": 0},
          "fill": {"value": "steelblue"}
        },
        "hover": {
          "fill": {"value": "firebrick"}
        }
      }
    },
    {
      "type": "rect",
      "from": {"data": "nulls"},
      "encode": {
        "update": {
          "x": {"scale": "xscale-null", "value": null, "offset": 1},
          "x2": {"scale": "xscale-null", "band": 1},
          "y": {"scale": "yscale", "field": "count"},
          "y2": {"scale": "yscale", "value": 0},
          "fill": {"value": "#aaa"}
        },
        "hover": {
          "fill": {"value": "firebrick"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/probability-density
const probabilityDensity: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 100,
  "padding": 5,

  "signals": [
    { "name": "bandwidth", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 0.1, "step": 0.001} },
    { "name": "steps", "value": 100,
      "bind": {"input": "range", "min": 10, "max": 500, "step": 1} },
    { "name": "method", "value": "pdf",
      "bind": {"input": "radio", "options": ["pdf", "cdf"]} }
  ],

  "data": [
    {
      "name": "points",
      "url": "data/normal-2d.json"
    },
    {
      "name": "summary",
      "source": "points",
      "transform": [
        {
          "type": "aggregate",
          "fields": ["u", "u"],
          "ops": ["mean", "stdev"],
          "as": ["mean", "stdev"]
        }
      ]
    },
    {
      "name": "density",
      "source": "points",
      "transform": [
        {
          "type": "density",
          "extent": {"signal": "domain('xscale')"},
          "steps": {"signal": "steps"},
          "method": {"signal": "method"},
          "distribution": {
            "function": "kde",
            "field": "u",
            "bandwidth": {"signal": "bandwidth"}
          }
        }
      ]
    },
    {
      "name": "normal",
      "transform": [
        {
          "type": "density",
          "extent": {"signal": "domain('xscale')"},
          "steps": {"signal": "steps"},
          "method": {"signal": "method"},
          "distribution": {
            "function": "normal",
            "mean": {"signal": "data('summary')[0].mean"},
            "stdev": {"signal": "data('summary')[0].stdev"}
          }
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "linear",
      "range": "width",
      "domain": {"data": "points", "field": "u"},
      "nice": true
    },
    {
      "name": "yscale",
      "type": "linear",
      "range": "height", "round": true,
      "domain": {
        "fields": [
          {"data": "density", "field": "density"},
          {"data": "normal", "field": "density"}
        ]
      }
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": ["Normal Estimate", "Kernel Density Estimate"],
      "range": ["#444", "steelblue"]
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "zindex": 1}
  ],

  "legends": [
    {"orient": "top-left", "fill": "color", "offset": 0, "zindex": 1}
  ],

  "marks": [
    {
      "type": "area",
      "from": {"data": "density"},
      "encode": {
        "update": {
          "x": {"scale": "xscale", "field": "value"},
          "y": {"scale": "yscale", "field": "density"},
          "y2": {"scale": "yscale", "value": 0},
          "fill": {"signal": "scale('color', 'Kernel Density Estimate')"}
        }
      }
    },
    {
      "type": "line",
      "from": {"data": "normal"},
      "encode": {
        "update": {
          "x": {"scale": "xscale", "field": "value"},
          "y": {"scale": "yscale", "field": "density"},
          "stroke": {"signal": "scale('color', 'Normal Estimate')"},
          "strokeWidth": {"value": 2}
        }
      }
    },
    {
      "type": "rect",
      "from": {"data": "points"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "u"},
          "width": {"value": 1},
          "y": {"value": 25, "offset": {"signal": "height"}},
          "height": {"value": 5},
          "fill": {"value": "steelblue"},
          "fillOpacity": {"value": 0.4}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/box-plot
const boxPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 100,
  "padding": 5,

  "signals": [
    { "name": "bandwidth", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 0.1, "step": 0.001} },
    { "name": "steps", "value": 100,
      "bind": {"input": "range", "min": 10, "max": 500, "step": 1} },
    { "name": "method", "value": "pdf",
      "bind": {"input": "radio", "options": ["pdf", "cdf"]} }
  ],

  "data": [
    {
      "name": "points",
      "url": "data/normal-2d.json"
    },
    {
      "name": "summary",
      "source": "points",
      "transform": [
        {
          "type": "aggregate",
          "fields": ["u", "u"],
          "ops": ["mean", "stdev"],
          "as": ["mean", "stdev"]
        }
      ]
    },
    {
      "name": "density",
      "source": "points",
      "transform": [
        {
          "type": "density",
          "extent": {"signal": "domain('xscale')"},
          "steps": {"signal": "steps"},
          "method": {"signal": "method"},
          "distribution": {
            "function": "kde",
            "field": "u",
            "bandwidth": {"signal": "bandwidth"}
          }
        }
      ]
    },
    {
      "name": "normal",
      "transform": [
        {
          "type": "density",
          "extent": {"signal": "domain('xscale')"},
          "steps": {"signal": "steps"},
          "method": {"signal": "method"},
          "distribution": {
            "function": "normal",
            "mean": {"signal": "data('summary')[0].mean"},
            "stdev": {"signal": "data('summary')[0].stdev"}
          }
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "linear",
      "range": "width",
      "domain": {"data": "points", "field": "u"},
      "nice": true
    },
    {
      "name": "yscale",
      "type": "linear",
      "range": "height", "round": true,
      "domain": {
        "fields": [
          {"data": "density", "field": "density"},
          {"data": "normal", "field": "density"}
        ]
      }
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": ["Normal Estimate", "Kernel Density Estimate"],
      "range": ["#444", "steelblue"]
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "zindex": 1}
  ],

  "legends": [
    {"orient": "top-left", "fill": "color", "offset": 0, "zindex": 1}
  ],

  "marks": [
    {
      "type": "area",
      "from": {"data": "density"},
      "encode": {
        "update": {
          "x": {"scale": "xscale", "field": "value"},
          "y": {"scale": "yscale", "field": "density"},
          "y2": {"scale": "yscale", "value": 0},
          "fill": {"signal": "scale('color', 'Kernel Density Estimate')"}
        }
      }
    },
    {
      "type": "line",
      "from": {"data": "normal"},
      "encode": {
        "update": {
          "x": {"scale": "xscale", "field": "value"},
          "y": {"scale": "yscale", "field": "density"},
          "stroke": {"signal": "scale('color', 'Normal Estimate')"},
          "strokeWidth": {"value": 2}
        }
      }
    },
    {
      "type": "rect",
      "from": {"data": "points"},
      "encode": {
        "enter": {
          "x": {"scale": "xscale", "field": "u"},
          "width": {"value": 1},
          "y": {"value": 25, "offset": {"signal": "height"}},
          "height": {"value": 5},
          "fill": {"value": "steelblue"},
          "fillOpacity": {"value": 0.4}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/violin-plot
const violinPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "padding": 5,

  "config": {
    "axisBand": {
      "bandPosition": 1,
      "tickExtra": true,
      "tickOffset": 0
    }
  },

  "signals": [
    { "name": "fields",
      "value": ["petalWidth", "petalLength", "sepalWidth", "sepalLength"] },
    { "name": "plotWidth", "value": 60 },
    { "name": "height", "update": "(plotWidth + 10) * length(fields)"},
    { "name": "bandwidth", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 0.5, "step": 0.005} },
    { "name": "steps", "value": 100,
      "bind": {"input": "range", "min": 10, "max": 500, "step": 1} }
  ],

  "data": [
    {
      "name": "iris",
      "url": "data/iris.json",
      "transform": [
        {
          "type": "fold",
          "fields": {"signal": "fields"},
          "as": ["organ", "value"]
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "layout",
      "type": "band",
      "range": "height",
      "domain": {"data": "iris", "field": "organ"}
    },
    {
      "name": "xscale",
      "type": "linear",
      "range": "width", "round": true,
      "domain": {"data": "iris", "field": "value"},
      "zero": true, "nice": true
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category"
    }
  ],

  "axes": [
    {"orient": "bottom", "scale": "xscale", "zindex": 1},
    {"orient": "left", "scale": "layout", "tickCount": 5, "zindex": 1}
  ],

  "marks": [
    {
      "type": "group",
      "from": {
        "facet": {
          "data": "iris",
          "name": "organs",
          "groupby": "organ"
        }
      },

      "encode": {
        "enter": {
          "yc": {"scale": "layout", "field": "organ", "band": 0.5},
          "height": {"signal": "plotWidth"},
          "width": {"signal": "width"}
        }
      },

      "data": [
        {
          "name": "density",
          "transform": [
            {
              "type": "density",
              "steps": {"signal": "steps"},
              "distribution": {
                "function": "kde",
                "from": "organs",
                "field": "value",
                "bandwidth": {"signal": "bandwidth"}
              }
            },
            {
              "type": "stack",
              "groupby": ["value"],
              "field": "density",
              "offset": "center",
              "as": ["y0", "y1"]
            }
          ]
        },
        {
          "name": "summary",
          "source": "organs",
          "transform": [
            {
              "type": "aggregate",
              "fields": ["value", "value", "value"],
              "ops": ["q1", "median", "q3"],
              "as": ["q1", "median", "q3"]
            }
          ]
        }
      ],

      "scales": [
        {
          "name": "yscale",
          "type": "linear",
          "range": [0, {"signal": "plotWidth"}],
          "domain": {"data": "density", "field": "density"}
        }
      ],

      "marks": [
        {
          "type": "area",
          "from": {"data": "density"},
          "encode": {
            "enter": {
              "fill": {"scale": "color", "field": {"parent": "organ"}}
            },
            "update": {
              "x": {"scale": "xscale", "field": "value"},
              "y": {"scale": "yscale", "field": "y0"},
              "y2": {"scale": "yscale", "field": "y1"}
            }
          }
        },
        {
          "type": "rect",
          "from": {"data": "summary"},
          "encode": {
            "enter": {
              "fill": {"value": "black"},
              "height": {"value": 2}
            },
            "update": {
              "yc": {"signal": "plotWidth / 2"},
              "x": {"scale": "xscale", "field": "q1"},
              "x2": {"scale": "xscale", "field": "q3"}
            }
          }
        },
        {
          "type": "rect",
          "from": {"data": "summary"},
          "encode": {
            "enter": {
              "fill": {"value": "black"},
              "width": {"value": 2},
              "height": {"value": 8}
            },
            "update": {
              "yc": {"signal": "plotWidth / 2"},
              "x": {"scale": "xscale", "field": "median"}
            }
          }
        }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/top-k-plot
const topKPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 410,
  "padding": 5,
  "autosize": "fit",

  "signals": [
    {
      "name": "k", "value": 20,
      "bind": {"input": "range", "min": 10, "max": 30, "step": 1}
    },
    {
      "name": "op", "value": "average",
      "bind": {"input": "select", "options": ["average", "median", "sum"]}
    },
    {
      "name": "label",
      "value": {"average": "Average", "median": "Median", "sum": "Total"}
    }
  ],

  "title": {
    "text": {"signal": "'Top Directors by ' + label[op] + ' Worldwide Gross'"},
    "anchor": "start"
  },

  "data": [
    {
      "name": "directors",
      "url": "data/movies.json",
      "transform": [
        {
          "type": "filter",
          "expr": "datum.Director != null && datum.Worldwide_Gross != null"
        },
        {
          "type": "aggregate",
          "groupby": ["Director"],
          "ops": [{"signal": "op"}],
          "fields": ["Worldwide_Gross"],
          "as": ["Gross"]
        },
        {
          "type": "window",
          "sort": {"field": "Gross", "order": "descending"},
          "ops": ["row_number"], "as": ["rank"]
        },
        {
          "type": "filter",
          "expr": "datum.rank <= k"
        }
      ]
    }
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "directors"},
      "encode": {
        "update": {
          "x": {"scale": "x", "value": 0},
          "x2": {"scale": "x", "field": "Gross"},
          "y": {"scale": "y", "field": "Director"},
          "height": {"scale": "y", "band": 1}
        }
      }
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "domain": {"data": "directors", "field": "Gross"},
      "range": "width",
      "nice": true
    },
    {
      "name": "y",
      "type": "band",
      "domain": {
        "data": "directors", "field": "Director",
        "sort": {"op": "max", "field": "Gross", "order": "descending"}
      },
      "range": "height",
      "padding": 0.1
    }
  ],

  "axes": [
    {
      "scale": "x",
      "orient": "bottom",
      "format": "$,d",
      "tickCount": 5
    },
    {
      "scale": "y",
      "orient": "left"
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/top-k-plot-with-others
const topKPlotWithOthers: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 410,
  "padding": 5,
  "autosize": "fit",

  "signals": [
    {
      "name": "k", "value": 20,
      "bind": {"input": "range", "min": 10, "max": 30, "step": 1}
    },
    {
      "name": "op", "value": "average",
      "bind": {"input": "select", "options": ["average", "median", "sum"]}
    },
    {
      "name": "label",
      "value": {"average": "Average", "median": "Median", "sum": "Total"}
    }
  ],

  "title": {
    "text": {"signal": "'Top Directors by ' + label[op] + ' Worldwide Gross'"},
    "anchor": "start"
  },

  "data": [
    {
      "name": "source",
      "url": "data/movies.json",
      "transform": [
        {
          "type": "filter",
          "expr": "datum.Director != null && datum.Worldwide_Gross != null"
        }
      ]
    },
    {
      "name": "ranks",
      "source": "source",
      "transform": [
        {
          "type": "aggregate",
          "groupby": ["Director"],
          "ops": [{"signal": "op"}],
          "fields": ["Worldwide_Gross"],
          "as": ["Gross"]
        },
        {
          "type": "window",
          "sort": {"field": "Gross", "order": "descending"},
          "ops": ["row_number"], "as": ["rank"]
        }
      ]
    },
    {
      "name": "directors",
      "source": "source",
      "transform": [
        {
          "type": "lookup",
          "from": "ranks",
          "key": "Director",
          "values": ["rank"],
          "fields": ["Director"]
        },
        {
          "type": "formula",
          "as": "Category",
          "expr": "datum.rank < k ? datum.Director : 'All Others'"
        },
        {
          "type": "aggregate",
          "groupby": ["Category"],
          "ops": [{"signal": "op"}],
          "fields": ["Worldwide_Gross"],
          "as": ["Gross"]
        }
      ]
    }
  ],

  "marks": [
    {
      "type": "rect",
      "from": {"data": "directors"},
      "encode": {
        "update": {
          "x": {"scale": "x", "value": 0},
          "x2": {"scale": "x", "field": "Gross"},
          "y": {"scale": "y", "field": "Category"},
          "height": {"scale": "y", "band": 1}
        }
      }
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "domain": {"data": "directors", "field": "Gross"},
      "range": "width",
      "nice": true
    },
    {
      "name": "y",
      "type": "band",
      "domain": {
        "data": "directors", "field": "Category",
        "sort": {"op": "max", "field": "Gross", "order": "descending"}
      },
      "range": "height",
      "padding": 0.1
    }
  ],

  "axes": [
    {
      "scale": "x",
      "orient": "bottom",
      "format": "$,d",
      "tickCount": 5
    },
    {
      "scale": "y",
      "orient": "left"
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/binned-scatter-plot
const binnedScatterPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 200,
  "height": 200,
  "padding": 5,
  "autosize": "pad",

  "data": [
    {
      "name": "source",
      "url": "data/cars.json",
      "transform": [
        {
          "type": "filter",
          "expr": "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null && datum['Acceleration'] != null"
        }
      ]
    },
    {
      "name": "summary",
      "source": "source",
      "transform": [
        {
          "type": "extent", "field": "Horsepower",
          "signal": "hp_extent"
        },
        {
          "type": "bin", "field": "Horsepower", "maxbins": 10,
          "extent": {"signal": "hp_extent"},
          "as": ["hp0", "hp1"]
        },
        {
          "type": "extent", "field": "Miles_per_Gallon",
          "signal": "mpg_extent"
        },
        {
          "type": "bin", "field": "Miles_per_Gallon", "maxbins": 10,
          "extent": {"signal": "mpg_extent"},
          "as": ["mpg0", "mpg1"]
        },
        {
          "type": "aggregate",
          "groupby": ["hp0", "hp1", "mpg0", "mpg1"]
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {"data": "source", "field": "Horsepower"},
      "range": "width"
    },
    {
      "name": "y",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": true,
      "domain": {"data": "source", "field": "Miles_per_Gallon"},
      "range": "height"
    },
    {
      "name": "size",
      "type": "linear",
      "zero": true,
      "domain": {"data": "summary", "field": "count"},
      "range": [0,360]
    }
  ],

  "axes": [
    {
      "scale": "x",
      "grid": true,
      "domain": false,
      "orient": "bottom",
      "tickCount": 5,
      "title": "Horsepower"
    },
    {
      "scale": "y",
      "grid": true,
      "domain": false,
      "orient": "left",
      "titlePadding": 5,
      "title": "Miles_per_Gallon"
    }
  ],

  "legends": [
    {
      "size": "size",
      "title": "Count",
      "format": "s",
      "encode": {
        "symbols": {
          "update": {
            "strokeWidth": {"value": 2},
            "stroke": {"value": "#4682b4"},
            "shape": {"value": "circle"}
          }
        }
      }
    }
  ],

  "marks": [
    {
      "name": "marks",
      "type": "symbol",
      "from": {"data": "summary"},
      "encode": {
        "update": {
          "x": {"scale": "x", "signal": "(datum.hp0 + datum.hp1) / 2"},
          "y": {"scale": "y", "signal": "(datum.mpg0 + datum.mpg1) / 2"},
          "size": {"scale": "size", "field": "count"},
          "shape": {"value": "circle"},
          "strokeWidth": {"value": 2},
          "stroke": {"value": "#4682b4"},
          "fill": {"value": "transparent"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/contour-plot
const contourPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "height": 400,
  "padding": 5,
  "autosize": "pad",

  "signals": [
    {
      "name": "count", "value": 10,
      "bind": {"input": "select", "options": [1, 5, 10, 20]}
    },
    {
      "name": "points", "value": true,
      "bind": {"input": "checkbox"}
    }
  ],

  "data": [
    {
      "name": "source",
      "url": "data/cars.json",
      "transform": [
        {
          "type": "filter",
          "expr": "datum['Horsepower'] != null && datum['Miles_per_Gallon'] != null"
        }
      ]
    },
    {
      "name": "contours",
      "source": "source",
      "transform": [
        {
          "type": "contour",
          "x": {"expr": "scale('x', datum.Horsepower)"},
          "y": {"expr": "scale('y', datum.Miles_per_Gallon)"},
          "size": [{"signal": "width"}, {"signal": "height"}],
          "count": {"signal": "count"}
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "x",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": false,
      "domain": {"data": "source", "field": "Horsepower"},
      "range": "width"
    },
    {
      "name": "y",
      "type": "linear",
      "round": true,
      "nice": true,
      "zero": false,
      "domain": {"data": "source", "field": "Miles_per_Gallon"},
      "range": "height"
    },
    {
      "name": "color",
      "type": "sequential",
      "zero": true,
      "domain": {"data": "contours", "field": "value"},
      "range": "heatmap"
    }
  ],

  "axes": [
    {
      "scale": "x",
      "grid": true,
      "domain": false,
      "orient": "bottom",
      "title": "Horsepower"
    },
    {
      "scale": "y",
      "grid": true,
      "domain": false,
      "orient": "left",
      "title": "Miles_per_Gallon"
    }
  ],

  "legends": [{
    "fill": "color",
    "type": "gradient"
  }],

  "marks": [
    {
      "type": "path",
      "from": {"data": "contours"},
      "encode": {
        "enter": {
          "stroke": {"value": "#888"},
          "strokeWidth": {"value": 1},
          "fill": {"scale": "color", "field": "value"},
          "fillOpacity": {"value": 0.35}
        }
      },
      "transform": [
        { "type": "geopath", "field": "datum" }
      ]
    },
    {
      "name": "marks",
      "type": "symbol",
      "from": {"data": "source"},
      "encode": {
        "update": {
          "x": {"scale": "x", "field": "Horsepower"},
          "y": {"scale": "y", "field": "Miles_per_Gallon"},
          "size": {"value": 4},
          "fill": [
            {"test": "points", "value": "black"},
            {"value": "transparent"}
          ]
        }
      }
    }
  ],

  "config": {
    "range": {
      "heatmap": {"scheme": "greenblue"}
    }
  }
};

// https://vega.github.io/editor/#/examples/vega/wheat-plot
const wheatPlot: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 500,
  "padding": 5,

  "signals": [
    { "name": "symbolDiameter", "value": 4,
      "bind": {"input": "range", "min": 1, "max": 8, "step": 0.25} },
    { "name": "binOffset", "value": 0,
      "bind": {"input": "range", "min": -0.1, "max": 0.1} },
    { "name": "binStep", "value": 0.075,
      "bind": {"input": "range", "min": 0.001, "max": 0.2, "step": 0.001} },
    { "name": "height", "update": "extent[1] * (1 + symbolDiameter)" }
  ],

  "data": [
    {
      "name": "points",
      "url": "data/normal-2d.json",
      "transform": [
        {
          "type": "bin", "field": "u",
          "extent": [-1, 1],
          "anchor": {"signal": "binOffset"},
          "step": {"signal": "binStep"},
          "nice": false,
          "signal": "bins"
        },
        {
          "type": "stack",
          "groupby": ["bin0"],
          "sort": {"field": "u"}
        },
        {
          "type": "extent", "signal": "extent",
          "field": "y1"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "xscale",
      "type": "linear",
      "range": "width",
      "domain": [-1, 1]
    },
    {
      "name": "yscale",
      "type": "linear",
      "range": "height",
      "domain": [0, {"signal": "extent[1]"}]
    }
  ],

  "axes": [
    { "orient": "bottom", "scale": "xscale",
      "values": {"signal": "sequence(bins.start, bins.stop + bins.step, bins.step)"},
      "domain": false, "ticks": false, "labels": false, "grid": true,
      "zindex": 0 },
    {"orient": "bottom", "scale": "xscale", "zindex": 1}
  ],

  "marks": [
    {
      "type": "symbol",
      "from": {"data": "points"},
      "encode": {
        "enter": {
          "fill": {"value": "transparent"},
          "strokeWidth": {"value": 0.5}
        },
        "update": {
          "x": {"scale": "xscale", "field": "u"},
          "y": {"scale": "yscale", "field": "y0"},
          "size": {"signal": "symbolDiameter * symbolDiameter"},
          "stroke": {"value": "steelblue"}
        },
        "hover": {
          "stroke": {"value": "firebrick"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/county-unemployment
const countyUnemployment: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 960,
  "height": 500,
  "autosize": "none",

  "data": [
    {
      "name": "unemp",
      "url": "data/unemployment.tsv",
      "format": {"type": "tsv", "parse": "auto"}
    },
    {
      "name": "counties",
      "url": "data/us-10m.json",
      "format": {"type": "topojson", "feature": "counties"},
      "transform": [
        { "type": "lookup", "from": "unemp", "key": "id", "fields": ["id"], "values": ["rate"] },
        { "type": "filter", "expr": "datum.rate != null" }
      ]
    }
  ],

  "projections": [
    {
      "name": "projection",
      "type": "albersUsa"
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "quantize",
      "domain": [0, 0.15],
      "range": {"scheme": "blues-9"}
    }
  ],

  "legends": [
    {
      "fill": "color",
      "orient": "bottom-right",
      "title": "Unemployment",
      "format": "0.1%",
      "encode": {
        "symbols": {
          "update": {
            "shape": {"value": "square"},
            "stroke": {"value": "#ccc"},
            "strokeWidth": {"value": 0.2}
          }
        }
      }
    }
  ],

  "marks": [
    {
      "type": "shape",
      "from": {"data": "counties"},
      "encode": {
        "enter": { "tooltip": {"signal": "format(datum.rate, '0.1%')"}},
        "update": { "fill": {"scale": "color", "field": "rate"} },
        "hover": { "fill": {"value": "red"} }
      },
      "transform": [
        { "type": "geoshape", "projection": "projection" }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/dorling-cartogram
const dorlingCartogram: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 900,
  "height": 520,
  "autosize": "none",

  "config": {
    "legend": {
      "gradientWidth": 120,
      "gradientHeight": 10
    }
  },

  "data": [
    {
      "name": "states",
      "url": "data/us-10m.json",
      "format": {"type": "topojson", "feature": "states"}
    },
    {
      "name": "obesity",
      "url": "data/obesity.json",
      "transform": [
        {
          "type": "lookup",
          "from": "states", "key": "id",
          "fields": ["id"], "as": ["geo"]
        },
        {
          "type": "filter",
          "expr": "datum.geo"
        },
        {
          "type": "formula", "as": "centroid",
          "expr": "geoCentroid('projection', datum.geo)"
        }
      ]
    }
  ],

  "projections": [
    {
      "name": "projection",
      "type": "albersUsa",
      "scale": 1100,
      "translate": [{"signal": "width / 2"}, {"signal": "height / 2"}]
    }
  ],

  "scales": [
    {
      "name": "size",
      "domain": {"data": "obesity", "field": "rate"},
      "range": [0, 5000]
    },
    {
      "name": "color",
      "type": "sequential",
      // "nice": true, // This seems like it was an error in the example?
      "domain": {"data": "obesity", "field": "rate"},
      "range": "ramp"
    }
  ],

  "legends": [
    {
      "title": "% of Obese Adults",
      "orient": "bottom-right",
      "type": "gradient",
      "fill": "color",
      "format": ".1%"
    }
  ],

  "marks": [
    {
      "name": "circles",
      "type": "symbol",
      "from": {"data": "obesity"},
      "encode": {
        "enter": {
          "size": {"scale": "size", "field": "rate"},
          "fill": {"scale": "color", "field": "rate"},
          "stroke": {"value": "white"},
          "strokeWidth": {"value": 1.5},
          "x": {"field": "centroid[0]"},
          "y": {"field": "centroid[1]"},
          "tooltip": {"signal": "'Obesity Rate: ' + format(datum.rate, '.1%')"}
        }
      },
      "transform": [
        {
          "type": "force",
          "static": true,
          "forces": [
            {"force": "collide", "radius": {"expr": "1 + sqrt(datum.size) / 2"}},
            {"force": "x", "x": "datum.centroid[0]"},
            {"force": "y", "y": "datum.centroid[1]"}
          ]
        }
      ]
    },
    {
      "type": "text",
      "interactive": false,
      "from": {"data": "circles"},
      "encode": {
        "enter": {
          "align": {"value": "center"},
          "baseline": {"value": "middle"},
          "fontSize": {"value": 13},
          "fontWeight": {"value": "bold"},
          "text": {"field": "datum.state"}
        },
        "update": {
          "x": {"field": "x"},
          "y": {"field": "y"}
        }
      }
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/world-map
const worldMap: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 900,
  "height": 500,
  "autosize": "none",

  "encode": {
    "update": {
      "fill": {"signal": "background"}
    }
  },

  "signals": [
    {
      "name": "type",
      "value": "mercator",
      "bind": {
        "input": "select",
        "options": [
          "albers",
          "albersUsa",
          "azimuthalEqualArea",
          "azimuthalEquidistant",
          "conicConformal",
          "conicEqualArea",
          "conicEquidistant",
          "equirectangular",
          "gnomonic",
          "mercator",
          "orthographic",
          "stereographic",
          "transverseMercator"
        ]
      }
    },
    { "name": "scale", "value": 150,
      "bind": {"input": "range", "min": 50, "max": 2000, "step": 1} },
    { "name": "rotate0", "value": 0,
      "bind": {"input": "range", "min": -180, "max": 180, "step": 1} },
    { "name": "rotate1", "value": 0,
      "bind": {"input": "range", "min": -90, "max": 90, "step": 1} },
    { "name": "rotate2", "value": 0,
      "bind": {"input": "range", "min": -180, "max": 180, "step": 1} },
    { "name": "center0", "value": 0,
      "bind": {"input": "range", "min": -180, "max": 180, "step": 1} },
    { "name": "center1", "value": 0,
      "bind": {"input": "range", "min": -90, "max": 90, "step": 1} },
    { "name": "translate0", "update": "width / 2" },
    { "name": "translate1", "update": "height / 2" },

    { "name": "graticuleDash", "value": 0,
      "bind": {"input": "radio", "options": [0, 3, 5, 10]} },
    { "name": "borderWidth", "value": 1,
      "bind": {"input": "text"} },
    { "name": "background", "value": "#ffffff",
      "bind": {"input": "color"} },
    { "name": "invert", "value": false,
      "bind": {"input": "checkbox"} }
  ],

  "projections": [
    {
      "name": "projection",
      "type": {"signal": "type"},
      "scale": {"signal": "scale"},
      "rotate": [
        {"signal": "rotate0"},
        {"signal": "rotate1"},
        {"signal": "rotate2"}
      ],
      "center": [
        {"signal": "center0"},
        {"signal": "center1"}
      ],
      "translate": [
        {"signal": "translate0"},
        {"signal": "translate1"}
      ]
    }
  ],

  "data": [
    {
      "name": "world",
      "url": "data/world-110m.json",
      "format": {
        "type": "topojson",
        "feature": "countries"
      }
    },
    {
      "name": "graticule",
      "transform": [
        { "type": "graticule" }
      ]
    }
  ],

  "marks": [
    {
      "type": "shape",
      "from": {"data": "graticule"},
      "encode": {
        "update": {
          "strokeWidth": {"value": 1},
          "strokeDash": {"signal": "[+graticuleDash, +graticuleDash]"},
          "stroke": {"signal": "invert ? '#444' : '#ddd'"},
          "fill": {"value": null}
        }
      },
      "transform": [
        { "type": "geoshape", "projection": "projection" }
      ]
    },
    {
      "type": "shape",
      "from": {"data": "world"},
      "encode": {
        "update": {
          "strokeWidth": {"signal": "+borderWidth"},
          "stroke": {"signal": "invert ? '#777' : '#bbb'"},
          "fill": {"signal": "invert ? '#fff' : '#000'"},
          "zindex": {"value": 0}
        },
        "hover": {
          "strokeWidth": {"signal": "+borderWidth + 1"},
          "stroke": {"value": "firebrick"},
          "zindex": {"value": 1}
        }
      },
      "transform": [
        { "type": "geoshape", "projection": "projection" }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/earthquakes
const earthquakes: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "padding": 10,
  "width": 450,
  "height": 450,
  "autosize": "none",

  "signals": [
    {
      "name": "quakeSize", "value": 6,
      "bind": {"input": "range", "min": 0, "max": 12}
    },
    {
      "name": "rotate0", "value": 90,
      "bind": {"input": "range", "min": -180, "max": 180}
    },
    {
      "name": "rotate1", "value": -5,
      "bind": {"input": "range", "min": -180, "max": 180}
    }
  ],

  "data": [
    {
      "name": "sphere",
      "values": [
        {"type": "Sphere"}
      ]
    },
    {
      "name": "world",
      "url": "data/world-110m.json",
      "format": {
        "type": "topojson",
        "feature": "countries"
      }
    },
    {
      "name": "earthquakes",
      "url": "data/earthquakes.json",
      "format": {
        "type": "json",
        "property": "features"
      }
    }
  ],

  "projections": [
    {
      "name": "projection",
      "scale": 225,
      "type": "orthographic",
      "translate": {"signal": "[width/2, height/2]"},
      "rotate": [{"signal": "rotate0"}, {"signal": "rotate1"}, 0]
    }
  ],

  "scales": [
    {
      "name": "size",
      "type": "sqrt",
      "domain": [0, 100],
      "range": [0, {"signal": "quakeSize"}]
    }
  ],

  "marks": [
    {
      "type": "shape",
      "from": {"data": "sphere"},
      "encode": {
        "update": {
          "fill": {"value": "aliceblue"},
          "stroke": {"value": "black"},
          "strokeWidth": {"value": 1.5}
        }
      },
      "transform": [
        {
          "type": "geoshape",
          "projection": "projection"
        }
      ]
    },
    {
      "type": "shape",
      "from": {"data": "world"},
      "encode": {
        "update": {
          "fill": {"value": "mintcream"},
          "stroke": {"value": "black"},
          "strokeWidth": {"value": 0.35}
        }
      },
      "transform": [
        {
          "type": "geoshape",
          "projection": "projection"
        }
      ]
    },
    {
      "type": "shape",
      "from": {"data": "earthquakes"},
      "encode": {
        "update": {
          "opacity": {"value": 0.25},
          "fill": {"value": "red"}
        }
      },
      "transform": [
        {
          "type": "geoshape",
          "projection": "projection",
          "pointRadius": {"expr": "scale('size', exp(datum.properties.mag))"}
        }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/zoomable-world-map
const zoomableWorldMap: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 900,
  "height": 500,
  "autosize": "none",

  "signals": [
    { "name": "tx", "update": "width / 2" },
    { "name": "ty", "update": "height / 2" },
    {
      "name": "scale",
      "value": 150,
      "on": [{
        "events": {"type": "wheel", "consume": true},
        "update": "clamp(scale * pow(1.0005, -event.deltaY * pow(16, event.deltaMode)), 150, 3000)"
      }]
    },
    {
      "name": "angles",
      "value": [0, 0],
      "on": [{
        "events": "mousedown",
        "update": "[rotateX, centerY]"
      }]
    },
    {
      "name": "cloned",
      "value": null,
      "on": [{
        "events": "mousedown",
        "update": "copy('projection')"
      }]
    },
    {
      "name": "start",
      "value": null,
      "on": [{
        "events": "mousedown",
        "update": "invert(cloned, xy())"
      }]
    },
    {
      "name": "drag", "value": null,
      "on": [{
        "events": "[mousedown, window:mouseup] > window:mousemove",
        "update": "invert(cloned, xy())"
      }]
    },
    {
      "name": "delta", "value": null,
      "on": [{
        "events": {"signal": "drag"},
        "update": "[drag[0] - start[0], start[1] - drag[1]]"
      }]
    },
    {
      "name": "rotateX", "value": 0,
      "on": [{
        "events": {"signal": "delta"},
        "update": "angles[0] + delta[0]"
      }]
    },
    {
      "name": "centerY", "value": 0,
      "on": [{
        "events": {"signal": "delta"},
        "update": "clamp(angles[1] + delta[1], -60, 60)"
      }]
    }
  ],

  "projections": [
    {
      "name": "projection",
      "type": "mercator",
      "scale": {"signal": "scale"},
      "rotate": [{"signal": "rotateX"}, 0, 0],
      "center": [0, {"signal": "centerY"}],
      "translate": [{"signal": "tx"}, {"signal": "ty"}]
    }
  ],

  "data": [
    {
      "name": "world",
      "url": "data/world-110m.json",
      "format": {
        "type": "topojson",
        "feature": "countries"
      }
    },
    {
      "name": "graticule",
      "transform": [
        { "type": "graticule", "step": [15, 15] }
      ]
    }
  ],

  "marks": [
    {
      "type": "shape",
      "from": {"data": "graticule"},
      "encode": {
        "enter": {
          "strokeWidth": {"value": 1},
          "stroke": {"value": "#ddd"},
          "fill": {"value": null}
        }
      },
      "transform": [
        { "type": "geoshape", "projection": "projection" }
      ]
    },
    {
      "type": "shape",
      "from": {"data": "world"},
      "encode": {
        "enter": {
          "strokeWidth": {"value": 0.5},
          "stroke": {"value": "#bbb"},
          "fill": {"value": "#e5e8d3"}
        }
      },
      "transform": [
        { "type": "geoshape", "projection": "projection" }
      ]
    }
  ]
};

// https://vega.github.io/editor/#/examples/vega/distortion-comparison
const distortionComparison: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v3.json",
  "width": 900,
  "height": 500,
  "autosize": "none",

  "signals": [
    {
      "name": "baseProjection",
      "value": "azimuthalEqualArea",
      "bind": {
        "input": "select",
        "options": [
          "albers",
          "albersUsa",
          "azimuthalEqualArea",
          "azimuthalEquidistant",
          "conicConformal",
          "conicEqualArea",
          "conicEquidistant",
          "equirectangular",
          "gnomonic",
          "mercator",
          "orthographic",
          "stereographic",
          "transverseMercator"
        ]
      }
    },
    {
      "name": "altProjection",
      "value": "mercator",
      "bind": {
        "input": "select",
        "options": [
          "albers",
          "albersUsa",
          "azimuthalEqualArea",
          "azimuthalEquidistant",
          "conicConformal",
          "conicEqualArea",
          "conicEquidistant",
          "equirectangular",
          "gnomonic",
          "mercator",
          "orthographic",
          "stereographic",
          "transverseMercator"
        ]
      }
    },
    {
      "name": "baseColor",
      "value": "#bb8800",
      "bind": {"input": "color"}
    },
    {
      "name": "altColor",
      "value": "#0088bb",
      "bind": {"input": "color"}
    },
    {
      "name": "opacity",
      "value": 0.15,
      "bind": {"input": "range", "min": 0, "max": 1, "step": 0.05}
    },
    {
      "name": "scaleFactor",
      "value": 1,
      "bind": {"input": "range", "min": 0.05, "max": 2, "step": 0.05}
    }
  ],

  "projections": [
    {
      "name": "projection1",
      "type": {"signal": "baseProjection"},
      "scale": 150,
      "rotate": [0, 0, 0],
      "center": [0, 0],
      "translate": [
        {"signal": "width / 2"},
        {"signal": "height / 2"}
      ]
    },
    {
      "name": "projection2",
      "type": {"signal": "altProjection"},
      "scale": 150,
      "rotate": [0, 0, 0],
      "center": [0, 0],
      "translate": [
        {"signal": "width / 2"},
        {"signal": "height / 2"}
      ]
    }
  ],

  "data": [
    {
      "name": "world",
      "url": "data/world-110m.json",
      "format": {
        "type": "topojson",
        "feature": "countries"
      },
      "transform": [
        {
          "type": "formula",
          "expr": "geoCentroid('projection1', datum)",
          "as": "centroid"
        },
        {
          "type": "formula",
          "expr": "geoArea('projection1', datum)",
          "as": "area1"
        },
        {
          "type": "formula",
          "expr": "geoArea('projection2', datum)",
          "as": "area2"
        }
      ]
    },
    {
      "name": "graticule",
      "transform": [
        { "type": "graticule" }
      ]
    }
  ],

  "marks": [
    {
      "type": "shape",
      "from": {"data": "graticule"},
      "encode": {
        "update": {
          "strokeWidth": {"value": 1},
          "stroke": {"value": "#ddd"},
          "fill": {"value": null}
        }
      },
      "transform": [
        { "type": "geoshape", "projection": "projection1" }
      ]
    },
    {
      "type": "symbol",
      "from": {"data": "world"},
      "encode": {
        "update": {
          "strokeWidth": {"value": 1},
          "stroke": {"value": "#bbb"},
          "fill": {"signal": "altColor"},
          "fillOpacity": {"signal": "opacity"},
          "zindex": {"value": 0},
          "x": {"field": "centroid[0]"},
          "y": {"field": "centroid[1]"},
          "size": {"field": "area2", "mult": {"signal": "scaleFactor"}}
        },
        "hover": {
          "strokeWidth": {"value": 2},
          "stroke": {"value": "firebrick"},
          "zindex": {"value": 1}
        }
      }
    },
    {
      "type": "symbol",
      "from": {"data": "world"},
      "encode": {
        "update": {
          "strokeWidth": {"value": 1},
          "stroke": {"value": "#bbb"},
          "fill": {"signal": "baseColor"},
          "fillOpacity": {"signal": "opacity"},
          "zindex": {"value": 0},
          "x": {"field": "centroid[0]"},
          "y": {"field": "centroid[1]"},
          "size": {"field": "area1", "mult": {"signal": "scaleFactor"}}
        },
        "hover": {
          "strokeWidth": {"value": 2},
          "stroke": {"value": "firebrick"},
          "zindex": {"value": 1}
        }
      }
    }
  ]
};

// Runtime examples from https://vega.github.io/vega/usage/

function clientSideApi() {
  var view;

  vega.loader()
    .load('https://vega.github.io/vega/examples/bar-chart.vg.json')
    .then(function(data) { render(JSON.parse(data)); });

  function render(spec: Spec) {
    view = new vega.View(vega.parse(spec))
      .renderer('canvas')  // set renderer (canvas or svg)
      .initialize('#view') // initialize view within parent DOM container
      .hover()             // enable hover encode set processing
      .run();
  }
}

function serverSideApi() {
  // create a new view instance for a given Vega JSON spec
  var view = new vega.View(vega.parse(histogram))
    .renderer('none')
    .initialize();
  
  // generate a static SVG image
  view.toSVG()
    .then(function(svg) {
      // process svg string
    })
    .catch(function(err) { console.error(err); });
  
  // generate a static PNG image
  view.toCanvas()
    .then(function(canvas) {
      // process node-canvas instance
      // for example, generate a PNG stream to write
      var stream = canvas.createPNGStream();
    })
    .catch(function(err) { console.error(err); });
}