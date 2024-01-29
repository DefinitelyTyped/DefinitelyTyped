import { BaseType, Selection, SelectionOrTransition, ValueFn } from "d3";
import * as dagre from "dagre";
import * as graphlib from "graphlib";

export as namespace dagreD3;

export { dagre as dagre, graphlib as graphlib };

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
    isSubgraph: (g: dagre.graphlib.Graph<any>, v: string) => boolean;

    edgeToId: (e: { v: string; w: string; name: string }) => string;

    applyStyle: <GElement extends BaseType, Datum>(
        dom: Selection<GElement, Datum, any, any>,
        styleFn: ValueFn<GElement, Datum, string | number | boolean | null>,
    ) => void;

    applyClass: <GElement extends BaseType, Datum>(
        dom: Selection<GElement, Datum, any, any>,
        classFn: ValueFn<GElement, Datum, string | number | boolean | null>,
        otherClasses: string,
    ) => void;

    applyTransition: <GElement extends BaseType, Datum, PElement extends BaseType, PDatum>(
        selection: Selection<GElement, Datum, PElement, PDatum>,
        g: dagre.graphlib.Graph<any>,
    ) => SelectionOrTransition<GElement, Datum, PElement, PDatum>;
};

export type CreateNodes = (
    selection: Selection<SVGGElement, string, any, any>,
    g: dagre.graphlib.Graph<any>,
    shapes: Shapes,
) => SelectionOrTransition<BaseType, any, any, any>;

export type CreateClusters = (
    selection: Selection<SVGGElement, string, any, any>,
    g: dagre.graphlib.Graph<any>,
) => SelectionOrTransition<BaseType, any, any, any>;

export type CreateEdgeLabels = (
    selection: Selection<SVGGElement, string, any, any>,
    g: dagre.graphlib.Graph<any>,
) => SelectionOrTransition<BaseType, any, any, any>;

export type CreateEdgePaths = (
    selection: Selection<SVGGElement, string, any, any>,
    g: dagre.graphlib.Graph<any>,
    arrows: Arrows,
) => SelectionOrTransition<BaseType, any, any, any>;

export type Arrow = (
    parent: Selection<any, any, any, any>,
    id: string,
    edge: dagre.Edge,
    type: string,
) => void;

export interface Arrows {
    [arrowStyleName: string]: Arrow;
}

export type Shape = (
    parent: Selection<any, string, any, any>,
    bbox: any,
    node: dagre.Node,
) => Selection<any, string, any, any>;

export interface Shapes {
    [shapeStyleName: string]: Shape;
}

export interface Render {
    // see https://dagrejs.github.io/project/dagre-d3/latest/demo/user-defined.html for example usage

    (selection: Selection<any, any, any, any>, g: dagre.graphlib.Graph<any>): void;

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
