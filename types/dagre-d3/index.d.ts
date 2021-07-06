// Type definitions for dagre-d3.core.js 0.6
// Project: https://github.com/dagrejs/dagre-d3
// Definitions by: Matthew Simmons <https://github.com/simmonmt>
//                 Mark Wong Siang Kai <https://github.com/markwongsk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as d3 from "d3";
import * as dagre from "dagre";
import * as graphlib from "graphlib";

export as namespace dagreD3;

export {
  dagre as dagre,
  graphlib as graphlib,
};

export interface Point {
  x: number;
  y: number;
}

export const intersect: {
  node: (node: dagre.Node, point: any) => any;

  circle: (
    node: dagre.Node,
    rx: number,
    point: Point,
  ) => Point;

  ellipse: (
    node: dagre.Node,
    rx: number,
    ry: number,
    point: Point,
  ) => Point;

  polygon: (
    node: dagre.Node,
    polyPoints: Point[],
    point: Point,
  ) => Point;

  rect: (
    node: dagre.Node,
    point: Point,
  ) => Point;
};

export const render: { new(): Render };

export const util: {
  isSubgraph: (g: dagre.graphlib.Graph<any>, v: string) => boolean,

  edgeToId: (e: {v: string, w: string, name: string}) => string,

  applyStyle: <GElement extends d3.BaseType, Datum>(
    dom: d3.Selection<GElement, Datum, any, any>,
    styleFn: d3.ValueFn<GElement, Datum, string | number | boolean | null>,
  ) => void,

  applyClass: <GElement extends d3.BaseType, Datum>(
    dom: d3.Selection<GElement, Datum, any, any>,
    classFn: d3.ValueFn<GElement, Datum, string | number | boolean | null>,
    otherClasses: string,
  ) => void,

  applyTransition: <GElement extends d3.BaseType, Datum, PElement extends d3.BaseType, PDatum>(
    selection: d3.Selection<GElement, Datum, PElement, PDatum>,
    g: dagre.graphlib.Graph<any>,
  ) => d3.Transition<GElement, Datum, PElement, PDatum> | d3.Selection<GElement, Datum, PElement, PDatum>,
};

export type CreateNodes = (
  selection: d3.Selection<SVGGElement, string, any, any>,
  g: dagre.graphlib.Graph<any>,
  shapes: Shapes,
) => d3.Selection<d3.BaseType, any, any, any>;

export type CreateClusters = (
  selection: d3.Selection<SVGGElement, string, any, any>,
  g: dagre.graphlib.Graph<any>,
) => d3.Selection<d3.BaseType, any, any, any>;

export type CreateEdgeLabels = (
  selection: d3.Selection<SVGGElement, string, any, any>,
  g: dagre.graphlib.Graph<any>,
) => d3.Selection<d3.BaseType , any, any, any>;

export type CreateEdgePaths = (
  selection: d3.Selection<SVGGElement, string, any, any>,
  g: dagre.graphlib.Graph<any>,
  arrows: Arrows,
) => d3.Selection<d3.BaseType, any, any, any>;

export type Arrow = (
  parent: d3.Selection<any, any, any, any>,
  id: string,
  edge: dagre.Edge,
  type: string,
) => void;

export interface Arrows {
  [arrowStyleName: string]: Arrow;
}

export type Shape = <Datum, PElement extends d3.BaseType, PDatum>(
  parent: d3.Selection<any, Datum, PElement, PDatum>,
  bbox: any,
  node: dagre.Node,
) => d3.Selection<any, Datum, PElement, PDatum>;

export interface Shapes {
 [shapeStyleName: string]: Shape;
}

export interface Render {
  // see https://dagrejs.github.io/project/dagre-d3/latest/demo/user-defined.html for example usage

  (selection: d3.Selection<any, any, any, any>, g: dagre.graphlib.Graph<any>): void;

  createNodes(): CreateNodes;
  createNodes(value: CreateNodes): Render;

  createClusters(): CreateClusters;
  createClusters(value: CreateClusters): Render;

  createEdgeLabels(): CreateEdgeLabels;
  createEdgeLabels(value: CreateEdgeLabels): Render;

  createEdgePaths(): CreateEdgePaths;
  createEdgePaths(value: CreateEdgePaths): Render;

  arrows(): Arrows;
  arrows(value: Arrows): Render;

  shapes(): Shapes;
  shapes(value: Shapes): Render;
}
