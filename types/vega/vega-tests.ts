

// examples from http://trifacta.github.io/vega/editor/
var specs: Vega.Spec[];

specs[0] = {
  "name": "arc",
  "width": 400,
  "height": 400,
  "data": [
    {
      "name": "table",
      "values": [12, 23, 47, 6, 52, 19],
      "transform": [
        { "type": "pie", "value": "data" }
      ]
    }
  ],
  "scales": [
    {
      "name": "r",
      "type": "sqrt",
      "domain": { "data": "table", "field": "data" },
      "range": [20, 100]
    }
  ],
  "marks": [
    {
      "type": "arc",
      "from": { "data": "table" },
      "properties": {
        "enter": {
          "x": { "group": "width", "mult": 0.5 },
          "y": { "group": "height", "mult": 0.5 },
          "startAngle": { "field": "startAngle" },
          "endAngle": { "field": "endAngle" },
          "innerRadius": { "value": 20 },
          "outerRadius": { "scale": "r" },
          "stroke": { "value": "#fff" }
        },
        "update": {
          "fill": { "value": "#ccc" }
        },
        "hover": {
          "fill": { "value": "pink" }
        }
      }
    }
  ]
}

specs[1] = {
  "width": 500,
  "height": 200,
  "padding": { "top": 10, "left": 30, "bottom": 30, "right": 10 },
  "data": [
    {
      "name": "table",
      "values": [
        { "x": 1, "y": 28 }, { "x": 2, "y": 55 },
        { "x": 3, "y": 43 }, { "x": 4, "y": 91 },
        { "x": 5, "y": 81 }, { "x": 6, "y": 53 },
        { "x": 7, "y": 19 }, { "x": 8, "y": 87 },
        { "x": 9, "y": 52 }, { "x": 10, "y": 48 },
        { "x": 11, "y": 24 }, { "x": 12, "y": 49 },
        { "x": 13, "y": 87 }, { "x": 14, "y": 66 },
        { "x": 15, "y": 17 }, { "x": 16, "y": 27 },
        { "x": 17, "y": 68 }, { "x": 18, "y": 16 },
        { "x": 19, "y": 49 }, { "x": 20, "y": 15 }
      ]
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "linear",
      "range": "width",
      "zero": false,
      "domain": { "data": "table", "field": "data.x" }
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true,
      "domain": { "data": "table", "field": "data.y" }
    }
  ],
  "axes": [
    { "type": "x", "scale": "x", "ticks": 20 },
    { "type": "y", "scale": "y" }
  ],
  "marks": [
    {
      "type": "area",
      "from": { "data": "table" },
      "properties": {
        "enter": {
          "interpolate": { "value": "monotone" },
          "x": { "scale": "x", "field": "data.x" },
          "y": { "scale": "y", "field": "data.y" },
          "y2": { "scale": "y", "value": 0 },
          "fill": { "value": "steelblue" }
        },
        "update": {
          "fillOpacity": { "value": 1 }
        },
        "hover": {
          "fillOpacity": { "value": 0.5 }
        }
      }
    }
  ]
}

specs[2] = {
  "width": 200,
  "height": 720,
  "data": [
    {
      "name": "barley",
      "url": "data/barley.json"
    },
    {
      "name": "variety",
      "source": "barley",
      "transform": [
        { "type": "facet", "keys": ["data.variety"] },
        { "type": "stats", "value": "data.yield", "median": true },
        { "type": "sort", "by": "-median" }
      ]
    },
    {
      "name": "site",
      "source": "barley",
      "transform": [
        { "type": "facet", "keys": ["data.site"] },
        { "type": "stats", "value": "data.yield", "median": true },
        { "type": "sort", "by": "-median" }
      ]
    }
  ],
  "scales": [
    {
      "name": "g",
      "type": "ordinal",
      "range": "height",
      "padding": 0.15,
      "domain": { "data": "site", "field": "key" }
    },
    {
      "name": "x",
      "type": "linear",
      "nice": true,
      "range": "width",
      "domain": { "data": "barley", "field": "data.yield" }
    },
    {
      "name": "c",
      "type": "ordinal",
      "range": "category10"
    }
  ],
  "axes": [
    { "type": "x", "scale": "x", "offset": -12 }
  ],
  "marks": [
    {
      "type": "text",
      "from": { "data": "site" },
      "properties": {
        "enter": {
          "x": { "group": "width", "mult": 0.5 },
          "y": { "scale": "g", "field": "key", "offset": -2 },
          "fontWeight": { "value": "bold" },
          "text": { "field": "key" },
          "align": { "value": "center" },
          "baseline": { "value": "bottom" },
          "fill": { "value": "#000" }
        }
      }
    },
    {
      "type": "group",
      "from": { "data": "site" },
      "scales": [
        {
          "name": "y",
          "type": "ordinal",
          "range": "height",
          "points": true,
          "padding": 1.2,
          "domain": { "data": "variety", "field": "key" }
        }
      ],
      "axes": [
        {
          "type": "y",
          "scale": "y",
          "tickSize": 0,
          "properties": { "axis": { "stroke": { "value": "transparent" } } }
        }
      ],
      "properties": {
        "enter": {
          "x": { "value": 0.5 },
          "y": { "scale": "g", "field": "key" },
          "height": { "scale": "g", "band": true },
          "width": { "group": "width" },
          "stroke": { "value": "#ccc" }
        }
      },
      "marks": [
        {
          "type": "symbol",
          "properties": {
            "enter": {
              "x": { "scale": "x", "field": "data.yield" },
              "y": { "scale": "y", "field": "data.variety" },
              "size": { "value": 50 },
              "stroke": { "scale": "c", "field": "data.year" },
              "strokeWidth": { "value": 2 }
            }
          }
        }
      ]
    }
  ]
}

