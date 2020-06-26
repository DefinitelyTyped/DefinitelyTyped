// Type definitions for cytoscape-edgehandles 3.6
// Project: https://github.com/cytoscape/cytoscape.js-edgehandles
// Definitions by: o-su <https://github.com/o-su>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import cy = require('cytoscape');

export const ext: cy.Ext;

declare module 'cytoscape' {
    interface Core {
        edgehandles: (options?: EdgeHandlesOptions) => EdgeHandlesApi;
    }

    interface EdgeHandlesOptions {
        preview?: boolean; // whether to show added edges preview before releasing selection
        hoverDelay?: number; // time spent hovering over a target node before it is considered selected
        handleNodes?: string; // selector/filter function for whether edges can be made from a given node
        snap?: boolean; // when enabled, the edge can be drawn by just moving close to a target node
        snapThreshold?: number; // the target node must be less than or equal to this many pixels away from the cursor/finger
        snapFrequency?: number; // the number of times per second (Hz) that snap checks done (lower is less expensive)
        noEdgeEventsInDraw?: boolean; // set events:no to edges during draws, prevents mouseouts on compounds
        disableBrowserGestures?: boolean; // during an edge drawing gesture, disable browser gestures such as two-finger trackpad swipe and pinch-to-zoom
        handlePosition?: (node: NodeSingular) => string; // sets the position of the handle in the format of "X-AXIS Y-AXIS" such as "left top", "middle top"
        handleInDrawMode?: boolean; // whether to show the handle in draw mode
        // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them, returning null/undefined means an edge can't be added between the two nodes
        edgeType?: (sourceNode: NodeSingular, targetNode: NodeSingular) => string | undefined;
        loopAllowed?: (node: NodeSingular) => boolean; // for the specified node, return whether edges from itself to itself are allowed
        nodeLoopOffset?: number; // offset for edgeType: 'node' loops
        // for edges between the specified source and target, return element object to be passed to cy.add() for intermediary node
        nodeParams?: (sourceNode: NodeSingular, targetNode: NodeSingular) => any;
        edgeParams?: (sourceNode: NodeSingular, targetNode: NodeSingular, i: number) => any;
        ghostEdgeParams?: () => any; // return element object to be passed to cy.add() for the ghost edge
        show?: (sourceNode: NodeSingular) => void; // fired when handle is shown
        hide?: (sourceNode: NodeSingular) => void; // fired when the handle is hidden
        start?: (sourceNode: NodeSingular) => void; // fired when edgehandles interaction starts (drag on handle)
        complete?: (sourceNode: NodeSingular, targetNode: NodeSingular, addedEles: EdgeCollection) => void; // fired when edgehandles is done and elements are added
        stop?: (sourceNode: NodeSingular) => void; // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
        cancel?: (sourceNode: NodeSingular, cancelledTargets: any) => void; // fired when edgehandles are cancelled (incomplete gesture)
        hoverover?: (sourceNode: NodeSingular, targetNode: NodeSingular) => void; // fired when a target is hovered
        hoverout?: (sourceNode: NodeSingular, targetNode: NodeSingular) => void; // fired when a target isn't hovered anymore
        previewon?: (sourceNode: NodeSingular, targetNode: NodeSingular, previewEles: EdgeCollection) => void; // fired when preview is shown
        previewoff?: (sourceNode: NodeSingular, targetNode: NodeSingular, previewEles: EdgeCollection) => void; // fired when preview is hidden
        drawon?: () => void; // fired when draw mode enabled
        drawoff?: () => void; // fired when draw mode disabled
    }

    interface EdgeHandlesApi {
        start: (sourceNode: string) => void; // manually start the gesture (as if the handle were already held)
        stop: () => void; // manually completes or cancels the gesture
        hide: () => void; // remove the handle node from the graph
        disable: () => void; // disables edgehandles behaviour
        enable: () => void; // enables edgehandles behaviour
        enableDrawMode: () => void; // turn on draw mode (the entire node body acts like the handle)
        disableDrawMode: () => void; // turn off draw mode
        destroy: () => void;
    }
}
