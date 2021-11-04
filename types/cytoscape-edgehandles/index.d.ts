// Type definitions for cytoscape-edgehandles 4.0
// Project: https://github.com/cytoscape/cytoscape.js-edgehandles
// Definitions by: o-su <https://github.com/o-su>
//                 Felix Barczewicz <https://github.com/DieserFelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import cy = require('cytoscape');

declare const cytoscapeEdgehandles: cy.Ext;
export = cytoscapeEdgehandles;
export as namespace cytoscapeEdgehandles;

declare namespace cytoscapeEdgehandles {
    interface EdgeHandlesOptions {
        /**
         * Check, if the source and target node can be connected with each other.
         *
         * Default: Disable self loops
         */
        canConnect?: ((source: cytoscape.NodeSingular, target: cytoscape.NodeSingular) => boolean) | undefined;
        /**
         * for edges between the specified source and target
         * return element object to be passed to cy.add() for edge
         */
        edgeParams?:
            | ((source: cytoscape.NodeSingular, target: cytoscape.NodeSingular) => cytoscape.ElementDefinition)
            | undefined;
        /**
         * Time spent hovering over a target node before it is considered selected.
         *
         * Default: 150
         */
        hoverDelay?: number | undefined;
        /**
         * When enabled, the edge can be drawn by just moving close to a target node (can be confusing on compound graphs).
         *
         * Default: true
         */
        snap?: boolean | undefined;
        /**
         * The target node must be less than or equal to this many pixels away from the cursor/finger.
         *
         * Default: 50
         */
        snapThreshold?: number | undefined;
        /**
         * The number of times per second (Hz) that snap checks done (lower is less expensive).
         *
         * Default: 15
         */
        snapFrequency?: number | undefined;
        /**
         * Set events:no to edges during draws, prevents mouseouts on compounds.
         *
         * Default: true
         */
        noEdgeEventsInDraw?: boolean | undefined;
        /**
         * During an edge drawing gesture, disable browser gestures such as two-finger trackpad swipe and pinch-to-zoom.
         *
         * Default: true
         */
        disableBrowserGestures?: boolean | undefined;
    }

    interface EdgeHandlesInstance {
        /**
         * Manually start the gesture (as if the handle were already held)
         */
        start: (sourceNode: string) => void;
        /**
         * Manually completes or cancels the gesture
         */
        stop: () => void;
        /**
         * Remove the handle node from the graph
         */
        hide: () => void;
        /**
         * Disables edgehandles behaviour
         */
        disable: () => void;
        /**
         * Enables edgehandles behaviour
         */
        enable: () => void;
        /**
         * Turn on draw mode (the entire node body acts like the handle)
         */
        enableDrawMode: () => void;
        /**
         * Turn off draw mode
         */
        disableDrawMode: () => void;
        destroy: () => void;
    }
}

declare global {
    namespace cytoscape {
        interface Core {
            edgehandles: (
                options?: cytoscapeEdgehandles.EdgeHandlesOptions,
            ) => cytoscapeEdgehandles.EdgeHandlesInstance;
        }
    }
}