specs[3] = {
  "width": 960,
  "height": 500,
  "data": [
    {
      "name": "unemp",
      "url": "data/unemployment.tsv",
      "format": { "type": "tsv", "parse": { "rate": "number" } }
    },
    {
      "name": "counties",
      "url": "data/us-10m.json",
      "format": { "type": "topojson", "feature": "counties" },
      "transform": [
        { "type": "geopath", "value": "data", "projection": "albersUsa" },
        {
          "type": "zip",
          "key": "data.id",
          "with": "unemp",
          "withKey": "data.id",
          "as": "value",
          "default": null
        },
        { "type": "filter", "test": "d.path!=null && d.value!=null" }
      ]
    }
  ],
  "scales": [
    {
      "name": "color",
      "type": "quantize",
      "domain": [0, 0.15],
      "range": ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6",
        "#4292c6", "#2171b5", "#08519c", "#08306b"]
    }
  ],
  "marks": [
    {
      "type": "path",
      "from": { "data": "counties" },
      "properties": {
        "enter": { "path": { "field": "path" } },
        "update": { "fill": { "scale": "color", "field": "value.data.rate" } },
        "hover": { "fill": { "value": "red" } }
      }
    }
  ]
}

specs[4] = {
  "width": 300,
  "height": 240,
  "data": [
    {
      "name": "table",
      "url": "data/groups.json"
    }
  ],
  "scales": [
    {
      "name": "cat",
      "type": "ordinal",
      "range": "height",
      "padding": 0.2,
      "domain": { "data": "table", "field": "data.category" }
    },
    {
      "name": "val",
      "range": "width",
      "round": true,
      "nice": true,
      "domain": { "data": "table", "field": "data.value" }
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category20"
    }
  ],
  "axes": [
    { "type": "y", "scale": "cat", "tickSize": 0, "tickPadding": 8 },
    { "type": "x", "scale": "val" }
  ],
  "marks": [
    {
      "type": "group",
      "from": {
        "data": "table",
        "transform": [{ "type": "facet", "keys": ["data.category"] }]
      },
      "properties": {
        "enter": {
          "y": { "scale": "cat", "field": "key" },
          "height": { "scale": "cat", "band": true }
        }
      },
      "scales": [
        {
          "name": "pos",
          "type": "ordinal",
          "range": "height",
          "domain": { "field": "data.position" }
        }
      ],
      "marks": [
        {
          "type": "rect",
          "properties": {
            "enter": {
              "y": { "scale": "pos", "field": "data.position" },
              "height": { "scale": "pos", "band": true },
              "x": { "scale": "val", "field": "data.value" },
              "x2": { "scale": "val", "value": 0 },
              "fill": { "scale": "color", "field": "data.position" }
            }
          }
        },
        {
          "type": "text",
          "properties": {
            "enter": {
              "y": { "scale": "pos", "field": "data.position" },
              "dy": { "scale": "pos", "band": true, "mult": 0.5 },
              "x": { "scale": "val", "field": "data.value", "offset": -4 },
              "fill": { "value": "white" },
              "align": { "value": "right" },
              "baseline": { "value": "middle" },
              "text": { "field": "data.value" }
            }
          }
        }
      ]
    }
  ]
}

specs[5] = {
  "width": 400,
  "height": 100,
  "padding": { "top": 30, "left": 30, "bottom": 30, "right": 10 },
  "data": [
    {
      "name": "stats",
      "values": [
        { "label": "Category A", "mean": 1, "lo": 0, "hi": 2 },
        { "label": "Category B", "mean": 2, "lo": 1.5, "hi": 2.5 },
        { "label": "Category C", "mean": 3, "lo": 1.7, "hi": 4.3 },
        { "label": "Category D", "mean": 4, "lo": 3, "hi": 5 },
        { "label": "Category E", "mean": 5, "lo": 4.1, "hi": 5.9 }
      ]
    }
  ],
  "scales": [
    {
      "name": "y",
      "type": "ordinal",
      "range": "height",
      "domain": { "data": "stats", "field": "index" }
    },
    {
      "name": "x",
      "range": [100, 400],
      "nice": true,
      "zero": true,
      "domain": { "data": "stats", "field": "data.hi" }
    }
  ],
  "axes": [
    { "type": "x", "scale": "x", "ticks": 6 }
  ],
  "marks": [
    {
      "type": "text",
      "from": { "data": "stats" },
      "properties": {
        "enter": {
          "x": { "value": 0 },
          "y": { "scale": "y", "field": "index" },
          "baseline": { "value": "middle" },
          "fill": { "value": "#000" },
          "text": { "field": "data.label" },
          "font": { "value": "Helvetica Neue" },
          "fontSize": { "value": 13 }
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "stats" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.lo" },
          "x2": { "scale": "x", "field": "data.hi" },
          "y": { "scale": "y", "field": "index", "offset": -1 },
          "height": { "value": 1 },
          "fill": { "value": "#888" }
        }
      }
    },
    {
      "type": "symbol",
      "from": { "data": "stats" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.mean" },
          "y": { "scale": "y", "field": "index" },
          "size": { "value": 40 },
          "fill": { "value": "#000" }
        }
      }
    }
  ]
}

specs[6] = {
  "name": "force",
  "width": 500,
  "height": 500,
  "padding": { "top": 0, "bottom": 0, "left": 0, "right": 0 },
  "data": [
    {
      "name": "edges",
      "url": "data/miserables.json",
      "format": { "type": "json", "property": "links" },
      "transform": [
        { "type": "copy", "from": "data", "fields": ["source", "target"] }
      ]
    },
    {
      "name": "nodes",
      "url": "data/miserables.json",
      "format": { "type": "json", "property": "nodes" },
      "transform": [
        {
          "type": "force",
          "links": "edges",
          "linkDistance": 70,
          "charge": -100,
          "iterations": 1000
        }
      ]
    }
  ],
  "marks": [
    {
      "type": "path",
      "from": {
        "data": "edges",
        "transform": [
          { "type": "link", "shape": "line" }
        ]
      },
      "properties": {
        "update": {
          "path": { "field": "path" },
          "stroke": { "value": "#ccc" },
          "strokeWidth": { "value": 0.5 }
        }
      }
    },
    {
      "type": "symbol",
      "from": { "data": "nodes" },
      "properties": {
        "enter": {
          "fillOpacity": { "value": 0.3 },
          "stroke": { "value": "steelblue" }
        },
        "update": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "fill": { "value": "steelblue" }
        },
        "hover": {
          "fill": { "value": "#f00" }
        }
      }
    }
  ]
};

