// Type definitions for cytoscape-dagre 2.3
// Project: https://github.com/cytoscape/cytoscape.js-dagre
// Definitions by: Felix Barczewicz <https://github.com/DieserFelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import cytoscape = require('cytoscape');

declare const cytoscapeDagre: cytoscape.Ext;

export = cytoscapeDagre;
export as namespace cytoscapeDagre;

declare namespace cytoscapeDagre {
    // function( edge ){ return 1; }
    type EdgeAssessmentFunction = (edge: cytoscape.EdgeSingular) => number;

    // function( node, i ){ return true; },
    type AnimationFilterFunction = (node: cytoscape.NodeSingular, i: number) => boolean;

    // function( node, pos ){ return pos; }
    type TransformFunction = (node: cytoscape.NodeSingular, pos: cytoscape.Position) => cytoscape.Position;

    interface DagreLayoutOptions extends cytoscape.ShapedLayoutOptions {
        name: 'dagre';

        /**
         *  the separation between adjacent nodes in the same rank, default: 50
         */
        nodeSep?: number | undefined;
        /**
         * the separation between adjacent edges in the same rank, default: 10
         */
        edgeSep?: number | undefined;
        /**
         * the separation between each rank in the layout, default: 50
         */
        rankSep?: number | undefined;
        /**
         *  'TB' for top to bottom flow, 'LR' for left to right, default: 'TB'
         */
        rankDir?: 'TB' | 'LR' | undefined;
        /**
         * Type of algorithm to assign a rank to each node in the input graph.
         * Possible values: 'network-simplex', 'tight-tree', or 'longest-path'.
         * default: 'network-simplex'
         */
        ranker?: 'network-simplex' | 'tight-tree' | 'longest-path' | undefined;
        /**
         * number of ranks to keep between the source and target of the edge, default: 1 for all edges
         */
        minLen?: EdgeAssessmentFunction | undefined;
        /**
         * higher weight edges are generally made shorter and straighter than lower weight edges,
         * default: 1 for all edges
         */
        edgeWeight?: EdgeAssessmentFunction | undefined;
        /**
         * whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
         */
        animateFilter?: AnimationFilterFunction | undefined;
        /**
         * a function that applies a transform to the final node position
         */
        transform?: TransformFunction | undefined;
    }
}
