import box from "plotly.js/lib/box";
import candlestick from "plotly.js/lib/candlestick";
import Plotly from "plotly.js/lib/core";
import ohlc from "plotly.js/lib/ohlc";
import pie from "plotly.js/lib/pie";
import sankey from "plotly.js/lib/sankey";
import scatter from "plotly.js/lib/scatter";
import violin from "plotly.js/lib/violin";

Plotly.register([box, candlestick, ohlc, pie, sankey, scatter, violin]);