specs[7] = {
  "name": "image",
  "width": 200,
  "height": 200,
  "padding": { "left": 30, "top": 10, "bottom": 30, "right": 10 },
  "data": [
    {
      "name": "data",
      "values": [
        { "x": 0.5, "y": 0.5, "img": "data/ffox.png" },
        { "x": 1.5, "y": 1.5, "img": "data/gimp.png" },
        { "x": 2.5, "y": 2.5, "img": "data/7zip.png" }
      ]
    }
  ],
  "scales": [
    { "name": "x", "domain": [0, 3], "range": "width" },
    { "name": "y", "domain": [0, 3], "range": "height" }
  ],
  "axes": [
    { "type": "x", "scale": "x" },
    { "type": "y", "scale": "y" }
  ],
  "marks": [
    {
      "type": "image",
      "from": { "data": "data" },
      "properties": {
        "enter": {
          "url": { "field": "data.img" },
          "width": { "value": 50 },
          "height": { "value": 50 },
          "x": { "scale": "x", "field": "data.x" },
          "y": { "scale": "y", "field": "data.y" },
          "align": { "value": "center" },
          "baseline": { "value": "middle" }
        },
        "update": {
          "opacity": { "value": 1.0 }
        },
        "hover": {
          "opacity": { "value": 0.5 }
        }
      }
    }
  ]
}

specs[8] = {
  "width": 800,
  "height": 500,
  "padding": { "left": 15, "right": 65, "top": 10, "bottom": 20 },
  "data": [
    {
      "name": "jobs",
      "url": "data/jobs.json"
    },
    {
      "name": "series",
      "source": "jobs",
      "transform": [
        { "type": "facet", "keys": ["data.job", "data.sex"] },
        { "type": "stats", "value": "data.perc" },
        { "type": "stack", "point": "data.year", "height": "data.perc", "order": "reverse" }
      ]
    },
    {
      "name": "stats",
      "source": "jobs",
      "transform": [
        { "type": "facet", "keys": ["data.year"] },
        { "type": "stats", "value": "data.perc" }
      ]
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "linear",
      "range": "width",
      "zero": false, "round": true,
      "domain": { "data": "jobs", "field": "data.year" }
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height", "round": true,
      "domain": { "data": "stats", "field": "sum" }
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": ["men", "women"],
      "range": ["#33f", "#f33"]
    },
    {
      "name": "alpha",
      "type": "linear",
      "domain": { "data": "series", "field": "sum" },
      "range": [0.4, 0.8]
    },
    {
      "name": "font",
      "type": "sqrt",
      "range": [0, 24], "round": true,
      "domain": { "data": "stats", "field": "sum" }
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
    { "type": "x", "scale": "x", "format": "d", "ticks": 15, "tickSizeEnd": 0 },
    {
      "type": "y", "scale": "y", "format": "n", "orient": "right",
      "grid": true, "layer": "back", "tickSize": 12,
      "properties": {
        "axis": { "stroke": { "value": "transparent" } },
        "grid": { "stroke": { "value": "#ccc" } },
        "ticks": { "stroke": { "value": "#ccc" } }
      }
    }
  ],
  "marks": [
    {
      "type": "group",
      "from": { "data": "series" },
      "marks": [
        {
          "type": "area",
          "properties": {
            "update": {
              "x": { "scale": "x", "field": "data.year" },
              "y": { "scale": "y", "field": "y" },
              "y2": { "scale": "y", "field": "y2" },
              "fill": { "scale": "color", "field": "data.sex" },
              "fillOpacity": { "scale": "alpha", "group": "sum" }
            },
            "hover": {
              "fillOpacity": { "value": 0.2 }
            }
          }
        }
      ]
    },
    {
      "type": "group",
      "from": { "data": "series" },
      "marks": [
        {
          "type": "text",
          "from": {
            "transform": [
              { "type": "slice", "by": "max", "field": "data.perc" }
            ]
          },
          "interactive": false,
          "properties": {
            "update": {
              "x": { "scale": "x", "field": "data.year" },
              "dx": { "scale": "offset", "field": "data.year" },
              "y": { "scale": "y", "field": "cy" },
              "fill": { "value": "#000" },
              "fillOpacity": { "scale": "font", "field": "data.perc", "mult": 0.15 },
              "fontSize": { "scale": "font", "field": "data.perc", "offset": 5 },
              "text": { "field": "data.job" },
              "align": { "scale": "align", "field": "data.year" },
              "baseline": { "value": "middle" }
            }
          }
        }
      ]
    }
  ]
};

specs[9] = {
  "name": "lifelines",
  "width": 400,
  "height": 100,
  "data": [
    {
      "name": "people",
      "values": [
        {
          "label": "Washington", "born": -7506057600000, "died": -5366196000000,
          "enter": -5701424400000, "leave": -5453884800000
        },
        {
          "label": "Adams", "born": -7389766800000, "died": -4528285200000,
          "enter": -5453884800000, "leave": -5327740800000
        },
        {
          "label": "Jefferson", "born": -7154586000000, "died": -4528285200000,
          "enter": -5327740800000, "leave": -5075280000000
        },
        {
          "label": "Madison", "born": -6904544400000, "died": -4213184400000,
          "enter": -5075280000000, "leave": -4822819200000
        },
        {
          "label": "Monroe", "born": -6679904400000, "died": -4370518800000,
          "enter": -4822819200000, "leave": -4570358400000
        }
      ]
    },
    {
      "name": "events",
      "format": { "type": "json", "parse": { "when": "date" } },
      "values": [
        { "name": "Decl. of Independence", "when": "July 4, 1776" },
        { "name": "U.S. Constitution", "when": "3/4/1789" },
        { "name": "Louisiana Purchase", "when": "April 30, 1803" },
        { "name": "Monroe Doctrine", "when": "Dec 2, 1823" }
      ]
    }

  ],
  "scales": [
    {
      "name": "y",
      "type": "ordinal",
      "range": "height",
      "domain": { "data": "people", "field": "data.label" }
    },
    {
      "name": "x",
      "type": "time",
      "range": "width",
      "round": true,
      "nice": "year",
      "domain": { "data": "people", "field": ["data.born", "data.died"] }
    }
  ],
  "axes": [
    { "type": "x", "scale": "x" }
  ],
  "marks": [
    {
      "type": "text",
      "from": { "data": "events" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.when" },
          "y": { "value": -10 },
          "angle": { "value": -25 },
          "fill": { "value": "#000" },
          "text": { "field": "data.name" },
          "font": { "value": "Helvetica Neue" },
          "fontSize": { "value": 10 }
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "events" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.when" },
          "y": { "value": -8 },
          "width": { "value": 1 },
          "height": { "group": "height", "offset": 8 },
          "fill": { "value": "#888" }
        }
      }
    },
    {
      "type": "text",
      "from": { "data": "people" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.born" },
          "y": { "scale": "y", "field": "data.label", "offset": -3 },
          "fill": { "value": "#000" },
          "text": { "field": "data.label" },
          "font": { "value": "Helvetica Neue" },
          "fontSize": { "value": 10 }
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "people" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.born" },
          "x2": { "scale": "x", "field": "data.died" },
          "y": { "scale": "y", "field": "data.label" },
          "height": { "value": 2 },
          "fill": { "value": "#557" }
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "people" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.enter" },
          "x2": { "scale": "x", "field": "data.leave" },
          "y": { "scale": "y", "field": "data.label", "offset": -1 },
          "height": { "value": 4 },
          "fill": { "value": "#e44" }
        }
      }
    }
  ]
}

