import cytoscape = require("cytoscape");
import klay = require("cytoscape-klay");

cytoscape.use(klay);

const klayLayoutNoOptions: klay.KlayLayoutOptions = {
    name: "klay",
};

const klayLayoutAllOptions: klay.KlayLayoutOptions = {
    name: "klay",
    nodeDimensionsIncludeLabels: true,
    fit: false,
    padding: 12,
    animate: true,
    animateFilter: () => {
        return false;
    },
    animationDuration: 1000,
    animationEasing: "ease",
    priority: (): any => "1",
    klay: {
        addUnnecessaryBendpoints: true,
        aspectRatio: 3.2,
        borderSpacing: 40,
        compactComponents: true,
        crossingMinimization: "INTERACTIVE",
        cycleBreaking: "INTERACTIVE",
        direction: "RIGHT",
        edgeRouting: "POLYLINE",
        edgeSpacingFactor: 0.8,
        feedbackEdges: true,
        fixedAlignment: "BALANCED",
        inLayerSpacingFactor: 2.0,
        layoutHierarchy: true,
        linearSegmentsDeflectionDampening: 0.5,
        mergeEdges: true,
        mergeHierarchyCrossingEdges: false,
        nodeLayering: "LONGEST_PATH",
        nodePlacement: "LINEAR_SEGMENTS",
        randomizationSeed: 42,
        routeSelfLoopInside: true,
        separateConnectedComponents: false,
        spacing: 40,
        thoroughness: 9,
    },
};

const cy = cytoscape({
    container: document.getElementById("cy"),
    layout: klayLayoutNoOptions,
    elements: [
        { data: { id: "A" } },
        { data: { id: "B" } },
        { data: { id: "C" } },
        { data: { source: "A", target: "B" } },
        { data: { source: "A", target: "C" } },
    ],
});

cy.layout(klayLayoutAllOptions);
