import cytoscape = require("cytoscape");

declare const cytoscapeKlay: cytoscape.Ext;
export = cytoscapeKlay;
export as namespace cytoscapeKlay;

declare namespace cytoscapeKlay {
    /**
     * Following descriptions taken from
     * http://layout.rtsys.informatik.uni-kiel.de:9444/Providedlayout.html?algorithm=de.cau.cs.kieler.klay.layered
     * @see <a href='https://github.com/cytoscape/cytoscape.js-klay'>cytoscape-klay package Documentation</a>
     */
    interface KlayLayoutOptions extends cytoscape.BaseLayoutOptions {
        name: "klay";
        /**
         * Boolean which changes whether label dimensions are included when calculating node dimensions
         * @default false
         */
        nodeDimensionsIncludeLabels?: boolean;

        /**
         * Whether to fit
         * @default true
         */
        fit?: boolean;

        /**
         * Padding on fit
         * @default 20
         */
        padding?: number;

        /**
         * Whether to transition the node positions
         * @default false
         */
        animate?: boolean;

        /**
         * Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final
         * positions
         * @default true
         */
        animateFilter?: (node: cytoscape.NodeSingular, i: number) => boolean;

        /**
         * Duration of animation in ms if enabled
         * @default 500
         */
        animationDuration?: number;

        /**
         * Easing of animation if enabled.  See [Transition Animation](https://js.cytoscape.org/#style/transition-animation)
         * for allowable values
         * @default undefined;
         */
        animationEasing?: cytoscape.Css.TransitionTimingFunction;

        /**
         * The main klay algorithm options.
         */
        klay?: KlayAlgorithmOptions;

        /**
         * Edges with a non-nil value are skipped when greedy edge cycle breaking is enabled
         */
        priority?: (edge: cytoscape.EdgeSingular) => any;
    }
    /**
     * Following descriptions taken from
     * http://layout.rtsys.informatik.uni-kiel.de:9444/Providedlayout.html?algorithm=de.cau.cs.kieler.klay.layered
     */
    interface KlayAlgorithmOptions {
        /**
         * Adds bend points even if an edge does not change direction.
         * @default false
         */
        addUnnecessaryBendpoints?: boolean;

        /**
         * The aimed aspect ratio of the drawing, that is the quotient of width by height
         * @default 1.6
         */
        aspectRatio?: number;

        /**
         * Minimal amount of space to be left to the border
         * @default 20
         */
        borderSpacing?: number;

        /**
         * Tries to further compact components (disconnected sub-graphs).
         * @default false
         */
        compactComponents?: boolean;

        /**
         * Strategy for crossing minimization.
         * LAYER_SWEEP The layer sweep algorithm iterates multiple times over the layers, trying to find node orderings
         *   that minimize the number of crossings. The algorithm uses randomization to increase the odds of finding a
         *   good result. To improve its results, consider increasing the Thoroughness option, which influences the
         *   number of iterations done. The Randomization seed also influences results.
         * INTERACTIVE Orders the nodes of each layer by comparing their positions before the layout algorithm was
         *   started. The idea is that the relative order of nodes as it was before layout was applied is not changed.
         *   This of course requires valid positions for all nodes to have been set on the input graph before calling
         *   the layout algorithm. The interactive layer sweep algorithm uses the Interactive Reference Point option to
         *   determine which reference point of nodes are used to compare positions.
         * @default 'LAYER_SWEEP'
         */
        crossingMinimization?: "LAYER_SWEEP" | "INTERACTIVE";

        /**
         * Strategy for cycle breaking. Cycle breaking looks for cycles in the graph and determines which edges to
         * reverse to break the cycles. Reversed edges will end up pointing to the opposite direction of regular
         * edges (that is, reversed edges will point left if edges usually point right).
         *  GREEDY This algorithm reverses edges greedily. The algorithm tries to avoid edges that have the Priority
         *    property set.
         *  INTERACTIVE The interactive algorithm tries to reverse edges that already pointed leftwards in the input
         *    graph. This requires node and port coordinates to have been set to sensible values.
         * @default 'GREEDY'
         */
        cycleBreaking?: "GREEDY" | "INTERACTIVE";

        /**
         * Overall direction of edges: horizontal (right / left) or vertical (down / up)
         * UNDEFINED, RIGHT, LEFT, DOWN, UP
         * @default 'UNDEFINED'
         */
        direction?: "UNDEFINED" | "RIGHT" | "LEFT" | "DOWN" | "UP";