specs[10] = {
  "width": 1920,
  "height": 1000,
  "viewport": [960, 500],
  "data": [
    {
      "name": "world",
      "url": "data/world-110m.json",
      "format": { "type": "topojson", "feature": "countries" }
    }
  ],
  "marks": [
    {
      "type": "path",
      "from": {
        "data": "world",
        "transform": [{
          "type": "geopath",
          "value": "data",
          "projection": "winkel3",
          "scale": 300,
          "translate": [960, 500]
        }]
      },
      "properties": {
        "enter": {
          "stroke": { "value": "#fff" },
          "path": { "field": "path" }
        },
        "update": { "fill": { "value": "#ccc" } },
        "hover": { "fill": { "value": "pink" } }
      }
    }
  ]
}

specs[11] = {
  "width": 760,
  "height": 260,
  "data": [
    {
      "name": "temp",
      "url": "data/napoleon.json",
      "format": { "type": "json", "property": "temp" },
      "transform": [
        { "type": "formula", "field": "lat", "expr": "55" },
        {
          "type": "geo",
          "lat": "lat",
          "lon": "data.lon",
          "center": [32.52, 53.3],
          "scale": 3000
        }
      ]
    },
    {
      "name": "army",
      "url": "data/napoleon.json",
      "format": { "type": "json", "property": "army" },
      "transform": [
        {
          "type": "geo",
          "lat": "data.lat",
          "lon": "data.lon",
          "center": [32.52, 53.3],
          "scale": 3000
        }
      ]
    },
    {
      "name": "cities",
      "url": "data/napoleon.json",
      "format": { "type": "json", "property": "cities" },
      "transform": [
        {
          "type": "geo",
          "lat": "data.lat",
          "lon": "data.lon",
          "center": [32.52, 53.3],
          "scale": 3000
        }
      ]
    }
  ],
  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": { "data": "army", "field": "data.dir" },
      "range": ["brown", "black"]
    },
    {
      "name": "lw",
      "type": "linear", "zero": false,
      "domain": { "data": "army", "field": "data.size" },
      "range": [1, 50]
    }
  ],
  "marks": [
    {
      "type": "group",
      "properties": {
        "enter": {
          "x": { "value": 0 },
          "y": { "value": 200 },
          "width": { "group": "width" },
          "height": { "value": 60 }
        }
      },
      "scales": [
        {
          "name": "y",
          "type": "linear", "zero": false, "round": true,
          "domain": { "data": "temp", "field": "data.temp" },
          "range": "height"
        }
      ],
      "axes": [
        {
          "type": "y", "scale": "y", "ticks": 4, "orient": "right",
          "grid": true, "layer": "back"
        }
      ],
      "marks": [
        {
          "type": "rule",
          "from": { "data": "temp" },
          "properties": {
            "enter": {
              "x": { "field": "x" },
              "y1": 0,
              "y2": { "scale": "y", "field": "data.temp" },
              "stroke": { "value": "#ccc" }
            }
          }
        },
        {
          "type": "line",
          "from": { "data": "temp" },
          "properties": {
            "enter": {
              "x": { "field": "x" },
              "y": { "scale": "y", "field": "data.temp" },
              "stroke": { "value": "#000" },
              "strokeWidth": { "value": 2 }
            }
          }
        },
        {
          "type": "text",
          "from": { "data": "temp" },
          "properties": {
            "enter": {
              "x": { "field": "x", "offset": -2 },
              "y": { "scale": "y", "field": "data.temp", "offset": 6 },
              "fill": { "value": "#000" },
              "text": { "field": "data.date" },
              "font": { "value": "Georgia" },
              "fontSize": { "value": 10 },
              "align": { "value": "center" },
              "baseline": { "value": "top" }
            }
          }
        }
      ]
    },
    {
      "type": "group",
      "from": {
        "data": "army",
        "transform": [
          { "type": "facet", "keys": ["data.group", "data.dir"] }
        ]
      },
      "marks": [
        {
          "type": "group",
          "from": {
            "transform": [
              { "type": "window", "size": 2, "step": 1 }
            ]
          },
          "marks": [
            {
              "type": "line",
              "properties": {
                "enter": {
                  "x": { "field": "x" },
                  "y": { "field": "y" },
                  "stroke": { "scale": "color", "field": "data.dir" },
                  "strokeWidth": { "scale": "lw", "field": "data.size" },
                  "strokeCap": { "value": "round" }
                }
              }
            }
          ]
        }
      ]
    },
    {
      "type": "symbol",
      "from": { "data": "cities" },
      "properties": {
        "enter": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "size": { "value": 25 },
          "fill": { "value": "brown" },
          "stroke": { "value": "#000" }
        }
      }
    },
    {
      "type": "text",
      "from": { "data": "cities" },
      "properties": {
        "enter": {
          "x": { "field": "x", "offset": 1 },
          "y": { "field": "y", "offset": -4 },
          "fill": { "value": "#fff" },
          "fillOpacity": { "value": 0.8 },
          "text": { "field": "data.city" },
          "align": { "value": "center" },
          "baseline": { "value": "bottom" },
          "font": { "value": "Georgia" },
          "fontSize": { "value": 9 },
          "fontStyle": { "value": "italic" }
        }
      }
    },
    {
      "type": "text",
      "from": { "data": "cities" },
      "properties": {
        "enter": {
          "x": { "field": "x" },
          "y": { "field": "y", "offset": -5 },
          "fill": { "value": "#000" },
          "text": { "field": "data.city" },
          "align": { "value": "center" },
          "baseline": { "value": "bottom" },
          "font": { "value": "Georgia" },
          "fontSize": { "value": 9 },
          "fontStyle": { "value": "italic" }
        }
      }
    }
  ]
}

