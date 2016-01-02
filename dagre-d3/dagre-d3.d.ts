// Type definitions for dagre-d3.core.js
// Project: https://github.com/cpettitt/dagre-d3
// Definitions by: Mark Wong Siang Kai <https://github.com/markwongsk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../d3/d3.d.ts"/>
/// <reference path="../dagre/dagre.d.ts"/>

declare module Dagre {

    interface DagreD3Factory extends Dagre.DagreFactory {
        render: Render;
    }

    // coupled with dagre.d.ts' Graph
    // a lot of these methods come from graphlib.core.js
    interface Graph {
        graph(): Graph;
        height: number;
        predecessors(id: string): string[];
        successors(id: string): string[];
        width: number;
    }

    interface Render {
        new (): Render;
        (selection: d3.Selection<any>, g: Dagre.Graph): void;
    }
}

declare var dagreD3: Dagre.DagreD3Factory;
