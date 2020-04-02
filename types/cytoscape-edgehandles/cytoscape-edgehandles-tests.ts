import edgehandles from 'cytoscape-edgehandles';
import cytoscape from 'cytoscape';

const cy = cytoscape();
cytoscape.use(edgehandles.ext);

const api = cy.edgehandles();
api.destroy();
