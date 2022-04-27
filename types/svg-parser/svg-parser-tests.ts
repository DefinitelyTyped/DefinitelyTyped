import { parse } from "svg-parser";
import svgParser = require("svg-parser");

// $ExpectType RootNode
parse("<svg></svg>");
// $ExpectType RootNode
svgParser.parse("<svg></svg>");