specs[12] = {
  "width": 700,
  "height": 400,
  "data": [
    {
      "name": "cars",
      "url": "data/cars.json"
    },
    {
      "name": "fields",
      "values": ["cyl", "dsp", "lbs", "hp", "acc", "mpg", "year"]
    }
  ],
  "scales": [
    {
      "name": "ord",
      "type": "ordinal",
      "range": "width", "points": true,
      "domain": { "data": "fields", "field": "data" }
    },
    {
      "name": "cyl",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.cyl" }
    },
    {
      "name": "dsp",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.dsp" }
    },
    {
      "name": "lbs",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.lbs" }
    },
    {
      "name": "hp",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.hp" }
    },
    {
      "name": "acc",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.acc" }
    },
    {
      "name": "mpg",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.mpg" }
    },
    {
      "name": "year",
      "range": "height", "zero": false, "nice": true,
      "domain": { "data": "cars", "field": "data.year" }
    }
  ],
  "axes": [
    { "type": "y", "scale": "cyl", "offset": { "scale": "ord", "value": "cyl" } },
    { "type": "y", "scale": "dsp", "offset": { "scale": "ord", "value": "dsp" } },
    { "type": "y", "scale": "lbs", "offset": { "scale": "ord", "value": "lbs" } },
    { "type": "y", "scale": "hp", "offset": { "scale": "ord", "value": "hp" } },
    { "type": "y", "scale": "acc", "offset": { "scale": "ord", "value": "acc" } },
    { "type": "y", "scale": "mpg", "offset": { "scale": "ord", "value": "mpg" } },
    { "type": "y", "scale": "year", "offset": { "scale": "ord", "value": "year" } }
  ],
  "marks": [
    {
      "type": "group",
      "from": { "data": "cars" },
      "marks": [
        {
          "type": "line",
          "from": { "data": "fields" },
          "properties": {
            "enter": {
              "x": { "scale": "ord", "field": "data" },
              "y": { "scale": { "field": "data" }, "group": "data", "field": "data" },
              "stroke": { "value": "steelblue" },
              "strokeWidth": { "value": 1 },
              "strokeOpacity": { "value": 0.3 }
            }
          }
        }
      ]
    },
    {
      "type": "text",
      "from": { "data": "fields" },
      "properties": {
        "enter": {
          "x": { "scale": "ord", "field": "data", "offset": -8 },
          "y": { "group": "height", "offset": 6 },
          "fontWeight": { "value": "bold" },
          "fill": { "value": "black" },
          "text": { "field": "data" },
          "align": { "value": "right" },
          "baseline": { "value": "top" }
        }
      }
    }
  ]
}

specs[13] = {
  "width": 700,
  "height": 400,
  "padding": { "top": 0, "left": 0, "bottom": 20, "right": 0 },
  "data": [
    {
      "name": "pop2000",
      "url": "data/population.json",
      "transform": [
        { "type": "filter", "test": "d.data.year == 2000" }
      ]
    }
  ],
  "scales": [
    {
      "name": "g",
      "domain": [0, 1],
      "range": [340, 10]
    },
    {
      "name": "y",
      "type": "ordinal",
      "range": "height",
      "reverse": true,
      "domain": { "data": "pop2000", "field": "data.age" }
    },
    {
      "name": "c",
      "type": "ordinal",
      "domain": [1, 2],
      "range": ["#1f77b4", "#e377c2"]
    }
  ],
  "marks": [
    {
      "type": "text",
      "interactive": false,
      "from": {
        "data": "pop2000",
        "transform": [{ "type": "unique", "field": "data.age", "as": "age" }]
      },
      "properties": {
        "enter": {
          "x": { "value": 325 },
          "y": { "scale": "y", "field": "age", "offset": 11 },
          "text": { "field": "age" },
          "baseline": { "value": "middle" },
          "align": { "value": "center" },
          "fill": { "value": "#000" }
        }
      }
    },
    {
      "type": "group",
      "from": {
        "data": "pop2000",
        "transform": [
          { "type": "facet", "keys": ["data.sex"] }
        ]
      },
      "properties": {
        "update": {
          "x": { "scale": "g", "field": "index" },
          "y": { "value": 0 },
          "width": { "value": 300 },
          "height": { "group": "height" }
        }
      },
      "scales": [
        {
          "name": "x",
          "type": "linear",
          "range": "width",
          "reverse": true,
          "nice": true,
          "domain": { "data": "pop2000", "field": "data.people" }
        }
      ],
      "axes": [
        { "type": "x", "scale": "x", "format": "s" }
      ],
      "marks": [
        {
          "type": "rect",
          "properties": {
            "enter": {
              "x": { "scale": "x", "field": "data.people" },
              "x2": { "scale": "x", "value": 0 },
              "y": { "scale": "y", "field": "data.age" },
              "height": { "scale": "y", "band": true, "offset": -1 },
              "fillOpacity": { "value": 0.6 },
              "fill": { "scale": "c", "field": "data.sex" }
            }
          }
        }
      ]
    }
  ]
}

