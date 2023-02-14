import cytoscape = require('cytoscape');

import fcose = require('cytoscape-fcose');
cytoscape.use(fcose);

const fcoseLayout: fcose.FcoseLayoutOptions = {
    name: 'fcose',
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
    tilingPaddingVertical: 1,
    tilingPaddingHorizontal: 1,
    gravity: 1,
    gravityRangeCompound: 0,
    gravityCompound: 1,
    gravityRange: 1,
    initialEnergyOnIncremental: 1,

    fixedNodeConstraint: [{nodeId: 'n1', position: {x: 100, y: 200}}],
    alignmentConstraint: {vertical: [['n1', 'n2']], horizontal: [['n2', 'n4']]},
    relativePlacementConstraint: [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}],

    ready: () => {},
    stop: () => {},
};

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: fcoseLayout,
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
        { data: { id: 'C' } },
        { data: { source: 'A', target: 'B' } },
        { data: { source: 'A', target: 'C' } },
    ],
});
