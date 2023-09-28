import * as d3 from "d3";
import { dagre, intersect, render, util } from "dagre-d3";

const graph = new dagre.graphlib.Graph<{ extraProp: string }>();

// has graph methods from dagre.d.ts
graph.setNode("a", { extraProp: "test" });

const node: dagre.Node<{ extraProp: string }> = graph.node("a");

// has extraProp in Graph"s Generic type
// $ExpectType string
node.extraProp;

// intersect
const point = { x: 0, y: 0 };
const _ = intersect.node(node, point);
const { x: _xcircle, y: _ycircle } = intersect.circle(node, 0, point);
const { x: _xellipse, y: _yellipse } = intersect.ellipse(node, 0, 0, point);
const { x: _xpolygon, y: _ypolygon } = intersect.polygon(node, [point], point);
const { x: _xrect, y: _yrect } = intersect.rect(node, point);

// render
const renderer = new render();

// $ExpectType Arrows
const arrows = renderer.arrows();
renderer.arrows({
    ...arrows,
    arrowType: (parent: d3.Selection<any, any, any, any>, _id: string, _edge: dagre.Edge, _type: string) => {},
});

// $ExpectType Shapes
const shapes = renderer.shapes();
renderer.shapes({
    ...shapes,
    shapeName: (parent: d3.Selection<d3.BaseType, any, any, any>, _bbox: any, _node: dagre.Node) =>
        parent.insert("rect"),
});

const svg = d3.select("svg");
renderer(svg, graph);

// $ExpectType CreateNodes
const createNodes = renderer.createNodes();
renderer.createNodes((selection, _g, _shape) => selection.selectAll("g"))
    .createNodes(createNodes);

// $ExpectType CreateClusters
const createClusters = renderer.createClusters();
renderer.createClusters((selection, _g) => selection.selectAll("g"))
    .createClusters(createClusters);

// $ExpectType CreateEdgeLabels
const createEdgeLabels = renderer.createEdgeLabels();
renderer.createEdgeLabels((selection, _g) => selection.selectAll("g"))
    .createEdgeLabels(createEdgeLabels);

// $ExpectType CreateEdgePaths
const createEdgePaths = renderer.createEdgePaths();
renderer.createEdgePaths((selection, _g) => selection.selectAll("g"))
    .createEdgePaths(createEdgePaths);

// util
// $ExpectType boolean
util.isSubgraph(graph, "a");

// $ExpectType string
util.edgeToId({ v: "a", w: "b", name: "c" });

// $ExpectType void
util.applyStyle(
    d3.select<d3.BaseType, string>("svg"),
    function(
        this: d3.BaseType,
        _d: string,
        _index: number,
        _groups: d3.BaseType[] | d3.ArrayLike<d3.BaseType>,
    ) {
        return "fill: red";
    },
);

// $ExpectType void
util.applyClass(
    d3.select<d3.BaseType, string>("svg"),
    function(
        this: d3.BaseType,
        _d: string,
        _index: number,
        _groups: d3.BaseType[] | d3.ArrayLike<d3.BaseType>,
    ) {
        return "class-name";
    },
    "other-class-1 other-class-2",
);

// $ExpectType SelectionOrTransition<BaseType, string, HTMLElement, any>
util.applyTransition(
    d3.select<d3.BaseType, string>("svg"),
    graph,
);