        /**
         * Defines how edges are routed (POLYLINE, ORTHOGONAL, SPLINES)
         * @default 'ORTHOGONAL'
         */
        edgeRouting?: "ORTHOGONAL" | "POLYLINE" | "SPLINES";

        /**
         * Factor by which the object spacing is multiplied to arrive at the minimal spacing between edges.
         * @default 0.5
         */
        edgeSpacingFactor?: number;

        /**
         * Whether feedback edges should be highlighted by routing around the nodes.
         * @default false
         */
        feedbackEdges?: boolean;

        /**
         * Tells the BK node placer to use a certain alignment instead of taking the optimal result.  This option should
         * usually be left alone.
         * - NONE Chooses the smallest layout from the four possible candidates.
         * - LEFTUP Chooses the left-up candidate from the four possible candidates.
         * - RIGHTUP Chooses the right-up candidate from the four possible candidates.
         * - LEFTDOWN Chooses the left-down candidate from the four possible candidates.
         * - RIGHTDOWN Chooses the right-down candidate from the four possible candidates.
         * - BALANCED Creates a balanced layout from the four possible candidates.
         * @default 'NONE'
         */
        fixedAlignment?: "NONE" | "LEFTUP" | "RIGHTUP" | "LEFTDOWN" | "RIGHTDOWN" | "BALANCED";

        /**
         * Factor by which the usual spacing is multiplied to determine the in-layer spacing between objects.
         * @default 1.0
         */
        inLayerSpacingFactor?: number;

        /**
         * Whether the selected layouter should consider the full hierarchy
         * @default false
         */
        layoutHierarchy?: boolean;

        /**
         * Dampens the movement of nodes to keep the diagram from getting too large.
         * @default 0.3
         */
        linearSegmentsDeflectionDampening?: number;

        // Edges that have no ports are merged so they touch the connected nodes at the same points.
        // @default false
        mergeEdges?: boolean;

        // If hierarchical layout is active, hierarchy-crossing edges use as few hierarchical ports as possible.
        // @default true
        mergeHierarchyCrossingEdges?: boolean;

        /**
         * Strategy for node layering.
         * - NETWORK_SIMPLEX This algorithm tries to minimize the length of edges. This is the most computationally
         *   intensive algorithm. The number of iterations after which it aborts if it hasn't found a result yet can be
         *   set with the Maximal Iterations option.
         * - LONGEST_PATH A very simple algorithm that distributes nodes along their longest path to a sink node.
         * - INTERACTIVE Distributes the nodes into layers by comparing their positions before the layout algorithm was
         *     started. The idea is that the relative horizontal order of nodes as it was before layout was applied is
         *     not changed. This of course requires valid positions for all nodes to have been set on the input graph
         *     before calling the layout algorithm. The interactive node layering algorithm uses the Interactive
         *     Reference Point option to determine which reference point of nodes are used to compare positions.
         * @default NETWORK_SIMPLEX
         */
        nodeLayering?: "NETWORK_SIMPLEX" | "LONGEST_PATH" | "INTERACTIVE";

        /**
         * Strategy for Node Placement
         * - BRANDES_KOEPF Minimizes the number of edge bends at the expense of diagram size: diagrams drawn with this
         *   algorithm are usually higher than diagrams drawn with other algorithms.
         * - LINEAR_SEGMENTS Computes a balanced placement.
         * - INTERACTIVE Tries to keep the preset y coordinates of nodes from the original layout. For dummy nodes, a
         *   guess is made to infer their coordinates. Requires the other interactive phase implementations to have run
         *   as well.
         * - SIMPLE Minimizes the area at the expense of... well, pretty much everything else.
         * @default 'BRANDES_KOEPF'
         */
        nodePlacement?: "BRANDES_KOEPF" | "LINEAR_SEGMENTS" | "INTERACTIVE" | "SIMPLE";

        /**
         * Seed used for pseudo-random number generators to control the layout algorithm; 0 means a new seed is generated
         * @default 1
         */
        randomizationSeed?: number;

        /**
         * Whether a self-loop is routed around or inside its node.
         * @default false
         */
        routeSelfLoopInside?: boolean;

        /**
         * Whether each connected component should be processed separately
         * @default true
         */
        separateConnectedComponents?: boolean;

        /**
         * Overall setting for the minimal amount of space to be left between objects
         * @default 20
         */
        spacing?: number;

        /**
         * How much effort should be spent to produce a nice layout.
         * @default 7
         */
        thoroughness?: number;
    }
}
