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

export * from "dagre";
export const render: { new(): Render };
export const intersect: { [shapeName: string]: (node: dagre.Node, points: Array<{}>, point: any) => void };

export interface Render {
  // see https://dagrejs.github.io/project/dagre-d3/latest/demo/user-defined.html for example usage

  (selection: d3.Selection<any, any, any, any>, g: graphlib.Graph): void;

  arrows(): { [arrowStyleName: string]: (parent: d3.Selection<any, any, any, any>, id: string, edge: dagre.Edge, type: string) => void };
  shapes(): { [shapeStyleName: string]: (parent: d3.Selection<any, any, any, any>, bbox: any, node: dagre.Node) => void };
}
