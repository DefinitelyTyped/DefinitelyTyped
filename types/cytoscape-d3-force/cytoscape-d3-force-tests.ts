import cytoscape = require("cytoscape");
import d3Force = require("cytoscape-d3-force");

cytoscape.use(d3Force);

const d3ForceLayoutNoOptions: d3Force.D3ForceLayoutOptions = {
    name: "d3-force",
};

const d3ForceLayoutAllOptions: d3Force.D3ForceLayoutOptions = {
    name: "d3-force",
    animate: true,
    maxIterations: 100,
    maxSimulationTime: 20,
    ungrabifyWhileSimulating: false,
    fixedAfterDragging: false,
    fit: false,
    padding: 30,
    boundingBox: {
        x1: 0,
        y1: 0,
        w: 100,
        h: 100,
    },

    alpha: 1,
    alphaMin: 0.001,
    alphaDecay: 0.0228,
    alphaTarget: 0,
    velocityDecay: 0.4,
    collideRadius: (nodeData) => nodeData?.radius,
    collideStrength: 0.7,
    collideIterations: 1,
    linkId: (edgeData) => edgeData?.id,
    linkDistance: 30,
    linkStrength: 1,
    linkIterations: 1,
    manyBodyStrength: -30,
    manyBodyTheta: 0.9,
    manyBodyDistanceMin: 1,
    manyBodyDistanceMax: undefined,
    xStrength: 0.1,
    xX: (el) => {
        if (!el?.sentiment) return 0;

        if (el.sentiment === "positive") return 500;
        if (el.sentiment === "negative") return -500;
        return 0;
    },
    yStrength: 0.1,
    yY: (el) => 12,
    radialStrength: undefined,
    radialRadius: undefined,
    radialX: undefined,
    radialY: undefined,

    ready: function() {},
    stop: function() {},
    tick: function() {},

    randomize: false,

    infinite: false,
};

const cy = cytoscape({
    container: document.getElementById("cy"),
    layout: d3ForceLayoutNoOptions,
    elements: [
        { data: { id: "A" } },
        { data: { id: "B" } },
        { data: { id: "C" } },
        { data: { source: "A", target: "B" } },
        { data: { source: "A", target: "C" } },
    ],
});

cy.layout(d3ForceLayoutAllOptions);
