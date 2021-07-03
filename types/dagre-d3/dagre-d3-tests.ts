import { dagre, intersect, render, util } from "dagre-d3";
import * as d3 from "d3";

const graph = new dagre.graphlib.Graph<{extraProp: string}>();

// has graph methods from dagre.d.ts
graph.setNode("a", {});

const node: dagre.Node<{extraProp: string}> = graph.node("a");

// has extraProp in Graph"s Generic type
const _extraProp: string = node.extraProp;


// intersect
const point = {x: 0, y: 0};
const _ = intersect.node(node, point);
const {x: _xcircle, y: _ycircle} = intersect.circle(node, 0, point);
const {x: _xellipse, y: _yellipse} = intersect.ellipse(node, 0, 0, point);
const {x: _xpolygon, y: _ypolygon} = intersect.polygon(node, [point], point);
const {x: _xrect, y: _yrect} = intersect.rect(node, point);

// render
const renderer = new render();

const arrows = renderer.arrows();
renderer.arrows({
  ...arrows,
  arrowType: (parent: d3.Selection<any, any, any, any>, _id: string, _edge: dagre.Edge, _type: string) => { }
});

const shapes = renderer.shapes();
renderer.shapes({
  ...shapes,
  shapeName: (parent: d3.Selection<d3.BaseType, any, any, any>, _bbox: any, _node: dagre.Node) => parent.insert("rect"),
});

const svg = d3.select("svg");
renderer(svg, graph);

const createNodes = renderer.createNodes();
renderer.createNodes((selection, _g, _shape) => selection.selectAll("g"))
  .createNodes(createNodes);

const createClusters = renderer.createClusters();
renderer.createClusters((selection, _g) => selection.selectAll("g"))
  .createClusters(createClusters);

const createEdgeLabels = renderer.createEdgeLabels();
renderer.createEdgeLabels((selection, _g) => selection.selectAll("g"))
  .createEdgeLabels(createEdgeLabels);

const createEdgePaths = renderer.createEdgePaths();
renderer.createEdgePaths((selection, _g) => selection.selectAll("g"))
  .createEdgePaths(createEdgePaths);

// util
const _isSubgraph: boolean = util.isSubgraph(graph, "a");

const _id: string = util.edgeToId({v: "a", w: "b", name: "c"});

util.applyStyle(
  d3.select<d3.BaseType, string>("svg"),
  function (
    this: d3.BaseType,
    _d: string,
    _index: number,
    _groups: d3.BaseType[] | d3.ArrayLike<d3.BaseType>,
  ) {
    return "fill: red";
  }
);

util.applyClass(
  d3.select<d3.BaseType, string>("svg"),
  function (
    this: d3.BaseType,
    _d: string,
    _index: number,
    _groups: d3.BaseType[] | d3.ArrayLike<d3.BaseType>,
  ) {
    return "class-name";
  },
  'other-class-1 other-class-2'
);

const _applyTransition:
  d3.Selection<d3.BaseType, string, HTMLElement, any> |
  d3.Transition<d3.BaseType, string, HTMLElement, any> 
= util.applyTransition(
  d3.select<d3.BaseType, string>("svg"),
  graph,
);
