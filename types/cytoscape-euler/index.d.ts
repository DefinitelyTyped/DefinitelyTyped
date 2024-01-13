import cytoscape = require("cytoscape");

declare const cytoscapeEuler: cytoscape.Ext;
export = cytoscapeEuler;
export as namespace cytoscapeEuler;

declare namespace cytoscapeEuler {
    /**
     * The layout options for the Cytoscape Euler layout.
     * @see {@link https://github.com/cytoscape/cytoscape.js-euler}
     */
    interface EulerLayoutOptions extends cytoscape.BaseLayoutOptions {
        name: "euler";

        /**
         * The ideal length of a spring
         * - This acts as a hint for the edge length
         * - The edge length can be longer or shorter if the forces are set to extreme values
         *
         * @default 80
         */
        springLength?: (_edge: cytoscape.EdgeSingular) => number;

        /**
         * Hooke's law coefficient
         * - The value ranges on [0, 1]
         * - Lower values give looser springs
         * - Higher values give tighter springs
         * @default 0.0008
         */
        springCoeff?: (_edge: cytoscape.EdgeSingular) => number;

        /**
         * The mass of the node in the physics simulation
         * - The mass affects the gravity node repulsion/attraction
         * @default 4
         */
        mass?: (_node: cytoscape.NodeSingular) => number;

        /**
         * Coulomb's law coefficient
         * - Makes the nodes repel each other for negative values
         * - Makes the nodes attract each other for positive values
         * @default -1.2
         */
        gravity?: number;

        /**
         * A force that pulls nodes towards the origin (0, 0)
         * Higher values keep the components less spread out
         * @default 0.001
         */
        pull?: number;

        /**
         * Theta coefficient from Barnes-Hut simulation
         * - Value ranges on [0, 1]
         * - Performance is better with smaller values
         * - Very small values may not create enough force to give a good result
         * @default 0.666
         */
        theta?: number;

        /**
         * Friction / drag coefficient to make the system stabilise over time
         * @default 0.02
         */
        dragCoeff?: number;

        /**
         * When the total of the squared position deltas is less than this value, the simulation ends
         * @default 1
         */
        movementThreshold?: number;

        /**
         * The amount of time passed per tick
         * - Larger values result in faster runtimes but might spread things out too far
         * - Smaller values produce more accurate results
         * @default 20
         */
        timeStep?: number;

        /**
         * The number of ticks per frame for animate:true
         * - A larger value reduces rendering cost but can be jerky
         * - A smaller value increases rendering cost but is smoother
         * @default 10
         */
        refresh?: number;

        /**
         * Whether to animate the layout
         * - true : Animate while the layout is running
         * - false : Just show the end result
         * - 'end' : Animate directly to the end result
         * @default true
         */
        animate?: boolean | "end";

        /**
         * Animation duration used for animate:'end'
         * @default undefined
         */
        animationDuration?: number;

        /**
         * Easing for animate:'end'
         * @default undefined
         */
        animationEasing?: cytoscape.Css.TransitionTimingFunction;

        /**
         * Maximum iterations before the layout will bail out
         * - A large value may allow for a better result
         * - A small value may make the layout end prematurely
         * - The layout may stop before this if it has settled
         * @default 1000
         */
        maxIterations?: number;
        /**
         * Maximum time (in ms) before the layout will bail out
         * - A large value may allow for a better result
         * - A small value may make the layout end prematurely
         * - The layout may stop before this if it has settled
         * @default 4000
         */
        maxSimulationTime?: number;

        /**
         * Prevent the user grabbing nodes during the layout (usually with animate:true)
         * @default false
         */
        ungrabifyWhileSimulating?: boolean;

        /**
         * Whether to fit the viewport to the repositioned graph
         * true : Fits at end of layout for animate:false or animate:'end'; fits on each frame for animate:true
         * @default true
         */
        fit?: boolean;

        /**
         * Padding in rendered co-ordinates around the layout
         * @default 30
         */
        padding?: number;

        /**
         * Constrain layout bounds with one of
         * - { x1, y1, x2, y2 }
         * - { x1, y1, w, h }
         * - undefined / null : Unconstrained
         * @default undefined
         */
        boundingBox?: cytoscape.BoundingBox12 | cytoscape.BoundingBoxWH | undefined | null;

        /**
         * Whether to randomize the initial positions of the nodes
         * true : Use random positions within the bounding box
         * false : Use the current node positions as the initial positions
         * @default false
         */
        randomize?: boolean;
    }
}
