import cytoscape = require("cytoscape");
declare const cytoscapeD3Force: cytoscape.Ext;
export = cytoscapeD3Force;
export as namespace cytoscapeD3Force;

declare namespace cytoscapeD3Force {
    /**
     * Options for layout algorithm using d3-force package.
     * @see <a href='https://github.com/shichuanpo/cytoscape.js-d3-force'>cytoscape-d3-force git</a>
     * @see <a href='https://d3js.org/d3-force'>d3-force package Documentation</a>
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
         * on every layout reposition of nodes; fit the viewport
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
         * sets the current alpha to the specified number in the range [0;1]
         * @default 1
         * @see <a href='https://d3js.org/d3-force/simulation#simulation_alpha'>d3-force simulation.alpha()</a>
         */
        alpha?: number;

        /**
         * sets the minimum alpha to the specified number in the range [0;1]
         * @default 0.001
         * @see <a href='https://d3js.org/d3-force/simulation#simulation_alphaMin'>d3-force simulation.alphaMin()</a>
         */
        alphaMin?: number;

        /**
         * sets the alpha decay rate to the specified number in the range [0;1]
         * @default 0.0228
         * @see <a href='https://d3js.org/d3-force/simulation#simulation_alphaDecay'>d3-force simulation.alphaDecay()</a>
         */
        alphaDecay?: number;

        /**
         * sets the target alpha to the specified number in the range [0;1]
         * @default 0
         * @see <a href='https://d3js.org/d3-force/simulation#simulation_alphaTarget'>d3-force simulation.alphaTarget()</a>
         */
        alphaTarget?: number;

        /**
         * sets the velocity decay factor to the specified number in the range [0;1]
         * @default 0.4
         * @see <a href='https://d3js.org/d3-force/simulation#simulation_velocityDecay'>d3-force simulation.velocityDecay()</a>
         */
        velocityDecay?: number;

        /**
         * sets the force strength to the specified number in the range [0;1]
         * @see <a href='https://d3js.org/d3-force/collide#forceCollide'>d3-force collide.radius()</a>
         */
        collideRadius?: number | ((node: any, i: number, nodes: any[]) => number);

        /**
         * sets the force strength to the specified number in the range [0;1]
         * @see <a href='https://d3js.org/d3-force/collide#forceCollide'>d3-force collide.strength()</a>
         */
        collideStrength?: number; // sets the force strength to the specified number in the range [0;1]
        collideIterations?: number; // sets the number of iterations per application to the specified number
        linkId?: (node: any, i: number, nodesData: any[]) => string | number; // sets the node id accessor to the specified function
        linkDistance?: number | ((link: any, i: number, links: any[]) => number); // sets the distance accessor to the specified number or function
        linkStrength?: number | ((link: any, i: number, links: any[]) => number); // sets the strength accessor to the specified number or function
        linkIterations?: number; // sets the number of iterations per application to the specified number
        manyBodyStrength?: number | ((node: any, i: number, nodes: any[]) => number); // sets the strength accessor to the specified number or function
        manyBodyTheta?: number ; // sets the Barnes–Hut approximation criterion to the specified number
        manyBodyDistanceMin?: number; // sets the minimum distance between nodes over which this force is considered
        manyBodyDistanceMax?: number; // sets the maximum distance between nodes over which this force is considered
        xStrength?: number | ((node: any, i: number, nodes: any[]) => number); // sets the strength accessor to the specified number or function
        xX?: number | ((node: any, i: number, nodes: any[]) => number); // sets the x-coordinate accessor to the specified number or function
        yStrength?:  number | ((node: any, i: number, nodes: any[]) => number); // sets the strength accessor to the specified number or function
        yY?:  number | ((node: any, i: number, nodes: any[]) => number); // sets the y-coordinate accessor to the specified number or function
        radialStrength?: number | ((node: any, i: number, nodes: any[]) => number); // sets the strength accessor to the specified number or function
        radialRadius?:number | ((node: any, i: number, nodes: any[]) => number); // sets the circle radius to the specified number or function
        radialX?: number | ((node: any, i: number, nodes: any[]) => number); // sets the x-coordinate of the circle center to the specified number
        radialY?: number | ((node: any, i: number, nodes: any[]) => number); // sets the y-coordinate of the circle center to the specified number
        
        /** 
         * Layout Event Callbacks
         **/ 

        // on layoutready event
        ready?: cytoscape.LayoutHandler;
        
        // on layoutstop event
        stop?: cytoscape.LayoutHandler; 
    
        // on every iteration
        tick?: (progress: number)=>void; 

        /**
         * Randomize the initial positions of the nodes (true) or use existing positions (false)
         * @default false
         *  */ 
        randomize?: boolean;

        /** 
         * Overrides all other options for a forces-all-the-time mode
         * @default false
         */
        infinite?: boolean;
    }
}