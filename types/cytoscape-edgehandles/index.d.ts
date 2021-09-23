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
        preview?: boolean | undefined; // whether to show added edges preview before releasing selection
        hoverDelay?: number | undefined; // time spent hovering over a target node before it is considered selected
        handleNodes?: string | undefined; // selector/filter function for whether edges can be made from a given node
        snap?: boolean | undefined; // when enabled, the edge can be drawn by just moving close to a target node
        snapThreshold?: number | undefined; // the target node must be less than or equal to this many pixels away from the cursor/finger
        snapFrequency?: number | undefined; // the number of times per second (Hz) that snap checks done (lower is less expensive)
        noEdgeEventsInDraw?: boolean | undefined; // set events:no to edges during draws, prevents mouseouts on compounds
        disableBrowserGestures?: boolean | undefined; // during an edge drawing gesture, disable browser gestures such as two-finger trackpad swipe and pinch-to-zoom
        handlePosition?: ((node: NodeSingular) => string) | undefined; // sets the position of the handle in the format of "X-AXIS Y-AXIS" such as "left top", "middle top"
        handleInDrawMode?: boolean | undefined; // whether to show the handle in draw mode
        // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them, returning null/undefined means an edge can't be added between the two nodes
        edgeType?: ((sourceNode: NodeSingular, targetNode: NodeSingular) => string | undefined) | undefined;
        loopAllowed?: ((node: NodeSingular) => boolean) | undefined; // for the specified node, return whether edges from itself to itself are allowed
        nodeLoopOffset?: number | undefined; // offset for edgeType: 'node' loops
        // for edges between the specified source and target, return element object to be passed to cy.add() for intermediary node
        nodeParams?: ((sourceNode: NodeSingular, targetNode: NodeSingular) => any) | undefined;
        edgeParams?: ((sourceNode: NodeSingular, targetNode: NodeSingular, i: number) => any) | undefined;
        ghostEdgeParams?: (() => any) | undefined; // return element object to be passed to cy.add() for the ghost edge
        show?: ((sourceNode: NodeSingular) => void) | undefined; // fired when handle is shown
        hide?: ((sourceNode: NodeSingular) => void) | undefined; // fired when the handle is hidden
        start?: ((sourceNode: NodeSingular) => void) | undefined; // fired when edgehandles interaction starts (drag on handle)
        complete?: ((sourceNode: NodeSingular, targetNode: NodeSingular, addedEles: EdgeCollection) => void) | undefined; // fired when edgehandles is done and elements are added
        stop?: ((sourceNode: NodeSingular) => void) | undefined; // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
        cancel?: ((sourceNode: NodeSingular, cancelledTargets: any) => void) | undefined; // fired when edgehandles are cancelled (incomplete gesture)
        hoverover?: ((sourceNode: NodeSingular, targetNode: NodeSingular) => void) | undefined; // fired when a target is hovered
        hoverout?: ((sourceNode: NodeSingular, targetNode: NodeSingular) => void) | undefined; // fired when a target isn't hovered anymore
        previewon?: ((sourceNode: NodeSingular, targetNode: NodeSingular, previewEles: EdgeCollection) => void) | undefined; // fired when preview is shown
        previewoff?: ((sourceNode: NodeSingular, targetNode: NodeSingular, previewEles: EdgeCollection) => void) | undefined; // fired when preview is hidden
        drawon?: (() => void) | undefined; // fired when draw mode enabled
        drawoff?: (() => void) | undefined; // fired when draw mode disabled
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
