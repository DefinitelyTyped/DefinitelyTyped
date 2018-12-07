// Type definitions for dagre-d3.core.js 0.4
// Project: https://github.com/cpettitt/dagre-d3
// Definitions by: Mark Wong Siang Kai <https://github.com/markwongsk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as d3 from "d3";
import * as dagre from "dagre";

export as namespace dagreD3;

export * from "dagre";
export const render: { new(): Render };
export const intersect: { [shapeName: string]: (node: dagre.Node, points: Array<{}>, point: any) => void };

declare module "dagre" {
    namespace graphlib {
        // coupled with dagre.d.ts' Graph
        // a lot of these methods come from graphlib.core.js
        interface Graph {
            graph(): Graph;
            height: number;
            predecessors(id: string): string[];
            successors(id: string): string[];
            // see source of http://cpettitt.github.io/project/dagre-d3/latest/demo/interactive-demo.html
            transition?(selection: d3.Selection<any>): d3.Transition<any>;
            width: number;
        }
    }
}

export interface Render {
    // see http://cpettitt.github.io/project/dagre-d3/latest/demo/user-defined.html for example usage
    arrows(): { [arrowStyleName: string]: (parent: d3.Selection<any>, id: string, edge: dagre.Edge, type: string) => void };
    (selection: d3.Selection<any>, g: dagre.graphlib.Graph): void;
    shapes(): { [shapeStyleName: string]: (parent: d3.Selection<any>, bbox: any, node: dagre.Node) => void };
}
