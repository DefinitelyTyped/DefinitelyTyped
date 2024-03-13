import cytoscape = require("cytoscape");

declare const cytoscapeFcose: cytoscape.Ext;

export = cytoscapeFcose;
export as namespace cytoscapeFcose;

declare namespace cytoscapeFcose {
    interface FcoseFixedNodeConstraint {
        nodeId: string;
        position: cytoscape.Position;
    }

    interface FcoseAlignmentConstraint {
        vertical?: string[][];
        horizontal?: string[][];
    }

    interface FcoseRelativeVerticalPlacementConstraint {
        top: string;
        bottom: string;
        gap?: number;
    }

    interface FcoseRelativeHorizontalPlacementConstraint {
        left: string;
        right: string;
        gap?: number;
    }

    type FcoseRelativePlacementConstraint =
        | FcoseRelativeVerticalPlacementConstraint
        | FcoseRelativeHorizontalPlacementConstraint;

    interface FcoseLayoutOptions extends cytoscape.BaseLayoutOptions {
        name: "fcose";

        // 'draft', 'default' or 'proof'
        // - "draft" only applies spectral layout
        // - "default" improves the quality with incremental layout (fast cooling rate)
        // - "proof" improves the quality with incremental layout (slow cooling rate)
        quality?: "default" | "draft" | "proof";
        // Use random node positions at beginning of layout
        // if this is set to false, then quality option must be "proof"
        randomize?: boolean;
        // Whether or not to animate the layout
        animate?: boolean;
        // Duration of animation in ms, if enabled
        animationDuration?: number;
        // Easing of animation, if enabled
        animationEasing?: "ease-out" | undefined;
        // Fit the viewport to the repositioned nodes
        fit?: boolean;
        // Padding around layout
        padding?: number;
        // Whether to include labels in node dimensions. Valid in "proof" quality
        nodeDimensionsIncludeLabels?: boolean;
        // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
        uniformNodeDimensions?: boolean;
        // Whether to pack disconnected components - cytoscape-layout-utilities extension should be registered and initialized
        packComponents?: boolean;
        // Layout step - all, transformed, enforced, cose - for debug purpose only
        step?: "all" | "transformed" | "enforced" | "cose";

        /* spectral layout options */

        // False for random, true for greedy sampling
        samplingType?: boolean;
        // Sample size to construct distance matrix
        sampleSize?: number;
        // Separation amount between nodes
        nodeSeparation?: number;
        // Power iteration tolerance
        piTol?: number;

        /* incremental layout options */

        // Node repulsion (non overlapping) multiplier
        nodeRepulsion?: ((node: any) => number) | number;
        // Ideal edge (non nested) length
        idealEdgeLength?: ((edge: any) => number) | number;
        // Divisor to compute edge forces
        edgeElasticity?: ((edge: any) => number) | number;
        // Nesting factor (multiplier) to compute ideal edge length for nested edges
        nestingFactor?: number;
        // Maximum number of iterations to perform - this is a suggested value and might be adjusted by the algorithm as required
        numIter?: number;
        // For enabling tiling
        tile?: boolean;
        // The comparison function to be used while sorting nodes during tiling operation.
        // Takes the ids of 2 nodes that will be compared as a parameter and the default tiling operation is performed when this option is not set.
        // It works similar to ``compareFunction`` parameter of ``Array.prototype.sort()``
        // If node1 is less then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a negative value
        // If node1 is greater then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a positive value
        // If node1 is equal to node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return 0
        tilingCompareBy?: (nodeId1: string, nodeId2: string) => number;
        // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
        tilingPaddingVertical?: number;
        // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
        tilingPaddingHorizontal?: number;
        // Gravity force (constant)
        gravity?: number;
        // Gravity range (constant) for compounds
        gravityRangeCompound?: number;
        // Gravity force (constant) for compounds
        gravityCompound?: number;
        // Gravity range (constant)
        gravityRange?: number;
        // Initial cooling factor for incremental layout
        initialEnergyOnIncremental?: number;

        /* constraint options */

        // Fix desired nodes to predefined positions
        // [{nodeId: 'n1', position: {x: 100, y: 200}}, {...}]
        fixedNodeConstraint?: FcoseFixedNodeConstraint[];
        // Align desired nodes in vertical/horizontal direction
        // {vertical: [['n1', 'n2'], [...]], horizontal: [['n2', 'n4'], [...]]}
        alignmentConstraint?: FcoseAlignmentConstraint;
        // Place two nodes relatively in vertical/horizontal direction
        // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}, {...}]
        relativePlacementConstraint?: FcoseRelativePlacementConstraint[];

        /* layout event callbacks */
        ready?: cytoscape.LayoutHandler | undefined;
        stop?: cytoscape.LayoutHandler | undefined;
    }
}
