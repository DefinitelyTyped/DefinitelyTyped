import { parseFile, parseDir, Graph } from "sass-graph";

// Example copied from readme:
// https://github.com/xzyfer/sass-graph/blob/master/readme.md
const graph1: Graph = parseFile("test/fixtures/main.scss");
const graph2: Graph = parseDir("test/fixtures");
