import cytoscape = require('cytoscape');
import edgehandles = require('cytoscape-edgehandles');

cytoscape.use(edgehandles);

const cy = cytoscape({
    container: document.getElementById('cy'),
    layout: { name: 'breadthfirst' },
    elements: [{ data: { id: 'A' } }, { data: { id: 'B' } }, { data: { id: 'C' } }],
});

const eh = cy.edgehandles();
eh.enableDrawMode();
