import * as graphlib from "graphlib";
import { render } from "dagre-d3";
import * as d3 from "d3";

const graph = new graphlib.Graph();

// has graph methods from dagre.d.ts
graph.setNode("a", {});

const renderer = new render();
renderer.arrows()["arrowType"] = (parent: d3.Selection<any, any, any, any>, id: string, edge: dagre.Edge, type: string) => { };
renderer.shapes()["shapeName"] = (parent: d3.Selection<any, any, any, any>, bbox: any, node: dagre.Node) => { };

const svg = d3.select("svg");
renderer(svg, graph);
