import cytoscape = require('cytoscape');
import cyCanvas = require('cytoscape-canvas');

cytoscape.use(cyCanvas);

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: { name: 'breadthfirst' },
    elements: [
        { data: { id: 'A' } },
        { data: { id: 'B' } },
        { data: { id: 'C' } },
        { data: { source: 'A', target: 'B' } },
        { data: { source: 'A', target: 'C' } },
    ],
});

// $ExpectType CanvasInstance
const layer = cy.cyCanvas();
// $ExpectType HTMLCanvasElement
const canvas = layer.getCanvas();
// $ExpectType CanvasRenderingContext2D | null
const ctx = canvas.getContext('2d');

layer.resetTransform(ctx!);
layer.clear(ctx!);

ctx?.fillRect(0, 0, 100, 100);

layer.setTransform(ctx!);
