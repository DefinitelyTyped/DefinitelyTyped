// Type definitions for dagre-d3.core.js v0.4.10
// Project: https://github.com/cpettitt/dagre-d3
// Definitions by: Mark Wong Siang Kai <https://github.com/markwongsk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="d3"/>
/// <reference types="dagre"/>
/// <reference types="jquery"/>

// TODO: When upgrading dagre-d3.core.js to a version using D3 version 4, please ensure that:
// (1) The version number in the first comment line of this file is updated
// (2) The package.json file in this folder is updated to reflect the correct
// dependencies on @types defintions for D3 version 4 modules.


declare namespace Dagre {

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
        // see source of http://cpettitt.github.io/project/dagre-d3/latest/demo/interactive-demo.html
        transition?(selection: d3.Selection<any>): d3.Transition<any>;
        width: number;
    }

    interface Render {
        // see http://cpettitt.github.io/project/dagre-d3/latest/demo/user-defined.html for example usage
        arrows (): { [arrowStyleName: string]: (parent: d3.Selection<any>, id: string, edge: Dagre.Edge, type: string) => void };
        new (): Render;
        (selection: d3.Selection<any>, g: Dagre.Graph): void;
    }
}

declare var dagreD3: Dagre.DagreD3Factory;

declare module "dagre-d3" {
    export = dagreD3;
}
