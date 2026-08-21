import cytoscape = require("cytoscape");
declare const cytoscapeD3Force: cytoscape.Ext;
export = cytoscapeD3Force;
export as namespace cytoscapeD3Force;

declare namespace cytoscapeD3Force {
    /**
     * Options for layout algorithm using package.
     * @see {@link https://github.com/shichuanpo/cytoscape.js-d3-force}
     * @see {@link https://d3js.org/d3-force}
     */
    interface D3ForceLayoutOptions extends cytoscape.BaseLayoutOptions {
        name: "d3-force";

        /**
         * Whether to show the layout as it's running; special 'end' value makes the layout animate like a discrete layout
         * @default true
         */
        animate?: boolean;

        /**
         * Max iterations before the layout will bail out
         * @default 0
         */
        maxIterations?: number; // max iterations before the layout will bail out

        /**
         * Max length in ms to run the layout
         * @default 0
         */
        maxSimulationTime?: number;

        /**
         * Disable drag and drop of nodes during simulation
         * @default false
         */

        ungrabifyWhileSimulating?: boolean; // so you can't drag nodes during layout
        /**
         * Fixed node after dragging
         * @default false
         */
        fixedAfterDragging?: boolean;

        /**
         * On every layout reposition of nodes; fit the viewport
         * @default false
         */
        fit?: boolean;

        /**
         * Padding around the simulation
         * @default 30
         */
        padding?: number;

        /**
         * Constrain layout bounds; { x1; y1; x2; y2 } or { x1; y1; w; h }
         */
        boundingBox?: cytoscape.BoundingBox12 | cytoscape.BoundingBoxWH;

        // D3 Force API Properties

        /**
         * Sets the current alpha to the specified number in the range [0;1]
         * @default 1
         * @see {@link https://d3js.org/d3-force/simulation#simulation_alpha}
         */
        alpha?: number;

        /**
         * Sets the minimum alpha to the specified number in the range [0;1]
         * @default 0.001
         * @see {@link https://d3js.org/d3-force/simulation#simulation_alphaMin}
         */
        alphaMin?: number;

        /**
         * Sets the alpha decay rate to the specified number in the range [0;1]
         * @default 0.0228
         * @see {@link https://d3js.org/d3-force/simulation#simulation_alphaDecay}
         */
        alphaDecay?: number;

        /**
         * Sets the target alpha to the specified number in the range [0;1]
         * @default 0
         * @see {@link https://d3js.org/d3-force/simulation#simulation_alphaTarget}
         */
        alphaTarget?: number;

        /**
         * Sets the velocity decay factor to the specified number in the range [0;1]
         * @default 0.4
         * @see {@link https://d3js.org/d3-force/simulation#simulation_velocityDecay}
         */
        velocityDecay?: number;

        /**
         * Sets the radius accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/collide#collide_radius}
         */
        collideRadius?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the force strength to the specified number in the range [0;1]
         * @see {@link https://d3js.org/d3-force/collide#collide_strength}
         */
        collideStrength?: number;

        /**
         * Sets the number of iterations per application to the specified number
         * @see {@link https://d3js.org/d3-force/collide#collide_iterations}
         * @default 1
         */
        collideIterations?: number;

        /**
         * Sets the node id accessor to the specified function
         * @see {@link https://d3js.org/d3-force/link#link_id}
         */
        linkId?: (node: any, i: number, nodesData: any[]) => string | number;

        /**
         * Sets the distance accessor to the specified number or function
         * @default 30
         * @see {@link https://d3js.org/d3-force/link#link_distance}
         */
        linkDistance?: number | ((link: any, i: number, links: any[]) => number);

        /**
         * Sets the strength accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/link#link_strength}
         */
        linkStrength?: number | ((link: any, i: number, links: any[]) => number);

        /**
         * Sets the number of iterations per application to the specified number
         * @default 1
         * @see {@link https://d3js.org/d3-force/link#link_iterations}
         */
        linkIterations?: number;

        /**
         * Sets the strength accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/many-body#manyBody_strength}
         */
        manyBodyStrength?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the Barnes–Hut approximation criterion to the specified number
         * @default 0.9
         * @see {@link https://d3js.org/d3-force/many-body#manyBody_theta}
         */
        manyBodyTheta?: number;

        /**
         * Sets the minimum distance between nodes over which this force is considered
         * @default 1
         * @see {@link https://d3js.org/d3-force/many-body#manyBody_distanceMin}
         */
        manyBodyDistanceMin?: number;

        /**
         * Sets the maximum distance between nodes over which this force is considered
         * @default Infinity
         * @see {@link https://d3js.org/d3-force/many-body#manyBody_distanceMax}
         */
        manyBodyDistanceMax?: number;

        /**
         * Sets the strength accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/position#x_strength}
         */
        xStrength?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the x-coordinate accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/position#x_x}
         */
        xX?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the strength accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/position#y_strength}
         */
        yStrength?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the y-coordinate accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/position#y_y}
         */
        yY?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the strength accessor to the specified number or function
         * @see {@link https://d3js.org/d3-force/position#radial_strength}
         */
        radialStrength?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the circle radius to the specified number or function
         * @see {@link https://d3js.org/d3-force/position#radial_radius}
         */
        radialRadius?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the x-coordinate of the circle center to the specified number
         * @see {@link https://d3js.org/d3-force/position#radial_x}
         */
        radialX?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Sets the y-coordinate of the circle center to the specified number
         * @see {@link https://d3js.org/d3-force/position#radial_y}
         */
        radialY?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * Layout Event Callbacks
         */

        // on layoutready event
        ready?: cytoscape.LayoutHandler;

        // on layoutstop event
        stop?: cytoscape.LayoutHandler;

        // on every iteration
        tick?: (progress: number) => void;

        /**
         * Randomize the initial positions of the nodes (true) or use existing positions (false)
         * @default false
         */
        randomize?: boolean;

        /**
         * Overrides all other options for a forces-all-the-time mode
         * @default false
         */
        infinite?: boolean;
    }
}