specs[14] = {
  "width": 200,
  "height": 200,
  "data": [
    {
      "name": "iris",
      "url": "data/iris.json"
    }
  ],
  "scales": [
    {
      "name": "x",
      "nice": true,
      "range": "width",
      "domain": { "data": "iris", "field": "data.sepalWidth" }
    },
    {
      "name": "y",
      "nice": true,
      "range": "height",
      "domain": { "data": "iris", "field": "data.petalLength" }
    },
    {
      "name": "c",
      "type": "ordinal",
      "domain": { "data": "iris", "field": "data.species" },
      "range": ["#800", "#080", "#008"]
    }
  ],
  "axes": [
    { "type": "x", "scale": "x", "offset": 5, "ticks": 5, "title": "Sepal Width" },
    { "type": "y", "scale": "y", "offset": 5, "ticks": 5, "title": "Petal Length" }
  ],
  "legends": [
    {
      "fill": "c",
      "title": "Species",
      "offset": 0,
      "properties": {
        "symbols": {
          "fillOpacity": { "value": 0.5 },
          "stroke": { "value": "transparent" }
        }
      }
    }
  ],
  "marks": [
    {
      "type": "symbol",
      "from": { "data": "iris" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "data.sepalWidth" },
          "y": { "scale": "y", "field": "data.petalLength" },
          "fill": { "scale": "c", "field": "data.species" },
          "fillOpacity": { "value": 0.5 }
        },
        "update": {
          "size": { "value": 100 },
          "stroke": { "value": "transparent" }
        },
        "hover": {
          "size": { "value": 300 },
          "stroke": { "value": "white" }
        }
      }
    }
  ]
}

specs[15] = {
  "width": 600,
  "height": 600,
  "data": [
    {
      "name": "iris",
      "url": "data/iris.json"
    },
    {
      "name": "fields",
      "values": ["petalLength", "petalWidth", "sepalWidth", "sepalLength"]
    }
  ],
  "scales": [
    {
      "name": "gx",
      "type": "ordinal",
      "range": "width",
      "round": true,
      "domain": { "data": "fields", "field": "data" }
    },
    {
      "name": "gy",
      "type": "ordinal",
      "range": "height",
      "round": true,
      "domain": { "data": "fields", "field": "data" }
    },
    {
      "name": "c",
      "type": "ordinal",
      "domain": { "data": "iris", "field": "data.species" },
      "range": ["#800", "#080", "#008"]
    }
  ],
  "legends": [
    {
      "fill": "c",
      "title": "Species",
      "offset": 10,
      "properties": {
        "symbols": {
          "fillOpacity": { "value": 0.5 },
          "stroke": { "value": "transparent" }
        }
      }
    }
  ],
  "marks": [
    {
      "type": "group",
      "from": {
        "data": "fields",
        "transform": [{ "type": "cross" }]
      },
      "properties": {
        "enter": {
          "x": { "scale": "gx", "field": "a.data" },
          "y": { "scale": "gy", "field": "b.data" },
          "width": { "scale": "gx", "band": true, "offset": -35 },
          "height": { "scale": "gy", "band": true, "offset": -35 },
          "stroke": { "value": "#ddd" }
        }
      },
      "scales": [
        {
          "name": "x",
          "range": "width",
          "zero": false,
          "round": true,
          "domain": { "data": "iris", "field": { "group": "a.data" } }
        },
        {
          "name": "y",
          "range": "height",
          "zero": false,
          "round": true,
          "domain": { "data": "iris", "field": { "group": "b.data" } }
        }
      ],
      "axes": [
        { "type": "x", "scale": "x", "ticks": 5 },
        { "type": "y", "scale": "y", "ticks": 5 }
      ],
      "marks": [
        {
          "type": "symbol",
          "from": { "data": "iris" },
          "properties": {
            "enter": {
              "x": { "scale": "x", "field": { "group": "a.data" } },
              "y": { "scale": "y", "field": { "group": "b.data" } },
              "fill": { "scale": "c", "field": "data.spec[0]ies" },
              "fillOpacity": { "value": 0.5 }
            },
            "update": {
              "size": { "value": 36 },
              "stroke": { "value": "transparent" }
            },
            "hover": {
              "size": { "value": 100 },
              "stroke": { "value": "white" }
            }
          }
        }
      ]
    }
  ]
}

specs[16] = {
  "width": 500,
  "height": 200,
  "padding": { "top": 10, "left": 30, "bottom": 30, "right": 10 },
  "data": [
    {
      "name": "table",
      "values": [
        { "x": 0, "y": 28, "c": 0 }, { "x": 0, "y": 55, "c": 1 },
        { "x": 1, "y": 43, "c": 0 }, { "x": 1, "y": 91, "c": 1 },
        { "x": 2, "y": 81, "c": 0 }, { "x": 2, "y": 53, "c": 1 },
        { "x": 3, "y": 19, "c": 0 }, { "x": 3, "y": 87, "c": 1 },
        { "x": 4, "y": 52, "c": 0 }, { "x": 4, "y": 48, "c": 1 },
        { "x": 5, "y": 24, "c": 0 }, { "x": 5, "y": 49, "c": 1 },
        { "x": 6, "y": 87, "c": 0 }, { "x": 6, "y": 66, "c": 1 },
        { "x": 7, "y": 17, "c": 0 }, { "x": 7, "y": 27, "c": 1 },
        { "x": 8, "y": 68, "c": 0 }, { "x": 8, "y": 16, "c": 1 },
        { "x": 9, "y": 49, "c": 0 }, { "x": 9, "y": 15, "c": 1 }
      ]
    },
    {
      "name": "stats",
      "source": "table",
      "transform": [
        { "type": "facet", "keys": ["data.x"] },
        { "type": "stats", "value": "data.y" }
      ]
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "linear",
      "range": "width",
      "zero": false,
      "domain": { "data": "table", "field": "data.x" }
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true,
      "domain": { "data": "stats", "field": "sum" }
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category10"
    }
  ],
  "axes": [
    { "type": "x", "scale": "x" },
    { "type": "y", "scale": "y" }
  ],
  "marks": [
    {
      "type": "group",
      "from": {
        "data": "table",
        "transform": [
          { "type": "facet", "keys": ["data.c"] },
          { "type": "stack", "point": "data.x", "height": "data.y" }
        ]
      },
      "marks": [
        {
          "type": "area",
          "properties": {
            "enter": {
              "interpolate": { "value": "monotone" },
              "x": { "scale": "x", "field": "data.x" },
              "y": { "scale": "y", "field": "y" },
              "y2": { "scale": "y", "field": "y2" },
              "fill": { "scale": "color", "field": "data.c" }
            },
            "update": {
              "fillOpacity": { "value": 1 }
            },
            "hover": {
              "fillOpacity": { "value": 0.5 }
            }
          }
        }
      ]
    }
  ]
}

