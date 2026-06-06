import cytoscape = require("cytoscape");

import fcose = require("cytoscape-fcose");
cytoscape.use(fcose);

const fcoseLayout: fcose.FcoseLayoutOptions = {
    name: "fcose",
    quality: "default",
    randomize: true,
    animate: true,
    animationDuration: 1,
    animationEasing: "ease-out",
    fit: true,
    padding: 1,
    nodeDimensionsIncludeLabels: true,
    uniformNodeDimensions: true,
    packComponents: true,
    step: "all",

    samplingType: true,
    sampleSize: 1,
    nodeSeparation: 1,
    piTol: 1,

    nodeRepulsion: 1,
    idealEdgeLength: (edge) => 32,
    edgeElasticity: (edge) => 32,
    nestingFactor: 0,
    numIter: 1,
    tile: true,
    tilingCompareBy: (nodeId1: string, nodeId2: string) => nodeId1.localeCompare(nodeId2),
    tilingPaddingVertical: 1,
    tilingPaddingHorizontal: 1,
    gravity: 1,
    gravityRangeCompound: 0,
    gravityCompound: 1,
    gravityRange: 1,
    initialEnergyOnIncremental: 1,

    fixedNodeConstraint: [{ nodeId: "n1", position: { x: 100, y: 200 } }],
    alignmentConstraint: { vertical: [["n1", "n2", "n3"], ["n4", "n5"]], horizontal: [["n2", "n4"]] },
    relativePlacementConstraint: [{ top: "n1", bottom: "n2", gap: 100 }, { left: "n3", right: "n4" }],

    ready: () => {},
    stop: () => {},
};

// Some layout parameters are node- or edge-specific and can be specified as either a function or a constant.
// Type-check both approaches:
const objectSpecificsAsFunctions: Partial<fcose.FcoseLayoutOptions> = {
    nodeRepulsion: node => 4500,
    idealEdgeLength: edge => 50,
    edgeElasticity: edge => 0.45,
};
const objectSpecificsAsConstants: Partial<fcose.FcoseLayoutOptions> = {
    nodeRepulsion: 4500,
    idealEdgeLength: 50,
    edgeElasticity: 0.45,
};

const cy = cytoscape({
    container: document.getElementById("cy"),
    layout: fcoseLayout,
    elements: [
        { data: { id: "A" } },
        { data: { id: "B" } },
        { data: { id: "C" } },
        { data: { source: "A", target: "B" } },
        { data: { source: "A", target: "C" } },
    ],
});

const verticalOnly: fcose.FcoseLayoutOptions = {
    name: "fcose",
    alignmentConstraint: { vertical: [["n1", "n2", "n3"], ["n4", "n5"]] },
};
cy.layout(verticalOnly);

const horizontalOnly: fcose.FcoseLayoutOptions = {
    name: "fcose",
    alignmentConstraint: { horizontal: [["n2", "n4"]] },
};
cy.layout(horizontalOnly);
