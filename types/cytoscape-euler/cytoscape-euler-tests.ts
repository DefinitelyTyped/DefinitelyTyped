import cytoscape = require('cytoscape');
import euler = require('cytoscape-euler');

cytoscape.use(euler);

const eulerLayoutNoOptions: euler.EulerLayoutOptions = {
    name: 'euler',
};

const eulerLayoutAllOptions: euler.EulerLayoutOptions = {
    name: 'euler',
    springLength: () => 100,
    springCoeff: () => 0.5,
    mass: () => 12,
    gravity: -9.8,
    pull: 0.1,
    theta: 0.5,
    dragCoeff: 0.05,
    movementThreshold: 12,
    timeStep: 5,
    refresh: 10,
    animate: 'end',
    animationDuration: 1000,
    animationEasing: 'ease',
    maxIterations: 12,
    maxSimulationTime: 5000,
    ungrabifyWhileSimulating: true,
    fit: false,
    padding: 12,
    boundingBox: { x1: 12, y1: 30, w: 500, h: 400 },
    randomize: true,
};

const eulerLayoutx2y2BoundingBox: euler.EulerLayoutOptions = {
    name: 'euler',
    boundingBox: { x1: 12, y1: 30, x2: 500, y2: 400 },
};

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: eulerLayoutNoOptions,
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
        { data: { id: 'C' } },
        { data: { source: 'A', target: 'B' } },
        { data: { source: 'A', target: 'C' } },
    ],
});

cy.layout(eulerLayoutAllOptions);
cy.layout(eulerLayoutx2y2BoundingBox);