specs[17] = {
  "width": 500,
  "height": 200,
  "padding": { "top": 10, "left": 30, "bottom": 30, "right": 10 },
  "data": [
    {
      "name": "table",
      "values": [
        { "x": 0, "y": 28, "c": 0 }, { "x": 0, "y": 55, "c": 1 },
        { "x": 1, "y": 43, "c": 0 }, { "x": 1, "y": 91, "c": 1 },
        { "x": 2, "y": 81, "c": 0 }, { "x": 2, "y": 53, "c": 1 },
        { "x": 3, "y": 19, "c": 0 }, { "x": 3, "y": 87, "c": 1 },
        { "x": 4, "y": 52, "c": 0 }, { "x": 4, "y": 48, "c": 1 },
        { "x": 5, "y": 24, "c": 0 }, { "x": 5, "y": 49, "c": 1 },
        { "x": 6, "y": 87, "c": 0 }, { "x": 6, "y": 66, "c": 1 },
        { "x": 7, "y": 17, "c": 0 }, { "x": 7, "y": 27, "c": 1 },
        { "x": 8, "y": 68, "c": 0 }, { "x": 8, "y": 16, "c": 1 },
        { "x": 9, "y": 49, "c": 0 }, { "x": 9, "y": 15, "c": 1 }
      ]
    },
    {
      "name": "stats",
      "source": "table",
      "transform": [
        { "type": "facet", "keys": ["data.x"] },
        { "type": "stats", "value": "data.y" }
      ]
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "ordinal",
      "range": "width",
      "domain": { "data": "table", "field": "data.x" }
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true,
      "domain": { "data": "stats", "field": "sum" }
    },
    {
      "name": "color",
      "type": "ordinal",
      "range": "category10"
    }
  ],
  "axes": [
    { "type": "x", "scale": "x" },
    { "type": "y", "scale": "y" }
  ],
  "marks": [
    {
      "type": "group",
      "from": {
        "data": "table",
        "transform": [
          { "type": "facet", "keys": ["data.c"] },
          { "type": "stack", "point": "data.x", "height": "data.y" }
        ]
      },
      "marks": [
        {
          "type": "rect",
          "properties": {
            "enter": {
              "x": { "scale": "x", "field": "data.x" },
              "width": { "scale": "x", "band": true, "offset": -1 },
              "y": { "scale": "y", "field": "y" },
              "y2": { "scale": "y", "field": "y2" },
              "fill": { "scale": "color", "field": "data.c" }
            },
            "update": {
              "fillOpacity": { "value": 1 }
            },
            "hover": {
              "fillOpacity": { "value": 0.5 }
            }
          }
        }
      ]
    }
  ]
}

specs[18] = {
  "width": 500,
  "height": 200,
  "data": [
    {
      "name": "stocks",
      "url": "data/stocks.csv",
      "format": { "type": "csv", "parse": { "price": "number", "date": "date" } }
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "time",
      "range": "width",
      "domain": { "data": "stocks", "field": "data.date" }
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "nice": true,
      "domain": { "data": "stocks", "field": "data.price" }
    },
    {
      "name": "color", "type": "ordinal", "range": "category10"
    }
  ],
  "axes": [
    { "type": "x", "scale": "x", "tickSizeEnd": 0 },
    { "type": "y", "scale": "y" }
  ],
  "marks": [
    {
      "type": "group",
      "from": {
        "data": "stocks",
        "transform": [{ "type": "facet", "keys": ["data.symbol"] }]
      },
      "marks": [
        {
          "type": "line",
          "properties": {
            "enter": {
              "x": { "scale": "x", "field": "data.date" },
              "y": { "scale": "y", "field": "data.price" },
              "stroke": { "scale": "color", "field": "data.symbol" },
              "strokeWidth": { "value": 2 }
            }
          }
        },
        {
          "type": "text",
          "from": {
            "transform": [{ "type": "filter", "test": "index==data.length-1" }]
          },
          "properties": {
            "enter": {
              "x": { "scale": "x", "field": "data.date", "offset": 2 },
              "y": { "scale": "y", "field": "data.price" },
              "fill": { "scale": "color", "field": "data.symbol" },
              "text": { "field": "data.symbol" },
              "baseline": { "value": "middle" }
            }
          }
        }
      ]
    }
  ]
}

specs[19] = {
  "name": "treemap",
  "width": 960,
  "height": 500,
  "padding": 2.5,
  "data": [
    {
      "name": "tree",
      "url": "data/flare.json",
      "format": { "type": "treejson" },
      "transform": [
        { "type": "treemap", "value": "data.size" }
      ]
    }
  ],
  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "range": [
        "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d",
        "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476",
        "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc",
        "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"
      ]
    },
    {
      "name": "size",
      "type": "ordinal",
      "domain": [0, 1, 2, 3],
      "range": [256, 28, 20, 14]
    },
    {
      "name": "opacity",
      "type": "ordinal",
      "domain": [0, 1, 2, 3],
      "range": [0.15, 0.5, 0.8, 1.0]
    }
  ],
  "marks": [
    {
      "type": "rect",
      "from": {
        "data": "tree",
        "transform": [{ "type": "filter", "test": "d.values" }]
      },
      "interactive": false,
      "properties": {
        "enter": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "width": { "field": "width" },
          "height": { "field": "height" },
          "fill": { "scale": "color", "field": "data.name" }
        }
      }
    },
    {
      "type": "rect",
      "from": {
        "data": "tree",
        "transform": [{ "type": "filter", "test": "!d.values" }]
      },
      "properties": {
        "enter": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "width": { "field": "width" },
          "height": { "field": "height" },
          "stroke": { "value": "#fff" }
        },
        "update": {
          "fill": { "value": "rgba(0,0,0,0)" }
        },
        "hover": {
          "fill": { "value": "red" }
        }
      }
    },
    {
      "type": "text",
      "from": {
        "data": "tree",
        "transform": [{ "type": "filter", "test": "d.values" }]
      },
      "interactive": false,
      "properties": {
        "enter": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "dx": { "field": "width", "mult": 0.5 },
          "dy": { "field": "height", "mult": 0.5 },
          "font": { "value": "Helvetica Neue" },
          "fontSize": { "scale": "size", "field": "depth" },
          "align": { "value": "center" },
          "baseline": { "value": "middle" },
          "fill": { "value": "#000" },
          "fillOpacity": { "scale": "opacity", "field": "depth" },
          "text": { "field": "data.name" }
        }
      }
    }
  ]
}

