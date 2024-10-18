import cytoscape = require("cytoscape");

declare const cytoscapeAvsdf: cytoscape.Ext;
export = cytoscapeAvsdf;
export as namespace cytoscapeAvsdf;

declare namespace cytoscapeAvsdf {
    /**
     * Options for the Adjacent Vertex with Smallest Degree First (AVSDF) layout
     * algorithm.
     * @see <a href='https://github.com/iVis-at-Bilkent/cytoscape.js-avsdf'>cytoscape-avsdf package Documentation</a>
     */
    interface AvsdfLayoutOptions extends cytoscape.BaseLayoutOptions {
        name: "avsdf";

        /**
         * number of ticks per frame; higher is faster but more jerky
         * @default 30
         */
        refresh?: number;

        /**
         * Whether to fit the network view after when done
         * @default true
         */
        fit?: boolean;

        /**
         * Padding on fit
         * @default 10
         */
        padding?: number;

        /**
         * Prevent the user grabbing nodes during the layout (usually with animate:true)
         * @default false
         */
        ungrabifyWhileSimulating?: boolean;

        /**
         * Type of layout animation. The option set is {'during', 'end', false}
         * @default 'end'
         */
        animate?: "end" | "during" | false;

        /**
         * easing of animation if enabled
         * @default undefined
         */
        animationEasing?: cytoscape.Css.TransitionTimingFunction;

        /**
         * Duration for animate:end
         * @default 500
         */
        animationDuration?: number;

        /**
         * How apart the nodes are
         * @default 60
         */
        nodeSeparation?: number;
    }
}
