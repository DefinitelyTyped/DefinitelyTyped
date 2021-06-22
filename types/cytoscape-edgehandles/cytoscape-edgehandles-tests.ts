import edgehandles = require('cytoscape-edgehandles');
import cytoscape = require('cytoscape');

const cy = cytoscape();
cytoscape.use(edgehandles.ext);

const api = cy.edgehandles();
api.destroy();