specs[20] = {
  "width": 250,
  "height": 200,
  "data": [
    {
      "name": "weather",
      "url": "data/weather.json"
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "ordinal",
      "range": "width",
      "padding": 0.1, "round": true,
      "domain": { "data": "weather", "field": "index" }
    },
    {
      "name": "y",
      "range": "height",
      "nice": true, "zero": false, "round": true,
      "domain": {
        "data": "weather",
        "field": ["data.record.low", "data.record.high"]
      }
    }
  ],
  "axes": [
    {
      "type": "y", "scale": "y", "ticks": 3, "tickSize": 0,
      "orient": "right", "grid": true,
      "properties": {
        "grid": { "stroke": { "value": "white" }, "strokeWidth": { "value": 2 } },
        "axis": { "stroke": { "value": "transparent" } }
      }
    }
  ],
  "marks": [
    {
      "type": "text",
      "from": { "data": "weather" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index" },
          "dx": { "scale": "x", "band": true, "mult": 0.5 },
          "y": { "value": 0 },
          "fill": { "value": "#000" },
          "text": { "field": "data.day" },
          "align": { "value": "center" },
          "baseline": { "value": "bottom" }
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "weather" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index" },
          "width": { "scale": "x", "band": true, "offset": -1 },
          "y": { "scale": "y", "field": "data.record.low" },
          "y2": { "scale": "y", "field": "data.record.high" },
          "fill": { "value": "#ccc" }
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "weather" },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index" },
          "width": { "scale": "x", "band": true, "offset": -1 },
          "y": { "scale": "y", "field": "data.normal.low" },
          "y2": { "scale": "y", "field": "data.normal.high" },
          "fill": { "value": "#999" }
        }
      }
    },
    {
      "type": "rect",
      "from": {
        "data": "weather",
        "transform": [{ "type": "filter", "test": "d.data.actual" }]
      },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index", "offset": 4 },
          "width": { "scale": "x", "band": true, "offset": -8 },
          "y": { "scale": "y", "field": "data.actual.low" },
          "y2": { "scale": "y", "field": "data.actual.high" },
          "fill": { "value": "#000" }
        }
      }
    },
    {
      "type": "rect",
      "from": {
        "data": "weather",
        "transform": [{ "type": "filter", "test": "d.data.forecast" }]
      },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index", "offset": 9 },
          "width": { "scale": "x", "band": true, "offset": -18 },
          "y": { "scale": "y", "field": "data.forecast.low.low" },
          "y2": { "scale": "y", "field": "data.forecast.high.high" },
          "fill": { "value": "#000" }
        }
      }
    },
    {
      "type": "rect",
      "from": {
        "data": "weather",
        "transform": [{ "type": "filter", "test": "d.data.forecast" }]
      },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index", "offset": 4 },
          "width": { "scale": "x", "band": true, "offset": -8 },
          "y": { "scale": "y", "field": "data.forecast.low.low" },
          "y2": { "scale": "y", "field": "data.forecast.low.high" },
          "fill": { "value": "#000" }
        }
      }
    },
    {
      "type": "rect",
      "from": {
        "data": "weather",
        "transform": [{ "type": "filter", "test": "d.data.forecast" }]
      },
      "properties": {
        "enter": {
          "x": { "scale": "x", "field": "index", "offset": 4 },
          "width": { "scale": "x", "band": true, "offset": -8 },
          "y": { "scale": "y", "field": "data.forecast.high.low" },
          "y2": { "scale": "y", "field": "data.forecast.high.high" },
          "fill": { "value": "#000" }
        }
      }
    }
  ]
}

specs[21] = {
  "name": "wordcloud",
  "width": 400,
  "height": 400,
  "padding": { "top": 0, "bottom": 0, "left": 0, "right": 0 },
  "data": [
    {
      "name": "table",
      "values": [
        { "text": "poem", "value": 80 },
        { "text": "peom", "value": 44 },
        { "text": "moep", "value": 40 },
        { "text": "meop", "value": 36 },
        { "text": "emop", "value": 32 },
        { "text": "epom", "value": 28 },
        { "text": "opem", "value": 24 },
        { "text": "omep", "value": 20 },
        { "text": "mope", "value": 56 },
        { "text": "mepo", "value": 12 },
        { "text": "pemo", "value": 10 },
        { "text": "pome", "value": 10 }
      ],
      "transform": [
        {
          "type": "wordcloud",
          "text": "data.text",
          "font": "Helvetica Neue",
          "fontSize": "data.value",
          "rotate": { "random": [-60, -30, 0, 30, 60] }
        }
      ]
    }
  ],
  "marks": [
    {
      "type": "text",
      "from": { "data": "table" },
      "properties": {
        "enter": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "angle": { "field": "angle" },
          "align": { "value": "center" },
          "baseline": { "value": "alphabetic" },
          "font": { "field": "font" },
          "fontSize": { "field": "fontSize" },
          "text": { "field": "data.text" }
        },
        "update": {
          "fill": { "value": "steelblue" }
        },
        "hover": {
          "fill": { "value": "#f00" }
        }
      }
    }
  ]
}

specs.forEach(spec => {
  vg.parse.spec(spec, chart => {
  chart({el:"#vis"}).update();
  });
});